# 日期选择器

## 用法

::: tabs

== 示例

<Example>
  <div data-zui="datePicker"></div>
</Example>

== HTML

```html
<div id="datePicker"></div>

<script>
const datePicker = new zui.DatePicker('#datePicker');
</script>
```

:::

## 设置默认值

通过 `defaultValue` 选项设置默认值，设置为 `'today'` 可以将默认值设置为当天。

::: tabs

== 示例

<Example className="row gap-3">
  <div data-zui="datePicker" data-default-value="2023-06-12"></div>
  <div data-zui="datePicker" data-default-value="today"></div>
</Example>

== HTML

```html
<div id="datePicker1"></div>
<div id="datePicker2"></div>

<script>
const datePicker1 = new zui.DatePicker('#datePicker1', {
    defaultValue: '2023-06-12'
});
const datePicker2 = new zui.DatePicker('#datePicker2', {
    defaultValue: 'today'
});
</script>
```

:::

## 格式化

通过 `format` 选项设置日期格式化形式，支持[日期辅助方法 `formatDate`](/lib/helpers/helpers/date-helper.html#formatdate) 中的所有格式。

::: tabs

== 示例

<Example>
  <div data-zui="datePicker" data-format="yyyy/M/d"></div>
</Example>

== HTML

```html
<div id="datePicker"></div>

<script>
const datePicker = new zui.DatePicker('#datePicker', {
    format: 'yyyy/M/d'
});
</script>
```

:::

## 限制日期范围

通过 `minDate` 和 `maxDate` 来限制可选的日期范围。

::: tabs

== 示例

<Example>
  <div data-zui="datetimePicker" :data-min-date="minDate" :data-max-date="maxDate"></div>
</Example>

== HTML

```html-vue
<div id="datetimePicker"></div>

<script>
const datetimePicker = new zui.datetimePicker('#datetimePicker', {
    minDate: "{{new Date(minDate).toLocaleDateString()}}",
    maxDate: "{{new Date(maxDate).toLocaleDateString()}}",
});
</script>
```

:::

## 自定义菜单

通过 `menu` 选项可以在弹出面板侧面显示一个[自定义菜单](/lib/components/menu/js.html)，通过 `actions` 可以自定义[底部工具栏](/lib/components/toolbar/js.html)上的按钮。在菜单项和按钮上通过 `[data-set-date]` 属性指定点击按钮时要设定的日期。

### 自定义侧边菜单

通过 `menu` 选项可以在弹出面板左侧显示一个[自定义菜单](/lib/components/menu/js.html)，在菜单项配置上通过 `[data-set-date]` 属性指定点击菜单项时要设定的日期。

::: tabs

== 示例

<Example>
  <div data-zui="datePicker" data-menu='{"items":[{"text": "一周之后", "data-set-date": "today+1week"},{"text": "一个月之后", "data-set-date": "today+1month"}, {"text": "两个月之后", "data-set-date": "today+2month"}, {"text": "一年之后", "data-set-date": "today+1year"}]}'></div>
</Example>

== HTML

```html
<div id="datePicker"></div>

<script>
const today = new Date();
const datePicker = new zui.DatePicker('#datePicker', {
    menu: [
        {text: '一周之后', 'data-set-date': zui.addDate('today', 1, 'week').getTime()},
        {text: '一个月之后', 'data-set-date': zui.addDate('today', 1, 'month').getTime()},
        {text: '两个月之后', 'data-set-date': zui.addDate('today', 2, 'month').getTime()},
        {text: '一年之后', 'data-set-date': zui.addDate('today', 1, 'year').getTime()},
    ]
});
</script>
```

:::

### 自定义底部按钮

通过 `actions` 可以自定义[底部工具栏](/lib/components/toolbar/js.html)上的按钮，在菜单项和按钮上通过 `[data-set-date]` 属性指定点击按钮时要设定的日期。

::: tabs

== 示例

<Example>
  <div data-zui="datePicker" data-actions='{"items":[{"text": "一周", "data-set-date": "today+1week"},{"text": "一个月", "data-set-date": "today+1month"}, {"text": "两个月", "data-set-date": "today+2month"}, {"text": "清除", "data-set-date": ""}]}'></div>
</Example>

== HTML

```html
<div id="datePicker"></div>

<script>
const today = new Date();
const datePicker = new zui.DatePicker('#datePicker', {
    actions: [
        {text: '一周', 'data-set-date': zui.addDate(today, 1, 'week').getTime()},
        {text: '一个月', 'data-set-date': zui.addDate(today, 1, 'month').getTime()},
        {text: '两个月', 'data-set-date': zui.addDate(today, 2, 'month').getTime()},
        {text: '清除', 'data-set-date': ""},
    ]
});
</script>
```

:::

## 选项

<Props>
className?: any; // 组件根元素的类名。
style?: object; // 组件根元素的样式。
tagName?: string; // 组件根元素的标签名。
attrs?: object; // 附加到组件根元素上的属性。
clickType?: 'toggle' | 'open'; // 点击类型，`toggle` 表示点击按钮时切换显示隐藏，`open` 表示点击按钮时只打开。
name?: string; // 作为表单项的名称。
defaultValue?: 'today' | string; // 默认值。
onChange?: function; // 值变更时的回调函数。
disabled?: boolean; // 是否禁用。
readonly?: boolean; // 是否只读，不允许手动修改。
required?: boolean; // 是否必须提供值（不能清除和选择空值）。
placeholder?: string; // 输入框上占位文本。
format?: string; // 日期格式，默认 yyyy-MM-dd。
icon?: string | object; // 在输入框右侧显示的图标。
weekNames?: string[]; // 星期名称，索引为 0 表示周日。
monthNames?: string[]; // 月份名称，索引为 0 表示一月份。
yearText?: string; // 用于显示年份的格式化文本。
todayText?: string; // 用于显示“今天”的文本。
clearText?: string; // 用于显示“清除”的文本。
weekStart?: number; // 一周从星期几开始，默认 1。
minDate?: DateLike; // 最小可选的日期。
maxDate?: DateLike; // 最大可选的日期。
menu?: object[] | object; // 左侧显示的菜单设置。
actions?: object[] | object; // 底部工具栏设置。
onInvalid?: function; // 日期值无效时的回调函数。
</Props>

<script setup>
const now = Date.now();
const oneWeek = 3600 * 1000 * 24 * 7;
const minDate = now - 2 * oneWeek;
const maxDate = now + oneWeek;
</script>
