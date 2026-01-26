# 时间标签

## 日期时间格式化标签

支持日期时间格式化标签，可以自定义日期时间格式。

::: tabs

== 示例

<Example>
  <p>现在是：<strong zui-create="timespan" zui-create-timespan="{time: Date.now(), format: 'yyyy年MM月dd日 HH:mm'}"></strong></p>
  <p>不合法的时间：<u zui-create="timespan" zui-create-timespan="{time: '2026-1x23 10:00:00', format: 'yyyy年MM月dd日 HH:mm'}"></u></p>
</Example>

== HTML

```html
<p>现在是：<strong zui-create="timespan" zui-create-timespan="{time: Date.now(), format: 'yyyy年MM月dd日 HH:mm'}"></strong></p>
<p>不合法的时间：<u zui-create="timespan" zui-create-timespan="{time: '2026-1x23 10:00:00', format: 'yyyy年MM月dd日 HH:mm'}"></u></p>
```

:::

## 相对时间标签

支持将给定时间显示为相对当前时间的描述文本，例如：1天前、1小时前、1分钟前、刚刚等。

::: tabs

== 示例

<Example>
  <p>页面加载于： <strong zui-create="timeago" zui-create-timeago="{time: Date.now()}"></strong></p>
  <p>功能开发于： <strong zui-create="timeago" zui-create-timeago="{time: '2026-1-22 10:00:00'}"></strong></p>
  <p>不合法的时间： <strong zui-create="timeago" zui-create-timeago="{time: '2026-1x22 10:00:00', hint: '2026-1-22 10:00:00'}"></strong></p>
</Example>

== HTML

```html
<p>页面加载于： <strong zui-create="timeago" zui-create-timeago="{time: Date.now()}"></strong></p>
<p>功能开发于： <strong zui-create="timeago" zui-create-timeago="{time: '2026-1-22 10:00:00'}"></strong></p>
<p>不合法的时间： <strong zui-create="timeago" zui-create-timeago="{time: '2026-1x22 10:00:00', hint: '2026-1-22 10:00:00'}"></strong></p>
```

:::

除了支持之前的时间，还支持指定未来的时间，例如：1天后、1小时后、1分钟后、1秒后等。

::: tabs

== 示例

<Example>
<p>3 小时后： <strong zui-create="timeago" zui-create-timeago="{time: Date.now() + 1000 * 60 * 60 * 3 + 100}"></strong></p>
<p>一天后： <strong zui-create="timeago" zui-create-timeago="{time: Date.now() + 1000 * 60 * 60 * 25}"></strong></p>
<p>一年后： <strong zui-create="timeago" zui-create-timeago="{time: Date.now() + 1000 * 60 * 60 * 25 * 365}"></strong></p>
</Example>

== HTML

```html
<p>3 小时后： <strong zui-create="timeago" zui-create-timeago="{time: Date.now() + 1000 * 60 * 60 * 3 + 100}"></strong></p>
<p>一天后： <strong zui-create="timeago" zui-create-timeago="{time: Date.now() + 1000 * 60 * 60 * 25}"></strong></p>
<p>一年后： <strong zui-create="timeago" zui-create-timeago="{time: Date.now() + 1000 * 60 * 60 * 25 * 365}"></strong></p>
```

:::

## 在 JS 中使用

在 ZAI 中提供了 `timeago` 方法，用于手动生成相对时间文本，该方法定义如下：

```ts
function timeago(time: DateLike, now?: DateLike, lang?: string): string;
```

**参数**：

* `time`：日期时间对象或者日期时间字符串或者时间戳；
* `now`：当前时间对象或者日期时间字符串或者时间戳，如果不指定则使用当前时间；
* `lang`：语言，支持：简体中文(`zh-cn`)、繁体中文(`zh-tw`)、英文(`en`)。

**返回值**：`string`：相对时间文本。

示例：

```ts
const timeagoText = zui.timeago(new Date('2026-1-22 10:00:00'), new Date(), 'zh-cn');
console.log(timeagoText); // 1天前
```

## 选项

### TimeSpan 选项

<Props>
/** 日期时间对象或者日期时间字符串或者时间戳。 */
time: DateLike;
/** 日期时间格式，支持[日期辅助方法 `formatDate`](/lib/helpers/helpers/date-helper.html#formatdate) 中的所有格式。 */
format?: string | DateFormatter;
/** 无效日期时间对象时的显示值，如果不指定则显示原始值。 */
invalidText?: string;
</Props>

### TimeAgo 选项

<Props>
/** 日期时间对象或者日期时间字符串或者时间戳。 */
time: DateLike;
/** 当前时间对象或者日期时间字符串或者时间戳，如果不指定则使用当前时间。 */
now?: DateLike;
/** 语言，支持：简体中文(`zh-cn`)、繁体中文(`zh-tw`)、英文(`en`)。 */
lang?: string;
/** 无效日期时间对象时的显示值，如果不指定则显示原始值。 */
invalidText?: string;
/** 鼠标悬停提示文本，如果不指定则显示相对时间文本。 */
hint?: string | boolean;
/** 提示文本格式，支持[日期辅助方法 `formatDate`](/lib/helpers/helpers/date-helper.html#formatdate) 中的所有格式。 */
hintFormat?: string;
</Props>
