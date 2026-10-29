import type {BuildAnalysisReport} from './analysis';

/** A self-contained report: native controls keep arbitrary library builds independently readable. */
export function renderBuildAnalysisHtml(report: BuildAnalysisReport): string {
    const title = `${report.name} ${report.version} · 构建体积分析`.replace(/[&<>"']/g, char => `&#${char.charCodeAt(0)};`);
    const data = JSON.stringify(report).replace(/[<>&\u2028\u2029]/g, char => `\\u${char.charCodeAt(0).toString(16).padStart(4, '0')}`);
    return `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<style>
:root {
    color-scheme: light dark;
    --canvas: #f1f5f9; --surface: #fff; --text: #1e293b; --muted: #475569; --line: #cbd5e1;
    --accent: #1d4ed8; --selected: #eff6ff; --track: #e2e8f0;
    --builtin: #2563eb; --extension: #0f766e; --dependency: #b45309; --generated: #64748b;
    --mono: 'Fira Code', ui-monospace, SFMono-Regular, Consolas, monospace;
    --sans: 'Fira Sans', -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Microsoft YaHei', sans-serif;
    --radius: 6px;
    font-family: var(--sans); color: var(--text); background: var(--canvas); font-size: 14px; line-height: 1.6;
    scrollbar-color: var(--line) var(--canvas); scrollbar-width: auto; scrollbar-gutter: stable;
}
@media (prefers-color-scheme: dark) {
    :root {
        --canvas: #020617; --surface: #0f172a; --text: #e2e8f0; --muted: #94a3b8; --line: #334155;
        --accent: #93c5fd; --selected: #172554; --track: #1e293b;
        --builtin: #60a5fa; --extension: #2dd4bf; --dependency: #fbbf24; --generated: #94a3b8;
    }
}
* {box-sizing: border-box;}
body {margin: 0;}
[hidden] {display: none !important;}
button, input, select {font: inherit; color: inherit;}
button, select, summary, a {cursor: pointer;}
button, select, input {border: 1px solid var(--line); border-radius: var(--radius); background: var(--surface);}
button, select {min-height: 40px; padding: 7px 12px;}
button:hover, select:hover, summary:hover {background: var(--selected);}
button:active {background: var(--track);}
button:disabled {opacity: .55; cursor: default;}
:focus-visible {outline: 2px solid var(--accent); outline-offset: 3px;}
input {min-height: 40px; padding: 7px 12px; width: 100%;}
input::-webkit-search-cancel-button {display: none;}
a {color: var(--accent);}
a:hover {text-decoration-thickness: 2px;}
::-webkit-scrollbar {width: 12px; height: 12px;}
::-webkit-scrollbar-track {background: var(--canvas);}
::-webkit-scrollbar-thumb {background: var(--line); border: 3px solid var(--canvas); border-radius: 8px;}
::-webkit-scrollbar-thumb:hover {background: var(--muted);}
::-webkit-scrollbar-thumb:active {background: var(--accent);}
.topbar {border-bottom: 1px solid var(--line); background: var(--surface);}
.topbar-inner {max-width: 1500px; margin: auto; padding: 20px 32px; display: flex; align-items: center; justify-content: space-between; gap: 20px;}
h1 {font-size: 22px; margin: 0; letter-spacing: -.5px;}
.identity {color: var(--muted); font: 12px/1.7 var(--mono); overflow-wrap: anywhere;}
.layout {max-width: 1500px; margin: auto; display: grid; grid-template-columns: 260px minmax(0, 1fr); gap: 32px; padding: 28px 32px 48px;}
.sidebar {min-width: 0;}
.section-label {font-size: 12px; font-weight: 600; color: var(--muted); margin: 0 0 12px;}
.file-list {display: grid; gap: 8px;}
.file-button {display: block; width: 100%; text-align: left; padding: 12px; min-width: 0;}
.file-button[aria-pressed="true"] {background: var(--selected); border-color: var(--accent); box-shadow: inset 3px 0 var(--accent);}
.file-name {font: 12px/1.6 var(--mono); overflow-wrap: anywhere; display: block;}
.file-meta {display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px; color: var(--muted); font-size: 12px; margin-top: 6px;}
.sidebar-note {font-size: 12px; color: var(--muted); margin: 16px 0;}
main {min-width: 0;}
.panel {background: var(--surface); border: 1px solid var(--line); border-radius: 8px; padding: 24px;}
.file-heading {display: flex; align-items: baseline; gap: 12px; flex-wrap: wrap;}
h2 {font: 600 20px/1.5 var(--mono); margin: 0; overflow-wrap: anywhere;}
.format {color: var(--muted); font-size: 12px;}
.stats {display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; margin: 24px 0; padding-bottom: 20px; border-bottom: 1px solid var(--line);}
.stat-label {color: var(--muted); font-size: 12px;}
.stat-value {display: block; font: 600 clamp(20px, 2.5vw, 28px)/1.6 var(--mono); white-space: nowrap; font-variant-numeric: tabular-nums;}
.stat-note {color: var(--muted); font-size: 12px;}
.metric {margin: 0 0 16px; color: var(--muted); font-size: 12px;}
.composition {display: flex; height: 14px; border-radius: 4px; overflow: hidden; background: var(--track);}
.composition span {min-width: 0;}
.legend {display: flex; flex-wrap: wrap; gap: 8px 20px; margin: 10px 0 24px; font-size: 12px;}
.legend-item {display: inline-flex; align-items: center; gap: 6px;}
.dot {width: 8px; height: 8px; flex-shrink: 0; border-radius: 2px; background: var(--group);}
.builtin {--group: var(--builtin);}
.extension {--group: var(--extension);}
.dependency {--group: var(--dependency);}
.generated {--group: var(--generated);}
.toolbar {display: flex; align-items: end; gap: 12px; flex-wrap: wrap;}
.search-field {flex: 1 1 240px; min-width: 0;}
label {display: block; font-size: 12px; color: var(--muted); margin-bottom: 5px;}
.search-wrap {position: relative;}
.search-wrap input {padding-right: 64px;}
#clear-search {position: absolute; right: 4px; top: 4px; min-height: 32px; padding: 3px 8px; border: 0; color: var(--accent);}
.filters {display: flex; flex-wrap: wrap; gap: 6px; margin: 16px 0 10px;}
.filter {font-size: 12px; min-height: 34px; padding: 5px 10px;}
.filter[aria-pressed="true"] {border-color: var(--accent); color: var(--accent); background: var(--selected);}
.results-meta {font-size: 12px; color: var(--muted); margin: 10px 0; min-height: 20px;}
table {width: 100%; border-collapse: collapse; table-layout: fixed;}
th {font-weight: 500; color: var(--muted); text-align: left; font-size: 12px; padding: 10px 8px; border-bottom: 1px solid var(--line);}
td {padding: 12px 8px; vertical-align: top; border-bottom: 1px solid var(--track);}
th:first-child, td:first-child {padding-left: 0; width: 50%;}
th:nth-child(2) {width: 18%;}
th:nth-child(3) {width: 19%;}
th:nth-child(4) {width: 13%;}
.number {text-align: right; font: 12px/1.8 var(--mono); font-variant-numeric: tabular-nums; white-space: nowrap;}
.category {font-size: 12px; color: var(--muted);}
summary {padding: 0 4px 2px; border-radius: 3px; overflow-wrap: anywhere;}
.package-name {font: 500 13px/1.7 var(--mono);}
.module-count {font-size: 11px; color: var(--muted); margin-left: 8px; white-space: nowrap;}
.bar {height: 4px; background: var(--track); margin: 7px 4px 0; border-radius: 2px; overflow: hidden;}
.bar-fill {display: block; height: 100%; background: var(--group);}
.modules {list-style: none; margin: 12px 0 0; padding: 0 4px;}
.module {padding: 6px 0; border-top: 1px solid var(--track); display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 10px;}
.module-path {font: 11px/1.7 var(--mono); overflow-wrap: anywhere;}
.module-bytes {font: 11px/1.7 var(--mono); color: var(--muted); white-space: nowrap;}
.empty {padding: 40px 16px; text-align: center; color: var(--muted); border: 1px dashed var(--line); border-radius: var(--radius);}
.empty p {margin: 0 0 12px;}
.method {margin-top: 20px; padding: 16px 20px; border: 1px solid var(--line); border-radius: var(--radius); font-size: 12px; color: var(--muted);}
.method summary {font-size: 13px; color: var(--text); padding: 4px;}
.method li {margin: 8px 0;}
.method ul {padding-left: 20px;}
.external {margin-top: 20px; font-size: 12px; color: var(--muted); overflow-wrap: anywhere;}
.external strong {color: var(--text);}
@media (max-width: 850px) {
    .topbar-inner {padding: 16px 20px;}
    .layout {grid-template-columns: 1fr; gap: 16px; padding: 20px;}
    .file-list {display: flex; overflow-x: auto; padding: 3px 3px 10px;}
    .file-button {width: 220px; flex: 0 0 220px;}
    .sidebar-note {margin: 8px 0 0;}
}
@media (max-width: 540px) {
    .topbar-inner {align-items: flex-start; padding: 16px; gap: 10px;}
    h1 {font-size: 19px;}
    #download {font-size: 12px; padding: 7px 9px; white-space: nowrap;}
    .layout {padding: 16px 12px;}
    .panel {padding: 16px 12px;}
    h2 {font-size: 16px;}
    .stats {grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; margin: 18px 0;}
    .stats > div:last-child {grid-column: 1 / -1; display: flex; align-items: baseline; gap: 10px;}
    .stat-value {font-size: 17px;}
    .stat-note {font-size: 11px;}
    th:first-child, td:first-child {width: 56%;}
    th:nth-child(2), td:nth-child(2) {display: none;}
    th:nth-child(3) {width: 28%;}
    th:nth-child(4) {width: 16%;}
    th, td {padding-left: 4px; padding-right: 4px;}
    .package-name {font-size: 12px;}
    .module-count {display: block; margin-left: 0;}
    .module {grid-template-columns: 1fr; gap: 0;}
    .number {font-size: 11px;}
}
@media (forced-colors: active) {
    :root {scrollbar-color: auto;}
    .composition, .bar {border: 1px solid CanvasText;}
    button[aria-pressed="true"] {outline: 2px solid Highlight;}
}
</style>
</head>
<body>
<header class="topbar"><div class="topbar-inner">
    <div><h1>构建体积分析</h1><div class="identity" id="identity"></div></div>
    <button type="button" id="download" disabled>下载 JSON 明细</button>
</div></header>
<div class="layout">
    <aside class="sidebar" aria-label="输出文件">
        <h2 class="section-label" id="file-count">输出文件</h2>
        <nav class="file-list" id="files" aria-label="选择输出文件"></nav>
        <p class="sidebar-note">ESM、UMD 是不同分发格式，分别查看，避免重复相加。</p>
    </aside>
    <main>
        <noscript><p class="empty">请启用 JavaScript 查看交互报告，或打开同目录的 build-analysis.json 查看明细。</p></noscript>
        <section class="panel" id="report-panel" aria-labelledby="file-title" hidden>
            <div class="file-heading"><h2 id="file-title"></h2><span class="format" id="file-format"></span></div>
            <div class="stats">
                <div><span class="stat-label">文件实际大小</span><strong class="stat-value" id="raw-size"></strong><span class="stat-note" id="raw-bytes"></span></div>
                <div><span class="stat-label">gzip 大小</span><strong class="stat-value" id="gzip-size"></strong><span class="stat-note" id="gzip-ratio"></span></div>
                <div><span class="stat-label">有贡献的包</span><strong class="stat-value" id="package-count"></strong><span class="stat-note" id="module-count"></span></div>
            </div>
            <p class="metric" id="metric"></p>
            <div class="composition" id="composition" aria-hidden="true"></div>
            <div class="legend" id="legend"></div>
            <div class="toolbar">
                <div class="search-field"><label for="search">搜索包名</label><div class="search-wrap">
                    <input type="search" id="search" placeholder="例如 @zui/core、preact" autocomplete="off">
                    <button type="button" id="clear-search" hidden disabled>清除</button>
                </div></div>
                <div><label for="sort">排序</label><select id="sort">
                    <option value="size-desc">体积从大到小</option><option value="size-asc">体积从小到大</option><option value="name">按包名排序</option>
                </select></div>
            </div>
            <div class="filters" id="filters" role="group" aria-label="包来源"></div>
            <p class="results-meta" id="results" role="status" aria-live="polite" aria-atomic="true"></p>
            <table id="package-table" aria-label="包体积贡献排行">
                <thead><tr><th scope="col">包 / 展开模块明细</th><th scope="col">来源</th><th scope="col" class="number">贡献大小</th><th scope="col" class="number">占比</th></tr></thead>
                <tbody id="packages"></tbody>
            </table>
            <div class="empty" id="empty" hidden><p id="empty-message"></p><button type="button" id="reset" disabled>清除筛选</button></div>
        </section>
        <div class="empty" id="no-files" hidden>本次构建没有可分析的运行时文件。</div>
        <details class="method"><summary>统计口径与范围</summary><ul id="notes"></ul></details>
        <p class="external" id="externals"></p>
    </main>
</div>
<script type="application/json" id="build-data">${data}</script>
<script>
(() => {
    'use strict';
    const report = JSON.parse(document.getElementById('build-data').textContent);
    const categories = {builtin: '内置库', extension: '扩展库', dependency: '第三方依赖', generated: '生成代码 / 未归属'};
    const byId = id => document.getElementById(id);
    const number = value => value.toLocaleString('zh-CN');
    const size = bytes => bytes < 1024 ? number(bytes) + ' B' : (bytes / (bytes < 1048576 ? 1024 : 1048576)).toFixed(2) + (bytes < 1048576 ? ' KiB' : ' MiB');
    const percent = (bytes, total) => (total ? bytes / total * 100 : 0).toFixed(2) + '%';
    const element = (tag, className, text) => {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (text !== undefined) node.textContent = text;
        return node;
    };
    const button = (className, text, action) => {
        const node = element('button', className, text);
        node.type = 'button';
        node.addEventListener('click', action);
        return node;
    };
    const kind = file => file.kind === 'javascript' ? (file.format === 'es' ? 'ESM' : (file.format || 'JS').toUpperCase()) : file.kind === 'css' ? 'CSS' : '资源';
    let selected = 0;
    let category = 'all';
    let composing = false;
    // Filters are transient inspection state in an offline file; they never change the exported data.
    const search = byId('search');
    const sort = byId('sort');
    const filterButtons = new Map();
    byId('identity').textContent = report.name + ' / ' + report.version;
    byId('file-count').textContent = '输出文件 · ' + report.files.length;
    report.notes.forEach(note => byId('notes').append(element('li', '', note)));
    byId('externals').append(element('strong', '', '外置依赖  '), document.createTextNode(report.externals.length ? report.externals.join('、') + '（不计入包内体积）' : '无'));

    function renderPackages() {
        const file = report.files[selected];
        if (!file) return;
        const total = file.packages.reduce((sum, item) => sum + item.bytes, 0);
        const query = search.value.trim().toLowerCase();
        const filtered = file.packages.filter(item => (category === 'all' || item.category === category) && item.name.toLowerCase().includes(query));
        filtered.sort((a, b) => sort.value === 'name' ? a.name.localeCompare(b.name, 'zh-CN') : (sort.value === 'size-asc' ? a.bytes - b.bytes : b.bytes - a.bytes) || a.name.localeCompare(b.name));
        const body = byId('packages');
        body.replaceChildren();
        for (const item of filtered) {
            const row = element('tr', item.category);
            const cell = element('td');
            const details = element('details');
            const summary = element('summary');
            summary.append(element('span', 'package-name', item.name), element('span', 'module-count', item.modules.length + ' 个模块 · ' + (categories[item.category] || '未归属')));
            details.append(summary);
            // Populate paths only when requested, so large bundles stay quick to inspect.
            details.addEventListener('toggle', () => {
                if (!details.open || details.childElementCount > 1) return;
                const list = element('ul', 'modules');
                for (const module of [...item.modules].sort((a, b) => b.bytes - a.bytes)) {
                    const entry = element('li', 'module');
                    entry.append(element('span', 'module-path', module.id), element('span', 'module-bytes', size(module.bytes)));
                    list.append(entry);
                }
                details.append(list);
            });
            const bar = element('div', 'bar');
            bar.setAttribute('aria-hidden', 'true');
            const fill = element('span', 'bar-fill');
            fill.style.width = percent(item.bytes, total);
            bar.append(fill);
            cell.append(details, bar);
            const bytes = element('td', 'number', size(item.bytes));
            bytes.title = number(item.bytes) + ' B';
            row.append(cell, element('td', 'category', categories[item.category] || '未归属'), bytes, element('td', 'number', percent(item.bytes, total)));
            body.append(row);
        }
        byId('clear-search').hidden = !search.value;
        byId('package-table').hidden = !filtered.length;
        byId('empty').hidden = !!filtered.length;
        byId('empty-message').textContent = file.packages.length ? '没有匹配的包，试试其他关键词或来源。' : '此文件没有可归属的模块贡献。';
        byId('reset').hidden = !query && category === 'all';
        byId('results').textContent = '显示 ' + filtered.length + ' / ' + file.packages.length + ' 个包 · 占比以当前文件全部贡献为基准';
        for (const [key, node] of filterButtons) node.setAttribute('aria-pressed', String(key === category));
    }

    function renderFile() {
        const file = report.files[selected];
        if (!file) {byId('no-files').hidden = false; return;}
        byId('report-panel').hidden = false;
        byId('file-title').textContent = file.file;
        byId('file-format').textContent = kind(file);
        byId('raw-size').textContent = size(file.bytes);
        byId('raw-bytes').textContent = number(file.bytes) + ' B';
        byId('gzip-size').textContent = size(file.gzipBytes);
        byId('gzip-ratio').textContent = '原始体积的 ' + percent(file.gzipBytes, file.bytes);
        byId('package-count').textContent = number(file.packages.length);
        byId('module-count').textContent = number(file.packages.reduce((sum, item) => sum + item.modules.length, 0)) + ' 个模块';
        byId('metric').textContent = file.metric === 'rendered-js-before-minify'
            ? '下方按压缩前 JS 模块贡献统计；与上方最终文件体积口径不同。'
            : '下方按最终输出字节统计，与上方文件实际大小一致。';
        const total = file.packages.reduce((sum, item) => sum + item.bytes, 0);
        byId('composition').replaceChildren();
        byId('legend').replaceChildren();
        for (const [key, label] of Object.entries(categories)) {
            const bytes = file.packages.filter(item => item.category === key).reduce((sum, item) => sum + item.bytes, 0);
            if (!bytes) continue;
            const part = element('span', key);
            part.style.width = percent(bytes, total);
            part.style.background = 'var(--group)';
            byId('composition').append(part);
            const legend = element('span', 'legend-item ' + key);
            legend.append(element('span', 'dot'), document.createTextNode(label + ' ' + percent(bytes, total)));
            byId('legend').append(legend);
        }
        [...byId('files').children].forEach((node, index) => node.setAttribute('aria-pressed', String(index === selected)));
        renderPackages();
    }

    report.files.forEach((file, index) => {
        const node = button('file-button', undefined, () => {selected = index; renderFile();});
        node.setAttribute('aria-controls', 'report-panel');
        node.append(element('span', 'file-name', file.file));
        const meta = element('span', 'file-meta');
        meta.append(element('span', '', kind(file)), element('span', '', size(file.bytes)));
        node.append(meta);
        byId('files').append(node);
    });
    for (const [key, label] of Object.entries({all: '全部来源', ...categories})) {
        const node = button('filter', label, () => {category = key; renderPackages();});
        filterButtons.set(key, node);
        byId('filters').append(node);
    }
    search.addEventListener('compositionstart', () => {composing = true;});
    search.addEventListener('compositionend', () => {composing = false; renderPackages();});
    search.addEventListener('input', event => {if (!composing && !event.isComposing) renderPackages();});
    byId('clear-search').addEventListener('click', () => {search.value = ''; composing = false; renderPackages(); search.focus();});
    byId('reset').addEventListener('click', () => {search.value = ''; category = 'all'; renderPackages(); search.focus();});
    sort.addEventListener('change', renderPackages);
    byId('download').addEventListener('click', () => {
        const url = URL.createObjectURL(new Blob([JSON.stringify(report, null, 4)], {type: 'application/json'}));
        const link = element('a');
        link.href = url;
        link.download = 'build-analysis.json';
        document.body.append(link);
        link.click();
        link.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    });
    for (const id of ['download', 'clear-search', 'reset']) byId(id).disabled = false;
    renderFile();
})();
</script>
</body>
</html>\n`;
}
