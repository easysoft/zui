import {execFile} from 'node:child_process';
import {promises as fs} from 'node:fs';
import Path from 'node:path';
import {createRequire} from 'node:module';
import {promisify} from 'node:util';
import {JSDOM} from 'jsdom';
import {beforeAll, describe, expect, it} from 'vitest';

const run = promisify(execFile);
const projectRoot = Path.resolve(import.meta.dirname, '../..');
const output = Path.join(projectRoot, 'test-results/web-components/button');
const pagerOutput = Path.join(projectRoot, 'test-results/web-components/pager');
const pagerElementOutput = Path.join(projectRoot, 'test-results/web-components/pager-element');
const pickerOutput = Path.join(projectRoot, 'test-results/web-components/picker');

beforeAll(async () => {
    await run('pnpm', ['build', '--', '--lib=button', '--name=zui-webc-button', `--outDir=${output}`], {
        cwd: projectRoot,
        maxBuffer: 20 * 1024 * 1024,
    });
    await run('pnpm', ['build', '--', '--lib=pager', '--name=zui-webc-pager', `--outDir=${pagerOutput}`], {
        cwd: projectRoot,
        maxBuffer: 20 * 1024 * 1024,
    });
    await run('pnpm', ['build', '--', '--lib=pager~web-component', '--name=zui-pager-element', `--outDir=${pagerElementOutput}`], {
        cwd: projectRoot,
        maxBuffer: 20 * 1024 * 1024,
    });
    await run('pnpm', ['build', '--', '--lib=picker', '--name=zui-webc-picker', `--outDir=${pickerOutput}`], {
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

    it('automatically defines the pager from the ordinary Pager library build', async () => {
        const dom = new JSDOM('<!doctype html><zui-pager rec-total="60" rec-per-page="20"></zui-pager>', {
            url: 'http://localhost/',
            runScripts: 'outside-only',
            pretendToBeVisual: true,
        });
        try {
            dom.window.eval(await fs.readFile(Path.join(pagerOutput, 'zui-webc-pager.js'), 'utf8'));
            expect(dom.window.customElements.get('zui-pager')).toBeDefined();
            const element = dom.window.document.querySelector('zui-pager') as HTMLElement & {ready: Promise<void>};
            await element.ready;
            expect(element.querySelectorAll('button')).toHaveLength(3);
            expect(dom.window.customElements.get('zui-button')).toBeUndefined();
            const css = await fs.readFile(Path.join(pagerOutput, 'zui-webc-pager.css'), 'utf8');
            expect(css).toContain('zui-pager');
            expect(css).toContain('.zui-webc-mount');
            expect(css).toMatch(/\.pager[\s,{.:]/);
            expect(css).toMatch(/\.btn[\s,{.:]/);
        } finally {
            dom.window.close();
        }
    });

    it('resolves independent Pager entries and builds its standalone custom element', async () => {
        const resolve = createRequire(Path.join(projectRoot, 'lib/pager/package.json')).resolve;
        expect(resolve('@zui/pager/vanilla')).toBe(Path.join(projectRoot, 'lib/pager/src/vanilla/index.ts'));
        expect(resolve('@zui/pager/web-component')).toBe(Path.join(projectRoot, 'lib/pager/src/web-component/index.ts'));
        const dom = new JSDOM('<!doctype html><zui-pager rec-total="60" rec-per-page="20"></zui-pager>', {
            url: 'http://localhost/', runScripts: 'outside-only', pretendToBeVisual: true,
        });
        try {
            dom.window.eval(await fs.readFile(Path.join(pagerElementOutput, 'zui-pager-element.js'), 'utf8'));
            const element = dom.window.document.querySelector('zui-pager') as HTMLElement & {ready: Promise<void>};
            await element.ready;
            expect(element.querySelectorAll('button')).toHaveLength(3);
            const css = await fs.readFile(Path.join(pagerElementOutput, 'zui-pager-element.css'), 'utf8');
            expect(css).toContain('zui-pager');
            expect(css).toMatch(/\.pager[\s,{.:]/);
        } finally {
            dom.window.close();
        }
    });

    it('provides explicit Picker registration from its ordinary library build', async () => {
        const dom = new JSDOM('<!doctype html>', {url: 'http://localhost/', runScripts: 'outside-only'});
        try {
            dom.window.eval(await fs.readFile(Path.join(pickerOutput, 'zui-webc-picker.js'), 'utf8'));
            const exports = (dom.window as unknown as {zui: {definePicker: () => void; ZuiPickerElement: CustomElementConstructor}}).zui;
            expect(dom.window.customElements.get('zui-picker')).toBeUndefined();
            exports.definePicker();
            exports.definePicker();
            expect(dom.window.customElements.get('zui-picker')).toBe(exports.ZuiPickerElement);
            const css = await fs.readFile(Path.join(pickerOutput, 'zui-webc-picker.css'), 'utf8');
            expect(css).toContain('zui-picker');
            expect(css).toContain('.zui-webc-mount');
            expect(css).toMatch(/\.picker[\s,{.:]/);
        } finally {
            dom.window.close();
        }
    });
});
