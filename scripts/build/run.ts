import Path from 'node:path';
import {randomUUID} from 'node:crypto';
import fs from 'fs-extra';
import {blue, bold, cyan, gray} from 'colorette';
import {build, type UserConfig} from 'vite';
import {exec, execCmd} from '../utilities/exec';
import {checkCustomConfig, createBuildViteConfig, ensureExtsTsconfig, loadCustomViteConfig} from './vite';
import {validateDirectories, type BuildPlan} from './config';
import {canonical, isWithin} from './paths';
import {acquireBuildLock, publishBuild} from './lifecycle';
import {writeBuildZip} from './zip';
import type {BuildContext} from './context';

export interface BuildRunOptions {
    config?: UserConfig;
    npmTypes?: boolean;
}

/** Resolve only after every requested artifact has been published. */
export async function runBuild(plan: BuildPlan, options: BuildRunOptions = {}): Promise<void> {
    const customConfig = options.config ?? await loadCustomViteConfig(plan);
    checkCustomConfig(customConfig);
    await validateDirectories(plan);
    const outDir = await canonical(plan.outDir);
    const zip = plan.zip ? await canonical(plan.zip) : undefined;
    const resources = [{path: outDir, directory: true}];
    if (zip && !isWithin(zip, outDir)) {
        resources.push({path: zip, directory: false});
    }
    const sourceRoots = await Promise.all(plan.sources.map(canonical));
    for (const lib of plan.libs) {
        if (lib.zui.sourceType === 'exts' || lib.zui.prebuild) {
            const path = await canonical(lib.zui.path);
            const source = sourceRoots.find(root => isWithin(path, root)) ?? path;
            if (!resources.some(resource => resource.path === source)) {
                resources.push({path: source, directory: true});
            }
        }
        if (lib.zui.sourceType !== 'npm' && lib.zui.publicPath !== false) {
            const publicRoot = Path.join(plan.rootDir, 'build/public');
            if (!isWithin(Path.resolve(publicRoot, lib.zui.publicPath || lib.zui.name), publicRoot)) {
                throw new Error(`ZUI build: publicPath for "${lib.name}" escapes the public directory.`);
            }
        }
    }
    const release = await acquireBuildLock(resources);
    const cleanup: string[] = [];
    try {
        const workRoot = await canonical(Path.join(plan.rootDir, 'build'));
        await fs.ensureDir(workRoot);
        const workDir = await fs.mkdtemp(Path.join(workRoot, 'run-'));
        cleanup.push(workDir);
        await fs.ensureDir(Path.dirname(outDir));
        const stagingDir = await fs.mkdtemp(Path.join(Path.dirname(outDir), '.zui-stage-'));
        cleanup.push(stagingDir);
        const context: BuildContext = {
            workDir,
            entry: Path.join(workDir, 'main.ts'),
            publicDir: Path.join(workDir, 'public'),
            outDir: stagingDir,
        };
        console.log(cyan(`building ${bold(blue(plan.name))} with ${plan.libs.length} libs...`));
        for (const lib of plan.libs) {
            console.log(blue('*'), lib.name.padEnd(23), gray(lib.version.padEnd(8)), gray(lib.zui.type));
        }
        if (plan.libs.some(lib => lib.zui.sourceType === 'exts')) {
            await ensureExtsTsconfig(plan.rootDir);
        }
        for (const lib of plan.libs) {
            if (lib.zui.prebuild) {
                console.log(cyan(`building lib "${lib.name}"...`));
                await execCmd(typeof lib.zui.prebuild === 'string' ? lib.zui.prebuild : 'pnpm install && pnpm build', {cwd: lib.zui.path});
            }
        }
        await fs.outputFile(context.entry, `${plan.entries.join('\n')}\n`);
        await fs.outputFile(Path.join(workDir, 'pnpm-workspace.yaml'), '');
        const dependencies = {...plan.dependencies};
        for (const lib of plan.libs) {
            if (lib.zui.sourceType !== 'npm') {
                dependencies[lib.name] = `link:${Path.relative(workDir, await canonical(lib.zui.path)).replace(/\\/g, '/')}`;
                if (lib.zui.publicPath !== false) {
                    const source = Path.join(lib.zui.path, 'public');
                    if (await fs.pathExists(source)) {
                        await fs.copy(source, Path.resolve(context.publicDir, lib.zui.publicPath || lib.zui.name));
                    }
                }
            }
        }
        await fs.outputJSON(Path.join(workDir, 'package.json'), {
            name: plan.name, version: plan.version, dependencies, main: 'main.ts',
        }, {spaces: 4});
        await exec('pnpm', ['install'], {cwd: workDir});
        await build(await createBuildViteConfig(plan, context, customConfig));
        if (options.npmTypes) {
            const runtimeEntry = Path.join(plan.rootDir, 'build', Path.basename(context.workDir), 'main.ts');
            if (await canonical(runtimeEntry) !== context.entry) {
                throw new Error('Build working directory changed during compilation; no declarations were emitted.');
            }
            const {emitNpmTypes} = await import('./npm-types');
            await emitNpmTypes({rootDir: plan.rootDir, runtimeEntry, outDir: stagingDir});
        }
        const outputs = [{source: stagingDir, target: outDir}];
        if (zip) {
            let zipStage: string;
            if (isWithin(zip, outDir)) {
                zipStage = Path.join(stagingDir, Path.relative(outDir, zip));
                if (await canonical(zipStage) !== zipStage) {
                    throw new Error('ZIP output cannot use symbolic links in generated assets.');
                }
                if (await fs.pathExists(zipStage)) {
                    throw new Error(`ZIP output "${plan.zip}" would overwrite a generated file.`);
                }
            } else {
                await fs.ensureDir(Path.dirname(zip));
                zipStage = Path.join(Path.dirname(zip), `.zui-zip-${randomUUID()}.tmp`);
                const handle = await fs.open(zipStage, 'wx');
                cleanup.push(zipStage);
                await fs.close(handle);
                outputs.push({source: zipStage, target: zip});
            }
            await writeBuildZip(stagingDir, zipStage, Path.basename(plan.outDir));
        }
        // A symlink changed during compilation must not redirect publication.
        await validateDirectories(plan);
        if (await canonical(plan.outDir) !== outDir || (plan.zip && await canonical(plan.zip) !== zip)) {
            throw new Error('Build output paths changed during compilation; no artifacts were published.');
        }
        await publishBuild(outputs);
        console.log(cyan(`Build complete: ${plan.outDir}${plan.zip ? ` and ${plan.zip}` : ''}`));
    } finally {
        for (const path of cleanup.reverse()) {
            await fs.remove(path).catch(error => console.warn(`Cannot clean build temporary path "${path}":`, error));
        }
        await release().catch(error => console.warn('Cannot release build lock:', error));
    }
}
