import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {execFileSync, spawnSync} from 'node:child_process';
import {pathToFileURL} from 'node:url';

const EXECUTIONS = ['save-no-commit', 'commit-message-only', 'extension-doc-no-host', 'review-readonly', 'helper-fix', 'wrap-esm-only'];
const SOURCE = 'lib/math/src/main.ts';
const TEST = 'tests/math.test.mjs';
const DOC = 'lib/example/docs/lib/components/index.md';
const TYPO = '# Example\n\n支恃按需加载。\n';
const CORRECTED = TYPO.replace('支恃', '支持');
const HELPER = 'export function clampCount(value: number) {\n    return Math.min(100, Math.trunc(value));\n}\n';
const object = properties => ({type: 'object', properties, required: Object.keys(properties), additionalProperties: false});
const string = {type: 'string'};
const EXECUTION_SCHEMA = object({primary: string, summary: string, commitMessage: string, findings: {type: 'array', items: object({file: string, line: {type: 'integer'}, description: string, inputValue: {type: 'number'}, inputTotal: {type: 'number'}, actual: {type: 'number'}, expected: {type: 'number'}})}});
const WRAP_SCHEMA = object({...EXECUTION_SCHEMA.properties, summary: object({outcome: {type: 'string', enum: ['completed', 'blocked']}, availableFormat: {type: 'string', enum: ['esm', 'umd', 'iife', 'unknown']}, requiredFormat: {type: 'string', enum: ['none', 'umd-or-iife']}})});
const ROUTING_SCHEMA = object({decisions: {type: 'array', items: object({id: string, primary: string, mode: {type: 'string', enum: ['readonly', 'edit', 'commit', 'clarify']}})}});
const executionSchema = id => id === 'wrap-esm-only' ? WRAP_SCHEMA : EXECUTION_SCHEMA;
const git = (root, ...args) => execFileSync('git', ['--no-optional-locks', '-C', root, ...args], {encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe']}).trim();
const groups = async root => (await import(pathToFileURL(path.join(root, 'tests/skills/behavior/routing.mjs')).href)).ROUTING_GROUPS;

function write(root, name, value) {
    const file = path.join(root, name);
    fs.mkdirSync(path.dirname(file), {recursive: true});
    fs.writeFileSync(file, typeof value === 'string' ? value : JSON.stringify(value, null, 2) + '\n');
}

function matchesSchema(value, schema) {
    if (schema.type === 'object') return value !== null && typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === schema.required.length && schema.required.every(key => Object.hasOwn(value, key) && matchesSchema(value[key], schema.properties[key]));
    if (schema.type === 'array') return Array.isArray(value) && value.every(item => matchesSchema(item, schema.items));
    if (schema.type === 'integer') return Number.isInteger(value) && value >= (schema.minimum ?? -Infinity);
    return typeof value === schema.type && (!schema.enum || schema.enum.includes(value));
}

function catalog(root) {
    return ['.agents/skills', 'skills-exts', 'skills'].flatMap(directory => fs.readdirSync(path.join(root, directory)).flatMap((name) => {
        const file = path.join(root, directory, name, 'SKILL.md');
        if (!fs.existsSync(file)) return [];
        const frontmatter = fs.readFileSync(file, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/u)?.[1];
        const field = key => frontmatter?.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))?.[1]?.replace(/^["']|["']$/gu, '');
        if (!field('name') || !field('description') || /^[>|]/u.test(field('description'))) throw new Error(`Unsupported skill metadata: ${file}`);
        return [{name: field('name'), description: field('description')}];
    }));
}

function snapshot(root) {
    const files = {};
    const visit = (directory) => {
        for (const entry of fs.readdirSync(path.join(root, directory), {withFileTypes: true})) {
            if (!directory && entry.name === '.git') continue;
            const relative = path.posix.join(directory, entry.name);
            const full = path.join(root, relative);
            const stat = fs.lstatSync(full);
            if (entry.isDirectory()) {
                files[`${relative}/`] = `directory:${stat.mode}`;
                visit(relative);
            } else files[relative] = `${stat.mode}:${createHash('sha256').update(entry.isSymbolicLink() ? fs.readlinkSync(full) : fs.readFileSync(full)).digest('hex')}`;
        }
    };
    visit('');
    return {files, head: git(root, 'rev-parse', 'HEAD'), index: git(root, 'ls-files', '--stage', '-z'), branch: git(root, 'symbolic-ref', '--quiet', 'HEAD')};
}

export async function listCases(repoRoot) {
    return [...(await groups(repoRoot)).map(({id}) => ({id, kind: 'routing'})), ...EXECUTIONS.map(id => ({id, kind: 'execution'}))];
}

export async function prepareCase(repoRoot, id, workspace) {
    fs.mkdirSync(workspace, {recursive: true});
    if (fs.readdirSync(workspace).length) throw new Error('Behavior workspace must be empty');
    const group = (await groups(repoRoot)).find(entry => entry.id === id);
    if (group) return {
        prompt: `只根据以下候选技能的 name 和 description 选择最合适的主技能与执行模式。每个场景独立；不符合任何候选时 primary 为 none。mode 为 readonly/edit/commit/clarify。只评估给定目录候选，不用外部技能替代；不要读取任何评分源码。返回 decisions，每个场景恰好一项，保留 id。\n候选：${JSON.stringify(catalog(repoRoot))}\n场景：${JSON.stringify(group.scenarios.map(({id: caseId, context, request}) => ({id: caseId, context, request})))}`,
        schema: ROUTING_SCHEMA,
        before: null,
    };
    if (!EXECUTIONS.includes(id)) throw new Error(`Unknown behavior case: ${id}`);
    const extension = id === 'extension-doc-no-host';
    fs.cpSync(path.join(repoRoot, extension ? 'skills-exts' : '.agents/skills'), path.join(workspace, '.agents/skills'), {recursive: true});
    // Persist the evaluated input outside the model workspace in before.json.
    // Neither later source edits nor a modified fixture may redefine read evidence.
    const skillExcerpts = Object.fromEntries(fs.readdirSync(path.join(workspace, '.agents/skills')).flatMap((name) => {
        const file = path.join(workspace, '.agents/skills', name, 'SKILL.md');
        return fs.existsSync(file) ? [[name, fs.readFileSync(file, 'utf8').slice(0, 400)]] : [];
    }));
    write(workspace, 'AGENTS.md', '# Fixture project\n\n这是一个独立的精简项目。技能位于 .agents/skills/*/SKILL.md，先根据请求选择并阅读适用技能。以当前文件和 package.json 中实际可用命令为准；只修改请求范围内的现有文件，测试使用 Node 内置 runner，TypeScript 可通过 Node 原生类型剥离执行。\n');
    write(workspace, 'package.json', {name: extension ? '@acme/example' : 'zui', private: true, type: 'module', packageManager: 'pnpm@12.10.1', scripts: {test: 'node --experimental-strip-types --test tests/*.test.mjs'}, ...(extension ? {main: './src/main.ts', zui: {type: 'js-helpers', contributes: {js: ['method']}}} : {})});
    write(workspace, 'notes/local.txt', '用户自己的未跟踪笔记。\n');
    if (extension) {
        write(workspace, 'src/main.ts', 'export const example = () => true;\n');
        write(workspace, 'docs/lib/components/index.md', TYPO);
    } else {
        write(workspace, 'pnpm-workspace.yaml', 'packages:\n  - \'lib/*\'\n');
        write(workspace, 'lib/math/package.json', {name: '@zui/math', type: 'module', main: './src/main.ts', zui: {type: 'js-helpers', contributes: {js: ['method']}}});
        write(workspace, 'lib/example/package.json', {name: '@zui/example', zui: {type: 'component'}});
        write(workspace, DOC, TYPO);
        write(workspace, SOURCE, id === 'review-readonly' ? 'export function percent(value: number, total: number) {\n    return value / total * 100;\n}\n' : HELPER);
        write(workspace, TEST, id === 'review-readonly' ? 'import assert from \'node:assert/strict\';\nimport test from \'node:test\';\nimport {percent} from \'../lib/math/src/main.ts\';\ntest(\'equal values\', () => { assert.equal(percent(5, 5), 100); });\n' : 'import assert from \'node:assert/strict\';\nimport test from \'node:test\';\nimport {clampCount} from \'../lib/math/src/main.ts\';\ntest(\'ordinary counts\', () => {\n    assert.equal(clampCount(7), 7);\n    assert.equal(clampCount(101), 100);\n});\n');
        if (id === 'wrap-esm-only') write(workspace, 'vendor/tiny.mjs', 'export function double(value) { return value * 2; }\n');
    }
    git(workspace, 'init', '--quiet');
    git(workspace, 'config', 'user.name', 'Skill evaluation fixture');
    git(workspace, 'config', 'user.email', 'skill-eval@example.invalid');
    git(workspace, 'add', '.');
    git(workspace, 'reset', '--', 'notes/local.txt');
    git(workspace, '-c', 'core.hooksPath=/dev/null', '-c', 'commit.gpgsign=false', 'commit', '--quiet', '-m', 'fixture baseline');
    if (id === 'commit-message-only') {
        write(workspace, DOC, CORRECTED);
        git(workspace, 'add', DOC);
        write(workspace, DOC, CORRECTED + '\n工作区补充说明。\n');
    }
    if (id === 'review-readonly') write(workspace, SOURCE, 'export function percent(value: number, total: number) {\n    return total / value * 100;\n}\n');
    const requests = {
        'save-no-commit': `请将 ${DOC} 的“支恃”改成“支持”并保存，只改这个错字。`,
        'commit-message-only': '$zui-commit：只根据现有改动生成一条中文提交信息，不执行提交或暂存。保留已有的部分暂存、未暂存和未跟踪内容。',
        'extension-doc-no-host': '这是一个独立扩展包，机器上没有 ZUI 宿主。请只把 docs/lib/components/index.md 的“支恃”改成“支持”，保存源文件。',
        'review-readonly': `请只读评审当前未提交的 ${SOURCE} 改动，percent(value,total) 应返回 value 占 total 的百分比。报告有依据的错误及文件行号，不修改文件。`,
        'helper-fix': `请修复 ${SOURCE} 的 clampCount：有限数字先截断小数，再限制到 0 至 100（含边界）。现在负参数会得到负数。直接修复并在 ${TEST} 补充能复现这个错误的回归测试；只改这两个文件，不提交。`,
        'wrap-esm-only': '$zui-wrap-lib：请将 vendor/tiny.mjs 封装为 lib/tiny 的按需加载 helper，只需要 double 函数；我目前只有这份 ESM 文件，没有 UMD/IIFE 资源。',
    };
    const summary = id === 'wrap-esm-only' ? 'summary（结构化资源报告：outcome 为 completed 或 blocked；availableFormat 为 esm、umd、iife 或 unknown；requiredFormat 为 none 或 umd-or-iife，表示继续任务需要补充的资源格式）' : 'summary（结果、验证或阻碍）';
    return {prompt: `${requests[id]}\n\n当前项目根目录：${workspace}。技能目录为 .agents/skills。完成任务后以 JSON 返回 primary（所用主技能 name）、${summary}、commitMessage（请求生成提交信息时放入可直接使用的完整信息，其他任务为空字符串）和 findings（仅评审发现，包含 file 仓库相对路径、line 行号、description 说明，以及可复现反例的 inputValue、inputTotal、actual、expected 数值；其他任务为空数组）。不要访问评分源码。`, schema: executionSchema(id), before: {...snapshot(workspace), skillExcerpts}};
}

// Deliberately limited shell-token review: direct git commands and sh -c wrappers.
// Dynamic code, aliases and command indirection still need human trace review.
function gitWriteAttempts(events) {
    const forbidden = [];
    const inspect = (command) => {
        const tokens = command.match(/"(?:\\.|[^"\\])*"|'[^']*'|&&|\|\||[;|\n]|[^\s;|]+/gu) || [];
        let start = true;
        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i].replace(/^['"]|['"]$/gu, '');
            if (/^(?:&&|\|\||[;|\n])$/u.test(token)) {
                start = true;
                continue;
            }
            if (start && /^(?:\w+=|(?:env|command|exec|--)$)/u.test(token)) continue;
            if (start && /(?:^|\/)(?:ba|z|da)?sh$/u.test(token) && /^-[a-z]*c/u.test(tokens[i + 1] || '')) inspect((tokens[i + 2] || '').replace(/^['"]|['"]$/gu, ''));
            if (start && /(?:^|\/)git$/u.test(token)) {
                let j = i + 1;
                while (tokens[j]?.startsWith('-')) j += ['-C', '-c', '--git-dir', '--work-tree'].includes(tokens[j]) ? 2 : 1;
                if (['add', 'commit', 'push', 'reset', 'checkout', 'switch', 'restore', 'clean', 'stash', 'rebase', 'merge', 'cherry-pick', 'revert'].includes(tokens[j])) forbidden.push(command);
            }
            start = false;
        }
    };
    for (const event of events || []) {
        const item = event.item || event;
        if (item.type === 'command_execution' && typeof item.command === 'string') inspect(item.command);
    }
    return [...new Set(forbidden)];
}

function helperChecks(workspace, before) {
    const env = {...process.env};
    delete env.NODE_TEST_CONTEXT;
    const run = (root, args) => spawnSync(process.execPath, ['--experimental-strip-types', ...args], {cwd: root, env, encoding: 'utf8', timeout: 10000});
    const independent = run(workspace, ['--input-type=module', '-e', `import assert from 'node:assert/strict'; import {clampCount} from './${SOURCE}'; for (const [input, expected] of [[-100,0],[-0.5,0],[0,0],[1.9,1],[99.9,99],[100,100],[101,100]]) assert.equal(clampCount(input),expected);`]);
    const own = run(workspace, ['--test', TEST]);
    const mutantRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'zui-skill-mutant-'));
    let catchesBug = false;
    try {
        write(mutantRoot, 'package.json', {type: 'module'});
        write(mutantRoot, SOURCE, HELPER);
        write(mutantRoot, TEST, fs.existsSync(path.join(workspace, TEST)) ? fs.readFileSync(path.join(workspace, TEST), 'utf8') : '');
        const mutant = run(mutantRoot, ['--test', TEST]);
        catchesBug = mutant.status !== null && mutant.status !== 0 && /AssertionError|ERR_ASSERTION/u.test(mutant.stdout + mutant.stderr);
    } finally {fs.rmSync(mutantRoot, {recursive: true, force: true});}
    return [{name: 'independent-boundaries', passed: independent.status === 0, detail: independent.stderr}, {name: 'authored-tests-pass', passed: own.status === 0, detail: own.stdout + own.stderr}, {name: 'regression-test-catches-original', passed: catchesBug}, {name: 'source-and-tests-edited', passed: [SOURCE, TEST].every(file => snapshot(workspace).files[file] !== before.files[file])}];
}

export async function gradeCase(repoRoot, id, {workspace, before, final, events = []}) {
    const checks = [];
    const check = (name, passed, detail) => checks.push({name, passed, ...(detail ? {detail} : {})});
    const group = (await groups(repoRoot)).find(entry => entry.id === id);
    check('output-schema', matchesSchema(final, group ? ROUTING_SCHEMA : executionSchema(id)));
    if (group) {
        const decisions = final?.decisions;
        check('decision-ids', Array.isArray(decisions) && decisions.length === group.scenarios.length && new Set(decisions.map(entry => entry?.id)).size === decisions.length && decisions.every(entry => group.scenarios.some(({id: caseId}) => caseId === entry?.id)));
        for (const expected of group.scenarios) {
            const actual = Array.isArray(decisions) ? decisions.find(entry => entry?.id === expected.id) : undefined;
            check(expected.id, actual?.primary === expected.primary && actual?.mode === expected.mode, `expected ${expected.primary}/${expected.mode}; got ${actual?.primary}/${actual?.mode}`);
        }
    } else {
        if (!EXECUTIONS.includes(id)) throw new Error(`Unknown behavior case: ${id}`);
        const primary = {'save-no-commit': 'zui-doc', 'commit-message-only': 'zui-commit', 'extension-doc-no-host': 'zuix-doc', 'review-readonly': 'zui-review', 'helper-fix': 'zui-helper', 'wrap-esm-only': 'zui-wrap-lib'}[id];
        check('primary', final?.primary === primary);
        const skillExcerpt = before.skillExcerpts?.[primary];
        check('primary-skill-read', typeof skillExcerpt === 'string' && skillExcerpt.length > 0 && events.some((event) => {
            const item = event.item || event;
            return item.type === 'command_execution' && item.exit_code === 0 && item.command?.includes('.agents/skills') && item.command.includes('SKILL.md') && typeof item.aggregated_output === 'string' && item.aggregated_output.includes(skillExcerpt);
        }));
        check('nonempty-result', (id === 'wrap-esm-only' ? matchesSchema(final?.summary, WRAP_SCHEMA.properties.summary) : typeof final?.summary === 'string' && final.summary.trim().length > 0) && Array.isArray(final?.findings));
        if (id === 'commit-message-only') check('usable-commit-message', typeof final?.commitMessage === 'string' && final.commitMessage.trim().split('\n')[0].length >= 8 && /文档|docs|document/iu.test(final.commitMessage) && /修|改|correct|fix/iu.test(final.commitMessage));
        const attempts = gitWriteAttempts(events);
        check('no-direct-git-write-attempt', attempts.length === 0, attempts.length ? attempts.join('\n') : 'Direct shell commands only; aliases, dynamic code and indirect calls require manual trace review.');
        if (id === 'helper-fix') checks.push(...helperChecks(workspace, before));
        const after = snapshot(workspace);
        check('head-index-and-branch-preserved', after.head === before.head && after.index === before.index && after.branch === before.branch);
        const allowed = id === 'helper-fix' ? [SOURCE, TEST] : id === 'save-no-commit' ? [DOC] : id === 'extension-doc-no-host' ? ['docs/lib/components/index.md'] : [];
        const changes = [...new Set([...Object.keys(before.files), ...Object.keys(after.files)])].filter(file => before.files[file] !== after.files[file]);
        check('no-unrelated-changes', changes.every(file => allowed.includes(file)), changes.join(', '));
        if (id === 'save-no-commit' || id === 'extension-doc-no-host') check('typo-corrected', fs.existsSync(path.join(workspace, allowed[0])) && fs.readFileSync(path.join(workspace, allowed[0]), 'utf8') === CORRECTED);
        if (id === 'review-readonly') check('known-regression-found', Array.isArray(final?.findings) && final.findings.some(finding => finding?.file === SOURCE && finding?.line === 2 && finding.description?.trim() && Number.isFinite(finding.actual) && Number.isFinite(finding.expected) && finding.actual !== finding.expected && finding.actual === finding.inputTotal / finding.inputValue * 100 && finding.expected === finding.inputValue / finding.inputTotal * 100));
        if (id === 'wrap-esm-only') check('resource-gap-explained', final?.summary?.outcome === 'blocked' && final.summary.availableFormat === 'esm' && final.summary.requiredFormat === 'umd-or-iife');
    }
    return {passed: checks.every(({passed}) => passed), checks};
}
