import {LibInfo} from '../scripts/libs/lib-info';

const urlLibName = decodeURIComponent(window.location.pathname.split('/')[1] ?? '');

/** Resolved lib key (exact or short-name match); set after loadLibs(). */
export let currentLibName = urlLibName;

function resolveLibName(name: string, libs: Record<string, LibInfo>): string {
    if (!name || libs[name]) {
        return name;
    }
    for (const key of Object.keys(libs)) {
        const shortName = key.includes('/') ? key.slice(key.lastIndexOf('/') + 1) : key;
        if (shortName === name) {
            return key;
        }
    }
    return name;
}

export async function loadLibs() {
    const response = await fetch('/libs/');
    const libs: Record<string, LibInfo> = await response.json();
    currentLibName = resolveLibName(urlLibName, libs);
    const groupedLibs = Object.values(libs).reduce<Record<string, LibInfo[]>>((map, lib) => {
        const {type} = lib.zui;
        if (!map[type]) {
            map[type] = [];
        }
        map[type].push(lib);
        return map;
    }, {});

    const libTypeOrders: Record<string, number> = {
        examples: 0,
        config: 1,
        'css-base': 2,
        control: 3,
        'js-helpers': 4,
        component: 5,
        'js-ui': 6,
        'css-utilities': 7,
        'js-lib': 8,
        other: 9,
    };

    return Object.entries(groupedLibs).sort(([type1], [type2]) => {
        return libTypeOrders[type1] - libTypeOrders[type2];
    });
}

export async function loadLibPage(libName: string) {
    const response = await fetch(`/lib/${encodeURIComponent(libName)}/README.md`);
    const content = await response.text();
    const libPage = document.getElementById('libPage');
    if (libPage) {
        libPage.innerHTML = content;
        libPage.classList.add('is-loaded');
        document.dispatchEvent(new CustomEvent('dev-page-load', {detail: {libName}}));
    }
    document.title = `${libName.toUpperCase()} - ZUI3`;
}
