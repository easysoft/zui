import {defineConfig} from 'vitepress';
import {whyframe} from '@whyframe/core';
import {whyframeVue} from '@whyframe/vue';
import {tabsMarkdownPlugin} from 'vitepress-plugin-tabs';
import {themeConfig, extLibs} from './theme-config';
import pkg from '../../../package.json';

const base = process.env.BASE_PATH ?? '/';

/** Define vitepress config */
export default defineConfig({
    lang: 'zh-CN',
    title: 'ZUI 3' + (extLibs.length ? ` + ${extLibs.join(', ')}` : ''),
    base,
    description: 'Composable UI framework',
    cleanUrls: false,
    ignoreDeadLinks: true,
    head: [
        ['link', {rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg`}],
        ['link', {rel: 'stylesheet', href: `${base}zui.css?v=${Date.now() % 10000}`}],
        ['script', {src: `${base}zui.umd.cjs?v=${Date.now() % 10000}`}],
    ],
    lastUpdated: true,
    markdown: {
        theme: {light: 'github-light', dark: 'github-dark'},
        defaultHighlightLang: 'html',
        config(md) {
            md.use(tabsMarkdownPlugin);
        }
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
        define: {
            __ZUI_VERSION__: JSON.stringify(pkg.version),
        }
    },
    themeConfig,
});
