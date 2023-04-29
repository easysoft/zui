import {defineConfig} from 'vitepress';
import inspect from 'vite-plugin-inspect';
import {whyframe} from '@whyframe/core';
import {whyframeVue} from '@whyframe/vue';
import themeConfig from './theme-config';

const base = process.env.BASE_PATH ?? '/';

/** Define vitepress config */
export default defineConfig({
    lang: 'zh-CN',
    title: 'ZUI 3',
    base,
    description: 'Composable UI framework',
    cleanUrls: true,
    ignoreDeadLinks: true,
    head: [
        ['link', {rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg`}],
    ],
    lastUpdated: true,
    markdown: {
        theme: 'github-dark',
        defaultHighlightLang: 'html',
    },
    vite: {
        plugins: [
            inspect(),

            // Initialize core plugin
            whyframe({
                defaultSrc: '/frames/zui', // provide our own html,
                defaultShowSource: true,
            }),

            // Initialize Vue integration plugin
            whyframeVue({
                include: /\.(?:vue|md)$/, // also scan in markdown files
            }),
        ],
    },
    themeConfig,
});
