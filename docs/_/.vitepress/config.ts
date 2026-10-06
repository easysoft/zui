import {defineConfig} from 'vitepress';
import {tabsMarkdownPlugin} from 'vitepress-plugin-tabs';
import {themeConfig, extLibs} from './theme-config';
import pkg from '../../../package.json';
import {fileURLToPath} from 'node:url';
import {resolveDocSourcePath} from '../../../scripts/docs/source-path';
import zuiLibs from '../public/zui-libs';
import {renderComponentOverview} from './component-overview';
import {themeBootstrapScript} from './theme/theme-bootstrap';

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
    // public/ holds the built ZUI bundle, including Markdown license files.
    // Those files must stay downloadable assets and must not become docs pages.
    srcExclude: ['public/**'],
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
        ['link', {id: 'zui-stylesheet', rel: 'stylesheet', href: `${base}zui/zui.css?v=${Date.now() % 10000}`}],
        ['script', {src: `${base}zui/zui.js?v=${Date.now() % 10000}`}],
        ['script', {}, themeBootstrapScript],
    ],
    lastUpdated: true,
    markdown: {
        theme: {light: 'github-light', dark: 'github-dark'},
        defaultHighlightLang: 'html',
        config(md) {
            md.use(tabsMarkdownPlugin);
            // Expand before parsing so the catalog also reaches the local search index.
            md.core.ruler.before('normalize', 'zui-component-overview', (state) => {
                if (state.src.includes('<!-- zui-component-overview -->')) {
                    state.src = state.src.replace('<!-- zui-component-overview -->', renderComponentOverview(themeConfig.sidebar['/lib/']));
                }
            });
        }
    },
    vite: {
        plugins: [{
            name: 'zui-docs-navigation-labels',
            enforce: 'pre',
            transform(code, id) {
                // VitePress 1.6 has no theme options for these navigation labels.
                if (!id.includes('/vitepress/dist/client/theme-default/components/')) {
                    return;
                }
                const labels: Record<string, [string, string]> = {
                    'VPNavBarHamburger.vue': ['aria-label="mobile navigation"', 'aria-label="主导航"'],
                    'VPNavBarExtra.vue': ['label="extra navigation"', 'label="更多导航选项"'],
                    'VPNavBarMenu.vue': ['Main Navigation', '主导航'],
                    'VPSidebar.vue': ['Sidebar Navigation', '侧边导航'],
                    'VPSidebarItem.vue': ['aria-label="toggle section"', 'aria-label="展开或收起分组"'],
                };
                const label = labels[id.slice(id.lastIndexOf('/') + 1)];
                if (!label) {
                    return;
                }
                if (!code.includes(label[0])) {
                    this.error(`VitePress navigation markup changed; review the translation for ${id}`);
                }
                return code.replace(label[0], label[1]);
            },
        }],
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
