import Path from 'node:path';
import {tmpdir} from 'node:os';
import {execFile, spawn, type ChildProcess} from 'node:child_process';
import {promisify} from 'node:util';
import fs from 'fs-extra';
import minimist from 'minimist';
import {afterEach, beforeEach, expect, test, vi} from 'vitest';
import {createLibFromPackageJson} from '../../scripts/libs/query';
import {acquireDocsLease} from '../../scripts/docs/lease';

const execFileAsync = promisify(execFile);
const script = Path.resolve(import.meta.dirname, '../../scripts/docs/index.ts');
const prepareScript = Path.resolve(import.meta.dirname, '../../scripts/docs/prepare.ts');
const tsx = import.meta.resolve('tsx');
vi.setConfig({testTimeout: 15_000});
let root: string;
let child: ChildProcess | undefined;
let childClosed: Promise<number | null> | undefined;

beforeEach(async () => {
    root = await fs.realpath(await fs.mkdtemp(Path.join(tmpdir(), 'zui-docs-service-')));
    await fs.outputJSON(Path.join(root, 'package.json'), {private: true, type: 'module', version: '1.0.0'});
});

afterEach(async () => {
    if (child && child.exitCode === null && child.signalCode === null) child.kill('SIGTERM');
    await childClosed;
    child = undefined;
    childClosed = undefined;
    await fs.remove(root);
});

function environment(extra: NodeJS.ProcessEnv = {}) {
    return {...process.env, BUILD_LIBS: undefined, DOCS_TEST_OUTPUT: Path.join(root, 'tool.json'), ...extra};
}

function run(...args: string[]) {
    return execFileAsync(process.execPath, ['--import', tsx, script, ...args], {cwd: root, env: environment({DOCS_TEST_EXIT: '0'})});
}

async function preparedFixture() {
    const libPath = Path.join(root, 'lib/fixture');
    const pkg = {name: '@zui/fixture', version: '1.0.0', main: 'src/main.ts', zui: {type: 'js-lib'}};
    await fs.outputJSON(Path.join(libPath, 'package.json'), pkg);
    await fs.outputFile(Path.join(libPath, 'src/main.ts'), 'export const fixture = true;');
    const lib = createLibFromPackageJson(pkg, {path: libPath, packageJsonPath: Path.join(libPath, 'package.json')});
    await fs.outputFile(Path.join(root, 'docs/docs/index.md'), '# Fixture');
    await fs.outputFile(Path.join(root, 'docs/_/index.md'), '# Fixture');
    await fs.outputFile(Path.join(root, 'favicon.svg'), '<svg/>');
    await fs.outputJSON(Path.join(root, 'docs/_/public/zui-libs.json'), [lib]);
    for (const file of ['zui-libs.js', 'zui/zui.js', 'zui/zui.css']) {
        await fs.outputFile(Path.join(root, 'docs/_/public', file), 'prepared content');
    }
    const tool = Path.join(root, 'docs/node_modules/vitepress');
    await fs.outputJSON(Path.join(tool, 'package.json'), {name: 'vitepress', bin: {vitepress: 'cli.cjs'}});
    await fs.outputFile(Path.join(tool, 'cli.cjs'), `
const fs = require('node:fs');
fs.writeFileSync(process.env.DOCS_TEST_OUTPUT, JSON.stringify({args: process.argv.slice(2), cwd: process.cwd(), pid: process.pid}));
if (process.env.DOCS_TEST_EXIT) process.exit(Number(process.env.DOCS_TEST_EXIT));
setInterval(() => {}, 1000);
process.on('SIGTERM', () => process.exit(0));
process.on('SIGINT', () => process.exit(0));
`);
    return {lib, libPath};
}

test('help needs no libraries or prepared outputs and writes nothing', async () => {
    const result = await run('dev', '--help');
    expect(result.stdout).toContain('--extension');
    expect(await fs.readdir(root)).toEqual(['package.json']);
});

test('prepared build preserves selection and forwards native options in the docs cwd', async () => {
    await preparedFixture();
    const manifestPath = Path.join(root, 'docs/_/public/zui-libs.json');
    const before = await fs.readFile(manifestPath, 'utf8');
    await run('build', '--prepared', '--outDir', 'alternate');
    const tool = await fs.readJSON(Path.join(root, 'tool.json'));
    expect(tool).toMatchObject({cwd: Path.join(root, 'docs'), args: ['build', './_', '--outDir', 'alternate']});
    expect(await fs.readFile(manifestPath, 'utf8')).toBe(before);
    const release = await acquireDocsLease(root);
    await release();
});

test.each([
    ['--host', 'localhost', '--port', '5199'],
    ['--host=localhost', '--port=5199'],
])('VitePress receives scalar host/port values for %j', async (...args) => {
    await preparedFixture();
    await run('dev-fast', ...args);
    const tool = await fs.readJSON(Path.join(root, 'tool.json'));
    expect(minimist(tool.args)).toMatchObject({host: 'localhost', port: 5199, strictPort: true});
});

test('prepared handling preserves options after the native separator', async () => {
    await preparedFixture();
    await run('build', '--prepared', '--', '--prepared');
    expect((await fs.readJSON(Path.join(root, 'tool.json'))).args).toEqual(['build', './_', '--', '--prepared']);
});

test('prepare failure never launches VitePress and releases the docs lease', async () => {
    const {libPath} = await preparedFixture();
    const pkg = await fs.readJSON(Path.join(libPath, 'package.json'));
    pkg.zui.prebuild = 'node fail.cjs';
    await fs.writeJSON(Path.join(libPath, 'package.json'), pkg);
    await fs.writeFile(Path.join(libPath, 'fail.cjs'), 'process.exit(1);');
    await expect(run('dev')).rejects.toMatchObject({code: 1});
    expect(await fs.pathExists(Path.join(root, 'tool.json'))).toBe(false);
    const release = await acquireDocsLease(root);
    await release();
});

test.each(['SIGINT', 'SIGTERM'] as const)('service holds the writer lease and %s closes its child before releasing it', async (signal) => {
    await preparedFixture();
    child = spawn(process.execPath, ['--import', tsx, script, 'dev-fast', '--port', '5199'], {cwd: root, env: environment(), stdio: 'pipe'});
    childClosed = new Promise(resolve => child!.once('close', resolve));
    await expect.poll(() => fs.pathExists(Path.join(root, 'tool.json')), {timeout: 10_000}).toBe(true);
    const tool = await fs.readJSON(Path.join(root, 'tool.json'));
    expect(tool.args).toEqual(['dev', './_', '--host', '127.0.0.1', '--strictPort', '--port', '5199']);
    const previous = await fs.readFile(Path.join(root, 'docs/_/index.md'), 'utf8');
    await expect(execFileAsync(process.execPath, ['--import', tsx, prepareScript, '--copy', '--build=no'], {cwd: root, env: environment()})).rejects.toMatchObject({code: 1});
    expect(await fs.readFile(Path.join(root, 'docs/_/index.md'), 'utf8')).toBe(previous);
    child.kill(signal);
    expect(await childClosed).toBe(signal === 'SIGINT' ? 130 : 143);
    expect(() => process.kill(tool.pid, 0)).toThrow();
    const release = await acquireDocsLease(root);
    await release();
});

test('tool failure retains its exit code and releases the docs lease', async () => {
    await preparedFixture();
    await expect(execFileAsync(process.execPath, ['--import', tsx, script, 'dev-fast'], {cwd: root, env: environment({DOCS_TEST_EXIT: '23'})})).rejects.toMatchObject({code: 23});
    const release = await acquireDocsLease(root);
    await release();
});
