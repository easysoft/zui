import Path from 'path';
import glob from 'fast-glob';
import fs from 'fs-extra';
import {yellow, red, underline} from 'colorette';
import {LibInfo} from '../libs/lib-info';

export async function syncLibDocs(lib: LibInfo) {
    const docsPath = Path.resolve(process.cwd(), 'docs'); // '/docs'
    const libDocsDir = Path.join(lib.zui.path, 'docs');   // 'libs/avatar/docs'
    const libDocsDirExists = await fs.pathExists(libDocsDir);
    const name = lib.zui.name;
    if (libDocsDirExists) {
        const dirs = await glob('*/', {cwd: libDocsDir, onlyDirectories: true});
        for (const dir of dirs) {
            const [sidebar] = dir.split('-');
            const libDir = Path.join(docsPath, sidebar, '_', name);
            await fs.copy(Path.join(libDocsDir, dir), libDir);
        }
    }

    const libAssetsDir = Path.resolve(lib.zui.path, 'assets');
    const libAssetsDirExists = await fs.pathExists(libAssetsDir);
    if (libAssetsDirExists) {
        const docsAssetsDir = Path.resolve(process.cwd(), './docs/public/assets', name);
        await fs.copy(libAssetsDir, docsAssetsDir);
    }
}

export async function syncLibDocFile(file: string, isRemove?: boolean): Promise<string> {
    const libPath = Path.resolve(process.cwd(), 'lib');
    const relativePath = Path.relative(libPath, file);
    const [libName, type, ...restPath] = relativePath.split(Path.sep);
    let targetFile = '';
    if (type === 'assets') {
        targetFile = Path.resolve(process.cwd(), 'docs', 'public', 'assets', libName, ...restPath);
    } else if (restPath.length < 2) {
        console.log(` ${red('ERROR')} file ${underline(yellow(relativePath))} is place in wrong place.`);
        return '';
    } else {
        const [sidebarInfo, fileName] = restPath;
        targetFile = Path.resolve(process.cwd(), 'docs', sidebarInfo.split('-', 2)[0], '_', libName, fileName);
    }

    try {
        if (isRemove) {
            if (await fs.pathExists(targetFile)) {
                await fs.remove(targetFile);
            }
        } else {
            await fs.ensureDir(Path.dirname(targetFile));
            await fs.copyFile(file, targetFile);
        }
        return targetFile;
    } catch (error) {
        console.log(` ${red('ERROR')} cannot ${isRemove ? 'delete' : 'copy'} file ${underline(file)} to ${underline(Path.relative(process.cwd(), targetFile))}.`, error);
        return '';
    }
}

export async function emptySidebarLibDocs() {
    const docsPath = Path.resolve(process.cwd(), 'docs');
    const dirs = await glob('*/_', {cwd: docsPath, onlyDirectories: true});
    for (const dir of dirs) {
        const tempDir = Path.join(docsPath, dir);
        await fs.emptyDir(tempDir);
    }
}
