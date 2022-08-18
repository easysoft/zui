import Path from 'path';
import minimist from 'minimist';
import {exec} from './exec';

const extsPath = Path.resolve(process.cwd(), 'exts');
const argv = minimist(process.argv.slice(2));
let extPath = argv._[0] as string;
const extName = argv.name ?? argv.n ?? argv._[1] ?? extPath.split('/').pop();

if (!Path.isAbsolute(extPath)) {
    extPath = Path.resolve(process.cwd(), extPath);
}

await exec('ln', ['-s', extPath, Path.join(extsPath, extName)]);
