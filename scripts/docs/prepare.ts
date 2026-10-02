import Path from 'node:path';
import fs from 'fs-extra';
import {BUILD_HELP, loadBuildOptions, parseBuildArgs} from '../build/cli';
import {resolveBuildPlan} from '../build/config';
import {runBuild} from '../build/run';
import {loadCustomViteConfig} from '../build/vite';
import {syncLibDocs, emptySidebarLibDocs} from './sync';
import {version} from '../../package.json';

const rawArgs = process.argv.slice(2);
const copy = rawArgs.includes('--copy');
const skipBuild = rawArgs.includes('--build=no');
const args = parseBuildArgs(rawArgs.filter(arg => arg !== '--copy' && arg !== '--build=no'));
if (args.help) {
    console.log(`${BUILD_HELP}\nDocumentation preparation also accepts --copy and --build=no.`);
} else {
    const docsDir = Path.resolve('docs/_');
    const docsPublicDir = Path.join(docsDir, 'public');
    const options = await loadBuildOptions(args);
    const plan = await resolveBuildPlan({
        ...options,
        name: 'zui',
        outDir: Path.join(docsPublicDir, 'zui'),
        zip: Path.join(docsPublicDir, `zui-${version}.zip`),
    });
    if (args.dryRun) {
        console.log(JSON.stringify(plan, null, 4));
    } else {
        const viteConfig = skipBuild ? undefined : await loadCustomViteConfig(plan);
        await fs.emptyDir(docsPublicDir);
        if (!skipBuild) {
            await runBuild(plan, viteConfig);
        }
        await fs.copyFile(Path.resolve('favicon.svg'), Path.join(docsPublicDir, 'favicon.svg'));
        const libs = plan.libs.filter(lib => lib.zui.sourceType !== 'npm');
        await fs.outputJSON(Path.join(docsPublicDir, 'zui-libs.json'), libs, {spaces: 4});
        await fs.outputFile(Path.join(docsPublicDir, 'zui-libs.js'), `export default ${JSON.stringify(libs, null, 4)};`);
        if (copy) {
            await emptySidebarLibDocs();
            for (const lib of libs) {
                await syncLibDocs(lib);
            }
        }
    }
}
