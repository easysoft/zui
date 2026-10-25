import Path from 'node:path';
import {tmpdir} from 'node:os';
import {execFile} from 'node:child_process';
import {createRequire} from 'node:module';
import {promisify} from 'node:util';
import fs from 'fs-extra';
import glob from 'fast-glob';
import postcss from 'postcss';
import {afterAll, beforeAll, expect, test, vi} from 'vitest';
import {resolveConfig} from 'vite';
import type {Plugin} from 'vite';
import {getStorybookContent, getStorybookFiles, getStorybookLibraries, getStorybookPatterns, rootPath} from '../../.storybook/libraries';
import {createStorybookViteConfig} from '../../.storybook/vite.config';
import {getStorybookTypePaths, typecheckStorybook} from '../../scripts/storybook/typecheck';
import {getStorybookCommand} from '../../scripts/storybook/args';
import {parseServiceArgs, readServiceExtensions, serviceEnvironment} from '../../scripts/services/args';

let fixture: string;
let root: string;
let extension: string;
const execFileAsync = promisify(execFile);

beforeAll(async () => {
    fixture = await fs.mkdtemp(Path.join(tmpdir(), 'zui-storybook-'));
    root = Path.join(fixture, 'host');
    extension = Path.join(fixture, 'external collection', 'widget');
    await fs.outputJson(Path.join(root, 'lib/button/package.json'), {name: '@zui/button', main: 'src/main.ts', zui: {type: 'component'}});
    await fs.outputFile(Path.join(root, 'lib/button/button.stories.ts'), 'export const Default = {};');
    await fs.outputJson(Path.join(extension, 'package.json'), {
        name: '@example/widget', main: 'src/main.ts',
        exports: {'./react': './src/main-react.ts'},
        zui: {type: 'component', replace: 'button'},
    });
    await fs.outputFile(Path.join(extension, 'widget.stories.tsx'), '<div className="-w-[137px] -bg-extension" />');
    await fs.outputFile(Path.join(extension, 'src/main.ts'), 'export const value = 1;');
    await fs.outputFile(Path.join(extension, 'src/nested.stories.ts'), 'export const Ignored = {};');
    await fs.outputFile(Path.join(extension, 'dev.ts'), 'throw new Error("dev.ts must not be loaded");');
    await fs.outputFile(Path.join(extension, 'tailwind.cjs'), 'module.exports = {theme: {extend: {colors: {extension: "#13579b"}}}};');
    await fs.ensureDir(Path.join(root, 'exts'));
    await fs.symlink(Path.dirname(extension), Path.join(root, 'exts/collection'), 'dir');
    await fs.symlink(extension, Path.join(root, 'exts/single'), 'dir');
    await fs.writeJson(Path.join(root, 'exts/libs.json'), {collection: `${Path.dirname(extension)}/*`});
});

afterAll(async () => {
    await fs.remove(fixture);
});

test('keeps default discovery independent of local extensions', async () => {
    expect(rootPath).toBe(Path.resolve(rootPath));
    const libs = await getStorybookLibraries(undefined, root);
    expect(Object.keys(libs)).toEqual(['button']);
    expect(await getStorybookFiles(libs)).toEqual([Path.join(root, 'lib/button/button.stories.ts')]);
});

test('all uses registered groups and does not pick up unregistered local links', async () => {
    const libs = await getStorybookLibraries(true, root);
    expect(Object.values(libs).map(lib => ({name: lib.name, group: lib.zui.extsName})))
        .toEqual([{name: '@zui/button'}, {name: '@example/widget', group: 'collection'}]);
});

test('discovers new scenes within the selected libraries without rediscovering metadata', async () => {
    const libs = await getStorybookLibraries(['collection'], root);
    const story = Path.join(libs['@example/widget'].zui.path, 'new.stories.ts');
    try {
        await fs.writeFile(story, 'export const Added = {};');
        expect(await getStorybookFiles(libs)).toContain(story);
    } finally {
        await fs.remove(story);
    }
    expect(await getStorybookFiles(libs)).not.toContain(story);
});

test('keeps a full library collection usable by Storybook glob filesystem checks', async () => {
    const libs = await getStorybookLibraries();
    for (const pattern of getStorybookPatterns(libs)) {
        await expect(fs.stat(pattern)).rejects.toMatchObject({code: 'ENOENT'});
    }
});

