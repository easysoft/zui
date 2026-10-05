import {readFileSync} from 'node:fs';
import {createRequire} from 'node:module';
import {dirname, resolve} from 'node:path';
import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';
import ts from 'typescript';

const requireDocs = createRequire(resolve('docs/package.json'));
const {createApp, h} = requireDocs('vue');
const scripts = resolve('lib/dtable/docs/lib/components');

// Run the actual documentation scripts with Vue while keeping VitePress URL handling local.
function loadScript(file: string): Record<string, unknown> {
    const {outputText} = ts.transpileModule(readFileSync(file, 'utf8'), {compilerOptions: {module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022}});
    const compiled = {exports: {} as Record<string, unknown>};
    const require = (id: string) => id === 'vitepress' ? {withBase: (url: string) => url} : loadScript(resolve(dirname(file), id));
    new Function('require', 'module', 'exports', outputText)(require, compiled, compiled.exports);
    return compiled.exports;
}

const pages = {
    index: loadScript(resolve(scripts, 'index.js')).default as object,
    plugins: loadScript(resolve(scripts, 'plugins.js')).default as object,
};
const mounted: {unmount: () => void}[] = [];
const ready: (() => void)[] = [];
const visible = new Set<string>();
const created: {element: HTMLElement; options: Record<string, unknown>; destroy: ReturnType<typeof vi.fn>}[] = [];

function mount(page: keyof typeof pages, ids: string[]) {
    const host = document.createElement('div');
    document.body.append(host);
    const app = createApp({...pages[page], render: () => h('div', {}, ids.map(id => h('div', {id})))});
    app.mount(host);
    mounted.push(app);
    return {host, unmount() {
        app.unmount();
        mounted.splice(mounted.indexOf(app), 1);
        host.remove();
    }};
}

function flushReady() {
    ready.splice(0).forEach(callback => callback());
}

beforeEach(() => {
    vi.useFakeTimers();
    visible.clear();
    ready.length = 0;
    created.length = 0;
    vi.stubGlobal('onZUIReady', (callback: () => void) => ready.push(callback));
    vi.stubGlobal('zui', {
        dom: {isVisible: (element: HTMLElement) => visible.has(element.id)},
        DTable: class {
            destroy = vi.fn();
            constructor(element: HTMLElement, options: Record<string, unknown>) {
                element.classList.add('dtable');
                created.push({element, options, destroy: this.destroy});
            }
        },
    });
});

afterEach(() => {
    mounted.splice(0).forEach(app => app.unmount());
    document.body.replaceChildren();
    vi.unstubAllGlobals();
    vi.useRealTimers();
});

describe('documentation DTable page lifecycle', () => {
    it('keeps both complete copyable examples aligned with the preview configuration', () => {
        const markdown = readFileSync(resolve(scripts, 'index.md'), 'utf8');
        const snippets = [...markdown.matchAll(/```html\n([\s\S]*?)\n```/g)].map(match => match[1]);
        const page = pages.index as {methods: {getExampleOptions: (id: string) => Record<string, unknown>}};
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

    it('leaves component-managed examples to their own mount and unmount lifecycle', () => {
        const root = document.createElement('div');
        root.innerHTML = '<div id="dtable-basic" data-dtable-managed></div><div id="dtable-row-height"></div>';
        visible.add('dtable-basic');
        visible.add('dtable-row-height');
        const {mountDTables} = loadScript(resolve(scripts, 'examples.js')) as {mountDTables: (root: Element, getOptions: () => object) => () => void};
        const dispose = mountDTables(root, () => ({}));
        flushReady();
        expect(created.map(item => item.element.id)).toEqual(['dtable-row-height']);
        dispose();
        expect(created[0].destroy).toHaveBeenCalledOnce();
    });

    it('reflows both pages without mutating fixed column settings when the container narrows', () => {
        for (const page of ['index', 'plugins'] as const) {
            const id = page === 'index' ? 'dtable-basic' : 'dtable-cellspan';
            visible.add(id);
            mount(page, [id]);
            flushReady();
            const {options} = created[created.length - 1];
            expect(options.responsive).toBe(true);
            expect(options.scrollbarHover).toBe(false);
            const plugins = options.plugins as {name: string; beforeLayout: (this: {parent: {clientWidth: number}}, options: Record<string, unknown>) => {cols: {fixed: unknown}[]} | undefined}[];
            const responsive = plugins.find(plugin => plugin.name === 'docs-responsive')!;
            const columns = JSON.stringify(options.cols);
            expect(responsive.beforeLayout.call({parent: {clientWidth: 310}}, options)?.cols.every(col => col.fixed === false)).toBe(true);
            expect(responsive.beforeLayout.call({parent: {clientWidth: 800}}, options)).toBeUndefined();
            expect(JSON.stringify(options.cols)).toBe(columns);
        }
    });

    it('does not let the basic page initialize plugin examples after SPA navigation', async () => {
        visible.add('dtable-basic');
        const basic = mount('index', ['dtable-basic', 'dtable-advanced']);
        flushReady();
        expect(created).toHaveLength(1);
        document.dispatchEvent(new Event('scroll'));
        basic.unmount();

        const plugin = mount('plugins', ['dtable-cellspan', 'dtable-sortable']);
        flushReady();
        visible.add('dtable-cellspan');
        visible.add('dtable-sortable');
        document.dispatchEvent(new Event('scroll'));
        await vi.runAllTimersAsync();
        expect(created).toHaveLength(3);
        expect(created[1].options.plugins).toEqual(['rich', 'cellspan', expect.objectContaining({name: 'docs-responsive'})]);
        expect(created[1].options.getCellSpan).toBeTypeOf('function');
        expect(created[2].options.plugins).toEqual(['sortable', expect.objectContaining({name: 'docs-responsive'})]);
        expect(created[2].options.sortable).toBe(true);
        plugin.unmount();
        created.forEach(instance => expect(instance.destroy).toHaveBeenCalledOnce());

        mount('index', ['dtable-basic']);
        flushReady();
        expect(created).toHaveLength(4);
        expect(created[3].options.nested).toBe(false);
    });

    it('ignores late ZUI readiness from an unmounted page and limits initialization to its own root', () => {
        mount('index', ['dtable-basic']).unmount();
        document.body.insertAdjacentHTML('beforeend', '<div id="dtable-outside"></div>');
        visible.add('dtable-cellspan');
        visible.add('dtable-outside');
        mount('plugins', ['dtable-cellspan']);
        flushReady();
        expect(created).toHaveLength(1);
        expect(created[0].element.id).toBe('dtable-cellspan');
        expect(created[0].options.plugins).toEqual(['rich', 'cellspan', expect.objectContaining({name: 'docs-responsive'})]);
        expect(document.getElementById('dtable-outside')!.className).toBe('');
    });

    it.each(['index', 'plugins'] as const)('cancels queued frames and removes scroll listeners on %s unmount', async (page) => {
        const request = vi.spyOn(globalThis, 'requestAnimationFrame');
        const cancel = vi.spyOn(globalThis, 'cancelAnimationFrame');
        const current = mount(page, [page === 'index' ? 'dtable-basic' : 'dtable-cellspan']);
        document.dispatchEvent(new Event('scroll'));
        expect(request).toHaveBeenCalledOnce();
        const frame = request.mock.results[0].value as number;
        current.unmount();
        expect(cancel).toHaveBeenCalledWith(frame);
        document.dispatchEvent(new Event('scroll'));
        flushReady();
        await vi.runAllTimersAsync();
        expect(request).toHaveBeenCalledOnce();
        expect(created).toHaveLength(0);
    });
});
