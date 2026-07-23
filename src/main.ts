import '@zui/base';
import '@zui/typography';
import '@zui/scrollbar/src/main-css';
import 'highlight.js/styles/github.css';
import {loadLibPage, loadLibs, currentLibName} from './libs';
import './style.css';

const groupedLibs = await loadLibs();

function getLibShortName(name: string): string {
    return name.includes('/') ? name.slice(name.lastIndexOf('/') + 1) : name;
}

/** "@zentao/form-designer" → "zentao_form-designer" (avoids %2F in URLs). */
function toFriendlyLibUrlName(name: string): string {
    const match = /^@([^/]+)\/(.+)$/.exec(name);
    return match ? `${match[1]}_${match[2]}` : name;
}

/** Prefer short name when unique; on conflict use scope_pkg form. */
function getLibUrlName(name: string, shortNameCounts: Map<string, number>): string {
    const shortName = getLibShortName(name);
    if ((shortNameCounts.get(shortName) ?? 0) <= 1) {
        return shortName;
    }
    return toFriendlyLibUrlName(name);
}

async function buildLibNav() {
    const libNav = document.querySelector<HTMLDivElement>('#libNav');
    if (!libNav) {
        return;
    }
    const shortNameCounts = new Map<string, number>();
    for (const [, libs] of groupedLibs) {
        for (const lib of libs) {
            const shortName = getLibShortName(lib.zui.name);
            shortNameCounts.set(shortName, (shortNameCounts.get(shortName) ?? 0) + 1);
        }
    }

    const html: string[] = [];
    let count = 0;
    let currentLibHref = '';
    for (const [type, libs] of groupedLibs) {
        if (!libs.length) {
            continue;
        }
        count += libs.length;
        libs.sort((a, b) => a.zui.name.localeCompare(b.zui.name));

        html.push(`<li class="lib-type -text-white/50 -text-sm -font-bold -pt-1">${type.toUpperCase()}<span class="-text-sm -ml-1 -bg-white/30 -text-primary-900 -px-1 -rounded-full" id="libsCount">${libs.length}</span></li>`);
        for (const lib of libs) {
            const {name} = lib.zui;
            const urlName = getLibUrlName(name, shortNameCounts);
            const href = `/${encodeURIComponent(urlName)}/`;
            if (name === currentLibName) {
                currentLibHref = href;
            }
            html.push(`<a href="${href}" class="-flex -items-center -justify-between -px-1 -py-1 -text-base -font-normal -rounded ${name === currentLibName ? '-text-white -font-bold -bg-primary-600' : '-text-white/80'} hover:-bg-black/20 hover:-backdrop-blur hover:-text-white">`);
            html.push(`<span class="-ml-1">${lib.zui.displayName ?? name}</span>`);

            if (lib.zui.sourceType === 'exts') {
                html.push(`<span class="-text-sm -ml-1 -bg-black/30 -text-white/90 -px-1 -rounded-full -font-normal">${lib.zui.extsName}</span>`);
            }

            html.push('</a>');
        }
    }

    libNav.innerHTML = html.join('\n');
    const countElement = document.querySelector<HTMLElement>('#libsCount');
    if (countElement) {
        countElement.innerText = `${count}`;
    }

    if (currentLibHref) {
        const currentNavItem = document.querySelector<HTMLElement>(`a[href="${currentLibHref}"]`);
        if (currentNavItem) {
            currentNavItem.scrollIntoView({behavior: 'smooth', block: 'center'});
        }
    }
}

await buildLibNav();

if (import.meta.hot) {
    import.meta.hot.on('zui:lib-page-updated', (data) => {
        if (data.libName === currentLibName) {
            const libPage = document.getElementById('libPage');
            if (libPage) {
                libPage.innerHTML = data.content;

                if ((window as unknown as {$: (element: Element) => ({zuiInit: () => void})}).$) {
                    (window as unknown as {$: (element: Element) => ({zuiInit: () => void})}).$(libPage).zuiInit();
                }

                libPage.classList.add('is-loaded');
                document.dispatchEvent(new CustomEvent('dev-page-update', {detail: {libName: data.libName}}));
            }
        }
    });

    if (currentLibName) {
        await loadLibPage(currentLibName);
        if (window.location.hash && !window.location.hash.startsWith('#!')) {
            const anchor = document.querySelector(window.location.hash);
            if (anchor) {
                anchor.scrollIntoView({block: 'start'});
            }
        }
    } else {
        document.body.classList.add('at-home');
    }
}
