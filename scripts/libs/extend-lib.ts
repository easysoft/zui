import Path from 'path';
import minimist from 'minimist';
import fs from 'fs-extra';

const extsPath = Path.resolve(process.cwd(), 'exts');
const argv = minimist(process.argv.slice(2));
let extPath = argv._[0] as string;
const extName = argv.name ?? argv.n ?? argv._[1] ?? extPath.split('/').pop();

if (!Path.isAbsolute(extPath)) {
    extPath = Path.resolve(process.cwd(), extPath);
}

await fs.ensureDir(extsPath);
await fs.copy(extPath, Path.join(extsPath, extName));

const libsFile = Path.join(extsPath, 'libs.json');
let libs: Record<string, string> | undefined;
if (fs.existsSync(libsFile)) {
    await fs.readJSON(libsFile, {throws: false});
}
if (!libs) {
    libs = {};
}
if (!libs[extName]) {
    libs[extName] = extPath;
    await fs.writeJSON(libsFile, libs, {spaces: 4});
}
