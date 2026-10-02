import Path from 'node:path';
import os from 'node:os';
import fs from 'fs-extra';
import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';
import {build} from 'vite';
import {exec, execCmd} from '../../scripts/utilities/exec';
import {resolveBuildPlan, type BuildPlan} from '../../scripts/build/config';
import {createBuildViteConfig} from '../../scripts/build/vite';
import {emitNpmTypes} from '../../scripts/build/npm-types';
import {writeBuildZip} from '../../scripts/build/zip';
import {runBuild} from '../../scripts/build/run';
import type {BuildContext} from '../../scripts/build/context';

vi.mock('vite', async importOriginal => ({...await importOriginal<typeof import('vite')>(), build: vi.fn()}));
vi.mock('../../scripts/utilities/exec', () => ({exec: vi.fn(), execCmd: vi.fn()}));
vi.mock('../../scripts/build/vite', async importOriginal => ({...await importOriginal<typeof import('../../scripts/build/vite')>(), createBuildViteConfig: vi.fn()}));
vi.mock('../../scripts/build/npm-types', () => ({emitNpmTypes: vi.fn()}));
vi.mock('../../scripts/build/zip', () => ({writeBuildZip: vi.fn()}));

let root: string;
let externalRoot: string | undefined;
let plan: BuildPlan;
let context: BuildContext | undefined;
let failure: string | undefined;
let events: string[];
const previous = {
    'dist/zui/zui.js': 'old runtime',
    'dist/zui/zui.css': 'old styles',
    'dist/zui/zui.d.ts': 'old declarations',
    'dist/zui/types/build/npm-types.d.ts': 'old declaration graph',
    'dist/zui/obsolete.txt': 'obsolete output',
    'dist/zui.zip': 'old archive',
};

function failAt(stage: string) {
    if (failure === stage) {
        throw new Error(`${stage} failed`);
    }
}

async function expectTemporaryFilesCleaned() {
    expect((await fs.readdir(Path.join(root, 'build'))).sort()).toEqual(['run-neighbor', 'sentinel.txt']);
    expect(await fs.readFile(Path.join(root, 'build/sentinel.txt'), 'utf8')).toBe('root sentinel');
    expect(await fs.readFile(Path.join(root, 'build/run-neighbor/main.ts'), 'utf8')).toBe('other build');
    expect((await fs.readdir(Path.join(root, 'dist'))).sort()).toEqual(['zui', 'zui.zip']);
    const registry = Path.join(root, `zui-build-locks-${process.getuid?.() ?? os.userInfo().username}`);
    expect(await fs.readdir(registry)).toEqual([]);
}

async function externalBuildDirectory() {
    externalRoot = await fs.realpath(await fs.mkdtemp(Path.join(Path.dirname(root), 'zui-build-external-')));
    const physicalRoot = Path.join(externalRoot, 'work');
    await fs.move(Path.join(root, 'build'), physicalRoot);
    await fs.symlink(physicalRoot, Path.join(root, 'build'));
    return physicalRoot;
}

