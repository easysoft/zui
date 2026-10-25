import Path from 'node:path';
import {execFile} from 'node:child_process';
import {createHash, randomUUID} from 'node:crypto';
import {promisify} from 'node:util';
import fs from 'fs-extra';
import MarkdownIt from 'markdown-it';
import {checkAiCatalog, readAiCatalog, renderAiIndex} from './catalog';
import {markdownAnchors, markdownLinks, parseAiDocument} from './document';

const execFileAsync = promisify(execFile);
const markdown = new MarkdownIt();
const repository = 'https://github.com/easysoft/zui';
const skills = ['zui', 'zui-build'] as const;
const readerFile = Path.join(import.meta.dirname, 'read-portable.mjs');
const digest = (content: string | Buffer) => `sha256-${createHash('sha256').update(content).digest('hex')}`;
const json = (value: unknown) => `${JSON.stringify(value, null, 2)}\n`;

interface SourceSnapshot {
    kind: 'source-snapshot';
    repository: string;
    version: string;
    revision: string;
    contentHash: string;
    modified: boolean;
}

interface DocumentRecord {
    integrity: string;
    sections: Record<string, [number, number]>;
    entries: Record<string, [number, number]>;
}

interface ExportManifest {
    schemaVersion: 1;
    source: SourceSnapshot;
    compatibility: 'verify-target-runtime';
    bundledRuntime: {version: string; manifest: string; integrity: string} | null;
    catalogIntegrity: string;
}

async function git(root: string, args: string[]): Promise<string> {
    return (await execFileAsync('git', ['-C', root, ...args], {maxBuffer: 8 * 1024 * 1024})).stdout.trimEnd();
}

const isSourceInput = (file: string) => /^lib\/[^/]+\/(?:ai\.md$|package\.json$|src\/)/.test(file) || file.startsWith('config/');

async function sourceSnapshot(root: string, previous?: SourceSnapshot): Promise<SourceSnapshot> {
    const {version} = await fs.readJSON(Path.join(root, 'package.json')) as {version: string};
    const files = [...new Set((await git(root, ['ls-files', '-z', '--cached', '--others', '--exclude-standard', '--', 'lib', 'config'])).split('\0').filter(isSourceInput))].sort();
    const hash = createHash('sha256').update(version);
    for (const file of files) {
        hash.update(`\0${file}\0`);
        hash.update(await fs.pathExists(Path.join(root, file)) ? await fs.readFile(Path.join(root, file)) : '<deleted>');
    }
    const contentHash = `sha256-${hash.digest('hex')}`;
    // Preserve capture provenance across unrelated commits and after committing the captured edits.
    if (previous?.contentHash === contentHash && /^[a-f\d]{40,64}$/.test(previous.revision) && typeof previous.modified === 'boolean') {
        return {kind: 'source-snapshot', repository, version, revision: previous.revision, contentHash, modified: previous.modified};
    }
    const revision = await git(root, ['rev-parse', 'HEAD']);
    const changed = (await git(root, ['diff', '--name-only', revision, '--', 'lib', 'config'])).split('\n').some(isSourceInput);
    const untracked = (await git(root, ['ls-files', '--others', '--exclude-standard', '--', 'lib', 'config'])).split('\n').some(isSourceInput);
    const basePackage = JSON.parse(await git(root, ['show', `${revision}:package.json`])) as {version: string};
    return {kind: 'source-snapshot', repository, version, revision, contentHash, modified: changed || untracked || basePackage.version !== version};
}

/** Rewrite Markdown destinations while preserving fenced/indented code and inline code verbatim. */
export function rewriteReferenceLinks(source: string, replacements: Map<string, string>): string {
    const offsets = [0];
    for (const match of source.matchAll(/\n/g)) {
        offsets.push(match.index + 1);
    }
    const code = markdown.parse(source, {}).filter(token => ['fence', 'code_block'].includes(token.type) && token.map)
        .map(token => [offsets[token.map![0]], offsets[token.map![1]] ?? source.length]);
    const edits: {start: number; end: number; text: string}[] = [];
    const pattern = /(`+)[\s\S]*?\1(?!`)|\]\([\t \n]*|^[ \t]{0,3}\[[^\]\n]+\]:[\t \n]*/gm;
    for (let match; (match = pattern.exec(source));) {
        if (match[1] || code.some(([start, end]) => match.index >= start && match.index < end)) {
            continue;
        }
        const start = pattern.lastIndex;
        const destination = markdown.helpers.parseLinkDestination(source, start, source.length);
        if (!destination.ok) {
            continue;
        }
        const replacement = replacements.get(markdown.normalizeLink(destination.str));
        if (replacement) {
            edits.push({start, end: destination.pos, text: `<${replacement}>`});
        }
        pattern.lastIndex = destination.pos;
    }
    for (const edit of edits.reverse()) {
        source = source.slice(0, edit.start) + edit.text + source.slice(edit.end);
    }
    return source;
}

