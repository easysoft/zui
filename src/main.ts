import '@zui/base';
import '@zui/typography';
import '@zui/scrollbar/src/main-css';
import 'highlight.js/styles/github.css';
import {loadLibPage, loadLibs, currentLibName} from './libs';
import {createSearchIndex, getSearchScore, normalizeSearchText} from './lib-search';
import './style.css';

const catalog = document.querySelector<HTMLElement>('#catalog')!;
const dialog = document.querySelector<HTMLDialogElement>('#catalogDialog')!;
const search = document.querySelector<HTMLInputElement>('#libSearch')!;
const source = document.querySelector<HTMLSelectElement>('#libSource')!;
const results = document.querySelector<HTMLElement>('#libResults')!;
const typeSelect = document.querySelector<HTMLSelectElement>('#libType')!;
const empty = document.querySelector<HTMLElement>('#emptyState')!;
const themeToggle = document.querySelector<HTMLButtonElement>('#themeToggle')!;
const typeLabels: Record<string, string> = {
    examples: '示例',
    config: '配置',
    'css-base': '基础样式',
    control: '基础控件',
    'js-helpers': '交互辅助',
    component: '组件',
    'js-ui': '复合组件',
    'css-utilities': '样式工具',
    'js-lib': '工具库',
    other: '其他',
};
const sourceLabels: Record<string, string> = {'build-in': '内置库', exts: '扩展库', local: '本地库', npm: 'npm'};

