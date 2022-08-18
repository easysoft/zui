import {defineConfig} from 'vitepress';
import zuiLib from '../public/zui-lib';

const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
    lang: 'zh-CN',
    title: 'ZUI 3',
    base,
    description: 'Composable UI framework',
    head: [
        ['link', {rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg`}],
        ['link', {rel: 'stylesheet', href: `${base}zui/zui.css`}],
        ['script', {src: `${base}zui/zui.umd.cjs`}],
    ],
    lastUpdated: true,
    markdown: {
        theme: 'github-dark',
        lineNumbers: true,
    },
    themeConfig: {
        logo: '/favicon.svg',
        nav: [
            {text: '指引', link: '/guide/', activeMatch: '/guide/'},
            {text: '基础', link: '/basic/', activeMatch: '/basic/'},
            {text: 'CSS 工具类', link: '/utilities/', activeMatch: '/utilities/'},
            {text: '组件', link: '/lib/', activeMatch: '/lib/'},
            {text: '图标', link: '/icons/', activeMatch: '/icons/'},
            {text: 'JavaScript', link: '/js/', activeMatch: '/js/'},
            {text: '主题', link: '/themes/', activeMatch: '/themes/'},
            {text: '定制', link: '/customize/', activeMatch: '/customize/'},
        ],
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
        sidebar: {
            '/guide/': [
                {
                    text: '指引',
                    items: [
                        {text: '快速开始', link: '/guide/quick-start'},
                        {text: 'FAQ', link: '/guide/faq'},
                    ]
                }
            ],
            '/utilities/': [
                {
                    text: 'CSS 工具类',
                    items: [
                        {text: '索引', link: '/utilities/index'},
                        {text: '样式', link: '/utilities/style'},
                        {text: '背景', link: '/utilities/backgrounds'},
                        {text: '边框', link: '/utilities/borders'},
                        {text: '布局', link: '/utilities/layout'},
                        {text: 'Flex', link: '/utilities/flex'},
                        {text: '间距', link: '/utilities/spacing'},
                        {text: '尺寸', link: '/utilities/sizing'},
                        {text: '排版', link: '/utilities/typography'},
                        {text: '效果', link: '/utilities/effects'},
                        {text: '交互', link: '/utilities/interactivity'},
                    ]
                }
            ],
            '/lib/': [
                {
                    text: '组件',
                    items: zuiLib.filter(lib => lib.hasUserDocs).map(lib => ({text: lib.displayName, link: `/lib/${lib.shortName}/index.md`}))
                }
            ],
        }
    },
});
