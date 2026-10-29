import Path from 'node:path';
import {tmpdir} from 'node:os';
import {gzipSync} from 'node:zlib';
import fs from 'fs-extra';
import {build, type Plugin} from 'vite';
import {afterEach, beforeEach, expect, test} from 'vitest';
import {createBuildAnalysis} from '../../scripts/build/analysis';
import {resolveBuildPlan} from '../../scripts/build/config';
import {cssOrderPlugin} from '../../scripts/build/css-order';

let root: string;

beforeEach(async () => {
    root = await fs.realpath(await fs.mkdtemp(Path.join(tmpdir(), 'zui-build-analysis-')));
    await fs.outputJSON(Path.join(root, 'package.json'), {version: '1.0.0', type: 'module'});
    for (const [directory, name] of [['lib/alpha', '@zui/alpha'], ['lib/beta', '@zui/beta'], ['extensions/extra', '@example/extra']]) {
        await fs.outputJSON(Path.join(root, directory, 'package.json'), {name, version: '1.0.0', main: './main.js', zui: {type: 'component'}});
    }
    await fs.outputFile(Path.join(root, 'lib/alpha/main.js'), `
        import {dependency} from '@size/scoped';
        import external from 'external-package';
        import './style.css';
        export const alpha = value => external(dependency(value)) + '中文';
        export const removed = 'TREE_SHAKEN_SENTINEL';
    `);
    await fs.outputFile(Path.join(root, 'lib/alpha/style.css'), '.alpha { color: red; } @media (min-width: 1px) { .alpha { content: "中文"; } }');
    await fs.outputFile(Path.join(root, 'lib/alpha/public/font.woff2'), 'fixture font');
    await fs.outputFile(Path.join(root, 'lib/beta/main.js'), 'export {dependency as beta} from "@size/scoped"; import "./style.css";');
    await fs.outputFile(Path.join(root, 'lib/beta/style.css'), '.beta { color: blue; }');
    await fs.outputFile(Path.join(root, 'extensions/extra/main.js'), 'import {nested} from "nested-dependency"; export const extra = value => nested(value) + "extra";');
    await fs.outputJSON(Path.join(root, 'extensions/extra/node_modules/nested-dependency/package.json'), {name: 'nested-dependency', version: '1.0.0', main: './index.js'});
    await fs.outputFile(Path.join(root, 'extensions/extra/node_modules/nested-dependency/index.js'), 'export const nested = value => value + "nested";');
    const npm = Path.join(root, 'node_modules/.pnpm/@size+scoped@1.0.0/node_modules/@size/scoped');
    await fs.outputJSON(Path.join(npm, 'package.json'), {name: '@size/scoped', version: '1.0.0', main: './index.js'});
    await fs.outputFile(Path.join(npm, 'index.js'), 'export const dependency = value => value.repeat(2);');
    await fs.ensureDir(Path.join(root, 'node_modules/@size'));
    await fs.symlink(npm, Path.join(root, 'node_modules/@size/scoped'));
    await fs.outputFile(Path.join(root, 'main.js'), 'export {alpha} from "./lib/alpha/main.js"; export {beta} from "./lib/beta/main.js"; export {extra} from "./extensions/extra/main.js";');
});

afterEach(async () => {
    await fs.remove(root);
});

async function analyze(minify: boolean, extraPlugin?: Plugin) {
    const plan = await resolveBuildPlan({analyze: true, minify, sourcemap: false, extensions: ['./extensions']}, root);
    const analysis = await createBuildAnalysis(plan);
    const entry = Path.join(root, 'main.js');
    await build({
        root, configFile: false, logLevel: 'silent',
        plugins: [cssOrderPlugin(entry, plan.libs.map(lib => lib.zui.path), analysis.recordCss), extraPlugin, analysis.plugin],
        css: {postcss: {plugins: []}},
        build: {
            outDir: plan.outDir, minify, cssMinify: false, sourcemap: false,
            lib: {entry, formats: ['es', 'umd'], name: 'fixture', fileName: format => `fixture.${format}.js`, cssFileName: 'fixture'},
            rollupOptions: {external: ['external-package'], output: {globals: {'external-package': 'external'}}},
        },
    });
    await fs.outputFile(Path.join(plan.outDir, 'alpha/font.woff2'), 'fixture font');
    await fs.outputFile(Path.join(plan.outDir, 'fixture.js.map'), '{}');
    await fs.outputFile(Path.join(plan.outDir, 'fixture.d.ts'), 'export {};');
    await fs.outputFile(Path.join(plan.outDir, 'types/index.d.cts'), 'export {};');
    return {analysis, plan};
}

