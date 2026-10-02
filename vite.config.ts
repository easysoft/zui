import {defineConfig, mergeConfig} from 'vite';
import preact from '@preact/preset-vite';
import configDevServer from './scripts/dev/config-server';
import {getLibs} from './scripts/libs/query';
import {createSharedViteConfig} from './vite.shared';
import {ensureExtsTsconfig, getBuildMetadata} from './scripts/build/metadata';

/** Development and preview only; scripts/build/vite.ts owns distribution builds. */
export default defineConfig(async ({mode}) => {
    await ensureExtsTsconfig(__dirname);
    const libsCache = await getLibs((process.env.BUILD_LIBS ?? 'buildIn').split(','));
    const metadata = await getBuildMetadata(__dirname, Object.values(libsCache));
    return mergeConfig(createSharedViteConfig({mode, rootPath: __dirname, libsCache, ...metadata}), {
        base: './',
        build: {outDir: 'dist/dev'},
        server: {allowedHosts: true},
        plugins: mode === 'development' ? [preact(), configDevServer({rootPath: __dirname})] : [],
    });
});
