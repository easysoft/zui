import Path from 'node:path';
import {randomUUID} from 'node:crypto';
import fs from 'fs-extra';
import {getLibs} from '../libs/query';
import {libTypeOrders} from '../libs/lib-type';
import type {LibInfo} from '../libs/lib-info';
import {incompleteAiContent, markdownAnchors, markdownLinks, parseAiDocument, type AiDocument} from './document';

export interface AiLibrary {
    id: string;
    lib: LibInfo;
    document?: AiDocument;
}

export interface AiCatalog {
    root: string;
    libraries: AiLibrary[];
    excluded: string[];
    issues: string[];
}

export async function readAiCatalog(root = process.cwd()): Promise<AiCatalog> {
    root = Path.resolve(root);
    const libraries: AiLibrary[] = [];
    const issues: string[] = [];
    const libs = Object.values(await getLibs('buildIn', {root, cache: false}));
    libs.sort((a, b) => libTypeOrders[a.zui.type] - libTypeOrders[b.zui.type] || compare(Path.basename(a.zui.path), Path.basename(b.zui.path)));
    for (const lib of libs) {
        const id = Path.basename(lib.zui.path);
        const file = Path.join(lib.zui.path, 'ai.md');
        const library: AiLibrary = {id, lib};
        if (await fs.pathExists(file)) {
            const result = parseAiDocument(await fs.readFile(file, 'utf8'), id);
            issues.push(...result.issues.map(issue => `lib/${id}/ai.md: ${issue}`));
            library.document = result.document;
        }
        libraries.push(library);
    }
    const excluded: string[] = [];
    for (const entry of await fs.readdir(Path.join(root, 'lib'), {withFileTypes: true})) {
        if (!entry.isDirectory()) {
            continue;
        }
        const file = Path.join(root, 'lib', entry.name, 'package.json');
        if (await fs.pathExists(file)) {
            const manifest = await fs.readJSON(file) as {wip?: boolean};
            if (manifest.wip) {
                excluded.push(entry.name);
            }
        }
    }
    return {root, libraries, excluded: excluded.sort(compare), issues};
}

function compare(a: string, b: string): number {
    return a < b ? -1 : a > b ? 1 : 0;
}

