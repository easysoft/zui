import {spawn, spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {setTimeout, clearTimeout} from 'node:timers';
import {fileURLToPath, pathToFileURL} from 'node:url';
import {isDeepStrictEqual} from 'node:util';
import {compareRuns, runSummary, traceMetrics} from './skill-metrics.mjs';

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const TIMEOUT_MS = 180000;
const SCHEMA_KEYS = new Set(['type', 'properties', 'required', 'additionalProperties', 'items', 'enum', 'description', 'title', 'minItems', 'maxItems']);

function suiteHashes(repoRoot) {
    return Object.fromEntries(['tests/skills/behavior/suite.mjs', 'tests/skills/behavior/routing.mjs', 'tests/skills/behavior/browser.mjs', 'scripts/tests/skills-behavior.mjs', 'scripts/tests/skill-metadata.mjs', 'scripts/tests/skill-metrics.mjs']
        .map(file => [file, createHash('sha256').update(fs.readFileSync(path.join(repoRoot, file))).digest('hex')]));
}

function writeJson(file, value) {
    fs.writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`);
}

function readJson(file) {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
}

export function parseArgs(args) {
    const options = {cases: []};
    for (let index = 0; index < args.length; index++) {
        const arg = args[index];
        if (arg === '--compare') {
            if (options.mode) throw new Error('Choose exactly one evaluation mode.');
            options.mode = 'compare';
            options.compare = args.slice(index + 1, index + 3);
            if (options.compare.length !== 2 || options.compare.some(value => value.startsWith('--'))) throw new Error('--compare requires two run directories.');
            index += 2;
        } else if (['--list', '--prepare', '--run', '--score'].includes(arg)) {
            if (options.mode) throw new Error('Choose exactly one of --list, --prepare, --run, or --score.');
            options.mode = arg.slice(2);
            if (arg !== '--score') continue;
            options.runDir = args[++index];
            if (!options.runDir || options.runDir.startsWith('--')) throw new Error('--score requires a run directory.');
        } else if (['--case', '--out-dir', '--variant', '--skills-from'].includes(arg)) {
            const value = args[++index];
            if (!value || value.startsWith('--')) throw new Error(`${arg} requires a value.`);
            if (arg === '--case') options.cases.push(value);
            else if (arg === '--out-dir') options.outDir = value;
            else if (arg === '--variant') options.variant = value;
            else options.skillsFrom = path.resolve(value);
        } else {
            throw new Error(`Unknown argument: ${arg}`);
        }
    }
    if (!options.mode) throw new Error('Choose --list, --prepare, --run, or --score <run-dir>.');
    if (options.outDir && !['prepare', 'run'].includes(options.mode)) throw new Error('--out-dir is only valid with --prepare or --run.');
    if ((options.variant || options.skillsFrom) && !['prepare', 'run'].includes(options.mode)) throw new Error('--variant and --skills-from are only valid with --prepare or --run.');
    if (options.variant && !['skills', 'none'].includes(options.variant)) throw new Error('--variant must be skills or none.');
    if (options.variant === 'none' && options.skillsFrom) throw new Error('--skills-from cannot be used without skills.');
    if (options.mode === 'compare' && options.cases.length) throw new Error('--case is not valid with --compare.');
    return options;
}

// Deliberately supports only the small schema vocabulary used by this suite.
// An unsupported keyword is an infrastructure error, never silently ignored.
export function validateFinal(schema, value, location = 'final') {
    if (!schema || typeof schema !== 'object' || Array.isArray(schema)) throw new Error(`${location}: invalid schema.`);
    for (const key of Object.keys(schema)) {
        if (!SCHEMA_KEYS.has(key)) throw new Error(`${location}: unsupported schema keyword ${key}.`);
    }
    const types = Array.isArray(schema.type) ? schema.type : [schema.type];
    if (!types.every(type => ['object', 'array', 'string', 'number', 'integer', 'boolean', 'null'].includes(type))) {
        throw new Error(`${location}: schema must declare a supported type.`);
    }
    const typeMatches = type => type === 'null' ? value === null
        : type === 'array' ? Array.isArray(value)
            : type === 'object' ? value !== null && typeof value === 'object' && !Array.isArray(value)
                : type === 'integer' ? Number.isInteger(value) : typeof value === type;
    if (!types.some(typeMatches)) throw new Error(`${location}: expected ${types.join(' or ')}.`);
    if (schema.enum && !schema.enum.some(entry => JSON.stringify(entry) === JSON.stringify(value))) throw new Error(`${location}: value is outside enum.`);
    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
        for (const key of schema.required ?? []) {
            if (!Object.hasOwn(value, key)) throw new Error(`${location}: missing ${key}.`);
        }
        for (const [key, item] of Object.entries(value)) {
            if (Object.hasOwn(schema.properties ?? {}, key)) validateFinal(schema.properties[key], item, `${location}.${key}`);
            else if (schema.additionalProperties === false) throw new Error(`${location}: unexpected ${key}.`);
        }
    }
    if (Array.isArray(value)) {
        if (schema.minItems !== undefined && value.length < schema.minItems) throw new Error(`${location}: too few items.`);
        if (schema.maxItems !== undefined && value.length > schema.maxItems) throw new Error(`${location}: too many items.`);
        if (!schema.items) throw new Error(`${location}: array schema requires items.`);
        value.forEach((item, index) => validateFinal(schema.items, item, `${location}[${index}]`));
    }
    return value;
}

export function codexArgs(entry) {
    return ['-a', 'never', 'exec', '--ignore-user-config', '--ephemeral', '--skip-git-repo-check',
        '--sandbox', entry.kind === 'routing' ? 'read-only' : 'workspace-write', '-C', entry.workspace,
        ...(entry.id === 'commit-staged' ? ['--add-dir', path.join(entry.workspace, '.git')] : []),
        '--json', '--output-schema', entry.schema, '--output-last-message', entry.final, '-'];
}

function runModel(command, entry, timeoutMs) {
    return new Promise((resolve) => {
        const stdout = fs.openSync(entry.events, 'wx');
        const stderr = fs.openSync(entry.stderr, 'wx');
        const startedAt = new Date().toISOString();
        let timedOut = false;
        let error;
        const child = spawn(command, codexArgs(entry), {
            cwd: entry.workspace,
            stdio: ['pipe', stdout, stderr],
            detached: process.platform !== 'win32',
            shell: false,
        });
        fs.closeSync(stdout);
        fs.closeSync(stderr);
        const timer = setTimeout(() => {
            timedOut = true;
            try {
                if (process.platform !== 'win32') process.kill(-child.pid, 'SIGKILL');
                else child.kill('SIGKILL');
            } catch (_error) {
                child.kill('SIGKILL');
            }
        }, timeoutMs);
        child.on('error', (failure) => {
            error = failure.message;
        });
        child.stdin.on('error', (failure) => {
            error ??= failure.message;
        });
        child.on('close', (code, signal) => {
            clearTimeout(timer);
            resolve({startedAt, completedAt: new Date().toISOString(), code, signal, timedOut, error: error ?? null});
        });
        child.stdin.end(fs.readFileSync(entry.prompt));
    });
}

function selectCases(cases, requested) {
    for (const id of requested) {
        if (!cases.some(entry => entry.id === id)) throw new Error(`Unknown case: ${id}`);
    }
    const selected = requested.length ? cases.filter(entry => requested.includes(entry.id)) : cases;
    if (!selected.length) throw new Error('No cases selected.');
    const ids = new Set();
    for (const entry of selected) {
        if (!/^[a-z0-9][a-z0-9-]*$/.test(entry.id) || ids.has(entry.id) || !['routing', 'execution'].includes(entry.kind)) {
            throw new Error(`Invalid or duplicate case: ${entry.id}`);
        }
        ids.add(entry.id);
    }
    return selected;
}

function casePaths(runDir, entry) {
    const directory = path.join(runDir, `case-${createHash('sha256').update(entry.id).digest('hex').slice(0, 16)}`);
    return {
        ...entry,
        workspace: path.join(directory, 'workspace'),
        prompt: path.join(directory, 'prompt.txt'),
        schema: path.join(directory, 'schema.json'),
        before: path.join(directory, 'before.json'),
        events: path.join(directory, 'events.jsonl'),
        stderr: path.join(directory, 'stderr.txt'),
        final: path.join(directory, 'final.json'),
        execution: path.join(directory, 'execution.json'),
        result: path.join(directory, 'result.json'),
    };
}

async function prepare(suite, repoRoot, cases, requestedDir, options) {
    let runDir;
    if (requestedDir) {
        runDir = path.resolve(requestedDir);
        const realTarget = path.join(fs.realpathSync(path.dirname(runDir)), path.basename(runDir));
        const relative = path.relative(fs.realpathSync(repoRoot), realTarget);
        if (!relative || (!relative.startsWith(`..${path.sep}`) && relative !== '..' && !path.isAbsolute(relative))) {
            throw new Error('--out-dir must be outside the repository to isolate project instructions.');
        }
        fs.mkdirSync(runDir); // Existing directories are never reused or overwritten.
    } else {
        runDir = fs.mkdtempSync(path.join(os.tmpdir(), `zui-skill-eval-${new Date().toISOString().replace(/[:.]/g, '-')}-`));
    }
    const manifest = {version: 1, createdAt: new Date().toISOString(), repoRoot, runDir, suiteHashes: suiteHashes(repoRoot), codexVersion: null, model: 'CLI default (no override)', variant: options.variant ?? 'skills', skillsFrom: options.skillsFrom ?? repoRoot, timeoutMs: TIMEOUT_MS, status: 'preparing', cases: []};
    const save = () => writeJson(path.join(runDir, 'manifest.json'), manifest);
    save();
    try {
        for (const candidate of cases) {
            const entry = casePaths(runDir, {id: candidate.id, kind: candidate.kind, status: 'prepared'});
            fs.mkdirSync(entry.workspace, {recursive: true});
            const input = await suite.prepareCase(repoRoot, entry.id, entry.workspace, {variant: manifest.variant, skillsFrom: manifest.skillsFrom});
            if (typeof input.prompt !== 'string' || input.schema?.type !== 'object' || input.before === undefined) throw new Error(`${entry.id}: invalid prepared case.`);
            fs.writeFileSync(entry.prompt, input.prompt);
            writeJson(entry.schema, input.schema);
            writeJson(entry.before, input.before);
            manifest.cases.push(entry);
        }
        manifest.status = 'prepared';
    } catch (error) {
        manifest.status = 'infrastructure_error';
        manifest.error = error.message;
        throw error;
    } finally {
        save();
    }
    return manifest;
}

async function scoreCase(suite, repoRoot, entry) {
    try {
        const execution = readJson(entry.execution);
        if (execution.code !== 0 || execution.timedOut || execution.error || execution.signal) throw new Error(`CLI did not complete successfully: ${JSON.stringify(execution)}`);
        const lines = fs.readFileSync(entry.events, 'utf8').split('\n').filter(line => line.trim());
        const events = lines.map(line => JSON.parse(line));
        if (!events.some(event => event.type === 'turn.completed') || events.some(event => event.type === 'turn.failed' || event.type === 'error')) {
            throw new Error('Trace lacks a successful completed turn, or contains an error.');
        }
        const final = validateFinal(readJson(entry.schema), readJson(entry.final));
        const message = events.filter(event => event.type === 'item.completed' && event.item?.type === 'agent_message').at(-1);
        if (!message || typeof message.item.text !== 'string') throw new Error('Trace lacks a final agent message.');
        if (!isDeepStrictEqual(JSON.parse(message.item.text), final)) throw new Error('Final agent message does not match final.json.');
        const grade = await suite.gradeCase(repoRoot, entry.id, {workspace: entry.workspace, before: readJson(entry.before), final, events});
        if (typeof grade?.passed !== 'boolean' || !Array.isArray(grade.checks) || !grade.checks.length || grade.checks.some(check => typeof check.name !== 'string' || typeof check.passed !== 'boolean')) {
            throw new Error('Grader returned an invalid result.');
        }
        const passed = grade.passed && grade.checks.every(check => check.passed);
        return {...grade, passed, status: passed ? 'passed' : 'failed', metrics: traceMetrics(events, execution, readJson(entry.before))};
    } catch (error) {
        return {passed: false, status: 'infrastructure_error', checks: [], error: error.message};
    }
}

export async function runCli(args, {repoRoot = REPO_ROOT, suite, codexCommand = 'codex', timeoutMs = TIMEOUT_MS, log = console.log} = {}) {
    const options = parseArgs(args);
    if (options.mode === 'compare') {
        const comparison = compareRuns(...options.compare);
        log(JSON.stringify(comparison, null, 2));
        return {exitCode: 0, comparison};
    }
    suite ??= await import(pathToFileURL(path.join(repoRoot, 'tests/skills/behavior/suite.mjs')).href);
    const allCases = await suite.listCases(repoRoot);
    const cases = selectCases(allCases, options.cases);
    if (options.mode === 'list') {
        log(JSON.stringify(cases, null, 2));
        return {exitCode: 0, cases};
    }
    let manifest;
    let evaluated;
    if (options.mode === 'score') {
        const runDir = fs.realpathSync(path.resolve(options.runDir));
        manifest = readJson(path.join(runDir, 'manifest.json'));
        if (manifest.version !== 1 || !Array.isArray(manifest.cases)) throw new Error('Unsupported run manifest.');
        if (JSON.stringify(manifest.suiteHashes) !== JSON.stringify(suiteHashes(repoRoot))) throw new Error('Scoring source has changed. Prepare and run a new evaluation.');
        manifest.runDir = runDir;
        const selected = selectCases(manifest.cases, options.cases);
        manifest.cases = manifest.cases.map((entry) => {
            const candidate = allCases.find(current => current.id === entry.id && current.kind === entry.kind);
            if (!candidate) throw new Error(`Case is no longer present in this suite: ${entry.id}`);
            return casePaths(runDir, {id: entry.id, kind: entry.kind, status: entry.status});
        });
        evaluated = manifest.cases.filter(item => selected.some(candidate => candidate.id === item.id));
        for (const entry of evaluated) {
            const result = await scoreCase(suite, repoRoot, entry);
            writeJson(entry.result, result);
            entry.status = result.status;
        }
    } else {
        manifest = await prepare(suite, repoRoot, cases, options.outDir, options);
        evaluated = manifest.cases;
        manifest.timeoutMs = timeoutMs;
        log(`Prepared: ${manifest.runDir}`);
        if (options.mode === 'prepare') return {exitCode: 0, manifest};
        const version = spawnSync(codexCommand, ['--version'], {encoding: 'utf8', timeout: 10000, shell: false});
        if (version.status !== 0) {
            manifest.status = 'infrastructure_error';
            manifest.error = version.error?.message || version.stderr || 'Cannot read Codex version.';
            for (const entry of manifest.cases) entry.status = 'infrastructure_error';
        } else {
            manifest.codexVersion = version.stdout.trim();
            for (const entry of manifest.cases) {
                log(`Running ${entry.id} (${entry.kind}, timeout ${timeoutMs} ms)`);
                const execution = await runModel(codexCommand, entry, timeoutMs);
                writeJson(entry.execution, execution);
                const result = await scoreCase(suite, repoRoot, entry);
                writeJson(entry.result, result);
                entry.status = result.status;
                writeJson(path.join(manifest.runDir, 'manifest.json'), manifest);
                log(`${entry.id}: ${result.status}`);
            }
        }
    }
    manifest.status = manifest.cases.some(entry => entry.status === 'infrastructure_error') ? 'infrastructure_error'
        : manifest.cases.some(entry => entry.status === 'prepared') ? 'partial'
            : manifest.cases.every(entry => entry.status === 'passed') ? 'passed' : 'failed';
    writeJson(path.join(manifest.runDir, 'manifest.json'), manifest);
    writeJson(path.join(manifest.runDir, 'summary.json'), runSummary(manifest));
    const exitCode = evaluated.every(entry => entry.status === 'passed') ? 0 : 1;
    log(`${manifest.status}: ${manifest.runDir}`);
    return {exitCode, manifest};
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
    runCli(process.argv.slice(2)).then(({exitCode}) => {
        process.exitCode = exitCode;
    }).catch((error) => {
        console.error(`infrastructure_error: ${error.message}`);
        process.exitCode = 1;
    });
}
