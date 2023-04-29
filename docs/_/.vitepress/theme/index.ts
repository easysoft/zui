import DefaultTheme from 'vitepress/theme';
// import DynamicLayout from './components/DynamicLayout.vue';
import './tailwind.css';
import './vars.css';
import './whyframe.css';
import './style.css';

export default {
    ...DefaultTheme,

    // use our custom layout component that we'll create next
    // Layout: DynamicLayout
};
