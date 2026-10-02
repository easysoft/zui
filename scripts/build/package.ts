import Path from 'node:path';
import {execFile} from 'node:child_process';
import {createHash, randomUUID} from 'node:crypto';
import {open} from 'node:fs/promises';
import {promisify} from 'node:util';
import fs from 'fs-extra';
import {resolveBuildPlan, validateDirectories} from './config';
import {acquireBuildLock, publishBuild} from './lifecycle';
import {canonical} from './paths';
import {runBuild} from './run';

const execFileAsync = promisify(execFile);
const requiredFiles = ['zui.esm.js', 'zui.js', 'zui.css', 'zui.d.ts', 'zui.d.cts', 'types/css.d.ts', 'types/build/npm-types.d.ts'];

export interface NpmArtifact {
    filename: string;
    name: string;
    version: string;
    size: number;
    integrity: string;
}

/** Hash the exact bytes of a non-empty regular file. */
export async function inspectTarball(tarball: string): Promise<{size: number; integrity: string}> {
    const input = await fs.stat(tarball);
    if (!input.isFile() || !input.size) {
        throw new Error(`Npm tarball must be a non-empty regular file: ${tarball}`);
    }
    const handle = await open(tarball, 'r');
    try {
        const stat = await handle.stat();
        if (!stat.isFile() || !stat.size) {
            throw new Error(`Npm tarball must be a non-empty regular file: ${tarball}`);
        }
        const hash = createHash('sha512');
        let size = 0;
        for await (const chunk of handle.createReadStream({autoClose: false})) {
            hash.update(chunk);
            size += chunk.length;
        }
        if (size !== stat.size) {
            throw new Error(`Npm tarball changed while reading: ${tarball}`);
        }
        return {size, integrity: `sha512-${hash.digest('base64')}`};
    } finally {
        await handle.close();
    }
}

/** Assemble in a fresh directory; the checked-in package template is always read-only. */
export async function assembleNpmPackage(options: {
    rootDir: string;
    distDir: string;
    templatePath: string;
    packageDir: string;
    version: string;
}): Promise<{name: string; version: string}> {
    const {rootDir, distDir, templatePath, packageDir, version} = options;
    const template = await fs.readJSON(templatePath);
    if (typeof template.name !== 'string' || !template.name.trim()) {
        throw new Error(`Npm package template requires a name: ${templatePath}`);
    }
    for (const file of requiredFiles) {
        if (!(await fs.stat(Path.join(distDir, file))).isFile()) {
            throw new Error(`Npm runtime output must be a regular file: ${file}`);
        }
    }
    await fs.mkdir(packageDir);
    await fs.copy(distDir, Path.join(packageDir, 'dist'));
    await fs.copyFile(Path.join(packageDir, 'dist/zui.js'), Path.join(packageDir, 'dist/zui.cjs'));
    await fs.copyFile(Path.join(rootDir, 'README.md'), Path.join(packageDir, 'README.md'));
    await fs.copyFile(Path.join(rootDir, 'LICENSE'), Path.join(packageDir, 'LICENSE'));
    await fs.writeJSON(Path.join(packageDir, 'package.json'), {...template, version}, {spaces: 4});
    return {name: template.name, version};
}

/** Build once, pack once, then replace only this delivery directory after all stages succeed. */
export async function packNpmPackage(options: {rootDir?: string; outDir?: string} = {}): Promise<{tarball: string; artifact: NpmArtifact}> {
    const rootDir = Path.resolve(options.rootDir ?? process.cwd());
    const {version} = await fs.readJSON(Path.join(rootDir, 'package.json'));
    const plan = await resolveBuildPlan({
        name: 'zui', version, excludeNotReady: true,
        outDir: options.outDir ?? `dist/npm/run-${randomUUID()}`,
    }, rootDir);
    const outDir = await canonical(plan.outDir);
    const release = await acquireBuildLock([{path: outDir, directory: true}]);
    let stage: string | undefined;
    try {
        await fs.ensureDir(Path.dirname(outDir));
        stage = await fs.mkdtemp(Path.join(Path.dirname(outDir), '.zui-npm-stage-'));
        const distDir = Path.join(stage, 'runtime');
        await runBuild({...plan, outDir: distDir}, {npmTypes: true});
        const packageDir = Path.join(stage, 'package');
        const identity = await assembleNpmPackage({
            rootDir, distDir, packageDir, version: plan.version,
            templatePath: Path.join(rootDir, 'publish/package.json'),
        });
        const deliveryDir = Path.join(stage, 'delivery');
        await fs.mkdir(deliveryDir);
        const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
        const {stdout} = await execFileAsync(npm, ['pack', '--json', '--ignore-scripts', '--pack-destination', deliveryDir, '--cache', Path.join(stage, 'npm-cache')], {cwd: packageDir, maxBuffer: 10 * 1024 * 1024});
        const packed: NpmArtifact[] = JSON.parse(stdout);
        const artifact = packed[0];
        if (!Array.isArray(packed) || packed.length !== 1 || !artifact
            || typeof artifact.filename !== 'string' || !artifact.filename.endsWith('.tgz')
            || /[/\\]/.test(artifact.filename) || Path.basename(artifact.filename) !== artifact.filename
            || artifact.name !== identity.name || artifact.version !== identity.version) {
            throw new Error('npm pack returned an unexpected package identity or filename.');
        }
        const digest = await inspectTarball(Path.join(deliveryDir, artifact.filename));
        if (artifact.size !== digest.size || artifact.integrity !== digest.integrity) {
            throw new Error('npm pack returned a tarball with mismatched size or integrity.');
        }
        const manifest: NpmArtifact = {filename: artifact.filename, ...identity, ...digest};
        await fs.writeJSON(Path.join(deliveryDir, 'artifact.json'), manifest, {spaces: 4});
        // Keep the original final destination under validation, not just the temporary runtime output.
        await validateDirectories(plan);
        if (await canonical(plan.outDir) !== outDir) {
            throw new Error('Npm output path changed during packaging; no artifacts were published.');
        }
        await publishBuild([{source: deliveryDir, target: outDir}]);
        return {tarball: Path.join(outDir, manifest.filename), artifact: manifest};
    } finally {
        if (stage) {
            await fs.remove(stage).catch(error => console.warn(`Cannot clean npm temporary path "${stage}":`, error));
        }
        await release().catch(error => console.warn('Cannot release npm package lock:', error));
    }
}
