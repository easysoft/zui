import {LibInfo} from '../scripts/libs/lib-info';

export const currentLibName = window.location.pathname.split('/')[1] ?? '';

export async function loadLibs() {
    const response = await fetch('/libs/');
    const libs: Record<string, LibInfo> = await response.json();
    const groupedLibs = Object.values(libs).reduce<Record<string, LibInfo[]>>((map, lib) => {
        const {type} = lib.zui;
        if (!map[type]) {
            map[type] = [];
        }
        map[type].push(lib);
        return map;
    }, {});

    const libTypeOrders: Record<string, number> = {
        'css-base': 1,
        'control': 2,
        'js-helpers': 3,
        'component': 4,
        'css-utilities': 5,
        'js-lib': 6,
    };

    return Object.entries(groupedLibs).sort(([type1], [type2]) => {
        return libTypeOrders[type1] - libTypeOrders[type2];
    });
}

export async function loadLibPage(libName: string) {
    const response = await fetch(`/lib/${libName}/README.md`);
    const content = await response.text();
    const libPage = document.getElementById('libPage');
    if (libPage) {
        libPage.innerHTML = content;
        document.dispatchEvent(new CustomEvent('dev-page-load'));
    }
    document.title = `${libName.toUpperCase()} - ZUI3`;
}
