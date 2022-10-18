import Path from 'path';
import fs from 'fs-extra';
import {getLibs, sortLibList} from '../libs/query';
import {LibInfo} from '../libs/lib-info';
import {LibType} from '../libs/lib-type';

/**
 * Libs like string - 构建库（或组件）定义字符串
 * @example
 * - `button dropdown` 使用空格拼接多个依赖来定义一个构建库（或组件）
 * - `zui +clipboard +jquery@^3.0` 使用 + 来引用 npm 上的第三方包
 */
export type LibsLike = string;

/**
 * Build config options - 构建配置选项
 */
export interface BuildConfigOptions {
    /** Build name - 构建名称 */
    name?: string;

    /** Build version - 构建版本 */
    version?: string;

    /** Extra config file path - 构建库（或组件）字符串或配置文件路径 */
    libs?: LibsLike;

    /** Output directory - 输出目录 */
    outDir?: string;

    /** Extentions - 扩展库 */
    exts?: string | string[];

    exports?: string | string[];
}

export interface BuildLibExportTarget {
    name: string;
    alias?: string;
}

export interface BuildLibExport {
    type: 'export' | 'import';
    targets: BuildLibExportTarget[];
    path: string;
}

export interface BuildLibInfo extends LibInfo {
    /** exports paths */
    exportList?: BuildLibExport[];
}

/**
 * Build config - 构建配置
 */
export interface BuildConfig {
    /** Build name - 构建名称 */
    name: string;

    /** Build version - 构建版本 */
    version?: string;

    /** Build lib list - 构建库（或组件）清单 */
    libs: BuildLibInfo[];

    defaultExports?: BuildLibExport[];
}

/**
 * Check a string wheather is a valid path 检查一个字符串是否为路径
 * @param pathLike Path like string - 路径字符串
 * @returns If the string is a valid path then return true - 如果为路径返回 true
 */
function isPathLike(pathLike: string): boolean {
    return /^(\.?\.?|~)\//.test(pathLike);
}

function isExportPathInLib(path: string, lib: LibInfo) {
    if (!path.startsWith('/')) {
        path = `./${path}`;
    }
    if (lib.exports && Object.keys(lib.exports).some(x => path.startsWith(x))) {
        return true;
    }
    if (lib.files && lib.files.some(x => path.startsWith(x.replace('**/*', '')))) {
        return true;
    }

    return false;
}

/**
 * @example
 * -                            // export * from 'lib-name';
 * - jquery                     // export * from 'lib-name/jquery';
 * - *:jqueryLib@jquery         // export * as jqueryLib from 'lib-name/jquery';
 * - {default:jqueryLib}@jquery // export {default as jqueryLib} from 'lib-name/jquery';
 * - {jQuery}@jquery            // export {jQuery} from 'lib-name/jquery';
 * - {jQuery:$}@jquery          // export {jQuery as $} from 'lib-name/jquery';
 * - {jQuery,ajax:$ajax}@jquery // export {jQuery, ajax as $ajax} from 'lib-name/jquery';
 * - src/main-jquery.ts         // export * from 'lib-name/src/main-jquery.ts';
 * - >src/style.css             // import 'lib-name/src/style.css';
 */
function parseLibExport(statement: string, lib?: LibInfo): BuildLibExport {
    const info: BuildLibExport = {
        type: 'export',
        targets: [],
        path: '',
    };
    statement = statement.trim();
    if (statement[0] === '>') {
        info.type = 'import';
        statement = statement.substring(1);
    }
    if (statement.includes('@')) {
        const [targetsPath, path] = statement.split('@');
        const targets = targetsPath.trim().replace(/(^{)|(}$)/g, '').split(',');
        targets.forEach((item) => {
            const [name, alias] = item.trim().split(':');
            info.targets.push({name, alias})
        });
        info.path = path;

    } else {
        info.path = statement;
        info.targets.push({
            name: '*',
        });
    }

    if (lib && lib.zui.sourceType !== 'npm' && info.path.length && !isExportPathInLib(info.path, lib)) {
        throw new Error(`Build Error: export path "${info.path}" is not in lib "${lib.name}", check the properties "files" and "exports" in package.json file "${lib.zui.packageJsonPath}".`);
    }

    return info;
}

function parseLibExportList(statement: string | string[], lib?: LibInfo): BuildLibExport[] {
    const statements = Array.isArray(statement) ? [...statement] : [statement];
    return statements.map(x =>parseLibExport(x, lib));
}

