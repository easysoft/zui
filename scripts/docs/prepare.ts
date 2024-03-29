import path from 'path';
import fs from 'fs-extra';
import minimist from 'minimist';
import {exec} from '../utilities/exec';
import {getLibs} from '../libs/query';
import {syncLibDocs, emptySidebarLibDocs} from './sync';
import {parseBuildLibs} from '../build/config';
import {version} from '../../package.json';

const argv = minimist(process.argv.slice(2).filter((x, i) => i || x !== '--'));
const docsDir = path.resolve(process.cwd(), 'docs/_');
const docsPublicDir = path.join(docsDir, 'public');

await fs.emptyDir(docsPublicDir);

const exts = argv.exts === true ? 'buildIn,exts' : argv.exts;
const libSetting = argv.lib;
if (argv.build !== 'no') {
    const params = ['build', '--', '--outDir=docs/_/public/zui', '--name=zui', `--zip=zui-${version}.zip`];
    if (exts) {
        params.push(`--exts=${exts}`);
    }
    if (libSetting) {
        params.push(`--lib=${libSetting}`);
    }
    if (argv.ignoreNotReady) {
        params.push('--ignoreNotReady');
    }
    await exec('pnpm', params);
}

await fs.copyFile(path.resolve(process.cwd(), './favicon.svg'), path.resolve(docsPublicDir, './favicon.svg'));

const libsMap = await getLibs(exts?.split(',') ?? 'buildIn');
const libs = parseBuildLibs(libSetting ?? 'zui', libsMap);

await fs.outputJSON(path.resolve(docsPublicDir, './zui-libs.json'), libs, {spaces: 4});
await fs.outputFile(path.resolve(docsPublicDir, './zui-libs.js'), `export default ${JSON.stringify(libs, null, 4)};`);

if (argv.copy) {
    await emptySidebarLibDocs();
    for (const lib of libs) {
        await syncLibDocs(lib);
    }
}