function escapeHTML(value: string) {
    return value.replace(/[&<>"']/g, char => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', '\'': '&#39;'}[char]!));
}

function focusSearch() {
    if (catalog.parentElement === dialog && !dialog.open) {
        dialog.showModal();
    }
    search.focus();
    search.select();
}

document.querySelector('#openCatalog')!.addEventListener('click', focusSearch);
document.querySelector('#closeCatalog')!.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});
dialog.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !event.isComposing) {
        event.preventDefault();
        event.stopPropagation();
        dialog.close();
    }
});
document.addEventListener('keydown', (event) => {
    if (event.isComposing) {
        return;
    }
    const editing = event.target instanceof HTMLElement && (event.target.isContentEditable || event.target.closest('input, textarea, select'));
    if (((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') || (event.key === '/' && !editing && !event.metaKey && !event.ctrlKey && !event.altKey)) {
        event.preventDefault();
        focusSearch();
    }
});
document.querySelectorAll('.dev-shortcut').forEach((element) => {
    element.textContent = navigator.platform.includes('Mac') ? '⌘ K' : 'Ctrl K';
});
themeToggle.setAttribute('aria-pressed', String(document.documentElement.classList.contains('dark')));
themeToggle.addEventListener('click', () => {
    const dark = document.documentElement.classList.toggle('dark');
    themeToggle.setAttribute('aria-pressed', String(dark));
    try {
        localStorage.setItem('dark', String(dark));
    } catch {/* Theme switching also works when storage is unavailable. */}
});

async function initCatalog() {
    const groupedLibs = await loadLibs();
    const libs = groupedLibs.flatMap(([, group]) => group).sort((a, b) => a.zui.name.localeCompare(b.zui.name));
    const shortNames = libs.map(lib => lib.zui.name.split('/').pop()!);
    const entries = libs.map((lib, index) => {
        const {name, displayName, type, sourceType, extsName} = lib.zui;
        const shortName = shortNames[index];
        const urlName = shortNames.indexOf(shortName) === shortNames.lastIndexOf(shortName) ? shortName : name.replace(/^@([^/]+)\/(.+)$/, '$1_$2');
        const scope = !lib.name.startsWith('@zui/') && lib.name.match(/^@[^/]+(?=\/)/)?.[0];
        return {
            name,
            title: displayName || shortName,
            packageName: lib.name,
            packageHTML: scope ? `<span class="dev-package-scope">${escapeHTML(scope)}</span>${escapeHTML(lib.name.slice(scope.length))}` : escapeHTML(lib.name),
            href: `/${encodeURIComponent(urlName)}/`,
            type,
            sourceType,
            searchIndex: createSearchIndex([name, lib.name, displayName, lib.description, type, typeLabels[type], sourceType, extsName, ...(lib.keywords ?? [])]),
        };
    });
    let recentNames: string[] = [];
    try {
        const stored: unknown = JSON.parse(localStorage.getItem('zui.dev.recent') ?? '[]');
        if (Array.isArray(stored)) {
            recentNames = stored.filter((name): name is string => typeof name === 'string');
        }
    } catch {/* Recent visits are optional. */}

    const current = entries.find(entry => entry.name === currentLibName);
    if (currentLibName) {
        catalog.prepend(document.querySelector('.dev-search-row')!);
        dialog.append(catalog);
        document.querySelector<HTMLButtonElement>('#openCatalog')!.hidden = false;
        document.querySelector<HTMLButtonElement>('#closeCatalog')!.hidden = false;
        document.querySelector('#currentLibLabel')!.textContent = current ? `${current.title} / ${current.name}` : currentLibName;
        document.querySelector<HTMLElement>('#libPage')!.hidden = false;
    }
    if (current) {
        recentNames = [current.name, ...recentNames.filter(name => name !== current.name)].slice(0, 6);
        try {
            localStorage.setItem('zui.dev.recent', JSON.stringify(recentNames));
        } catch {/* Navigation does not depend on storage. */}
    }
    const recent = recentNames.map(name => entries.find(entry => entry.name === name)).filter(entry => entry && entry !== current);
    const recentElement = document.querySelector<HTMLElement>('#recentLibs')!;
    recentElement.hidden = !recent.length;
    recentElement.innerHTML = `<span>最近访问</span>${recent.map(entry => `<a href="${entry!.href}">${escapeHTML(entry!.title)}</a>`).join('')}`;

    for (const [type, group] of groupedLibs) {
        typeSelect.add(new Option(`${typeLabels[type] || type} (${group.length})`, type));
    }
    for (const sourceType of new Set(entries.map(entry => entry.sourceType))) {
        source.add(new Option(sourceLabels[sourceType] || sourceType, sourceType));
    }

    function renderResults() {
        const terms = normalizeSearchText(search.value).split(/\s+/).filter(Boolean);
        const filtered = entries
            .filter(entry => (!typeSelect.value || entry.type === typeSelect.value) && (!source.value || entry.sourceType === source.value))
            .map(entry => ({entry, score: getSearchScore(entry.searchIndex, terms)}))
            .filter(({score}) => score >= 0)
            .sort((a, b) => a.score - b.score)
            .map(({entry}) => entry);
        document.querySelector('#categoryTitle')!.textContent = terms.length ? '搜索结果' : typeLabels[typeSelect.value] || '全部组件库';
        const selectedSource = document.querySelector<HTMLElement>('#selectedSource')!;
        selectedSource.hidden = !source.value;
        selectedSource.textContent = sourceLabels[source.value] || source.value;
        selectedSource.dataset.source = source.value;
        document.querySelector('#sortHint')!.textContent = terms.length ? '相关度' : 'A–Z';
        document.querySelector('#resultCount')!.textContent = `${filtered.length} 个库`;
        results.innerHTML = filtered.map(entry => `<a class="dev-lib" data-lib="${escapeHTML(entry.name)}" href="${entry.href}"${entry === current ? ' aria-current="page"' : ''}>
            <div class="dev-lib-title"><strong title="${escapeHTML(entry.title)}">${escapeHTML(entry.title)}</strong>${entry === current ? '<span class="dev-tag dev-current-tag">当前</span>' : ''}</div>
            <div class="dev-lib-detail"><span class="dev-lib-package" title="${escapeHTML(entry.packageName)}">${entry.packageHTML}</span><span class="dev-type-tag" data-type="${escapeHTML(entry.type)}">${escapeHTML(typeLabels[entry.type] || entry.type)}</span></div>
        </a>`).join('');
        empty.hidden = filtered.length > 0;
        results.setAttribute('aria-busy', 'false');
    }

    search.disabled = false;
    source.disabled = false;
    typeSelect.disabled = false;
    search.addEventListener('input', renderResults);
    source.addEventListener('change', renderResults);
    typeSelect.addEventListener('change', renderResults);
    document.querySelector('#resetFilters')!.addEventListener('click', () => {
        search.value = '';
        source.value = '';
        typeSelect.value = '';
        renderResults();
        search.focus();
    });
    search.addEventListener('keydown', (event) => {
        if (event.isComposing) {
            return;
        }
        const first = results.querySelector<HTMLAnchorElement>('a');
        if (event.key === 'Enter' || event.key === 'ArrowDown') {
            event.preventDefault();
            if (event.key === 'Enter') {
                first?.click();
            } else {
                first?.focus();
            }
        }
    });
    results.addEventListener('keydown', (event) => {
        if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') {
            return;
        }
        const links = [...results.querySelectorAll<HTMLAnchorElement>('a')];
        const index = links.indexOf(document.activeElement as HTMLAnchorElement);
        if (index >= 0) {
            event.preventDefault();
            const next = index + (event.key === 'ArrowDown' ? 1 : -1);
            (next < 0 ? search : links[Math.min(next, links.length - 1)]).focus();
        }
    });
    renderResults();

    if (currentLibName) {
        if (!current) {
            document.querySelector('#libPage')!.innerHTML = '<div class="dev-page-error"><h1>未找到这个组件库</h1><p>它可能未启用，或名称已经变更。</p><a href="/">返回组件库</a></div>';
            return;
        }
        try {
            await loadLibPage(currentLibName);
        } catch {
            document.querySelector('#libPage')!.innerHTML = '<div class="dev-page-error"><h1>调试页面加载失败</h1><p>请检查开发服务是否正常运行。</p><a href="">重新加载</a></div>';
            return;
        }
        if (window.location.hash && !window.location.hash.startsWith('#!')) {
            try {
                document.getElementById(decodeURIComponent(window.location.hash.slice(1)))?.scrollIntoView({block: 'start'});
            } catch {/* A malformed anchor must not replace a loaded playground. */}
        }
    }
}

if (import.meta.hot) {
    import.meta.hot.on('zui:lib-page-updated', (data) => {
        if (data.libName === currentLibName) {
            const libPage = document.getElementById('libPage');
            if (libPage) {
                libPage.innerHTML = data.content;
                const cash = (window as unknown as {$?: (element: Element) => {zuiInit: () => void}}).$;
                cash?.(libPage).zuiInit();
                libPage.classList.add('is-loaded');
                document.dispatchEvent(new CustomEvent('dev-page-update', {detail: {libName: data.libName}}));
            }
        }
    });
}

await initCatalog().catch(() => {
    document.querySelector('#resultCount')!.textContent = '加载失败';
    results.setAttribute('aria-busy', 'false');
    results.innerHTML = '<div class="dev-page-error"><h3>无法加载组件库</h3><p>请检查开发服务后重试。</p><a href="">重新加载</a></div>';
});
