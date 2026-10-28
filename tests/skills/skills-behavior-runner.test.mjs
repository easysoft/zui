import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import {codexArgs, parseArgs, runCli, validateFinal} from '../../scripts/tests/skills-behavior.mjs';
import {traceMetrics} from '../../scripts/tests/skill-metrics.mjs';

const schema = {type: 'object', properties: {selected: {type: 'array', items: {type: 'string'}}}, required: ['selected'], additionalProperties: false};

function fixture(t) {
    const root = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'zui-behavior-harness-')));
    const repoRoot = path.join(root, 'repo');
    t.after(() => fs.rmSync(root, {recursive: true, force: true}));
    fs.mkdirSync(path.join(repoRoot, 'tests/skills/behavior'), {recursive: true});
    for (const name of ['suite.mjs', 'routing.mjs', 'browser.mjs']) fs.writeFileSync(path.join(repoRoot, 'tests/skills/behavior', name), '// Harness fixture; never used for model behavior results.\n');
    fs.mkdirSync(path.join(repoRoot, 'scripts/tests'), {recursive: true});
    fs.writeFileSync(path.join(repoRoot, 'scripts/tests/skills-behavior.mjs'), '// Harness runner source fixture.\n');
    for (const name of ['skill-metadata.mjs', 'skill-metrics.mjs']) fs.writeFileSync(path.join(repoRoot, 'scripts/tests', name), '// Harness input fixture.\n');
    const calls = [];
    const suite = {
        listCases: async () => [{id: 'routing-example', kind: 'routing'}, {id: 'execution-example', kind: 'execution'}],
        prepareCase: async (_repoRoot, id, workspace) => {
            fs.writeFileSync(path.join(workspace, 'input.txt'), id);
            return {prompt: 'Read input.txt. This is harness transport test input only.', schema, before: {content: id}};
        },
        gradeCase: async (_repoRoot, id, input) => {
            calls.push({id, input});
            return {passed: true, checks: [{name: 'harness transport only; not a model behavior evaluation', passed: true}]};
        },
    };
    const invoke = async (args, options = {}) => {
        const result = await runCli(args, {repoRoot, suite, log: () => {}, ...options});
        if (result.manifest) t.after(() => fs.rmSync(result.manifest.runDir, {recursive: true, force: true}));
        return result;
    };
    return {root, repoRoot, calls, suite, invoke};
}

function fakeCodex(root, mode = 'success') {
    const script = path.join(root, `fake codex ; literal-${mode}`);
    fs.writeFileSync(script, `#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const args = process.argv.slice(2);
if (args[0] === '--version') { console.log('fake-codex harness test'); process.exit(0); }
const mode = ${JSON.stringify(mode)};
fs.writeFileSync(path.join(process.cwd(), 'argv.json'), JSON.stringify(args));
let input = '';
process.stdin.on('data', chunk => { input += chunk; });
process.stdin.on('end', () => {
  fs.writeFileSync(path.join(process.cwd(), 'stdin.txt'), input);
  if (mode === 'timeout') { setInterval(() => {}, 1000); return; }
  const output = args[args.indexOf('--output-last-message') + 1];
  const final = mode === 'bad-schema' ? {selected: 42} : {selected: ['harness-only']};
  if (mode !== 'missing-final') fs.writeFileSync(output, JSON.stringify(final));
  console.log(JSON.stringify({type: 'thread.started', thread_id: 'harness-fixture'}));
  console.log(JSON.stringify({type: 'turn.started'}));
  if (mode !== 'missing-message') console.log(JSON.stringify({type: 'item.completed', item: {id: 'item_0', type: 'agent_message', text: JSON.stringify(mode === 'mismatched-final' ? {selected: ['mismatch']} : final)}}));
  console.log(mode === 'bad-jsonl' ? 'invalid json' : JSON.stringify({type: mode === 'incomplete' ? 'turn.started' : 'turn.completed', usage: {input_tokens: 1}}));
  if (mode === 'failed-event') console.log(JSON.stringify({type: 'turn.failed', error: {message: 'fixture failure'}}));
  console.error('harness stderr retained');
  process.exit(mode === 'failed-exit' ? 7 : 0);
});
`, {mode: 0o755});
    return script;
}

test('argument selection rejects ambiguous modes and unsafe case identifiers', async (t) => {
    const {invoke} = fixture(t);
    assert.deepEqual(parseArgs(['--list', '--case', 'routing-example', '--case', 'execution-example']), {mode: 'list', cases: ['routing-example', 'execution-example']});
    assert.throws(() => parseArgs(['--run', '--prepare']), /exactly one/);
    assert.throws(() => parseArgs(['--score']), /requires/);
    assert.throws(() => parseArgs(['--list', '--out-dir', 'output']), /only valid/);
    assert.throws(() => parseArgs(['--model', 'another']), /Unknown argument/);
    await assert.rejects(invoke(['--list', '--case', '../outside']), /Unknown case/);
});

