import {defineConfig} from 'vitepress';
import {tabsMarkdownPlugin} from 'vitepress-plugin-tabs';
import {themeConfig, extLibs} from './theme-config';
import pkg from '../../../package.json';
import {fileURLToPath} from 'node:url';
import {resolveDocSourcePath} from '../../../scripts/docs/source-path';
import zuiLibs from '../public/zui-libs';

const base = process.env.BASE_PATH ?? '/';
const root = fileURLToPath(new URL('../../../', import.meta.url));

/** Define vitepress config */
export default defineConfig({
    lang: 'zh-CN',
    title: 'ZUI 3' + (extLibs.length ? ` + ${extLibs.join(', ')}` : ''),
    base,
    description: 'Composable UI framework',
    cleanUrls: false,
    ignoreDeadLinks: false,
    transformPageData(page) {
        const sourcePath = resolveDocSourcePath(page.filePath, zuiLibs, root);
        if (sourcePath) {
            page.frontmatter.sourcePath = sourcePath;
        } else {
            page.frontmatter.editLink = false;
        }
    },
    head: [
        ['link', {rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg`}],
        ['link', {rel: 'stylesheet', href: `${base}zui/zui.css?v=${Date.now() % 10000}`}],
        ['script', {src: `${base}zui/zui.js?v=${Date.now() % 10000}`}],
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
        define: {
            __ZUI_VERSION__: JSON.stringify(pkg.version),
        },
        server: {
            watch: {
                ignored: [
                    '**/.vitepress/dist/**',
                    '**/.vitepress/cache/**',
                    '**/public/zui/**',
                ],
            },
        },
    },
    vue: {
        template: {
            compilerOptions: {
                isPreTag: (tagName) => tagName === 'Props' || tagName === 'pre',
            },
        },
    },
    themeConfig,
});
