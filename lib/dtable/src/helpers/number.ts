export function clamp(size: number, min?: number, max?: number): number {
    if (size) {
        if (min) {
            size = Math.max(min, size);
        }
        if (max) {
            size = Math.min(max, size);
        }
    }
    return size;
}

export function parseNumber(num: number | string, fallbackValue?: number) {
    if (typeof num === 'string') {
        num = num.endsWith('%') ? (parseFloat(num) / 100) : parseFloat(num);
    }
    if (typeof fallbackValue === 'number' && (typeof num !== 'number' || isNaN(num))) {
        num = fallbackValue;
    }
    return num;
}
