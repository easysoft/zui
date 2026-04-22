import {type DateLike, formatDate, getDateTime} from './date-helper';

/**
 * 判断是否为字符串
 * @param value 要判断的值
 * @returns 如果为 `true` 则表示是字符串
 */
export function isNotEmptyString(value: unknown): value is string {
    return typeof value === 'string' && value !== '';
}

/**
 * 字符串转换器
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type StringConverter = (value: unknown, ...args: any[]) => unknown;

/**
 * 默认转换器集合
 */
const defaultConverters: Record<string, StringConverter> = {
    upper: (value: unknown) => String(value).toUpperCase(),
    lower: (value: unknown) => String(value).toLowerCase(),
    quote: (value: unknown) => `"${value}"`,
    singleQuote: (value: unknown) => `'${value}'`,
    code: (value: unknown) => `\`${value}\``,
    json: (value: unknown) => JSON.stringify(value),
    base64: (value: unknown) => encodeBase64(String(value)),
    base64Decode: (value: unknown) => decodeBase64(String(value)),
    escape: (value: unknown) => escapeHtml(String(value)),
    bytes: (value: unknown) => formatBytes(Number(value)),
    date: (value: unknown, format: string) => formatDate(value as DateLike, format),
    timestamp: (value: unknown) => String(getDateTime(value as DateLike)),
    urlEncode: (value: unknown) => encodeURIComponent(String(value)),
    urlDecode: (value: unknown) => decodeURIComponent(String(value)),
    capitalize: (value: unknown) => String(value).charAt(0).toUpperCase() + String(value).slice(1),
    snake: (value: unknown) => String(value).replace(/([a-z])([A-Z])/g, '$1_$2').replace(/[\s-]+/g, '_').toLowerCase(),
    kebab: (value: unknown) => String(value).replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[\s_]+/g, '-').toLowerCase(),
    camel: (value: unknown) => String(value).replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : ''),
    truncate: (value: unknown, length: string | number) => String(value).slice(0, Number(length)),
    ellipsis: (value: unknown, length: string | number) => {
        const str = String(value);
        const len = Number(length);
        return str.length > len ? str.slice(0, len) + '...' : str;
    },
    replace: (value: unknown, search: string, replace: string) => String(value).replace(search, replace ?? ''),
    replaceAll: (value: unknown, search: string, replace: string) => String(value).replaceAll(search, replace ?? ''),
    fixed: (value: unknown, fractionDigits = '2') => Number(value).toFixed(Number(fractionDigits)),
    currency: (value: unknown, currency = 'CNY') => new Intl.NumberFormat('zh-CN', {style: 'currency', currency}).format(Number(value)),
    mask: (value: unknown, start = '3', end = '4') => {
        const s = String(value);
        return s.slice(0, Number(start)) + '*'.repeat(Math.max(0, s.length - Number(start) - Number(end))) + s.slice(-Number(end));
    },
    join: (value: unknown, sep = ',') => Array.isArray(value) ? value.join(sep) : String(value),
    padStart: (value: unknown, len: string, pad = ' ') => String(value).padStart(Number(len), pad),
    padEnd: (value: unknown, len: string, pad = ' ') => String(value).padEnd(Number(len), pad),
    kebab: (value: unknown) => String(value).replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[\s_]+/g, '-').toLowerCase(),
    trim: (value: unknown) => String(value).trim(),
    trimStart: (value: unknown) => String(value).trimStart(),
    trimEnd: (value: unknown) => String(value).trimEnd(),
    default: (value: unknown, fallback: string) => (value === undefined || value === null || value === '' ? fallback : value),
};

/**
 * 占位符正则：匹配形如 `{key}`、`{key|converter}`、`{key|converter:arg1,arg2|converter2}` 的片段
 */
const PLACEHOLDER_REGEX = /\{([^{}]+)\}/g;

/**
 * 解析单个转换器表达式，例如 `date:yyyy-MM-dd HH:mm:ss`、`replace:foo,bar`
 *
 * - 转换器名称与参数之间使用第一个 `:` 分隔，以便参数中可以包含 `:`（例如日期格式 `HH:mm:ss`）
 * - 参数之间使用 `,` 分隔，参数前后的空白会被去除
 */
function parseConverterExpr(expr: string): {name: string; args: string[]} {
    const colonIdx = expr.indexOf(':');
    if (colonIdx === -1) {
        return {name: expr.trim(), args: []};
    }
    const name = expr.slice(0, colonIdx).trim();
    const argsStr = expr.slice(colonIdx + 1);
    const args = argsStr.split(',').map(arg => arg.trim());
    return {name, args};
}

