import path from 'path';
import {defineUserConfig} from 'vuepress';
import {localTheme} from './theme';

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'ZUI 3',
    description: 'ZUI 3 官方文档',
    head: [
        ['script', {src: '/dist/zui/zui.umd.js'}],
        ['link', {rel: 'stylesheet', href: '/dist/zui/zui.css'}]
    ],
    theme: localTheme({
        repo: 'https://github.com/easysoft/zui',
        navbar: [
            {
                text: '指南',
                link: '/docs/guide/quick-start.md',
            },
            {
                text: '组件',
                link: '/docs/lib/all.md',
            },
        ],
        sidebar: {
            '/docs/guide/': [
                {
                    text: '快速开始',
                    link: '/docs/guide/quick-start.md',
                }
            ],
            '/docs/lib/': [
                {
                    text: '按钮',
                    link: '/lib/button/docs/README.md'
                },
                {
                    text: '工具类',
                    link: '/lib/utilities/docs/README.md'
                },
                {
                    text: '本地存储',
                    link: '/lib/store/docs/README.md'
                }
            ]
        }
    }),
    pagePatterns: [
        '!README.md',
        '!node_modules',
        'index.md',
        'docs/**/*.md',
        'lib/*/docs/**/*.md',
    ],
    alias: {
      '@dist': path.resolve(__dirname, '../dist'),
      '@lib': path.resolve(__dirname, '../lib'),
    }
});
