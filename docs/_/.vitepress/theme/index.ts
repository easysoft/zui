import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client';
import Example from './components/example.vue';
import CssPropValue from './components/css-prop-value.vue';
import CopyCode from './components/copy-code.vue';
import ColorTile from './components/color-tile.vue';
import StyleTile from './components/style-tile.vue';
import ZUIReady from './components/zui-ready.vue';
import zuiData from './zui-data';
import './tailwind.css';
import './vars.css';
import './whyframe.css';
import './style.css';

export default {
    extends: DefaultTheme,

    enhanceApp({app}) {
        enhanceAppWithTabs(app);
        app.component('Example', Example);
        app.component('CssPropValue', CssPropValue);
        app.component('CopyCode', CopyCode);
        app.component('StyleTile', StyleTile);
        app.component('ColorTile', ColorTile);
        if (!import.meta.env.SSR) {
            app.component('ZUIReady', ZUIReady);
        }

        app.config.globalProperties.zui = zuiData;
    },

    // use our custom layout component that we'll create next
    // Layout: DynamicLayout
} satisfies Theme;
