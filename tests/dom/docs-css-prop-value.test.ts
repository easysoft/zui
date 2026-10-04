import {readFileSync} from 'node:fs';
import {createRequire} from 'node:module';
import {resolve} from 'node:path';
import {afterEach, describe, expect, it, vi} from 'vitest';
import ts from 'typescript';

// Reuse the documentation workspace's Vue compiler/runtime without a new test framework.
const requireDocs = createRequire(resolve('docs/package.json'));
const {parse, compileScript} = requireDocs('vue/compiler-sfc');
const {createApp, nextTick} = requireDocs('vue');
const source = resolve('docs/_/.vitepress/theme/components/css-prop-value.vue');
const {descriptor} = parse(readFileSync(source, 'utf8'), {filename: source});
const {content} = compileScript(descriptor, {id: 'css-prop-value-test', inlineTemplate: true});
const {outputText} = ts.transpileModule(content, {compilerOptions: {module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022}});
const compiled = {exports: {} as {default?: unknown}};
new Function('require', 'module', 'exports', outputText)(requireDocs, compiled, compiled.exports);
const CssPropValue = compiled.exports.default;
const mounted: {unmount: () => void}[] = [];

function stylesheet(loaded = false) {
    const link = document.createElement('link');
    link.id = 'zui-stylesheet';
    link.rel = 'stylesheet';
    document.head.append(link);
    if (loaded) {
        Object.defineProperty(link, 'sheet', {value: {}, configurable: true});
    }
    return link;
}

function mount(props: Record<string, unknown>) {
    const host = document.createElement('div');
    document.body.append(host);
    const app = createApp(CssPropValue, props);
    app.mount(host);
    mounted.push(app);
    return {host, app};
}

function target() {
    const element = document.createElement('div');
    element.id = 'css-target';
    element.style.width = '42px';
    document.body.append(element);
    return element;
}

async function flush() {
    await nextTick();
    await nextTick();
}

afterEach(() => {
    for (const app of mounted.splice(0)) {
        app.unmount();
    }
    document.head.replaceChildren();
    document.body.replaceChildren();
    vi.restoreAllMocks();
    vi.useRealTimers();
});

describe('documentation CssPropValue stylesheet readiness', () => {
    it('keeps the placeholder through a slow stylesheet load, then reads the target', async () => {
        vi.useFakeTimers();
        const link = stylesheet();
        const readStyle = vi.spyOn(globalThis, 'getComputedStyle');
        const {host} = mount({prop: 'width', target: '#css-target'});
        target();
        await flush();
        await vi.advanceTimersByTimeAsync(1000);
        expect(host.textContent).toBe('…');
        expect(readStyle).not.toHaveBeenCalled();
        link.dispatchEvent(new Event('load'));
        await flush();
        expect(host.textContent).toBe('42px');
        expect(readStyle).toHaveBeenCalledTimes(1);
    });

    it('reads an already loaded stylesheet and retains string formatting', async () => {
        stylesheet(true);
        target();
        const {host} = mount({prop: 'width', target: '#css-target', format: 'width: {0};'});
        await flush();
        expect(host.textContent).toBe('width: 42px;');
    });

    it('retains an explicit placeholder after stylesheet failure', async () => {
        const link = stylesheet();
        const readStyle = vi.spyOn(globalThis, 'getComputedStyle');
        const format = vi.fn((value: string) => `value: ${value}`);
        const {host} = mount({prop: 'width', target: '#css-target', placeholder: '等待样式', format});
        target();
        link.dispatchEvent(new Event('error'));
        link.dispatchEvent(new Event('load'));
        await flush();
        expect(host.textContent).toBe('等待样式');
        expect(readStyle).not.toHaveBeenCalled();
        expect(format).not.toHaveBeenCalled();
    });

    it.each([false, true])('cleans up an unmounted page (measurement queued: %s)', async (queued) => {
        const link = stylesheet();
        const remove = vi.spyOn(link, 'removeEventListener');
        const readStyle = vi.spyOn(globalThis, 'getComputedStyle');
        const {app} = mount({prop: 'width', fake: 'test-probe'});
        if (queued) {
            link.dispatchEvent(new Event('load'));
        }
        app.unmount();
        mounted.pop();
        expect(remove).toHaveBeenCalledWith('load', expect.any(Function));
        expect(remove).toHaveBeenCalledWith('error', expect.any(Function));
        link.dispatchEvent(new Event('load'));
        await flush();
        expect(readStyle).not.toHaveBeenCalled();
        expect(document.querySelector('.test-probe')).toBeNull();
    });

    it('measures a fake class, formats its value, and removes the probe', async () => {
        stylesheet(true);
        const style = document.createElement('style');
        style.textContent = '.test-probe { font-size: 23px; }';
        document.head.append(style);
        const format = vi.fn((value: string) => `字号 ${value}`);
        const {host} = mount({prop: 'font-size', fake: 'test-probe', format});
        await flush();
        expect(host.textContent).toBe('字号 23px');
        expect(format).toHaveBeenCalledWith('23px');
        expect(document.querySelector('.test-probe')).toBeNull();
    });

    it('retains its own-element target fallback', async () => {
        stylesheet(true);
        const {host} = mount({prop: 'font-size', style: 'font-size: 19px'});
        await flush();
        expect(host.textContent).toBe('19px');
    });

    it('keeps a placeholder when the stylesheet link is missing', async () => {
        const readStyle = vi.spyOn(globalThis, 'getComputedStyle');
        target();
        const {host} = mount({prop: 'width', target: '#css-target'});
        await flush();
        expect(host.textContent).toBe('…');
        expect(readStyle).not.toHaveBeenCalled();
    });
});
