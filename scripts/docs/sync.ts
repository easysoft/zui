import Path from 'node:path';
import glob from 'fast-glob';
import fs from 'fs-extra';
import {isWithin} from '../build/paths';
import type {LibInfo} from '../libs/lib-info';

/** Initial copying and watch events share the same library-relative destination. */
export function getDocTarget(file: string, lib: LibInfo | null | undefined, root = process.cwd()): string {
    const docsDir = Path.resolve(root, 'docs/_');
    const sourceDir = lib ? lib.zui.path : Path.resolve(root, 'docs/docs');
    if (!isWithin(file, sourceDir) || Path.resolve(file) === Path.resolve(sourceDir)) {
        throw new Error(`Documentation source "${file}" is outside "${sourceDir}".`);
    }
    const relative = Path.relative(sourceDir, file);
    let target: string;
    if (lib) {
        const [type, ...parts] = relative.split(Path.sep);
        if (type === 'assets' && parts.length) {
            target = Path.join(docsDir, 'public/assets', lib.zui.name, ...parts);
        } else if (type === 'docs' && parts.length >= 3) {
            const [sidebar, section, ...rest] = parts;
            target = Path.join(docsDir, sidebar, section, lib.zui.name, ...rest);
        } else {
            throw new Error(`Invalid documentation source "${file}"; use docs/<sidebar>/<section>/<file> or assets/<file>.`);
        }
    } else {
        target = Path.join(docsDir, relative);
    }
    if (!isWithin(target, docsDir)) throw new Error(`Documentation target "${target}" is outside "${docsDir}".`);
    return target;
}

export async function syncLibDocs(lib: LibInfo, root = process.cwd()) {
    const files = await glob(['docs/*/*/**/*', 'assets/**/*'], {cwd: lib.zui.path, onlyFiles: true, dot: false});
    for (const file of files) {
        await syncLibDocFile(Path.join(lib.zui.path, file), false, lib, root);
    }
}

export async function syncLibDocFile(file: string, isRemove = false, lib?: LibInfo | null, root = process.cwd()): Promise<string> {
    const target = getDocTarget(file, lib, root);
    if (isRemove) {
        await fs.remove(target);
    } else {
        await fs.ensureDir(Path.dirname(target));
        await fs.copyFile(file, target);
    }
    return target;
}

export async function emptySidebarLibDocs(root = process.cwd()) {
    const docsDir = Path.resolve(root, 'docs/_');
    await fs.ensureDir(docsDir);
    for (const entry of await fs.readdir(docsDir)) {
        if (entry !== '.vitepress' && entry !== 'public') {
            await fs.remove(Path.join(docsDir, entry));
        }
    }
    await fs.copy(Path.resolve(root, 'docs/docs'), docsDir);
}
