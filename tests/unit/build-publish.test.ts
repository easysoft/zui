import Path from 'node:path';
import os from 'node:os';
import fs from 'fs-extra';
import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';
import {exec} from '../../scripts/utilities/exec';
import {inspectTarball} from '../../scripts/build/package';
import {publishNpmPackage} from '../../scripts/build/publish';

vi.mock('../../scripts/utilities/exec', () => ({exec: vi.fn()}));

let rootDir: string;
let tarball: string;
let snapshot: string | undefined;

async function writeReport(options: Parameters<typeof exec>[2]) {
    const env = options!.env!;
    snapshot = String(env.ZUI_NPM_TARBALL);
    await fs.writeJSON(String(env.ZUI_NPM_REPORT), {
        tarball: snapshot,
        name: env.ZUI_NPM_EXPECTED_NAME,
        version: env.ZUI_NPM_EXPECTED_VERSION,
        ...await inspectTarball(snapshot),
    });
}

beforeEach(async () => {
    rootDir = await fs.realpath(await fs.mkdtemp(Path.join(os.tmpdir(), 'zui-publish-test-')));
    tarball = Path.join(rootDir, 'zui-1.2.3.tgz');
    snapshot = undefined;
    await fs.outputJSON(Path.join(rootDir, 'publish/package.json'), {name: 'zui', version: '0.0.0'});
    await fs.writeJSON(Path.join(rootDir, 'package.json'), {version: '1.2.3'});
    await fs.writeFile(tarball, 'selected package bytes');
    vi.mocked(exec).mockReset();
    vi.mocked(exec).mockImplementation(async (_command, args, options) => {
        if (args?.[0] === 'test:build') {
            await writeReport(options);
        }
    });
    vi.spyOn(console, 'log').mockImplementation(() => undefined);
});

afterEach(async () => {
    vi.restoreAllMocks();
    vi.unstubAllEnvs();
    await fs.remove(rootDir);
});

function uploads() {
    return vi.mocked(exec).mock.calls.filter(([, args]) => args?.[0] === 'publish');
}

