import {readFileSync} from 'node:fs';
import {createRequire} from 'node:module';
import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import {expect, test} from 'vitest';
import {createTheme, exportThemeCSS, paletteFields, parseTheme, presets, themeVariables} from '../../docs/_/.vitepress/theme/theme-model';

import type {Rule} from 'postcss';

const require = createRequire(import.meta.url);
const {createTailwindConfig} = require('../../scripts/build/css-config.cjs');
const borderRadius = require('../../config/tailwind-theme/border-radius.cjs') as Record<string, string>;

function declarations(rule: Rule): Record<string, string> {
    const values: Record<string, string> = {};
    rule.walkDecls((declaration) => {
        values[declaration.prop] = declaration.value;
    });
    return values;
}

function normalizeColor(value: string) {
    return /^#[\da-f]{3}$/i.test(value) ? `#${[...value.slice(1)].map(char => char.repeat(2)).join('')}` : value.replaceAll(' ', '');
}

test('default editor colors match the variables emitted by the actual ZUI Tailwind configuration', async () => {
    const result = await postcss([tailwindcss(createTailwindConfig({preflight: false}))]).process('@tailwind base;', {from: undefined});
    const rules = new Map<string, Record<string, string>>();
    result.root.walkRules((rule) => {
        if ([':root', '.dark', '.light-in-dark', '.dark-auto'].includes(rule.selector)) {
            rules.set(rule.selector, declarations(rule));
        }
    });
    const light = themeVariables(createTheme(), 'light');
    const dark = themeVariables(createTheme(), 'dark');
    for (const [selector, generated] of [[':root', light], ['.dark', dark], ['.light-in-dark', light], ['.dark-auto', dark]] as const) {
        const expected = rules.get(selector)!;
        expect(expected, selector).toBeDefined();
        for (const [name, value] of Object.entries(expected)) {
            if (name.startsWith('--color-') && !['inherit', 'transparent', 'currentColor'].includes(value)) {
                expect(normalizeColor(generated[name]), `${selector} ${name}`).toBe(normalizeColor(value));
            }
        }
    }
    for (const key of Object.keys(light)) {
        expect(Object.hasOwn(rules.get(':root')!, key), key).toBe(true);
    }
    expect(light['--font-size-root']).toBe(rules.get(':root')!['--font-size-root']);
    for (const [name, value] of Object.entries(borderRadius)) {
        if (name !== 'none' && name !== 'full') {
            expect(light[`--radius${name === 'DEFAULT' ? '' : `-${name}`}`]).toBe(`${parseFloat(value) * 16}px`);
        }
    }
});

test('presets are independent, preserve known palettes, and arbitrary seeds keep their midpoint in both modes', () => {
    expect(presets).toHaveLength(6);
    for (const preset of presets) {
        const theme = createTheme(preset.id);
        expect(parseTheme(theme)).toEqual(theme);
        expect(themeVariables(theme, 'light')['--color-primary-500']).toBe(theme.colors.primary);
        theme.colors.primary = '#ff0000';
        expect(createTheme(preset.id).colors.primary).not.toBe('#ff0000');
    }
    const theme = createTheme();
    theme.colors.primary = '#123456';
    const light = themeVariables(theme, 'light');
    const dark = themeVariables(theme, 'dark');
    expect(light['--color-primary-500']).toBe('#123456');
    expect(dark['--color-primary-500']).toBe('#123456');
    expect(light['--color-primary-500-rgb']).toBe('18, 52, 86');
    for (const {key} of paletteFields) {
        expect(dark[`--color-${key}-50`]).toBe(light[`--color-${key}-950`]);
        expect(dark[`--color-${key}-200`]).toBe(light[`--color-${key}-800`]);
    }
    expect(light['--color-link-hover']).toBe(light['--color-primary-600']);
    expect(dark['--color-focus']).toBe(dark['--color-primary-200']);
    theme.dark.canvas = '#102030';
    theme.dark.surface = '#203040';
    theme.dark.fore = '#eeeeee';
    theme.radius = 8;
    theme.fontSize = 18;
    const customized = themeVariables(theme, 'dark');
    expect(customized['--color-canvas-rgb']).toBe('16, 32, 48');
    expect(customized['--color-surface-light']).not.toBe(dark['--color-surface-light']);
    expect(customized['--color-placeholder']).not.toBe(dark['--color-placeholder']);
    expect(customized['--radius-lg']).toBe('16px');
    expect(customized['--font-size-root']).toBe('18px');
});

