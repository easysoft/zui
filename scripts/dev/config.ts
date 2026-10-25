import {mkdtemp, realpath, rm, writeFile} from 'node:fs/promises';
import {createRequire} from 'node:module';
import {tmpdir} from 'node:os';
import path from 'node:path';
import glob from 'fast-glob';
import {loadConfigFromFile, mergeConfig} from 'vite';
import preact from '@preact/preset-vite';
import type {LibInfo} from '../libs/lib-info';
import {createSharedViteConfig} from '../../vite.shared';
import configDevServer from './config-server';

const require = createRequire(import.meta.url);
const cssConfigPath = require.resolve('../build/css-config.cjs');

function localConfigModules(entries: string[]) {
    const modules = new Set<string>();
    const visit = (id: string) => {
        if (modules.has(id) || id.split(path.sep).includes('node_modules')) return;
        modules.add(id);
        require.cache[id]?.children.forEach(child => visit(child.id));
    };
    entries.forEach(visit);
    return modules;
}

async function loadPresets(files: string[], rootPath: string, mode: string) {
    if (!files.length) return {presets: [], dependencies: []};
    const directory = await realpath(await mkdtemp(path.join(tmpdir(), 'zui-dev-presets-')));
    const wrapper = path.join(directory, 'presets.cjs');
    try {
        await writeFile(wrapper, [
            ...files.map((file, index) => `import preset${index} from ${JSON.stringify(file)};`),
            `export default {presets: [${files.map((_, index) => `preset${index}`).join(',')}]};`,
        ].join('\n'));
        // Bundling refreshes both CommonJS and native ESM graphs on each restart.
        const loaded = await loadConfigFromFile({command: 'serve', mode}, wrapper, rootPath, 'silent');
        if (!loaded) throw new Error('Unable to load development Tailwind presets');
        return {
            presets: ((loaded.config as {presets?: unknown[]}).presets ?? []).map(value => (value as {default?: unknown} | null)?.default ?? value),
            dependencies: loaded.dependencies.map(file => path.resolve(file)).filter(file => file !== wrapper),
        };
    } finally {
        await rm(directory, {recursive: true, force: true});
    }
}

export async function createDevViteConfig(options: {rootPath: string; libsCache: Record<string, LibInfo>; sources: string[]; mode: string; development: boolean; watchExtensions?: boolean; cacheDir?: string}) {
    const {rootPath, libsCache, sources, mode, development} = options;
    const libs = Object.values(libsCache).sort((a, b) => a.zui.order - b.zui.order);
    const roots = [...new Set(await Promise.all([...sources, ...libs.map(lib => lib.zui.path)].map(directory => realpath(directory))))];
    const content = [
        `${glob.convertPathToPattern(rootPath)}/index.{html,md}`,
        `${glob.convertPathToPattern(rootPath)}/src/**/*.{vue,js,ts,jsx,tsx,html}`,
        ...libs.flatMap(lib => [
            `${glob.convertPathToPattern(lib.zui.path)}/{index.html,README.md,dev.md,dev.ts,dev.tsx}`,
            `${glob.convertPathToPattern(lib.zui.path)}/src/**/*.{vue,js,ts,jsx,tsx,html}`,
        ]),
    ];
    const tailwindConfigs = libs.flatMap(lib => lib.name !== '@zui/base' && lib.zui.tailwindConfigPath ? [lib.zui.tailwindConfigPath] : []);
    const configEntries = [cssConfigPath];
    // Vite restarts in the same process; reload local presets and theme dependencies.
    for (const id of localConfigModules(configEntries)) delete require.cache[id];
    const {createPostcssConfig} = require(cssConfigPath) as typeof import('../build/css-config.cjs');
    const {presets, dependencies} = await loadPresets(tailwindConfigs, rootPath, mode);
    const postcss = createPostcssConfig({development, minify: false, tailwindPresets: presets, content});
    const configFiles = [...localConfigModules(configEntries), ...dependencies];
    return mergeConfig(createSharedViteConfig({
        mode, rootPath, libsCache, bundlePublicAssets: true, buildHash: 'dev', buildTime: Date.now(),
    }), {
        base: './',
        cacheDir: options.cacheDir,
        build: {outDir: 'dist/dev'},
        define: development ? {'process.env.NODE_ENV': JSON.stringify('development')} : {},
        server: {host: '127.0.0.1', port: 5173, strictPort: true, fs: {allow: [...new Set([rootPath, ...roots, ...(options.cacheDir ? [options.cacheDir] : [])])]}},
        resolve: {dedupe: ['preact', '@preact/signals', '@preact/signals-core', 'cash-dom']},
        css: {postcss},
        plugins: development ? [preact(), configDevServer({rootPath, libsCache, sources, configFiles, watchExtensions: options.watchExtensions})] : [],
    });
}
