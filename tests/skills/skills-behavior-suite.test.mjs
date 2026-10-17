import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {URL, fileURLToPath} from 'node:url';
import test from 'node:test';
import {validateFinal} from '../../scripts/tests/skills-behavior.mjs';
import {ROUTING_GROUPS} from './behavior/routing.mjs';
import {listCases, prepareCase, gradeCase} from './behavior/suite.mjs';

const REPO = fileURLToPath(new URL('../..', import.meta.url));
const DOC = 'lib/example/docs/lib/components/index.md';
const SOURCE = 'lib/math/src/main.ts';
const TEST = 'tests/math.test.mjs';
const result = (primary, summary = '已完成。', findings = []) => ({primary, summary, findings, commitMessage: primary === 'zui-commit' ? 'docs: 修正文档用词' : ''});

async function fixture(t, id, repoRoot = REPO) {
    const workspace = fs.mkdtempSync(path.join(os.tmpdir(), 'zui-behavior-test-'));
    t.after(() => fs.rmSync(workspace, {recursive: true, force: true}));
    const prepared = await prepareCase(repoRoot, id, workspace);
    return {workspace, ...prepared, grade: (final, events = [], includeSkillRead = true) => {
        const skill = final?.primary;
        const file = path.join(workspace, '.agents/skills', skill || '', 'SKILL.md');
        const reads = includeSkillRead && fs.existsSync(file) ? [{item: {type: 'command_execution', command: `cat ${file}`, exit_code: 0, aggregated_output: fs.readFileSync(file, 'utf8')}}] : [];
        return gradeCase(repoRoot, id, {workspace, before: prepared.before, final, events: [...reads, ...events]});
    }};
}

function correct(workspace, file = DOC) {
    const target = path.join(workspace, file);
    fs.writeFileSync(target, fs.readFileSync(target, 'utf8').replace('支恃', '支持'));
}

test('routing catalog is live and expected answers never enter model prompt', async (t) => {
    const cases = await listCases(REPO);
    assert.equal(cases.filter(({kind}) => kind === 'execution').length, 6);
    for (const group of ROUTING_GROUPS) {
        const {prompt, schema, grade} = await fixture(t, group.id);
        const scenarios = JSON.parse(prompt.split('\n场景：')[1]);
        assert.deepEqual(scenarios, group.scenarios.map(({id, context, request}) => ({id, context, request})));
        const catalog = JSON.parse(prompt.split('\n候选：')[1].split('\n场景：')[0]);
        assert.equal(catalog.length, 24);
        assert.deepEqual(new Set(ROUTING_GROUPS.flatMap(entry => entry.scenarios.map(scenario => scenario.primary)).filter(name => name !== 'none')), new Set(catalog.map(entry => entry.name)));
        assert.ok(catalog.every(entry => Object.keys(entry).join(',') === 'name,description'));
        assert.equal(schema.additionalProperties, false);
        assert.equal((await grade({decisions: group.scenarios.map(({id, primary, mode}) => ({id, primary, mode}))})).passed, true);
    }
});

test('routing rejects missing, duplicate, extra, wrong and malformed decisions', async (t) => {
    const group = ROUTING_GROUPS[0];
    const {grade} = await fixture(t, group.id);
    const valid = group.scenarios.map(({id, primary, mode}) => ({id, primary, mode}));
    for (const decisions of [valid.slice(1), [...valid, valid[0]], [...valid, {...valid[0], id: 'extra'}], valid.map((entry, i) => i ? entry : {...entry, primary: 'none'}), [null]]) assert.equal((await grade({decisions})).passed, false);
    assert.equal((await grade({decisions: valid, leaked: true})).passed, false);
});