test.each([false, true])('reports actual output and separate package contributions with minify=%s and no maps', async (minify) => {
    const {analysis, plan} = await analyze(minify);
    const report = await analysis.write(plan.outDir);
    expect(report.externals).toEqual(['external-package']);
    expect(report.files.map(file => file.file).sort()).toEqual(['alpha/font.woff2', 'fixture.css', 'fixture.es.js', 'fixture.umd.js']);
    for (const file of report.files) {
        const content = await fs.readFile(Path.join(plan.outDir, file.file));
        expect(file.bytes).toBe(content.length);
        expect(file.gzipBytes).toBe(gzipSync(content).length);
        if (file.kind === 'javascript') {
            expect(file.metric).toBe('rendered-js-before-minify');
            expect(file.packages).toEqual(expect.arrayContaining([
                expect.objectContaining({name: '@zui/alpha', category: 'builtin', bytes: expect.any(Number)}),
                expect.objectContaining({name: '@size/scoped', category: 'dependency'}),
                expect.objectContaining({name: '@example/extra', category: 'extension'}),
                expect.objectContaining({name: 'nested-dependency', category: 'dependency'}),
            ]));
            const shared = file.packages.find(item => item.name === '@size/scoped')!;
            expect(shared.modules).toHaveLength(1);
            expect(shared.bytes).toBeGreaterThan(0);
            expect(content.toString()).not.toContain('TREE_SHAKEN_SENTINEL');
        } else {
            expect(file.packages.reduce((sum, item) => sum + item.bytes, 0)).toBe(content.length);
        }
    }
    const css = report.files.find(file => file.kind === 'css')!;
    expect(css.packages.map(item => item.name)).toEqual(expect.arrayContaining(['@zui/alpha', '@zui/beta']));
    const resource = report.files.find(file => file.kind === 'asset')!;
    expect(resource.packages).toEqual([expect.objectContaining({name: '@zui/alpha', category: 'builtin', bytes: 12})]);
    expect(await fs.readJSON(Path.join(plan.outDir, 'build-analysis.json'))).toEqual(report);
    expect(await fs.readFile(Path.join(plan.outDir, 'build-analysis.html'), 'utf8')).toContain('<html lang="zh-CN">');
    expect(await fs.pathExists(Path.join(plan.outDir, 'build-analysis.md'))).toBe(false);
    expect(JSON.stringify(report)).not.toContain(root);
});

test('does not assign stale CSS attribution after a custom plugin rewrites it', async () => {
    const {analysis, plan} = await analyze(false, {
        name: 'rewrite-css',
        generateBundle: {order: 'post', handler(_options, bundle) {
            for (const file of Object.values(bundle)) {
                if (file.type === 'asset' && file.fileName.endsWith('.css')) file.source = '.changed { color: black; }';
            }
        }},
    });
    const report = await analysis.write(plan.outDir);
    expect(report.files.find(file => file.kind === 'css')!.packages).toEqual([
        expect.objectContaining({name: '(generated)', category: 'generated', bytes: 26}),
    ]);
});

test.each(['build-analysis.json', 'build-analysis.html'])('refuses to overwrite an existing %s public asset', async (file) => {
    const {analysis, plan} = await analyze(false);
    await fs.writeFile(Path.join(plan.outDir, file), 'user asset');
    await expect(analysis.write(plan.outDir)).rejects.toThrow(/overwrite/);
    expect(await fs.readFile(Path.join(plan.outDir, file), 'utf8')).toBe('user asset');
    expect(await fs.pathExists(Path.join(plan.outDir, file.endsWith('.json') ? 'build-analysis.html' : 'build-analysis.json'))).toBe(false);
});
