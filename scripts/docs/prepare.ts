import Path from 'node:path';
import {pathToFileURL} from 'node:url';
import fs from 'fs-extra';
import {BUILD_HELP, loadBuildOptions, parseBuildArgs} from '../build/cli';
import {resolveBuildPlan, type BuildOptions, type BuildPlan} from '../build/config';
import type {LibInfo} from '../libs/lib-info';
import {runService} from '../services/process';
import {syncLibDocs, emptySidebarLibDocs} from './sync';
import {acquireDocsLease} from './lease';
import {version} from '../../package.json';

export interface DocsPreparation {
    root: string;
    docsDir: string;
    plan: BuildPlan;
    libs: LibInfo[];
}

export async function resolveDocsPreparation(options: BuildOptions = {}, root = process.cwd()): Promise<DocsPreparation> {
    root = Path.resolve(root);
    const docsDir = Path.join(root, 'docs/_');
    const plan = await resolveBuildPlan({
        ...options,
        name: 'zui',
        outDir: Path.join(docsDir, 'public/zui'),
        zip: Path.join(docsDir, 'public', `zui-${version}.zip`),
    }, root);
    return {root, docsDir, plan, libs: plan.libs.filter(lib => lib.zui.sourceType !== 'npm')};
}

/** The caller owns the docs lease for preparation and any subsequent service/build. */
export async function prepareDocs(preparation: DocsPreparation, {copy = true, skipBuild = false} = {}) {
    const {root, docsDir, plan, libs} = preparation;
    const publicDir = Path.join(docsDir, 'public');
    if (!skipBuild) {
        const {runBuild} = await import('../build/run');
        const {loadCustomViteConfig} = await import('../build/vite');
        await runBuild(plan, {config: await loadCustomViteConfig(plan)});
    }
    await fs.ensureDir(publicDir);
    await fs.copyFile(Path.join(root, 'favicon.svg'), Path.join(publicDir, 'favicon.svg'));
    await fs.outputJSON(Path.join(publicDir, 'zui-libs.json'), libs, {spaces: 4});
    await fs.outputFile(Path.join(publicDir, 'zui-libs.js'), `export default ${JSON.stringify(libs, null, 4)};`);
    if (copy) await copyDocsSources(libs, root);
}

export async function copyDocsSources(libs: readonly LibInfo[], root = process.cwd()) {
    await emptySidebarLibDocs(root);
    for (const lib of libs) await syncLibDocs(lib, root);
}

export async function readPreparedDocs(root = process.cwd(), requireRuntime = true): Promise<LibInfo[]> {
    const docsDir = Path.resolve(root, 'docs/_');
    try {
        const libs: unknown = await fs.readJSON(Path.join(docsDir, 'public/zui-libs.json'));
        if (!Array.isArray(libs) || !libs.length || libs.some(lib => !lib || typeof lib.name !== 'string' || !lib.zui || typeof lib.zui.name !== 'string' || typeof lib.zui.path !== 'string' || !Path.isAbsolute(lib.zui.path))) {
            throw new Error('Invalid library manifest.');
        }
        for (const lib of libs) await fs.access(lib.zui.path);
        await fs.access(Path.join(root, 'docs/docs'));
        await fs.access(Path.join(docsDir, 'index.md'));
        if (requireRuntime) {
            for (const file of ['zui-libs.js', 'zui/zui.js', 'zui/zui.css']) {
                await fs.access(Path.join(docsDir, 'public', file));
            }
        }
        return libs as LibInfo[];
    } catch (error) {
        throw new Error('Prepared documentation is missing or invalid. Run pnpm docs:prepare --copy first.', {cause: error});
    }
}

export async function runDocsPrepare(input: string[], root = process.cwd()) {
    const copy = input.includes('--copy');
    const skipBuild = input.includes('--build=no');
    const args = parseBuildArgs(input.filter(arg => arg !== '--copy' && arg !== '--build=no'));
    if (args.help) {
        console.log(`${BUILD_HELP}\nDocumentation preparation also accepts --copy and --build=no.`);
        return 0;
    }
    const preparation = await resolveDocsPreparation(await loadBuildOptions(args, root), root);
    if (args.dryRun) {
        console.log(JSON.stringify(preparation.plan, null, 4));
        return 0;
    }
    let release: (() => Promise<void>) | undefined;
    return runService(undefined, [], {
        prepare: async () => {
            release = await acquireDocsLease(root);
            await prepareDocs(preparation, {copy, skipBuild});
        },
        cleanup: async () => {
            await release?.();
        },
    });
}

if (process.argv[1] && import.meta.url === pathToFileURL(Path.resolve(process.argv[1])).href) {
    process.exitCode = await runDocsPrepare(process.argv.slice(2));
}
