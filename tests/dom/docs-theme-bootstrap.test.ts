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

test('bootstrap replaces stale cached foregrounds with the current theme contract', () => {
    for (const {settings} of presets) {
        clearTheme();
        const light = themeVariables(settings, 'light');
        const dark = themeVariables(settings, 'dark');
        const stale = (tokens: Record<string, string>) => Object.fromEntries(Object.entries(tokens).map(([key, value]) => [key, key.startsWith('--color-on-') ? (key.endsWith('-rgb') ? '1, 2, 3' : '#010203') : value]));
        localStorage.setItem('zui-docs-theme-v1', JSON.stringify({settings, light: stale(light), dark: stale(dark)}));
        new Function(themeBootstrapScript)();
        const rules = (document.getElementById('zui-custom-theme') as HTMLStyleElement).sheet!.cssRules;
        for (const [rule, tokens] of [[rules[0], light], [rules[2], dark]] as const) {
            for (const [name, value] of Object.entries(tokens).filter(([key]) => key.startsWith('--color-on-'))) {
                expect((rule as CSSStyleRule).style.getPropertyValue(name).replaceAll(' ', ''), `${settings.preset} ${name}`).toBe(value.replaceAll(' ', ''));
            }
        }
    }
});
