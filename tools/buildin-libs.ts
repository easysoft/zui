import Path from 'path';
import fs from 'fs-extra';

/**
 * Get build-in libs list - 获取内部构建库（或组件），每个 ZUI 组件可以作为单独的库进行打包
 * @returns Libs list - 构建库（或组件）列表
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
