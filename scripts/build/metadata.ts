import Path from 'node:path';
import {execFileSync} from 'node:child_process';
import fs from 'fs-extra';
import glob from 'fast-glob';
import type {LibInfo} from '../libs/lib-info';

/** Use source mtimes so repeated builds of unchanged sources have stable metadata. */
export async function getBuildMetadata(rootDir: string, libs: LibInfo[]) {
    const git = (...args: string[]) => execFileSync('git', args, {cwd: rootDir, encoding: 'utf8'}).trim();
    const buildHash = git('rev-parse', 'HEAD');
    const repositoryFiles = git('ls-files', '--cached', '--others', '--exclude-standard', '-z').split('\0').filter(Boolean).map(file => Path.resolve(rootDir, file));
    const extensionPatterns = [...new Set(libs
        .filter(lib => lib.zui.sourceType === 'exts')
        .map(lib => `${glob.convertPathToPattern(lib.zui.path)}/**/*`))];
    const extensionFiles = extensionPatterns.length ? await glob(extensionPatterns, {dot: true, ignore: ['**/node_modules/**'], onlyFiles: true}) : [];
    const times = await Promise.all([...repositoryFiles, ...extensionFiles].map(async (file) => {
        try {
            return (await fs.stat(file)).mtimeMs;
        } catch {
            return 0;
        }
    }));
    const lastCommitTime = Number(git('log', '-1', '--format=%ct')) * 1000;
    return {buildHash, buildTime: Math.floor(Math.max(lastCommitTime, ...times))};
}

/** Symlinked extension collections resolve ../../tsconfig.json through exts/. */
export async function ensureExtsTsconfig(rootDir: string) {
    const extsDir = Path.join(rootDir, 'exts');
    const tsconfigPath = Path.join(extsDir, 'tsconfig.json');
    if (await fs.pathExists(extsDir) && !await fs.pathExists(tsconfigPath)) {
        await fs.writeFile(tsconfigPath, `${JSON.stringify({extends: '../tsconfig.json'}, null, 4)}\n`);
    }
}
