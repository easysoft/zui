import Path from 'node:path';
import {execFile} from 'node:child_process';
import {createRequire} from 'node:module';
import {tmpdir} from 'node:os';
import {promisify} from 'node:util';
import fs from 'fs-extra';
import postcss from 'postcss';
import {afterEach, beforeEach, expect, test} from 'vitest';
import {loadConfigFromFile, type Plugin} from 'vite';
import {createDevViteConfig} from '../../scripts/dev/config';
import type {LibInfo} from '../../scripts/libs/lib-info';
import {LibType} from '../../scripts/libs/lib-type';

let fixture: string;
let rootPath: string;
let libsCache: Record<string, LibInfo>;

beforeEach(async () => {
    fixture = await fs.mkdtemp(Path.join(tmpdir(), 'zui-dev-config-'));
    rootPath = Path.join(fixture, 'project');
    const externalPath = Path.join(fixture, 'external space');
    await fs.ensureDir(rootPath);
    await fs.ensureDir(externalPath);
    libsCache = {
        '@example/controls': {
            name: '@example/controls', version: '1.0.0',
            zui: {name: '@example/controls', displayName: 'Controls', type: LibType.component, order: 1, sourceType: 'exts', path: externalPath},
        },
    };
});

afterEach(async () => {
    await fs.remove(fixture);
});

test('custom development modes keep the plugin, development semantics and local public assets', async () => {
    const config = await createDevViteConfig({rootPath, libsCache, sources: [rootPath], mode: 'staging', development: true});
    expect(config.server).toMatchObject({host: '127.0.0.1', port: 5173, strictPort: true});
    expect(config.server?.allowedHosts).toBeUndefined();
    expect(config.cacheDir).toBeUndefined();
    expect(config.server?.fs?.allow).toEqual([...new Set([rootPath, await fs.realpath(rootPath), await fs.realpath(libsCache['@example/controls'].zui.path)])]);
    expect(config.define).toMatchObject({'process.env.NODE_ENV': '"development"', __BUILD_MODE__: '"staging"', __BUILD_HASH__: '"dev"'});
    expect(config.define?.__BUILD_TIME__).toBeGreaterThan(0);
    expect((config.plugins?.flat(2) as Plugin[]).some(plugin => plugin.name === 'config-dev-server')).toBe(true);
    const aliases = config.resolve?.alias;
    if (!Array.isArray(aliases)) throw new Error('Expected aliases');
    const resolveAsset = aliases.find(alias => alias.find === '@/')?.customResolver;
    if (typeof resolveAsset !== 'function') throw new Error('Expected library asset resolver');
    const lib = libsCache['@example/controls'];
    expect(Reflect.apply(resolveAsset, {}, ['/public/image.png', Path.join(lib.zui.path, 'src/main.ts')])).toBe(Path.join(lib.zui.path, 'public/image.png'));
});

test('uses the owned session cache without preparing it or changing another session', async () => {
    const cacheDir = Path.join(fixture, 'session-cache');
    const config = await createDevViteConfig({rootPath, libsCache, sources: [], mode: 'development', development: true, cacheDir});
    expect(config.cacheDir).toBe(cacheDir);
    expect(config.server?.fs?.allow).toContain(cacheDir);
    expect(await fs.pathExists(cacheDir)).toBe(false);
    const other = await createDevViteConfig({rootPath, libsCache, sources: [], mode: 'development', development: true});
    expect(other.cacheDir).toBeUndefined();
    expect(other.server?.fs?.allow).not.toContain(cacheDir);
});

test('preview does not install development middleware', async () => {
    const config = await createDevViteConfig({rootPath, libsCache, sources: [rootPath], mode: 'production', development: false});
    expect(config.plugins).toEqual([]);
    expect(config.build?.outDir).toBe('dist/dev');
});

test('the Vite config loader can bundle the development configuration', async () => {
    const configFile = Path.join(fixture, 'vite.config.ts');
    await fs.writeJSON(Path.join(fixture, 'package.json'), {type: 'module'});
    await fs.writeFile(configFile, `import {createDevViteConfig} from ${JSON.stringify(Path.resolve(import.meta.dirname, '../../scripts/dev/config.ts'))};
        export default () => createDevViteConfig({rootPath: ${JSON.stringify(rootPath)}, libsCache: {}, sources: [], mode: 'custom', development: true});`);
    const result = await loadConfigFromFile({command: 'serve', mode: 'custom'}, configFile);
    expect(result?.config.server).toMatchObject({host: '127.0.0.1', strictPort: true});
});