test('unsupported multiline metadata fails loudly instead of sending a YAML marker', async (t) => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'zui-behavior-catalog-'));
    t.after(() => fs.rmSync(root, {recursive: true, force: true}));
    for (const directory of ['.agents/skills/example', 'skills', 'skills-exts', 'tests/skills/behavior', 'workspace']) fs.mkdirSync(path.join(root, directory), {recursive: true});
    fs.copyFileSync(path.join(REPO, 'tests/skills/behavior/routing.mjs'), path.join(root, 'tests/skills/behavior/routing.mjs'));
    fs.writeFileSync(path.join(root, '.agents/skills/example/SKILL.md'), '---\nname: example\ndescription: >\n  A multiline description.\n---\n');
    await assert.rejects(prepareCase(root, ROUTING_GROUPS[0].id, path.join(root, 'workspace')), /Unsupported skill metadata/u);
});

test('save requires an actual exact correction and rejects unrelated writes', async (t) => {
    const {workspace, grade} = await fixture(t, 'save-no-commit');
    const final = result('zui-doc');
    assert.equal((await grade(final)).passed, false);
    correct(workspace);
    assert.equal((await grade(final, [], false)).passed, false);
    assert.equal((await grade(final)).passed, true);
    fs.appendFileSync(path.join(workspace, 'notes/local.txt'), '覆盖用户内容');
    assert.equal((await grade(final)).passed, false);
});

test('missing target and modified skill instructions are not successful edits', async (t) => {
    const {workspace, grade} = await fixture(t, 'save-no-commit');
    correct(workspace);
    fs.appendFileSync(path.join(workspace, '.agents/skills/zui-doc/SKILL.md'), '\nChanged.\n');
    assert.equal((await grade(result('zui-doc'))).passed, false);
    fs.unlinkSync(path.join(workspace, DOC));
    assert.equal((await grade(result('zui-doc'))).passed, false);
});

test('rescoring uses the original skill input even after source skills change', async (t) => {
    const repoRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'zui-behavior-source-'));
    t.after(() => fs.rmSync(repoRoot, {recursive: true, force: true}));
    for (const directory of ['.agents/skills', 'tests/skills/behavior']) fs.cpSync(path.join(REPO, directory), path.join(repoRoot, directory), {recursive: true});
    const {workspace, grade} = await fixture(t, 'save-no-commit', repoRoot);
    correct(workspace);
    const final = result('zui-doc');
    assert.equal((await grade(final)).passed, true);
    fs.writeFileSync(path.join(repoRoot, '.agents/skills/zui-doc/SKILL.md'), 'New source instructions after the recorded run.\n');
    assert.equal((await grade(final)).passed, true);
    fs.writeFileSync(path.join(workspace, '.agents/skills/zui-doc/SKILL.md'), 'A forged skill read must not become the expected input.\n');
    const forged = await grade(final);
    assert.equal(forged.checks.find(({name}) => name === 'primary-skill-read').passed, false);
    assert.equal(forged.passed, false);
});

test('extension typo edit succeeds without host discovery or generated files', async (t) => {
    const {workspace, grade} = await fixture(t, 'extension-doc-no-host');
    assert.equal(fs.existsSync(path.join(workspace, 'exts')), false);
    correct(workspace, 'docs/lib/components/index.md');
    assert.equal((await grade(result('zuix-doc'))).passed, true);
});

test('commit-message-only preserves a partially staged file and rejects Git attempts', async (t) => {
    const {workspace, before, grade} = await fixture(t, 'commit-message-only');
    assert.notEqual(execFileSync('git', ['show', `:${DOC}`], {cwd: workspace, encoding: 'utf8'}), fs.readFileSync(path.join(workspace, DOC), 'utf8'));
    assert.ok(before.files['notes/local.txt']);
    const final = result('zui-commit', 'docs: 修正文档用词');
    assert.equal((await grade(final, [{item: {type: 'command_execution', command: 'rg \'git add\' .agents/skills/zui-commit/SKILL.md'}}])).passed, true);
    assert.equal((await grade({...final, commitMessage: '已生成。'})).passed, false);
    for (const command of ['git add .', 'git -C . commit -m test', '/bin/zsh -lc \'git --no-optional-locks push\'', 'git status && git add file', 'command git add foo', 'exec git restore file', 'git reset --hard', 'git clean -fd']) {
        const report = await grade(final, [{item: {type: 'command_execution', command, exit_code: 1}}]);
        assert.equal(report.checks.find(({name}) => name === 'no-direct-git-write-attempt').passed, false, command);
    }
    execFileSync('git', ['add', DOC], {cwd: workspace});
    assert.equal((await grade(final)).passed, false);
});

