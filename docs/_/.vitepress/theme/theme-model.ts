import colors from 'tailwindcss/colors';

export type ThemeMode = 'light' | 'dark';

export const paletteFields = [
    {key: 'primary', label: '主要'},
    {key: 'secondary', label: '次要'},
    {key: 'success', label: '成功'},
    {key: 'warning', label: '警告'},
    {key: 'danger', label: '危险'},
    {key: 'important', label: '重要'},
    {key: 'special', label: '特殊'},
    {key: 'gray', label: '中性'},
] as const;

export const surfaceFields = [
    {key: 'canvas', label: '页面背景'},
    {key: 'surface', label: '面板背景'},
    {key: 'fore', label: '正文文字'},
    {key: 'border', label: '边框'},
] as const;

export type PaletteKey = typeof paletteFields[number]['key'];
export type SurfaceKey = typeof surfaceFields[number]['key'];

export interface ThemeSettings {
    version: 1;
    preset: string;
    colors: Record<PaletteKey, string>;
    light: Record<SurfaceKey, string>;
    dark: Record<SurfaceKey, string>;
    radius: number;
    fontSize: number;
}

const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;
type Shade = typeof shades[number];
type Palette = Record<Shade, string>;
const originalPalettes = {
    primary: colors.blue,
    secondary: colors.sky,
    success: colors.green,
    warning: colors.amber,
    danger: colors.red,
    important: colors.pink,
    special: colors.purple,
    gray: colors.slate,
};
const knownPalettes = [...Object.values(originalPalettes), colors.emerald, colors.teal, colors.violet, colors.orange, colors.rose];
const defaultSettings: ThemeSettings = {
    version: 1,
    preset: 'zui',
    colors: Object.fromEntries(paletteFields.map(({key}) => [key, originalPalettes[key][500]])) as ThemeSettings['colors'],
    light: {canvas: '#ffffff', surface: colors.slate[100], fore: colors.slate[800], border: colors.slate[200]},
    dark: {canvas: colors.slate[950], surface: colors.slate[800], fore: colors.slate[300], border: colors.slate[800]},
    radius: 4,
    fontSize: 16,
};

function preset(id: string, name: string, description: string, primary: string, secondary: string) {
    return {id, name, description, settings: {
        ...defaultSettings,
        preset: id,
        colors: {...defaultSettings.colors, primary, secondary},
        light: {...defaultSettings.light},
        dark: {...defaultSettings.dark},
    }};
}

export const presets = [
    preset('zui', 'ZUI 蓝', '清晰、熟悉的默认主题', colors.blue[500], colors.sky[500]),
    preset('forest', '森林绿', '自然沉静的绿色调', colors.emerald[500], colors.green[500]),
    preset('bay', '海湾青', '轻盈清爽的青色调', colors.teal[500], colors.sky[500]),
    preset('iris', '鸢尾紫', '柔和鲜明的紫色调', colors.violet[500], colors.purple[500]),
    preset('sunset', '落日橙', '明快温暖的橙色调', colors.orange[500], colors.amber[500]),
    preset('rose', '玫瑰红', '温润活泼的红色调', colors.rose[500], colors.pink[500]),
];

export function createTheme(id = 'zui'): ThemeSettings {
    const settings = (presets.find(item => item.id === id) ?? presets[0]).settings;
    return {...settings, colors: {...settings.colors}, light: {...settings.light}, dark: {...settings.dark}};
}

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function hasKeys(value: Record<string, unknown>, keys: readonly string[]) {
    return Object.keys(value).length === keys.length && keys.every(key => Object.hasOwn(value, key));
}

