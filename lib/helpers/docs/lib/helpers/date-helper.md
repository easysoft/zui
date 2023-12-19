# 日期辅助方法

## `createDate`

创建日期时间对象。

::: info 定义：

```ts
function createDate(dateLike: string | number | Date): Date;
```

**参数**：

* `dateLike`：日期时间对象或者日期时间字符串或者时间戳。

**返回值**：`Date`：日期时间对象。

:::

## `addDate`

在一个日期时间对象上增加指定的时间。

::: info **定义：**

```ts
function addDate(dateLike: string | number | Date, value: number, unit: string): Date;
```

**参数：**

* `dateLike`：日期时间对象或者日期时间字符串或者时间戳；
* `value`：增加的时间值；
* `unit`：增加的时间单位，可选值为：`year`、`month`、`day`、`hour`、`minute`、`second`。

**返回值：** `Date`：日期时间对象。

:::

## `formatDate`

格式化日期时间对象。

::: info **定义：**

```ts
function formatDate(dateLike: string | number | Date, format = 'yyyy-MM-dd hh:mm', invalidDateValue = ''): string;
```

**参数：**

* `dateLike`：日期时间对象或者日期时间字符串或者时间戳；
* `format`：格式化字符串，可选值为：`yyyy`、`MM`、`dd`、`hh`、`mm`、`ss`、`SSS`；
* `invalidDateValue`：无效日期时间对象时的返回值。

**返回值：** `string`：格式化后的日期时间字符串。

:::

所有支持的格式化占位符包括：

 * - `yyyy`，例如：`2018`，表示四位数字表示的年份
 * - `yy`，例如：`18`，表示两位数字表示的年份
 * - `MM`，例如：`07`，表示两位数字表示的月份，不足两位在起始用 0 填充
 * - `M`，例如：`10`，表示一位或两位数字表示的月份
 * - `dd`，例如：`05`，表示两位数字表示的日期，不足两位在起始用 0 填充
 * - `d`，例如：`5`，表示一位或两位数字表示的日期
 * - `hh`，例如：`08`，表示两位数字表示的小时，不足两位在起始用 0 填充
 * - `h`，例如：`8`，表示一位或两位数字表示的小时
 * - `mm`，例如：`03`，表示两位数字表示的分钟，不足两位在起始用 0 填充
 * - `m`，例如：`3`，表示一位或两位数字表示的分钟
 * - `ss`，例如：`05`，表示两位数字表示的秒数，不足两位在起始用 0 填充
 * - `s`，例如：`5`，表示一位或两位数字表示的秒数
 * - `S`，例如：`236`，表示毫秒数
 * - `SSS`，例如：`036`，表示毫秒数，不足3位在起始用 0 填充
