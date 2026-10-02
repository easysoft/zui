import {execFile} from 'node:child_process';
import {promises as fs} from 'node:fs';
import Path from 'node:path';
import {setTimeout as delay} from 'node:timers/promises';
import {pathToFileURL} from 'node:url';
import {promisify} from 'node:util';
import JSZip from 'jszip';
import {afterAll, beforeAll, expect, test} from 'vitest';
import {resolveBuildPlan, type BuildOptions} from '../../scripts/build/config';
import {runBuild} from '../../scripts/build/run';

const execFileAsync = promisify(execFile);
const root = Path.resolve(import.meta.dirname, '../..');
const fixture = Path.join(root, 'test-results/build-lifecycle');
const sentinel = Path.join(root, `build/lifecycle-sentinel-${process.pid}.txt`);
const index = Path.join(root, 'scripts/build/index.ts');

async function write(file: string, content: string) {
    await fs.mkdir(Path.dirname(file), {recursive: true});
    await fs.writeFile(file, content);
}

function launch(config: string, args: string[] = []) {
    return execFileAsync(process.execPath, ['--import', 'tsx', index, '--config', config, ...args], {
        cwd: root,
        env: {...process.env, CI: '1'},
        maxBuffer: 20 * 1024 * 1024,
    }).then(result => ({...result, code: 0}), (error: {code: number; stdout: string; stderr: string}) => error);
}

async function config(name: string, options: BuildOptions) {
    const path = Path.join(fixture, `${name}.json`);
    await write(path, JSON.stringify({libs: ['helpers'], name: 'lifecycle', sourcemap: false, minify: false, ...options}));
    return path;
}

async function startHeldBuild(name: string, options: BuildOptions) {
    const ready = Path.join(fixture, `${name}.ready`);
    const release = Path.join(fixture, `${name}.release`);
    const viteConfig = Path.join(fixture, `${name}.vite.mjs`);
    await write(viteConfig, `import {writeFile, access} from 'node:fs/promises';
import {setTimeout} from 'node:timers/promises';
export default {plugins: [{name: 'controlled-build-barrier', async buildStart(options) {
    await writeFile(${JSON.stringify(ready)}, String(options.input));
    const deadline = Date.now() + 60000;
    while (true) {
        try { await access(${JSON.stringify(release)}); return; } catch {}
        if (Date.now() > deadline) throw new Error('Build test barrier timed out');
        await setTimeout(20);
    }
}}]};`);
    const completed = launch(await config(name, {...options, viteConfig}));
    const finished = completed.then((result) => {
        throw new Error(`Build exited before barrier: ${result.stdout}\n${result.stderr}`);
    });
    let entry: string;
    try {
        entry = await Promise.race([finished, (async () => {
            for (let attempt = 0; attempt < 1500; attempt++) {
                try {
                    return await fs.readFile(ready, 'utf8');
                } catch (error) {
                    if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error;
                }
                await delay(20);
            }
            throw new Error(`Build did not reach barrier: ${name}`);
        })()]);
    } catch (error) {
        await write(release, 'release');
        await completed;
        throw error;
    }
    return {entry, completed, release: () => write(release, 'release')};
}

beforeAll(async () => {
    await fs.rm(fixture, {force: true, recursive: true});
    await write(sentinel, 'belongs to another build');
});

afterAll(async () => {
    await fs.rm(sentinel, {force: true});
    await fs.rm(fixture, {force: true, recursive: true});
});

test('dry-run is deterministic and leaves build workspaces untouched', async () => {
    const input = await config('dry-run', {outDir: Path.join(fixture, 'dry-output')});
    const before = await fs.readdir(Path.join(root, 'build'));
    const first = await launch(input, ['--dry-run']);
    const second = await launch(input, ['--dry-run']);
    expect(first.code, first.stderr).toBe(0);
    expect(second.code, second.stderr).toBe(0);
    expect(first.stdout).toBe(second.stdout);
    expect(JSON.parse(first.stdout)).not.toHaveProperty('buildDir');
    expect(await fs.readdir(Path.join(root, 'build'))).toEqual(before);
    await expect(fs.stat(Path.join(fixture, 'dry-output'))).rejects.toMatchObject({code: 'ENOENT'});
});

test('separate CLI processes can finish different outputs while retaining each other\'s workspace', async () => {
    const heldOutput = Path.join(fixture, 'parallel/held');
    const holder = await startHeldBuild('parallel', {outDir: heldOutput});
    try {
        expect(Path.dirname(holder.entry)).toMatch(/[/\\]build[/\\]run-/);
        await fs.access(holder.entry);
        const other = await launch(await config('parallel-other', {outDir: Path.join(fixture, 'parallel/other')}));
        expect(other.code, `${other.stdout}\n${other.stderr}`).toBe(0);
        await fs.access(holder.entry);
        expect(await fs.readFile(sentinel, 'utf8')).toBe('belongs to another build');
    } finally {
        await holder.release();
        const result = await holder.completed;
        expect(result.code, `${result.stdout}\n${result.stderr}`).toBe(0);
    }
    await expect(fs.stat(Path.dirname(holder.entry))).rejects.toMatchObject({code: 'ENOENT'});
    await write(Path.join(heldOutput, 'obsolete.txt'), 'old output');
    const repeat = await launch(await config('parallel-repeat', {outDir: heldOutput}));
    expect(repeat.code, `${repeat.stdout}\n${repeat.stderr}`).toBe(0);
    await expect(fs.stat(Path.join(heldOutput, 'obsolete.txt'))).rejects.toMatchObject({code: 'ENOENT'});
});

