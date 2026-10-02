import Path from 'node:path';
import os from 'node:os';
import {pathToFileURL} from 'node:url';
import {parseArgs} from 'node:util';
import fs from 'fs-extra';
import {exec} from '../utilities/exec';
import {inspectTarball} from './package';

/** Check and publish one private snapshot; never rebuild the selected npm package. */
export async function publishNpmPackage({tarball, rootDir = process.cwd()}: {tarball: string; rootDir?: string}): Promise<void> {
    rootDir = Path.resolve(rootDir);
    if (!tarball || !tarball.endsWith('.tgz')) {
        throw new Error('Provide an explicit .tgz file with --tarball.');
    }
    const source = Path.resolve(rootDir, tarball);
    const original = await inspectTarball(source);
    const {name} = await fs.readJSON(Path.join(rootDir, 'publish/package.json'));
    const {version} = await fs.readJSON(Path.join(rootDir, 'package.json'));
    if (typeof name !== 'string' || !name || typeof version !== 'string' || !version) {
        throw new Error('The publishing template name and project version must be nonempty strings.');
    }
    const artifactPath = Path.join(Path.dirname(source), 'artifact.json');
    if (await fs.pathExists(artifactPath)) {
        const artifact = await fs.readJSON(artifactPath);
        if (artifact?.filename !== Path.basename(source) || artifact.name !== name || artifact.version !== version
            || artifact.size !== original.size || artifact.integrity !== original.integrity) {
            throw new Error('The selected tarball does not match artifact.json or the project package identity.');
        }
    }
    const directory = await fs.realpath(await fs.mkdtemp(Path.join(os.tmpdir(), 'zui-npm-publish-')));
    const snapshot = Path.join(directory, 'package.tgz');
    const reportPath = Path.join(directory, 'verified.json');
    try {
        await fs.copyFile(source, snapshot, fs.constants.COPYFILE_EXCL);
        for (const file of [source, snapshot]) {
            const digest = await inspectTarball(file);
            if (digest.size !== original.size || digest.integrity !== original.integrity) {
                throw new Error('Tarball changed while creating the publishing snapshot.');
            }
        }
        const env = {...process.env};
        for (const key of Object.keys(env)) {
            if (key.startsWith('ZUI_NPM_')) {
                delete env[key];
            }
        }
        await exec('pnpm', ['check'], {cwd: rootDir, env});
        await exec('pnpm', ['test:build'], {
            cwd: rootDir,
            env: {
                ...env,
                ZUI_NPM_TARBALL: snapshot,
                ZUI_NPM_EXPECTED_NAME: name,
                ZUI_NPM_EXPECTED_VERSION: version,
                ZUI_NPM_EXPECTED_INTEGRITY: original.integrity,
                ZUI_NPM_REPORT: reportPath,
            },
        });
        const report = await fs.readJSON(reportPath);
        if (report?.tarball !== snapshot || report.name !== name || report.version !== version
            || report.size !== original.size || report.integrity !== original.integrity) {
            throw new Error('The consumer verification report does not match the publishing snapshot.');
        }
        const verified = await inspectTarball(snapshot);
        if (verified.size !== original.size || verified.integrity !== original.integrity) {
            throw new Error('Tarball changed after verification; publication was cancelled.');
        }
        console.log(`Publishing ${name}@${version} from ${snapshot}\n${verified.integrity}`);
        await exec(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['publish', snapshot, '--ignore-scripts', '--cache', Path.join(directory, 'npm-cache')], {cwd: rootDir, env});
    } finally {
        await fs.remove(directory).catch(error => console.warn(`Cannot clean npm publishing directory "${directory}":`, error));
    }
}

if (process.argv[1] && import.meta.url === pathToFileURL(Path.resolve(process.argv[1])).href) {
    const args = process.argv.slice(2);
    const {values} = parseArgs({
        args: args[0] === '--' ? args.slice(1) : args,
        options: {tarball: {type: 'string'}, help: {type: 'boolean'}},
    });
    if (values.help) {
        console.log('Usage: pnpm publish:npm --tarball <file.tgz>\nRun source and distribution checks, then publish the verified tarball without rebuilding it.');
    } else {
        await publishNpmPackage({tarball: values.tarball ?? ''});
    }
}
