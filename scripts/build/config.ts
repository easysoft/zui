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
    libs: LibInfo[];
}

/**
 * Check a string wheather is a valid path 检查一个字符串是否为路径
 * @param pathLike Path like string - 路径字符串
 * @returns If the string is a valid path then return true - 如果为路径返回 true
 */
function isPathLike(pathLike: string): boolean {
    return /^(\.?\.?|~)\//.test(pathLike);
}

/**
 * Parse a string to a BuildLib - 解析一个字符串为构建库（或组件）
 * @param libLike Lib - 构建库（或组件）定义字符串，例如 zui, button, +jquery, @zui/button@1.1.0
 * @param libsMap Libs map - 所有可用的库
 * @returns Build lib - 构建库（或组件）
 */
function parseBuildLib(libLike: string | '@zui', libsMap: Record<string, LibInfo>): LibInfo[] {
    if (libLike === 'zui' || libLike === '@zui') {
        return Object.values(libsMap).filter(x => x.zui.sourceType === 'build-in').sort((a, b) => a.zui.order - b.zui.order);
    }

    const isNpmLib = libLike.startsWith('+');
    if (isNpmLib) {
        libLike = libLike.substring(1);
    }
    const startWithAt = libLike.startsWith('@');
    const [namePart, version] = (startWithAt ? libLike.substring(1) : libLike).split('@');
    const name = `${startWithAt ? '@' : ''}${namePart}`;
    if (isNpmLib) {
        const libInfo: LibInfo = {
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
        };
        return [libInfo];
    }

    const shortName = name.startsWith('@zui/') ? name.substring('@zui/'.length) : name;
    const libInfo = libsMap[shortName];
    if (!libInfo) {
        throw new Error(`Build Error: cannot find a lib named "${name}".`);
    }

    return [libInfo];
}

/**
 * Parse a string to a build libs - 解析一个字符串为构建库（或组件）列表
 * @param libsLike Libs like string - 构建库（或组件）字符串
 * @param libsMap Libs map - 所有可用的库
 * @returns 构建库（或组件）列表和名称
 */
function parseBuildLibs(libsLike: LibsLike, libsMap: Record<string, LibInfo>): LibInfo[] {
    const libs: LibInfo[] = [];
    libsLike.split(/[ ,]/).forEach(libLike => {
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
        exts = exts.split(',').map(ext => ext.trim());
    } else if (exts) {
        exts = ['buildIn', 'exts'];
    } else {
        exts = 'buildIn';
    }
    const libsMap = await getLibs(exts, {cache: false});
    const buildConfig: BuildConfig = {name, version, libs: []};

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
        dependencies[lib.name] = lib.zui.workspace ? `workspace:${lib.version}` : lib.version;
        entryFileLines.push(`export * from ${JSON.stringify(lib.name)};`);
    }

    const entryFile = Path.join(buildDir, 'main.ts');
    await fs.outputFile(entryFile, entryFileLines.join('\n'));

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
