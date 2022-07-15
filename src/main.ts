import pkg from '../package.json';

const libs = [...Object.keys(pkg.dependencies)].reduce<string[]>((list, name) => {
    if (name.startsWith('@zui/')) {
        list.push(name.substring('@zui/'.length));
    }
    return list;
}, []);


const libNav = document.querySelector<HTMLDivElement>('#libNav');
if (libNav) {
    libNav.innerHTML = libs.map(name => [
        '<li>',
        `  <a href="./lib/${name}/" target="libPage" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">`,
        `    <span class="ml-3">${name}</span>`,
        '  </a>',
        '</li>',
    ].join('\n')).join('\n');
}

for (const libName of libs) {
    await import(`../lib/${libName}/src/main.ts`);
}