describe('publishing a verified tarball', () => {
    it('checks and uploads the same private bytes and preserves the source and template', async () => {
        const original = await inspectTarball(tarball);
        await fs.writeJSON(Path.join(rootDir, 'artifact.json'), {
            filename: Path.basename(tarball), name: 'zui', version: '1.2.3', ...original,
        });
        vi.stubEnv('ZUI_NPM_TARBALL', '/stale/previous.tgz');
        vi.stubEnv('ZUI_NPM_REPORT', '/stale/previous.json');
        const run = vi.mocked(exec).getMockImplementation()!;
        vi.mocked(exec).mockImplementation(async (...args) => {
            await run(...args);
            if (args[1]?.[0] === 'publish') {
                expect(args[1]).toEqual(['publish', snapshot, '--ignore-scripts', '--cache', Path.join(Path.dirname(snapshot!), 'npm-cache')]);
                expect(await inspectTarball(snapshot!)).toEqual(original);
            }
        });
        await publishNpmPackage({rootDir, tarball});
        expect(vi.mocked(exec).mock.calls.map(([command, args]) => [command, args?.[0]])).toEqual([
            ['pnpm', 'check'], ['pnpm', 'test:build'], [process.platform === 'win32' ? 'npm.cmd' : 'npm', 'publish'],
        ]);
        expect(snapshot).not.toBe(tarball);
        expect(vi.mocked(exec).mock.calls[0][2]?.env).not.toHaveProperty('ZUI_NPM_TARBALL');
        expect(uploads()[0][2]?.env).not.toHaveProperty('ZUI_NPM_REPORT');
        expect(await fs.pathExists(Path.dirname(snapshot!))).toBe(false);
        expect(await inspectTarball(tarball)).toEqual(original);
        expect(await fs.readJSON(Path.join(rootDir, 'publish/package.json'))).toEqual({name: 'zui', version: '0.0.0'});
    });

    it.each(['', 'folder', 'https://example.test/pkg'])('requires an explicit tgz argument: %s', async (value) => {
        await expect(publishNpmPackage({rootDir, tarball: value})).rejects.toThrow('explicit .tgz');
        expect(exec).not.toHaveBeenCalled();
    });

    it.each(['missing', 'empty', 'directory'])('rejects a %s tarball before running checks', async (kind) => {
        await fs.remove(tarball);
        if (kind === 'empty') {
            await fs.writeFile(tarball, '');
        } else if (kind === 'directory') {
            await fs.mkdir(tarball);
        }
        await expect(publishNpmPackage({rootDir, tarball})).rejects.toThrow();
        expect(exec).not.toHaveBeenCalled();
    });

    it.each(['filename', 'name', 'version', 'size', 'integrity'])('rejects mismatched artifact %s before checks', async (field) => {
        const artifact = {filename: Path.basename(tarball), name: 'zui', version: '1.2.3', ...await inspectTarball(tarball)};
        await fs.writeJSON(Path.join(rootDir, 'artifact.json'), {...artifact, [field]: 'wrong'});
        await expect(publishNpmPackage({rootDir, tarball})).rejects.toThrow('does not match artifact.json');
        expect(exec).not.toHaveBeenCalled();
    });

    it.each(['check', 'test:build'])('does not upload if %s fails', async (phase) => {
        vi.mocked(exec).mockImplementation(async (_command, args, options) => {
            if (args?.[0] === 'test:build') {
                snapshot = String(options!.env!.ZUI_NPM_TARBALL);
            }
            if (args?.[0] === phase) {
                throw new Error(`${phase} failed`);
            }
        });
        await expect(publishNpmPackage({rootDir, tarball})).rejects.toThrow(`${phase} failed`);
        expect(uploads()).toHaveLength(0);
        if (snapshot) {
            expect(await fs.pathExists(Path.dirname(snapshot))).toBe(false);
        }
    });

    it.each(['missing', 'tarball', 'name', 'version', 'integrity', 'size'])('rejects a %s verification report', async (field) => {
        vi.mocked(exec).mockImplementation(async (_command, args, options) => {
            if (args?.[0] !== 'test:build') {
                return;
            }
            snapshot = String(options!.env!.ZUI_NPM_TARBALL);
            if (field !== 'missing') {
                await writeReport(options);
                const report = String(options!.env!.ZUI_NPM_REPORT);
                await fs.writeJSON(report, {...await fs.readJSON(report), [field]: 'wrong'});
            }
        });
        await expect(publishNpmPackage({rootDir, tarball})).rejects.toThrow();
        expect(uploads()).toHaveLength(0);
        expect(await fs.pathExists(Path.dirname(snapshot!))).toBe(false);
    });

    it('rejects source mutation while creating its snapshot', async () => {
        const copy = fs.copyFile;
        vi.spyOn(fs, 'copyFile').mockImplementationOnce(async (...args) => {
            await copy(...args);
            await fs.writeFile(tarball, 'changed source bytes');
        });
        await expect(publishNpmPackage({rootDir, tarball})).rejects.toThrow('changed while creating');
        expect(exec).not.toHaveBeenCalled();
    });

    it('does not upload a snapshot changed after successful consumption', async () => {
        vi.mocked(exec).mockImplementation(async (_command, args, options) => {
            if (args?.[0] === 'test:build') {
                await writeReport(options);
                await fs.writeFile(snapshot!, 'modified after verification');
            }
        });
        await expect(publishNpmPackage({rootDir, tarball})).rejects.toThrow('changed after verification');
        expect(uploads()).toHaveLength(0);
        expect(await fs.pathExists(Path.dirname(snapshot!))).toBe(false);
    });

    it('propagates upload failure, cleans the snapshot and preserves the retry input', async () => {
        const original = await inspectTarball(tarball);
        const run = vi.mocked(exec).getMockImplementation()!;
        vi.mocked(exec).mockImplementation(async (...args) => {
            await run(...args);
            if (args[1]?.[0] === 'publish') {
                throw new Error('registry unavailable');
            }
        });
        await expect(publishNpmPackage({rootDir, tarball})).rejects.toThrow('registry unavailable');
        expect(uploads()).toHaveLength(1);
        expect(await inspectTarball(tarball)).toEqual(original);
        expect(await fs.pathExists(Path.dirname(snapshot!))).toBe(false);
    });
});
