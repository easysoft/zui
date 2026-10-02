import Path from 'node:path';
import os from 'node:os';
import fs from 'node:fs/promises';
import {spawn, type ChildProcessWithoutNullStreams} from 'node:child_process';
import {pathToFileURL} from 'node:url';
import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';
import {acquireBuildLock, publishBuild} from '../../scripts/build/lifecycle';

let root: string;
let registry: string;
let child: ChildProcessWithoutNullStreams | undefined;

beforeEach(async () => {
    root = await fs.realpath(await fs.mkdtemp(Path.join(os.tmpdir(), 'zui-build-lifecycle-')));
    vi.spyOn(os, 'tmpdir').mockReturnValue(root);
    registry = Path.join(root, `zui-build-locks-${process.getuid?.() ?? os.userInfo().username}`);
});

afterEach(async () => {
    child?.kill();
    child = undefined;
    vi.restoreAllMocks();
    await fs.rm(root, {recursive: true, force: true});
});

describe('build resource ownership', () => {
    it('allows independent outputs and releases only its own token', async () => {
        const first = [{path: Path.join(root, 'first'), directory: true}];
        const releaseFirst = await acquireBuildLock(first);
        const releaseSecond = await acquireBuildLock([{path: Path.join(root, 'second'), directory: true}]);
        await releaseFirst();
        const releaseAgain = await acquireBuildLock(first);
        await expect(acquireBuildLock([{path: Path.join(root, 'second'), directory: true}])).rejects.toThrow(`PID ${process.pid}`);
        await releaseAgain();
        await releaseSecond();
        expect(await fs.readdir(registry)).toEqual([]);
    });

    it.each([
        ['same directory', 'dist', true, 'dist', true],
        ['nested directory', 'dist', true, 'dist/nested', true],
        ['parent directory', 'dist/nested', true, 'dist', true],
        ['same ZIP', 'archive.zip', false, 'archive.zip', false],
        ['ZIP within output', 'dist', true, 'dist/archive.zip', false],
        ['output around ZIP', 'dist/archive.zip', false, 'dist', true],
        ['shared extension', 'extensions', true, 'extensions/widget', true],
    ] as const)('rejects %s conflicts', async (_label, held, heldDirectory, wanted, wantedDirectory) => {
        const release = await acquireBuildLock([{path: Path.join(root, held), directory: heldDirectory}]);
        await expect(acquireBuildLock([{path: Path.join(root, wanted), directory: wantedDirectory}])).rejects.toThrow(Path.join(root, held));
        await release();
    });

    it.each([
        ['same directory', 'dist/Bundle', true, 'dist/bundle', true],
        ['nested directory', 'dist/Bundle', true, 'DIST/bundle/child', true],
        ['parent directory', 'dist/Bundle/child', true, 'DIST/bundle', true],
        ['same ZIP', 'dist/Bundle.zip', false, 'dist/bundle.ZIP', false],
        ['ZIP within output', 'dist/Bundle', true, 'DIST/bundle/archive.ZIP', false],
        ['output around ZIP', 'dist/Bundle/archive.ZIP', false, 'DIST/bundle', true],
        ['Unicode normalization', 'dist/café', true, 'dist/cafe\u0301', true],
    ] as const)('locks nonexistent %s variants together while preserving diagnostic paths', async (_label, held, heldDirectory, wanted, wantedDirectory) => {
        const heldPath = Path.join(root, held);
        const wantedPath = Path.join(root, wanted);
        await expect(fs.stat(heldPath)).rejects.toMatchObject({code: 'ENOENT'});
        await expect(fs.stat(wantedPath)).rejects.toMatchObject({code: 'ENOENT'});
        const release = await acquireBuildLock([{path: heldPath, directory: heldDirectory}]);
        await expect(acquireBuildLock([{path: wantedPath, directory: wantedDirectory}])).rejects.toThrow(`resource "${wantedPath}" conflicts with "${heldPath}"`);
        await release();
    });

    it('does not confuse common path prefixes with directory containment', async () => {
        const first = await acquireBuildLock([{path: Path.join(root, 'dist'), directory: true}]);
        const second = await acquireBuildLock([{path: Path.join(root, 'dist-other'), directory: true}]);
        await first();
        await second();
    });

    it('does not steal an abandoned lease', async () => {
        await fs.mkdir(registry);
        const resource = {path: Path.join(root, 'dist'), directory: true};
        const lease = Path.join(registry, 'abandoned.json');
        await fs.writeFile(lease, JSON.stringify({pid: 99999999, resources: [resource]}));
        await expect(acquireBuildLock([resource])).rejects.toThrow('PID 99999999');
        await expect(acquireBuildLock([resource])).rejects.toThrow(lease);
        expect(await fs.readFile(lease, 'utf8')).toContain('99999999');
    });

    it('never removes a registry guard it did not create', async () => {
        const guard = Path.join(registry, '.guard');
        await fs.mkdir(guard, {recursive: true});
        await fs.writeFile(Path.join(guard, 'owner.json'), JSON.stringify({pid: 12345, token: 'another-owner'}));
        await expect(acquireBuildLock([{path: Path.join(root, 'dist'), directory: true}])).rejects.toThrow(`lock registry is busy at "${guard}" (PID 12345)`);
        expect((await fs.stat(guard)).isDirectory()).toBe(true);
    });

    it('does not remove a replacement guard with a different owner', async () => {
        const readDirectory = fs.readdir;
        const guard = Path.join(registry, '.guard');
        vi.spyOn(fs, 'readdir').mockImplementationOnce(async (path) => {
            await fs.rename(guard, Path.join(registry, 'original-guard'));
            await fs.mkdir(guard);
            await fs.writeFile(Path.join(guard, 'owner.json'), JSON.stringify({pid: 12345, token: 'replacement'}));
            return await readDirectory(path) as never;
        });
        await acquireBuildLock([{path: Path.join(root, 'dist'), directory: true}]);
        expect(JSON.parse(await fs.readFile(Path.join(guard, 'owner.json'), 'utf8'))).toEqual({pid: 12345, token: 'replacement'});
    });

    it('cleans its own guard when writing its owner file fails', async () => {
        vi.spyOn(fs, 'writeFile').mockRejectedValueOnce(new Error('owner write failed'));
        await expect(acquireBuildLock([])).rejects.toThrow('owner write failed');
        expect(await fs.readdir(registry)).toEqual([]);
    });

    it('does not release a lease whose ownership changed', async () => {
        const release = await acquireBuildLock([{path: Path.join(root, 'dist'), directory: true}]);
        const [file] = await fs.readdir(registry);
        const lease = Path.join(registry, file);
        const original = JSON.parse(await fs.readFile(lease, 'utf8'));
        expect(original.token).toBe(file.replace(/\.json$/, ''));
        await fs.writeFile(lease, JSON.stringify({...original, token: 'replacement'}));
        await release();
        expect(JSON.parse(await fs.readFile(lease, 'utf8')).token).toBe('replacement');
    });

    it('removes its incomplete lease if writing it fails after creation', async () => {
        const open = fs.open;
        vi.spyOn(fs, 'open').mockImplementationOnce(async (path, flags, mode) => {
            const handle = await open(path, flags, mode);
            vi.spyOn(handle, 'writeFile').mockRejectedValueOnce(new Error('lease write failed'));
            return handle;
        });
        await expect(acquireBuildLock([])).rejects.toThrow('lease write failed');
        expect(await fs.readdir(registry)).toEqual([]);
        const release = await acquireBuildLock([]);
        await release();
    });

    it('releases the registry guard when reading a lease fails', async () => {
        await fs.mkdir(registry);
        await fs.writeFile(Path.join(registry, 'invalid.json'), 'invalid');
        await expect(acquireBuildLock([])).rejects.toThrow();
        await expect(fs.stat(Path.join(registry, '.guard'))).rejects.toMatchObject({code: 'ENOENT'});
        expect(await fs.readdir(registry)).toEqual(['invalid.json']);
    });

    it('coordinates independent processes and allows reuse after the holder releases', async () => {
        const held = [
            {path: Path.join(root, 'dist'), directory: true},
            {path: Path.join(root, 'shared.zip'), directory: false},
            {path: Path.join(root, 'extensions'), directory: true},
        ];
        const moduleUrl = pathToFileURL(Path.resolve('scripts/build/lifecycle.ts')).href;
        child = spawn(process.execPath, ['--import', 'tsx', '--input-type=module', '-e', `
            import {acquireBuildLock} from ${JSON.stringify(moduleUrl)};
            const release = await acquireBuildLock(${JSON.stringify(held)});
            process.stdout.write('ready\\n');
            process.stdin.once('data', async () => {await release(); process.exit(0);});
        `], {env: {...process.env, TMPDIR: root, TMP: root, TEMP: root}});
        const holder = child;
        await new Promise<void>((resolve, reject) => {
            let output = '';
            holder.stdout.on('data', (data) => {
                output += data.toString();
                if (output.includes('ready\n')) {
                    resolve();
                }
            });
            holder.on('error', reject);
            holder.on('exit', code => reject(new Error(`Lock holder exited early (${code}).`)));
        });
        const releaseIndependent = await acquireBuildLock([{path: Path.join(root, 'independent'), directory: true}]);
        await releaseIndependent();
        for (const resource of [...held, {path: Path.join(root, 'dist/child'), directory: true}, {path: root, directory: true}]) {
            await expect(acquireBuildLock([resource])).rejects.toThrow(`PID ${holder.pid}`);
        }
        const exited = new Promise<number | null>(resolve => holder.once('exit', resolve));
        holder.stdin.end('release');
        expect(await exited).toBe(0);
        child = undefined;
        const release = await acquireBuildLock(held);
        await release();
        expect(await fs.readdir(registry)).toEqual([]);
    });
});

