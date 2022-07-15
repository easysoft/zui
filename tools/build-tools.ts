import {fs, path as Path} from 'zx';
import {getBuildInLibs} from './buildin-libs.js';

/**
 * Libs like string - 构建库（或组件）定义字符串
 * @example
 * - `button dropdown` 使用空格拼接多个依赖来定义一个构建库（或组件）
 * - `:zui-button button dropdown` 在依赖定义前使用 `:` 来指定构建名称
 * - `+clipboard +jquery@^3.0` 使用 + 来引用 npm 上的第三方包
 * - `./my_path/custom_lib_entry.js` 指定用于作为构建库（或组件）的入口文件路径
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
}

/**
 * Build lib dependency - 构建库（或组件）依赖定义
 */
export type BuildLibDependency = {
    /** Dependency name - 名称 */
    name: string;

    /** Dependency type - 依赖类型 */
    type: 'package',

    /** Package version - 依赖的包版本 */
    version: string;
} | {
    /** Dependency name - 名称 */
    name: string;

    /** Dependency type - 依赖类型 */
    type: 'file',

    /** File path - 依赖的文件路径 */
    path: string;
};


/**
 * Build lib dependency like - 构建库（或组件）依赖定义字符串
 * @see https://docs.npmjs.com/cli/v8/configuring-npm/package-json#dependencies
 * @example
 *  - `+jquery@3.0.0`
 *  - `+jquery@^3.0` 依赖 jquery 3.0 兼容版本
 *  - `+jquery` 依赖 jquery 最新版本，相当于 `+jquery@latest`
 *  - `button` 依赖 "@zui/button" 最新版本，相当于 `@zui/button@latest`
 *  - `button@3.0.0` 依赖 "@zui/button" 3.0.0 版本，相当于 `@zui/button@3.0.0`
 *  - `./my/custom_file.js` 依赖一个指定路径的文件
 */
export type BuildLibDependencyLike = string | BuildLibDependency;

/**
 * Build lib - 构建库（或组件）定义
 */
export interface BuildLib {
    /** Build lib name - 构建库（或组件）名称 */
    name: string;

    /** Build lib dependencies - 构建库（或组件）依赖列表 */
    dependencies: BuildLibDependency[],

