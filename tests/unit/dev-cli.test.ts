import Path from 'node:path';
import {tmpdir} from 'node:os';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import fs from 'fs-extra';
import {afterEach, beforeEach, expect, test} from 'vitest';

const execFileAsync = promisify(execFile);
const entry = Path.resolve(import.meta.dirname, '../../scripts/dev/index.ts');
let root: string;

beforeEach(async () => {
    root = await fs.mkdtemp(Path.join(tmpdir(), 'zui-dev-cli-test-'));
    await fs.outputJSON(Path.join(root, 'node_modules/vite/package.json'), {name: 'vite', bin: 'cli.cjs'});
    await fs.outputFile(Path.join(root, 'node_modules/vite/cli.cjs'), `
const fs = require('node:fs');
const cache = process.env.ZUI_DEV_CACHE_DIR;
console.log('CACHE:' + (cache ?? 'none'));
console.log('ARGS:' + JSON.stringify(process.argv.slice(2)));
if (cache) fs.writeFileSync(cache + '/cache.txt', 'owned');
process.exit(Number(process.env.QA_EXIT ?? 0));
`);
});
afterEach(async () => {
    await fs.remove(root);
});

test('each invocation owns and removes its cache even when the tool fails', async () => {
    const paths: string[] = [];
    for (const code of [0, 7]) {
        const result = await execFileAsync(process.execPath, ['--import', import.meta.resolve('tsx'), entry, '--port', '5187'], {
            cwd: root, env: {...process.env, QA_EXIT: String(code), BUILD_LIBS: undefined},
        }).catch(error => error as {stdout: string; code: number});
        const cache = /CACHE:(.+)/.exec(result.stdout)![1];
        paths.push(cache);
        expect(cache).toContain('zui-dev-');
        expect(await fs.pathExists(cache)).toBe(false);
        expect(result.stdout).toContain('ARGS:["--port","5187"]');
        if ('code' in result) expect(result.code).toBe(code);
    }
    expect(new Set(paths).size).toBe(2);
});

test('help reaches the native CLI without a cache or library discovery', async () => {
    const {stdout} = await execFileAsync(process.execPath, ['--import', import.meta.resolve('tsx'), entry, '--help', '--extension', 'missing'], {
        cwd: root, env: {...process.env, BUILD_LIBS: 'legacy'},
    });
    expect(stdout).toContain('CACHE:none');
    expect(stdout).toContain('ARGS:["--help"]');
    expect(await fs.pathExists(Path.join(root, 'lib'))).toBe(false);
});