async function stagedOutputs() {
    const directory = {source: Path.join(root, 'dist.stage'), target: Path.join(root, 'dist')};
    const archive = {source: Path.join(root, 'archive.stage'), target: Path.join(root, 'archive.zip')};
    await fs.mkdir(directory.source);
    await fs.mkdir(directory.target);
    await fs.writeFile(Path.join(directory.source, 'new.js'), 'new runtime');
    await fs.writeFile(Path.join(directory.target, 'old.js'), 'old runtime');
    await fs.writeFile(archive.source, 'new archive');
    await fs.writeFile(archive.target, 'old archive');
    return [directory, archive];
}

describe('staged output publication', () => {
    it('replaces all outputs and removes obsolete files and backups', async () => {
        const outputs = await stagedOutputs();
        await publishBuild(outputs);
        expect(await fs.readdir(outputs[0].target)).toEqual(['new.js']);
        expect(await fs.readFile(outputs[1].target, 'utf8')).toBe('new archive');
        expect((await fs.readdir(root)).sort()).toEqual(['archive.zip', 'dist']);
    });

    it('creates a target that did not previously exist', async () => {
        const source = Path.join(root, 'stage');
        const target = Path.join(root, 'output');
        await fs.writeFile(source, 'new');
        await publishBuild([{source, target}]);
        expect(await fs.readFile(target, 'utf8')).toBe('new');
        expect(await fs.readdir(root)).toEqual(['output']);
    });

    it('restores the output directory and ZIP if installing the ZIP fails', async () => {
        const outputs = await stagedOutputs();
        const rename = fs.rename;
        vi.spyOn(fs, 'rename').mockImplementation(async (source, target) => {
            if (source === outputs[1].source) {
                throw new Error('ZIP replacement failed');
            }
            await rename(source, target);
        });
        await expect(publishBuild(outputs)).rejects.toThrow('ZIP replacement failed');
        expect(await fs.readdir(outputs[0].target)).toEqual(['old.js']);
        expect(await fs.readFile(outputs[1].target, 'utf8')).toBe('old archive');
        expect((await fs.readdir(root)).some(path => path.includes('.backup-'))).toBe(false);
    });

    it('retains recovery backups and reports them if rollback also fails', async () => {
        const outputs = await stagedOutputs();
        const rename = fs.rename;
        vi.spyOn(fs, 'rename').mockImplementation(async (source, target) => {
            if (source === outputs[1].source || String(source).startsWith(`${outputs[0].target}.backup-`)) {
                throw new Error('injected rename failure');
            }
            await rename(source, target);
        });
        const error = await publishBuild(outputs).catch(failure => failure) as AggregateError;
        expect(error).toBeInstanceOf(AggregateError);
        const backup = (await fs.readdir(root)).find(path => path.startsWith('dist.backup-'))!;
        expect(error.message).toContain(Path.join(root, backup));
        expect(await fs.readFile(Path.join(root, backup, 'old.js'), 'utf8')).toBe('old runtime');
        expect(await fs.readFile(outputs[1].target, 'utf8')).toBe('old archive');
    });

    it('removes newly created targets on a later failure', async () => {
        const source = Path.join(root, 'stage');
        const target = Path.join(root, 'output');
        await fs.writeFile(source, 'new');
        await expect(publishBuild([{source, target}, {source: Path.join(root, 'missing'), target: Path.join(root, 'zip')}])).rejects.toThrow();
        expect(await fs.readdir(root)).toEqual([]);
    });

    it('does not roll back committed outputs when removing a backup fails', async () => {
        const outputs = await stagedOutputs();
        const remove = fs.rm;
        const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
        vi.spyOn(fs, 'rm').mockImplementation(async (path, options) => {
            if (String(path).startsWith(`${outputs[0].target}.backup-`)) {
                throw new Error('backup removal failed');
            }
            await remove(path, options);
        });
        await publishBuild(outputs);
        expect(await fs.readdir(outputs[0].target)).toEqual(['new.js']);
        expect(await fs.readFile(outputs[1].target, 'utf8')).toBe('new archive');
        const backup = (await fs.readdir(root)).find(path => path.startsWith('dist.backup-'))!;
        expect(warn).toHaveBeenCalledWith(expect.stringContaining(Path.join(root, backup)), expect.any(Error));
        expect(await fs.readFile(Path.join(root, backup, 'old.js'), 'utf8')).toBe('old runtime');
    });
});
