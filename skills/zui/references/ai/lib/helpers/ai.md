# JS 辅助方法

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。先确认应用实际运行版本、导出、类型和 CSS。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{
  "schemaVersion": 1,
  "library": "helpers",
  "summary": "提供日期、字符串、颜色和对象路径的独立工具方法。",
  "keywords": [
    "日期",
    "格式化",
    "颜色",
    "对象路径",
    "helpers"
  ]
}
```

## overview

无 DOM 的日期、字符串、颜色与对象路径工具。适合格式化显示和处理数据；界面生命周期、事件与网络请求使用 [Core](../core/ai.md)。

## setup

workspace：`import {formatDate, deepGet} from '@zui/helpers';`，需要工作区包解析和 TypeScript 构建。主入口不加载 CSS。浏览器分发须包含 helpers，再从 `zui` 读取对应导出。不要把工作区包名视为独立 npm 发布承诺；标准 npm 的实际导出取决于所用包。Base64 方法需要环境提供 `btoa/atob`。

## vanilla

无。

## preact

无。

## web-components

无。

## css

无。

## css-variables

无。

## javascript

### javascript-create-date

```json
{"name": "createDate / getDateTime / TIME_DAY", "summary": "创建日期并统一读取毫秒时间戳。"}
```

```ts
createDate(date?: DateLike, forceNew?: boolean): Date;
getDateTime(date?: DateLike): number;
const TIME_DAY: number; // 86400000
```

| 参数 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| date | DateLike | 否 | 当前时间 | Date 原对象、数字或日期字符串 |
| forceNew | boolean | 否 | false | 传 Date 时是否复制对象 |

数字小于 `10000000000` 按秒乘 1000，其他数字按毫秒；纯数字字符串走同一规则。`yyyy-MM-dd` 按本地零点解析。传 Date 默认返回原对象；无效日期保留 Invalid Date，`getDateTime` 返回 NaN。`TIME_DAY` 是固定毫秒数，不等价于跨夏令时的一天日历增量。

workspace：`createDate('2026-10-22'); getDateTime(1700000000);`。来源：[日期实现](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/helpers/src/date-helper.ts>)。


### javascript-add-date

```json
{"name": "addDate", "summary": "按本地日历单位增加或减少日期。"}
```

```ts
addDate(date: DateLike, value: number | string, type: DurationType = 'day'): Date;
```

`value` 数字用 `type`；字符串如 `"2day"` 用 parseInt 得到数量，再取剩余字符作为单位。支持 day/month/year/week/hour/minute/second，未匹配单位按 day。返回新 Date，不修改传入 Date；月末按原生 setMonth 进位，没有月末钳制。

workspace：`addDate('2026-10-22', -1, 'week');`。来源：[实现](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/helpers/src/date-helper.ts>)。


### javascript-date-comparison

```json
{"name": "isSameDay / isSameWeek / isSameMonth / isSameYear / isToday / isYesterday / isTomorrow / isValidDate", "summary": "比较本地日历日期或校验日期有效性。"}
```

```ts
isSameDay(date1: DateLike, date2?: DateLike): boolean;
isSameWeek(date1: DateLike, date2?: DateLike): boolean;
isSameMonth(date1: DateLike, date2?: DateLike): boolean;
isSameYear(date1: DateLike, date2?: DateLike): boolean;
isToday(date: DateLike, now?: DateLike): boolean;
isYesterday(date: DateLike, now?: DateLike): boolean;
isTomorrow(date: DateLike, now?: DateLike): boolean;
isValidDate(date: DateLike): boolean;
```

第二个日期默认为当前时间；同周以本地周一零点为起点。`isValidDate` 对 null/undefined 返回 false，其他值按 createDate 解析。比较前推荐校验输入，避免原生 Invalid Date 的比较行为。

workspace：`isSameWeek('2026-10-22', '2026-10-23'); isToday(new Date());`。来源：[实现](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/helpers/src/date-helper.ts>)。


### javascript-format-date

```json
{"name": "formatDate / formatDateSpan", "summary": "格式化单个日期或日期范围。"}
```

```ts
formatDate(date: DateLike, format: string | DateFormatter = 'yyyy-MM-dd hh:mm', invalidDateValue = ''): string;
formatDateSpan(date1: DateLike, date2: DateLike, format?: {full?: string; month?: string; day?: string; str?: string}): string;
```

`formatDate` 接受函数 `(date: Date) => string`；无效日期返回 invalidDateValue。格式符：yyyy/yy 年，M/MM 月，d/dd 日，h/hh 24 小时，H/HH 为小时 `% 12`（午夜/中午为 0），m/mm 分，s/ss 秒，S/SSS 毫秒。`[yyyy-]` 在同年省略年份。按本地时区读取字段。

`formatDateSpan` 默认 `{full:'yyyy-M-d',month:'M-d',day:'d',str:'{0} ~ {1}'}`；按同年、同月、同日缩短右端，同日只输出一次。

workspace：`formatDate('2026-10-22', 'yyyy/MM/dd'); formatDateSpan('2026-10-22', '2026-10-24');`。来源：[实现](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/helpers/src/date-helper.ts>)。


### javascript-string-format

```json
{"name": "isNotEmptyString / formatString / formatWithPipes / convertString", "summary": "替换字符串占位符并按管道转换值。"}
```

```ts
isNotEmptyString(value: unknown): value is string;
formatString(str: string, ...args: unknown[]): string;
formatString(str: string, obj: Record<string, unknown>): string;
formatWithPipes(str: string, obj: Record<string, unknown>, converters?: Record<string, StringConverter>): string;
convertString(value: unknown, expr: string | string[], converters?: Record<string, StringConverter>): string;
```

`isNotEmptyString` 不 trim，空格字符串也通过。`formatString` 的位置参数替换 `{0}` 等，null/undefined 替换为空串；唯一对象参数转入 formatWithPipes。对象缺少自有属性时保留占位符原文。

管道形式 `{key|converter:arg1,arg2|next}`，参数以第一个冒号分隔、逗号拆分并 trim；未知转换器忽略。`convertString` 直接传 converters 时替换默认集合；`formatWithPipes` 则合并并覆盖同名默认转换器。最终 null/undefined 返回空串；转换器异常向外传播。

内置转换器：upper/lower/quote/singleQuote/code/json/base64/base64Decode/escape/bytes/date/timestamp/urlEncode/urlDecode/capitalize/snake/kebab/camel/truncate/ellipsis/replace/replaceAll/fixed/currency/mask/join/padStart/padEnd/trim/trimStart/trimEnd/default。

带参数者：json(space)、date(format)、truncate(length)、ellipsis(length，超长追加 `...`)、replace/replaceAll(search,replacement='')、fixed(digits=2)、currency(code='CNY'，locale zh-CN)、mask(start=3,end=4)、join(separator=','，仅数组 join)、padStart/padEnd(length,pad=' ')、default(fallback，匹配 null/undefined/空串)。字符串分隔规则不支持在参数中转义逗号或管道符。

workspace：`formatString('{0} 项', 3); formatWithPipes('{name|trim|upper}', {name:' zui '});`。来源：[实现](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/helpers/src/string-helper.ts>)。


### javascript-bytes

```json
{"name": "formatBytes / convertBytes", "summary": "转换字节数量与带单位字符串。"}
```

```ts
formatBytes(size: number, fixed = 2, unit?: 'B' | 'KB' | 'MB' | 'GB' | 'TB'): string;
convertBytes(str: string): number;
```

单位倍率为 1024。formatBytes 未指定单位自动选择，NaN 返回 `?KB`，小数精度遵循 Number.toFixed（非法精度可抛异常）。convertBytes 支持小数，大小写不敏感，未含 B 后缀则追加 B；不 trim，不支持负数/空格，无法解析返回 0。

workspace：`formatBytes(1536); convertBytes('1.5MB');`。来源：[实现](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/helpers/src/string-helper.ts>)。


### javascript-encoding

```json
{"name": "escapeHtml / encodeBase64 / decodeBase64 / getUniqueCode", "summary": "转义 HTML 文本、编码 Base64 和计算简单字符串编码。"}
```

```ts
escapeHtml(html: string): string;
encodeBase64(value: string): string;
decodeBase64(value: string): string;
getUniqueCode(str: string): number;
```

escapeHtml 转义 `& < > " '`，用于文本，不负责 URL 协议和 JavaScript 上下文校验。Base64 支持 UTF-8，非法 Base64、非法 UTF-8 或不成对代理字符可能由底层编码 API 抛错。getUniqueCode 累加 `(索引+1)*字符码`，非字符串运行时先 String 转换；允许碰撞，不用于密码学或唯一标识保证。