test('cross-process occupancy rejects overlapping directories and ZIP resources', async () => {
    const outDir = Path.join(fixture, 'occupied/held');
    const zip = Path.join(fixture, 'shared.zip');
    const holder = await startHeldBuild('occupied', {outDir, zip});
    try {
        const conflicts = [
            {outDir},
            {outDir: Path.join(outDir, 'child')},
            {outDir: Path.dirname(outDir)},
            {outDir: Path.join(fixture, 'zip-other'), zip},
            {outDir: Path.join(fixture, 'zip-inside-other'), zip: Path.join(outDir, 'nested.zip')},
        ];
        for (const [number, options] of conflicts.entries()) {
            const result = await launch(await config(`conflict-${number}`, options));
            expect(result.code).not.toBe(0);
            expect(`${result.stdout}\n${result.stderr}`).toMatch(/occupied|in use|busy|conflict|locked/i);
            await fs.access(holder.entry);
        }
    } finally {
        await holder.release();
        const result = await holder.completed;
        expect(result.code, `${result.stdout}\n${result.stderr}`).toBe(0);
    }
});

test('different selected libraries from one extension collection share its occupancy', async () => {
    const extensions = Path.join(fixture, 'extensions');
    for (const name of ['alpha', 'beta']) {
        await write(Path.join(extensions, name, 'package.json'), JSON.stringify({
            name: `@lifecycle/${name}`, version: '1.0.0', main: 'src/main.ts',
            zui: {type: 'js-lib'},
        }));
        await write(Path.join(extensions, name, 'src/main.ts'), `export const ${name} = true;`);
    }
    const holder = await startHeldBuild('extension', {extensions: [extensions], libs: ['@lifecycle/alpha'], outDir: Path.join(fixture, 'extension-alpha')});
    try {
        const result = await launch(await config('extension-beta', {extensions: [extensions], libs: ['@lifecycle/beta'], outDir: Path.join(fixture, 'extension-beta')}));
        expect(result.code).not.toBe(0);
        expect(`${result.stdout}\n${result.stderr}`).toMatch(/occupied|in use|busy|conflict|locked/i);
        expect(`${result.stdout}\n${result.stderr}`).toContain(extensions);
    } finally {
        await holder.release();
        const result = await holder.completed;
        expect(result.code, `${result.stdout}\n${result.stderr}`).toBe(0);
    }
});

test('awaiting interleaved builds finishes their own declarations and internal or external ZIP', async () => {
    const outputs = [Path.join(fixture, 'direct-first'), Path.join(fixture, 'direct-second')];
    const archives = [Path.join(outputs[0], 'bundle.zip'), Path.join(fixture, 'direct-second.zip')];
    const names = ['FirstFormat', 'SecondFormat'];
    const plans = await Promise.all(outputs.map((outDir, index) => resolveBuildPlan({
        name: 'lifecycle', libs: ['helpers'], outDir, zip: archives[index], minify: false,
        exports: {helpers: [{targets: {formatString: names[index]}}]},
    }, root)));
    let release!: () => void;
    let started!: () => void;
    let entry = '';
    const barrier = new Promise<void>((resolve) => {
        release = resolve;
    });
    const ready = new Promise<void>((resolve) => {
        started = resolve;
    });
    const first = runBuild(plans[0], {npmTypes: true, config: {plugins: [{
        name: 'interleaved-build-barrier',
        async buildStart(options) {
            entry = String(options.input);
            started();
            await barrier;
        },
    }]}});
    try {
        await Promise.race([ready, first.then(() => {
            throw new Error('First build missed its barrier');
        })]);
        await runBuild(plans[1], {npmTypes: true});
        const archive = await JSZip.loadAsync(await fs.readFile(archives[1]));
        expect(archive.file('direct-second/types/build/npm-types.d.ts')).not.toBeNull();
        await fs.access(entry);
    } finally {
        release();
        await first;
    }
    await expect(fs.stat(Path.dirname(entry))).rejects.toMatchObject({code: 'ENOENT'});
    for (const [index, outDir] of outputs.entries()) {
        const archive = await JSZip.loadAsync(await fs.readFile(archives[index]));
        const prefix = Path.basename(outDir);
        const fileName = plans[index].fileName;
        expect(archive.file(`${prefix}/${fileName}.esm.js`)).not.toBeNull();
        expect(archive.file(`${prefix}/bundle.zip`)).toBeNull();
        const declarations = await fs.readFile(Path.join(outDir, 'types/build/npm-types.d.ts'), 'utf8');
        expect(declarations).toContain(names[index]);
        expect(declarations).not.toContain(names[1 - index]);
        expect(declarations).not.toMatch(/build[/\\]run-/);
        const runtime = await import(pathToFileURL(Path.join(outDir, `${fileName}.esm.js`)).href);
        expect(runtime[names[index]]('Hello {0}', 'ZUI')).toBe('Hello ZUI');
        expect(runtime[names[1 - index]]).toBeUndefined();
        const map = JSON.parse(await fs.readFile(Path.join(outDir, `${fileName}.esm.js.map`), 'utf8')) as {sources: string[]; sourcesContent: string[]};
        expect(map.sourcesContent.length).toBe(map.sources.length);
        expect(map.sourcesContent.length).toBeGreaterThan(0);
        expect(map.sources.join('\n')).not.toMatch(/build[/\\]run-/);
    }
    expect(await fs.readFile(sentinel, 'utf8')).toBe('belongs to another build');
});
