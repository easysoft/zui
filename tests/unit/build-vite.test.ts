import Path from 'node:path';
import {tmpdir} from 'node:os';
import {fileURLToPath} from 'node:url';
import fs from 'fs-extra';
import postcss from 'postcss';
import {afterAll, beforeAll, expect, test} from 'vitest';
import type {Plugin, UserConfig} from 'vite';
import {createBuildViteConfig} from '../../scripts/build/vite';
import {createPostcssConfig, createTailwindConfig} from '../../scripts/build/css-config.cjs';
import type {BuildPlan} from '../../scripts/build/config';
import {createSharedViteConfig} from '../../vite.shared';
import {LibType} from '../../scripts/libs/lib-type';
import type {LibInfo} from '../../scripts/libs/lib-info';

const rootDir = Path.resolve(fileURLToPath(new URL('../../', import.meta.url)));
let fixtureDir: string;

beforeAll(async () => {
    fixtureDir = await fs.mkdtemp(Path.join(tmpdir(), 'zui-build-vite-'));
});

afterAll(async () => {
    await fs.remove(fixtureDir);
});

function createPlan(overrides: Partial<BuildPlan> = {}): BuildPlan {
    return {
        rootDir,
        buildDir: Path.join(fixtureDir, 'build'),
        outDir: Path.join(fixtureDir, 'dist'),
        entry: Path.join(fixtureDir, 'build/main.ts'),
        publicDir: Path.join(fixtureDir, 'build/public'),
        fileName: 'zui.controls',
        name: 'controls',
        version: '1.2.3',
        libs: [],
        libsMap: {},
        sources: ['buildIn'],
        entries: [],
        dependencies: {},
        tailwindConfigs: [],
        minify: true,
        sourcemap: true,
        css: {minify: true, remToPx: false, preflight: true},
        externals: {},
        ...overrides,
    };
}

test('keeps the distribution contract without preparing directories', async () => {
    const config = await createBuildViteConfig(createPlan({externals: {'cash-dom': '$'}}));
    expect(config.configFile).toBe(false);
    expect(config.define?.__APP_VERSION__).toBe('"1.2.3"');
    expect(config.build).toMatchObject({
        minify: true,
        cssMinify: false,
        sourcemap: true,
        target: ['chrome107', 'edge107', 'firefox104', 'safari16'],
        rollupOptions: {external: ['cash-dom'], output: {globals: {'cash-dom': '$'}}},
    });
    const lib = config.build!.lib;
    expect(lib).toMatchObject({name: 'zui', formats: ['es', 'umd'], cssFileName: 'zui.controls'});
    if (!lib || typeof lib.fileName !== 'function') {
        throw new Error('Missing library filename function');
    }
    expect(lib.fileName('es', 'main')).toBe('zui.controls.esm.js');
    expect(lib.fileName('umd', 'main')).toBe('zui.controls.js');
    expect(await fs.pathExists(Path.join(fixtureDir, 'build'))).toBe(false);
    expect(await fs.pathExists(Path.join(fixtureDir, 'dist'))).toBe(false);
});

test('loads asynchronous Vite config while preserving plugins and resolver functions', async () => {
    const viteConfig = Path.join(fixtureDir, 'custom.vite.mjs');
    await fs.writeFile(viteConfig, `export default async ({command, mode}) => ({
        define: {CUSTOM_BUILD: JSON.stringify(command + ':' + mode)},
        plugins: [{name: 'custom-plugin', transform(code) { return code + '\\n// custom'; }}],
        resolve: {alias: [{find: /^custom$/, replacement: 'virtual:custom', customResolver(source) { return source + ':resolved'; }}]},
    });`);
    const config = await createBuildViteConfig(createPlan({viteConfig}));
    expect(config.define?.CUSTOM_BUILD).toBe('"build:production"');
    const plugins = config.plugins as Plugin[];
    expect(typeof plugins.find(plugin => plugin.name === 'custom-plugin')?.transform).toBe('function');
    const aliases = config.resolve!.alias;
    if (!Array.isArray(aliases)) {
        throw new Error('Missing alias list');
    }
    const alias = aliases.find(item => item.replacement === 'virtual:custom');
    expect(alias?.find).toBeInstanceOf(RegExp);
    expect(typeof alias?.customResolver).toBe('function');
    expect(aliases.some(item => item.find === 'zui-dev')).toBe(true);
});