function createLibExportStatement(exportInfo: BuildLibExport, libName: string): string {
    const parts = [
        exportInfo.type === 'import' ? 'import' : 'export',
    ];

    const targets: string[] = [];
    if (exportInfo.targets?.length) {
        const generalExport = exportInfo.targets.find(x => x.name ==='*');
        if (generalExport) {
            targets.push(`*${generalExport.alias ? ` as ${generalExport.alias}`: ''}`);
        }
        const namingExports: string[] = [];
        exportInfo.targets.forEach(target => {
            if (target.name === '*') {
                return;
            }
            namingExports.push(`${target.name}${target.alias ? ` as ${target.alias}`: ''}`);
        });
        if (namingExports.length) {
            targets.push(`{${namingExports.join(',')}}`);
        }
    } else if (exportInfo.type === 'export') {
        targets.push('*');
    }

    if (targets.length) {
        parts.push(targets.join(','), 'from');
    }

    let path = libName;
    if (exportInfo.path) {
        if (!exportInfo.path.startsWith('/')) {
            path += '/';
        }
        path += exportInfo.path;
    }
    parts.push(JSON.stringify(path));
    return parts.join(' ');
}

/**
 * Parse a string to a BuildLib - 解析一个字符串为构建库（或组件）
 * @param libLike Lib - 构建库（或组件）定义字符串，例如 zui, button, +jquery, @zui/button@1.1.0, dtable~jquery
 * @param libsMap Libs map - 所有可用的库
 * @returns Build lib - 构建库（或组件）
 */
function parseBuildLib(libLike: string | '@zui' | 'zui', libsMap: Record<string, LibInfo>): BuildLibInfo[] {
    if (libLike === 'zui' || libLike === '@zui' || libLike === '*zui') {
        return Object.values(libsMap).filter(x => x.zui.sourceType === 'build-in').sort((a, b) => a.zui.order - b.zui.order);
    } else if (libLike === 'zui+exts' || libLike === 'zui*exts') {
        return Object.values(libsMap).filter(x => x.zui.sourceType === 'build-in' || x.zui.sourceType === 'exts').sort((a, b) => a.zui.order - b.zui.order);
    } else if (libLike.startsWith('zui*')) {
        const extsLibs = new Set(libLike.replace('zui*', '').split('*'));
        return Object.values(libsMap).filter(x => x.zui.sourceType === 'build-in' || (x.zui.sourceType === 'exts' && x.zui.extsName && extsLibs.has(x.zui.extsName))).sort((a, b) => a.zui.order - b.zui.order);
    } else if (libLike.startsWith('*')) {
        const extsLibs = new Set(libLike.replace('*', '').split('*'));
        return Object.values(libsMap).filter(x => x.zui.sourceType === 'build-in' || (x.zui.extsName && extsLibs.has(x.zui.extsName))).sort((a, b) => a.zui.order - b.zui.order);
    }

    let exports: string[] | undefined;
    if (libLike.includes('~')) {
        const [namePart, ...importParts] = libLike.split('~');
        libLike = namePart;
        exports = importParts;
    }

    const isNpmLib = libLike.startsWith('+');
    if (isNpmLib) {
        libLike = libLike.substring(1);
    }
    const startWithAt = libLike.startsWith('@');
    const [namePart, version] = (startWithAt ? libLike.substring(1) : libLike).split('@');
    const name = `${startWithAt ? '@' : ''}${namePart}`;
    if (isNpmLib) {
        const libInfo: BuildLibInfo = {
            name,
            version,
            zui: {
                name,
                displayName: name,
                type: LibType.other,
                sourceType: 'npm',
                order: 0,
                path: '',
            },
            exportList: exports ? parseLibExportList(exports) : undefined,
        };

        return [libInfo];
    }

    const shortName = name.startsWith('@zui/') ? name.substring('@zui/'.length) : name;
    const libInfo = libsMap[shortName];
    if (!libInfo) {
        throw new Error(`Build Error: cannot find a lib named "${name}".`);
    }

    return [{
        ...libInfo,
        exportList: exports ? parseLibExportList(exports, libInfo) : undefined,
    }];
}

/**
 * Parse a string to a build libs - 解析一个字符串为构建库（或组件）列表
 * @param libsLike Libs like string - 构建库（或组件）字符串
 * @param libsMap Libs map - 所有可用的库
 * @returns 构建库（或组件）列表和名称
 */
