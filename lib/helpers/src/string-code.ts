export function getUniqueCode(str: string): number {
    let code = 0;
    if (typeof str !== 'string') str = String(str);
    if (str && str.length) {
        for (let i = 0; i < str.length; ++i) {
            code += (i + 1) * str.charCodeAt(i);
        }
    }
    return code;
}
