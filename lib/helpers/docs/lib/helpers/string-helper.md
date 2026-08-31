# 字符串辅助方法

## `formatString`

格式化字符串。

::: info 定义：

```ts
/** 通过位置参数的形式格式化字符串。 */
function formatString(str: string, ...args: unknown[]): string;

/** 通过映射对象的形式格式化字符串。 */
function formatString(str: string, map: Record<string, unknown>): string;
```

**参数**：

* `str`：字符串；
* `args`：格式化参数；
* `map`：格式化参数映射对象。

**返回值**：`string`：格式化后的字符串。

:::

**示例**

```js
zui.formatString('{0} {1}!', 'Hello', 'world');           // 'Hello world!'
zui.formatString('Say {what} to {who}', {what: 'hi', who: 'you'}); // 'Say hi to you'
```

## `convertString`

按转换表达式对单个值进行链式转换。表达式使用 `|` 连接多个转换器，转换器参数通过 `:` 附加、以 `,` 分隔。

::: info 定义：

```ts
function convertString(
    value: unknown,
    expr: string | string[],
    converters?: Record<string, StringConverter>,
): string;
```

:::

内置转换器包括 `upper`、`lower`、`capitalize`、`snake`、`kebab`、`camel`、`base64`、`escape`、`date`、`bytes`、`truncate`、`ellipsis`、`mask`、`padStart`、`padEnd`、`currency` 等。

**示例**

```js
zui.convertString('jim', 'upper');            // 'JIM'
zui.convertString('123456', 'base64|quote');  // '"MTIzNDU2"'

// mask：保留前 start 位、后 end 位，中间以 * 遮蔽
zui.convertString('12345678901', 'mask');     // '123****8901'
zui.convertString('123456', 'mask:2,0');      // '12****'（尾部长度为 0 时不重复原字符串）
```

## `formatWithPipes`

在字符串模板中使用 `{key|converter:args}` 占位符，按对象属性取值并链式转换。

::: info 定义：

```ts
function formatWithPipes(
    str: string,
    obj: Record<string, unknown>,
    converters?: Record<string, StringConverter>,
): string;
```

:::

**示例**

```js
zui.formatWithPipes('My name is {name|upper}', {name: 'jim'});
// 'My name is JIM'
```

## 字节单位

`formatBytes` 将字节数格式化为带单位的字符串，`convertBytes` 则将带单位的字符串解析回字节数。

::: info 定义：

```ts
function formatBytes(size: number, fixed?: number, unit?: 'B' | 'KB' | 'MB' | 'GB' | 'TB'): string;
function convertBytes(str: string): number;
```

:::

`convertBytes` 支持十进制数值（例如 `1.5MB`），无法解析时返回 `0`。

**示例**

```js
zui.formatBytes(1572864);      // '1.50MB'
zui.convertBytes('1.5MB');     // 1572864
zui.convertBytes('100');       // 100（无单位时按字节处理）
```

## 编码与转义

::: info 定义：

```ts
function escapeHtml(html: string): string;
function encodeBase64(value: string): string;
function decodeBase64(value: string): string;
```

:::

`encodeBase64` / `decodeBase64` 支持 UTF-8 多字节字符。

**示例**

```js
zui.escapeHtml('<b>&"</b>');           // '&lt;b&gt;&amp;&quot;&lt;/b&gt;'
zui.decodeBase64(zui.encodeBase64('中文')); // '中文'（编码后可原样解码回来）
```
