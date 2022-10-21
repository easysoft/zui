import path from 'path';
import chokidar from 'chokidar';
import minimist from 'minimist';
import {blue, yellow, bold, gray, green} from 'colorette';
import {syncLibDocFile} from './sync';
import {getExtLibPaths} from '../libs/ext-libs';
import {getLibs} from '../libs/query';
import {LibInfo} from '../libs/lib-info';


const libPath = path.resolve(process.cwd(), './lib/');
const docsPath = path.resolve(process.cwd(), './docs/docs/');
const extsPath = path.resolve(process.cwd(), './exts/');
const watchPath = [
    `${libPath}/*/@(docs|assets)/**/*`,
    `${docsPath}/**/*.md`,
];

const argv = minimist(process.argv.slice(2));
const exts = argv.exts;
const libsMap = await getLibs(exts === true ? 'all' : (exts?.split(',') ?? 'buildIn'));
const libsList = Object.values(libsMap);

if (exts) {
    const extLibPaths = await getExtLibPaths();
    if (exts === true) {
        watchPath.push(
            ...Object.keys(extLibPaths).map(libName => path.join(extsPath, libName, `${extLibPaths[libName].endsWith('*') ? '*/' : ''}@(docs|assets)/**/*`)),
        );
    } else if (typeof exts === 'string') {
        exts.split(',').forEach(ext => {
            ext = ext.trim();
            if (ext.length && extLibPaths[ext]) {
                watchPath.push(
                    path.join(extsPath, ext, `${extLibPaths[ext].endsWith('*') ? '*/' : ''}@(docs|assets)/**/*`),
                );
            }
        });
    }
}

const watcher = chokidar.watch(watchPath, {persistent: true, ignoreInitial: false, ignored: [/(^|[/\\])\../, /\.git/]});

console.log(`${bold(green('Watch docs...'))} ${watchPath.map(x => gray(path.relative(process.cwd(), x))).join(', ')}`);

const libsMapCache = new Map<string, LibInfo | null>();
function getLibFromFile(file: string): LibInfo | null {
    if (libsMapCache.has(file)) {
        return libsMapCache.get(file) ?? null;
    }
    for (const lib of libsList) {
        if (file.startsWith(`${lib.zui.path}${path.sep}`)) {
            libsMapCache.set(file, lib);
            return lib;
        }
    }
    return null;
}

async function syncFile(type: 'add' | 'change' | 'unlink', file: string) {
    const destFile = await syncLibDocFile(file, type === 'unlink', getLibFromFile(file));
    if (destFile) {
        const typeName = type.toUpperCase();

        console.log(` ${bold(typeName === 'unlink' ? yellow(typeName) : blue(typeName))} ${path.relative(process.cwd(), destFile)}`);
    }
}

watcher.on('add', syncFile.bind(null, 'add'));
watcher.on('change', syncFile.bind(null, 'change'));
watcher.on('unlink', syncFile.bind(null, 'unlink'));
