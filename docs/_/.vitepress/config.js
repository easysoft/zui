import {defineConfig} from 'vitepress';
import glob from 'fast-glob';
import fs from 'fs-extra';
import Path from 'path';
import {red, yellow, underline} from 'colorette';
import zuiLib from '../public/zui-libs';

const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
    lang: 'zh-CN',
    title: 'ZUI 3',
    base,
    description: 'Composable UI framework',
    ignoreDeadLinks: true,
    head: [
        ['link', {rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg`}],
        ['link', {rel: 'stylesheet', href: `${base}zui.css`}],
        ['script', {src: `${base}zui.umd.cjs`}],
    ],
    lastUpdated: true,
    markdown: {
        theme: 'github-dark',
        lineNumbers: true,
    },
    themeConfig: {
        logo: '/favicon.svg',
        nav: createNav(),
        socialLinks: [
            {icon: 'github', link: 'https://github.com/easysoft/zui'}
        ],
        footer: {
            message: 'MIT License (MIT)',
            copyright: 'Copyright (C) 2022 cnezsoft.com',
        },
        lastUpdatedText: '上次更新',
        outlineTitle: '本页目录',
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },
        sidebar: createSidebar()
    },
});

function createNav() {
    return [
        {text: '指引',       link: '/guide/',     activeMatch: '/guide/'},
        {text: '基础',       link: '/basic/',     activeMatch: '/basic/'},
        {text: 'CSS 工具类',  link: '/utilities/', activeMatch: '/utilities/'},
        {text: '组件',        link: '/lib/',       activeMatch: '/lib/'},
        {text: 'JavaScript', link: '/js/',        activeMatch: '/js/'},
        {text: '主题',        link: '/themes/',    activeMatch: '/themes/'},
    ];
}

function initSidebars() {
    return {
        '/guide/': [
            {text: '开始', section: 'start'},
            {text: '定制', section: 'customize'},
            {text: '贡献', section: 'contributes'},
            {text: '关于', section: 'about'}
        ],
        '/basic/': [
            {text: '配置',    section: 'config'},
            {text: '设计理念', section: 'concepts'}
        ],
        '/utilities/': [
            {text: '样式', section: 'style'},
            {text: '背景', section: 'backgrounds'},
            {text: '边框', section: 'borders'},
            {text: '布局', section: 'layout'},
            {text: 'Flex', section: 'flex'},
            {text: '间距', section: 'spacing'},
            {text: '尺寸', section: 'sizing'},
            {text: '排版', section: 'typography'},
            {text: '效果', section: 'effects'},
            {text: '交互', section: 'interactivity'},
        ],
        '/lib/': [
            {text: '布局', section: 'layout', collapsible: true},
            {text: '内容', section: 'content', collapsible: true},
            {text: '图标', section: 'icons', collapsible: true},
            {text: '表单', section: 'forms', collapsible: true},
            {text: '组件', section: 'components', collapsible: true},
        ],
        '/js/': [
            {text: 'UI 插件', section: 'ui', collapsible: true},
            {text: '工具方法', section: 'helpers', collapsible: true},
        ],
        '/themes/': [
            {text: '官方主题', section: 'official'},
            {text: '社区主题', section: 'community'},
            {text: '主题制作', section: 'create'},
        ]
    }
}

function updateSections(files, sidebars, docsPath, libName) {
    if (!files.length) {
        return;
    }
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
        }
        if (!section.items) {
            section.items = [];
        }
        const link = `/${sidebarName}/${sectionName}/${libName ? `${libName}/` : ''}${restPath.join('/')}`;
        const markdown = fs.readFileSync(Path.join(docsPath, file), 'utf8');
        const title = markdown.match(/# (.*)/)[1];
        section.items.push({
            text: title, link
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
        updateSections(files, sidebars, libDocsPath, lib.zui.name);
    });
    Object.values(sidebars).forEach(sidebar => {
        sidebar.forEach(section => {
            if (!section.items) {
                section.items = [];
            }
            delete section.section;
        });
    });
    return sidebars;
}