workspace：`decodeBase64(encodeBase64('禅道')); escapeHtml('<b>'); getUniqueCode('zui');`。来源：[字符串](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/helpers/src/string-helper.ts>)、[编码](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/helpers/src/string-code.ts>)。


### javascript-color

```json
{"name": "hex2Rgb / isLightColor / contrastColor / hslToRgb", "summary": "解析颜色、判断亮度并选择前景色。"}
```

```ts
hex2Rgb(hex: string): RGBColor;
isLightColor(color: string | RGBColor): boolean;
contrastColor(color: string | RGBColor, options?: {dark: string; light: string}): string;
hslToRgb(h: number, s: number, l: number): RGBColor;
```

HEX 仅接受带或不带 # 的三/六位十六进制，非法值抛 Error。亮度 `r*0.299+g*0.587+b*0.114 > 186` 判断为亮色；亮背景返回 dark（默认 #333333），暗背景返回 light（默认 #ffffff）。RGB 输入按调用者给值，不额外校验。

h 单位度并按 360 取余，s/l 范围 [0,1] 并夹取；RGB 通道可能为小数，不自动取整。不处理 alpha。

workspace：`hex2Rgb('#f00'); contrastColor('#ffffff'); hslToRgb(120, 1, 0.5);`。来源：[实现](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/helpers/src/color-helper.ts>)。


