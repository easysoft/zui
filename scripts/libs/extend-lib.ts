import Path from 'path';
import minimist from 'minimist';
import fs from 'fs-extra';
import {saveExtLibPaths} from './ext-libs';

const extsPath = Path.resolve(process.cwd(), 'exts');
const argv = minimist(process.argv.slice(2).filter((x, i) => i || x !== '--'));
const extPathArg = argv._[0] as string | number | undefined;
if (extPathArg === undefined || !String(extPathArg).trim()) {
    throw new Error('Missing external library path.');
}
let extPath = String(extPathArg);
const extNameArg = argv.name ?? argv.n ?? argv._[1] ?? Path.basename(Path.resolve(process.cwd(), extPath));
const extName = typeof extNameArg === 'string' || typeof extNameArg === 'number' ? String(extNameArg) : '';

if (typeof extName !== 'string' || !extName.trim() || extName === '.' || extName === '..' || /[\\/]/.test(extName)) {
    throw new Error(`Invalid extension group name "${String(extName)}": use a non-empty single path segment other than "." or "..".`);
}

const extLinkPath = Path.resolve(extsPath, extName);
if (Path.dirname(extLinkPath) !== extsPath) {
    throw new Error(`Invalid extension group path: ${extLinkPath}`);
}

if (!Path.isAbsolute(extPath)) {
    extPath = Path.resolve(process.cwd(), extPath);
}

await fs.ensureDir(extsPath);
await fs.symlink(extPath, extLinkPath);
await saveExtLibPaths({[extName]: extPath});
