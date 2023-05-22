import DefaultTheme from 'vitepress/theme';
// import DynamicLayout from './components/DynamicLayout.vue';
import Example from './components/example.vue';
import CssPropValue from './components/css-prop-value.vue';
import CopyCode from './components/copy-code.vue';
import ColorTile from './components/color-tile.vue';
import ZUIReady from './components/zui-ready.vue';
import './tailwind.css';
import './vars.css';
import './whyframe.css';
import './style.css';

export default {
    extends: DefaultTheme,

    enhanceApp({app}) {
        app.component('Example', Example);
        app.component('CssPropValue', CssPropValue);
        app.component('CopyCode', CopyCode);
        app.component('ColorTile', ColorTile);
        if (!import.meta.env.SSR) {
            app.component('ZUIReady', ZUIReady);
        }
    },

    // use our custom layout component that we'll create next
    // Layout: DynamicLayout
};
