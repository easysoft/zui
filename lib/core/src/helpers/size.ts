export type SizeSetting<A extends unknown[] = unknown[]> = number | `${number}%` | `${number}px` | `${number}/${number}` | (string & {}) | ((...args: A) => SizeSetting);

export function parseSize<A extends unknown[] = unknown[]>(size: SizeSetting, callbackArgs?: A): [value: number, type?: 'px' | '%'] {
    if (typeof size === 'function') {
        return parseSize(size(...(callbackArgs || [])));
    }
    if (typeof size === 'number') {
        return [size];
    }
    const fraction = size.match(/^\s*(-?\d*\.?\d+)\s*\/\s*(-?\d*\.?\d+)\s*$/);
    if (fraction) {
        return [100 * parseFloat(fraction[1]) / parseFloat(fraction[2]), '%'];
    }
    const match = size.match(/(-?\d*\.?\d+)(%|px)?/);
    if (match) {
        return [parseFloat(match[1]), match[2] as 'px' | '%'];
    }
    return [NaN];
}

export function toCssSize<A extends unknown[] = unknown[]>(size: SizeSetting | undefined | null, callbackArgs?: A): string | null {
    if (size === undefined || size === null) {
        return null;
    }
    const [val, unit = 'px'] = parseSize(size, callbackArgs);
    if (Number.isNaN(val)) {
        return typeof size === 'string' ? size : null;
    }
    return `${val}${unit}`;
}
