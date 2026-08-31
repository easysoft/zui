/**
 * 根据字符串内容计算一个稳定的数值编码，可用于生成简单的哈希或索引。
 *
 * 相同内容始终得到相同结果，但不保证不同字符串之间不冲突，不可用于安全场景。
 * @param str 输入字符串（非字符串会先转为字符串）
 * @returns 数值编码
 */
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
