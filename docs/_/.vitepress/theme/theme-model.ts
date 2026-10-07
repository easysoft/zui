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

function preset(id: string, name: string, description: string, recipe: Omit<ThemeSettings, 'version' | 'preset'>) {
    const settings: ThemeSettings = {...recipe, version: 1, preset: id};
    return {id, name, description, settings};
}

export const presets = [
    preset('zui', 'ZUI 蓝', '标准画布、适中圆角，熟悉的阅读节奏', defaultSettings),
    preset('forest', '森林绿', '米白纸面、柔和圆角，阅读更舒展', {
        colors: {primary: '#35644b', secondary: '#8e7145', success: '#3f6b3c', warning: '#8a6828', danger: '#a8443d', important: '#935242', special: '#675586', gray: '#6e7967'},
        light: {canvas: '#f7f7ed', surface: '#e8eddd', fore: '#28372c', border: '#cbd4bb'},
        dark: {canvas: '#121e17', surface: '#23352a', fore: '#e3ebdd', border: '#3f5846'},
        radius: 6,
        fontSize: 17,
    }),
    preset('bay', '海湾青', '冷白画布、小圆角，信息更紧凑', {
        colors: {primary: '#087ea4', secondary: '#3154a6', success: '#287253', warning: '#926b14', danger: '#ba4055', important: '#a43e79', special: '#6556a7', gray: '#63778d'},
        light: {canvas: '#f4f8fc', surface: '#e1ebf5', fore: '#162c43', border: '#b8cbdc'},
        dark: {canvas: '#081522', surface: '#142b3f', fore: '#d8eafa', border: '#2c4c65'},
        radius: 2,
        fontSize: 15,
    }),
    preset('iris', '鸢尾紫', '雾紫表面、大圆角，层次柔和', {
        colors: {primary: '#7048b6', secondary: '#a13b80', success: '#34785d', warning: '#8c6b21', danger: '#b24458', important: '#a53577', special: '#7550a8', gray: '#806e8a'},
        light: {canvas: '#faf7ff', surface: '#eee5f7', fore: '#382c4d', border: '#d6c5e5'},
        dark: {canvas: '#1c1428', surface: '#30223f', fore: '#eee3fa', border: '#513d65'},
        radius: 10,
        fontSize: 16,
    }),
    preset('sunset', '落日橙', '暖砂纸面、直角轮廓，文字更醒目', {
        colors: {primary: '#b85a24', secondary: '#866328', success: '#596e35', warning: '#946c17', danger: '#b23d30', important: '#a24850', special: '#835477', gray: '#83715e'},
        light: {canvas: '#fff8ea', surface: '#f3e5cc', fore: '#453326', border: '#d9bc93'},
        dark: {canvas: '#24180f', surface: '#3a291a', fore: '#f8e7cc', border: '#64492e'},
        radius: 0,
        fontSize: 17,
    }),
    preset('rose', '玫瑰红', '淡粉瓷面、饱满圆角，轮廓柔软', {
        colors: {primary: '#a52f57', secondary: '#72568e', success: '#35765c', warning: '#946621', danger: '#b63847', important: '#9c3b73', special: '#80519b', gray: '#8e6b79'},
        light: {canvas: '#fff7f8', surface: '#f8e4e8', fore: '#4a2834', border: '#e5bdc8'},
        dark: {canvas: '#26141e', surface: '#422333', fore: '#fae3eb', border: '#704153'},
        radius: 12,
        fontSize: 16,
    }),
    preset('ink', '曜石黑', '黑白分明、硬朗直角，突出内容对比', {
        colors: {primary: '#171717', secondary: '#434343', success: '#276442', warning: '#886000', danger: '#b02a37', important: '#913563', special: '#59459a', gray: '#707070'},
        light: {canvas: '#ffffff', surface: '#ededed', fore: '#121212', border: '#303030'},
        dark: {canvas: '#101010', surface: '#202020', fore: '#f5f5f5', border: '#656565'},
        radius: 0,
        fontSize: 16,
    }),
    preset('code', '深空蓝', '编辑器灰阶、代码蓝，紧凑直线布局', {
        colors: {primary: '#0078d4', secondary: '#6f42c1', success: '#2e7435', warning: '#986a00', danger: '#c43c3c', important: '#b34482', special: '#7655a3', gray: '#707070'},
        light: {canvas: '#ffffff', surface: '#f8f8f8', fore: '#3b3b3b', border: '#cecece'},
        dark: {canvas: '#1f1f1f', surface: '#181818', fore: '#cccccc', border: '#3c3c3c'},
        radius: 2,
        fontSize: 14,
    }),
    preset('pop', '电光粉', '亮粉底色、大胆撞色，饱满大圆角', {
        colors: {primary: '#d00070', secondary: '#6b32d6', success: '#00805f', warning: '#946300', danger: '#c52040', important: '#a9006a', special: '#7730cf', gray: '#876075'},
        light: {canvas: '#fff5fb', surface: '#ffdcee', fore: '#400b2a', border: '#ed73b6'},
        dark: {canvas: '#230019', surface: '#3f062d', fore: '#fff1fb', border: '#b52b7b'},
        radius: 16,
        fontSize: 18,
    }),
    preset('celadon', '青瓷绿', '清冷瓷面、温润弧线，轻盈留白', {
        colors: {primary: '#207267', secondary: '#4c628c', success: '#34734c', warning: '#926719', danger: '#b64344', important: '#9a486d', special: '#69549b', gray: '#607970'},
        light: {canvas: '#eff9f6', surface: '#dceee8', fore: '#203e38', border: '#9bbfb3'},
        dark: {canvas: '#0c2524', surface: '#133632', fore: '#def4ec', border: '#427b70'},
        radius: 8,
        fontSize: 16,
    }),
    preset('gilded', '鎏金黄', '香槟金与石墨色，精细小圆角', {
        colors: {primary: '#86631c', secondary: '#414a3b', success: '#516b37', warning: '#936818', danger: '#b44534', important: '#925140', special: '#746084', gray: '#7a7665'},
        light: {canvas: '#fcfbf7', surface: '#efeadb', fore: '#302d26', border: '#a89b76'},
        dark: {canvas: '#171814', surface: '#282a23', fore: '#efe8cc', border: '#6c664f'},
        radius: 3,
        fontSize: 15,
    }),
    preset('cinnabar', '朱砂红', '朱红撞墨色、利落轮廓，醒目大字', {
        colors: {primary: '#ba3028', secondary: '#343b45', success: '#386a4b', warning: '#92611b', danger: '#b52335', important: '#9e345b', special: '#64508c', gray: '#7d706a'},
        light: {canvas: '#fffaf5', surface: '#f4e4d9', fore: '#32241f', border: '#b99786'},
        dark: {canvas: '#261612', surface: '#44231b', fore: '#ffece1', border: '#99634c'},
        radius: 1,
        fontSize: 18,
    }),
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

function contrast(foreground: string, background: string): number {
    const luminance = (hex: string) => {
        const [red, green, blue] = rgb(hex).map((value) => {
            const channel = value / 255;
            return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
        });
        return red * 0.2126 + green * 0.7152 + blue * 0.0722;
    };
    const a = luminance(foreground);
    const b = luminance(background);
    return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
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
    const linkShades = [500, 600, 700, 800, 900, 950] as const;
    let linkIndex = 0;
    if (isDark && contrast(palettes.primary[500], surface.canvas) < 4.5) {
        const readableIndex = linkShades.findIndex(shade => shade > 500 && [surface.canvas, surface.surface].every(background => contrast(palettes.primary[shade], background) >= 4.5));
        linkIndex = readableIndex < 0 ? linkShades.length - 1 : readableIndex;
    }
    const linkColor = (offset: number) => palettes.primary[linkShades[Math.min(linkIndex + offset, linkShades.length - 1)]];
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
        link: linkColor(0),
        'link-hover': linkColor(1),
        'link-visited': linkColor(2),
        'link-active': linkColor(3),
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
