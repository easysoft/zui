import fs from 'node:fs';
import path from 'node:path';
import {isDeepStrictEqual} from 'node:util';

export function traceMetrics(events, execution, before = {}) {
    const items = events.filter(event => event.type === 'item.completed').map(event => event.item);
    const commands = items.filter(item => item?.type === 'command_execution');
    const usage = events.filter(event => event.type === 'turn.completed' && event.usage).map(event => event.usage);
    const tokens = key => usage.some(entry => Number.isFinite(entry[key])) ? usage.reduce((sum, entry) => sum + (entry[key] ?? 0), 0) : null;
    const reads = Object.entries(before.skillDocuments || {}).flatMap(([file, excerpt]) => {
        const count = commands.filter(item => item.exit_code === 0 && item.command?.includes(path.basename(file)) && item.aggregated_output?.includes(excerpt)).length;
        return count ? [{file, count}] : [];
    });
    const models = [...new Set(events.map(event => event.model ?? event.session?.model).filter(value => typeof value === 'string'))];
    return {
        durationMs: Number.isFinite(Date.parse(execution.completedAt) - Date.parse(execution.startedAt)) ? Date.parse(execution.completedAt) - Date.parse(execution.startedAt) : null,
        models: models.length ? models : null,
        inputTokens: tokens('input_tokens'), cachedInputTokens: tokens('cached_input_tokens'), outputTokens: tokens('output_tokens'),
        toolCalls: items.filter(item => ['command_execution', 'mcp_tool_call', 'web_search', 'file_change'].includes(item?.type)).length,
        toolOutputBytes: commands.reduce((sum, item) => sum + Buffer.byteLength(item.aggregated_output || ''), 0),
        observedSkillReads: reads,
        repeatedSkillReads: reads.reduce((sum, entry) => sum + Math.max(0, entry.count - 1), 0),
        userInputRequests: items.filter(item => item?.type === 'mcp_tool_call' && /request_user_input/u.test(item.tool || '')).length,
    };
}

const json = file => JSON.parse(fs.readFileSync(file, 'utf8'));

export function runSummary(manifest) {
    const cases = manifest.cases.map((entry) => {
        const result = fs.existsSync(entry.result) ? json(entry.result) : null;
        return {id: entry.id, kind: entry.kind, status: entry.status, metrics: result?.metrics ?? null};
    });
    return {runDir: manifest.runDir, variant: manifest.variant ?? 'skills', skillsFrom: manifest.skillsFrom ?? manifest.repoRoot, codexVersion: manifest.codexVersion,
        counts: Object.fromEntries(['passed', 'failed', 'infrastructure_error', 'prepared'].map(status => [status, cases.filter(entry => entry.status === status).length])), cases};
}

export function compareRuns(leftDirectory, rightDirectory) {
    const runs = [leftDirectory, rightDirectory].map(directory => json(path.join(directory, 'manifest.json')));
    if (!isDeepStrictEqual(runs[0].suiteHashes, runs[1].suiteHashes)) throw new Error('Cannot compare different evaluation sources. Rerun both skill snapshots with the same harness.');
    if (!isDeepStrictEqual(runs[0].cases.map(entry => entry.id), runs[1].cases.map(entry => entry.id))) throw new Error('Cannot compare different case selections.');
    const rows = runs[0].cases.map((entry, index) => {
        const other = runs[1].cases[index];
        const snapshots = [entry, other].map(item => json(item.before));
        const inputs = snapshots.map(snapshot => snapshot?.taskFingerprint ?? snapshot);
        if (!isDeepStrictEqual(inputs[0], inputs[1])) throw new Error(`Cannot compare different task inputs: ${entry.id}`);
        const results = [entry, other].map(item => json(item.result));
        return {id: entry.id, before: results[0].status, after: results[1].status,
            delta: Object.fromEntries(['durationMs', 'inputTokens', 'cachedInputTokens', 'outputTokens', 'toolCalls', 'toolOutputBytes', 'repeatedSkillReads'].map((key) => {
                const [a, b] = results.map(result => result.metrics?.[key]);
                return [key, Number.isFinite(a) && Number.isFinite(b) ? b - a : null];
            }))};
    });
    return {runs: runs.map(runSummary), sameCliVersion: runs[0].codexVersion === runs[1].codexVersion,
        note: 'Single-run observations, not a performance guarantee. Unknown model identity and unobserved/partial file reads require manual trace review; input requests are not automatically unnecessary.', rows};
}
