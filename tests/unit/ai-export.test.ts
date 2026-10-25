import Path from 'node:path';
import {tmpdir} from 'node:os';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import {pathToFileURL} from 'node:url';
import fs from 'fs-extra';
import {afterEach, beforeEach, describe, expect, it} from 'vitest';
import {AI_SECTIONS} from '../../scripts/ai/document';
import {buildAiIndex, checkAiLinks} from '../../scripts/ai/catalog';
import {exportAiReferences, rewriteReferenceLinks} from '../../scripts/ai/export';

const exec = promisify(execFile);

function document(id: string): string {
    const sections: Record<string, string> = {
        meta: `\`\`\`json\n${JSON.stringify({schemaVersion: 1, library: id, summary: '示例组件。', keywords: ['示例']})}\n\`\`\``,
        setup: 'browser：只使用所选构建已导出的成员。',
        vanilla: '### vanilla-demo\n\n```json\n{"name":"Demo","summary":"创建示例组件。"}\n```\n\n中文 😀\n\n```md\n## fake-section\n[src](src/main.ts)\n```\n\n[共享参考](../core/ai.md#setup) [源码](src/main.ts)\n',
        references: '[源码][source]\n\n[source]: src/main.ts',
    };
    return `# Demo\n\n${AI_SECTIONS.map(section => `## ${section}\n\n${sections[section] ?? '无。'}\n\n`).join('')}`;
}