function parseBuildLibs(libsLike: LibsLike, libsMap: Record<string, LibInfo>): BuildLibInfo[] {
    const libs: LibInfo[] = [];
    libsLike.split(' ').forEach(libLike => {
        if (!libLike.length) {
            return;
        }
        libs.push(...parseBuildLib(libLike.trim(), libsMap));
    });
    return sortLibList(libs);
}

/**
 * Create build config for vite - 创建 Vite 构建配置
 * @param options Build config options - 构建配置选项
 * @returns 构建配置
 */
export async function createBuildConfig(options: BuildConfigOptions): Promise<BuildConfig> {
    const {
        libs: configFileOrLibs,
        name = '',
        version,
    } = options;

    let {exts} = options;
    if (typeof exts === 'string') {
        if (exts !== 'no') {
            exts = exts.split(',').map(ext => ext.trim());
        }
    } else if (exts) {
        exts = ['buildIn', 'exts'];
    } else {
        exts = 'buildIn';
    }
    const libsMap = await getLibs(exts, {cache: false});
    const buildConfig: BuildConfig = {
        name,
        version,
        libs: [],
        defaultExports: options.exports ? parseLibExportList(options.exports) : undefined
    };

    if (configFileOrLibs && isPathLike(configFileOrLibs)) {
        const configFromFile = await fs.readJSON(Path.isAbsolute(configFileOrLibs) ? configFileOrLibs : Path.resolve(process.cwd(), configFileOrLibs));
        Object.assign(buildConfig, configFromFile);
    } else {
        const results = parseBuildLibs(configFileOrLibs || 'zui', libsMap);
        buildConfig.libs.push(...results);
        if (!buildConfig.name.length) {
            if (buildConfig.libs.length === 1) {
                buildConfig.name = results[0].zui.name;
            } else if (!configFileOrLibs) {
                buildConfig.name = 'zui';
            }
        }
    }

    if (!buildConfig.libs.length) {
        throw new Error('Build Error: Cannot build without any specific lib.');
    }

    if (!buildConfig.version) {
        const zuiPackageJson = await fs.readJSON(Path.resolve(process.cwd(), './package.json'));
        buildConfig.version = zuiPackageJson.version;
    }

    if (!buildConfig.name.length) {
        buildConfig.name = 'zui-custom';
    }

    return buildConfig;
}

/**
 * Prepare build files - 准备构建相关文件
 * @param config Build config
 */
export async function prepareBuildFiles(config: BuildConfig, buildDir: string) {
    const dependencies: Record<string, string> = {};
    const entryFileLines: string[] = [];

    for (const lib of config.libs) {
        dependencies[lib.name] = lib.zui.workspace ? `link:${Path.relative(buildDir, lib.zui.path)}` : lib.version;
        if (lib.exportList) {
            lib.exportList.forEach(item => {
                entryFileLines.push(createLibExportStatement(item, lib.name));
            });
        } else if (lib.zui.sourceType !== 'npm' && config.defaultExports?.length) {
            config.defaultExports.forEach(item => {
                if (isExportPathInLib(item.path, lib)) {
                    entryFileLines.push(createLibExportStatement(item, lib.name));
                } else {
                    entryFileLines.push(`export * from ${JSON.stringify(lib.name)};`);
                }
            });
        } else {
            entryFileLines.push(`export * from ${JSON.stringify(lib.name)};`);
        }
    }

    const entryFile = Path.join(buildDir, 'main.ts');
    await fs.outputFile(entryFile, entryFileLines.join('\n'));
    await fs.outputFile(Path.join(buildDir, 'pnpm-workspace.yaml'), '');

    const packageJson = {
        name: config.name,
        version: config.version,
        dependencies,
        main: 'main.ts',
    };
    await fs.outputJSON(Path.join(buildDir, 'package.json'), packageJson, {spaces: 4});
}

/**
 * Create vite config file - 创建 Vite 配置文件
 * @param config Build config - 构建配置
 * @return Vite config - Vite 配置
 */
export function createViteConfig(config: BuildConfig, options: {buildDir: string, outDir?: string}) {
    return {
        build: {
            lib: {
                entry: Path.join(options.buildDir, 'main.ts'),
                name: 'zui',
                fileName: !config.name.includes('zui') ? `zui.${config.name}` : config.name,
            },
            outDir: options.outDir ?? `dist/${config.name}`,
        },
    };
}
