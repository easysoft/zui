import pkg from '../package.json';

const libs = [...Object.keys(pkg.dependencies)].reduce<string[]>((list, name) => {
    if (name.startsWith('@zui/')) {
        list.push(name.substring('@zui/'.length));
    }
    return list;
}, []);

async function loadLibPage(libName: string) {
    const response = await fetch(`/lib/${libName}/README.md`);
    const content = await response.text();
    const libPage = document.getElementById('libPage');
    if (libPage) {
        libPage.innerHTML = content;
    }
}

const currentLibName = window.location.pathname.split('/')[1];
const libNav = document.querySelector<HTMLDivElement>('#libNav');
if (libNav) {
    libNav.innerHTML = libs.map(name => [
        '<li>',
        `  <a href="/${name}/" class="flex items-center px-1 py-2 text-base font-normal rounded-lg dark:text-white ${name === currentLibName ? 'text-young-500 font-bold' : ''}
        hover:bg-gray-300 dark:hover:bg-gray-700">`,
        `    <span class="ml-3">${name}</span>`,
        '  </a>',
        '</li>',
    ].join('\n')).join('\n');
}

if (import.meta.hot) {
    import.meta.hot.on('zui:lib-page-updated', (data) => {
        const libPage = document.getElementById('libPage');
        if (libPage) {
            libPage.innerHTML = data.content;
        }
        console.log('zui:lib-page-updated', data); // hello
    });

    loadLibPage(currentLibName);
}
