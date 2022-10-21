import Path from 'path';
import minimist from 'minimist';
import fs from 'fs-extra';
import {saveExtLibPaths} from './ext-libs';

const extsPath = Path.resolve(process.cwd(), 'exts');
const argv = minimist(process.argv.slice(2));
let extPath = argv._[0] as string;
const extName = argv.name ?? argv.n ?? argv._[1] ?? extPath.split('/').pop();

if (!Path.isAbsolute(extPath)) {
    extPath = Path.resolve(process.cwd(), extPath);
}

await fs.ensureDir(extsPath);
await fs.symlink(extPath, Path.join(extsPath, extName));
await saveExtLibPaths({[extName]: extPath});
