import Path from 'node:path';
import {tmpdir} from 'node:os';
import {fileURLToPath} from 'node:url';
import fs from 'fs-extra';
import {afterAll, beforeAll, expect, test} from 'vitest';
import {resolveConfig, type ResolveFn} from 'vite';
import {resolveBuildPlan} from '../../scripts/build/config';
import {createBuildViteConfig} from '../../scripts/build/vite';

const rootDir = fileURLToPath(new URL('../../', import.meta.url));
const packages = ['preact', '@preact/signals', '@preact/signals-core', 'cash-dom'];
let fixtureDir: string;
let resolve: ResolveFn;
let resolveWithoutDedupe: ResolveFn;
let resolveExplicitRuntime: ResolveFn;

async function createRuntimePackages(directory: string, version: string) {
    for (const name of packages) {
        const packageDir = Path.join(directory, 'node_modules', name);
        await fs.outputJson(Path.join(packageDir, 'package.json'), {
            name,
            version,
            type: 'module',
            exports: {
                '.': {browser: './browser.js', default: './index.js'},
                './jsx-runtime': {browser: './jsx-browser.js', default: './jsx-runtime.js'},
            },
        });
        for (const entry of ['index.js', 'browser.js', 'jsx-runtime.js', 'jsx-browser.js']) {
            await fs.writeFile(Path.join(packageDir, entry), 'export const fixture = true;');
        }
    }
}

beforeAll(async () => {
    fixtureDir = await fs.mkdtemp(Path.join(tmpdir(), 'zui-build-runtime-'));
    await fs.outputFile(Path.join(fixtureDir, 'src/main.ts'), 'export {};');
    await createRuntimePackages(fixtureDir, '0.0.0');
    const viteConfig = Path.join(fixtureDir, 'custom.vite.mjs');
    await fs.writeFile(viteConfig, 'export default {resolve: {dedupe: ["custom-runtime"]}};');
    const plan = await resolveBuildPlan({libs: ['button'], viteConfig}, rootDir);
    const context = {
        workDir: Path.join(fixtureDir, 'work'),
        entry: Path.join(fixtureDir, 'work/main.ts'),
        publicDir: Path.join(fixtureDir, 'work/public'),
        outDir: Path.join(fixtureDir, '.output-staging'),
    };
    const config = await createBuildViteConfig(plan, context);
    expect(config.resolve!.dedupe).toContain('custom-runtime');
    resolveWithoutDedupe = (await resolveConfig({
        ...config,
        resolve: {...config.resolve, dedupe: []},
    }, 'build')).createResolver();
    resolve = (await resolveConfig(config, 'build')).createResolver();

    const dependencies = Object.fromEntries(packages.map(name => [name, '1.2.3']));
    const explicitPlan = await resolveBuildPlan({libs: ['button'], dependencies}, rootDir);
    const buildDir = Path.join(fixtureDir, 'build');
    const entry = Path.join(buildDir, 'main.ts');
    await fs.outputFile(entry, 'export {};');
    await createRuntimePackages(buildDir, '1.2.3');
    const explicitConfig = await createBuildViteConfig(explicitPlan, {...context, workDir: buildDir, entry});
    resolveExplicitRuntime = (await resolveConfig(explicitConfig, 'build')).createResolver();
});

afterAll(async () => {
    await fs.remove(fixtureDir);
});

test.each([...packages, 'preact/jsx-runtime'])('external extensions share the host %s runtime', async (id) => {
    const extensionImporter = Path.join(fixtureDir, 'src/main.ts');
    const hostImporter = Path.join(rootDir, 'lib/core/src/main.ts');
    const localRuntime = await resolveWithoutDedupe(id, extensionImporter);
    expect(localRuntime).toContain(`${fixtureDir}/node_modules/`);

    const hostRuntime = await resolve(id, hostImporter);
    expect(hostRuntime).toBeDefined();
    expect(hostRuntime).not.toContain(fixtureDir);
    expect(await resolve(id, extensionImporter)).toBe(hostRuntime);
});

test.each([...packages, 'preact/jsx-runtime'])('explicit %s versions are shared from build/node_modules', async (id) => {
    const extensionImporter = Path.join(fixtureDir, 'src/main.ts');
    const hostImporter = Path.join(rootDir, 'lib/core/src/main.ts');
    const buildImporter = Path.join(fixtureDir, 'build/main.ts');
    const runtime = await resolveExplicitRuntime(id, buildImporter);
    expect(runtime).toContain(`${fixtureDir}/build/node_modules/`);
    expect(runtime).toMatch(/\/(jsx-)?browser\.js$/);
    expect(await resolveExplicitRuntime(id, hostImporter)).toBe(runtime);
    expect(await resolveExplicitRuntime(id, extensionImporter)).toBe(runtime);
});
