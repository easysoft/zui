import fs from 'fs-extra';
import Path from 'path';
import {getExtLibPaths} from './ext-libs';
import {LibInfo, LibSourceType} from './lib-info';
import {LibType, libTypeOrders} from './lib-type';
import {getLibsCache, setLibsCache} from './libs-cache';

/**
 * Get lib list
 * @param libPath - Lib path - 组件路径
 */
export async function getLibs(libPath: string | string[] = '', options: {root?: string, sourceType?: LibSourceType, cache?: boolean, idx?: number, hasSubs?: boolean, extsName?: string} = {}): Promise<Record<string, LibInfo>> {
    if (!libPath || libPath === 'all') {
        const libs = await getLibs(['buildIn', 'exts'], options);
        return libs;
    }

    const {root = process.cwd(), cache = true} = options;
    if (libPath === 'exts') {
        const extLibsMap = await getExtLibPaths(cache);
        const extsPath = Path.resolve(process.cwd(), 'exts');
        const libs: Record<string, LibInfo> = {};
        for (const [extsName, extLibPath] of Object.entries(extLibsMap)) {
            const extLibs = await getLibs([Path.join(extsPath, extsName)], {
                ...options,
                extsName,
                hasSubs: extLibPath.endsWith('/*'),
            });
            Object.assign(libs, extLibs);
        }
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

    if (libPath.toLowerCase() === 'buildin' || libPath === 'zui') {
        libPath = Path.resolve(root, './lib');
    } else if (!Path.isAbsolute(libPath)) {
        const extsLibPath = Path.resolve(root, 'exts', libPath);
        libPath = fs.existsSync(extsLibPath) ? extsLibPath : Path.resolve(root, libPath);
    }

    const beginTime = Date.now();
    if (cache) {
        const libsCache = await getLibsCache(libPath);
        if (libsCache) {
            return libsCache.libs;
        }
    }

    let {sourceType} = options;
    if (!sourceType) {
        sourceType = Path.resolve(root, './lib') === libPath ? 'build-in' : 'exts';
    }

    let workspace = sourceType === 'build-in';
    if (sourceType === 'exts' && libPath.startsWith(root)) {
        const libPathStat = await fs.stat(libPath);
        workspace = !libPathStat.isSymbolicLink();
    }

    let dirs: string[] = [];
    if (!options.hasSubs && fs.pathExistsSync(Path.resolve(libPath, 'package.json'))) {
        dirs = [libPath];
    } else {
        dirs = await fs.readdir(libPath);
    }

    const libs: Record<string, LibInfo> = {};
    for (let i = 0; i < dirs.length; ++i) {
        const dir = dirs[i];
        const currentLibPath = Path.resolve(libPath, dir);
        const packageFile = Path.resolve(currentLibPath, 'package.json');
        const packageFileExists = await fs.pathExists(packageFile);
        if (!packageFileExists) {
            continue;
        }
        const packageJson = await fs.readJson(packageFile, {throws: false}) as Record<string, unknown>;
        if (!packageJson || !packageJson.name || packageJson.wip) {
            continue;
        }

        let tailwindConfigPath: string | undefined = Path.resolve(currentLibPath, 'tailwind.cjs');
        if (!fs.existsSync(tailwindConfigPath)) {
            tailwindConfigPath = Path.resolve(currentLibPath, 'tailwind.js');
        }
        if (!fs.existsSync(tailwindConfigPath)) {
            tailwindConfigPath = undefined;
        }
        const libInfo = createLibFromPackageJson(packageJson, {
            sourceType,
            path: currentLibPath,
            idx: ((options.idx ?? 0) * 10000) + i,
            workspace,
            packageJsonPath: packageFile,
            tailwindConfigPath,
            extsName: options.extsName ?? (sourceType === 'exts' ? currentLibPath.split('/').reverse()[dirs.length > 1 ? 1 : 0] : undefined),
        });
        if (libTypeOrders[libInfo.zui.type] === undefined) {
            throw new Error(`Error: the lib type "${libInfo.zui.type}" of "${libInfo.name}" is invalid.\n`);
        }
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
        lib.zui.order = ((lib.zui.order ?? libTypeOrders[lib.zui.type]) * 1000000000) + (lib.zui.sourceType === 'build-in' ? 10000000 : 11000000) + idx;
        return lib;
    }).sort((a, b) => a.zui.order - b.zui.order);
}

export function createLibFromPackageJson(packageJson: Record<string, unknown>, options: {sourceType?: LibSourceType, path: string, idx?: number, workspace?: boolean, packageJsonPath: string, tailwindConfigPath?: string, extsName?: string}): LibInfo {
    const name = packageJson.name as string;
    const defaultName = name.startsWith('@zui/') ? name.substring(5) : name;
    const {sourceType = 'build-in', path, idx = 0, workspace, packageJsonPath, tailwindConfigPath, extsName} = options;
    const libInfo = {
        name,
        version: packageJson.version as string,
        ...packageJson,
        zui: {
            type: LibType.component,
            displayName: defaultName,
            contributes: {},
            path,
            workspace,
            sourceType,
            name: defaultName,
            extsName,
            notReady: false,
            ...(packageJson.zui as Record<string, unknown>),
            packageJsonPath,
            tailwindConfigPath,
        },
    } as LibInfo;
    libInfo.zui.order = ((libInfo.zui.order ?? libTypeOrders[libInfo.zui.type]) * 100000000) + idx;
    return libInfo;
}