test.each([
    ['build.outDir', '{build: {outDir: "elsewhere"}}'],
    ['build.rollupOptions.output', '{build: {rollupOptions: {output: {name: "other"}}}}'],
    ['css.postcss', '{css: {postcss: {plugins: []}}}'],
])('rejects custom overrides of managed field %s', async (field, value) => {
    const viteConfig = Path.join(fixtureDir, `${field}.mjs`);
    await fs.writeFile(viteConfig, `export default ${value};`);
    await expect(createBuildViteConfig(createPlan({viteConfig}))).rejects.toThrow(field);
});

test('fresh Tailwind configurations preserve preset functions without retaining mutations', async () => {
    const presetPath = Path.join(fixtureDir, 'tailwind.cjs');
    await fs.writeFile(presetPath, `module.exports = [
        ({config, colorToVars}) => {
            config.theme.extend.colors.onlyThisBuild = colorToVars({brand: '#123456'}).brand;
            return {theme: {spacing: {custom: '2rem'}}};
        },
        {theme: {spacing: {cached: '3rem'}}},
    ];`);
    const first = createTailwindConfig({preflight: false, tailwindConfigs: [presetPath]});
    expect(first.corePlugins).toEqual({preflight: false});
    expect(first.theme!.extend!.colors).toHaveProperty('onlyThisBuild');
    first.presets![1].theme = {spacing: {cached: 'changed'}};

    const repeated = createTailwindConfig({tailwindConfigs: [presetPath]});
    expect(repeated.presets![1].theme).toEqual({spacing: {cached: '3rem'}});
    const plain = createTailwindConfig();
    expect(plain.corePlugins).toBeUndefined();
    expect(plain.theme!.extend!.colors).not.toHaveProperty('onlyThisBuild');
});

test('loads extension theme directories and CommonJS helpers inside ESM packages', async () => {
    const extensionDir = Path.join(fixtureDir, 'extension-theme');
    const presetPath = Path.join(extensionDir, 'tailwind.cjs');
    await fs.outputJson(Path.join(extensionDir, 'package.json'), {type: 'module'});
    await fs.writeFile(presetPath, 'module.exports = require("./tailwind-theme");');
    await fs.outputFile(Path.join(extensionDir, 'tailwind-theme/index.cjs'), `const colors = require('./colors');
        module.exports = ({config}) => {Object.assign(config.theme.extend.colors, colors);};`);
    await fs.writeFile(Path.join(extensionDir, 'tailwind-theme/colors.js'), 'module.exports = {extensionOnly: "#13579b"};');

    const first = createTailwindConfig({tailwindConfigs: [presetPath]});
    expect(first.theme!.extend!.colors).toHaveProperty('extensionOnly', '#13579b');
    Object.assign(first.theme!.extend!.colors!, {extensionOnly: '#ffffff'});
    const repeated = createTailwindConfig({tailwindConfigs: [presetPath]});
    expect(repeated.theme!.extend!.colors).toHaveProperty('extensionOnly', '#13579b');
    expect(createTailwindConfig().theme!.extend!.colors).not.toHaveProperty('extensionOnly');

    const result = await postcss(createPostcssConfig({tailwindConfigs: [presetPath]}).plugins)
        .process('.extension-theme { color: theme("colors.extensionOnly"); }', {from: undefined});
    expect(result.css).toContain('color: #13579b');
});