function text(value: string): string {
    return value.replace(/[\\`*_[\]<>|]/g, character => `\\${character}`).replace(/[\r\n]+/g, ' ');
}

export function renderAiIndex(catalog: AiCatalog): string {
    const available = catalog.libraries.filter(library => library.document).length;
    const lines = [
        '# ZUI AI 使用索引',
        '',
        '<!-- 本文件由 pnpm ai:build 自动生成，请修改 lib/<name>/ai.md 后重新生成。 -->',
        '',
        '本索引用于查找 ZUI 内置库及其主要能力。先按场景和关键词选择库，再读取库级 `ai.md` 中的入口、参数、示例和约束。文档描述当前仓库源码，不能据此推定已经发布的版本具有相同行为。',
        '',
        '## 使用方式',
        '',
        '- `pnpm ai:read --lib menu`：读取整库使用参考。',
        '- `pnpm ai:read --lib menu --section vanilla`：读取固定章节。',
        '- `pnpm ai:read --lib menu --section vanilla --entry vanilla-menu`：读取单个条目。',
        '- `pnpm ai:build` 更新索引；`pnpm ai:check` 只读检查结构、链接、覆盖和索引同步状态。',
        '',
        '消费环境须按各库 `setup` 章节确认：`browser` 使用已加载的全局 `zui`；`npm` 以目标发布包的真实导出为准；`workspace` 使用源码工作区的公开入口。`@zui/*` 路径、Preact 入口、独立插件和自定义元素实现文件不能自动视为 npm 入口或已注册能力。',
        '',
        '## 文档覆盖',
        '',
        `已发现 ${catalog.libraries.length} 个内置库，${available} 个具有结构有效的使用参考，${catalog.libraries.length - available} 个缺少参考。仅收录内置库，不包含本机 exts。`,
        '',
        '状态按清单分别标记：`wip` 表示默认全量构建排除；`separately` 表示独立使用、默认全量构建排除；`notReady` 表示使用 `--exclude-not-ready` 时排除。未标记不等于已完成所有运行验收。',
        '',
    ];
    const missing = catalog.libraries.filter(library => !library.document);
    if (missing.length) {
        lines.push(`缺少文档：${missing.map(library => `\`${library.id}\``).join('、')}。`, '');
    }
    lines.push(catalog.excluded.length ? `顶层 package.json.wip 排除项（不计入上述发现范围）：${catalog.excluded.map(id => `\`${id}\``).join('、')}。` : '顶层 package.json.wip 排除项：无。', '');
    let previousType = '';
    for (const {id, lib, document} of catalog.libraries) {
        if (lib.zui.type !== previousType) {
            previousType = lib.zui.type;
            lines.push(`## ${previousType}`, '');
        }
        const path = `lib/${id}/ai.md`;
        const flags = (['wip', 'separately', 'notReady'] as const).filter(flag => lib.zui[flag]);
        lines.push(`### ${id}`, '', `包：\`${text(lib.name)}\`；状态：${flags.length ? flags.map(flag => `\`${flag}\``).join('、') : '无额外构建标记'}。`, '');
        if (!document) {
            lines.push('缺少 `ai.md`，暂不提供使用入口链接。', '');
            continue;
        }
        lines.push(`[使用参考](${path}) — ${text(document.meta.summary)}`, '', `关键词：${document.meta.keywords.map(text).join('、') || '无'}。`, '');
        for (const entry of document.entries) {
            lines.push(`- [${text(entry.meta.name)}](${path}#${entry.id})（${entry.section}${entry.meta.role ? ` / ${entry.meta.role}` : ''}）：${text(entry.meta.summary)}${entry.meta.keywords?.length ? ` 关键词：${entry.meta.keywords.map(text).join('、')}。` : ''}`);
        }
        if (document.entries.length) {
            lines.push('');
        }
    }
    return `${lines.join('\n').trimEnd()}\n`;
}

export async function checkAiLinks(source: string, file: string, root: string): Promise<string[]> {
    const issues: string[] = [];
    const anchorCache = new Map<string, Set<string>>();
    for (const link of new Set(markdownLinks(source))) {
        if (/^[a-z][a-z0-9+.-]*:/i.test(link) || link.startsWith('//')) {
            continue;
        }
        let pathname: string;
        let fragment: string;
        try {
            const hash = link.indexOf('#');
            pathname = decodeURIComponent((hash < 0 ? link : link.slice(0, hash)).split('?')[0]);
            fragment = hash < 0 ? '' : decodeURIComponent(link.slice(hash + 1));
        } catch {
            issues.push(`链接编码无效：${link}`);
            continue;
        }
        const target = pathname ? Path.resolve(Path.dirname(file), pathname) : file;
        const relative = Path.relative(root, target);
        if (Path.isAbsolute(pathname) || relative === '..' || relative.startsWith(`..${Path.sep}`)) {
            issues.push(`本地链接必须是仓库内的相对路径：${link}`);
            continue;
        }
        if (!await fs.pathExists(target)) {
            issues.push(`本地链接目标不存在：${link}`);
            continue;
        }
        if (fragment && /\.md$/i.test(target)) {
            let anchors = anchorCache.get(target);
            if (!anchors) {
                anchors = markdownAnchors(await fs.readFile(target, 'utf8'));
                anchorCache.set(target, anchors);
            }
            if (!anchors.has(fragment) && !anchors.has(encodeURIComponent(fragment))) {
                issues.push(`Markdown 链接锚点不存在：${link}`);
            }
        }
    }
    return issues;
}

export async function buildAiIndex(root = process.cwd()): Promise<AiCatalog> {
    const catalog = await readAiCatalog(root);
    if (catalog.issues.length) {
        throw new Error(catalog.issues.join('\n'));
    }
    const output = Path.join(catalog.root, 'ai.md');
    if (await fs.pathExists(output) && (await fs.lstat(output)).isSymbolicLink()) {
        throw new Error('根目录 ai.md 不能是符号链接。');
    }
    const temporary = Path.join(catalog.root, `.ai-${randomUUID()}.tmp`);
    try {
        await fs.writeFile(temporary, renderAiIndex(catalog), {flag: 'wx'});
        await fs.rename(temporary, output);
    } finally {
        await fs.remove(temporary);
    }
    return catalog;
}

export async function checkAiCatalog(root = process.cwd()): Promise<string[]> {
    const catalog = await readAiCatalog(root);
    const issues = [...catalog.issues];
    for (const {id, document} of catalog.libraries) {
        const file = Path.join(catalog.root, 'lib', id, 'ai.md');
        if (!document) {
            if (!await fs.pathExists(file)) {
                issues.push(`lib/${id}/ai.md: 文档缺失。`);
            }
            continue;
        }
        if (incompleteAiContent(document.source)) {
            issues.push(`lib/${id}/ai.md: 包含待核实内容或 TODO/TBD/FIXME/模板占位符。`);
        }
        issues.push(...(await checkAiLinks(document.source, file, catalog.root)).map(issue => `lib/${id}/ai.md: ${issue}`));
    }
    const indexPath = Path.join(catalog.root, 'ai.md');
    if (!await fs.pathExists(indexPath) || await fs.readFile(indexPath, 'utf8') !== renderAiIndex(catalog)) {
        issues.push('ai.md: 全局索引缺失或已过期，请运行 pnpm ai:build。');
    }
    return issues;
}
