import DefaultTheme from 'vitepress/theme';
import type {Theme} from 'vitepress';
import {enhanceAppWithTabs} from 'vitepress-plugin-tabs/client';
import {h} from 'vue';
import SidebarActiveLink from './components/sidebar-active-link.vue';
import NavExternalLinks from './components/nav-external-links.vue';
import NavTheme from './components/nav-theme.vue';
import Example from './components/example.vue';
import CssPropValue from './components/css-prop-value.vue';
import CopyCode from './components/copy-code.vue';
import ColorTile from './components/color-tile.vue';
import StyleTile from './components/style-tile.vue';
import PropItem from './components/prop-item.vue';
import Props from './components/props.vue';
import ZUIReady from './components/zui-ready.vue';
import ZUI from './components/zui.vue';
import ThemeEditor from './components/theme-editor.vue';
import {initTheme} from './theme-state';
import zuiData from './zui-data';
import './tailwind.css';
import './vars.css';
import './style.css';
import './theme-editor.css';

export default {
    extends: DefaultTheme,
    Layout: () => h(DefaultTheme.Layout, null, {
        'sidebar-nav-after': () => h(SidebarActiveLink),
        'nav-bar-content-after': () => [h(NavTheme), h(NavExternalLinks)],
    }),

    enhanceApp({app}) {
        enhanceAppWithTabs(app);
        app.component('Example', Example);
        app.component('ZUI', ZUI);
        app.component('CssPropValue', CssPropValue);
        app.component('CopyCode', CopyCode);
        app.component('StyleTile', StyleTile);
        app.component('ColorTile', ColorTile);
        app.component('PropItem', PropItem);
        app.component('Props', Props);
        app.component('ThemeEditor', ThemeEditor);
        if (!import.meta.env.SSR) {
            initTheme();
            app.component('ZUIReady', ZUIReady);
        }

        app.config.globalProperties.zui = zuiData;
    },

} satisfies Theme;
