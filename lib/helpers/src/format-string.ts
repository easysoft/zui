
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