test('prepare keeps grading inputs outside the workspace and never overwrites a run', async (t) => {
    const {root, invoke, calls} = fixture(t);
    const runDir = path.join(root, 'prepared');
    const result = await invoke(['--prepare', '--case', 'routing-example', '--out-dir', runDir]);
    assert.equal(result.exitCode, 0);
    assert.equal(result.manifest.status, 'prepared');
    assert.equal(result.manifest.cases.length, 1);
    const [entry] = result.manifest.cases;
    assert.ok(!entry.workspace.includes(entry.id));
    assert.deepEqual(fs.readdirSync(entry.workspace), ['input.txt']);
    assert.deepEqual(JSON.parse(fs.readFileSync(entry.schema, 'utf8')), schema);
    assert.ok(fs.readFileSync(entry.prompt, 'utf8').includes('transport test'));
    assert.equal(calls.length, 0);
    await assert.rejects(invoke(['--prepare', '--out-dir', runDir]), /EEXIST/);
    const score = await invoke(['--score', runDir]);
    assert.equal(score.exitCode, 1);
    assert.equal(score.manifest.status, 'infrastructure_error');
    assert.equal(calls.length, 0);
});

test('CLI argv preserves literal paths, sandbox modes, stdin, schema and raw trace', async (t) => {
    const {root, invoke, calls} = fixture(t);
    const result = await invoke(['--run', '--out-dir', path.join(root, 'run with spaces ; literal')], {codexCommand: fakeCodex(root)});
    assert.equal(result.exitCode, 0);
    assert.equal(result.manifest.codexVersion, 'fake-codex harness test');
    assert.equal(result.manifest.model, 'CLI default (no override)');
    assert.equal(calls.length, 2);
    for (const entry of result.manifest.cases) {
        const args = JSON.parse(fs.readFileSync(path.join(entry.workspace, 'argv.json'), 'utf8'));
        assert.deepEqual(args, codexArgs(entry));
        assert.equal(args[args.indexOf('--sandbox') + 1], entry.kind === 'routing' ? 'read-only' : 'workspace-write');
        assert.ok(args.includes('--ignore-user-config'));
        assert.ok(!args.includes('--model'));
        assert.ok(!args.includes('--dangerously-bypass-approvals-and-sandbox'));
        assert.equal(fs.readFileSync(path.join(entry.workspace, 'stdin.txt'), 'utf8'), fs.readFileSync(entry.prompt, 'utf8'));
        assert.match(fs.readFileSync(entry.stderr, 'utf8'), /harness stderr retained/);
        assert.equal(calls.find(call => call.id === entry.id).input.events.at(-1).type, 'turn.completed');
    }
    const score = await invoke(['--score', result.manifest.runDir]);
    assert.equal(score.exitCode, 0);
    const selectedScore = await invoke(['--score', result.manifest.runDir, '--case', 'routing-example']);
    assert.equal(selectedScore.exitCode, 0);
    assert.equal(selectedScore.manifest.cases.length, 2);
    assert.ok(result.manifest.suiteHashes['scripts/tests/skills-behavior.mjs']);
});

test('only the staged-commit fixture explicitly grants its own Git directory write access', () => {
    const entry = {id: 'commit-staged', kind: 'execution', workspace: '/tmp/fixture/workspace'};
    const args = codexArgs(entry);
    assert.equal(args[args.indexOf('--add-dir') + 1], '/tmp/fixture/workspace/.git');
    assert.equal(args[args.indexOf('--sandbox') + 1], 'workspace-write');
    assert.ok(!codexArgs({...entry, id: 'commit-message-only'}).includes('--add-dir'));
});

test('rescoring refuses changed suite or runner sources and does not certify unscored cases', async (t) => {
    const {repoRoot, invoke} = fixture(t);
    const prepared = await invoke(['--prepare']);
    const result = await invoke(['--score', prepared.manifest.runDir, '--case', 'routing-example']);
    assert.equal(result.exitCode, 1);
    assert.equal(result.manifest.cases.find(entry => entry.id === 'execution-example').status, 'prepared');
    assert.notEqual(result.manifest.status, 'passed');
    fs.appendFileSync(path.join(repoRoot, 'tests/skills/behavior/routing.mjs'), '// Changed grading expectation.\n');
    await assert.rejects(invoke(['--score', prepared.manifest.runDir]), /Scoring source has changed/);
    const fresh = await invoke(['--prepare']);
    fs.appendFileSync(path.join(repoRoot, 'scripts/tests/skills-behavior.mjs'), '// Changed harness grading.\n');
    await assert.rejects(invoke(['--score', fresh.manifest.runDir]), /Scoring source has changed/);
});

