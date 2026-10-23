import Path from 'node:path';
import {tmpdir} from 'node:os';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import fs from 'fs-extra';
import {afterEach, beforeEach, describe, expect, it} from 'vitest';
import {AI_SECTIONS, extractAiDocument, incompleteAiContent, markdownAnchors, markdownLinks, parseAiDocument} from '../../scripts/ai/document';
import {buildAiIndex, checkAiCatalog, checkAiLinks, readAiCatalog, renderAiIndex} from '../../scripts/ai/catalog';
import {parseAiArgs, runAiCli} from '../../scripts/ai';

function entry(id = 'vanilla-demo', meta: Record<string, unknown> = {name: 'Demo', summary: '创建示例组件。'}, body = '#### 示例\n\n```js\nnew Demo();\n```\n'): string {
    return `### ${id}\n\n\`\`\`json\n${JSON.stringify(meta)}\n\`\`\`\n\n${body}`;
}

function document(library = 'demo', bodies: Partial<Record<typeof AI_SECTIONS[number], string>> = {}): string {
    return `# Demo\n\n${AI_SECTIONS.map(id => `## ${id}\n\n${bodies[id] ?? (id === 'meta' ? `\`\`\`json\n${JSON.stringify({schemaVersion: 1, library, summary: '示例组件。', keywords: ['示例', 'demo']})}\n\`\`\`` : '无。')}\n\n`).join('')}`;
}

function parsed(source: string) {
    const result = parseAiDocument(source, 'demo');
    expect(result.issues).toEqual([]);
    return result.document!;
}

