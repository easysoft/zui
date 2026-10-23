import MarkdownIt from 'markdown-it';
import markdownItAnchor from 'markdown-it-anchor';
import type Token from 'markdown-it/lib/token.mjs';

export const AI_SECTIONS = ['meta', 'overview', 'setup', 'vanilla', 'preact', 'web-components', 'css', 'css-variables', 'javascript', 'types', 'recipes', 'constraints', 'references'] as const;
export type AiSectionId = typeof AI_SECTIONS[number];
export const AI_ID = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/;
export const CSS_ROLES = ['component', 'js-component', 'utility', 'helper'] as const;

export interface AiMeta {
    schemaVersion: 1;
    library: string;
    summary: string;
    keywords: string[];
}

export interface AiEntryMeta {
    name: string;
    summary: string;
    keywords?: string[];
    role?: typeof CSS_ROLES[number];
}

export interface AiRange {
    id: string;
    start: number;
    end: number;
}

export interface AiEntry extends AiRange {
    section: AiSectionId;
    meta: AiEntryMeta;
}

export interface AiDocument {
    source: string;
    meta: AiMeta;
    sections: AiRange[];
    entries: AiEntry[];
}

const markdown = new MarkdownIt({html: true});
const anchoredMarkdown = new MarkdownIt({html: true}).use(markdownItAnchor);

