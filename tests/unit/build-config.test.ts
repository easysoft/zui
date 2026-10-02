import Path from 'node:path';
import {execFileSync} from 'node:child_process';
import os from 'node:os';
import fs from 'fs-extra';
import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';
import {loadBuildOptions, parseBuildArgs} from '../../scripts/build/cli';
import {resolveBuildPlan, validateBuildOptions} from '../../scripts/build/config';
import {canonical} from '../../scripts/build/paths';
import {getLibs} from '../../scripts/libs/query';
import * as cache from '../../scripts/libs/libs-cache';

let root: string;
async function lib(directory: string, name: string, zui: Record<string, unknown> = {}) {
    await fs.outputJSON(Path.join(directory, 'package.json'), {name, version: '1.0.0', files: ['src/**/*'], exports: {'./extra': './src/extra.ts'}, zui: {type: 'component', ...zui}});
}

beforeEach(async () => {
    root = await fs.mkdtemp(Path.join(os.tmpdir(), 'zui-build-plan-'));
    await fs.outputJSON(Path.join(root, 'package.json'), {version: '3.0.0'});
    await lib(Path.join(root, 'lib/button'), '@zui/button');
    await lib(Path.join(root, 'lib/dropdown'), '@zui/dropdown');
    await lib(Path.join(root, 'lib/wip'), '@zui/wip', {wip: true});
    await lib(Path.join(root, 'lib/separate'), '@zui/separate', {separately: true});
    await lib(Path.join(root, 'lib/not-ready'), '@zui/not-ready', {notReady: true});
});

afterEach(async () => {
    vi.restoreAllMocks();
    await fs.remove(root);
});

