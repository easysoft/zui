import 'zui-dev';
import {$} from '@zui/core';
import {
    formatDate,
    isSameWeek,
    isYesterday,
    isTomorrow,
    formatDateSpan,
    convertString,
    convertBytes,
    formatBytes,
    deepGet,
    deepGetPath,
    hex2Rgb,
    hslToRgb,
    contrastColor,
} from './src/main';

/**
 * 运行一组示例并把 `名称 => 结果` 收集为文本行。
 */
function runExamples(): string[] {
    const lines: string[] = [];
    const show = (name: string, value: unknown) => {
        lines.push(`${name.padEnd(38)} => ${typeof value === 'string' ? value : JSON.stringify(value)}`);
    };

    lines.push('# 日期');
    const now = new Date(2026, 7, 1, 9, 30, 0, 5); // 2026-08-01 09:30:00.005
    show(`formatDate(now, 'yyyy-MM-dd hh:mm:ss.SSS')`, formatDate(now, 'yyyy-MM-dd hh:mm:ss.SSS'));
    show(`formatDate(now, 'S')`, formatDate(now, 'S'));
    show(`isSameWeek('2026-06-01','2026-06-07')`, isSameWeek('2026-06-01', '2026-06-07'));
    show(`isSameWeek('2026-06-01','2026-06-08')`, isSameWeek('2026-06-01', '2026-06-08'));
    show(`isYesterday('2026-07-31','2026-08-01')`, isYesterday('2026-07-31', '2026-08-01'));
    show(`isTomorrow('2026-08-02','2026-08-01')`, isTomorrow('2026-08-02', '2026-08-01'));
    show(`formatDateSpan('2026-08-01','2026-08-05')`, formatDateSpan('2026-08-01', '2026-08-05'));

    lines.push('');
    lines.push('# 字符串');
    show(`convertBytes('1.5MB')`, convertBytes('1.5MB'));
    show(`convertBytes('100')`, convertBytes('100'));
    show(`convertBytes('bad')`, convertBytes('bad'));
    show('formatBytes(1572864)', formatBytes(1572864));
    show(`convertString('12345678901','mask')`, convertString('12345678901', 'mask'));
    show(`convertString('123456','mask:2,0')`, convertString('123456', 'mask:2,0'));
    show(`convertString('jim','upper')`, convertString('jim', 'upper'));

    lines.push('');
    lines.push('# 对象');
    const object = {a: [{b: {c: 1}, d: 2}]};
    show(`deepGet(object,'a[0].b.c')`, deepGet(object, 'a[0].b.c'));
    show(`deepGet(object,'a.x.y', 0)`, deepGet(object, 'a.x.y', 0));
    const path = ['a', '0']; // 复用同一数组，验证 deepGetPath 不会修改入参
    const before = JSON.stringify(path);
    deepGetPath(object, path);
    show('deepGetPath 不修改入参数组', before === JSON.stringify(path));

    lines.push('');
    lines.push('# 颜色');
    show(`hex2Rgb('#f00')`, hex2Rgb('#f00'));
    show('hslToRgb(120, 1, 0.5)', hslToRgb(120, 1, 0.5));
    show('hslToRgb(120, 5, 2) 越界夹取', hslToRgb(120, 5, 2));
    show(`contrastColor('#ffffff')`, contrastColor('#ffffff'));

    return lines;
}

onPageUpdate(() => {
    const output = $('#helpersOutput');

    const render = (lines: string[]) => {
        output.text(lines.join('\n'));
        console.log('[helpers]\n' + lines.join('\n'));
    };

    $('#runHelpers').on('click', () => {
        render(runExamples());
    });

    $('#runError').on('click', () => {
        try {
            hex2Rgb('zzzzzz');
            render(['未抛出错误（不符合预期）']);
        } catch (error) {
            render([`hex2Rgb('zzzzzz') 抛出错误：`, String(error)]);
            console.log('[helpers] expected error', error);
        }
    });

    // 首次加载即运行一次，便于直接观察。
    render(runExamples());
});
