import {defineConfig} from 'vite';
import {discoverLibraries} from './scripts/libs/discover';
import {readServiceExtensions} from './scripts/services/args';
import {createDevViteConfig} from './scripts/dev/config';
import {ensureExtsTsconfig} from './scripts/build/metadata';

/** Development and preview only; scripts/build/vite.ts owns distribution builds. */
export default defineConfig(async ({mode, command, isPreview}) => {
    const extensions = readServiceExtensions();
    const {libsMap, sources} = await discoverLibraries({rootDir: __dirname, extensions});
    if (Object.values(libsMap).some(lib => lib.zui.sourceType === 'exts')) await ensureExtsTsconfig(__dirname);
    return createDevViteConfig({rootPath: __dirname, libsCache: libsMap, sources, mode, development: command === 'serve' && !isPreview, watchExtensions: !!extensions, cacheDir: process.env.ZUI_DEV_CACHE_DIR});
});
