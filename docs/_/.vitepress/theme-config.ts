import glob from 'fast-glob';
import fs from 'fs-extra';
import Path from 'path';
import minimist from 'minimist';
import {red, yellow, underline} from 'colorette';
import {DefaultTheme} from 'vitepress';
import zuiLib from '../public/zui-libs';

const argv = minimist(process.argv.slice(4).filter((x, i) => i || x !== '--'));

export const themeConfig: DefaultTheme.Config = {
    logo: '/favicon.svg',
    outline: [2, 3],
    search: {
        provider: 'local',
        options: {
            translations: {
                button: {
                    buttonText: '搜索文档',
                    buttonAriaLabel: '搜索文档'
                },
                modal: {
                    noResultsText: '无法找到相关结果',
                    resetButtonTitle: '清除查询条件',
                    footer: {
                        selectText: '选择',
                        navigateText: '切换',
                        closeText: '关闭'
                    }
                }
            }
        }
    },
    nav: createNav(),
    socialLinks: [
        {icon: 'github', link: 'https://github.com/easysoft/zui'}
    ],
    editLink: {
        pattern: (payload) => {
            return `https://github.com/easysoft/zui/edit/main/lib/${payload.filePath.replace('/', '/docs/')}`;
        },
        text: '在 Github 上编辑',
    },
    footer: {
        message: 'MIT License (MIT)',
        copyright: 'Copyright (C) 2023 cnezsoft.com',
    },
    lastUpdatedText: '上次更新',
    outlineTitle: '本页目录',
    docFooter: {
        prev: '上一篇',
        next: '下一篇'
    },
    sidebar: createSidebar()
};

export const extLibs = [...zuiLib.reduce((set, lib) => {
    if (lib.zui.extsName) {
        set.add(lib.zui.extsName);
    }
    return set;
}, new Set<string>())];

function createNav() {
    return [
        {text: '指引',        link: '/guide/start/',     activeMatch: '/guide/'},
        {text: 'CSS 工具类',  link: '/utilities/skin/utilities/solid', activeMatch: '/utilities/'},
        {text: '组件',        link: '/lib/components/button/',       activeMatch: '/lib/'},
    ];
}

function initSidebars(): Record<string, {text: string, section?: string, items?: {text?: string, link: string, lib?: typeof zuiLib[number]}[], collapsed?: boolean, hidden?: boolean}[]> {
    return {
        '/guide/': [
            {text: '开始', section: 'start'},
            {text: '设计理念', section: 'concepts', hidden: true},
            {text: '全局配置', section: 'config', collapsed: false},
            {text: '开发定制', section: 'customize'},
            {text: '贡献', section: 'contributes', hidden: true},
            {text: '关于', section: 'about', hidden: true}
        ],
        '/utilities/': [
            {text: '外观', section: 'skin', collapsed: false},
            {text: '背景', section: 'backgrounds', collapsed: true},
            {text: '边框', section: 'borders', collapsed: true},
            {text: '布局', section: 'layout', collapsed: true},
            {text: 'Flex', section: 'flex', collapsed: true},
            {text: '间距', section: 'spacing', collapsed: true},
            {text: '尺寸', section: 'sizing', collapsed: true},
            {text: '排版', section: 'typography', collapsed: true},
            {text: '效果', section: 'effects', collapsed: true},
            {text: '交互', section: 'interactivity', collapsed: true},
        ],
        '/lib/': [
            {text: '布局', section: 'layout', collapsed: false, hidden: true},
            {text: '内容', section: 'content', collapsed: false, hidden: true},
            {text: '图标', section: 'icons', collapsed: false},
            {text: '组件', section: 'components', collapsed: false},
            {text: '表单', section: 'forms', collapsed: false},
            {text: '数据表格', section: 'dtable', collapsed: false},
            {text: 'JS 工具', section: 'helpers', collapsed: false},
        ],
        '/themes/': [
            {text: '官方主题', section: 'official-themes'},
            {text: '社区主题', section: 'community-themes'},
            {text: '主题制作', section: 'create-theme'},
        ]
    }
}

