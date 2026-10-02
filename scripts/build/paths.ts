import Path from 'node:path';
import fs from 'fs-extra';

export function isWithin(path: string, directory: string) {
    const relative = Path.relative(directory, path);
    return relative === '' || (!relative.startsWith(`..${Path.sep}`) && relative !== '..' && !Path.isAbsolute(relative));
}

/** Resolve existing ancestors as well as targets that have not been created yet. */
export async function canonical(path: string): Promise<string> {
    path = Path.resolve(path);
    const stat = await fs.lstat(path).catch((error: NodeJS.ErrnoException) => {
        if (error.code !== 'ENOENT') {
            throw error;
        }
    });
    if (stat) {
        try {
            return await fs.realpath(path);
        } catch (error) {
            throw new Error(`Cannot resolve build path "${path}"; check for dangling symbolic links.`, {cause: error});
        }
    }
    const parent = Path.dirname(path);
    if (parent === path) {
        throw new Error(`Cannot resolve build path "${path}".`);
    }
    return Path.join(await canonical(parent), Path.basename(path));
}