test('explicit CSS flags apply per call, independent of earlier plans', async () => {
    const source = '.panel { inset: 1rem; padding: 2rem; }';
    const compact = await postcss(createPostcssConfig({minify: true, remToPx: true}).plugins).process(source, {from: undefined});
    const plain = await postcss(createPostcssConfig({minify: false, remToPx: false}).plugins).process(source, {from: undefined});
    expect(compact.css).toContain('padding:32px');
    expect(compact.css).toContain('top:16px');
    expect(plain.css).toContain('padding: 2rem');
    expect(plain.css).toContain('top: 1rem');
    const unminified = await createBuildViteConfig(createPlan({minify: false, css: {minify: false, remToPx: false, preflight: true}}));
    expect(unminified.build!.minify).toBe(false);
});

test('Tailwind retains default utilities and the public preflight switch', async () => {
    const result = await postcss(createPostcssConfig({preflight: false}).plugins).process('@tailwind base; .panel { @apply -p-4; }', {from: undefined});
    expect(result.css).toContain('padding: 1rem');
    expect(result.css).not.toContain('box-sizing: border-box');
});

function findAlias(config: UserConfig, source: string) {
    const aliases = config.resolve!.alias;
    if (!Array.isArray(aliases)) {
        throw new Error('Missing alias list');
    }
    const alias = aliases.find(item => typeof item.find === 'string'
        ? source === item.find || source.startsWith(`${item.find}/`)
        : item.find.test(source));
    if (!alias) {
        throw new Error(`Missing alias for ${source}`);
    }
    return {alias, path: source.replace(alias.find, alias.replacement)};
}

function replacementFixture(): Record<string, LibInfo> {
    return {
        button: {
            name: '@zui/button', version: '1.0.0',
            zui: {name: 'button', displayName: 'Button', type: LibType.component, order: 1, sourceType: 'build-in', path: Path.join(rootDir, 'lib/button')},
        },
        '@example/controls': {
            name: '@example/controls', version: '1.0.0',
            exports: {'./web-component': './src/custom-element.ts'},
            zui: {
                name: '@example/controls', displayName: 'Controls', type: LibType.component, order: 2,
                sourceType: 'exts', path: Path.join(fixtureDir, 'controls'), replace: ' button, @zui/menu ',
            },
        },
    };
}

test('extension replacements precede builtin aliases and retain subpath exports', () => {
    const libsCache = replacementFixture();
    const extension = libsCache['@example/controls'];
    const config = createSharedViteConfig({libsCache});
    expect(findAlias(config, '@zui/button').path).toBe(extension.zui.path);
    expect(findAlias(config, '@zui/menu').path).toBe(extension.zui.path);
    expect(findAlias(config, '@example/controls').path).toBe(extension.zui.path);
    expect(findAlias(config, '@zui/button-group').path).toBe(Path.join(rootDir, 'lib/button-group'));
    const {alias, path} = findAlias(config, '@zui/button/web-component');
    if (typeof alias.customResolver !== 'function') {
        throw new Error('Missing export resolver');
    }
    expect(Reflect.apply(alias.customResolver, {}, [path])).toBe(Path.join(extension.zui.path, 'src/custom-element.ts'));
});

test('only selected extensions activate replacements while all package aliases remain available', async () => {
    const libsMap = replacementFixture();
    const extension = libsMap['@example/controls'];
    const excluded = await createBuildViteConfig(createPlan({libsMap, libs: [libsMap.button]}));
    expect(findAlias(excluded, '@zui/button').path).toBe(Path.join(rootDir, 'lib/button'));
    expect(findAlias(excluded, '@zui/menu').path).toBe(Path.join(rootDir, 'lib/menu'));
    expect(findAlias(excluded, '@example/controls').path).toBe(extension.zui.path);
    const included = await createBuildViteConfig(createPlan({libsMap, libs: [extension]}));
    expect(findAlias(included, '@zui/button').path).toBe(extension.zui.path);
    expect(findAlias(included, '@zui/menu').path).toBe(extension.zui.path);
});