function isColorRecord(value: unknown, keys: readonly string[]): value is Record<string, string> {
    return isRecord(value) && hasKeys(value, keys) && Object.values(value).every(color => typeof color === 'string' && /^#[\da-f]{6}$/i.test(color));
}

/** Validate local storage before any value becomes a CSS declaration. */
export function parseTheme(value: unknown): ThemeSettings | null {
    if (!isRecord(value) || !hasKeys(value, ['version', 'preset', 'colors', 'light', 'dark', 'radius', 'fontSize'])
        || value.version !== 1 || typeof value.preset !== 'string'
        || (value.preset !== 'custom' && !presets.some(item => item.id === value.preset))
        || !isColorRecord(value.colors, paletteFields.map(({key}) => key))
        || !isColorRecord(value.light, surfaceFields.map(({key}) => key))
        || !isColorRecord(value.dark, surfaceFields.map(({key}) => key))
        || typeof value.radius !== 'number' || !Number.isFinite(value.radius) || value.radius < 0 || value.radius > 16
        || typeof value.fontSize !== 'number' || !Number.isFinite(value.fontSize) || value.fontSize < 12 || value.fontSize > 20) {
        return null;
    }
    const normalize = (record: Record<string, string>) => Object.fromEntries(Object.entries(record).map(([key, color]) => [key, color.toLowerCase()]));
    return {
        version: 1,
        preset: value.preset,
        colors: normalize(value.colors) as ThemeSettings['colors'],
        light: normalize(value.light) as ThemeSettings['light'],
        dark: normalize(value.dark) as ThemeSettings['dark'],
        radius: value.radius,
        fontSize: value.fontSize,
    };
}

function rgb(hex: string): number[] {
    return [1, 3, 5].map(start => parseInt(hex.slice(start, start + 2), 16));
}

function mix(color: string, other: string, amount: number): string {
    const target = rgb(other);
    return `#${rgb(color).map((value, index) => Math.round(value + (target[index] - value) * amount).toString(16).padStart(2, '0')).join('')}`;
}

function makePalette(seed: string): Palette {
    const original = knownPalettes.find(palette => palette[500].toLowerCase() === seed.toLowerCase());
    if (original) {
        return {...original};
    }
    // ponytail: RGB tints/shades keep arbitrary color input predictable; use a perceptual model only if needed.
    const amounts = [0.96, 0.9, 0.75, 0.55, 0.28, 0, 0.16, 0.32, 0.48, 0.64, 0.8];
    return Object.fromEntries(shades.map((shade, index) => [shade, mix(seed, shade < 500 ? '#ffffff' : '#000000', amounts[index])])) as Palette;
}

export function themeVariables(settings: ThemeSettings, mode: ThemeMode): Record<string, string> {
    const variables: Record<string, string> = {};
    const addColor = (name: string, color: string) => {
        variables[`--color-${name}`] = color;
        variables[`--color-${name}-rgb`] = rgb(color).join(', ');
    };
    const palettes = {} as Record<PaletteKey, Palette>;
    for (const {key} of paletteFields) {
        const palette = makePalette(settings.colors[key]);
        palettes[key] = Object.fromEntries(shades.map((shade, index) => [shade, palette[mode === 'dark' ? shades[shades.length - 1 - index] : shade]])) as Palette;
        for (const shade of shades) {
            addColor(`${key}-${shade}`, palettes[key][shade]);
        }
    }
    const surface = settings[mode];
    const defaults = defaultSettings[mode];
    const gray = originalPalettes.gray;
    const isDark = mode === 'dark';
    const derive = (keys: SurfaceKey[], original: string, customized: string) => keys.every(key => surface[key].toLowerCase() === defaults[key]) ? original : customized;
    const specialColors = {
        black: '#000000',
        white: '#ffffff',
        canvas: surface.canvas,
        'canvas-light': settings.light.canvas,
        'canvas-dark': settings.light.canvas.toLowerCase() === defaultSettings.light.canvas && settings.light.fore.toLowerCase() === defaultSettings.light.fore ? gray[50] : mix(settings.light.canvas, settings.light.fore, 0.025),
        inverse: isDark ? '#ffffff' : '#000000',
        surface: surface.surface,
        'surface-light': derive(['surface', 'canvas'], isDark ? gray[900] : gray[50], mix(surface.surface, surface.canvas, 0.5)),
        'surface-strong': derive(['surface', 'fore'], isDark ? gray[700] : gray[200], mix(surface.surface, surface.fore, 0.08)),
        fore: surface.fore,
        'fore-in-light': settings.light.fore,
        'fore-in-dark': '#ffffff',
        focus: palettes.primary[200],
        link: palettes.primary[500],
        'link-hover': palettes.primary[600],
        'link-visited': palettes.primary[700],
        'link-active': palettes.primary[800],
        placeholder: derive(['fore', 'canvas'], isDark ? gray[600] : gray[400], mix(surface.fore, surface.canvas, 0.5)),
        border: surface.border,
        'border-light': derive(['border', 'canvas'], isDark ? gray[900] : gray[100], mix(surface.border, surface.canvas, 0.45)),
        'border-strong': derive(['border', 'fore'], isDark ? gray[700] : gray[300], mix(surface.border, surface.fore, 0.2)),
    };
    for (const [key, color] of Object.entries(specialColors)) {
        addColor(key, color);
    }
    variables['--radius'] = `${settings.radius}px`;
    for (const [key, factor] of Object.entries({sm: 0.5, md: 1.5, lg: 2, xl: 3, '2xl': 4, '3xl': 6})) {
        variables[`--radius-${key}`] = `${settings.radius * factor}px`;
    }
    variables['--font-size-root'] = `${settings.fontSize}px`;
    return variables;
}

export function exportThemeCSS(settings: ThemeSettings): string {
    const light = themeVariables(settings, 'light');
    const dark = themeVariables(settings, 'dark');
    const block = (selector: string, values: Record<string, string>, mode: ThemeMode) => `${selector} {\n    color-scheme: ${mode};\n${Object.entries(values).map(([key, value]) => `    ${key}: ${value};`).join('\n')}\n}`;
    const colorsOnly = (values: Record<string, string>) => Object.fromEntries(Object.entries(values).filter(([key]) => key.startsWith('--color-')));
    return [
        '/* ZUI 3 自定义主题：在 ZUI 的 CSS 之后引入本文件。',
        ' * 默认跟随系统；在 <html> 添加 class="light" 或 class="dark" 可固定模式。',
        ' * .dark-auto 跟随系统；.light-in-dark 可在深色页面中保留浅色区域。',
        ' */',
        block(':root', light, 'light'),
        '@media (prefers-color-scheme: dark) {',
        block('html:root:not(.light):not(.dark), .dark-auto', colorsOnly(dark), 'dark').split('\n').map(line => `    ${line}`).join('\n'),
        '}',
        block('.dark', colorsOnly(dark), 'dark'),
        block('html:root.light, .light-in-dark', colorsOnly(light), 'light'),
        '',
    ].join('\n\n');
}