function updateSections(files: string[], sidebars: ReturnType<typeof initSidebars>, docsPath: string, lib?: typeof zuiLib[number]) {
    if (!files.length) {
        return;
    }
    const {name: libName, extsName, notReady} = lib?.zui || {} as typeof zuiLib[number];
    files.forEach(file => {
        const [sidebarName, sectionName, ...restPath] = file.split(Path.sep);
        const sidebar = sidebars[`/${sidebarName}/`];
        if (!sidebar) {
            console.log(` ${red('ERROR')} cannot find sidebar named ${yellow(sidebarName)} in file ${underline(Path.join(docsPath, file))}.`);
            return;
        }
        const section = sidebar.find(item => item.section === sectionName);
        if (!section) {
            console.log(` ${red('ERROR')} cannot find section named ${yellow(sectionName)} in sidebar ${yellow(sidebarName)} by file ${underline(Path.join(docsPath, file))}.`);
            return;
        }
        if (notReady && (process.env.NODE_ENV !== 'development' && !argv.includeNotReady)) {
            return;
        }

        const link = `/${sidebarName}/${sectionName}/${libName ? `${libName}/` : ''}${restPath.join('/')}`;
        const markdown = fs.readFileSync(Path.join(docsPath, file), 'utf8');
        let title = markdown.match(/# (.*)/)?.[1];
        if (typeof title !== 'string') {
            return;
        }
        const wip = title.endsWith('[WIP]');
        if (wip) {
            if (process.env.NODE_ENV !== 'development' && !argv.includeNotReady) {
                return;
            }
            title = title.replace('[WIP]', '').trim();
        }
        if (extsName) {
            title = `${title} <code>${extsName}</code>`;
        }
        if (notReady) {
            title = `${title} <code>DEV</code>`;
        }
        if (wip) {
            title = `${title} <code>WIP</code>`;
        }

        if (!section.items) {
            section.items = [];
        }

        if (libName && libName.startsWith('@') && libName.includes('/')) {
            const replaceLink = `/${sidebarName}/${sectionName}/${libName ? `${libName.split('/').pop()}/` : ''}${restPath.join('/')}`;
            const item = section.items.find(item => item.link === replaceLink);
            if (item) {
                item.link = link;
                item.text = title;
                return;
            }
        }
        section.items.push({
            text: title,
            link,
            lib
        });
    });
}

function createSidebar() {
    const sidebars = initSidebars();
    const docsPath = Path.join(process.cwd(), 'docs');
    const files = glob.sync(`*/*/**/*.md`, {onlyFiles: true, cwd: docsPath});
    updateSections(files, sidebars, docsPath);

    zuiLib.forEach(lib => {
        const libDocsPath = Path.join(lib.zui.path, 'docs');
        const files = glob.sync(`*/*/**/*.md`, {onlyFiles: true, cwd: libDocsPath});
        updateSections(files, sidebars, libDocsPath, lib);
    });

    const orders = {
        '介绍': 1,
        '快速上手': 2,
        '教程': 3,
        '兼容性': 4,
    };

    Object.keys(sidebars).forEach(key => {
        sidebars[key] = sidebars[key].filter(section => {
            if (section.hidden || !section.items?.length) {
                return false;
            }
            if (section.items) {
                section.items = section.items.sort((a, b) => {
                    const order1 = orders[a.text!];
                    const order2 = orders[b.text!];
                    if (typeof order1 === 'number' && typeof order2 === 'number') {
                        return order1 - order2;
                    }
                    let result = (a.lib ? 1 : 0) - (b.lib ? 1 : 0);
                    if (result !== 0) {
                        return result;
                    }
                    if (!a.lib && !b.lib) {
                        return a.text!.localeCompare(b.text!);
                    }
                    if (a.lib!.name === b.lib!.name) {
                        return (b.link.endsWith('/index.md') ? 1 : 0) - (a.link.endsWith('/index.md') ? 1 : 0);
                    }
                    result = a.lib!.zui.order - b.lib!.zui.order;
                    if (result !== 0) {
                        return result;
                    }
                    return a.lib!.zui.name.localeCompare(b.lib!.zui.name);
                });
                section.items.forEach(item => {
                    delete item.lib;
                });
            }
            delete section.section;
            return true;
        });
    });
    return sidebars;
}