describe('AI Markdown structure and exact extraction', () => {
    it('ignores headings inside fences and blockquotes and retains source bytes including CRLF', () => {
        const vanilla = entry('vanilla-demo', undefined, '#### 示例\n\n````md\n## phantom\n### phantom-entry\n```json\n{}\n```\n````\n\n> ## quoted\n> ### quoted-entry\n');
        const source = document('demo', {vanilla}).replace(/\n/g, '\r\n');
        const doc = parsed(source);
        expect(doc.entries.map(item => item.id)).toEqual(['vanilla-demo']);
        expect(extractAiDocument(doc)).toBe(source);
        expect(extractAiDocument(doc, 'vanilla')).toBe(source.slice(source.indexOf('## vanilla\r\n'), source.indexOf('## preact\r\n')));
        expect(extractAiDocument(doc, 'vanilla', 'vanilla-demo')).toBe(source.slice(source.indexOf('### vanilla-demo'), source.indexOf('## preact\r\n')));
    });

    it('stops entry extraction at the next entry while retaining all subheadings', () => {
        const first = entry();
        const second = entry('vanilla-other');
        const doc = parsed(document('demo', {vanilla: `${first}\n${second}`}));
        expect(extractAiDocument(doc, 'vanilla', 'vanilla-demo')).toBe(`${first}\n`);
        expect(() => extractAiDocument(doc, 'missing')).toThrow('没有章节');
        expect(() => extractAiDocument(doc, 'preact', 'vanilla-demo')).toThrow('没有条目');
        expect(() => extractAiDocument(doc, undefined, 'vanilla-demo')).toThrow('--section');
    });

    it.each([
        ['missing H1', (source: string) => source.replace('# Demo\n', '')],
        ['multiple H1', (source: string) => `${source}# Extra\n`],
        ['missing section', (source: string) => source.replace('## preact\n\n无。\n\n', '')],
        ['repeated section', (source: string) => source.replace('## preact', '## vanilla')],
        ['reordered sections', (source: string) => source.replace('## overview', '## placeholder').replace('## setup', '## overview').replace('## placeholder', '## setup')],
        ['invalid entry ID', (source: string) => source.replace('### vanilla-demo', '### Bad_ID')],
        ['duplicate entry ID', (source: string) => source.replace('## preact\n\n无。', `## preact\n\n${entry()}`)],
        ['entry conflicts with earlier H4 anchor', (source: string) => source.replace('### vanilla-demo', '#### vanilla-demo\n\n### vanilla-demo')],
        ['section conflicts with H1 anchor', (source: string) => source.replace('# Demo', '# meta')],
        ['entry conflicts with section', (source: string) => source.replace('### vanilla-demo', '### vanilla')],
        ['bad JSON', (source: string) => source.replace('"schemaVersion":1', 'schemaVersion:1')],
        ['wrong schema', (source: string) => source.replace('"schemaVersion":1', '"schemaVersion":2')],
        ['wrong library', (source: string) => source.replace('"library":"demo"', '"library":"other"')],
        ['bad keywords', (source: string) => source.replace('"keywords":["示例","demo"]', '"keywords":"demo"')],
        ['meta not first block', (source: string) => source.replace('## meta\n\n', '## meta\n\nProse\n\n')],
        ['additional meta JSON', (source: string) => source.replace('## overview', '```json\n{}\n```\n\n## overview')],
        ['additional meta prose', (source: string) => source.replace('## overview', 'Extra prose.\n\n## overview')],
        ['empty section', (source: string) => source.replace('## setup\n\n无。', '## setup')],
        ['missing entry summary', (source: string) => source.replace('"summary":"创建示例组件。"', '"summary":""')],
        ['entry JSON not immediate', (source: string) => source.replace('### vanilla-demo\n\n', '### vanilla-demo\n\nProse\n\n')],
    ])('rejects %s', (_name, transform) => {
        const result = parseAiDocument(transform(document('demo', {vanilla: entry()})), 'demo');
        expect(result.document).toBeUndefined();
        expect(result.issues.length).toBeGreaterThan(0);
    });

    it.each(['', '\n\n', '#### Example\n', '```js\n\n```\n'])('rejects entries without a nonempty body (%j)', (body) => {
        expect(parseAiDocument(document('demo', {vanilla: entry('vanilla-demo', undefined, body)}), 'demo').issues.join('\n')).toContain('必须提供非空正文');
    });

    it('requires an enumerated CSS role and accepts all four roles', () => {
        for (const role of ['component', 'js-component', 'utility', 'helper']) {
            expect(parseAiDocument(document('demo', {css: entry('css-demo', {name: '.demo', summary: '示例样式。', role})}), 'demo').issues).toEqual([]);
        }
        for (const role of [undefined, 'arbitrary']) {
            const result = parseAiDocument(document('demo', {css: entry('css-demo', {name: '.demo', summary: '示例样式。', role})}), 'demo');
            expect(result.issues.join('\n')).toContain('CSS role');
        }
    });

    it('does not mistake JSX attribute objects or todo data for template placeholders', () => {
        expect(incompleteAiContent('attrs={{\'aria-label\': \'关闭\'}}')).toBe(false);
        expect(incompleteAiContent('const item = {todo: \'write docs\'};')).toBe(false);
        expect(incompleteAiContent('{{LIB_NAME}}')).toBe(true);
        expect(incompleteAiContent('TODO: document the options')).toBe(true);
    });

    it('uses Markdown tokens for links and the existing anchor plugin slug convention', () => {
        expect(markdownLinks('[reference][id]\n\n![image](image.svg)\n\n[id]: ../ai.md#demo\n\n```md\n[ignored](missing.md)\n```')).toEqual(['../ai.md#demo', 'image.svg']);
        expect([...markdownAnchors('# Hello World\n\n## 中文标题\n\n## Hello World')]).toEqual(['hello-world', encodeURIComponent('中文标题'), 'hello-world-1']);
    });
});