beforeEach(async () => {
    vi.clearAllMocks();
    root = await fs.realpath(await fs.mkdtemp(Path.join(os.tmpdir(), 'zui-build-run-')));
    vi.spyOn(os, 'tmpdir').mockReturnValue(root);
    vi.spyOn(console, 'log').mockImplementation(() => undefined);
    failure = undefined;
    externalRoot = undefined;
    context = undefined;
    events = [];
    await fs.outputJSON(Path.join(root, 'package.json'), {version: '3.0.0'});
    for (const [index, name] of ['first', 'second'].entries()) {
        await fs.outputJSON(Path.join(root, `lib/${name}/package.json`), {
            name: `@zui/${name}`, version: '1.0.0', files: ['src/**/*'],
            zui: {type: 'component', order: index + 1, prebuild: name},
        });
        await fs.outputFile(Path.join(root, `lib/${name}/public/asset.txt`), `stale ${name} asset`);
    }
    await fs.outputFile(Path.join(root, 'build/sentinel.txt'), 'root sentinel');
    await fs.outputFile(Path.join(root, 'build/run-neighbor/main.ts'), 'other build');
    for (const [file, content] of Object.entries(previous)) {
        await fs.outputFile(Path.join(root, file), content);
    }
    plan = await resolveBuildPlan({name: 'zui', zip: 'dist/zui.zip'}, root);

    vi.mocked(execCmd).mockImplementation(async (command, options) => {
        events.push(`prebuild:${command}`);
        failAt('prebuild');
        await fs.outputFile(Path.join(String(options?.cwd), 'public/asset.txt'), `new ${command} asset`);
    });
    vi.mocked(exec).mockImplementation(async (command, args, options) => {
        events.push('install');
        expect(command).toBe('pnpm');
        expect(args).toEqual(['install']);
        const workDir = String(options?.cwd);
        expect(Path.dirname(workDir)).toBe(await fs.realpath(Path.join(root, 'build')));
        expect(Path.basename(workDir)).toMatch(/^run-/);
        expect(await fs.readFile(Path.join(workDir, 'pnpm-workspace.yaml'), 'utf8')).toBe('');
        const manifest = await fs.readJSON(Path.join(workDir, 'package.json'));
        expect(manifest.dependencies).toEqual(Object.fromEntries(['first', 'second'].map(name => [
            `@zui/${name}`, `link:${Path.relative(workDir, Path.join(root, 'lib', name)).replace(/\\/g, '/')}`,
        ])));
        failAt('install');
    });
    vi.mocked(createBuildViteConfig).mockImplementation(async (_plan, buildContext) => {
        events.push('config');
        context = buildContext;
        for (const name of ['first', 'second']) {
            expect(await fs.readFile(Path.join(context.publicDir, name, 'asset.txt'), 'utf8')).toBe(`new ${name} asset`);
        }
        return {build: {outDir: context.outDir}};
    });
    vi.mocked(build).mockImplementation(async () => {
        events.push('vite');
        await fs.outputFile(Path.join(context!.outDir, 'zui.js'), 'new runtime');
        failAt('vite');
        await fs.outputFile(Path.join(context!.outDir, 'zui.css'), 'new styles');
        await fs.copy(context!.publicDir, context!.outDir);
        return [];
    });
    vi.mocked(emitNpmTypes).mockImplementation(async (options) => {
        events.push('types');
        expect(options).toEqual({rootDir: root, runtimeEntry: Path.join(root, 'build', Path.basename(context!.workDir), 'main.ts'), outDir: context!.outDir});
        expect(await fs.realpath(options.runtimeEntry)).toBe(context!.entry);
        await fs.outputFile(Path.join(options.outDir, 'types/build/npm-types.d.ts'), 'new declaration graph');
        failAt('types');
        await fs.outputFile(Path.join(options.outDir, 'zui.d.ts'), 'new declarations');
    });
    vi.mocked(writeBuildZip).mockImplementation(async (directory, destination, rootName) => {
        events.push('zip');
        expect(directory).toBe(context!.outDir);
        expect(rootName).toBe('zui');
        expect(await fs.readFile(Path.join(directory, 'zui.d.ts'), 'utf8')).toBe('new declarations');
        await fs.outputFile(destination, 'new archive');
        failAt('zip');
    });
});

afterEach(async () => {
    vi.restoreAllMocks();
    await fs.remove(root);
    if (externalRoot) {
        await fs.remove(externalRoot);
    }
});

