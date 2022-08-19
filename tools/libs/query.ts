import fs from 'fs-extra';
import Path from 'path';
import {LibInfo, LibSourceType} from './lib-info';
import {getLibsCache, setLibsCache} from './libs-cache';

/**
 * Get lib list
 * @param libPath - Lib path - 组件路径
 */
export async function getLibs(libPath: string | string[] = '', options: {root?: string, sourceType?: LibSourceType, cache?: boolean} = {}): Promise<Record<string, LibInfo>> {
    if (!libPath) {
        const libs = await getLibs(['buildIn', 'exts'], options);
        return libs;
    }
    if (libPath === 'exts') {
        const extsPath = Path.resolve(process.cwd(), 'exts');
        const dirs = await fs.readdir(extsPath);
        const libs = await getLibs(dirs.map((x) => Path.resolve(extsPath, x)));
        return libs;
    }

    if (Array.isArray(libPath)) {
        const libs: Record<string, LibInfo> = {};
        for (const lib of libPath) {
            const libInfo = await getLibs(lib, options);
            Object.assign(libs, libInfo);
        }
        return libs;
    }

    const {root = process.cwd(), cache = false} = options;
    if (libPath === 'buildIn') {
        libPath = Path.resolve(process.cwd(), './lib');
    } else if (!Path.isAbsolute(libPath)) {
        libPath = Path.resolve(root, libPath);
    }

    let {sourceType} = options;
    if (!sourceType) {
        sourceType = Path.resolve(process.cwd(), './lib') === libPath ? 'build-in' : 'exts';
    }

    if (cache) {
        const libsCache = await getLibsCache(libPath);
        if (libsCache) {
            return libsCache.libs;
        }
    }

    const dirs = await fs.readdir(libPath);

    const libs: Record<string, LibInfo> = {};
    for (const dir of dirs) {
        const packageFile = Path.resolve(libPath, dir, 'package.json');
        const packageFileExists = await fs.pathExists(packageFile);
        if (!packageFileExists) {
            continue;
        }
        const packageJson = await fs.readJson(packageFile, {throws: false}) as LibInfo;
        if (!packageJson || !packageJson.name) {
            continue;
        }

        const defaultName = packageJson.name.startsWith('@zui/') ? packageJson.name.substring(5) : packageJson.name;
        packageJson.zui = Object.assign({
            type: 'component',
            displayName: defaultName,
            contributes: {},
            docs: {
                sidebar: 'lib',
                section: 'components',
            },
            path: Path.resolve(libPath, dir),
            sourceType,
            name: defaultName,
            extsName: sourceType === 'exts' ? libPath.split('/').pop() : undefined,
        }, packageJson.zui);

        const libInfo = packageJson as LibInfo;
        libs[libInfo.zui.name] = libInfo;
    }

    if (cache) {
        await setLibsCache(libPath, libs);
    }
    return libs;
}

export function getBuildInLibs() {
    return getLibs('buildIn');
}

export function getExtLibs() {
    return getLibs('exts');
}

export function getAllLibs() {
    return getLibs();
}
