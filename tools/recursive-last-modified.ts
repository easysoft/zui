import fs from 'fs/promises';
import glob, {IOptions} from 'glob';

async function maxChangeTimeOfFile(file) {
    try {
        const stat = await fs.stat(file);
        return Math.max(stat.atimeMs, stat.mtimeMs, stat.ctimeMs);
    } catch (error) {
        return 0;
    }
}

export default function recursiveLastModified(dir, options: IOptions = {}): Promise<number> {
    return new Promise((resolve, reject) => {
        glob(dir, {realpath: true, ...options}, (error, files) => {
            if (error) {
                return reject(error);
            }
            Promise.all(files.map(maxChangeTimeOfFile)).then(times => {
                resolve(Math.max(...times));
            });
        });
    });
}
