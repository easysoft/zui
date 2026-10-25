import {afterEach, expect, test} from 'vitest';
import {themeBootstrapScript} from '../../docs/_/.vitepress/theme/theme-bootstrap';
import {presets, themeVariables} from '../../docs/_/.vitepress/theme/theme-model';

function clearTheme() {
    localStorage.removeItem('zui-docs-theme-v1');
    document.getElementById('zui-custom-theme')?.remove();
    delete document.documentElement.dataset.zuiTheme;
}

afterEach(clearTheme);

test('legacy cached themes restore readable solid text before hydration', () => {
    for (const {settings} of presets) {
        clearTheme();
        const light = themeVariables(settings, 'light');
        const dark = themeVariables(settings, 'dark');
        const legacy = (tokens: Record<string, string>) => Object.fromEntries(Object.entries(tokens).filter(([key]) => !key.startsWith('--color-on-')));
        localStorage.setItem('zui-docs-theme-v1', JSON.stringify({settings, light: legacy(light), dark: legacy(dark)}));
        new Function(themeBootstrapScript)();
        const restored = document.getElementById('zui-custom-theme')?.textContent;
        for (const tokens of [light, dark]) {
            for (const [name, value] of Object.entries(tokens).filter(([key]) => key.startsWith('--color-on-'))) {
                expect(restored, name).toContain(`${name}:${value};`);
            }
        }
    }
});

test('bootstrap still rejects malformed cache values before adding a stylesheet', () => {
    const settings = presets[0].settings;
    localStorage.setItem('zui-docs-theme-v1', JSON.stringify({settings, light: {'--color-primary-500': '#123456; color:red'}, dark: themeVariables(settings, 'dark')}));
    new Function(themeBootstrapScript)();
    expect(document.getElementById('zui-custom-theme')).toBeNull();
    expect(document.documentElement.hasAttribute('data-zui-theme')).toBe(false);
});
