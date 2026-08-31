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
 * - `SSS`，例如：`005`，表示毫秒数，不足 3 位在起始用 0 填充

## 日期比较

一组用于比较两个日期时间的方法，第二个参数留空时默认使用当前系统时间。

::: info 定义：

```ts
function isSameDay(date1: DateLike, date2?: DateLike): boolean;
function isSameMonth(date1: DateLike, date2?: DateLike): boolean;
function isSameYear(date1: DateLike, date2?: DateLike): boolean;
function isSameWeek(date1: DateLike, date2?: DateLike): boolean;
```

**说明**：

* `isSameWeek` 以本地日历为准，且以**周一**作为一周的第一天。因此同一周的周一与周日返回 `true`，下一周的周一返回 `false`。

:::

**示例**

```js
zui.isSameDay('2026-08-01 08:00', '2026-08-01 20:00'); // true
zui.isSameWeek('2026-06-01', '2026-06-07');            // true（周一与同周周日）
zui.isSameWeek('2026-06-01', '2026-06-08');            // false（下一周周一）
```

## 相对日期判断

判断某个日期是否为今天、昨天或明天。这些方法基于**本地日历日期**计算，在夏令时切换等日长不为 24 小时的日期附近也能得到正确结果。

::: info 定义：

```ts
function isToday(date: DateLike, now?: DateLike): boolean;
function isYesterday(date: DateLike, now?: DateLike): boolean;
function isTomorrow(date: DateLike, now?: DateLike): boolean;
```

**参数**：

* `date`：要判断的日期时间表达值；
* `now`：作为“今天”判断依据的日期，留空时使用当前系统时间。

:::

**示例**

```js
zui.isYesterday('2026-07-31', '2026-08-01'); // true
zui.isTomorrow('2026-08-02', '2026-08-01');  // true
```

## `formatDateSpan`

格式化一个日期时间范围，自动省略两端相同的年、月部分。

::: info 定义：

```ts
function formatDateSpan(
    date1: DateLike,
    date2: DateLike,
    format?: {full?: string; month?: string; day?: string; str?: string},
): string;
```

:::