test('readonly review requires the known finding and unchanged tracked/untracked files', async (t) => {
    const {workspace, grade} = await fixture(t, 'review-readonly');
    assert.equal((await grade(result('zui-review'))).passed, false);
    const finding = {file: SOURCE, line: 2, description: '百分比除数反了。', inputValue: 20, inputTotal: 100, actual: 500, expected: 20};
    const final = result('zui-review', '百分比除数反了。', [finding]);
    assert.equal((await grade({...final, findings: [{...finding, description: '命名不佳。', actual: 20}]})).passed, false);
    assert.equal((await grade(final)).passed, true);
    fs.unlinkSync(path.join(workspace, 'notes/local.txt'));
    assert.equal((await grade(final)).passed, false);
});

test('fixture test script explicitly enables TypeScript stripping and runs its tests', async (t) => {
    const {workspace} = await fixture(t, 'helper-fix');
    const {scripts} = JSON.parse(fs.readFileSync(path.join(workspace, 'package.json'), 'utf8'));
    assert.equal(scripts.test, 'node --experimental-strip-types --test tests/*.test.mjs');
    const env = {...process.env};
    delete env.NODE_TEST_CONTEXT;
    const output = execFileSync('/bin/sh', ['-c', scripts.test], {cwd: workspace, env, encoding: 'utf8', timeout: 10000});
    assert.match(output, /ordinary counts/u);
});

test('helper must pass independent boundaries and author a test that catches the original bug', async (t) => {
    const {workspace, grade} = await fixture(t, 'helper-fix');
    const final = result('zui-helper');
    assert.equal((await grade(final)).passed, false);
    fs.writeFileSync(path.join(workspace, SOURCE), 'export function clampCount(value: number) {\n    return Math.max(0, Math.min(100, Math.trunc(value)));\n}\n');
    fs.appendFileSync(path.join(workspace, TEST), '\n// A comment is not a regression test.\n');
    assert.equal((await grade(final)).passed, false);
    fs.appendFileSync(path.join(workspace, TEST), 'test(\'negative counts clamp to zero\', () => { assert.equal(clampCount(-5), 0); });\n');
    const report = await grade(final);
    assert.equal(report.passed, true, JSON.stringify(report));
});

test('ESM-only wrapping requires explaining the missing format without scaffolding', async (t) => {
    const {workspace, schema, grade} = await fixture(t, 'wrap-esm-only');
    assert.equal((await grade(result('zui-wrap-lib'))).passed, false);
    assert.equal((await grade(result('zui-wrap-lib', '已经将提供的 ESM 转成 UMD，并成功创建 lib/tiny 按需加载 helper。'))).passed, false);
    const summary = {outcome: 'blocked', availableFormat: 'esm', requiredFormat: 'umd-or-iife'};
    const final = result('zui-wrap-lib', summary);
    assert.deepEqual(validateFinal(schema, final), final);
    assert.throws(() => validateFinal(schema, result('zui-wrap-lib', '已经完成 UMD 封装。')), /expected object/u);
    for (const invalid of [{...summary, outcome: 'completed'}, {...summary, availableFormat: 'umd'}, {...summary, requiredFormat: 'none'}]) {
        assert.equal((await grade(result('zui-wrap-lib', invalid))).passed, false);
    }
    assert.equal((await grade(final)).passed, true);
    fs.mkdirSync(path.join(workspace, 'lib/tiny'));
    assert.equal((await grade(final)).passed, false);
    fs.writeFileSync(path.join(workspace, 'lib/tiny/package.json'), '{}');
    assert.equal((await grade(final)).passed, false);
});

test('fixture creation refuses a nonempty workspace', async (t) => {
    const {workspace} = await fixture(t, 'save-no-commit');
    await assert.rejects(prepareCase(REPO, 'helper-fix', workspace), /must be empty/u);
});
