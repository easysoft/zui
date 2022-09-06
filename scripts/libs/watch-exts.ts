import Path from 'path';
import fs from 'fs-extra';
import minimist from 'minimist';
import chokidar from 'chokidar';
import {blue, yellow, bold, red, underline} from 'colorette';

const extsPath = Path.resolve(process.cwd(), 'exts');
const libPathMap: Record<string, string> = {};
const argv = minimist(process.argv.slice(2));
const selectedLibs = argv._.length ? new Set(argv._) : null;

const libsFile = Path.join(extsPath, 'libs.json');
if (fs.existsSync(libsFile)) {
    const libs: Record<string, string> = await fs.readJSON(libsFile, {throws: false});
    if (libs) {
        Object.entries(libs).forEach(([name, path]) => {
            if (selectedLibs && !selectedLibs.has(name)) {
                return;
            }
            libPathMap[path] = name;
        });
    }
}

if (Object.keys(libPathMap).length) {
    const watchPaths = Object.keys(libPathMap).map(x => Path.join(x, '*/**'));
    const watcher = chokidar.watch(watchPaths, {persistent: true, ignoreInitial: false});

    const syncFile = async (type: 'add' | 'change' | 'unlink', file: string, stat) => {
        const libPath = Object.keys(libPathMap).find(x => file.startsWith(x));
        if (!libPath) {
            return;
        }
        const libName = libPathMap[libPath];
        const filePath = Path.relative(libPath, file);
        const destFile = Path.join(extsPath, libName, filePath);
        const isRemove = type === 'unlink';

        try {
            if (isRemove) {
                await fs.remove(destFile);
            } else {
                await fs.ensureDir(Path.dirname(destFile));
                await fs.copy(file, destFile);
            }
            console.log(`  ${bold(isRemove ? yellow(type) : blue(type))} ${Path.relative(process.cwd(), destFile)}`);
        } catch (error) {
            console.log(`  ${red('ERROR')} cannot ${isRemove ? 'delete' : 'copy'} file ${underline(file)} to ${underline(Path.relative(process.cwd(), destFile))}.`, error);
        }
    };

    watcher.on('add', syncFile.bind(null, 'add'));
    watcher.on('change', syncFile.bind(null, 'change'));
    watcher.on('unlink', syncFile.bind(null, 'unlink'));

    console.log(yellow('\nWatch follower dirs:'));
    watchPaths.forEach(p => {
        console.log(`  ${Path.relative(process.cwd(), p)}`);
    });
} else {
    console.log(yellow('\nNo libraries need to watch!'));
}
