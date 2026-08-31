/**
 * RGB 颜色值，依次为红、绿、蓝三个通道，取值范围 `[0, 255]`。
 */
export type RGBColor = [r: number, g: number, b: number];

/**
 * 把 HEX 颜色字符串转换为 RGB 颜色值。
 * @param hex 3 位或 6 位 HEX 颜色，可带 `#` 前缀，例如 `#f00`、`ff0000`
 * @returns RGB 颜色值
 * @throws 当输入不是合法的 3/6 位 HEX 颜色时抛出错误
 */
export function hex2Rgb(hex: string): RGBColor {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    // 必须校验每一位都是合法的十六进制字符，否则 `parseInt` 会得到 `NaN` 而返回非法 RGB。
    if (!/^[0-9a-fA-F]{6}$/.test(hex)) {
        throw new Error(`Invalid HEX color "${hex}".`);
    }
    return [
        parseInt(hex.slice(0, 2), 16), // r
        parseInt(hex.slice(2, 4), 16), // g
        parseInt(hex.slice(4, 6), 16), // b
    ];
}

/**
 * 判断颜色是否为亮色（基于人眼感知亮度）。
 * @param color HEX 颜色字符串或 RGB 颜色值
 * @returns 亮度超过阈值时返回 `true`
 */
export function isLightColor(color: string | RGBColor): boolean {
    const [r, g, b] = typeof color === 'string' ? hex2Rgb(color) : color;
    return (r * 0.299 + g * 0.587 + b * 0.114) > 186;
}

/**
 * 根据背景色选取可读的前景色。
 * @param color 背景色，HEX 颜色字符串或 RGB 颜色值
 * @param options 自定义前景色，`dark` 用于亮色背景（默认 `#333333`），`light` 用于暗色背景（默认 `#ffffff`）
 * @returns 与背景对比度较高的前景色
 */
export function contrastColor(color: string | RGBColor, options?: {dark: string; light: string}) {
    return isLightColor(color) ? (options?.dark ?? '#333333') : (options?.light ?? '#ffffff');
}

function clamp(value: number, max = 255): number {
    return Math.min(Math.max(value, 0), max);
}

/**
 * 把 HSL 颜色转换为 RGB 颜色值。
 * @param h 色相，单位为度，任意实数（内部按 360 取模）
 * @param s 饱和度，取值范围 `[0, 1]`，越界会被夹取到该范围
 * @param l 亮度，取值范围 `[0, 1]`，越界会被夹取到该范围
 * @returns RGB 颜色值
 */
export function hslToRgb(h: number, s: number, l: number): RGBColor {
    h = (h % 360) / 360;
    // s、l 的语义范围是 [0, 1]，必须按该范围夹取，否则越界输入会生成负值或超过 255 的 RGB。
    s = clamp(s, 1);
    l = clamp(l, 1);

    const m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
    const m1 = l * 2 - m2;

    const hue = (value: number): number => {
        value = value < 0 ? value + 1 : (value > 1 ? value - 1 : value);
        if (value * 6 < 1) {
            return m1 + (m2 - m1) * value * 6;
        } else if (value * 2 < 1) {
            return m2;
        } else if (value * 3 < 2) {
            return m1 + (m2 - m1) * (2 / 3 - value) * 6;
        } else {
            return m1;
        }
    };

    return [
        hue(h + 1 / 3) * 255,
        hue(h) * 255,
        hue(h - 1 / 3) * 255,
    ];
}
