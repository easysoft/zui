import Path from 'node:path';
import {createHash} from 'node:crypto';
import {createRequire} from 'node:module';
import {realpath} from 'node:fs/promises';
import {defineConfig, mergeConfig, normalizePath} from 'vite';
import type {Plugin} from 'vite';
import type {LibInfo} from '../scripts/libs/lib-info';
import {ensureExtsTsconfig} from '../scripts/build/metadata';
import {createSharedViteConfig} from '../vite.shared';
import {getStorybookContent, getStorybookLibraries, rootPath, sharedStorybookPackages} from './libraries';

const {createPostcssConfig} = createRequire(import.meta.url)(Path.join(rootPath, 'scripts/build/css-config.cjs')) as typeof import('../scripts/build/css-config.cjs');

export async function createStorybookViteConfig(libsCache: Record<string, LibInfo>, mode: string, root = rootPath) {
    const libs = Object.values(libsCache);
    const realRoots = await Promise.all(libs.map(lib => realpath(lib.zui.path)));
    const cacheKey = createHash('sha256').update(realRoots.slice().sort().join('\n')).digest('hex').slice(0, 16);
    const sourceRoots = [...new Set([...libs.map(lib => lib.zui.path), ...realRoots])]
        .map(directory => `${normalizePath(Path.join(directory, 'src'))}/`);
    return mergeConfig(createSharedViteConfig({rootPath: root, libsCache, mode, bundlePublicAssets: true}), {
        publicDir: false,
        resolve: {dedupe: sharedStorybookPackages},
        optimizeDeps: {include: ['preact/jsx-runtime', 'preact/jsx-dev-runtime']},
        css: {
            postcss: createPostcssConfig({
                development: mode === 'development',
                minify: mode === 'production',
                tailwindConfigs: libs.flatMap(lib => lib.name !== '@zui/base' && lib.zui.tailwindConfigPath ? [lib.zui.tailwindConfigPath] : []),
                content: getStorybookContent(libsCache, root),
            }),
        },
        plugins: [{
            name: 'zui-storybook-library-environment',
            // Storybook replaces these settings; apply them during Vite resolution.
            config: () => ({
                cacheDir: Path.join(process.env.CACHE_DIR ?? Path.join(root, 'node_modules/.cache/zui-storybook'), cacheKey),
                server: {fs: {allow: [root, ...realRoots]}},
            }),
        }, {
            name: 'zui-storybook-reload-components',
            handleHotUpdate({file, server}) {
                const normalized = normalizePath(file);
                if (/\.[jt]sx?$/.test(normalized) && sourceRoots.some(directory => normalized.startsWith(directory))) {
                    // Custom element constructors cannot be replaced in an existing registry.
                    server.ws.send({type: 'full-reload'});
                    return [];
                }
            },
        } satisfies Plugin],
    });
}

export default defineConfig(async ({mode}) => {
    const libs = await getStorybookLibraries();
    if (Object.values(libs).some(lib => lib.zui.sourceType === 'exts')) {
        await ensureExtsTsconfig(rootPath);
    }
    return createStorybookViteConfig(libs, mode);
});