describe('build CLI and configuration', () => {
    it('accepts repeated long arguments and explicit booleans', () => {
        expect(parseBuildArgs(['--', '--lib', 'button', '--lib=dropdown', '--extension', 'one', '--extension', './two', '--no-minify', '--no-sourcemap', '--dry-run'])).toEqual({
            options: {libs: ['button', 'dropdown'], extensions: ['one', './two'], minify: false, sourcemap: false},
            config: undefined, help: false, dryRun: true,
        });
        expect(parseBuildArgs([]).options).toEqual({});
    });

    it.each([['-l', 'button'], ['button'], ['--outDir', 'dist/test'], ['--skipBuild'], ['--noCash']])('rejects legacy CLI %j', (...args) => {
        expect(() => parseBuildArgs(args)).toThrow(/Use repeated --lib/);
    });

    it('rejects conflicting flags', () => {
        expect(() => parseBuildArgs(['--extensions', '--extension', 'one'])).toThrow(/mutually exclusive/);
        expect(() => parseBuildArgs(['--minify', '--no-minify'])).toThrow(/mutually exclusive/);
    });

    it('merges CLI over JSON, resolves paths by origin, and unions exclusions', async () => {
        await fs.outputJSON(Path.join(root, 'configs/custom.json'), {
            libs: ['button'], exclude: ['dropdown'], extensions: ['./local'], outDir: '../output', zip: './build.zip', viteConfig: './vite.ts', minify: true,
        });
        const options = await loadBuildOptions(parseBuildArgs(['--config', 'configs/custom.json', '--lib', 'dropdown', '--exclude', 'wip', '--extension', './extensions', '--no-minify']), root);
        expect(options).toEqual({
            libs: ['dropdown'], exclude: ['dropdown', 'wip'], extensions: [Path.join(root, 'extensions')], outDir: Path.join(root, 'output'), zip: Path.join(root, 'configs/build.zip'), viteConfig: Path.join(root, 'configs/vite.ts'), minify: false,
        });
        const fromFile = await loadBuildOptions(parseBuildArgs(['--config', 'configs/custom.json']), root);
        expect(fromFile.extensions).toEqual([Path.join(root, 'configs/local')]);
    });

    it('rejects old snapshots and malformed input', () => {
        expect(() => validateBuildOptions({libs: 'zui'})).toThrow(/array/);
        expect(() => validateBuildOptions({libs: [{name: '@zui/button'}]})).toThrow(/string/);
        expect(() => validateBuildOptions({ignoreNotReady: true})).toThrow(/Unknown/);
        expect(() => validateBuildOptions({css: {minify: 'false'}})).toThrow(/boolean/);
        expect(() => validateBuildOptions({dependencies: {jquery: ''}})).toThrow(/non-empty/);
    });

    it('resolves bare extension directories relative to the config file and CLI directories relative to cwd', async () => {
        await lib(Path.join(root, 'configs/nested/local-exts/one'), '@example/config');
        await lib(Path.join(root, 'local-exts/two'), '@example/cli');
        await fs.outputJSON(Path.join(root, 'configs/nested/custom.json'), {extensions: ['local-exts']});
        const fromConfig = await loadBuildOptions(parseBuildArgs(['--config', 'configs/nested/custom.json']), root);
        expect(fromConfig.extensions).toEqual([Path.join(root, 'configs/nested/local-exts')]);
        expect((await resolveBuildPlan(fromConfig, root)).libs.map(item => item.name)).toContain('@example/config');
        const fromCli = await loadBuildOptions(parseBuildArgs(['--config', 'configs/nested/custom.json', '--extension', 'local-exts']), root);
        expect(fromCli.extensions).toEqual([Path.join(root, 'local-exts')]);
        expect((await resolveBuildPlan(fromCli, root)).libs.map(item => item.name)).toContain('@example/cli');
    });

    it('prefers registered extension groups over same-named config directories', async () => {
        await lib(Path.join(root, 'configs/nested/zentao/local'), '@example/local');
        await lib(Path.join(root, 'extensions/registered/one'), '@example/registered');
        await fs.outputJSON(Path.join(root, 'exts/libs.json'), {zentao: './extensions/registered/*'});
        await fs.outputJSON(Path.join(root, 'configs/nested/custom.json'), {extensions: ['zentao']});
        const options = await loadBuildOptions(parseBuildArgs(['--config', 'configs/nested/custom.json']), root);
        expect(options.extensions).toEqual(['zentao']);
        const plan = await resolveBuildPlan(options, root);
        expect(plan.libs.map(item => item.name)).toContain('@example/registered');
        expect(plan.libs.map(item => item.name)).not.toContain('@example/local');
    });

    it('rejects a config file in a directory that the build clears', async () => {
        await fs.outputJSON(Path.join(root, 'build/config.json'), {});
        await expect(loadBuildOptions(parseBuildArgs(['--config', 'build/config.json']), root)).rejects.toThrow(/output directory/);
    });
});