test.each(['collection', './exts/single'])('discovers a symlinked %s through the existing library loader', async (source) => {
    const libs = await getStorybookLibraries([source], root);
    expect(libs['@example/widget'].zui.sourceType).toBe('exts');
    expect(libs['@example/widget'].zui.path).toBe(await fs.realpath(extension));
    const files = await getStorybookFiles(libs);
    expect(files).toHaveLength(2);
    expect(files.some(file => file.endsWith('/widget.stories.tsx'))).toBe(true);
    expect(files.some(file => file.includes('/src/') || file.endsWith('/dev.ts'))).toBe(false);
    expect(await glob(getStorybookContent(libs, root))).toContain(libs['@example/widget'].zui.path + '/src/main.ts');
});

test('applies extension exports, replacements, presets, content and external source reloads', async () => {
    const libs = await getStorybookLibraries(['collection'], root);
    const lib = libs['@example/widget'];
    const config = await createStorybookViteConfig(libs, 'development', root);
    // Storybook replaces the top-level server settings before resolving Vite plugins.
    const resolved = await resolveConfig({...config, root, configFile: false, cacheDir: 'storybook-cache', server: {fs: {strict: true}}}, 'serve');
    expect(resolved.server.fs.allow).toContain(await fs.realpath(extension));
    expect(resolved.server.fs.strict).toBe(true);
    const builtInConfig = await createStorybookViteConfig(await getStorybookLibraries(undefined, root), 'development', root);
    const builtIn = await resolveConfig({...builtInConfig, root, configFile: false, cacheDir: 'storybook-cache'}, 'serve');
    expect(resolved.cacheDir).not.toBe(builtIn.cacheDir);
    const aliases = config.resolve!.alias;
    expect(aliases).toEqual(expect.arrayContaining([
        expect.objectContaining({find: '@example/widget', replacement: lib.zui.path}),
        expect.objectContaining({find: '@zui/button', replacement: lib.zui.path}),
    ]));
    const paths = getStorybookTypePaths(libs, root);
    expect(paths['@example/widget/react']).toEqual([Path.join(lib.zui.path, 'src/main-react.ts')]);
    expect(paths['@zui/button/react']).toEqual(paths['@example/widget/react']);
    expect(paths['~/*']).toEqual([Path.join(root, '*')]);
    const cssConfig = config.css!.postcss;
    if (!cssConfig || typeof cssConfig === 'string') throw new Error('Missing inline PostCSS config');
    const css = await postcss(cssConfig.plugins).process('@tailwind utilities;', {from: undefined});
    expect(css.css).toContain('width: 137px');
    expect(css.css).toContain('19 87 155');

    const plugin = (config.plugins as Plugin[]).find(item => item.name === 'zui-storybook-reload-components')!;
    if (typeof plugin.handleHotUpdate !== 'function') throw new Error('Missing source reload handler');
    const send = vi.fn();
    for (const directory of [lib.zui.path, await fs.realpath(extension)]) {
        expect(Reflect.apply(plugin.handleHotUpdate, {}, [{file: Path.join(directory, 'src/main.ts'), server: {ws: {send}}}])).toEqual([]);
    }
    expect(send).toHaveBeenCalledTimes(2);
    Reflect.apply(plugin.handleHotUpdate, {}, [{file: Path.join(extension, 'src/style.css'), server: {ws: {send}}}]);
    expect(send).toHaveBeenCalledTimes(2);
});

test('uses the same extension selection for the official Storybook and Playwright commands', () => {
    const input = parseServiceArgs(['--', '--extension', 'collection', '--port', '6016', '--no-open'], {});
    expect(input.extensions).toEqual(['collection']);
    const command = getStorybookCommand('dev', input.args);
    expect(command).toEqual({packageName: 'storybook', binName: 'storybook', args: [
        'dev', '--port', '6006', '--host', '127.0.0.1', '--no-open', '--exact-port', '--disable-telemetry',
        '--port', '6016', '--no-open',
    ]});
    expect(readServiceExtensions(serviceEnvironment(input.extensions, {}))).toEqual(['collection']);
    expect(getStorybookCommand('test', ['smoke.spec.ts', '--grep', 'indexes'])).toEqual({
        packageName: '@playwright/test', binName: 'playwright',
        args: ['test', '--config', 'playwright.storybook.config.ts', 'smoke.spec.ts', '--grep', 'indexes'],
    });
    expect(getStorybookCommand('build', ['--output-dir', 'dist/custom'])).toEqual({
        packageName: 'storybook', binName: 'storybook',
        args: ['build', '--output-dir', 'dist/storybook', '--disable-telemetry', '--output-dir', 'dist/custom'],
    });
});

