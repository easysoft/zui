import fs from 'fs-extra';
import Path from 'path';
import {LibInfo, LibSourceType} from './lib-info';
import {LibType, libTypeOrders} from './lib-type';
import {getLibsCache, setLibsCache} from './libs-cache';

/**
 * Get lib list
 * @param libPath - Lib path - 组件路径
 */
export async function getLibs(libPath: string | string[] = '', options: {root?: string, sourceType?: LibSourceType, cache?: boolean, idx?: number} = {}): Promise<Record<string, LibInfo>> {
    if (!libPath || libPath === 'all') {
        const libs = await getLibs(['buildIn', 'exts'], options);
        return libs;
    }
    if (libPath === 'exts') {
        const extsPath = Path.resolve(process.cwd(), 'exts');
        const extsPathExits = await fs.pathExists(extsPath);
        if (!extsPathExits) {
            return {};
        }
        const dirs = await fs.readdir(extsPath, {}) as string[];
        const dirPaths: string[] = [];
        for (const dir of dirs) {
            const dirPath = Path.resolve(extsPath, dir);
            if (fs.statSync(dirPath).isDirectory()) {
                dirPaths.push(dirPath);
            }
        }
        const libs = await getLibs(dirPaths, options);
        return libs;
    }

    if (Array.isArray(libPath)) {
        const libs: Record<string, LibInfo> = {};
        for (let i = 0; i < libPath.length; i++) {
            const lib = await getLibs(libPath[i], {...options, idx: i});
            Object.assign(libs, lib);
        }
        return libs;
    }

    const {root = process.cwd(), cache = true} = options;
    if (libPath.toLowerCase() === 'buildin') {
        libPath = Path.resolve(process.cwd(), './lib');
    } else if (!Path.isAbsolute(libPath)) {
        libPath = Path.resolve(root, libPath);
    }

    let {sourceType} = options;
    if (!sourceType) {
        sourceType = Path.resolve(process.cwd(), './lib') === libPath ? 'build-in' : 'exts';
    }

    let workspace = sourceType === 'build-in';
    if (sourceType === 'exts' && libPath.startsWith(root)) {
        const libPathStat = await fs.stat(libPath);
        workspace = !libPathStat.isSymbolicLink();
    }

    const beginTime = Date.now();
    if (cache) {
        const libsCache = await getLibsCache(libPath);
        if (libsCache) {
            return libsCache.libs;
        }
    }

    const dirs = await fs.readdir(libPath);

    const libs: Record<string, LibInfo> = {};
    for (let i = 0; i < dirs.length; ++i) {
        const dir = dirs[i];
        const packageFile = Path.resolve(libPath, dir, 'package.json');
        const packageFileExists = await fs.pathExists(packageFile);
        if (!packageFileExists) {
            continue;
        }
        const packageJson = await fs.readJson(packageFile, {throws: false}) as Record<string, unknown>;
        if (!packageJson || !packageJson.name) {
            continue;
        }

        const libInfo = createLibFromPackageJson(packageJson, {
            sourceType,
            path: Path.resolve(libPath, dir),
            idx: ((options.idx ?? 0) * 10000) + i,
            workspace,
            packageJsonPath: packageFile,
        });
        libs[libInfo.zui.name] = libInfo;
    }

    await setLibsCache(libPath, libs, beginTime);
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

export async function getLibList(libPath: string | string[] = '', options: {root?: string, sourceType?: LibSourceType, cache?: boolean, idx?: number} = {}) {
    const libs = await getLibs(libPath, options);
    return Object.values(libs).sort((a, b) => a.zui.order - b.zui.order);
}

export function sortLibList(libList: LibInfo[]) {
    return libList.map((lib, idx) => {
        lib.zui.order = (libTypeOrders[lib.zui.type] * 100000000) + idx;
        return lib;
    }).sort((a, b) => a.zui.order - b.zui.order);
}

export function createLibFromPackageJson(packageJson: Record<string, unknown>, options: {sourceType?: LibSourceType, path: string, idx?: number, workspace?: boolean, packageJsonPath: string}): LibInfo {
    const name = packageJson.name as string;
    const defaultName = name.split('/').pop();
    const {sourceType = 'build-in', path, idx = 0, workspace, packageJsonPath} = options;
    const libInfo = {
        name,
        version: packageJson.version as string,
        ...packageJson,
        zui: {
            type: LibType.component,
            displayName: defaultName,
            contributes: {},
            docs: {
                sidebar: 'lib',
                section: 'components',
            },
            path,
            workspace,
            sourceType,
            name: defaultName,
            extsName: sourceType === 'exts' ? path.split('/').reverse()[1] : undefined,
            ...(packageJson.zui as Record<string, unknown>),
            order: 0,
            packageJsonPath,
        },
    } as LibInfo;
    libInfo.zui.order = (libTypeOrders[libInfo.zui.type] * 100000000) + idx;
    return libInfo;
}
