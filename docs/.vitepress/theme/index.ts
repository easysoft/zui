import DefaultTheme from './theme-default';
import * as zui from '../../assets/zui/zui.js';
import '../../assets/zui/zui.css';
import './tailwind.css';
import './vars.css';
import './style.css';
import Example from './components/example.vue';

Object.assign(window, {zui});

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('Example', Example)
    }
}
