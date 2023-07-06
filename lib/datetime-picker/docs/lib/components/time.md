# 时间选择器

## 用法

<Example>
  <div data-zui="timePicker"></div>
</Example>

```html
<div id="timePicker"></div>

<script>
const timePicker = new zui.TimePicker('#timePicker');
</script>
```

## 设置默认值

通过 `defaultValue` 选项设置默认值，设置为 `'now'` 可以将默认值设置为页面显示的时刻。

<Example className="row gap-3">
  <div data-zui="timePicker" data-default-value="9:42"></div>
  <div data-zui="timePicker" data-default-value="now"></div>
</Example>

```html
<div id="timePicker1"></div>
<div id="timePicker2"></div>

<script>
const timePicker1 = new zui.DatePicker('#timePicker1', {
    defaultValue: '9:42'
});
const timePicker2 = new zui.DatePicker('#timePicker2', {
    defaultValue: 'now'
});
</script>
```

## 格式化

通过 `format` 选项设置日期格式化形式。

<Example>
  <div data-zui="timePicker" data-format="hh:mm"></div>
</Example>

```html
<div id="timePicker"></div>

<script>
const timePicker = new zui.TimePicker('#timePicker', {
  format: 'hh:mm'
});
</script>
```

## 通过 `[data-zui="timePicker"]` 初始化

<Example>
  <div data-zui="timePicker" data-default-value="now" data-format="h:m"></div>
</Example>

```html
<div data-zui="timePicker" data-default-value="now" data-format="h:m"></div>
```

## 选项

```ts
type TimePickerOptions = {
    /** 组件根元素的 ID。 */
    id?: string;

    /** 组件根元素的类名。 */
    className?: ClassNameLike;

    /** 组件根元素的样式。 */
    style?: JSX.CSSProperties;

    /** 组件根元素的标签名。 */
    tagName?: string;

    /** 附加到组件根元素上的属性。 */
    attrs?: Record<string, unknown>;

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

    /** 时间格式，默认 hh:mm。 */
    format?: string;

    /** 分钟选择间隔，默认 5（分钟）。 */
    minuteStep: number;

    /** 输入框上占位文本。 */
    placeholder?: string;

    /** 在输入框右侧显示的图标。 */
    icon?: IconType | boolean;

    /** 时间值无效时的回调函数。 */
    onInvalid?: (value: string) => void;
}
```
