import {fs, path as Path} from 'zx';

/**
 * Targets like string - 构建目标定义字符串
 * @example
 * - `jquery @zui/button` 使用空格拼接多个依赖来定义一个构建目标
 * - `:zui-button jquery button` 在依赖定义前使用 `:` 来指定构建名称
 * - `zui-basic config panel jquery@^3.0 !button` 使用空格连接多个构建目标
 * - `./my_path/custom_target_entry.js` 指定用于作为构建目标的入口文件路径
 */
export type TargetsLike = string;

/**
 * Build config options - 构建配置选项
 */
export interface BuildConfigOptions {
    /** Build name - 构建名称 */
    name?: string;

    /** Build version - 构建版本 */
    version?: string;

    /** Extra config file path - 构建目标字符串或配置文件路径 */
    targets?: TargetsLike;
}

/**
 * Build target dependency - 构建目标依赖定义
 */
export type BuildTargetDependency = {
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
 * Build target dependency like - 构建目标依赖定义字符串
 * @see https://docs.npmjs.com/cli/v8/configuring-npm/package-json#dependencies
 * @example
 *  - `jquery@3.0.0`
 *  - `jquery@^3.0` 依赖 jquery 3.0 兼容版本
 *  - `jquery` 依赖 jquery 最新版本，相当于 `jquery@latest`
 *  - `@zui/button` 依赖 "@zui/button" 最新版本，相当于 `@zui/button@latest`
 *  - `@zui/button@3.0.0` 依赖 "@zui/button" 3.0.0 版本
 *  - `button` 依赖 "@zui/button" 最新版本，相当于 `@zui/button@latest`
 *  - `!button` 依赖 npm 上名称为 "button" 最新版本，相当于 `@zui/button@latest`
 *  - `./my/custom_file.js` 依赖一个指定路径的文件
 */
export type BuildTargetDependencyLike = string | BuildTargetDependency;

/**
 * Build target - 构建目标定义
 */
export interface BuildTarget {
    /** Build target name - 构建目标名称 */
    name: string;

    /** Build target dependencies - 构建目标依赖列表 */
    dependencies: BuildTargetDependency[],

    /** Build target entry file */
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

    /** Build target list - 构建目标清单 */
    targets: BuildTarget[];

    /** Build dist files path - 构建目标文件目标 */
    dist: string;
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
 * Parse a string to a build target dependency - 解析一个字符串为构建目标依赖定义
 * @param dependencyLike Dependency like string - 依赖定义字符串
 * @param buildInLibs Build in libs - 内置库
 * @returns Build target dependency - 构建目标依赖定义
 */
function parseBuildDependency(dependencyLike: BuildTargetDependencyLike, buildInLibs: Map<string, string>): BuildTargetDependency {
    if (typeof dependencyLike !== 'string') {
        return dependencyLike;
    }
    if (isPathLike(dependencyLike)) {
        return {name: dependencyLike.split('/').pop() as string, type: 'file', path: dependencyLike};
    }
    const startWithAt = dependencyLike.startsWith('@');
    const [namePart, versionOrPath] = (startWithAt ? dependencyLike.substring(1) : dependencyLike).split('@');
    let name = `${startWithAt ? '@' : ''}${namePart}`;
    if (isPathLike(versionOrPath)) {
        return {name, type: 'file', path: versionOrPath};
    }
    if (buildInLibs.has(`@zui/${name}`)) {
        name = `@zui/${name}`;
    } else if (name.startsWith('!')) {
        name = name.substring(1);
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
 * Parse a string to a BuildTarget - 解析一个字符串为构建目标
 * @param target Target - 目标
 * @param buildInLibs Build in libs - 内置库
 * @returns Build target - 构建目标
 */
function parseBuildTarget(target: string, buildInLibs: Map<string, string>): BuildTarget {
    if (target === 'zui' || target === '@zui') {
        return {
            name: 'zui',
            dependencies: [...buildInLibs.entries()].map(([name, version]) => ({
                name,
                type: 'package',
                version,
            })),
        };
    }

    const dependency = parseBuildDependency(target, buildInLibs);
    return {name: dependency.name, dependencies: [dependency]};
}

/**
 * Parse a string to a build targets - 解析一个字符串为构建目标列表
 * @param targetsLike Targets like string - 构建目标字符串
 * @param buildInLibs Build in libs - 内置库
 * @returns 构建目标列表和名称
 */
function parseBuildTargets(targetsLike: TargetsLike, buildInLibs: Map<string, string>): {name: string | null, targets: BuildTarget[]} {
    const targets: BuildTarget[] = [];
    let name: string | null = null;
    targetsLike.split(' ').forEach(targetLike => {
        if (targetLike.startsWith(':')) {
            name = targetLike.substring(1);
        } else {
            targets.push(parseBuildTarget(targetLike, buildInLibs));
        }
    });
    return {targets, name};
}

/**
 * Get build-in targets list - 获取内部构建目标，每个 ZUI 组件可以作为单独的目标进行打包
 * @returns Targets list - 构建目标列表
 */
export async function getBuildInLibs(): Promise<Map<string, string>> {
    const map = new Map<string, string>();
    const libPath = Path.resolve(process.cwd(), 'lib');
    const dirs = await fs.readdir(libPath);
    for (const dir of dirs) {
        const packageFile = Path.resolve(libPath, dir, 'package.json');
        const packageFileExists = await fs.pathExists(packageFile);
        if (!packageFileExists) {
            continue;
        }
        const packageJson = await fs.readJSON(packageFile, {throws: false});
        if (!packageJson) {
            throw new Error(`ZUI build: Cannot load package data from "${packageFile}".`);
        }
        if (!packageJson.name) {
            throw new Error(`ZUI build: Invalid package.json file "${packageFile}", the property "name" and "main" must be provided.`);
        }
        map.set(packageJson.name, `workspace:^${packageJson.version}`);
    }
    return map;
}

/**
 * Create build config for vite - 创建 Vite 构建配置
 * @param options Build config options - 构建配置选项
 * @returns 构建配置
 */
export async function createBuildConfig(options: BuildConfigOptions): Promise<BuildConfig> {
    const {
        targets: configFileOrTargets,
        name = '',
        version,
    } = options;

    const buildConfig: BuildConfig = {name, version, targets: [], dist: './dist'};

    if (configFileOrTargets && isPathLike(configFileOrTargets)) {
        const configFromFile = await fs.readJSON(Path.isAbsolute(configFileOrTargets) ? configFileOrTargets : Path.resolve(process.cwd(), configFileOrTargets));
        Object.assign(buildConfig, configFromFile);
    } else {
        const buildInLibs = await getBuildInLibs();
        const results = parseBuildTargets(configFileOrTargets || 'zui', buildInLibs);
        buildConfig.targets.push(...results.targets);
        if (!buildConfig.name.length) {
            if (typeof results.name === 'string' && results.name.length) {
                buildConfig.name = results.name;
            } else if (buildConfig.targets.length === 1) {
                buildConfig.name = results.targets[0].name;
            }
        }
    }

    if (!buildConfig.targets.length) {
        throw new Error('Build Error: Cannot build without any specific target.');
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

    for (const target of config.targets) {
        target.dependencies.reduce<string[]>((lines, dependency) => {
            if (dependency.type === 'file') {
                lines.push(`import ${JSON.stringify(getAbsolutePath(dependency.path))};`);
            } else {
                lines.push(`import ${JSON.stringify(dependency.name)};`);
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
                name: config.name,
                fileName: config.name.includes('zui') ? `zui.${config.name}` : config.name,
            },
            outDir: `dist/${config.name}`,
        },
    };
}