describe('portable AI reference export', () => {
    let root: string;

    async function git(...args: string[]) {
        return exec('git', ['-C', root, ...args]);
    }

    beforeEach(async () => {
        root = await fs.mkdtemp(Path.join(tmpdir(), 'zui-ai-export-'));
        await fs.outputJSON(Path.join(root, 'package.json'), {version: '3.1.0'});
        for (const id of ['demo', 'core']) {
            await fs.outputJSON(Path.join(root, 'lib', id, 'package.json'), {name: `@zui/${id}`, version: '3.1.0', zui: {type: 'component'}});
            await fs.outputFile(Path.join(root, 'lib', id, 'ai.md'), document(id));
            await fs.outputFile(Path.join(root, 'lib', id, 'src/main.ts'), 'export const demo = 1;\n');
        }
        await fs.outputJSON(Path.join(root, 'skills/zui-build/assets/vendor/zui-3.0.0/manifest.json'), {name: 'zui', version: '3.0.0', files: {}});
        await buildAiIndex(root);
        await git('init');
        await git('add', '.');
        await git('-c', 'user.name=Fixture', '-c', 'user.email=fixture@example.invalid', '-c', 'commit.gpgsign=false', 'commit', '-m', 'fixture');
    });

    afterEach(async () => {
        await fs.remove(root);
    });

    it('exports closed cross-library references and runs each skill without the repository or dependencies', async () => {
        await exportAiReferences(root);
        expect(await exportAiReferences(root, true)).toEqual([]);
        const revision = (await git('rev-parse', 'HEAD')).stdout.trim();
        await fs.remove(Path.join(root, 'lib'));
        await fs.remove(Path.join(root, '.git'));
        await fs.remove(Path.join(root, 'package.json'));
        for (const skill of ['zui', 'zui-build']) {
            const directory = Path.join(root, 'skills', skill, 'references/ai');
            const file = Path.join(directory, 'lib/demo/ai.md');
            const text = await fs.readFile(file, 'utf8');
            expect(await checkAiLinks(text, file, directory)).toEqual([]);
            expect(text).toContain(`https://github.com/easysoft/zui/blob/${revision}/lib/demo/src/main.ts`);
            expect(text).toContain('[共享参考](../core/ai.md#setup)');
            expect(text).toContain('```md\n## fake-section\n[src](src/main.ts)\n```');
            const {stdout, stderr} = await exec(process.execPath, [Path.join(directory, 'read.mjs'), '--lib', 'demo', '--section', 'vanilla', '--entry', 'vanilla-demo'], {cwd: directory});
            expect(stderr).toBe('');
            expect(stdout).toContain('中文 😀');
            expect(stdout).toContain('### vanilla-demo');
            expect(stdout).not.toContain('## preact');
            expect(stdout).toContain(skill === 'zui-build' ? '内置运行版本 3.0.0：与文档版本不同' : '运行版本未知');
            const matching = await exec(process.execPath, [Path.join(directory, 'read.mjs'), '--lib', 'demo', '--section', 'setup', '--runtime-version', '3.1.0'], {cwd: directory});
            expect(matching.stdout).toContain('版本号相同，构建内容和 API 行为仍未验证');
        }
    });

    it('detects source drift, preserves capture provenance across unrelated commits, and checks without writing', async () => {
        await exportAiReferences(root);
        const manifest = Path.join(root, 'skills/zui/references/ai/manifest.json');
        const initial = await fs.readFile(manifest, 'utf8');
        const before = await fs.stat(manifest);
        await fs.outputFile(Path.join(root, 'notes.txt'), 'unrelated');
        await git('add', 'notes.txt');
        await git('-c', 'user.name=Fixture', '-c', 'user.email=fixture@example.invalid', '-c', 'commit.gpgsign=false', 'commit', '-m', 'unrelated');
        expect(await exportAiReferences(root, true)).toEqual([]);
        expect((await fs.stat(manifest)).mtimeMs).toBe(before.mtimeMs);
        await exportAiReferences(root);
        expect(await fs.readFile(manifest, 'utf8')).toBe(initial);
        await fs.appendFile(Path.join(root, 'lib/demo/src/main.ts'), 'export const another = 2;\n');
        expect((await exportAiReferences(root, true)).join('\n')).toContain('manifest.json');
        expect(await fs.readFile(manifest, 'utf8')).toBe(initial);
        await exportAiReferences(root);
        expect((await fs.readJSON(manifest)).source.modified).toBe(true);
        await git('add', 'lib/demo/src/main.ts');
        await git('-c', 'user.name=Fixture', '-c', 'user.email=fixture@example.invalid', '-c', 'commit.gpgsign=false', 'commit', '-m', 'captured source');
        expect(await exportAiReferences(root, true)).toEqual([]);
    });

    it('rejects invalid selections, stale documents and changed runtime manifests', async () => {
        await exportAiReferences(root);
        const directory = Path.join(root, 'skills/zui-build/references/ai');
        const reader = Path.join(directory, 'read.mjs');
        for (const args of [
            ['--lib', '../demo'], ['--lib', 'missing'], ['--section', 'setup'], ['--lib', 'demo', '--entry', 'vanilla-demo'],
            ['--lib', 'demo', '--section', 'preact', '--entry', 'vanilla-demo'], ['--runtime-version', '^3.0.0'], ['--unknown', 'value'],
        ]) {
            await expect(exec(process.execPath, [reader, ...args], {cwd: directory})).rejects.toMatchObject({code: 1});
        }
        const documentFile = Path.join(directory, 'lib/demo/ai.md');
        await fs.appendFile(documentFile, 'changed');
        await expect(exec(process.execPath, [reader, '--lib', 'demo'], {cwd: directory})).rejects.toMatchObject({code: 1, stderr: expect.stringContaining('参考内容与清单不一致')});
        await exportAiReferences(root);
        await fs.appendFile(Path.join(directory, 'catalog.json'), '\n');
        await expect(exec(process.execPath, [reader, '--lib', 'demo'], {cwd: directory})).rejects.toMatchObject({code: 1, stderr: expect.stringContaining('提取目录与清单不一致')});
        await exportAiReferences(root);
        await fs.outputJSON(Path.join(root, 'skills/zui-build/assets/vendor/zui-3.0.0/manifest.json'), {version: '3.2.0'});
        await expect(exec(process.execPath, [reader, '--lib', 'demo'], {cwd: directory})).rejects.toMatchObject({code: 1, stderr: expect.stringContaining('运行资源清单已变化')});
        expect((await exportAiReferences(root, true)).join('\n')).toContain('已过期');
    });

    it('checks unchanged exports in a shallow CI clone without the captured commit', async () => {
        await exportAiReferences(root);
        const manifest = await fs.readJSON(Path.join(root, 'skills/zui/references/ai/manifest.json'));
        await git('add', 'skills');
        await git('-c', 'user.name=Fixture', '-c', 'user.email=fixture@example.invalid', '-c', 'commit.gpgsign=false', 'commit', '-m', 'export references');
        const checkout = Path.join(root, 'shallow-checkout');
        await exec('git', ['clone', '--depth', '1', pathToFileURL(root).href, checkout]);
        await expect(exec('git', ['-C', checkout, 'cat-file', '-e', manifest.source.revision])).rejects.toMatchObject({code: 1});
        expect(await exportAiReferences(checkout, true)).toEqual([]);
    });

    it('preserves the previous export when source validation fails', async () => {
        await exportAiReferences(root);
        const file = Path.join(root, 'skills/zui/references/ai/lib/demo/ai.md');
        const previous = await fs.readFile(file, 'utf8');
        await fs.writeFile(Path.join(root, 'lib/demo/ai.md'), '# broken');
        await expect(exportAiReferences(root)).rejects.toThrow('二级章节');
        expect(await fs.readFile(file, 'utf8')).toBe(previous);
    });

    it('checks both destinations before writing and rejects symlink exports', async () => {
        await exportAiReferences(root);
        const original = Path.join(root, 'skills/zui/references/ai/manifest.json');
        const previous = await fs.readFile(original, 'utf8');
        const second = Path.join(root, 'skills/zui-build/references/ai');
        const saved = Path.join(root, 'saved');
        await fs.move(second, saved);
        await fs.symlink(saved, second);
        await fs.appendFile(Path.join(root, 'lib/demo/src/main.ts'), 'export const changed = true;\n');
        await expect(exportAiReferences(root)).rejects.toThrow('符号链接');
        expect(await fs.readFile(original, 'utf8')).toBe(previous);
        expect(await fs.pathExists(Path.join(saved, 'manifest.json'))).toBe(true);
    });
});

it('rewrites inline/image/reference destinations while leaving code examples untouched', () => {
    const source = '[source](src/main.ts "title") ![image](image.svg)\n\n[reference][id]\n\n[id]: <src/main.ts>\n\n`[code](src/main.ts)`\n\n```md\n[fenced](src/main.ts)\n```\n\n    [indented](src/main.ts)\n';
    const output = rewriteReferenceLinks(source, new Map([['src/main.ts', 'https://example.invalid/pinned/src/main.ts'], ['image.svg', 'https://example.invalid/pinned/image.svg']]));
    expect(output).toContain('[source](<https://example.invalid/pinned/src/main.ts> "title")');
    expect(output).toContain('![image](<https://example.invalid/pinned/image.svg>)');
    expect(output).toContain('[id]: <https://example.invalid/pinned/src/main.ts>');
    expect(output).toContain('`[code](src/main.ts)`');
    expect(output).toContain('```md\n[fenced](src/main.ts)\n```');
    expect(output).toContain('    [indented](src/main.ts)');
});
