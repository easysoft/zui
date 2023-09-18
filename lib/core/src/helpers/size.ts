export type SizeSetting = number | `${number}%` | `${number}px` | `${number}/${number}` | (string & {});

export function parseSize(params: SizeSetting): [value: number, type?: 'px' | '%'] {
    if (typeof params === 'number') {
        return [params];
    }
    let match = params.match(/(\d+)(%|px)?/);
    if (match) {
        return [parseInt(match[1]), match[2] as 'px' | '%'];
    }
    match = params.match(/(\d+)\/(\d+)/);
    if (match) {
        return [100 * parseInt(match[1]) / parseInt(match[2]), '%'];
    }
    return [NaN];
}
