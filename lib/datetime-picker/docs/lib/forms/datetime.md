# 日期时间选择器 [WIP]

## 用法

<Example>
  <div data-zui="datetimePicker"></div>
</Example>

```html
<div id="datetimePicker"></div>

<script>
const datetimePicker = new zui.DatetimePicker('#datetimePicker');
</script>
```

## 设置默认值

通过 `defaultValue` 选项设置默认值，设置为 `'today'` 可以将默认值设置为现在时间。

<Example className="row gap-3">
  <div data-zui="datetimePicker" data-default-value="2023-06-12 08:00"></div>
  <div data-zui="datetimePicker" data-default-value="today"></div>
</Example>

```html
<div id="datetimePicker1"></div>
<div id="datetimePicker2"></div>

<script>
const datetimePicker1 = new zui.datetimePicker('#datetimePicker1', {
    defaultValue: '2023-06-12'
});
const datetimePicker2 = new zui.datetimePicker('#datetimePicker2', {
    defaultValue: 'today'
});
</script>
```

## 格式化

通过 `dateFormat` 和 `timeFormat` 选项设置日期和时间的格式化形式，通过 `joiner` 连接两者。

<Example>
  <div data-zui="datetimePicker" data-date-format="yyyy/M/d" data-time-format="HH:mm" data-joiner="-"></div>
</Example>

```html
<div id="datetimePicker"></div>

<script>
const datetimePicker = new zui.datetimePicker('#datetimePicker', {
    dateFormat: 'yyyy/M/d',
    timeFormat: 'HH:mm',
    joiner: '-',
});
</script>
```

## 通过 `[data-zui="datetimePicker"]` 初始化

<Example>
  <div data-zui="datetimePicker" data-default-value="today" data-format="yyyy/M/d"></div>
</Example>

```html
<div data-zui="datetimePicker" data-default-value="today" data-format="yyyy/M/d"></div>
```

## 自定义菜单

通过 `menu` 选项可以在弹出面板左侧显示一个[自定义菜单](/lib/components/menu/js.html)，通过 `actions` 可以自定义[底部工具栏](/lib/components/toolbar/js.html)上的按钮。在菜单项和按钮上通过 `[data-set-date]` 属性指定点击按钮时要设定的日期。

### 自定义左侧菜单

通过 `menu` 选项可以在弹出面板左侧显示一个[自定义菜单](/lib/components/menu/js.html)，在菜单项配置上通过 `[data-set-date]` 属性指定点击菜单项时要设定的日期。

<Example>
  <div data-zui="datetimePicker" data-menu='{"items":[{"text": "一周之后", "data-set-date": "today+1week"},{"text": "一个月之后", "data-set-date": "today+1month"}, {"text": "两个月之后", "data-set-date": "today+2month"}, {"text": "一年之后", "data-set-date": "today+1year"}]}'></div>
</Example>

```html
<div id="datetimePicker"></div>

<script>
const today = new Date();
const datetimePicker = new zui.datetimePicker('#datetimePicker', {
    menu: [
        {text: '一周之后', 'data-set-date': zui.addDate(today, 1, 'week').getTime()},
        {text: '一个月之后', 'data-set-date': zui.addDate(today, 1, 'month').getTime()},
        {text: '两个月之后', 'data-set-date': zui.addDate(today, 2, 'month').getTime()},
        {text: '一年之后', 'data-set-date': zui.addDate(today, 1, 'year').getTime()},
    ]
});
</script>
```

### 自定义底部按钮

通过 `actions` 可以自定义[底部工具栏](/lib/components/toolbar/js.html)上的按钮，在菜单项和按钮上通过 `[data-set-date]` 属性指定点击按钮时要设定的日期。


<Example>
  <div data-zui="datetimePicker" data-actions='{"items":[{"text": "一周", "data-set-date": "today+1week"},{"text": "一个月", "data-set-date": "today+1month"}, {"text": "两个月", "data-set-date": "today+2month"}, {"text": "清除", "data-set-date": ""}]}'></div>
</Example>

```html
<div id="datetimePicker"></div>

<script>
const today = new Date();
const datetimePicker = new zui.datetimePicker('#datetimePicker', {
    actions: [
        {text: '一周', 'data-set-date': zui.addDate(today, 1, 'week').getTime()},
        {text: '一个月', 'data-set-date': zui.addDate(today, 1, 'month').getTime()},
        {text: '两个月', 'data-set-date': zui.addDate(today, 2, 'month').getTime()},
        {text: '清除', 'data-set-date': ""},
    ]
});
</script>
```

## 选项

```ts
type DatetimePickerOptions = Omit<DatePickerOptions & TimePickerOptions, 'format'> & {
    dateFormat: string;
    timeFormat: string;
    joiner: string;
};
```
