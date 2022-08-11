import path from 'path';
import fs from 'fs-extra';
import chokidar from 'chokidar';

const libPath = path.resolve(process.cwd(), './lib/');
const docsPath = path.resolve(process.cwd(), './docs/lib/');
const watchPath = [`${libPath}/*/docs/**/*.md`, `${libPath}/*/assets/**/*`];
const watcher = chokidar.watch(watchPath, {persistent: true, ignoreInitial: false});

console.log(`> Watch docs... ${watchPath}`);

function getDestFile(file: string) {
    const libName = file.replace(`${libPath}/`, '').split('/')[0];
    return path.resolve(docsPath, libName, file.replace(`${libPath}/${libName}/docs/`, '').replace(`${libPath}/${libName}/assets/`, `../../public/assets/${libName}/`));
}
watcher.on('add', (file) => {
    const destFile = getDestFile(file);
    fs.ensureDirSync(path.dirname(destFile));
    fs.copyFileSync(file, destFile);
    console.log(`> ADD:    ${path.relative(docsPath, destFile)}`);
});
watcher.on('change', (file) => {
    const destFile = getDestFile(file);
    fs.copyFileSync(file, destFile);
    console.log(`> CHANGE: ${path.relative(docsPath, destFile)}`);
});
watcher.on('unlink', (file) => {
    const destFile = getDestFile(file);
    fs.removeSync(destFile);
    console.log(`> REMOVE: ${path.relative(docsPath, destFile)}`);
});