describe('complete build lifecycle', () => {
    it.each([
        ['prebuild', ['prebuild:first']],
        ['install', ['prebuild:first', 'prebuild:second', 'install']],
        ['vite', ['prebuild:first', 'prebuild:second', 'install', 'config', 'vite']],
        ['types', ['prebuild:first', 'prebuild:second', 'install', 'config', 'vite', 'types']],
        ['zip', ['prebuild:first', 'prebuild:second', 'install', 'config', 'vite', 'types', 'zip']],
    ] as const)('preserves every existing artifact when %s fails', async (stage, expectedEvents) => {
        failure = stage;
        await expect(runBuild(plan, {npmTypes: true})).rejects.toThrow(`${stage} failed`);
        for (const [file, content] of Object.entries(previous)) {
            expect(await fs.readFile(Path.join(root, file), 'utf8')).toBe(content);
        }
        expect(events).toEqual(expectedEvents);
        await expectTemporaryFilesCleaned();
    });

    it('publishes runtime, declarations, current public assets and ZIP before returning', async () => {
        await runBuild(plan, {npmTypes: true});
        expect(events).toEqual(['prebuild:first', 'prebuild:second', 'install', 'config', 'vite', 'types', 'zip']);
        expect(await fs.readFile(Path.join(plan.outDir, 'zui.js'), 'utf8')).toBe('new runtime');
        expect(await fs.readFile(Path.join(plan.outDir, 'zui.css'), 'utf8')).toBe('new styles');
        expect(await fs.readFile(Path.join(plan.outDir, 'zui.d.ts'), 'utf8')).toBe('new declarations');
        expect(await fs.readFile(Path.join(plan.outDir, 'types/build/npm-types.d.ts'), 'utf8')).toBe('new declaration graph');
        expect(await fs.readFile(plan.zip!, 'utf8')).toBe('new archive');
        for (const name of ['first', 'second']) {
            expect(await fs.readFile(Path.join(plan.outDir, name, 'asset.txt'), 'utf8')).toBe(`new ${name} asset`);
        }
        expect(await fs.pathExists(Path.join(plan.outDir, 'obsolete.txt'))).toBe(false);
        await expectTemporaryFilesCleaned();
    });

    it('updates a safe output symlink target while preserving the link', async () => {
        const alias = Path.join(root, 'linked-output');
        await fs.symlink(plan.outDir, alias);
        await runBuild({...plan, outDir: alias, zip: undefined}, {npmTypes: true});
        expect((await fs.lstat(alias)).isSymbolicLink()).toBe(true);
        expect(await fs.readlink(alias)).toBe(plan.outDir);
        expect(await fs.readFile(Path.join(plan.outDir, 'zui.js'), 'utf8')).toBe('new runtime');
        expect(await fs.readFile(Path.join(alias, 'types/build/npm-types.d.ts'), 'utf8')).toBe('new declaration graph');
        expect(await fs.pathExists(Path.join(plan.outDir, 'obsolete.txt'))).toBe(false);
        expect(writeBuildZip).not.toHaveBeenCalled();
        await expectTemporaryFilesCleaned();
    });

    it('emits declarations through the logical build path and cleans the external physical work directory', async () => {
        const physicalRoot = await externalBuildDirectory();
        await runBuild(plan, {npmTypes: true});
        expect(Path.dirname(context!.workDir)).toBe(physicalRoot);
        expect(emitNpmTypes).toHaveBeenCalledWith({
            rootDir: root, runtimeEntry: Path.join(root, 'build', Path.basename(context!.workDir), 'main.ts'), outDir: context!.outDir,
        });
        expect(await fs.pathExists(context!.workDir)).toBe(false);
        expect((await fs.lstat(Path.join(root, 'build'))).isSymbolicLink()).toBe(true);
        expect(await fs.readFile(Path.join(plan.outDir, 'zui.d.ts'), 'utf8')).toBe('new declarations');
        await expectTemporaryFilesCleaned();
    });

    it('rejects a redirected build symlink before emitting declarations and cleans the original work directory', async () => {
        const physicalRoot = await externalBuildDirectory();
        const compile = vi.mocked(build).getMockImplementation()!;
        vi.mocked(build).mockImplementation(async (...args) => {
            const result = await compile(...args);
            const redirectedRoot = Path.join(externalRoot!, 'redirected');
            await fs.ensureDir(redirectedRoot);
            await fs.unlink(Path.join(root, 'build'));
            await fs.symlink(redirectedRoot, Path.join(root, 'build'));
            return result;
        });
        await expect(runBuild(plan, {npmTypes: true})).rejects.toThrow('Build working directory changed');
        expect(emitNpmTypes).not.toHaveBeenCalled();
        expect(writeBuildZip).not.toHaveBeenCalled();
        expect((await fs.readdir(physicalRoot)).sort()).toEqual(['run-neighbor', 'sentinel.txt']);
        expect(await fs.readdir(Path.join(root, 'build'))).toEqual([]);
        expect((await fs.readdir(Path.join(root, 'dist'))).sort()).toEqual(['zui', 'zui.zip']);
        for (const [file, content] of Object.entries(previous)) {
            expect(await fs.readFile(Path.join(root, file), 'utf8')).toBe(content);
        }
    });

    it('rejects an internal ZIP that would overwrite a generated file before archiving', async () => {
        const collisionPlan = {...plan, zip: Path.join(plan.outDir, 'zui.js')};
        await expect(runBuild(collisionPlan, {npmTypes: true})).rejects.toThrow('would overwrite a generated file');
        expect(writeBuildZip).not.toHaveBeenCalled();
        for (const [file, content] of Object.entries(previous)) {
            expect(await fs.readFile(Path.join(root, file), 'utf8')).toBe(content);
        }
        await expectTemporaryFilesCleaned();
    });

    it('rejects managed Vite overrides before starting any build stage', async () => {
        await expect(runBuild(plan, {config: {build: {outDir: 'unsafe'}}})).rejects.toThrow('build.outDir');
        expect(events).toEqual([]);
        expect((await fs.readdir(Path.join(root, 'build'))).sort()).toEqual(['run-neighbor', 'sentinel.txt']);
        for (const [file, content] of Object.entries(previous)) {
            expect(await fs.readFile(Path.join(root, file), 'utf8')).toBe(content);
        }
    });
});