test('keeps Vite dependencies inside the managed session cache', async () => {
    const libs = await getStorybookLibraries(['collection'], root);
    const cacheRoot = Path.join(fixture, 'owned-cache');
    vi.stubEnv('CACHE_DIR', cacheRoot);
    try {
        const config = await createStorybookViteConfig(libs, 'development', root);
        const resolved = await resolveConfig({...config, root, configFile: false, cacheDir: 'storybook-cache'}, 'serve');
        expect(resolved.cacheDir.startsWith(`${cacheRoot}${Path.sep}`)).toBe(true);
    } finally {
        vi.unstubAllEnvs();
    }
});

test.each(['dev', 'build', 'test', 'typecheck'])('%s help neither discovers extensions nor prepares output', async (command) => {
    const directory = Path.join(fixture, `help-${command}`);
    await fs.ensureDir(directory);
    await fs.symlink(Path.join(rootPath, 'node_modules'), Path.join(directory, 'node_modules'), 'dir');
    const {stdout} = await execFileAsync(process.execPath, [
        '--import', createRequire(import.meta.url).resolve('tsx'),
        Path.join(rootPath, 'scripts/storybook/index.ts'), command,
        '--extension', './does-not-exist', '--help',
    ], {cwd: directory, env: {...process.env, CI: '1'}});
    expect(stdout).toContain('--extension <group-or-directory>');
    expect(await fs.readdir(directory)).toEqual(['node_modules']);
});

test('isolates each dev cache and removes it after both success and failure', async () => {
    const directory = Path.join(fixture, 'cache-lifecycle');
    const packageDir = Path.join(directory, 'node_modules/storybook');
    await fs.outputJson(Path.join(packageDir, 'package.json'), {name: 'storybook', type: 'module', bin: './cli.mjs'});
    await fs.outputFile(Path.join(packageDir, 'cli.mjs'), `
import fs from 'node:fs';
import path from 'node:path';
const cache = process.env.CACHE_DIR;
fs.writeFileSync(path.join(cache, 'sentinel'), 'owned cache');
console.log(JSON.stringify({cache, exists: fs.existsSync(cache)}));
process.exit(Number(process.env.FIXTURE_EXIT_CODE));
`);
    const caches: string[] = [];
    for (const code of [0, 7]) {
        const result = await execFileAsync(process.execPath, [
            '--import', createRequire(import.meta.url).resolve('tsx'),
            Path.join(rootPath, 'scripts/storybook/index.ts'), 'dev',
        ], {cwd: directory, env: {...process.env, CACHE_DIR: 'must-not-use-shared-cache', FIXTURE_EXIT_CODE: String(code)}})
            .catch((error: {code: number; stdout: string}) => {
                expect(error.code).toBe(code);
                return error;
            });
        const {cache, exists} = JSON.parse(result.stdout) as {cache: string; exists: boolean};
        expect(exists).toBe(true);
        expect(Path.isAbsolute(cache)).toBe(true);
        expect(await fs.pathExists(cache)).toBe(false);
        caches.push(cache);
    }
    expect(caches[0]).not.toBe(caches[1]);
});

test('typechecks extension stories and their library-local imports instead of excluding exts', async () => {
    await fs.outputJson(Path.join(root, '.storybook/tsconfig.json'), {
        compilerOptions: {noEmit: true, skipLibCheck: true, target: 'ESNext', module: 'ESNext', moduleResolution: 'bundler', jsx: 'preserve'},
        include: ['../lib/*/*.stories.ts'],
        exclude: ['../exts'],
    });
    const contract = Path.join(extension, 'src/contract.ts');
    const story = Path.join(extension, 'types.stories.ts');
    await fs.writeFile(contract, 'import {value} from "@/src/main"; export const amount: number = value;');
    await fs.writeFile(story, 'export {amount} from "@example/widget/src/contract";');
    const log = vi.spyOn(console, 'log').mockImplementation(() => undefined);
    const error = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    try {
        expect(await typecheckStorybook(['collection'], root)).toBe(0);
        await fs.writeFile(contract, 'import {value} from "@/src/main"; export const amount: string = value;');
        expect(await typecheckStorybook(['collection'], root)).toBe(1);
        expect(error).toHaveBeenCalledWith(expect.stringContaining('TS2322'));
        expect(error).toHaveBeenCalledWith(expect.stringContaining('src/contract.ts'));
    } finally {
        log.mockRestore();
        error.mockRestore();
        await fs.remove(story);
        await fs.remove(contract);
    }
}, 15000);
