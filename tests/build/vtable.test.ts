import {execFile} from 'node:child_process';
import {promises as fs} from 'node:fs';
import Path from 'node:path';
import {pathToFileURL} from 'node:url';
import {promisify} from 'node:util';
import {beforeAll, expect, test} from 'vitest';
import {withBrowserGlobals} from '../helpers/browser-globals';

const execFileAsync = promisify(execFile);
const root = Path.resolve(import.meta.dirname, '../..');
const output = Path.join(root, 'test-results/vtable-build');
const pnpm = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm';
const pluginNames = ['vtableSortingPlugin', 'vtableRowSelectionPlugin', 'vtableColumnResizePlugin', 'createVTableSelectionColumn'];

beforeAll(async () => {
    await fs.mkdir(output, {recursive: true});
    for (const {name, libs, plugins} of [
        {name: 'vtable-core', libs: ['vtable'], plugins: false},
        {name: 'vtable-combined', libs: ['vtable', 'dtable'], plugins: true},
        {name: 'vtable-plugins', libs: ['vtable'], plugins: true},
        {name: 'dtable-baseline', libs: ['dtable'], plugins: false},
    ]) {
        const config = Path.join(output, `${name}.json`);
        await fs.writeFile(config, JSON.stringify({
            name,
            libs,
            outDir: Path.join(output, name),
            exports: plugins ? {vtable: [
                {},
                {path: 'plugins/sorting'},
                {path: 'plugins/row-selection'},
                {path: 'plugins/column-resize'},
            ]} : undefined,
        }));
        await execFileAsync(pnpm, ['build', '--config', config], {
            cwd: root,
            env: {...process.env, CI: '1'},
            maxBuffer: 20 * 1024 * 1024,
        });
    }
}, 240_000);

test('core CSS and source maps exclude optional plugin runtime code', async () => {
    const name = 'vtable-core';
    const css = await fs.readFile(Path.join(output, name, `zui.${name}.css`), 'utf8');
    expect(css).toMatch(/\.vtable[\s,{.:-]/);
    for (const suffix of ['esm.js', 'js']) {
        const runtime = await fs.readFile(Path.join(output, name, `zui.${name}.${suffix}`), 'utf8');
        const map = JSON.parse(await fs.readFile(Path.join(output, name, `zui.${name}.${suffix}.map`), 'utf8')) as {sources: string[]};
        expect(map.sources.some(source => /vtable[/\\]src[/\\]/.test(source))).toBe(true);
        expect(map.sources.some(source => /vtable[/\\]src[/\\]plugins[/\\]/.test(source))).toBe(false);
        for (const plugin of pluginNames) {
            expect(runtime).not.toContain(plugin);
        }
    }
});

test('JSON exports include all three plugins alongside VTable and DTable in ESM and UMD', async () => {
    const name = 'vtable-combined';
    const css = await fs.readFile(Path.join(output, name, `zui.${name}.css`), 'utf8');
    expect(css).toContain('.vtable');
    expect(css).toContain('.dtable');
    await withBrowserGlobals(async (dom) => {
        const esm = await import(pathToFileURL(Path.join(output, name, `zui.${name}.esm.js`)).href) as Record<string, unknown>;
        dom.window.eval(await fs.readFile(Path.join(output, name, `zui.${name}.js`), 'utf8'));
        const umd = (dom.window as unknown as {zui: Record<string, unknown>}).zui;
        for (const distribution of [esm, umd]) {
            expect(distribution.VTable).toBeTypeOf('function');
            expect(distribution.DTable).toBeTypeOf('function');
            for (const plugin of pluginNames) {
                expect(distribution[plugin], plugin).toBeDefined();
            }
            expect(distribution.createVTableSelectionColumn).toBeTypeOf('function');
        }
        expect(Object.keys(umd).sort()).toEqual(Object.keys(esm).sort());
    });
});

test('standalone size comparison artifacts keep VTable plugins and DTable separate', async () => {
    for (const name of ['vtable-plugins', 'dtable-baseline']) {
        const map = JSON.parse(await fs.readFile(Path.join(output, name, `zui.${name}.esm.js.map`), 'utf8')) as {sources: string[]};
        expect(map.sources.some(source => /vtable[/\\]src[/\\]plugins[/\\]/.test(source))).toBe(name === 'vtable-plugins');
        expect(map.sources.some(source => /dtable[/\\]src[/\\]/.test(source))).toBe(name === 'dtable-baseline');
        expect((await fs.stat(Path.join(output, name, `zui.${name}.css`))).size).toBeGreaterThan(0);
    }
});
