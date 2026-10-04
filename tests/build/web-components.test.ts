import {execFile} from 'node:child_process';
import {promises as fs} from 'node:fs';
import Path from 'node:path';
import {promisify} from 'node:util';
import {JSDOM} from 'jsdom';
import {beforeAll, describe, expect, it} from 'vitest';

const run = promisify(execFile);
const projectRoot = Path.resolve(import.meta.dirname, '../..');
const output = Path.join(projectRoot, 'test-results/web-components/core');

beforeAll(async () => {
    await run('pnpm', ['build', '--lib=core', '--lib=button', '--lib=pager', '--lib=picker', '--name=zui-webc', `--out-dir=${output}`], {
        cwd: projectRoot,
        maxBuffer: 20 * 1024 * 1024,
    });
});

describe('custom element distribution', () => {
    it('preserves button styles when building Picker independently', async () => {
        const pickerOutput = Path.join(projectRoot, 'test-results/web-components/picker');
        await run('pnpm', ['build', '--lib=picker', '--name=zui-picker', `--out-dir=${pickerOutput}`], {
            cwd: projectRoot,
            maxBuffer: 20 * 1024 * 1024,
        });
        const css = await fs.readFile(Path.join(pickerOutput, 'zui-picker.css'), 'utf8');
        expect(css).toMatch(/\.picker[\s,{.:]/);
        expect(css).toMatch(/(?:^|[},])\.btn\s*[{,]/);
    });

    it('includes ordinary component styles', async () => {
        const css = await fs.readFile(Path.join(output, 'zui-webc.css'), 'utf8');
        for (const name of ['btn', 'pager', 'picker']) {
            expect(css).toMatch(new RegExp(`\\.${name}[\\s,{.:]`));
        }
    });

    it('lets consumers define custom elements without shipping component wrappers', async () => {
        const dom = new JSDOM('<!doctype html><app-counter count="2"></app-counter>', {
            url: 'http://localhost/',
            runScripts: 'outside-only',
            pretendToBeVisual: true,
        });
        try {
            dom.window.eval(await fs.readFile(Path.join(output, 'zui-webc.js'), 'utf8'));
            const api = (dom.window as unknown as {zui: typeof import('@zui/core') & Record<string, unknown>}).zui;
            expect(api.Pager).toBeTypeOf('function');
            expect(api.Picker).toBeTypeOf('function');
            for (const name of ['Button', 'Pager', 'Picker']) {
                expect(api[`Zui${name}Element`]).toBeUndefined();
                expect(api[`define${name}`]).toBeUndefined();
                expect(dom.window.customElements.get(`zui-${name.toLowerCase()}`)).toBeUndefined();
            }
            const CounterElement = api.defineWebComponent(({count}: {count: number}) => String(count), {
                tagName: 'app-counter',
                properties: {count: api.property.number('count', 0)},
            });
            expect(dom.window.customElements.get('app-counter')).toBe(CounterElement);
            const element = dom.window.document.querySelector('app-counter') as InstanceType<typeof CounterElement>;
            await element.ready;
            expect(element.textContent).toBe('2');
            element.count = 3;
            await Promise.resolve();
            expect(element.textContent).toBe('3');
            expect(element.getAttribute('count')).toBe('3');
        } finally {
            dom.window.close();
        }
    });
});
