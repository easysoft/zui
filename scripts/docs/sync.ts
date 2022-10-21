import Path from 'path';
import glob from 'fast-glob';
import fs from 'fs-extra';
import {yellow, red, underline} from 'colorette';
import {LibInfo} from '../libs/lib-info';

export async function syncLibDocs(lib: LibInfo) {
    const docsPath = Path.resolve(process.cwd(), 'docs/_');
    const docsPublicPath = Path.resolve(docsPath, 'public');
    const libDocsDir = Path.join(lib.zui.path, 'docs');   // 'libs/avatar/docs'
    const name = lib.zui.name;
    const libDocsDirExists = await fs.pathExists(libDocsDir);
    if (libDocsDirExists) {
        const dirs = await glob('*/*/', {cwd: libDocsDir, onlyDirectories: true});
        for (const dir of dirs) {
            const libDir = Path.join(docsPath, dir, name);
            await fs.copy(Path.join(libDocsDir, dir), libDir);
        }
    }

    const libAssetsDir = Path.resolve(lib.zui.path, 'assets');
    const libAssetsDirExists = await fs.pathExists(libAssetsDir);
    if (libAssetsDirExists) {
        const docsAssetsDir = Path.resolve(docsPublicPath, './assets', name);
        await fs.copy(libAssetsDir, docsAssetsDir);
    }
}

export async function syncLibDocFile(file: string, isRemove?: boolean, lib?: LibInfo | null): Promise<string> {
    const libPath = Path.resolve(process.cwd(), 'lib');
    const docsPath = Path.resolve(process.cwd(), 'docs/docs');
    const docsDestPath = Path.resolve(process.cwd(), 'docs/_');
    const extsPath = Path.resolve(process.cwd(), 'exts');
    let targetFile = '';
    if (file.startsWith(libPath) || file.startsWith(extsPath)) {
        let relativePath = '';
        if (file.startsWith(extsPath)) {
            relativePath = Path.relative(extsPath, file);
            const relativePathParts = relativePath.split(Path.sep);
            if (relativePathParts[2] === 'docs') {
                relativePath = relativePath.split(Path.sep).slice(1).join(Path.sep);
            }
        } else {
            relativePath = Path.relative(libPath, file);
        }
        const [libName, type, ...restPath] = relativePath.split(Path.sep);
        const fullLibName = lib?.zui.name ?? libName;
        if (type === 'assets') {
            targetFile = Path.join(docsDestPath, 'public', 'assets', fullLibName, ...restPath);
        } else if (restPath.length < 3) {
            console.log(` ${red('ERROR')} file ${underline(yellow(relativePath))} is in wrong place.`);
            return '';
        } else {
            const [sidebar, section, ...fileParts] = restPath;
            targetFile = Path.join(docsDestPath, sidebar, section, fullLibName, ...fileParts);
        }
    } else if (file.startsWith(docsPath)) {
        const relativePath = Path.relative(docsPath, file);
        targetFile = Path.resolve(docsDestPath, relativePath);
    } else {
        console.log(` ${red('ERROR')} file ${underline(yellow(file))} is place in wrong place.`);
        return '';
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
    const docsDestPath = Path.resolve(process.cwd(), 'docs/_');
    const baseDocsPath = Path.resolve(process.cwd(), 'docs/docs');
    const filePaths = await fs.readdir(docsDestPath);
    for (const filePath of filePaths) {
        if (filePath === '.vitepress') {
            continue;
        }
        await fs.remove(Path.join(docsDestPath, filePath));
    }
    await fs.copy(baseDocsPath, docsDestPath);
}