describe('AI catalog and CLI', () => {
    let root: string;
    const script = Path.resolve(import.meta.dirname, '../../scripts/ai/index.ts');
    const execFileAsync = promisify(execFile);

    async function addLibrary(id: string, options: {type?: string; wip?: boolean; zui?: object; markdown?: string | false} = {}) {
        await fs.outputJSON(Path.join(root, 'lib', id, 'package.json'), {
            name: `@zui/${id}`,
            version: '1.0.0',
            wip: options.wip,
            zui: {type: options.type ?? 'component', ...options.zui},
        });
        if (options.markdown !== false) {
            await fs.outputFile(Path.join(root, 'lib', id, 'ai.md'), options.markdown ?? document(id));
        }
    }

    beforeEach(async () => {
        root = await fs.mkdtemp(Path.join(tmpdir(), 'zui-ai-docs-'));
        await addLibrary('demo', {markdown: document('demo', {vanilla: entry()})});
    });

    afterEach(async () => {
        await fs.remove(root);
    });

    it('discovers built-in libraries without caches, preserves states and separately reports top-level wip', async () => {
        await addLibrary('z-last', {type: 'config'});
        await addLibrary('a-first', {zui: {wip: true, separately: true, notReady: true}});
        await addLibrary('excluded', {wip: true});
        await fs.outputJSON(Path.join(root, 'exts/private/package.json'), {name: '@example/private', zui: {type: 'config'}});
        const catalog = await readAiCatalog(root);
        expect(catalog.libraries.map(item => item.id)).toEqual(['z-last', 'a-first', 'demo']);
        expect(catalog.excluded).toEqual(['excluded']);
        const index = renderAiIndex(catalog);
        expect(index).toContain('`wip`、`separately`、`notReady`');
        expect(index).toContain('lib/demo/ai.md#vanilla-demo');
        expect(index).not.toContain(root);
        expect(index).not.toContain('new Demo');
        expect(index).not.toContain('@example/private');
        expect(await fs.pathExists(Path.join(root, '.cache'))).toBe(false);
    });

    it('generates deterministic content, checks byte equality and does not write during check', async () => {
        await buildAiIndex(root);
        const file = Path.join(root, 'ai.md');
        const expected = await fs.readFile(file, 'utf8');
        expect(await checkAiCatalog(root)).toEqual([]);
        await buildAiIndex(root);
        expect(await fs.readFile(file, 'utf8')).toBe(expected);
        await fs.appendFile(file, '\n');
        const before = await fs.stat(file);
        expect((await checkAiCatalog(root)).join('\n')).toContain('已过期');
        expect((await fs.stat(file)).mtimeMs).toBe(before.mtimeMs);
        expect(await fs.readFile(file, 'utf8')).toBe(`${expected}\n`);
    });

    it('reports missing documents without emitting dead links and fails check', async () => {
        await addLibrary('missing', {markdown: false});
        await buildAiIndex(root);
        const index = await fs.readFile(Path.join(root, 'ai.md'), 'utf8');
        expect(index).toContain('缺少文档：`missing`');
        expect(index).not.toContain('(lib/missing/ai.md)');
        expect((await checkAiCatalog(root)).join('\n')).toContain('lib/missing/ai.md: 文档缺失');
        expect((await runAiCli(['check'], root)).code).toBe(1);
        await expect(runAiCli(['read', '--lib', 'missing'], root)).rejects.toThrow('缺少 ai.md');
    });

    it('does not overwrite the index when existing documentation is structurally invalid', async () => {
        const target = Path.join(root, 'ai.md');
        await fs.outputFile(target, 'preserved index');
        await fs.writeFile(Path.join(root, 'lib/demo/ai.md'), '# broken');
        await expect(buildAiIndex(root)).rejects.toThrow('二级章节');
        expect(await fs.readFile(target, 'utf8')).toBe('preserved index');
        expect((await fs.readdir(root)).filter(name => name.endsWith('.tmp'))).toEqual([]);
    });

    it('rejects a symlink output without changing its destination', async () => {
        const target = Path.join(root, 'target.md');
        await fs.writeFile(target, 'preserved');
        await fs.symlink(target, Path.join(root, 'ai.md'));
        await expect(buildAiIndex(root)).rejects.toThrow('符号链接');
        expect(await fs.readFile(target, 'utf8')).toBe('preserved');
    });

    it('validates local targets, images and Markdown anchors without contacting remote URLs', async () => {
        await fs.outputFile(Path.join(root, 'readme.md'), '# Hello World\n\n## 中文标题');
        await fs.outputFile(Path.join(root, 'image.svg'), '<svg/>');
        const file = Path.join(root, 'lib/demo/ai.md');
        const valid = '[local](../../readme.md#hello-world) [中文](../../readme.md#%E4%B8%AD%E6%96%87%E6%A0%87%E9%A2%98) [self](#setup) ![image](../../image.svg) [remote](https://invalid.invalid/no-request)';
        expect(await checkAiLinks(valid, file, root)).toEqual([]);
        const invalid = '[missing](missing.md) [anchor](../../readme.md#bad) [self](#bad) [outside](../../../outside.md) [absolute](/tmp/missing) ![image](missing.svg)';
        const issues = await checkAiLinks(invalid, file, root);
        expect(issues).toHaveLength(6);
        expect(issues.filter(issue => issue.includes('锚点不存在'))).toHaveLength(2);
        expect(issues.filter(issue => issue.includes('仓库内的相对路径'))).toHaveLength(2);
    });

    it('check reports incomplete content and bad links alongside stale index', async () => {
        await fs.writeFile(Path.join(root, 'lib/demo/ai.md'), document('demo', {overview: '待核实：TODO {{summary}}。\n\n[bad](#missing)'}));
        const issues = await checkAiCatalog(root);
        expect(issues.join('\n')).toContain('包含待核实内容');
        expect(issues.join('\n')).toContain('锚点不存在');
        expect(issues.join('\n')).toContain('全局索引缺失');
    });

    it.each([
        [], ['unknown'], ['read'], ['read', '--lib', '../demo'], ['read', '--lib', '/tmp/demo'],
        ['read', '--lib', 'demo', '--entry', 'vanilla-demo'], ['read', '--lib', 'demo', '--unknown', 'value'],
        ['read', '--lib', 'demo', '--lib', 'demo'], ['build', '--lib', 'demo'], ['read', '--lib'],
    ])('rejects invalid CLI arguments %j', (...args) => {
        expect(() => parseAiArgs(args)).toThrow();
    });

    it('returns precise read results, clear lookup failures and nonzero process status', async () => {
        const source = await fs.readFile(Path.join(root, 'lib/demo/ai.md'), 'utf8');
        expect(await runAiCli(['read', '--lib', 'demo'], root)).toEqual({code: 0, output: source});
        expect((await runAiCli(['read', '--lib', 'demo', '--section', 'vanilla', '--entry', 'vanilla-demo'], root)).output).toBe(extractAiDocument(parsed(source), 'vanilla', 'vanilla-demo'));
        await expect(runAiCli(['read', '--lib', 'unknown'], root)).rejects.toThrow('没有发现内置库');
        await expect(runAiCli(['read', '--lib', 'demo', '--section', 'unknown'], root)).rejects.toThrow('没有章节');
        await expect(runAiCli(['read', '--lib', 'demo', '--section', 'vanilla', '--entry', 'unknown'], root)).rejects.toThrow('没有条目');
        await expect(execFileAsync(process.execPath, ['--import', import.meta.resolve('tsx'), script, 'read', '--lib', '../demo'], {cwd: root})).rejects.toMatchObject({code: 1});
        const result = await execFileAsync(process.execPath, ['--import', import.meta.resolve('tsx'), script, 'read', '--lib', 'demo'], {cwd: root});
        expect(result.stdout).toBe(source);
        expect((await runAiCli(['--help'], root)).output).toContain('用法');
    });
});
