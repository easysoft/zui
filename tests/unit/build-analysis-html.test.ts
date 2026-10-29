import {JSDOM, VirtualConsole} from 'jsdom';
import {afterEach, beforeEach, expect, test} from 'vitest';
import {renderBuildAnalysisHtml} from '../../scripts/build/analysis-html';
import type {BuildAnalysisReport} from '../../scripts/build/analysis';

const report: BuildAnalysisReport = {
    schemaVersion: 1, name: 'zui', version: '3.1.0', notes: ['JS 按压缩前模块统计。'], externals: ['cash-dom'],
    files: [
        {file: 'zui.esm.js', kind: 'javascript', format: 'es', bytes: 800, gzipBytes: 300, metric: 'rendered-js-before-minify', packages: [
            {name: '@zui/core', category: 'builtin', bytes: 600, modules: [{id: '@zui/core/核心.ts', bytes: 600}]},
            {name: 'preact', category: 'dependency', bytes: 400, modules: [{id: 'preact/index.js', bytes: 250}, {id: 'preact/jsx.js', bytes: 150}]},
        ]},
        {file: 'zui.css', kind: 'css', bytes: 200, gzipBytes: 80, metric: 'output-bytes', packages: [
            {name: '@zui/button', category: 'builtin', bytes: 200, modules: [{id: '@zui/button/style.css', bytes: 200}]},
        ]},
    ],
};

let dom: JSDOM;
let errors: string[];
const get = (id: string) => dom.window.document.getElementById(id)!;
const packageNames = () => [...dom.window.document.querySelectorAll('.package-name')].map(node => node.textContent);

function open(input = report) {
    dom?.window.close();
    const console = new VirtualConsole();
    console.on('jsdomError', error => errors.push(String(error)));
    dom = new JSDOM(renderBuildAnalysisHtml(input), {runScripts: 'dangerously', virtualConsole: console});
}

beforeEach(() => {
    errors = [];
    open();
});

afterEach(() => {
    dom.window.close();
    expect(errors).toEqual([]);
});

test('renders file totals and keeps contribution percentages independent from final bytes and filters', () => {
    expect(get('file-title').textContent).toBe('zui.esm.js');
    expect(get('raw-size').textContent).toBe('800 B');
    expect(get('gzip-size').textContent).toBe('300 B');
    expect(packageNames()).toEqual(['@zui/core', 'preact']);
    expect(get('legend').textContent).toContain('第三方依赖 40.00%');
    const filter = [...get('filters').querySelectorAll('button')].find(node => node.textContent === '第三方依赖')!;
    filter.click();
    expect(filter.getAttribute('aria-pressed')).toBe('true');
    expect(packageNames()).toEqual(['preact']);
    expect(get('packages').textContent).toContain('40.00%');
    expect(get('results').textContent).toContain('1 / 2');
});

test('supports search, clear with focus recovery, no results and reset', () => {
    const search = get('search') as HTMLInputElement;
    search.value = 'missing-package';
    search.dispatchEvent(new dom.window.Event('input'));
    expect(get('empty').hidden).toBe(false);
    expect(get('package-table').hidden).toBe(true);
    expect(get('clear-search').hidden).toBe(false);
    get('reset').click();
    expect(search.value).toBe('');
    expect(dom.window.document.activeElement).toBe(search);
    search.value = 'PREACT';
    search.dispatchEvent(new dom.window.Event('input'));
    expect(packageNames()).toEqual(['preact']);
    get('clear-search').click();
    expect(packageNames()).toEqual(['@zui/core', 'preact']);
    expect(get('clear-search').hidden).toBe(true);
});

test('does not filter half-composed input and updates after IME composition ends', () => {
    const search = get('search') as HTMLInputElement;
    search.dispatchEvent(new dom.window.CompositionEvent('compositionstart'));
    search.value = 'preact';
    search.dispatchEvent(new dom.window.InputEvent('input', {isComposing: true}));
    expect(packageNames()).toHaveLength(2);
    search.dispatchEvent(new dom.window.CompositionEvent('compositionend'));
    expect(packageNames()).toEqual(['preact']);
});

test('sorts packages, expands module details and switches output files', async () => {
    const sort = get('sort') as HTMLSelectElement;
    sort.value = 'size-asc';
    sort.dispatchEvent(new dom.window.Event('change'));
    expect(packageNames()).toEqual(['preact', '@zui/core']);
    const details = get('packages').querySelector('details')!;
    details.open = true;
    await new Promise(resolve => setTimeout(resolve, 10));
    expect(details.querySelectorAll('.module')).toHaveLength(2);
    expect(details.querySelector('.module-path')!.textContent).toBe('preact/index.js');
    get('files').querySelectorAll('button')[1].click();
    expect(get('file-title').textContent).toBe('zui.css');
    expect(get('metric').textContent).toContain('最终输出字节');
    expect(packageNames()).toEqual(['@zui/button']);
});

test('renders hostile names as text without executing HTML or escaping the JSON script', () => {
    const hostile = '</script><script>window.injected = true</script><img src=x onerror="window.injected=true">&\u2028';
    const input = structuredClone(report);
    input.name = hostile;
    input.notes = [hostile];
    input.files[0].file = hostile;
    input.files[0].packages[0].name = hostile;
    open(input);
    expect(dom.window.document.title).toContain(hostile);
    expect(get('identity').textContent).toContain(hostile);
    expect(get('file-title').textContent).toBe(hostile);
    expect(packageNames()).toContain(hostile);
    expect(dom.window.document.querySelector('img')).toBeNull();
    expect(dom.window.document.scripts).toHaveLength(2);
    expect((dom.window as unknown as {injected?: boolean}).injected).toBeUndefined();
});

test('handles empty files and zero-byte contributions without invalid percentages', () => {
    open({...report, files: []});
    expect(get('no-files').hidden).toBe(false);
    expect(get('report-panel').hidden).toBe(true);
    open({...report, files: [{...report.files[0], bytes: 0, gzipBytes: 0, packages: []}]});
    expect(get('empty-message').textContent).toContain('没有可归属');
    expect(get('reset').hidden).toBe(true);
    expect(get('gzip-ratio').textContent).toBe('原始体积的 0.00%');
    expect(dom.window.document.body.textContent).not.toContain('NaN');
});
