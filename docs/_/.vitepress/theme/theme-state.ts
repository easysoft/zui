import {ref} from 'vue';
import {createTheme, exportThemeCSS, parseTheme, themeVariables, type ThemeSettings} from './theme-model';

export const THEME_STORAGE_KEY = 'zui-docs-theme-v1';
const STYLE_ID = 'zui-custom-theme';
export const theme = ref(createTheme());
export const saveMessage = ref('修改后自动保存到当前浏览器');

function applyTheme(settings: ThemeSettings) {
    let style = document.getElementById(STYLE_ID);
    if (!style) {
        style = document.createElement('style');
        style.id = STYLE_ID;
        document.head.appendChild(style);
    }
    // VitePress owns the site's appearance preference; its .dark class is authoritative.
    const light = declarations(themeVariables(settings, 'light'));
    const dark = declarations(themeVariables(settings, 'dark'));
    // VitePress can append the default ZUI stylesheet later, especially in dev mode.
    // Scope overrides to the active theme so their priority does not depend on head order.
    const root = ':root[data-zui-theme]';
    style.textContent = `${root} {${light}} @media (prefers-color-scheme: dark) {${root} .dark-auto {${dark}}} ${root}.dark, ${root} .dark {${dark}} ${root} .light-in-dark {${light}}`;
    document.documentElement.dataset.zuiTheme = '';
}

function declarations(variables: Record<string, string>) {
    return Object.entries(variables).map(([key, value]) => `${key}:${value};`).join('');
}

export function updateTheme(settings: ThemeSettings) {
    const valid = parseTheme(settings);
    if (!valid) {
        return;
    }
    theme.value = valid;
    applyTheme(valid);
    try {
        localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify({settings: valid, light: themeVariables(valid, 'light'), dark: themeVariables(valid, 'dark')}));
        saveMessage.value = '已自动保存到本地';
    } catch {
        saveMessage.value = '无法保存到本地，本次修改仍会生效；请导出 CSS 保存。';
    }
}

export function resetTheme() {
    theme.value = createTheme();
    document.getElementById(STYLE_ID)?.remove();
    delete document.documentElement.dataset.zuiTheme;
    try {
        localStorage.removeItem(THEME_STORAGE_KEY);
        saveMessage.value = '已恢复默认主题';
    } catch {
        saveMessage.value = '无法清除本地主题，本次已恢复默认；下次打开可能仍使用旧主题。';
    }
}

function loadTheme(value: string | null, fromAnotherTab = false) {
    if (!value) {
        theme.value = createTheme();
        document.getElementById(STYLE_ID)?.remove();
        delete document.documentElement.dataset.zuiTheme;
        if (fromAnotherTab) {
            saveMessage.value = '已同步其他标签页的默认主题';
        }
        return;
    }
    try {
        const saved = JSON.parse(value);
        const valid = parseTheme(saved?.settings);
        if (valid) {
            theme.value = valid;
            applyTheme(valid);
            saveMessage.value = fromAnotherTab ? '已同步其他标签页的主题' : '已恢复本地保存的主题';
            return;
        }
    } catch {
        // Invalid storage must never prevent the documentation from loading.
    }
    document.getElementById(STYLE_ID)?.remove();
    delete document.documentElement.dataset.zuiTheme;
    theme.value = createTheme();
    saveMessage.value = '本地主题数据无效，已使用默认主题；重新编辑即可保存。';
}

function onStorage(event: StorageEvent) {
    if (event.key === THEME_STORAGE_KEY || event.key === null) {
        loadTheme(event.newValue, true);
    }
}

export function initTheme() {
    try {
        loadTheme(localStorage.getItem(THEME_STORAGE_KEY));
    } catch {
        saveMessage.value = '无法读取本地主题，本次修改仍会生效；请导出 CSS 保存。';
    }
    window.addEventListener('storage', onStorage);
}

if (import.meta.hot) {
    import.meta.hot.dispose(() => window.removeEventListener('storage', onStorage));
}

export function downloadTheme() {
    const url = URL.createObjectURL(new Blob([exportThemeCSS(theme.value)], {type: 'text/css;charset=utf-8'}));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'zui-theme.css';
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
