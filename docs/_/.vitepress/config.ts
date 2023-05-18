import {defineConfig} from 'vitepress';
import {whyframe} from '@whyframe/core';
import {whyframeVue} from '@whyframe/vue';
import {themeConfig, extLibs} from './theme-config';

const base = process.env.BASE_PATH ?? '/';

/** Define vitepress config */
export default defineConfig({
    lang: 'zh-CN',
    title: 'ZUI 3' + (extLibs.length ? ` + ${extLibs.join(', ')}` : ''),
    base,
    description: 'Composable UI framework',
    cleanUrls: false,
    appearance: false,
    ignoreDeadLinks: true,
    head: [
        ['link', {rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg`}],
        ['link', {rel: 'stylesheet', href: `${base}zui.css?v=${Date.now() % 10000}`}],
        ['script', {src: `${base}zui.umd.cjs?v=${Date.now() % 10000}`}],
    ],
    lastUpdated: true,
    markdown: {
        theme: 'github-dark',
        defaultHighlightLang: 'html',
    },
    vite: {
        plugins: [
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
