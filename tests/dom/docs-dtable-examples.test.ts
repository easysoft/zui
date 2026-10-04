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
        expect(created[1].options.plugins).toEqual(['rich', 'cellspan']);
        expect(created[1].options.getCellSpan).toBeTypeOf('function');
        expect(created[2].options.plugins).toEqual(['sortable']);
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
        expect(created[0].options.plugins).toEqual(['rich', 'cellspan']);
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
