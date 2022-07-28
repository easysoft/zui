import {defineConfig} from 'vitepress';
import zuiLib from '../assets/zui-lib.js';

export default defineConfig({
    lang: 'zh-CN',
    title: 'ZUI 3',
    description: 'Composable UI framework',
    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/assets/favicon.svg' }],
    ],
    lastUpdated: true,
    markdown: {
        theme: 'github-dark',
        lineNumbers: true,
    },
    themeConfig: {
        logo: '/assets/favicon.svg',
        nav: [
            {text: '指引', link: '/guide/quick-start.md'},
            {text: '组件', link: '/lib/index.md'},
            {text: '图标', link: '/icons/index.md'},
            {text: '主题', link: '/themes/index.md'},
            {text: '定制', link: '/customize/index.md'},
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
            '/lib/': [
                {
                    text: '组件',
                    items: zuiLib.filter(lib => lib.hasUserDocs).map(lib => ({text: lib.displayName, link: `/lib/${lib.shortName}/index.md`}))
                }
            ],
        }
    },
});