describe('resolved build plans', () => {
    it('filters defaults, preserves explicit WIP/separate selection and optional notReady filtering', async () => {
        const plan = await resolveBuildPlan({}, root);
        expect(plan.libs.map(item => item.name).sort()).toEqual(['@zui/button', '@zui/dropdown', '@zui/not-ready']);
        expect(plan.name).toBe('zui');
        expect(plan.version).toBe('3.0.0');
        expect(plan.dependencies).toEqual({});
        expect(plan.css).toEqual({minify: true, remToPx: false, preflight: true});
        expect((await resolveBuildPlan({libs: ['wip', 'separate']}, root)).libs).toHaveLength(2);
        expect((await resolveBuildPlan({includeWip: true, excludeNotReady: true}, root)).libs.map(item => item.name).sort()).toEqual(['@zui/button', '@zui/dropdown', '@zui/wip']);
    });

    it('rejects old DSL, wrong namespaces, unknown exclusions and an empty result', async () => {
        for (const name of ['zui', 'button dropdown', '+jquery', 'button~extra', '@zui/button', 'toString']) {
            await expect(resolveBuildPlan({libs: [name]}, root)).rejects.toThrow(/Unknown library/);
        }
        await expect(resolveBuildPlan({exclude: ['missing']}, root)).rejects.toThrow(/Unknown library/);
        await expect(resolveBuildPlan({libs: ['button'], exclude: ['button']}, root)).rejects.toThrow(/empty/);
    });

    it('loads all registered groups, multiple groups, single libraries and collection directories', async () => {
        await lib(Path.join(root, 'extensions/group/one'), '@example/one');
        await lib(Path.join(root, 'extensions/single'), '@example/single');
        await fs.outputJSON(Path.join(root, 'exts/libs.json'), {group: Path.join(root, 'extensions/group/*'), single: Path.join(root, 'extensions/single')});
        const all = await resolveBuildPlan({extensions: true}, root);
        expect(all.libs.map(item => item.name)).toEqual(expect.arrayContaining(['@zui/button', '@example/one', '@example/single']));
        expect((await resolveBuildPlan({extensions: ['group', 'single'], libs: ['@example/one', '@example/single']}, root)).libs).toHaveLength(2);
        expect((await resolveBuildPlan({extensions: ['./extensions/single'], libs: ['@example/single']}, root)).libs[0].zui.path).toBe(Path.join(root, 'extensions/single'));
        expect((await resolveBuildPlan({extensions: [Path.join(root, 'extensions/group')], libs: ['@example/one']}, root)).libs).toHaveLength(1);
        await expect(resolveBuildPlan({extensions: ['group'], libs: ['one']}, root)).rejects.toThrow(/Unknown library/);
    });

    it('finds an extension collection inside a project lib directory', async () => {
        await fs.outputJSON(Path.join(root, 'extensions/package.json'), {name: 'extension-project'});
        await lib(Path.join(root, 'extensions/lib/one'), '@example/one');
        const plan = await resolveBuildPlan({extensions: ['./extensions'], libs: ['@example/one']}, root);
        expect(plan.libs[0].zui.path).toBe(Path.join(root, 'extensions/lib/one'));
    });

    it('rejects unknown, missing and empty extension sources', async () => {
        await fs.ensureDir(Path.join(root, 'empty'));
        await fs.outputJSON(Path.join(root, 'exts/libs.json'), {missing: './does-not-exist'});
        await expect(resolveBuildPlan({extensions: ['typo']}, root)).rejects.toThrow(/Unknown extension/);
        await expect(resolveBuildPlan({extensions: ['missing']}, root)).rejects.toThrow(/Invalid extension/);
        await expect(resolveBuildPlan({extensions: ['./empty']}, root)).rejects.toThrow(/No extension/);
    });

    it('applies replacements and leaves discovery ordering unmodified', async () => {
        await lib(Path.join(root, 'replacement'), '@example/replacement', {replace: 'button'});
        const plan = await resolveBuildPlan({extensions: ['./replacement']}, root);
        expect(plan.libs.map(item => item.name)).not.toContain('@zui/button');
        expect(plan.libsMap.button).toBeDefined();
        expect(plan.libsMap.dropdown.zui.order).toBe(plan.libs.find(item => item.name === '@zui/dropdown')?.zui.order);
        expect((await resolveBuildPlan({extensions: ['./replacement']}, root)).libs).toEqual(plan.libs);
    });

    it('supports subpaths, side effects, namespace/default exports, and versioned npm inputs', async () => {
        const plan = await resolveBuildPlan({libs: ['button'], dependencies: {clipboard: '^2.0.11'}, exports: {
            button: [{path: 'extra', targets: {default: 'Button'}}, {path: 'src/style.css', sideEffect: true}],
            clipboard: [{targets: {'*': 'Clipboard'}}],
        }}, root);
        expect(plan.entries).toEqual([
            'export {default as Button} from "@zui/button/extra";',
            'import "@zui/button/src/style.css";',
            'export * as Clipboard from "clipboard";',
        ]);
        expect(plan.dependencies).toEqual({clipboard: '^2.0.11'});
        await lib(Path.join(root, 'lib/default'), '@zui/default', {defaultExport: '{default:Default}@extra'});
        expect((await resolveBuildPlan({libs: ['default']}, root)).entries).toEqual(['export {default as Default} from "@zui/default/extra";']);
    });

    it('rejects invalid export shapes and paths before execution', async () => {
        expect(() => validateBuildOptions({exports: {button: [{targets: {default: 'Button'}, sideEffect: true}]}})).toThrow(/cannot be combined/);
        expect(() => validateBuildOptions({exports: {button: [{path: '../other'}]}})).toThrow(/Invalid export path/);
        expect(() => validateBuildOptions({exports: {button: [{targets: {'*': 'NS', value: 'Value'}}]}})).toThrow(/namespace/);
        await expect(resolveBuildPlan({libs: ['button'], exports: {button: [{path: 'private.ts'}]}}, root)).rejects.toThrow(/not in lib/);
        await expect(resolveBuildPlan({libs: ['button'], exports: {dropdown: [{}]}}, root)).rejects.toThrow(/does not match/);
    });

    it('preserves export-all subpaths in defaultExport metadata', async () => {
        await lib(Path.join(root, 'lib/default'), '@zui/default', {defaultExport: '*@src/main.ts'});
        expect((await resolveBuildPlan({libs: ['default']}, root)).entries).toEqual(['export * from "@zui/default/src/main.ts";']);
    });

    it('does not write caches or build files and does not leak minification state', async () => {
        const writeCache = vi.spyOn(cache, 'setLibsCache');
        const readCache = vi.spyOn(cache, 'getLibsCache');
        await getLibs('buildIn', {root, cache: false});
        const first = await resolveBuildPlan({minify: false, css: {minify: true}}, root);
        const second = await resolveBuildPlan({}, root);
        expect(first.css.minify).toBe(false);
        expect(second.css.minify).toBe(true);
        expect(writeCache).not.toHaveBeenCalled();
        expect(readCache).not.toHaveBeenCalled();
        expect(await fs.pathExists(Path.join(root, 'build'))).toBe(false);
        expect(() => JSON.stringify(second)).not.toThrow();
        expect(second).not.toHaveProperty('buildDir');
        expect(second).not.toHaveProperty('entry');
        expect(second).not.toHaveProperty('publicDir');
        expect(await resolveBuildPlan({}, root)).toEqual(second);
    });

    it('allows generated documentation outputs and protects documentation sources', async () => {
        const plan = await resolveBuildPlan({outDir: 'docs/_/public/zui', zip: 'docs/_/public/zui.zip'}, root);
        expect(plan.outDir).toBe(Path.join(root, 'docs/_/public/zui'));
        await expect(resolveBuildPlan({outDir: 'docs'}, root)).rejects.toThrow(/Unsafe/);
        await expect(resolveBuildPlan({outDir: 'docs/docs'}, root)).rejects.toThrow(/Unsafe/);
    });

    it('protects arbitrary tracked files while allowing repeated untracked outputs', async () => {
        execFileSync('git', ['init', '--quiet', root]);
        await fs.outputFile(Path.join(root, 'custom-source/file.ts'), 'export {};');
        execFileSync('git', ['add', 'custom-source/file.ts'], {cwd: root});
        await expect(resolveBuildPlan({outDir: 'custom-source'}, root)).rejects.toThrow(/Unsafe/);
        await expect(resolveBuildPlan({zip: 'custom-source/file.ts'}, root)).rejects.toThrow(/Unsafe/);
        await fs.outputFile(Path.join(root, 'custom-output/old.js'), 'old build');
        expect((await resolveBuildPlan({outDir: 'custom-output'}, root)).outDir).toBe(Path.join(root, 'custom-output'));
        expect((await resolveBuildPlan({outDir: 'custom-output'}, root)).outDir).toBe(Path.join(root, 'custom-output'));
    });

    it('accepts a safe output symlink and resolves missing children through its real target', async () => {
        const destination = Path.join(root, 'output-real');
        const link = Path.join(root, 'output-link');
        await fs.ensureDir(destination);
        await fs.symlink(destination, link, 'dir');
        const plan = await resolveBuildPlan({outDir: link, zip: Path.join(link, 'nested/build.zip')}, root);
        const realDestination = await fs.realpath(destination);
        expect(await canonical(plan.outDir)).toBe(realDestination);
        expect(await canonical(plan.zip!)).toBe(Path.join(realDestination, 'nested/build.zip'));
        expect((await fs.lstat(link)).isSymbolicLink()).toBe(true);
        expect(await fs.pathExists(Path.join(destination, 'nested'))).toBe(false);
    });

    it.each(['outside', 'inside'])('rejects ZIP paths traversing an output symlink to %s', async (kind) => {
        const outDir = Path.join(root, 'output');
        const destination = Path.join(kind === 'outside' ? root : outDir, 'archive-target');
        await fs.ensureDir(destination);
        await fs.ensureDir(outDir);
        await fs.symlink(destination, Path.join(outDir, 'archive-link'), 'dir');
        await expect(resolveBuildPlan({outDir, zip: Path.join(outDir, 'archive-link/build.zip')}, root)).rejects.toThrow(/symbolic links inside the output directory/);
    });

    it('rejects dangling links as targets or ancestors before creating paths', async () => {
        const dangling = Path.join(root, 'dangling');
        await fs.symlink(Path.join(root, 'missing-target'), dangling, 'dir');
        await expect(canonical(dangling)).rejects.toThrow(/dangling symbolic links/);
        await expect(canonical(Path.join(dangling, 'child'))).rejects.toThrow(/dangling symbolic links/);
        await expect(resolveBuildPlan({outDir: dangling}, root)).rejects.toThrow(/dangling symbolic links/);
        await expect(resolveBuildPlan({zip: Path.join(dangling, 'build.zip')}, root)).rejects.toThrow(/dangling symbolic links/);
        expect(await fs.pathExists(Path.join(root, 'missing-target'))).toBe(false);
    });

    it('rejects a ZIP directory or an ancestor of the output, including missing ancestors', async () => {
        const directory = Path.join(root, 'archives');
        await fs.ensureDir(directory);
        await expect(resolveBuildPlan({zip: directory}, root)).rejects.toThrow(/must be a file|Unsafe ZIP/);
        await expect(resolveBuildPlan({outDir: Path.join(directory, 'output'), zip: directory}, root)).rejects.toThrow(/must be a file|Unsafe ZIP/);
        const missing = Path.join(root, 'missing-archive');
        await expect(resolveBuildPlan({outDir: Path.join(missing, 'output'), zip: missing}, root)).rejects.toThrow(/must be a file/);
    });

    it('rejects destructive output overlaps, symlinks and Vite input files inside outputs', async () => {
        for (const outDir of ['.', '..', 'lib', 'lib/button/output', 'build', 'build/output', 'scripts/output', '.github', 'skills-exts', 'publish', '.claude', '.codex-plugin', '.vscode', 'licenses', 'patches', 'public']) {
            await expect(resolveBuildPlan({outDir}, root)).rejects.toThrow(/Unsafe|overlap/);
        }
        await fs.symlink(Path.join(root, 'lib'), Path.join(root, 'unsafe-output'));
        await expect(resolveBuildPlan({outDir: 'unsafe-output'}, root)).rejects.toThrow(/Unsafe/);
        await fs.outputFile(Path.join(root, 'dist/zui/vite.ts'), 'export default {};');
        await expect(resolveBuildPlan({viteConfig: 'dist/zui/vite.ts'}, root)).rejects.toThrow(/Vite configuration/);
        await expect(resolveBuildPlan({name: '../bad'}, root)).rejects.toThrow(/Invalid build name/);
    });
});
