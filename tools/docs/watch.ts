import path from 'path';
import chokidar from 'chokidar';
import {blue, yellow, bold, gray, green} from 'colorette';
import {syncLibDocFile} from './sync';

const libPath = path.resolve(process.cwd(), './lib/');
const docsPath = path.resolve(process.cwd(), './docs/');
const watchPath = [
    `${libPath}/*/docs/*/**/*.md`,
    `${libPath}/*/assets/**/*`,
    `${docsPath}/**/*.md`,
];
const watcher = chokidar.watch(watchPath, {persistent: true, ignoreInitial: false, ignored: /(^|[/\\])\../});

console.log(`${bold(green('Watch docs...'))} ${watchPath.map(x => gray(path.relative(process.cwd(), x))).join(', ')}`);

async function syncFile(type: 'add' | 'change' | 'unlink', file: string) {
    const destFile = await syncLibDocFile(file, type === 'unlink');
    if (destFile) {
        const typeName = type.toUpperCase();

        console.log(` ${bold(typeName === 'unlink' ? yellow(typeName) : blue(typeName))} ${path.relative(process.cwd(), destFile)}`);
    }
}

watcher.on('add', syncFile.bind(null, 'add'));
watcher.on('change', syncFile.bind(null, 'change'));
watcher.on('unlink', syncFile.bind(null, 'unlink'));
