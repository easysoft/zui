
/**
 * 格式化字符串
 * @param str 要格式化的字符串
 * @param args 格式化参数
 * @returns 格式化后的字符串
 * @example <caption>通过参数序号格式化</caption>
 *     const hello = formatString('{0} {1}!', 'Hello', 'world');
 *     // hello 值为 'Hello world!'
 */
export function formatString(str: string, ...args: unknown[]): string;

/**
  * 格式化字符串
  * @param str 要格式化的字符串
  * @param obj 格式化参数
  * @returns 格式化后的字符串
  * @example <caption>通过对象名称格式化</caption>
  *     const say = formatString('Say {what} to {who}', {what: 'hello', who: 'you'});
  *     // say 值为 'Say hello to you'
  */
export function formatString(str: string, obj: Record<string, unknown>): string;

export function formatString(str: string, ...args: [Record<string, unknown>] | unknown[]): string {
    if (args.length === 0) {
        return str;
    }
    if (args.length === 1 && typeof args[0] === 'object' && args[0]) {
        const obj = args[0];
        Object.keys(obj).forEach(key => {
            const value = obj[key] ?? 0;
            str = str.replace(new RegExp(`\\{${key}\\}`, 'g'), `${value}`);
        });
        return str;
    }

    for (let i = 0; i < args.length; i++) {
        const arg = args[i] ?? '';
        str = str.replace(new RegExp(`\\{${i}\\}`, 'g'), `${arg}`);
    }
    return str;
}

/**
 * 字节单位表
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
enum BYTE_UNITS {
    B = 1,
    KB = 1024,
    MB = 1024 * 1024,
    GB = 1024 * 1024 * 1024,
    TB = 1024 * 1024 * 1024 * 1024,
}

/**
 * 格式化字节值为包含单位的字符串
 * @param size 字节大小
 * @param fixed 保留的小数点位数
 * @param unit 单位，如果留空，则自动使用最合适的单位
 * @returns 格式化后的字符串
 */
export function formatBytes(size: number, fixed = 2, unit?: keyof typeof BYTE_UNITS) {
    if (Number.isNaN(size)) {
        return '?KB';
    }
    if (!unit) {
        if (size < BYTE_UNITS.KB) {
            unit = 'B';
        } else if (size < BYTE_UNITS.MB) {
            unit = 'KB';
        } else if (size < BYTE_UNITS.GB) {
            unit = 'MB';
        } else if (size < BYTE_UNITS.TB) {
            unit = 'GB';
        } else {
            unit = 'TB';
        }
    }

    return (size / BYTE_UNITS[unit]).toFixed(fixed) + unit;
}

/**
 * 转换带单位的字节字符串为字节数
 * @param str 带单位的字节字符串
 * @returns 字节数
 */
export const convertBytes = (str: string) => {
    const pattern = /^[0-9]*(B|KB|MB|GB|TB)$/;
    str = str.toUpperCase();
    const matchRes = str.match(pattern);
    if (!matchRes) {
        return 0;
    }
    const unit = matchRes[1] as keyof typeof BYTE_UNITS;
    str = str.replace(unit, '');
    return Number.parseInt(str, 10) * BYTE_UNITS[unit];
};
