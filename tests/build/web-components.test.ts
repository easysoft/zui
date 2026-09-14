import {execFile} from 'node:child_process';
import {promises as fs} from 'node:fs';
import Path from 'node:path';
import {promisify} from 'node:util';
import {JSDOM} from 'jsdom';
import {beforeAll, describe, expect, it} from 'vitest';

const run = promisify(execFile);
const projectRoot = Path.resolve(import.meta.dirname, '../..');
const output = Path.join(projectRoot, 'test-results/web-components/button');
const pagerOutput = Path.join(projectRoot, 'test-results/web-components/pager');

beforeAll(async () => {
    await run('pnpm', ['build', '--', '--lib=web-components~button', '--name=zui-webc-button', `--outDir=${output}`], {
        cwd: projectRoot,
        maxBuffer: 20 * 1024 * 1024,
    });
    await run('pnpm', ['build', '--', '--lib=web-components~pager', '--name=zui-webc-pager', `--outDir=${pagerOutput}`], {
        cwd: projectRoot,
        maxBuffer: 20 * 1024 * 1024,
    });
});

describe('custom element distribution', () => {
    it('includes the actual button rules in the component stylesheet', async () => {
        const css = await fs.readFile(Path.join(output, 'zui-webc-button.css'), 'utf8');
        expect(css).toMatch(/\.btn[\s,{.:]/);
        expect(css).toContain('zui-button');
    });

    it('provides explicit registration from the built script', async () => {
        const dom = new JSDOM('<!doctype html><zui-button text="Save"></zui-button>', {
            url: 'http://localhost/',
            runScripts: 'outside-only',
            pretendToBeVisual: true,
        });
        try {
            dom.window.eval(await fs.readFile(Path.join(output, 'zui-webc-button.js'), 'utf8'));
            const exports = (dom.window as unknown as {zui: {defineButton: () => void}}).zui;
            expect(dom.window.customElements.get('zui-button')).toBeUndefined();
            exports.defineButton();
            const element = dom.window.document.querySelector('zui-button') as HTMLElement & {ready: Promise<void>};
            await element.ready;
            expect(element.querySelector('button')?.textContent).toBe('Save');
        } finally {
            dom.window.close();
        }
    });

    it('mounts a vanilla-backed pager from its own built entry', async () => {
        const dom = new JSDOM('<!doctype html><zui-pager rec-total="60" rec-per-page="20"></zui-pager>', {
            url: 'http://localhost/',
            runScripts: 'outside-only',
            pretendToBeVisual: true,
        });
        try {
            dom.window.eval(await fs.readFile(Path.join(pagerOutput, 'zui-webc-pager.js'), 'utf8'));
            (dom.window as unknown as {zui: {definePager: () => void}}).zui.definePager();
            const element = dom.window.document.querySelector('zui-pager') as HTMLElement & {ready: Promise<void>};
            await element.ready;
            expect(element.querySelectorAll('button')).toHaveLength(3);
            expect(dom.window.customElements.get('zui-button')).toBeUndefined();
            const css = await fs.readFile(Path.join(pagerOutput, 'zui-webc-pager.css'), 'utf8');
            expect(css).toMatch(/\.pager[\s,{.:]/);
            expect(css).toMatch(/\.btn[\s,{.:]/);
        } finally {
            dom.window.close();
        }
    });
});
