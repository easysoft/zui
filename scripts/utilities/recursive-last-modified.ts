import fs from 'fs/promises';
import glob from 'fast-glob';

async function maxChangeTimeOfFile(file: string) {
    try {
        const stat = await fs.stat(file);
        return Math.max(stat.atimeMs, stat.mtimeMs, stat.ctimeMs);
    } catch (error) {
        return 0;
    }
}

export default async function recursiveLastModified(dir: string | string[], options: glob.Options = {}): Promise<number> {
    return new Promise((resolve, reject) => {
        glob(dir, {absolute: true, ...options}).then(files => {
            Promise.all(files.map(maxChangeTimeOfFile)).then(times => {
                resolve(Math.max(...times));
            }).catch(reject);
        });
    });
}