function object(value: unknown): value is Record<string, unknown> {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function nonempty(value: unknown): value is string {
    return typeof value === 'string' && value.trim().length > 0 && !/[\r\n]/.test(value);
}

function keywords(value: unknown): value is string[] {
    return Array.isArray(value) && value.every(nonempty);
}

function lineOffsets(source: string): number[] {
    const offsets = [0];
    for (const match of source.matchAll(/\r\n|\n|\r/g)) {
        offsets.push(match.index + match[0].length);
    }
    return offsets;
}

/** Parse only document-level headings; code fences and quoted headings cannot become API entries. */
export function parseAiDocument(source: string, library: string): {document?: AiDocument; issues: string[]} {
    const issues: string[] = [];
    const tokens = markdown.parse(source, {});
    const offsets = lineOffsets(source);
    const headings = tokens.flatMap((token, index) => token.type === 'heading_open' && token.level === 0 && token.map ? [{
        level: Number(token.tag.slice(1)),
        id: tokens[index + 1].content,
        start: offsets[token.map[0]],
        line: token.map[0] + 1,
        index,
    }] : []);
    const error = (line: number, message: string) => issues.push(`行 ${line}: ${message}`);
    if (headings.filter(heading => heading.level === 1).length !== 1 || tokens[0]?.tag !== 'h1') {
        issues.push('必须以唯一的一级标题开头。');
    }
    const sectionHeadings = headings.filter(heading => heading.level === 2);
    if (sectionHeadings.map(heading => heading.id).join(',') !== AI_SECTIONS.join(',')) {
        issues.push(`二级章节必须完整且按顺序出现：${AI_SECTIONS.join(', ')}。`);
    }
    const ids = new Set<string>();
    const anchoredHeadings = anchoredMarkdown.parse(source, {}).filter(token => token.type === 'heading_open' && token.level === 0);
    const anchorByLine = new Map(anchoredHeadings.map(token => [token.map?.[0], token.attrGet('id')]));
    const sections: AiRange[] = sectionHeadings.map((heading, index) => ({
        id: heading.id,
        start: heading.start,
        end: sectionHeadings[index + 1]?.start ?? source.length,
    }));
    for (const heading of headings) {
        if (heading.level === 2 || heading.level === 3) {
            if (!AI_ID.test(heading.id)) {
                error(heading.line, `标题 ID “${heading.id}” 必须是小写 ASCII 单词及连字符。`);
            }
            if (ids.has(heading.id)) {
                error(heading.line, `重复标题 ID “${heading.id}”。`);
            }
            ids.add(heading.id);
            if (anchorByLine.get(heading.line - 1) !== heading.id) {
                error(heading.line, `标题 ID “${heading.id}” 与其他标题生成的锚点冲突。`);
            }
        } else if (heading.level > 4) {
            error(heading.line, '仅允许一级至四级标题。');
        }
    }
    const jsonAfter = (heading: typeof headings[number]): Record<string, unknown> | undefined => {
        const token = tokens[heading.index + 3];
        if (token?.type !== 'fence' || token.level !== 0 || token.info.trim() !== 'json') {
            error(heading.line, `“${heading.id}” 后的第一个块必须是 JSON 代码围栏。`);
            return;
        }
        try {
            const value: unknown = JSON.parse(token.content);
            if (object(value)) {
                return value;
            }
            error(heading.line, '元信息必须是 JSON 对象。');
        } catch {
            error(heading.line, '元信息 JSON 无法解析。');
        }
    };
    const metaHeading = sectionHeadings.find(heading => heading.id === 'meta');
    const meta = metaHeading && jsonAfter(metaHeading);
    if (metaHeading) {
        const nextHeading = sectionHeadings.find(heading => heading.start > metaHeading.start);
        if (tokens.slice(metaHeading.index + 3, nextHeading?.index ?? tokens.length).length !== 1) {
            error(metaHeading.line, 'meta 章节只能包含一个 JSON 元信息块。');
        }
    }
    if (meta && (meta.schemaVersion !== 1 || meta.library !== library || !nonempty(meta.summary) || !keywords(meta.keywords))) {
        error(metaHeading.line, `meta 需要 schemaVersion: 1、library: "${library}"、非空单行 summary 与字符串数组 keywords。`);
    }
    for (const heading of sectionHeadings) {
        const nextToken = tokens[heading.index + 3];
        if (!nextToken || (nextToken.type === 'heading_open' && Number(nextToken.tag.slice(1)) <= 2)) {
            error(heading.line, `章节 “${heading.id}” 不能为空；没有对应能力时写“无。”。`);
        }
    }
    const entries: AiEntry[] = [];
    for (const [index, heading] of headings.entries()) {
        if (heading.level !== 3) {
            continue;
        }
        const section = sectionHeadings.findLast(item => item.start < heading.start)?.id;
        if (!section || section === 'meta' || !AI_SECTIONS.includes(section as AiSectionId)) {
            error(heading.line, '三级条目必须位于 meta 之外的已知章节。');
            continue;
        }
        const entryMeta = jsonAfter(heading);
        if (!entryMeta) {
            continue;
        }
        if (!nonempty(entryMeta.name) || !nonempty(entryMeta.summary) || (entryMeta.keywords !== undefined && !keywords(entryMeta.keywords))) {
            error(heading.line, '条目元信息需要非空单行 name、summary；keywords 如提供须为字符串数组。');
            continue;
        }
        if ((section === 'css' || entryMeta.role !== undefined) && !CSS_ROLES.includes(entryMeta.role as typeof CSS_ROLES[number])) {
            error(heading.line, `CSS role 必须是 ${CSS_ROLES.join(', ')} 之一。`);
        }
        const nextHeading = headings.slice(index + 1).find(item => item.level <= 3);
        const bodyTokens = tokens.slice(heading.index + 4, nextHeading?.index ?? tokens.length);
        if (!bodyTokens.some(token => !['heading_open', 'heading_close', 'inline'].includes(token.type) && (token.nesting === 1 || token.content.trim()))) {
            error(heading.line, '条目元信息之后必须提供非空正文，不能只有 JSON 或标题。');
        }
        entries.push({
            id: heading.id,
            section: section as AiSectionId,
            meta: entryMeta as unknown as AiEntryMeta,
            start: heading.start,
            end: nextHeading?.start ?? source.length,
        });
    }
    return issues.length || !meta ? {issues} : {document: {source, meta: meta as unknown as AiMeta, sections, entries}, issues};
}

export function extractAiDocument(document: AiDocument, section?: string, entry?: string): string {
    if (entry && !section) {
        throw new Error('--entry 必须同时指定 --section。');
    }
    if (!section) {
        return document.source;
    }
    const range = document.sections.find(item => item.id === section);
    if (!range) {
        throw new Error(`库 “${document.meta.library}” 没有章节 “${section}”。`);
    }
    if (!entry) {
        return document.source.slice(range.start, range.end);
    }
    const entryRange = document.entries.find(item => item.section === section && item.id === entry);
    if (!entryRange) {
        throw new Error(`库 “${document.meta.library}” 的章节 “${section}” 没有条目 “${entry}”。`);
    }
    return document.source.slice(entryRange.start, entryRange.end);
}

export function markdownLinks(source: string): string[] {
    const links: string[] = [];
    const visit = (tokens: Token[]) => {
        for (const token of tokens) {
            const target = token.type === 'link_open' ? token.attrGet('href') : token.type === 'image' ? token.attrGet('src') : null;
            if (target) {
                links.push(target);
            }
            if (token.children) {
                visit(token.children);
            }
        }
    };
    visit(markdown.parse(source, {}));
    return links;
}

export function markdownAnchors(source: string): Set<string> {
    return new Set(anchoredMarkdown.parse(source, {}).flatMap(token => token.type === 'heading_open' && token.attrGet('id') ? [token.attrGet('id')!] : []));
}

export function incompleteAiContent(source: string): boolean {
    return /待核实|待补充|待填写|\b(?:TODO|TBD|FIXME)\b|\{\{(?:LIB_NAME|LIBRARY|DISPLAY_NAME|SUMMARY|KEYWORDS|ENTRY_ID|ENTRY_NAME|ENTRY_SUMMARY|CSS_ROLE)\}\}/.test(source);
}