/**
 * 转换字符串
 * @param str 要转换的字符串
 * @param expr 转换表达式
 * @param converters 转换器
 * @returns 转换后的字符串
 */
export function convertString(str: string, expr: string | string[], converters?: Record<string, StringConverter>): string {
    converters = converters || defaultConverters;
    const segments = typeof expr === 'string' ? expr.split('|') : expr;
    let value: unknown = str;
    for (let i = 1; i < segments.length; i++) {
        const {name, args} = parseConverterExpr(segments[i]);
        if (!name) {
            continue;
        }
        const converter = converters[name];
        if (!converter) {
            continue;
        }
        value = converter(value, ...args);
    }

    return value === undefined || value === null ? '' : String(value);
}

/**
 * 格式化字符串，并支持在格式化过程中进行转换
 *
 * 占位符格式：`{key[|converter[:arg1,arg2,...]][|converter2...]}`
 *
 * - `key` 为参数对象 `obj` 的属性名
 * - 可以使用 `|` 连接多个转换器，依次执行
 * - 转换器可以接受参数，参数通过 `:` 附加在转换器名称之后，多个参数使用 `,` 分隔
 * - 如果占位符对应的 `key` 在 `obj` 中不存在，占位符会原样保留
 *
 * @param str 要格式化的字符串
 * @param obj 格式化参数
 * @param converters 自定义转换器，会与默认转换器合并（自定义的同名转换器会覆盖默认的）
 * @returns 格式化后的字符串
 * @example <caption>通过对象名称格式化</caption>
 *     // 简单格式化
 *     const say = convertString('Say {what} to {who}', {what: 'hello', who: 'you'});
 *     // say 值为 'Say hello to you'
 *
 *     // 格式化并进行大写转换
 *     const say = convertString('My name is {name|upper}', {name: 'jim'});
 *     // say 值为 'My name is JIM'
 *
 *     // 格式化并进行日期转换
 *     const say = convertString('The date is {date|date:yyyy-MM-dd}', {date: new Date()});
 *     // say 值为 'The date is 2026-04-22'
 *
 *     // 多个转换器依次执行
 *     const say = convertString('The password is {password|base64|quote}', {password: '123456'});
 *     // say 值为 'The password is "MTIzNDU2"'
 */
export function formatWithPipes(str: string, obj: Record<string, unknown>, converters?: Record<string, StringConverter>): string {
    const allConverters: Record<string, StringConverter> = converters ? {...defaultConverters, ...converters} : defaultConverters;

    return str.replace(PLACEHOLDER_REGEX, (match, expr: string) => {
        const segments = expr.split('|');
        const key = segments[0].trim();
        if (!Object.prototype.hasOwnProperty.call(obj, key)) {
            return match;
        }

        return convertString(match, segments, allConverters);
    });
}

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
  *
  */
export function formatString(str: string, obj: Record<string, unknown>): string;

export function formatString(str: string, ...args: [Record<string, unknown>] | unknown[]): string {
    if (args.length === 0) {
        return str;
    }
    if (args.length === 1 && typeof args[0] === 'object' && args[0]) {
        return formatWithPipes(str, args[0] as Record<string, unknown>);
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
enum BYTE_UNITS {
    B = 1,
    KB = 1024,
    MB = 1048576,       // 1024 * 1024,
    GB = 1073741824,    // 1024 * 1024 * 1024,
    TB = 1099511627776, // 1024 * 1024 * 1024 * 1024,
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
    if (!str.endsWith('B')) {
        str += 'B';
    }
    const matchRes = str.match(pattern);
    if (!matchRes) {
        return 0;
    }
    const unit = matchRes[1] as keyof typeof BYTE_UNITS;
    str = str.replace(unit, '');
    return Number.parseInt(str, 10) * BYTE_UNITS[unit];
};

export const escapeHtml = (html: string) => {
    return html.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
};

export const encodeBase64 = (value: string): string => {
    const utf8 = encodeURIComponent(value).replace(/%([0-9A-F]{2})/g, (_, hex: string) => String.fromCharCode(parseInt(hex, 16)));
    return btoa(utf8);
};

export const decodeBase64 = (value: string): string => {
    const utf8 = atob(value);
    const encoded = Array.from(utf8).map((char) => {
        return `%${char.charCodeAt(0).toString(16).padStart(2, '0').toUpperCase()}`;
    }).join('');
    return decodeURIComponent(encoded);
};
