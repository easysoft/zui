import path from 'path';
import fs from 'fs-extra';
import minimist from 'minimist';
import {exec} from '../exec';
import {getLibList} from '../libs/query';
import {emptySidebarLibDocs, syncLibDocs} from './sync';

const argv = minimist(process.argv.slice(2));

await fs.emptyDir(path.resolve(process.cwd(), './docs/public'));

if (argv.build !== 'no') {
    await exec('pnpm', ['build', '--', '--outDir=docs/public/zui']);
}

await fs.copyFile(path.resolve(process.cwd(), './favicon.svg'), path.resolve(process.cwd(), './docs/public/favicon.svg'));

const libs = await getLibList();

await fs.outputJSON(path.resolve(process.cwd(), './docs/public/zui-libs.json'), libs, {spaces: 4});
await fs.outputFile(path.resolve(process.cwd(), './docs/public/zui-libs.js'), `export default ${JSON.stringify(libs, null, 4)};`);

if (argv.copy) {
    await emptySidebarLibDocs();
    for (const lib of libs) {
        await syncLibDocs(lib);
    }
}