test('storage parsing rejects malformed, unsupported and CSS-injectable data', () => {
    const theme = createTheme();
    const invalid: unknown[] = [null, false, [], '{}', {}, {...theme, version: 2}, {...theme, preset: 'unknown'}, {...theme, extra: true}];
    for (const radius of [-1, 17, NaN, Infinity, '4']) {
        invalid.push({...theme, radius});
    }
    for (const fontSize of [11, 21, NaN, Infinity, '16']) {
        invalid.push({...theme, fontSize});
    }
    for (const color of ['red', '#fff', '#ffffff; color: red', 'url(https://example.com)', null]) {
        invalid.push({...theme, colors: {...theme.colors, primary: color}});
    }
    invalid.push({...theme, dark: {canvas: '#ffffff'}});
    invalid.push({...theme, light: {...theme.light, extra: '#ffffff'}});
    for (const value of invalid) {
        expect(parseTheme(value)).toBeNull();
    }
    const custom = {...theme, preset: 'custom', colors: {...theme.colors, primary: '#ABCDEF'}};
    expect(parseTheme(custom)?.colors.primary).toBe('#abcdef');
    expect(parseTheme(custom)?.colors).not.toBe(custom.colors);
});

test('surface derivatives follow their edited inputs while neutral palette edits keep surface choices independent', () => {
    const theme = createTheme();
    const defaults = themeVariables(theme, 'light');
    theme.colors.gray = '#725545';
    const recolored = themeVariables(theme, 'light');
    expect(recolored['--color-gray-100']).not.toBe(defaults['--color-gray-100']);
    for (const key of ['surface', 'surface-light', 'surface-strong', 'border', 'border-light', 'border-strong']) {
        expect(recolored[`--color-${key}`]).toBe(defaults[`--color-${key}`]);
    }
    theme.light.canvas = '#fff0f0';
    const changedCanvas = themeVariables(theme, 'light');
    for (const key of ['surface-light', 'border-light', 'placeholder', 'canvas-dark']) {
        expect(changedCanvas[`--color-${key}`]).not.toBe(defaults[`--color-${key}`]);
    }
    theme.light.fore = '#443333';
    const changedForeground = themeVariables(theme, 'light');
    for (const key of ['surface-strong', 'border-strong']) {
        expect(changedForeground[`--color-${key}`]).not.toBe(defaults[`--color-${key}`]);
    }
});

test('export includes explicit modes, system mode and light islands with matching color and RGB declarations', () => {
    const theme = createTheme('iris');
    const css = exportThemeCSS(theme);
    expect(css).toContain('在 ZUI 的 CSS 之后引入');
    const root = postcss.parse(css);
    const rules = new Map<string, Record<string, string>>();
    root.walkRules((rule) => {
        rules.set(rule.selector, declarations(rule));
    });
    const light = themeVariables(theme, 'light');
    const dark = themeVariables(theme, 'dark');
    expect(rules.get(':root')).toMatchObject(light);
    expect(rules.get('.dark')).toMatchObject({'--color-primary-200': dark['--color-primary-200'], 'color-scheme': 'dark'});
    expect(rules.get('html:root.light, .light-in-dark')).toMatchObject({'--color-primary-200': light['--color-primary-200'], 'color-scheme': 'light'});
    root.walkAtRules('media', (rule) => {
        expect(rule.params).toBe('(prefers-color-scheme: dark)');
        expect((rule.nodes?.[0] as Rule | undefined)?.selector).toBe('html:root:not(.light):not(.dark), .dark-auto');
    });
    for (const values of rules.values()) {
        for (const [key, value] of Object.entries(values)) {
            if (key.startsWith('--color-') && !key.endsWith('-rgb')) {
                const components = [1, 3, 5].map(start => parseInt(value.slice(start, start + 2), 16));
                expect(values[`${key}-rgb`]).toBe(components.join(', '));
            }
        }
    }
});

test('default export preserves the native ZUI solid skin foreground contract', () => {
    const solidSkin = postcss.parse(readFileSync(new URL('../../lib/utilities/src/skin/solid.css', import.meta.url), 'utf8'));
    let nativeForeground: string | undefined;
    solidSkin.walkRules((rule) => {
        if (rule.selectors.includes('.primary') && declarations(rule)['--skin-text']) {
            nativeForeground = declarations(rule)['--skin-text'];
        }
    });
    expect(nativeForeground).toBe('rgba(var(--color-fore-in-dark-rgb), var(--tw-text-opacity, 1))');
    const exported = postcss.parse(exportThemeCSS(createTheme()));
    exported.walkDecls((declaration) => {
        expect(declaration.prop.startsWith('--skin-')).toBe(false);
        if (declaration.prop === '--color-fore-in-dark-rgb') {
            expect(declaration.value).toBe('255, 255, 255');
        }
    });
});
