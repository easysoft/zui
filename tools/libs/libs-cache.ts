import Path from 'path';
import fs from 'fs-extra';
import {LibInfo} from './lib-info';
import recursiveLastModified from '../recursive-last-modified';

export interface LibsListCache {
    libs: Record<string, LibInfo>,
    lastChangeTime: number,
}

const libsCache: Record<string, LibsListCache> = {};
let libsCacheLoaded = false;
const cacheDir = Path.resolve(process.cwd(), '.cache');
const cacheFile = Path.resolve(cacheDir, 'zui-libs.json');

async function loadLibsCache() {
    if (libsCacheLoaded) {
        return libsCache;
    }

    const cacheFileExists = await fs.pathExists(cacheFile);
    if (cacheFileExists) {
        const cacheData = await fs.readJson(cacheFile, {throws: false});
        if (cacheData) {
            Object.keys(cacheData).forEach(key => {
                libsCache[key] = cacheData[key] as LibsListCache;
            });
        }
    }
    libsCacheLoaded = true;
    return libsCache;
}

export async function getLibsCache(libPath: string, lastChangeTime?: number): Promise<LibsListCache | undefined> {
    await loadLibsCache();

    const cache = libsCache[libPath];
    if (cache) {
        if (!lastChangeTime) {
            lastChangeTime = await recursiveLastModified('*/**', {cwd: libPath, ignore: ['*/node_modules/**/*', '*/dist/**/*'], onlyFiles: true});
        }
        if (cache.lastChangeTime < lastChangeTime) {
            return undefined;
        }
    }
    return cache;
}

export async function setLibsCache(libPath: string, libs: Record<string, LibInfo>, lastChangeTime?: number) {
    await loadLibsCache();

    libsCache[libPath] = {libs, lastChangeTime: lastChangeTime ?? Date.now()};

    await fs.ensureDir(cacheDir);
    await fs.writeJson(cacheFile, libsCache, {spaces: 4});
}
