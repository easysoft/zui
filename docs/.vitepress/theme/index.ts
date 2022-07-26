import DefaultTheme from 'vitepress/theme';
import * as zui from '../../assets/zui/zui.js';
import '../../assets/zui/zui.css';
import './tailwind.css';
import './style.css';

Object.assign(window, {zui});

export default {
    ...DefaultTheme,
}
