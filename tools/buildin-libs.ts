import Path from 'path';
import fs from 'fs-extra';

/** Lib type orders - 组件类型顺序 */
export const libTypeOrders = {
    'css-base': 1,
    'control': 2,
    'js-helpers': 3,
    'component': 4,
    'css-utilities': 5,
    'js-lib': 6,
};

/** 组件类型 */
export type LibType = keyof typeof libTypeOrders;

/** Build-in component info - 内置组件信息 */
export interface BuildInLibInfo {
    /** Name - 组件名称 */
    name: string;

    /** Short name - 简短名称 */
    shortName: string;

    /** Display name - 显示名称 */
    displayName: string;

    /** Version - 版本 */
    version: string;

    /** Workspace version - 工作空间版本 */
    workspaceVersion: string;

    /** Type - 类型 */
    type: LibType;

    /** Order - 顺序 */
    order: number;

    /** Development dependencies */
    devDependencies?: Record<string, string>,

    /** Dependencies */
    dependencies?: Record<string, string>,

    /** Whethear the lib has user docs */
    hasUserDocs?: boolean,
}

/**
 * Get build-in libs list - 获取内部构建库（或组件），每个 ZUI 组件可以作为单独的库进行打包
 * @returns Libs list - 构建库（或组件）列表
 */
export async function getBuildInLibs(options?: {readNameFromDoc: boolean}): Promise<Map<string, BuildInLibInfo>> {
    const map = new Map<string, BuildInLibInfo>();
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
        if (!packageJson.name.startsWith('@zui/')) {
            continue;
        }

        let type = 'component';
        if (Array.isArray(packageJson.keywords)) {
            const typeKeyword = (packageJson.keywords as string[]).find((x) => x.startsWith('zui:'));
            if (typeKeyword) {
                type = (typeKeyword as string).substring('zui:'.length);
            }
        }

        const lib: BuildInLibInfo = {
            name: packageJson.name,
            shortName: packageJson.name.replace('@zui/', ''),
            version: packageJson.version,
            workspaceVersion: `workspace:^${packageJson.version}`,
            type: type as LibType,
            order: libTypeOrders[type as LibType],
            dependencies: packageJson.dependencies,
            devDependencies: packageJson.devDependencies,
            displayName: packageJson.name.toUpperCase(),
        };

        if (options?.readNameFromDoc) {
            const userDocFile = Path.resolve(libPath, dir, 'docs/index.md');
            lib.hasUserDocs = await fs.pathExists(userDocFile);
            if (lib.hasUserDocs) {
                const doc = await fs.readFile(userDocFile, 'utf8');
                const match = doc.match(/^#+\s+(.*)$/m);
                if (match) {
                    lib.displayName = match[1];
                }
            } else {
                const devDocFile = Path.resolve(libPath, dir, 'README.md');
                const devDocFileExists = await fs.pathExists(devDocFile);
                if (devDocFileExists) {
                    const doc = await fs.readFile(devDocFile, 'utf8');
                    const match = doc.match(/^#+\s+(.*)$/m);
                    if (match) {
                        lib.displayName = match[1];
                    }
                }
            }
        }
        map.set(packageJson.name, lib);
    }
    return map;
}