function checkPortableLinks(files: Map<string, string>): void {
    const anchors = new Map<string, Set<string>>();
    for (const [file, source] of files) {
        if (!file.endsWith('.md')) {
            continue;
        }
        for (const link of markdownLinks(source)) {
            if (/^[a-z][a-z\d+.-]*:/i.test(link) || link.startsWith('//')) {
                continue;
            }
            const [pathname, fragment] = link.split('#');
            const target = pathname ? Path.posix.normalize(Path.posix.join(Path.posix.dirname(file), decodeURIComponent(pathname.split('?')[0]))) : file;
            const content = files.get(target);
            if (content !== undefined && fragment && target.endsWith('.md') && !anchors.has(target)) {
                anchors.set(target, markdownAnchors(content));
            }
            if (content === undefined || (fragment && target.endsWith('.md') && !anchors.get(target)!.has(fragment) && !anchors.get(target)!.has(decodeURIComponent(fragment)))) {
                throw new Error(`导出参考链接未闭合：${file} -> ${link}`);
            }
        }
    }
}

async function renderExports(root: string): Promise<Map<string, Map<string, string>>> {
    const issues = await checkAiCatalog(root);
    if (issues.length) {
        throw new Error(issues.join('\n'));
    }
    const catalog = await readAiCatalog(root);
    const previousFile = Path.join(root, 'skills/zui/references/ai/manifest.json');
    const previous = await fs.pathExists(previousFile) ? await fs.readJSON(previousFile) as ExportManifest : undefined;
    const source = await sourceSnapshot(root, previous?.source);
    const knownDocuments = new Set(['ai.md', ...catalog.libraries.map(({id}) => `lib/${id}/ai.md`)]);
    const documents = new Map<string, string>();
    for (const {id, document} of catalog.libraries) {
        const file = `lib/${id}/ai.md`;
        const replacements = new Map<string, string>();
        for (const link of markdownLinks(document!.source)) {
            if (/^[a-z][a-z\d+.-]*:/i.test(link) || link.startsWith('//') || link.startsWith('#')) {
                continue;
            }
            const [pathname, fragment] = link.split('#');
            const target = Path.posix.normalize(Path.posix.join(Path.posix.dirname(file), decodeURIComponent(pathname.split('?')[0])));
            if (!knownDocuments.has(target)) {
                const encoded = target.split('/').map(encodeURIComponent).join('/');
                replacements.set(link, `${repository}/blob/${source.revision}/${encoded}${fragment ? `#${fragment}` : ''}`);
            }
        }
        documents.set(file, rewriteReferenceLinks(document!.source, replacements));
    }
    const exports = new Map<string, Map<string, string>>();
    for (const skill of skills) {
        const files = new Map<string, string>();
        const vendor = '../../assets/vendor/zui-3.0.0/manifest.json';
        const vendorSource = skill === 'zui-build' ? await fs.readFile(Path.join(root, 'skills', skill, 'references/ai', vendor), 'utf8') : null;
        const bundledRuntime = vendorSource ? {version: (JSON.parse(vendorSource) as {version: string}).version, manifest: vendor, integrity: digest(vendorSource)} : null;
        const boundary = `> 本参考描述 ZUI ${source.version} 源码快照，未经目标发布包验证。${bundledRuntime ? `本技能内置运行版本为 ${bundledRuntime.version}；即使版本号相同，也不能据此推定 API 一致。` : '先确认应用实际运行版本、导出、类型和 CSS。'} workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。`;
        for (const [file, content] of documents) {
            const end = content.indexOf('\n');
            files.set(file, `${content.slice(0, end)}\n\n${boundary}\n\n> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。${content.slice(end)}`);
        }
        const introduction = [
            '# 随包 ZUI AI 使用索引', '',
            '<!-- 由 pnpm ai:export 生成；维护仓库 lib/*/ai.md 后重新导出，不手工修改副本。 -->', '',
            boundary, '',
            `来源基线：\`${source.revision}\`；源码包含未提交变更：${source.modified ? '是，在线出处仅代表提交基线，随包文档对应清单中的内容摘要' : '否'}。[完整清单](manifest.json)。`, '',
            '## 离线读取', '',
            '直接打开本索引和库级 Markdown，或使用 Node（不需要 pnpm、安装依赖或源码仓库）：', '',
            '```sh',
            'node <skill-root>/references/ai/read.mjs --lib menu --section setup',
            'node <skill-root>/references/ai/read.mjs --lib menu --section vanilla --entry vanilla-menu',
            'node <skill-root>/references/ai/read.mjs --lib menu --section constraints --runtime-version 3.0.0',
            '```', '',
            '接入前同时读取 setup 和 constraints。版本不同或未知时，只将本参考用于定位候选能力；根据已安装包或内置资源核实后使用。版本号相同仍不能证明自定义构建、可选库、注册方式和 API 行为一致。没有可核实的运行依据时，不照搬源码专用或新版 API。', '',
        ];
        files.set('ai.md', renderAiIndex(catalog, introduction));
        files.set('read.mjs', await fs.readFile(readerFile, 'utf8'));
        const records: Record<string, DocumentRecord> = {};
        for (const [file, content] of files) {
            if (!file.endsWith('.md')) {
                continue;
            }
            const parsed = file === 'ai.md' ? undefined : parseAiDocument(content, Path.posix.basename(Path.posix.dirname(file)));
            if (parsed && !parsed.document) {
                throw new Error(`${file}: ${parsed.issues.join('\n')}`);
            }
            records[file] = {
                integrity: digest(content),
                sections: Object.fromEntries(parsed?.document?.sections.map(range => [range.id, [range.start, range.end]]) ?? []),
                entries: Object.fromEntries(parsed?.document?.entries.map(range => [`${range.section}/${range.id}`, [range.start, range.end]]) ?? []),
            };
        }
        const catalogSource = json(records);
        files.set('catalog.json', catalogSource);
        files.set('manifest.json', json({schemaVersion: 1, source, compatibility: 'verify-target-runtime', bundledRuntime, catalogIntegrity: digest(catalogSource)} satisfies ExportManifest));
        checkPortableLinks(files);
        exports.set(skill, files);
    }
    return exports;
}

async function fileList(directory: string, prefix = ''): Promise<string[]> {
    if (!await fs.pathExists(directory)) {
        return [];
    }
    const result: string[] = [];
    for (const entry of await fs.readdir(directory, {withFileTypes: true})) {
        const relative = `${prefix}${entry.name}`;
        if (entry.isSymbolicLink()) {
            throw new Error(`生成目录不能含符号链接：${Path.join(directory, entry.name)}`);
        }
        result.push(...(entry.isDirectory() ? await fileList(Path.join(directory, entry.name), `${relative}/`) : [relative]));
    }
    return result.sort();
}

export async function exportAiReferences(root = process.cwd(), check = false): Promise<string[]> {
    const exports = await renderExports(root);
    const issues: string[] = [];
    const existingFiles = new Map<string, string[]>();
    for (const skill of exports.keys()) {
        const output = Path.join(root, 'skills', skill, 'references/ai');
        if (await fs.pathExists(output) && (await fs.lstat(output)).isSymbolicLink()) {
            throw new Error(`生成目录不能是符号链接：${output}`);
        }
        existingFiles.set(skill, await fileList(output));
    }
    for (const [skill, files] of exports) {
        const output = Path.join(root, 'skills', skill, 'references/ai');
        const existing = existingFiles.get(skill)!;
        if (check) {
            for (const file of new Set([...existing, ...files.keys()])) {
                if (!files.has(file) || !existing.includes(file) || await fs.readFile(Path.join(output, file), 'utf8') !== files.get(file)) {
                    issues.push(`skills/${skill}/references/ai/${file}: 缺失、多余或已过期，请运行 pnpm ai:export。`);
                }
            }
            continue;
        }
        await fs.ensureDir(Path.dirname(output));
        const temporary = `${output}-${randomUUID()}.tmp`;
        const backup = `${temporary}.backup`;
        try {
            for (const [file, content] of files) {
                await fs.outputFile(Path.join(temporary, file), content);
            }
            const hadOutput = await fs.pathExists(output);
            if (hadOutput) {
                await fs.rename(output, backup);
            }
            try {
                await fs.rename(temporary, output);
            } catch (error) {
                if (hadOutput) {
                    await fs.rename(backup, output);
                }
                throw error;
            }
            await fs.remove(backup);
        } finally {
            await fs.remove(temporary);
        }
    }
    return issues;
}
