import {execFile} from 'node:child_process';
import {promises as fs} from 'node:fs';
import Path from 'node:path';
import {tmpdir} from 'node:os';
import {promisify} from 'node:util';
import {JSDOM} from 'jsdom';
import {beforeAll, describe, expect, it} from 'vitest';
import ts from 'typescript';

const run = promisify(execFile);
const projectRoot = Path.resolve(import.meta.dirname, '../..');
const output = Path.join(projectRoot, 'test-results/web-components/button');
const pagerOutput = Path.join(projectRoot, 'test-results/web-components/pager');
const packageOutput = Path.join(projectRoot, 'test-results/web-components/package');

beforeAll(async () => {
    await run('pnpm', ['build', '--', '--lib=web-components~button', '--name=zui-webc-button', `--outDir=${output}`], {
        cwd: projectRoot,
        maxBuffer: 20 * 1024 * 1024,
    });
    await run('pnpm', ['build', '--', '--lib=web-components~pager', '--name=zui-webc-pager', `--outDir=${pagerOutput}`], {
        cwd: projectRoot,
        maxBuffer: 20 * 1024 * 1024,
    });
    await run('pnpm', ['build:web-components', '--', `--outDir=${packageOutput}`], {
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

    it('exports portable types that can be checked outside the workspace', async () => {
        const consumer = await fs.mkdtemp(Path.join(tmpdir(), 'zui-web-components-consumer-'));
        try {
            const installed = Path.join(consumer, 'node_modules/@zui/web-components');
            await fs.mkdir(Path.dirname(installed), {recursive: true});
            await fs.cp(packageOutput, installed, {recursive: true});
            const manifest = JSON.parse(await fs.readFile(Path.join(installed, 'package.json'), 'utf8'));
            const resolveFrom = [Path.join(projectRoot, 'node_modules'), Path.join(projectRoot, 'lib/core/node_modules')];
            for (const dependency of Object.keys(manifest.dependencies)) {
                let resolved: string | undefined;
                for (const directory of resolveFrom) {
                    try {
                        resolved = await fs.realpath(Path.join(directory, dependency));
                        break;
                    } catch (_error) {
                        // Some dependencies are installed in the core workspace only.
                    }
                }
                expect(resolved, dependency).toBeDefined();
                const link = Path.join(consumer, 'node_modules', dependency);
                await fs.mkdir(Path.dirname(link), {recursive: true});
                await fs.symlink(resolved!, link, 'dir');
            }
            const entry = Path.join(consumer, 'app.ts');
            await fs.writeFile(entry, `
                import {defineAll, ZuiPickerElement, type PickerChangeDetail} from '@zui/web-components/all';
                import {defineButton} from '@zui/web-components/button';
                defineAll(); defineButton();
                const picker: ZuiPickerElement = document.createElement('zui-picker');
                picker.items = [{text: 'Hao', value: 'hao'}];
                picker.value = 'hao';
                const detail: PickerChangeDetail = {value: picker.value, oldValue: ''};
                console.log(detail);
                // @ts-expect-error current values are strings, including multiple selections.
                picker.value = 1;
            `);
            const program = ts.createProgram([entry], {
                strict: true,
                noEmit: true,
                types: [],
                target: ts.ScriptTarget.ESNext,
                module: ts.ModuleKind.ESNext,
                moduleResolution: ts.ModuleResolutionKind.Bundler,
            });
            const errors = ts.getPreEmitDiagnostics(program).map(error => `${error.file?.fileName}: ${ts.flattenDiagnosticMessageText(error.messageText, '\n')}`);
            expect(errors).toEqual([]);
            for (const target of Object.values(manifest.exports) as (string | {types: string; import: string})[]) {
                for (const path of typeof target === 'string' ? [target] : Object.values(target)) {
                    expect((await fs.stat(Path.join(installed, path))).isFile()).toBe(true);
                }
            }
        } finally {
            await fs.rm(consumer, {recursive: true, force: true});
        }
    });
});
