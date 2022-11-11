export type RGBColor = [r: number, g: number, b: number];

export function hex2Rgb(hex: string): RGBColor {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error(`Invalid HEX color "${hex}".`);
    }
    return [
        parseInt(hex.slice(0, 2), 16), // r
        parseInt(hex.slice(2, 4), 16), // g
        parseInt(hex.slice(4, 6), 16), // b
    ];
}

export function isLightColor(color: string | RGBColor): boolean {
    const [r, g, b] = typeof color === 'string' ? hex2Rgb(color) : color;
    return (r * 0.299 + g * 0.587 + b * 0.114) > 186;
}

export function contrastColor(color: string | RGBColor, options?: {dark: string, light: string}) {
    return isLightColor(color) ? (options?.dark ?? '#333333') : (options?.light ?? '#ffffff');
}

function clamp(value: number, max = 255): number {
    return Math.min(Math.max(value, 0), max);
}

export function hslToRgb(h: number, s: number, l: number): RGBColor {
    h = (h % 360) / 360;
    s = clamp(s);
    l = clamp(l);

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