    /** Build lib entry file */
    entryFile?: string;
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
    libs: BuildLib[];
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
 * Get absolute path - 从路径字符串获取绝对路径
 * @param path Path string - 路径字符串
 * @returns Path
 */
function getAbsolutePath(path: string) {
    if (Path.isAbsolute(path)) {
        return path;
    }
    return Path.resolve(process.cwd(), path.startsWith('~/') ? path.replace('~', '.') : path);
}

/**
 * Parse a string to a build lib dependency - 解析一个字符串为构建库（或组件）依赖定义
 * @param dependencyLike Dependency like string - 依赖定义字符串
 * @param buildInLibs Build in libs - 内置库
 * @returns Build lib dependency - 构建库（或组件）依赖定义
 */
function parseBuildDependency(dependencyLike: BuildLibDependencyLike, buildInLibs: Map<string, string>): BuildLibDependency {
    if (typeof dependencyLike !== 'string') {
        return dependencyLike;
    }
    if (isPathLike(dependencyLike)) {
        return {name: dependencyLike.split('/').pop() as string, type: 'file', path: dependencyLike};
    }
    const isNpmLib = dependencyLike.startsWith('+');
    dependencyLike = isNpmLib ? dependencyLike.substring(1) : dependencyLike;
    const startWithAt = dependencyLike.startsWith('@');
    const [namePart, versionOrPath] = (startWithAt ? dependencyLike.substring(1) : dependencyLike).split('@');
    let name = `${startWithAt ? '@' : ''}${namePart}`;
    if (!isNpmLib) {
        if (isPathLike(versionOrPath)) {
            return {name, type: 'file', path: versionOrPath};
        }
        if (!name.startsWith('@zui/')) {
            name = `@zui/${name}`;
        }
        if (!buildInLibs.has(name)) {
            throw new Error(`Build Error: ${name} is not a build in lib`);
        }
    }
    let version = versionOrPath;
    if (!version) {
        if (buildInLibs.has(name)) {
            version = buildInLibs.get(name) as string;
        }
    }
    return {
        name,
        type: 'package',
        version: version || 'latest',
    };
}

/**
 * Parse a string to a BuildLib - 解析一个字符串为构建库（或组件）
 * @param lib Lib - 构建库（或组件）定义字符串
 * @param buildInLibs Build in libs - 内置库
 * @returns Build lib - 构建库（或组件）
 */
function parseBuildLib(lib: string, buildInLibs: Map<string, string>): BuildLib {
    if (lib === 'zui' || lib === '@zui') {
        return {
            name: 'zui',
            dependencies: [...buildInLibs.entries()].map(([name, version]) => ({
                name,
                type: 'package',
                version,
            })),
        };
    }

    const dependency = parseBuildDependency(lib, buildInLibs);
    return {name: dependency.name, dependencies: [dependency]};
}

/**
 * Parse a string to a build libs - 解析一个字符串为构建库（或组件）列表
 * @param libsLike Libs like string - 构建库（或组件）字符串
 * @param buildInLibs Build in libs - 内置库
 * @returns 构建库（或组件）列表和名称
 */
function parseBuildLibs(libsLike: LibsLike, buildInLibs: Map<string, string>): {name: string | null, libs: BuildLib[]} {
    const libs: BuildLib[] = [];
    let name: string | null = null;
    libsLike.split(/[ ,]/).forEach(libLike => {
        if (!libLike.length) {
            return;
        }
        if (libLike.startsWith(':')) {
            name = libLike.substring(1);
        } else {
            libs.push(parseBuildLib(libLike, buildInLibs));
        }
    });
    return {libs, name};
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

    const buildConfig: BuildConfig = {name, version, libs: []};

    const buildInLibs = await getBuildInLibs();
    if (configFileOrLibs && isPathLike(configFileOrLibs)) {
        const configFromFile = await fs.readJSON(Path.isAbsolute(configFileOrLibs) ? configFileOrLibs : Path.resolve(process.cwd(), configFileOrLibs));
        Object.assign(buildConfig, configFromFile);
    } else {
        const results = parseBuildLibs(configFileOrLibs || 'zui', buildInLibs);
        buildConfig.libs.push(...results.libs);
        if (!buildConfig.name.length) {
            if (typeof results.name === 'string' && results.name.length) {
                buildConfig.name = results.name;
            } else if (buildConfig.libs.length === 1) {
                buildConfig.name = results.libs[0].name;
                if (buildConfig.name.startsWith('@zui/')) {
                    buildConfig.name = buildConfig.name.substring('@zui/'.length);
                }
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
    } else if (buildInLibs.has(buildConfig.name)) {
        throw new Error(`Build Error: Build name "${buildConfig.name}" must be difference from build-in libs.`);
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
        lib.dependencies.reduce<string[]>((lines, dependency) => {
            if (dependency.type === 'file') {
                lines.push(`export * from ${JSON.stringify(getAbsolutePath(dependency.path))};`);
            } else {
                lines.push(`export * from ${JSON.stringify(dependency.name)};`);
                dependencies[dependency.name] = dependency.version;
            }
            return lines;
        }, entryFileLines);
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
export function createViteConfig(config: BuildConfig, buildDir: string) {
    return {
        build: {
            lib: {
                entry: Path.join(buildDir, 'main.ts'),
                name: 'zui',
                fileName: !config.name.includes('zui') ? `zui.${config.name}` : config.name,
                formats: ['iife', 'cjs', 'esm', 'umd'],
            },
            outDir: `dist/${config.name}`,
        },
    };
}
