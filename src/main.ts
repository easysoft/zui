import '@zui/base';
import '@zui/scrollbar/src/scrollbar-css.css';
import 'highlight.js/styles/github.css';
import {loadLibPage, loadLibs, currentLibName} from './libs';
import './style.css';

const libNav = document.querySelector<HTMLDivElement>('#libNav');
if (libNav) {
    const groupedLibs = await loadLibs();
    const html: string[] = [];
    let count = 0;
    for (const [type, libs] of groupedLibs) {
        if (!libs.length) {
            continue;
        }
        count += libs.length;
        libs.sort((a, b) => a.zui.name.localeCompare(b.zui.name));

        html.push(`<li class="lib-type -text-white/50 -text-sm -font-bold -pt-2">${type.toUpperCase()}<span class="-text-sm -ml-1 -bg-white/30 -text-primary-900 -px-1 -rounded-full" id="libsCount">${libs.length}</span></li>`);
        for (const lib of libs) {
            const {name} = lib.zui;
            html.push(`<a href="/${encodeURIComponent(name)}/" class="-flex -items-center -justify-between -px-1 -py-2 -text-base -font-normal -rounded ${name === currentLibName ? '-text-white -font-bold -bg-primary-600' : '-text-gray-200'} hover:-bg-primary-700 hover:-text-white">`);
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

    const currentNavItem = document.querySelector<HTMLElement>(`a[href="/${currentLibName}/"]`);
    if (currentNavItem) {
        currentNavItem.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
}

if (import.meta.hot) {
    import.meta.hot.on('zui:lib-page-updated', (data) => {
        if (data.libName === currentLibName) {
            const libPage = document.getElementById('libPage');
            if (libPage) {
                libPage.innerHTML = data.content;
                libPage.classList.add('is-loaded');
                document.dispatchEvent(new CustomEvent('dev-page-update'));
            }
        }
    });

    if (currentLibName) {
        loadLibPage(currentLibName);
    }
}