test('workspaces stay outside the source repository including symlinked output parents', async (t) => {
    const {root, repoRoot, invoke} = fixture(t);
    await assert.rejects(invoke(['--prepare', '--out-dir', path.join(repoRoot, 'output')]), /outside the repository/);
    const link = path.join(root, 'repository-link');
    fs.symlinkSync(repoRoot, link, 'dir');
    await assert.rejects(invoke(['--prepare', '--out-dir', path.join(link, 'output')]), /outside the repository/);
    const result = await invoke(['--prepare', '--case', 'routing-example']);
    assert.ok(path.basename(result.manifest.runDir).startsWith('zui-skill-eval-'));
    assert.ok(path.relative(repoRoot, result.manifest.runDir).startsWith(`..${path.sep}`));
});

test('malformed or incomplete CLI output fails closed before the grader runs', async (t) => {
    for (const mode of ['failed-exit', 'failed-event', 'bad-jsonl', 'incomplete', 'missing-final', 'bad-schema', 'missing-message', 'mismatched-final']) {
        await t.test(mode, async (subtest) => {
            const {root, invoke, calls} = fixture(subtest);
            const result = await invoke(['--run', '--case', 'routing-example'], {codexCommand: fakeCodex(root, mode)});
            assert.equal(result.exitCode, 1);
            assert.equal(result.manifest.status, 'infrastructure_error');
            assert.equal(calls.length, 0);
            assert.equal(JSON.parse(fs.readFileSync(result.manifest.cases[0].result, 'utf8')).passed, false);
        });
    }
});

test('missing CLI and per-case timeout are infrastructure errors', async (t) => {
    const {root, invoke, calls} = fixture(t);
    const missing = await invoke(['--run'], {codexCommand: path.join(root, 'not-installed')});
    assert.equal(missing.exitCode, 1);
    assert.equal(missing.manifest.status, 'infrastructure_error');
    const timeout = await invoke(['--run', '--case', 'routing-example'], {codexCommand: fakeCodex(root, 'timeout'), timeoutMs: 250});
    assert.equal(timeout.exitCode, 1);
    assert.equal(timeout.manifest.status, 'infrastructure_error');
    assert.equal(JSON.parse(fs.readFileSync(timeout.manifest.cases[0].execution, 'utf8')).timedOut, true);
    assert.equal(calls.length, 0);
});

test('the harness never upgrades a failing observable check into success', async (t) => {
    const {root, invoke, suite} = fixture(t);
    suite.gradeCase = async () => ({passed: true, checks: [{name: 'actual effect', passed: false}]});
    const result = await invoke(['--run', '--case', 'execution-example'], {codexCommand: fakeCodex(root)});
    assert.equal(result.exitCode, 1);
    assert.equal(result.manifest.status, 'failed');
});

test('final response schema rejects missing, extra, mistyped and unsupported fields', () => {
    assert.deepEqual(validateFinal(schema, {selected: ['zui-doc']}), {selected: ['zui-doc']});
    assert.throws(() => validateFinal(schema, {}), /missing selected/);
    assert.throws(() => validateFinal(schema, {selected: [], passed: true}), /unexpected passed/);
    assert.throws(() => validateFinal(schema, {selected: [true]}), /expected string/);
    assert.throws(() => validateFinal({type: 'string', format: 'date'}, '2026-10-17'), /unsupported schema keyword/);
});

test('trace metrics distinguish missing metadata and count only observed completed operations', () => {
    const read = {type: 'item.completed', item: {type: 'command_execution', command: 'cat .agents/skills/example/SKILL.md', exit_code: 0, aggregated_output: 'Example reference'}};
    const metrics = traceMetrics([read, read, {type: 'turn.completed', usage: {input_tokens: 100, cached_input_tokens: 40, output_tokens: 20}}], {startedAt: '2026-01-01T00:00:00Z', completedAt: '2026-01-01T00:00:02Z'}, {skillDocuments: {'.agents/skills/example/SKILL.md': 'Example reference'}});
    assert.equal(metrics.models, null);
    assert.equal(metrics.inputTokens, 100);
    assert.equal(metrics.cachedInputTokens, 40);
    assert.equal(metrics.durationMs, 2000);
    assert.equal(metrics.toolCalls, 2);
    assert.equal(metrics.repeatedSkillReads, 1);
    assert.equal(traceMetrics([], {}).inputTokens, null);
});

test('run comparison uses matching task inputs and scoring sources', async (t) => {
    const {root, invoke} = fixture(t);
    const options = {codexCommand: fakeCodex(root)};
    const a = await invoke(['--run', '--case', 'execution-example'], options);
    const b = await invoke(['--run', '--case', 'execution-example', '--variant', 'none'], options);
    const {comparison} = await invoke(['--compare', a.manifest.runDir, b.manifest.runDir]);
    assert.equal(comparison.rows[0].after, 'passed');
    assert.equal(comparison.rows[0].delta.inputTokens, 0);
    assert.equal(comparison.runs[1].variant, 'none');
    fs.writeFileSync(b.manifest.cases[0].before, JSON.stringify({content: 'different task'}));
    await assert.rejects(invoke(['--compare', a.manifest.runDir, b.manifest.runDir]), /different task inputs/);
    assert.throws(() => parseArgs(['--run', '--variant', 'unknown']), /skills or none/);
});
