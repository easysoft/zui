export type SizeSetting = number | `${number}%` | `${number}px` | `${number}/${number}` | (string & {}) | ((...args: unknown[]) => SizeSetting);

export function parseSize(size: SizeSetting, callbackArgs: unknown[] = []): [value: number, type?: 'px' | '%'] {
    if (typeof size === 'function') {
        return parseSize(size(...callbackArgs));
    }
    if (typeof size === 'number') {
        return [size];
    }
    let match = size.match(/(\d+)(%|px)?/);
    if (match) {
        return [parseInt(match[1]), match[2] as 'px' | '%'];
    }
    match = size.match(/(\d+)\/(\d+)/);
    if (match) {
        return [100 * parseInt(match[1]) / parseInt(match[2]), '%'];
    }
    return [NaN];
}

export function toCssSize(size: SizeSetting | undefined | null, callbackArgs?: unknown[]): string | null {
    if (size === undefined || size === null) {
        return null;
    }
    const [val, unit = 'px'] = parseSize(size, callbackArgs);
    if (Number.isNaN(val)) {
        return typeof size === 'string' ? size : null;
    }
    return `${val}${unit}`;
}
