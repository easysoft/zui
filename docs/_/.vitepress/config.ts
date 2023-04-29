import {defineConfig} from 'vitepress';
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
    themeConfig,
});
