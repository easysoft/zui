import Path from 'node:path';
import os from 'node:os';
import fsPromises from 'node:fs/promises';
import {createHash} from 'node:crypto';
import fs from 'fs-extra';
import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';
import {assembleNpmPackage, inspectTarball, packNpmPackage} from '../../scripts/build/package';
import {acquireBuildLock} from '../../scripts/build/lifecycle';
import {runBuild} from '../../scripts/build/run';

vi.mock('../../scripts/build/run', () => ({runBuild: vi.fn()}));

let root: string;
let outDir: string;
let templatePath: string;
let template: string;
const runtimeFiles = {
    'zui.esm.js': 'export const version = "3.2.1";',
    'zui.js': 'module.exports = {version: "3.2.1"};',
    'zui.css': '@font-face {src: url("icons/font.woff2");}',
    'zui.d.ts': 'export declare const version: string;',
    'zui.d.cts': 'export declare const version: string;',
    'types/css.d.ts': 'export {};',
    'types/build/npm-types.d.ts': 'export declare const version: string;',
    'zui.js.map': '{"version":3,"sources":["source.ts"]}',
    'icons/font.woff2': 'font bytes',
};

async function writeRuntime(distDir: string) {
    for (const [file, contents] of Object.entries(runtimeFiles)) {
        await fs.outputFile(Path.join(distDir, file), contents);
    }
}

async function expectUnchanged() {
    expect(await fs.readFile(templatePath, 'utf8')).toBe(template);
    expect(await fs.readFile(Path.join(outDir, 'old.tgz'), 'utf8')).toBe('old tarball');
    expect(await fs.readFile(Path.join(outDir, 'artifact.json'), 'utf8')).toBe('old manifest');
    expect(await fs.readFile(Path.join(root, 'publish/dist/sentinel'), 'utf8')).toBe('existing publish files');
}

async function expectCleaned() {
    expect((await fs.readdir(Path.dirname(outDir))).sort()).toEqual(['.zui-npm-stage-neighbor', 'release']);
    expect(await fs.readFile(Path.join(root, 'deliveries/.zui-npm-stage-neighbor/sentinel'), 'utf8')).toBe('another run');
    const registry = Path.join(root, `zui-build-locks-${process.getuid?.() ?? os.userInfo().username}`);
    expect(await fs.readdir(registry)).toEqual([]);
}

beforeEach(async () => {
    vi.clearAllMocks();
    root = await fs.realpath(await fs.mkdtemp(Path.join(os.tmpdir(), 'zui-npm-package-')));
    vi.spyOn(os, 'tmpdir').mockReturnValue(root);
    outDir = Path.join(root, 'deliveries/release');
    templatePath = Path.join(root, 'publish/package.json');
    await fs.outputJSON(Path.join(root, 'package.json'), {version: '3.2.1'});
    await fs.outputJSON(Path.join(root, 'lib/button/package.json'), {
        name: '@zui/button', version: '1.0.0', files: ['src/**/*'], zui: {type: 'component'},
    });
    await fs.outputJSON(templatePath, {
        name: '@fixture/zui', version: '0.0.0', files: ['dist'], type: 'module',
        main: './dist/zui.cjs', module: './dist/zui.esm.js', types: './dist/zui.d.ts',
        exports: {'.': {import: './dist/zui.esm.js', require: './dist/zui.cjs'}, './css': './dist/zui.css'},
        dependencies: {preact: '^10.27.2'},
        scripts: {prepack: 'node -e "throw new Error(\'must not run\')"'},
    }, {spaces: 4});
    template = await fs.readFile(templatePath, 'utf8');
    await fs.outputFile(Path.join(root, 'README.md'), '# Fixture package');
    await fs.outputFile(Path.join(root, 'LICENSE'), 'MIT license fixture');
    await fs.outputFile(Path.join(root, 'publish/dist/sentinel'), 'existing publish files');
    await fs.outputFile(Path.join(root, 'deliveries/.zui-npm-stage-neighbor/sentinel'), 'another run');
    await fs.outputFile(Path.join(outDir, 'old.tgz'), 'old tarball');
    await fs.outputFile(Path.join(outDir, 'artifact.json'), 'old manifest');
    vi.mocked(runBuild).mockImplementation(async (plan, options) => {
        expect(options).toEqual({npmTypes: true});
        // The real build owns its runtime output; the final delivery lease must not overlap it.
        const release = await acquireBuildLock([{path: plan.outDir, directory: true}]);
        try {
            await writeRuntime(plan.outDir);
        } finally {
            await release();
        }
    });
});

