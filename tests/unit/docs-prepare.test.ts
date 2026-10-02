import {execFile} from 'node:child_process';
import {tmpdir} from 'node:os';
import Path from 'node:path';
import {promisify} from 'node:util';
import fs from 'fs-extra';
import {afterEach, beforeEach, expect, test} from 'vitest';
import {version} from '../../package.json';

const execFileAsync = promisify(execFile);
const prepareScript = Path.resolve(import.meta.dirname, '../../scripts/docs/prepare.ts');
const tsx = import.meta.resolve('tsx');
let fixture: string;
let publicDir: string;
const preservedFiles = ['zui/zui.esm.js', 'zui/nested/resource.txt', `zui-${version}.zip`, 'assets/shared.txt', 'sentinel.txt'];

async function prepare(...args: string[]) {
    return execFileAsync(process.execPath, ['--import', tsx, prepareScript, ...args], {
        cwd: fixture,
        env: {...process.env, CI: '1'},
        maxBuffer: 2 * 1024 * 1024,
    });
}

async function snapshot() {
    const files = (await fs.readdir(publicDir, {recursive: true})).map(String).sort();
    const contents: Record<string, string> = {};
    for (const file of files) {
        const path = Path.join(publicDir, file);
        if ((await fs.stat(path)).isFile()) {
            contents[file] = (await fs.readFile(path)).toString('base64');
        }
    }
    return contents;
}

beforeEach(async () => {
    fixture = await fs.mkdtemp(Path.join(tmpdir(), 'zui-docs-prepare-'));
    publicDir = Path.join(fixture, 'docs/_/public');
    await fs.outputJSON(Path.join(fixture, 'package.json'), {private: true, type: 'module', version: '1.2.3'});
    await fs.outputJSON(Path.join(fixture, 'lib/fixture/package.json'), {
        name: '@zui/fixture', version: '1.0.0', main: 'src/main.ts', zui: {type: 'js-lib'},
    });
    await fs.outputFile(Path.join(fixture, 'lib/fixture/src/main.ts'), 'export const fixture = true;');
    await fs.outputFile(Path.join(fixture, 'favicon.svg'), '<svg>new favicon</svg>');
    for (const file of [...preservedFiles, 'favicon.svg', 'zui-libs.json', 'zui-libs.js']) {
        await fs.outputFile(Path.join(publicDir, file), `previous ${file}`);
    }
});

afterEach(async () => {
    await fs.remove(fixture);
});

test('docs --build=no retains distributions, ZIP and unrelated public assets', async () => {
    const before = await snapshot();
    await prepare('--build=no', '--lib', 'fixture');
    const after = await snapshot();
    for (const file of preservedFiles) {
        expect(after[file], file).toBe(before[file]);
    }
    expect(await fs.readFile(Path.join(publicDir, 'favicon.svg'), 'utf8')).toBe('<svg>new favicon</svg>');
    const libs = await fs.readJSON(Path.join(publicDir, 'zui-libs.json'));
    expect(libs.map((lib: {name: string}) => lib.name)).toEqual(['@zui/fixture']);
    expect(await fs.readFile(Path.join(publicDir, 'zui-libs.js'), 'utf8')).toContain('export default');
    expect(await fs.pathExists(Path.join(fixture, 'build'))).toBe(false);
});

test('docs preparation preserves all old public files when prebuild fails', async () => {
    const packagePath = Path.join(fixture, 'lib/fixture/package.json');
    const pkg = await fs.readJSON(packagePath);
    pkg.zui.prebuild = 'node ./fail.cjs';
    await fs.writeJSON(packagePath, pkg);
    await fs.writeFile(Path.join(fixture, 'lib/fixture/fail.cjs'), 'require("node:fs").writeFileSync("prebuild-proof.txt", "attempted"); process.exit(1);');
    await fs.outputFile(Path.join(fixture, 'build/sentinel.txt'), 'another build owns this');
    const before = await snapshot();
    await expect(prepare('--lib', 'fixture')).rejects.toMatchObject({code: 1});
    expect(await fs.readFile(Path.join(fixture, 'lib/fixture/prebuild-proof.txt'), 'utf8')).toBe('attempted');
    expect(await snapshot()).toEqual(before);
    expect(await fs.readdir(Path.join(fixture, 'build'))).toEqual(['sentinel.txt']);
});