test('Tailwind scans the selected external playground and loads its preset', async () => {
    const lib = libsCache['@example/controls'];
    lib.zui.tailwindConfigPath = Path.join(lib.zui.path, 'tailwind.cjs');
    await fs.writeFile(lib.zui.tailwindConfigPath, 'module.exports = {theme: {extend: {colors: {selected: "#123456"}}}};');
    await fs.writeFile(Path.join(lib.zui.path, 'dev.md'), '<div class="-w-[137px] -text-selected"></div>');
    const config = await createDevViteConfig({rootPath, libsCache, sources: [rootPath], mode: 'development', development: true});
    const css = config.css?.postcss;
    if (!css || typeof css === 'string') throw new Error('Expected inline PostCSS configuration');
    const result = await postcss(css.plugins).process('@tailwind utilities;', {from: undefined});
    expect(result.css).toContain('width: 137px');
    expect(result.css).toContain('rgb(18 52 86');
});

test('recreating the server reloads Tailwind presets and their local dependencies', async () => {
    const lib = libsCache['@example/controls'];
    lib.zui.tailwindConfigPath = Path.join(lib.zui.path, 'tailwind.cjs');
    const colors = Path.join(lib.zui.path, 'colors.cjs');
    await fs.symlink(Path.resolve(import.meta.dirname, '../../node_modules'), Path.join(lib.zui.path, 'node_modules'), 'dir');
    await fs.writeFile(lib.zui.tailwindConfigPath, 'const colors = require("./colors.cjs"); const plugin = require("tailwindcss/plugin"); module.exports = {default: () => ({theme: {extend: {colors}}, plugins: [plugin(({addUtilities}) => addUtilities({".from-plugin": {display: "block"}}))]})};');
    await fs.writeFile(Path.join(lib.zui.path, 'dev.md'), '<div class="-text-selected -from-plugin"></div>');
    for (const [color, expected] of [['#123456', 'rgb(18 52 86'], ['#abcdef', 'rgb(171 205 239']]) {
        await fs.writeFile(colors, `module.exports = {selected: "${color}"};`);
        const config = await createDevViteConfig({rootPath, libsCache, sources: [rootPath], mode: 'development', development: true});
        const css = config.css?.postcss;
        if (!css || typeof css === 'string') throw new Error('Expected inline PostCSS configuration');
        const result = await postcss(css.plugins).process('@tailwind utilities;', {from: undefined});
        expect(result.css).toContain(expected);
        expect(result.css).toContain('.-from-plugin');
    }
});

test('native Node reloads ESM function presets and their imported dependencies', async () => {
    const lib = libsCache['@example/controls'];
    lib.zui.tailwindConfigPath = Path.join(lib.zui.path, 'tailwind.js');
    await fs.writeJSON(Path.join(lib.zui.path, 'package.json'), {type: 'module'});
    await fs.writeFile(lib.zui.tailwindConfigPath, 'import colors from "./colors.js"; export default () => ({theme: {extend: {colors}}});');
    await fs.writeFile(Path.join(lib.zui.path, 'dev.md'), '<div class="-text-selected"></div>');
    const configFile = Path.join(fixture, 'vite.config.mjs');
    await fs.writeFile(configFile, `import {createDevViteConfig} from ${JSON.stringify(Path.resolve(import.meta.dirname, '../../scripts/dev/config.ts'))};
        export default () => createDevViteConfig(${JSON.stringify({rootPath, libsCache, sources: [rootPath], mode: 'custom', development: true})});`);
    const require = createRequire(import.meta.url);
    const script = Path.join(fixture, 'native-node.mjs');
    await fs.writeFile(script, `import {writeFile} from 'node:fs/promises';
        import {loadConfigFromFile} from ${JSON.stringify(require.resolve('vite'))};
        import postcss from ${JSON.stringify(require.resolve('postcss'))};
        const results = [];
        for (const color of ['#123456', '#abcdef']) {
            await writeFile(${JSON.stringify(Path.join(lib.zui.path, 'colors.js'))}, 'export default {selected: ' + JSON.stringify(color) + '};');
            const loaded = await loadConfigFromFile({command: 'serve', mode: 'custom'}, ${JSON.stringify(configFile)});
            const result = await postcss(loaded.config.css.postcss.plugins).process('@tailwind utilities;', {from: undefined});
            results.push(result.css);
        }
        process.stdout.write(JSON.stringify(results));`);
    const {stdout} = await promisify(execFile)(process.execPath, [script], {env: {...process.env, NODE_OPTIONS: ''}});
    const results = JSON.parse(stdout) as string[];
    expect(results[0]).toContain('rgb(18 52 86');
    expect(results[1]).toContain('rgb(171 205 239');
});
