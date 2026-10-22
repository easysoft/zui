import Path from 'node:path';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
import {defineConfig, mergeConfig, normalizePath} from 'vite';
import type {Plugin} from 'vite';
import {getLibs} from '../scripts/libs/query';
import {createSharedViteConfig} from '../vite.shared';

const rootPath = Path.resolve(fileURLToPath(new URL('../', import.meta.url)));
const {createPostcssConfig} = createRequire(import.meta.url)(Path.join(rootPath, 'scripts/build/css-config.cjs')) as typeof import('../scripts/build/css-config.cjs');

export default defineConfig(async ({mode}) => {
    const libsCache = await getLibs('buildIn', {root: rootPath, cache: false});
    return mergeConfig(createSharedViteConfig({rootPath, libsCache, mode, bundlePublicAssets: true}), {
        publicDir: false,
        css: {
            postcss: createPostcssConfig({
                development: mode === 'development',
                minify: mode === 'production',
                content: [
                    '.storybook/**/*.{ts,tsx}',
                    'lib/{label,button,pager,dropdown,modal,tabs}/*.stories.{ts,tsx}',
                    'lib/*/src/**/*.{ts,tsx}',
                ].map(pattern => normalizePath(Path.join(rootPath, pattern))),
            }),
        },
        plugins: [{
            name: 'zui-storybook-reload-components',
            handleHotUpdate({file, server}) {
                const relativePath = normalizePath(Path.relative(rootPath, file));
                if (/^lib\/[^/]+\/src\/.*\.tsx?$/.test(relativePath)) {
                    // Custom element constructors cannot be replaced in an existing registry.
                    server.ws.send({type: 'full-reload'});
                    return [];
                }
            },
        } satisfies Plugin],
    });
});