afterEach(async () => {
    vi.restoreAllMocks();
    vi.unstubAllEnvs();
    await fs.remove(root);
});

describe('npm package assembly', () => {
    it('preserves the template contract and copies runtime, declarations, maps and public assets', async () => {
        const distDir = Path.join(root, 'runtime');
        const packageDir = Path.join(root, 'package');
        await writeRuntime(distDir);
        expect(await assembleNpmPackage({rootDir: root, distDir, templatePath, packageDir, version: '3.2.1'})).toEqual({name: '@fixture/zui', version: '3.2.1'});
        expect(await fs.readJSON(Path.join(packageDir, 'package.json'))).toEqual({...JSON.parse(template), version: '3.2.1'});
        for (const [file, contents] of Object.entries(runtimeFiles)) {
            expect(await fs.readFile(Path.join(packageDir, 'dist', file), 'utf8')).toBe(contents);
        }
        expect(await fs.readFile(Path.join(packageDir, 'dist/zui.cjs'), 'utf8')).toBe(runtimeFiles['zui.js']);
        expect(await fs.readFile(Path.join(packageDir, 'README.md'), 'utf8')).toBe('# Fixture package');
        expect(await fs.readFile(Path.join(packageDir, 'LICENSE'), 'utf8')).toBe('MIT license fixture');
        await expectUnchanged();
    });

    it('rejects missing declarations before creating the package directory', async () => {
        const distDir = Path.join(root, 'runtime');
        const packageDir = Path.join(root, 'package');
        await writeRuntime(distDir);
        await fs.remove(Path.join(distDir, 'zui.d.cts'));
        await expect(assembleNpmPackage({rootDir: root, distDir, templatePath, packageDir, version: '3.2.1'})).rejects.toThrow('ENOENT');
        expect(await fs.pathExists(packageDir)).toBe(false);
        await expectUnchanged();
    });
});

describe('npm artifact integrity', () => {
    it('hashes the exact bytes and rejects absent, empty or non-file input', async () => {
        const tarball = Path.join(outDir, 'old.tgz');
        expect(await inspectTarball(tarball)).toEqual({size: 11, integrity: `sha512-${createHash('sha512').update('old tarball').digest('base64')}`});
        await expect(inspectTarball(outDir)).rejects.toThrow('regular file');
        await expect(inspectTarball(Path.join(root, 'missing.tgz'))).rejects.toThrow('ENOENT');
        await fs.writeFile(tarball, '');
        await expect(inspectTarball(tarball)).rejects.toThrow('non-empty');
    });
});

