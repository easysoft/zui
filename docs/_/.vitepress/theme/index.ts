import DefaultTheme from 'vitepress/theme';
// import DynamicLayout from './components/DynamicLayout.vue';
import Example from './components/Example.vue';
import './tailwind.css';
import './vars.css';
import './whyframe.css';
import './style.css';

export default {
    extends: DefaultTheme,

    enhanceApp({app}) {
        app.component('Example', Example);
    },

    // use our custom layout component that we'll create next
    // Layout: DynamicLayout
};
