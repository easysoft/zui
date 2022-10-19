import DefaultTheme from './theme-default';
import './tailwind.css';
import './vars.css';
import './style.css';
import {onZUIReady} from './zui-ready';
import Example from './components/example.vue';

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('Example', Example);
    }
}

Object.assign(window, {onZUIReady});
