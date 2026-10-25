import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {URL, fileURLToPath} from 'node:url';
import test from 'node:test';

const skillsRoot = fileURLToPath(new URL('../../skills/', import.meta.url));

for (const skill of ['zui', 'zui-build']) {
    test(`${skill} ships independently readable AI references outside the source repository`, (t) => {
        const root = fs.mkdtempSync(path.join(os.tmpdir(), 'zui-portable-ai-'));
        t.after(() => fs.rmSync(root, {recursive: true, force: true}));
        const installed = path.join(root, 'installed-skill');
        fs.cpSync(path.join(skillsRoot, skill), installed, {recursive: true});
        const references = path.join(installed, 'references/ai');
        const manifest = JSON.parse(fs.readFileSync(path.join(references, 'manifest.json'), 'utf8'));
        assert.equal(fs.existsSync(path.join(root, 'node_modules')), false);
        assert.equal(fs.existsSync(path.join(root, 'lib')), false);

        const read = (...args) => spawnSync(process.execPath, [path.join(references, 'read.mjs'), ...args], {cwd: root, encoding: 'utf8'});
        const index = read();
        assert.equal(index.status, 0, index.stderr);
        assert.match(index.stdout, /lib\/menu\/ai.md#vanilla-menu/);
        assert.match(index.stdout, skill === 'zui-build' ? /内置运行版本/ : /运行版本未知/);

        const entry = read('--lib', 'menu', '--section', 'vanilla', '--entry', 'vanilla-menu');
        assert.equal(entry.status, 0, entry.stderr);
        assert.match(entry.stdout, /new Menu\(selector/);
        assert.match(entry.stdout, /\.\.\/core\/ai.md#vanilla-component/);
        assert.doesNotMatch(entry.stdout, /### vanilla-search-menu/);
        const shared = read('--lib', 'core', '--section', 'vanilla', '--entry', 'vanilla-component');
        assert.equal(shared.status, 0, shared.stderr);
        assert.match(shared.stdout, /### vanilla-component/);

        const matching = read('--lib', 'menu', '--section', 'setup', '--runtime-version', manifest.source.version);
        assert.equal(matching.status, 0, matching.stderr);
        assert.match(matching.stdout, /版本号相同，构建内容和 API 行为仍未验证/);
        const mismatch = read('--lib', 'menu', '--section', 'constraints', '--runtime-version', '0.0.0');
        assert.equal(mismatch.status, 0, mismatch.stderr);
        assert.match(mismatch.stdout, /与文档版本不同/);

        if (skill === 'zui-build') {
            const output = path.join(root, 'page');
            const created = spawnSync(process.execPath, [path.join(installed, 'scripts/create-zui-page.mjs'), '--output', output], {cwd: root, encoding: 'utf8'});
            assert.equal(created.status, 0, created.stderr);
            const validated = spawnSync(process.execPath, [path.join(installed, 'scripts/validate-zui-page.mjs'), '--root', output], {cwd: root, encoding: 'utf8'});
            assert.equal(validated.status, 0, validated.stderr);
        }
    });
}
