import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {execFileSync, spawnSync} from 'node:child_process';
import {pathToFileURL} from 'node:url';

const EXECUTIONS = ['save-no-commit', 'commit-message-only', 'extension-doc-no-host', 'review-readonly', 'helper-fix', 'wrap-esm-only', 'ai-reference-edit', 'helper-public-contract', 'ai-review-readonly', 'extension-build-selector'];
const SOURCE = 'lib/math/src/main.ts';
const TEST = 'tests/math.test.mjs';
const DOC = 'lib/example/docs/lib/components/index.md';
const TYPO = '# Example\n\n支恃按需加载。\n';
const CORRECTED = TYPO.replace('支恃', '支持');
const HELPER = 'export function clampCount(value: number) {\n    return Math.min(100, Math.trunc(value));\n}\n';
const AI_DOC = 'lib/math/ai.md';
const AI_CASES = ['ai-reference-edit', 'helper-public-contract', 'ai-review-readonly'];
const object = properties => ({type: 'object', properties, required: Object.keys(properties), additionalProperties: false});
const string = {type: 'string'};
const EXECUTION_SCHEMA = object({primary: string, summary: string, commitMessage: string, findings: {type: 'array', items: object({file: string, line: {type: 'integer'}, description: string, inputValue: {type: 'number'}, inputTotal: {type: 'number'}, actual: {type: 'number'}, expected: {type: 'number'}})}});
const WRAP_SCHEMA = object({...EXECUTION_SCHEMA.properties, summary: object({outcome: {type: 'string', enum: ['completed', 'blocked']}, availableFormat: {type: 'string', enum: ['esm', 'umd', 'iife', 'unknown']}, requiredFormat: {type: 'string', enum: ['none', 'umd-or-iife']}})});
const AI_REVIEW_SCHEMA = object({...EXECUTION_SCHEMA.properties, findings: {type: 'array', items: object({file: string, line: {type: 'integer'}, description: string})}});
const ROUTING_SCHEMA = object({decisions: {type: 'array', items: object({id: string, primary: string, mode: {type: 'string', enum: ['readonly', 'edit', 'commit', 'clarify']}})}});
const executionSchema = id => id === 'wrap-esm-only' ? WRAP_SCHEMA : id === 'ai-review-readonly' ? AI_REVIEW_SCHEMA : EXECUTION_SCHEMA;
const git = (root, ...args) => execFileSync('git', ['--no-optional-locks', '-C', root, ...args], {encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe']}).trim();
const groups = async root => (await import(pathToFileURL(path.join(root, 'tests/skills/behavior/routing.mjs')).href)).ROUTING_GROUPS;

function write(root, name, value) {
    const file = path.join(root, name);
    fs.mkdirSync(path.dirname(file), {recursive: true});
    fs.writeFileSync(file, typeof value === 'string' ? value : JSON.stringify(value, null, 2) + '\n');
}

function mathReference(limit = 100) {
    const sections = ['meta', 'overview', 'setup', 'vanilla', 'preact', 'web-components', 'css', 'css-variables', 'javascript', 'types', 'recipes', 'constraints', 'references'];
    const body = {
        meta: `\`\`\`json\n${JSON.stringify({schemaVersion: 1, library: 'math', summary: `提供 0 至 ${limit} 的计数工具。`, keywords: ['计数', 'count']}, null, 2)}\n\`\`\``,
        overview: `处理 0 至 ${limit} 的计数。`,
        setup: 'workspace：从 `@zui/math` 公开入口导入；这是源码工作区入口，不承诺 npm 分发。',
        javascript: `### js-clamp-count\n\n\`\`\`json\n${JSON.stringify({name: 'clampCount', summary: `将有限数字截断并限制到 0 至 ${limit}。`}, null, 2)}\n\`\`\`\n\n#### 签名\n\n\`\`\`ts\nclampCount(value: number): number;\n\`\`\`\n\n#### 参数\n\n| 参数 | 类型 | 必填 | 默认值 | 说明 |\n| --- | --- | --- | --- | --- |\n| value | number | 是 | 无 | 有限数字；先截断小数，限制到 0 至 ${limit}。 |\n\n返回计数数字；不修改输入、无副作用、不抛出异常。\n\n#### 示例\n\nworkspace：\n\n\`\`\`ts\nimport {clampCount} from '@zui/math';\nconsole.assert(clampCount(120) === ${limit});\n\`\`\`\n\n#### 来源\n\n[公开入口](src/main.ts)`,
        constraints: '只约定有限数字输入，不涉及时间、异步或浏览器资源。',
        references: '[公开入口](src/main.ts)',
    };
    return '# Math\n\n' + sections.map(section => `## ${section}\n\n${body[section] || '无。'}`).join('\n\n') + '\n';
}

// A deliberately small local command fixture, not a replacement Markdown parser.
// It observes index generation/checking using this fixture's JSON metadata blocks.
const AI_COMMAND = `import fs from 'node:fs';
const operation = process.argv[2];
const document = fs.readFileSync('lib/math/ai.md', 'utf8');
const records = [...document.matchAll(/^###? ([a-z][a-z0-9-]*)\\n\\n\x60\x60\x60json\\n([\\s\\S]*?)\\n\x60\x60\x60/gm)].map((match) => ({id: match[1], meta: JSON.parse(match[2])}));
const [library, ...entries] = records;
if (library?.id !== 'meta' || library.meta.library !== 'math') throw new Error('Invalid library metadata');
const index = '# Fixture AI index\\n\\n' + library.meta.summary + '\\n\\n' + entries.map(({id, meta}) => '- [' + meta.name + '](lib/math/ai.md#' + id + '): ' + meta.summary).join('\\n') + '\\n';
if (operation === 'build') fs.writeFileSync('ai.md', index);
else if (operation !== 'check') throw new Error('Usage: node tools/ai.mjs build|check');
const synchronized = fs.existsSync('ai.md') && fs.readFileSync('ai.md', 'utf8') === index;
console.log(JSON.stringify({tool: 'fixture-ai', operation, synchronized}));
if (!synchronized) process.exitCode = 1;
`;

function prepareAiFixture(workspace, id) {
    write(workspace, AI_DOC, mathReference(id === 'ai-reference-edit' ? 10 : 100));
    write(workspace, 'tools/ai.mjs', AI_COMMAND);
    const manifest = JSON.parse(fs.readFileSync(path.join(workspace, 'package.json'), 'utf8'));
    Object.assign(manifest.scripts, {'ai:build': 'node tools/ai.mjs build', 'ai:check': 'node tools/ai.mjs check'});
    write(workspace, 'package.json', manifest);
    write(workspace, 'README.md', '这是离线精简项目。pnpm test 使用 Node 原生类型剥离执行测试。ai:build / ai:check 是可运行的本地索引命令，只读取本例 JSON 元信息：前者生成根 ai.md，后者检查同步状态；不执行示例、不保证正文语义。无需安装依赖或访问网络。\n');
    execFileSync(process.execPath, ['tools/ai.mjs', 'build'], {cwd: workspace});
    if (AI_CASES.includes(id)) write(workspace, SOURCE, 'export function clampCount(value: number) {\n    return Math.max(0, Math.min(100, Math.trunc(value)));\n}\n');
}

function prepareExtensionHost(workspace) {
    const manifest = JSON.parse(fs.readFileSync(path.join(workspace, 'package.json'), 'utf8'));
    manifest.zui.name = 'legacy-counter';
    write(workspace, 'package.json', manifest);
    write(workspace, 'host/package.json', {name: 'zui', private: true, type: 'module', scripts: {build: 'node scripts/build.mjs', 'dev:exts': 'node scripts/build.mjs --help'}});
    fs.mkdirSync(path.join(workspace, 'host/lib/core'), {recursive: true});
    write(workspace, 'host/scripts/libs/query.ts', '// Offline fixture host discovery marker.\n');
    write(workspace, 'host/exts/libs.json', {demo: '../'});
    write(workspace, 'host/scripts/build.mjs', `import fs from 'node:fs';
const args = process.argv.slice(2);
if (args.includes('--help')) { console.log('build --extension <group> --lib <package-name> --dry-run'); process.exit(0); }
const value = name => args[args.indexOf(name) + 1];
const registrations = JSON.parse(fs.readFileSync('exts/libs.json', 'utf8'));
const selected = value('--extension');
const target = registrations[selected];
if (!target) throw new Error('Unknown extension group');
const pkg = JSON.parse(fs.readFileSync(target + '/package.json', 'utf8'));
if (!args.includes('--dry-run')) throw new Error('This offline host supports dry-run only');
const requested = value('--lib');
const valid = requested === pkg.name;
console.log(JSON.stringify({tool: 'fixture-build', dryRun: true, extension: selected, requested, libraries: valid ? [pkg.name] : []}));
if (!valid) process.exitCode = 2;
`);
    write(workspace, 'README.md', '本目录是独立扩展包；host/ 是已准备好的离线精简 ZUI 宿主，exts/libs.json 登记了本包。宿主 build 命令支持 --dry-run 和 --help，不联网、不安装依赖、不生成产物。请使用已提供的命令，不添加其他构建脚本。\n');
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
    const extension = id === 'extension-doc-no-host' || id === 'extension-build-selector';
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
    if (AI_CASES.includes(id) || id === 'helper-fix') prepareAiFixture(workspace, id);
    if (id === 'extension-build-selector') prepareExtensionHost(workspace);
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
    if (id === 'ai-review-readonly') write(workspace, AI_DOC, mathReference().replace('提供 0 至 100 的计数工具。', '提供整数计数的截断和范围限制工具。'));
    const requests = {
        'save-no-commit': `请将 ${DOC} 的“支恃”改成“支持”并保存，只改这个错字。`,
        'commit-message-only': '$zui-commit：只根据现有改动生成一条中文提交信息，不执行提交或暂存。保留已有的部分暂存、未暂存和未跟踪内容。',
        'extension-doc-no-host': '这是一个独立扩展包，机器上没有 ZUI 宿主。请只把 docs/lib/components/index.md 的“支恃”改成“支持”，保存源文件。',
        'review-readonly': `请只读评审当前未提交的 ${SOURCE} 改动，percent(value,total) 应返回 value 占 total 的百分比。报告有依据的错误及文件行号，不修改文件。`,
        'helper-fix': `请修复 ${SOURCE} 的 clampCount：有限数字先截断小数，再限制到 0 至 100（含边界）。现在负参数会得到负数。直接修复并在 ${TEST} 补充能复现这个错误的回归测试；只改这两个文件，不提交。`,
        'wrap-esm-only': '$zui-wrap-lib：请将 vendor/tiny.mjs 封装为 lib/tiny 的按需加载 helper，只需要 double 函数；我目前只有这份 ESM 文件，没有 UMD/IIFE 资源。',
        'ai-reference-edit': `请核对 ${SOURCE}，修正 ${AI_DOC} 对 clampCount 上界的错误说明和可复制示例，完成此 AI 参考的必要维护和验证。`,
        'helper-public-contract': `请在 ${SOURCE} 新增公开函数 isCount(value: number): boolean，用来判断输入是否为 0 至 100（含边界）的有限整数。完成必要的使用说明和测试；保留 clampCount 的行为，不提交。`,
        'ai-review-readonly': '请只读评审当前 AI 参考改动及根索引是否一致，使用已有命令核实；报告有依据的问题，不修复、不生成文件。',
        'extension-build-selector': '$zuix-helper：本目录的 helper 无需修改。请使用 host/ 中已有离线宿主的构建命令，以 dry-run 验证只选择当前扩展包，确认实际选择的库；保留文件，不联网、不安装依赖。',
    };
    const summary = id === 'wrap-esm-only' ? 'summary（结构化资源报告：outcome 为 completed 或 blocked；availableFormat 为 esm、umd、iife 或 unknown；requiredFormat 为 none 或 umd-or-iife，表示继续任务需要补充的资源格式）' : 'summary（结果、验证或阻碍）';
    const findingFields = `file 仓库相对路径、line 行号、description 说明${id === 'ai-review-readonly' ? '' : '，以及可复现反例的 inputValue、inputTotal、actual、expected 数值'}`;
    return {prompt: `${requests[id]}\n\n当前项目根目录：${workspace}。技能目录为 .agents/skills。完成任务后以 JSON 返回 primary（所用主技能 name）、${summary}、commitMessage（请求生成提交信息时放入可直接使用的完整信息，其他任务为空字符串）和 findings（仅评审发现，包含 ${findingFields}；其他任务为空数组）。不要访问评分源码。`, schema: executionSchema(id), before: {...snapshot(workspace), skillExcerpts}};
}

// Deliberately limited shell-token review: direct commands and sh -c wrappers.
// Dynamic code, aliases and command indirection still need human trace review.
function commandInvocations(command) {
    const invocations = [];
    const tokens = (command.match(/"(?:\\.|[^"\\])*"|'[^']*'|&&|\|\||[;|\n]|[^\s;|]+/gu) || []).map(token => token.replace(/^['"]|['"]$/gu, ''));
    let start = true;
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        if (/^(?:&&|\|\||[;|\n])$/u.test(token)) {
            start = true;
            continue;
        }
        if (start && /^(?:\w+=|(?:env|command|exec|--)$)/u.test(token)) continue;
        if (start && /(?:^|\/)(?:ba|z|da)?sh$/u.test(token) && /^-[a-z]*c/u.test(tokens[i + 1] || '')) invocations.push(...commandInvocations(tokens[i + 2] || ''));
        if (start) invocations.push(tokens.slice(i));
        start = false;
    }
    return invocations;
}

function gitWriteAttempts(events) {
    const forbidden = [];
    for (const event of events || []) {
        const item = event.item || event;
        if (item.type !== 'command_execution' || typeof item.command !== 'string') continue;
        for (const tokens of commandInvocations(item.command)) {
            if (!/(?:^|\/)git$/u.test(tokens[0])) continue;
            let j = 1;
            while (tokens[j]?.startsWith('-')) j += ['-C', '-c', '--git-dir', '--work-tree'].includes(tokens[j]) ? 2 : 1;
            if (['add', 'commit', 'push', 'reset', 'checkout', 'switch', 'restore', 'clean', 'stash', 'rebase', 'merge', 'cherry-pick', 'revert'].includes(tokens[j])) forbidden.push(item.command);
        }
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

function fixtureEvidence(events, tool) {
    return events.flatMap((event) => {
        const item = event.item || event;
        if (item.type !== 'command_execution' || typeof item.aggregated_output !== 'string') return [];
        return item.aggregated_output.split('\n').flatMap((line) => {
            try {
                const output = JSON.parse(line);
                return output?.tool === tool ? [{...output, exitCode: item.exit_code}] : [];
            } catch {return [];}
        });
    });
}

function aiChecks(workspace, id, events) {
    const checks = [];
    const check = (name, passed, detail) => checks.push({name, passed, ...(detail ? {detail} : {})});
    const evidence = fixtureEvidence(events, 'fixture-ai');
    if (id === 'ai-review-readonly') {
        check('stale-index-checked', evidence.some(item => item.operation === 'check' && item.synchronized === false && item.exitCode === 1));
        const attempts = events.filter(event => (event.item || event).type === 'command_execution').map(event => (event.item || event).command || '');
        check('no-index-generation-attempt', !evidence.some(item => item.operation === 'build') && !attempts.flatMap(commandInvocations).some((tokens) => {
            if (/(?:^|\/)(?:pnpm|npm|yarn)$/u.test(tokens[0])) return tokens[tokens[1] === 'run' ? 2 : 1] === 'ai:build';
            return /(?:^|\/)node$/u.test(tokens[0]) && /(?:^|\/)tools\/ai\.mjs$/u.test(tokens[1] || '') && tokens[2] === 'build';
        }));
        return checks;
    }
    check('index-generated-and-checked', ['build', 'check'].every(operation => evidence.some(item => item.operation === operation && item.synchronized === true && item.exitCode === 0)));
    // node -e receives its first user argument at argv[1]. Keep the fixture command unchanged.
    const verify = spawnSync(process.execPath, ['--input-type=module', '-e', AI_COMMAND, 'fixture', 'check'], {cwd: workspace, encoding: 'utf8'});
    check('index-content-synchronized', verify.status === 0, verify.stderr);
    const document = fs.existsSync(path.join(workspace, AI_DOC)) ? fs.readFileSync(path.join(workspace, AI_DOC), 'utf8') : '';
    const entries = [...document.matchAll(/^### ([a-z][a-z0-9-]*)\n\n```json\n([\s\S]*?)\n```([\s\S]*?)(?=^## |^### |$(?![\s\S]))/gm)].flatMap((match) => {
        try {
            return [{id: match[1], meta: JSON.parse(match[2]), body: match[3]}];
        } catch {return [];}
    });
    const name = id === 'helper-public-contract' ? 'isCount' : 'clampCount';
    const entry = entries.find(item => item.meta.name === name);
    check('documented-public-entry', Boolean(entry?.meta.summary?.trim() && entry.body.includes('value') && entry.body.includes('number') && (name === 'isCount' ? entry.body.includes('boolean') : entry.body.includes('100'))));
    if (id === 'ai-reference-edit') check('incorrect-upper-bound-removed', !/\b0\s*至\s*10\b/u.test(document) && document.includes('100'));
    const examples = [...(entry?.body || '').matchAll(/```(?:ts|typescript|js|javascript)\n([\s\S]*?)\n```/g)].map(match => match[1]).filter(code => code.includes('@zui/math') && code.includes(`${name}(`));
    check('runnable-document-example', examples.length > 0 && examples.every((code) => {
        const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'zui-ai-example-'));
        try {
            const file = path.join(directory, 'example.mts');
            const source = `import _fixtureAssert from 'node:assert/strict';\nconsole.assert = (condition, ...message) => _fixtureAssert.ok(condition, message.join(' '));\n${code.replaceAll('@zui/math', pathToFileURL(path.join(workspace, SOURCE)).href)}`;
            fs.writeFileSync(file, source);
            return spawnSync(process.execPath, ['--experimental-strip-types', file], {encoding: 'utf8', timeout: 10000}).status === 0;
        } finally {fs.rmSync(directory, {recursive: true, force: true});}
    }));
    if (id === 'helper-public-contract') {
        const env = {...process.env};
        delete env.NODE_TEST_CONTEXT;
        const boundary = spawnSync(process.execPath, ['--experimental-strip-types', '--input-type=module', '-e', `import assert from 'node:assert/strict'; import {isCount, clampCount} from './${SOURCE}'; for (const value of [-1, 0.5, 101, NaN, Infinity, -Infinity]) assert.equal(isCount(value), false); for (const value of [-0, 0, 1, 99, 100]) assert.equal(isCount(value), true); assert.equal(clampCount(-5), 0); assert.equal(clampCount(120), 100);`], {cwd: workspace, env, encoding: 'utf8', timeout: 10000});
        check('public-helper-boundaries', boundary.status === 0, boundary.stderr);
        const own = spawnSync(process.execPath, ['--experimental-strip-types', '--test', TEST], {cwd: workspace, env, encoding: 'utf8', timeout: 10000});
        check('authored-tests-pass', own.status === 0, own.stdout + own.stderr);
        const testSource = fs.existsSync(path.join(workspace, TEST)) ? fs.readFileSync(path.join(workspace, TEST), 'utf8') : '';
        const mutantRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'zui-public-helper-mutant-'));
        try {
            write(mutantRoot, 'package.json', {type: 'module'});
            write(mutantRoot, SOURCE, 'export function clampCount(value: number) { return Math.max(0, Math.min(100, Math.trunc(value))); }\nexport const isCount = () => true;\n');
            write(mutantRoot, TEST, testSource);
            const mutant = spawnSync(process.execPath, ['--experimental-strip-types', '--test', TEST], {cwd: mutantRoot, env, encoding: 'utf8', timeout: 10000});
            check('public-helper-regression-test', testSource.includes('isCount') && mutant.status !== null && mutant.status !== 0 && /AssertionError|ERR_ASSERTION/u.test(mutant.stdout + mutant.stderr));
        } finally {fs.rmSync(mutantRoot, {recursive: true, force: true});}
    }
    return checks;
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
        const primary = {'save-no-commit': 'zui-doc', 'commit-message-only': 'zui-commit', 'extension-doc-no-host': 'zuix-doc', 'review-readonly': 'zui-review', 'helper-fix': 'zui-helper', 'wrap-esm-only': 'zui-wrap-lib', 'ai-reference-edit': 'zui-doc', 'helper-public-contract': 'zui-helper', 'ai-review-readonly': 'zui-review', 'extension-build-selector': 'zuix-helper'}[id];
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
        if (AI_CASES.includes(id)) checks.push(...aiChecks(workspace, id, events));
        if (id === 'extension-build-selector') {
            const plans = fixtureEvidence(events, 'fixture-build');
            const packageName = JSON.parse(fs.readFileSync(path.join(workspace, 'package.json'), 'utf8')).name;
            check('extension-package-selected', plans.some(plan => plan.exitCode === 0 && plan.dryRun === true && plan.extension === 'demo' && plan.requested === packageName && JSON.stringify(plan.libraries) === JSON.stringify([packageName])));
            check('no-incorrect-build-selector', plans.every(plan => plan.requested === packageName));
        }
        const after = snapshot(workspace);
        check('head-index-and-branch-preserved', after.head === before.head && after.index === before.index && after.branch === before.branch);
        const allowed = id === 'helper-fix' ? [SOURCE, TEST] : id === 'save-no-commit' ? [DOC] : id === 'extension-doc-no-host' ? ['docs/lib/components/index.md'] : id === 'ai-reference-edit' ? [AI_DOC, 'ai.md'] : id === 'helper-public-contract' ? [SOURCE, TEST, AI_DOC, 'ai.md'] : [];
        const changes = [...new Set([...Object.keys(before.files), ...Object.keys(after.files)])].filter(file => before.files[file] !== after.files[file]);
        check('no-unrelated-changes', changes.every(file => allowed.includes(file)), changes.join(', '));
        if (id === 'save-no-commit' || id === 'extension-doc-no-host') check('typo-corrected', fs.existsSync(path.join(workspace, allowed[0])) && fs.readFileSync(path.join(workspace, allowed[0]), 'utf8') === CORRECTED);
        if (id === 'review-readonly') check('known-regression-found', Array.isArray(final?.findings) && final.findings.some(finding => finding?.file === SOURCE && finding?.line === 2 && finding.description?.trim() && Number.isFinite(finding.actual) && Number.isFinite(finding.expected) && finding.actual !== finding.expected && finding.actual === finding.inputTotal / finding.inputValue * 100 && finding.expected === finding.inputValue / finding.inputTotal * 100));
        if (id === 'ai-review-readonly') check('index-drift-reported', Array.isArray(final?.findings) && final.findings.some(finding => ['ai.md', AI_DOC].includes(finding?.file) && finding.line > 0 && /索引|index/iu.test(finding.description) && /过期|不同步|不一致|stale|sync|mismatch/iu.test(finding.description)));
        if (id === 'wrap-esm-only') check('resource-gap-explained', final?.summary?.outcome === 'blocked' && final.summary.availableFormat === 'esm' && final.summary.requiredFormat === 'umd-or-iife');
    }
    return {passed: checks.every(({passed}) => passed), checks};
}