### javascript-deep-access

```json
{"name": "deepGetPath / deepGet / deepCall", "summary": "沿对象路径取值、返回访问过程或调用方法。"}
```

```ts
deepGetPath(object: object, pathName: string | string[]): unknown[];
deepGet<T>(object: object, pathName: string | string[], defaultValue?: T, onGetParent?: (parent: object, name: string) => void): T | undefined;
deepCall(object: object, pathName: string | string[], args?: unknown[], thisObj?: unknown, throws?: boolean): unknown;
```

路径支持点分隔和段内一组下标，例如 `a[0].b`；Map 下标按字符串键获取，不是完整 JS 表达式解析器。不修改传入路径数组。

deepGetPath 返回包含原对象的沿途值数组；无法继续遍历或下标对象非法时抛 Error，末级属性不存在可得到 undefined。deepGet 捕获路径和 onGetParent 错误并返回 defaultValue，仅 undefined 触发默认值，null 保留。deepCall 用找到的父对象作为 this，可用 thisObj 覆盖；目标非函数时默认原样返回，throws=true 时抛 Error，目标函数自身错误向外传播。

workspace：`deepGet({a:[{b:1}]}, 'a[0].b', 0); deepCall({value:2, read(){return this.value;}}, 'read');`。来源：[实现](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/helpers/src/object/deep-get.ts>)。

## types

### types-helper-values

```json
{"name": "DateLike / DurationType / DateFormatter / StringConverter / RGBColor", "summary": "工具方法的输入与回调类型。"}
```

```ts
type DateLike = Date | number | string;
type DurationType = 'day' | 'month' | 'year' | 'week' | 'hour' | 'minute' | 'second';
type DateFormatter = (date: Date) => string;
type StringConverter = (value: unknown, ...args: any[]) => unknown;
type RGBColor = [r: number, g: number, b: number];
```

从 `@zui/helpers` 使用 `import type`。RGB 约定范围 [0,255]；接口不会为所有使用方自动钳制。

## recipes

workspace，示例只依赖 helpers：

```ts
import {formatDate, formatBytes, formatWithPipes, deepGet} from '@zui/helpers';
const file = {name: 'report', info: {size: 1536}};
const message = formatWithPipes('{name|upper} · {size}', {
    name: file.name,
    size: formatBytes(deepGet<number>(file, 'info.size', 0)!),
});
console.log(formatDate('2026-10-22', 'yyyy-MM-dd'), message);
```

## constraints

日期按运行环境本地时区运算；需要指定业务时区时在调用前后转换。颜色亮度阈值不是 WCAG 对比度验收。字符串转义不执行 HTML 清洗，简单编码不保证唯一。函数无订阅/销毁生命周期，调用结果中的对象引用规则见各条目。

## references

- [公开入口](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/helpers/src/main.ts>)
- [包元数据](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/helpers/package.json>)
- [日期实现](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/helpers/src/date-helper.ts>)
- [字符串实现](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/helpers/src/string-helper.ts>)
- [颜色实现](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/helpers/src/color-helper.ts>)
- [路径实现](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/helpers/src/object/deep-get.ts>)
