# 日期选择器

## 用法

<Example>
  <div data-zui="datePicker"></div>
</Example>

```html
<div id="datePicker"></div>

<script>
const datePicker = new zui.DatePicker('#datePicker');
</script>
```

## 设置默认值

通过 `defaultValue` 选项设置默认值，设置为 `'today'` 可以将默认值设置为当天。

<Example className="row gap-3">
  <div data-zui="datePicker" data-default-value="2023-06-12"></div>
  <div data-zui="datePicker" data-default-value="today"></div>
</Example>

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

## 格式化

通过 `format` 选项设置日期格式化形式。

<Example>
  <div data-zui="datePicker" data-format="yyyy/M/d"></div>
</Example>

```html
<div id="datePicker"></div>

<script>
const datePicker = new zui.DatePicker('#datePicker', {
    format: 'yyyy/M/d'
});
</script>
```

## 通过 `[data-zui="datePicker"]` 初始化

<Example>
  <div data-zui="datePicker" data-default-value="today" data-format="yyyy/M/d"></div>
</Example>

```html
<div data-zui="datePicker" data-default-value="today" data-format="yyyy/M/d"></div>
```

## 自定义菜单

通过 `menu` 选项可以在弹出面板左侧显示一个[自定义菜单](/lib/components/menu/js.html)，通过 `actions` 可以自定义[底部工具栏](/lib/components/toolbar/js.html)上的按钮。在菜单项和按钮上通过 `[data-set-date]` 属性指定点击按钮时要设定的日期。

### 自定义左侧菜单

通过 `menu` 选项可以在弹出面板左侧显示一个[自定义菜单](/lib/components/menu/js.html)，在菜单项配置上通过 `[data-set-date]` 属性指定点击菜单项时要设定的日期。

<Example>
  <div data-zui="datePicker" data-menu='{"items":[{"text": "一周之后", "data-set-date": "today+1week"},{"text": "一个月之后", "data-set-date": "today+1month"}, {"text": "两个月之后", "data-set-date": "today+2month"}, {"text": "一年之后", "data-set-date": "today+1year"}]}'></div>
</Example>

```html
<div id="datePicker"></div>

<script>
const today = new Date();
const datePicker = new zui.DatePicker('#datePicker', {
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
  <div data-zui="datePicker" data-actions='{"items":[{"text": "一周", "data-set-date": "today+1week"},{"text": "一个月", "data-set-date": "today+1month"}, {"text": "两个月", "data-set-date": "today+2month"}, {"text": "清除", "data-set-date": ""}]}'></div>
</Example>

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

## 选项

```ts
type DatePickerOptions = {
    /** 组件根元素的 ID。 */
    id?: string;

    /** 组件根元素的类名。 */
    className?: ClassNameLike;

    /** 组件根元素的样式。 */
    style?: JSX.CSSProperties;

    /** 组件根元素的标签名。 */
    tagName?: string;

    /** 附加到组件根元素上的属性。 */
    attrs?: Record<string, unktodayn>;

    /** 点击类型，`toggle` 表示点击按钮时切换显示隐藏，`open` 表示点击按钮时只打开。 */
    clickType?: 'toggle' | 'open';

    /** 渲染完成后的回调函数。 */
    afterRender?: (info: {firstRender: boolean}) => void;

    /** 销毁前的回调函数。 */
    beforeDestroy?: () => void;

    /** 作为表单项的名称。 */
    name?: string;

    /** 初始默认颜色值。 */
    defaultValue?: string | 'today';

    /** 颜色值变更时的回调函数 */
    onChange?: (value: string | undefined, oldValue: string | undefined) => void;

    /** 是否禁用。 */
    disabled?: boolean;

    /** 是否只读，不允许手动修改。 */
    readonly?: boolean;

    /** 是否必须提供值（不能清除和选择空值）。 */
    required?: boolean;

    /** 输入框上占位文本。 */
    placeholder?: string;

    /** 日期格式，默认 yyyy-MM-dd。 */
    format?: string;

    /** 在输入框右侧显示的图标。 */
    icon?: IconType | boolean;

    /** 星期名称，索引为 0 表示周日。 */
    weekNames?: string[];

    /** 月份名称，索引为 0 表示一月份。 */
    monthNames?: string[];

    /** 用于显示年份的格式化文本。 */
    yearText?: string;

    /** 用于显示“今天”的文本。 */
    todayText?: string;

    /** 用于显示“清除”的文本。 */
    clearText?: string;

    /** 一周从星期几开始，默认 1。 */
    weekStart?: number;

    /** 最小可选的日期。 */
    minDate?: DateLike;

    /** 最大可选的日期。 */
    maxDate?: DateLike;

    /** 左侧显示的菜单设置。 */
    menu?: NavItemOptions[] | NavOptions;

    /** 底部工具栏设置。 */
    actions?: ToolbarItemOptions[] | ToolbarOptions;

    /** 日期值无效时的回调函数。 */
    onInvalid?: (value: string) => void;
}
```
