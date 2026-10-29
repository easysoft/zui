import Path from 'node:path';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import fs from 'fs-extra';
import JSZip from 'jszip';
import {afterAll, beforeAll, expect, test} from 'vitest';
import type {BuildAnalysisReport} from '../../scripts/build/analysis';

const execFileAsync = promisify(execFile);
const root = Path.resolve(import.meta.dirname, '../..');
const pnpm = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm';
let fixture: string;

beforeAll(async () => {
    await fs.ensureDir(Path.join(root, 'test-results'));
    fixture = await fs.mkdtemp(Path.join(root, 'test-results/build-analysis-'));
});

afterAll(async () => {
    if (fixture) await fs.remove(fixture);
});

test('opt-in reports preserve runtime bytes, include transitive libraries and enter the ZIP', async () => {
    const config = Path.join(fixture, 'build.json');
    await fs.writeJSON(config, {name: 'fixture', libs: ['button', 'dropdown'], externals: {'cash-dom': '$'}});
    for (const analyze of [false, true]) {
        await execFileAsync(pnpm, ['build', '--config', config, '--out-dir', Path.join(fixture, String(analyze)),
            ...(analyze ? ['--analyze', '--zip', Path.join(fixture, 'analysis.zip')] : [])], {
            cwd: root, env: {...process.env, CI: '1'}, maxBuffer: 20 * 1024 * 1024,
        });
    }
    const baseline = Path.join(fixture, 'false');
    const analyzed = Path.join(fixture, 'true');
    for (const name of await fs.readdir(baseline)) {
        expect(await fs.readFile(Path.join(analyzed, name))).toEqual(await fs.readFile(Path.join(baseline, name)));
    }
    expect(await fs.pathExists(Path.join(baseline, 'build-analysis.html'))).toBe(false);
    expect(await fs.pathExists(Path.join(analyzed, 'build-analysis.md'))).toBe(false);
    const report: BuildAnalysisReport = await fs.readJSON(Path.join(analyzed, 'build-analysis.json'));
    expect(report.externals).toContain('cash-dom');
    expect(report.files.filter(file => file.kind === 'javascript').map(file => file.format).sort()).toEqual(['es', 'umd']);
    for (const file of report.files.filter(file => file.kind === 'javascript')) {
        expect(file.packages).toEqual(expect.arrayContaining([
            expect.objectContaining({name: '@zui/button', category: 'builtin'}),
            expect.objectContaining({name: '@zui/dropdown', category: 'builtin'}),
            expect.objectContaining({name: '@zui/core', category: 'builtin'}),
            expect.objectContaining({name: 'preact', category: 'dependency'}),
        ]));
        expect(file.packages.some(item => item.name === 'cash-dom')).toBe(false);
    }
    const zip = await JSZip.loadAsync(await fs.readFile(Path.join(fixture, 'analysis.zip')));
    expect(await zip.file('true/build-analysis.json')!.async('string')).toBe(await fs.readFile(Path.join(analyzed, 'build-analysis.json'), 'utf8'));
    const html = await fs.readFile(Path.join(analyzed, 'build-analysis.html'), 'utf8');
    expect(html).toContain('<html lang="zh-CN">');
    expect(await zip.file('true/build-analysis.html')!.async('string')).toBe(html);
});
