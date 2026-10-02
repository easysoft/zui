import Path from 'node:path';
import fs from 'fs-extra';
import {blue, bold, cyan, gray} from 'colorette';
import {build} from 'vite';
import {exec, execCmd} from '../utilities/exec';
import {createBuildViteConfig, ensureExtsTsconfig, loadCustomViteConfig} from './vite';

import type {BuildPlan} from './config';
import type {UserConfig} from 'vite';

/** Execute one validated plan; keep build/main.ts for the declaration stage. */
export async function runBuild(plan: BuildPlan, config?: UserConfig) {
    // Load and validate custom Vite configuration before touching old outputs.
    const customConfig = config ?? await loadCustomViteConfig(plan);
    const resources = plan.libs.filter(lib => lib.zui.sourceType !== 'npm' && lib.zui.publicPath !== false).map((lib) => {
        const target = Path.resolve(plan.publicDir, lib.zui.publicPath || lib.zui.name);
        const relative = Path.relative(plan.publicDir, target);
        if (relative === '..' || relative.startsWith(`..${Path.sep}`) || Path.isAbsolute(relative)) {
            throw new Error(`ZUI build: publicPath for "${lib.name}" escapes the public directory.`);
        }
        return {source: Path.join(lib.zui.path, 'public'), target};
    });
    console.log(cyan(`building ${bold(blue(plan.name))} with ${plan.libs.length} libs...`));
    for (const lib of plan.libs) {
        console.log(blue('*'), lib.name.padEnd(23), gray(lib.version.padEnd(8)), gray(lib.zui.type));
    }

    await fs.emptyDir(plan.buildDir);
    if (plan.libs.some(lib => lib.zui.sourceType === 'exts')) {
        await ensureExtsTsconfig(plan.rootDir);
    }
    for (const lib of plan.libs) {
        if (lib.zui.prebuild) {
            console.log(cyan(`building lib "${lib.name}"...`));
            await execCmd(typeof lib.zui.prebuild === 'string' ? lib.zui.prebuild : 'pnpm install && pnpm build', {cwd: lib.zui.path});
        }
    }

    await fs.outputFile(plan.entry, `${plan.entries.join('\n')}\n`);
    await fs.outputFile(Path.join(plan.buildDir, 'pnpm-workspace.yaml'), '');
    await fs.outputJSON(Path.join(plan.buildDir, 'package.json'), {
        name: plan.name,
        version: plan.version,
        dependencies: plan.dependencies,
        main: 'main.ts',
    }, {spaces: 4});
    for (const {source, target} of resources) {
        if (await fs.pathExists(source)) {
            await fs.copy(source, target);
        }
    }
    await exec('pnpm', ['install'], {cwd: plan.buildDir});
    if (plan.zip) {
        await fs.ensureDir(Path.dirname(plan.zip));
    }
    await build(await createBuildViteConfig(plan, customConfig));
}
