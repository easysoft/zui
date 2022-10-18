import path from 'path';
import fs from 'fs-extra';
import minimist from 'minimist';
import {exec} from '../utilities/exec';
import {getLibList, getLibs} from '../libs/query';
import {syncLibDocs, emptySidebarLibDocs} from './sync';
import {parseBuildLibs} from '../build/config';

const argv = minimist(process.argv.slice(2));
const docsDir = path.resolve(process.cwd(), 'docs/_');
const docsPublicDir = path.join(docsDir, 'public');

await fs.emptyDir(docsPublicDir);

const exts = argv.exts === true ? 'zui+exts' : argv.exts;
const libSetting = argv.lib;
if (argv.build !== 'no') {
    const params = ['build', '--', '--outDir=docs/_/public/zui', '--name=zui'];
    if (exts) {
        params.push(`--exts=${exts}`);
    }
    if (libSetting) {
        params.push(`--lib=${libSetting}`);
    }
    await exec('pnpm', params);
}

await fs.copyFile(path.resolve(process.cwd(), './favicon.svg'), path.resolve(docsPublicDir, './favicon.svg'));

const libsMap = await getLibs(exts);
const libs = parseBuildLibs(libSetting ?? 'zui', libsMap);

await fs.outputJSON(path.resolve(docsPublicDir, './zui-libs.json'), libs, {spaces: 4});
await fs.outputFile(path.resolve(docsPublicDir, './zui-libs.js'), `export default ${JSON.stringify(libs, null, 4)};`);

if (argv.copy) {
    await emptySidebarLibDocs();
    for (const lib of libs) {
        await syncLibDocs(lib);
    }
}