describe('npm package delivery', () => {
    it('publishes one tarball and a portable manifest using the version selected before building', async () => {
        const build = vi.mocked(runBuild).getMockImplementation()!;
        vi.mocked(runBuild).mockImplementation(async (...args) => {
            expect(args[0].version).toBe('3.2.1');
            await fs.writeJSON(Path.join(root, 'package.json'), {version: '9.9.9'});
            await build(...args);
        });
        const result = await packNpmPackage({rootDir: root, outDir});
        expect(runBuild).toHaveBeenCalledTimes(1);
        expect(result.tarball).toBe(Path.join(outDir, 'fixture-zui-3.2.1.tgz'));
        expect(result.artifact).toEqual({filename: 'fixture-zui-3.2.1.tgz', name: '@fixture/zui', version: '3.2.1', ...await inspectTarball(result.tarball)});
        expect(await fs.readJSON(Path.join(outDir, 'artifact.json'))).toEqual(result.artifact);
        expect((await fs.readdir(outDir)).sort()).toEqual(['artifact.json', 'fixture-zui-3.2.1.tgz']);
        expect(await fs.readFile(templatePath, 'utf8')).toBe(template);
        expect(await fs.readFile(Path.join(root, 'publish/dist/sentinel'), 'utf8')).toBe('existing publish files');
        await expectCleaned();
    });

    it('uses independent default delivery directories for successive packages', async () => {
        const first = await packNpmPackage({rootDir: root});
        const second = await packNpmPackage({rootDir: root});
        expect(first.tarball).not.toBe(second.tarball);
        for (const result of [first, second]) {
            expect(Path.dirname(Path.dirname(result.tarball))).toBe(Path.join(root, 'dist/npm'));
            expect(Path.basename(Path.dirname(result.tarball))).toMatch(/^run-/);
            expect(await inspectTarball(result.tarball)).toEqual({size: result.artifact.size, integrity: result.artifact.integrity});
        }
        await expectUnchanged();
    });

    it.each(['build', 'assembly', 'pack', 'replacement'])('preserves the old delivery when %s fails and cleans only its own stage', async (stage) => {
        if (stage === 'build') {
            vi.mocked(runBuild).mockRejectedValueOnce(new Error('build failed'));
        } else if (stage === 'assembly') {
            await fs.remove(Path.join(root, 'README.md'));
        } else if (stage === 'pack') {
            vi.stubEnv('PATH', Path.join(root, 'missing-command-directory'));
        } else {
            const rename = fsPromises.rename;
            vi.spyOn(fsPromises, 'rename').mockImplementation(async (source, target) => {
                if (Path.basename(String(source)) === 'delivery' && target === outDir) {
                    throw new Error('replacement failed');
                }
                return rename(source, target);
            });
        }
        await expect(packNpmPackage({rootDir: root, outDir})).rejects.toThrow();
        await expectUnchanged();
        await expectCleaned();
    });

    it.each(['lib', 'scripts', 'publish', 'build', '.'])('protects the final %s directory before invoking the build', async (destination) => {
        await expect(packNpmPackage({rootDir: root, outDir: destination})).rejects.toThrow(/Unsafe|overlap/);
        expect(runBuild).not.toHaveBeenCalled();
        await expectUnchanged();
    });

    it('rejects a target held by another build without touching its lease or output', async () => {
        const release = await acquireBuildLock([{path: outDir, directory: true}]);
        try {
            await expect(packNpmPackage({rootDir: root, outDir})).rejects.toThrow(`PID ${process.pid}`);
            expect(runBuild).not.toHaveBeenCalled();
            await expect(acquireBuildLock([{path: outDir, directory: true}])).rejects.toThrow(`PID ${process.pid}`);
            await expectUnchanged();
        } finally {
            await release();
        }
        await expectCleaned();
    });

    it('rejects an output symlink redirected during packaging without replacing either target', async () => {
        const alias = Path.join(root, 'output-link');
        const redirected = Path.join(root, 'redirected');
        await fs.ensureDir(redirected);
        await fs.symlink(outDir, alias);
        const build = vi.mocked(runBuild).getMockImplementation()!;
        vi.mocked(runBuild).mockImplementation(async (...args) => {
            await build(...args);
            await fs.unlink(alias);
            await fs.symlink(redirected, alias);
        });
        await expect(packNpmPackage({rootDir: root, outDir: alias})).rejects.toThrow('output path changed');
        expect(await fs.readdir(redirected)).toEqual([]);
        await expectUnchanged();
        await expectCleaned();
    });
});
