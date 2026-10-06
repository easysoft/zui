import {readFileSync} from 'node:fs';
import {dirname, resolve} from 'node:path';
import {describe, expect, it} from 'vitest';
import ts from 'typescript';

const scripts = resolve('lib/dtable/docs/lib/components');

// Read the actual documentation options without requiring the VitePress runtime.
function loadScript(file: string): Record<string, unknown> {
    const {outputText} = ts.transpileModule(readFileSync(file, 'utf8'), {compilerOptions: {module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022}});
    const compiled = {exports: {} as Record<string, unknown>};
    const require = (id: string) => id === 'vitepress' ? {withBase: (url: string) => url} : loadScript(resolve(dirname(file), id));
    new Function('require', 'module', 'exports', outputText)(require, compiled, compiled.exports);
    return compiled.exports;
}

type ExamplePage = {methods: {getExampleOptions: (id: string) => Record<string, unknown>}};
const pages = {
    index: loadScript(resolve(scripts, 'index.js')).default as ExamplePage,
    plugins: loadScript(resolve(scripts, 'plugins.js')).default as ExamplePage,
};

describe('documentation DTable example options', () => {
    it('keeps both complete copyable examples aligned with the preview configuration', () => {
        const markdown = readFileSync(resolve(scripts, 'index.md'), 'utf8');
        const snippets = [...markdown.matchAll(/```html\n([\s\S]*?)\n```/g)].map(match => match[1]);
        const page = pages.index;
        const serialize = (value: unknown) => JSON.parse(JSON.stringify(value, (_key, item) => typeof item === 'function' ? '[function]' : item));
        for (const id of ['dtable-basic', 'dtable-advanced']) {
            const snippet = snippets.find(code => code.includes(`new zui.DTable('#${id}'`))!;
            expect(snippet).toContain(`<div id="${id}"></div>`);
            let copied: Record<string, unknown> = {};
            new Function('zui', snippet.match(/<script>([\s\S]*?)<\/script>/)![1])({DTable: function (selector: string, options: Record<string, unknown>) {
                expect(selector).toBe(`#${id}`);
                copied = options;
            }});
            const preview = page.methods.getExampleOptions(id);
            expect(serialize(copied)).toEqual(serialize(preview));
            const getActions = (options: Record<string, unknown>) => (options.cols as {name: string; onRenderCell: (result: unknown[], info: unknown) => unknown}[]).find(col => col.name === 'actions')!;
            const row = {data: (preview.data as unknown[])[0]};
            expect(getActions(copied).onRenderCell([], {row, col: {name: 'actions'}})).toEqual(getActions(preview).onRenderCell([], {row, col: {name: 'actions'}}));
        }
    });

    it.each([
        {page: 'index', id: 'dtable-basic'},
        {page: 'plugins', id: 'dtable-cellspan'},
    ] as const)('reflows $page examples without mutating fixed column settings', ({page, id}) => {
        const options = pages[page].methods.getExampleOptions(id);
        expect(options.responsive).toBe(true);
        expect(options.scrollbarHover).toBe(false);
        const plugins = options.plugins as {name: string; beforeLayout: (this: {parent: {clientWidth: number}}, options: Record<string, unknown>) => {cols: {fixed: unknown}[]} | undefined}[];
        const responsive = plugins.find(plugin => plugin.name === 'docs-responsive')!;
        const columns = (options.cols as {fixed?: unknown}[]).map(col => ({...col}));
        expect(columns.some(col => col.fixed)).toBe(true);
        expect(responsive.beforeLayout.call({parent: {clientWidth: 310}}, options)?.cols).toEqual(columns.map(col => ({...col, fixed: false})));
        expect(responsive.beforeLayout.call({parent: {clientWidth: 800}}, options)).toBeUndefined();
        expect(options.cols).toEqual(columns);
    });
});
