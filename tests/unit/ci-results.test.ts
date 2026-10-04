import {execFileSync, spawnSync} from 'node:child_process';
import {mkdtempSync, mkdirSync, readFileSync, rmSync, utimesSync, writeFileSync, existsSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join, resolve} from 'node:path';
import {expect, test} from 'vitest';

test('CI archives keep the verified docs and isolate runs while pruning expired results', () => {
    const root = mkdtempSync(join(tmpdir(), 'zui-ci-results-'));
    const workspace = join(root, 'workspace');
    const results = join(root, 'results');
    const site = 'docs/_/.vitepress/dist';
    const old = new Date(Date.now() - 20 * 24 * 60 * 60 * 1000);
    try {
        mkdirSync(join(workspace, site), {recursive: true});
        writeFileSync(join(workspace, site, 'index.html'), 'verified docs');
        for (const run of ['1', '2', '3']) {
            mkdirSync(join(results, run), {recursive: true});
            writeFileSync(join(results, run, 'keep.txt'), run);
        }
        utimesSync(join(results, '1'), old, old);
        utimesSync(join(results, '2'), old, old);
        const env = {
            ...process.env,
            ZUI_CI_RESULTS_DIR: results,
            GITHUB_RUN_ID: '2',
            GITHUB_RUN_ATTEMPT: '1',
            GITHUB_SHA: 'verified-commit',
            RUNNER_NAME: 'test-runner',
            GITHUB_STEP_SUMMARY: join(root, 'summary'),
        };
        const preserve = resolve('scripts/ci/preserve-results.sh');
        execFileSync('bash', [preserve, 'docs', site, 'missing-report'], {cwd: workspace, env});
        const result = join(results, '2/1/docs');
        expect(readFileSync(join(result, 'commit'), 'utf8')).toBe('verified-commit\n');
        expect(execFileSync('tar', ['-xOf', join(result, 'results.tar.gz'), `${site}/index.html`], {encoding: 'utf8'})).toBe('verified docs');
        expect(existsSync(join(results, '1'))).toBe(false);
        expect(readFileSync(join(results, '2/keep.txt'), 'utf8')).toBe('2');
        expect(readFileSync(join(results, '3/keep.txt'), 'utf8')).toBe('3');

        writeFileSync(join(workspace, site, 'index.html'), 'second attempt');
        execFileSync('bash', [preserve, 'docs', site], {cwd: workspace, env: {...env, GITHUB_RUN_ATTEMPT: '2'}});
        expect(execFileSync('tar', ['-xOf', join(result, 'results.tar.gz'), `${site}/index.html`], {encoding: 'utf8'})).toBe('verified docs');
        expect(existsSync(join(results, '2/2/docs/results.tar.gz'))).toBe(true);
    } finally {
        rmSync(root, {recursive: true, force: true});
    }
});

test('runner policy rejects forks and unrelated repositories before executing a job', () => {
    const root = mkdtempSync(join(tmpdir(), 'zui-runner-policy-'));
    try {
        const eventPath = join(root, 'event.json');
        const hook = resolve('scripts/ci/allow-runner-job.sh');
        const check = (event: string, payload = {}, repository = 'easysoft/zui', ref = 'refs/heads/main') => {
            writeFileSync(eventPath, JSON.stringify(payload));
            return spawnSync('bash', [hook], {env: {
                ...process.env,
                GITHUB_REPOSITORY: repository,
                GITHUB_EVENT_NAME: event,
                GITHUB_REF: ref,
                GITHUB_EVENT_PATH: eventPath,
            }}).status;
        };
        const ownRepo = {repo: {full_name: 'easysoft/zui'}};
        expect(check('push')).toBe(0);
        expect(check('workflow_dispatch', {}, 'easysoft/zui', 'refs/heads/devx/ci-lightsail')).toBe(0);
        expect(check('schedule')).toBe(0);
        expect(check('pull_request', {pull_request: {head: ownRepo, base: ownRepo}})).toBe(0);
        expect(check('pull_request', {pull_request: {head: {repo: {full_name: 'outsider/zui'}}, base: ownRepo}})).toBe(1);
        expect(check('pull_request_target')).toBe(1);
        expect(check('push', {}, 'outsider/zui')).toBe(1);
        expect(check('push', {}, 'easysoft/zui', 'refs/tags/v3.1.0')).toBe(1);
        const run = {head_repository: {full_name: 'easysoft/zui'}, head_branch: 'main', event: 'push', conclusion: 'success'};
        expect(check('workflow_run', {workflow_run: run})).toBe(0);
        expect(check('workflow_run', {workflow_run: {...run, conclusion: 'failure'}})).toBe(1);
        expect(check('workflow_run', {workflow_run: {...run, head_repository: {full_name: 'outsider/zui'}}})).toBe(1);
    } finally {
        rmSync(root, {recursive: true, force: true});
    }
});
