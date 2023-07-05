# 颜色选择器

基于下拉选择器实现的颜色选择器。

## 基本使用

在选定元素上调用初始化函数即可使用颜色选择器。

<Example>
    <div id="color-picker-1"></div>
</Example>

```html
<div id="color-picker-1"></div>
```

```JavaScript
const colorPicker = new ColorPicker('#color-picker-1', {
    heading: '选择颜色',
    defaultValue: '#0ea5e9'
})
```

## 通过 `[data-zui]` 初始化

<Example>
  <div data-zui="colorPicker"></div>
</Example>

```html
<div data-zui="colorPicker"></div>
```

## 自定义颜色

通过设置 `colors` 属性自定义颜色列表。

<Example>
    <div id="color-picker-2"></div>
</Example>

```html
<div id="color-picker-2"></div>
```

```JavaScript
const colorPicker = new ColorPicker('#color-picker-2', {
    heading: '选择颜色',
    colors: ['#0079FF', '#00DFA2', '#F6FA70', '#FF0060', '#F2D8D8', '#5C8984', '#545B77', '#374259'],
    defaultValue: '#374259',
});
```

## 自定义图标

通过设置 `icon` 属性自定义颜色显示图标。

<Example>
  <div data-zui="colorPicker" data-icon="color"></div>
</Example>

```html
<div data-zui="colorPicker" data-icon="color"></div>
```

## 同步颜色

通过为 `syncValue`、`syncColor`、`syncBackground`、`syncBorder` 设置选择器可实现将当前选中的颜色信息同步到相应元素。

<Example>
    <div id="color-picker-4"></div>
    <div class="flex h-8 items-center">颜色值：<span id="sync-text" ></span></div>
    <div class="row gap-2">
        <div id="sync-color" class="center h-8 w-16">文字颜色</div>
        <div id="sync-background" class="center h-8 w-16">背景色</div>
        <div id="sync-border" class="center h-8 w-16 border">边框色</div>
    </div>
</Example>

```html
<div id="color-picker-4"></div>
<div class="flex h-8 items-center">颜色值：<span id="sync-text" ></span></div>
<div class="row gap-2">
    <div id="sync-color" class="center h-8 w-16">文字颜色</div>
    <div id="sync-background" class="center h-8 w-16">背景色</div>
    <div id="sync-border" class="center h-8 w-16 border">边框色</div>
</div>
```

```JavaScript
const colorPicker = new ColorPicker('#color-picker-4', {
    heading: '选择颜色',
    syncValue: '#sync-text',
    syncColor: '#sync-color',
    syncBackground: '#sync-background',
    syncBorder: '#sync-border',
});
```

## 配合使用

### 作为按钮

<Example>
  <button type="button" class="btn w-8 p-0" data-zui="colorPicker" data-default-value="#f97316" data-class-name="center w-8 h-8 square"></button>
</Example>

### 在输入组中使用

<Example>
  <div class="input-group">
    <input type="text" class="form-control" placeholder="选择颜色" id="colorPickerInput">
    <button type="button" class="btn w-8 p-0" data-zui="colorPicker" data-default-value="#f97316" data-sync-value="#colorPickerInput" data-sync-color="#colorPickerInput" data-class-name="center w-8 h-8 square"></button>
  </div>
</Example>

```html
<div class="input-group">
  <input type="text" class="form-control" placeholder="选择颜色" id="colorPickerInput">
  <button type="button" class="btn w-8 p-0" data-zui="colorPicker" data-default-value="#f97316" data-sync-value="#colorPickerInput" data-sync-color="#colorPickerInput" data-class-name="center w-8 h-8 square"></button>
</div>
```

### 在输入框中使用

<Example>
  <div class="input-control has-suffix-icon">
    <input type="text" class="form-control" placeholder="选择颜色" id="colorPickerInput2">
    <label class="input-control-suffix" data-zui="colorPicker" data-sync-value="#colorPickerInput2" data-sync-color="#colorPickerInput2"></label>
  </div>
</Example>

```html
<div class="input-control has-suffix-icon">
    <input type="text" class="form-control" placeholder="选择颜色" id="colorPickerInput2">
    <label class="input-control-suffix" data-zui="colorPicker" data-sync-value="#colorPickerInput2" data-sync-color="#colorPickerInput2"></label>
  </div>
```


## 选项

### `heading 属性`

颜色面板标题。

+ 类型：`string`
+ 必选：否

### `icon`

图标。

+ 类型：`string`
+ 必选：否

### `closeBtn`

颜色面板是否使用关闭按钮。

+ 类型：`boolean`
+ 必选：否
+ 默认值：`true`

### `syncValue`

颜色值容器选择器。

+ 类型：`string`
+ 必选：否

### `syncColor`

文本色同步容器选择器。

+ 类型：`string`
+ 必选：否

### `syncBackground`

背景色同步容器选择器。

+ 类型：`string`
+ 必选：否

### `syncBorder`

边框色同步容器选择器。

+ 类型：`string`
+ 必选：否

## API

### `ColorPickerOptions`

```ts
interface ColorPickerOptions {
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
    defaultValue?: string;

    /** 颜色值变更时的回调函数 */
    onChange?: (value: string | undefined, oldValue: string | undefined) => void;

    /** 是否禁用。 */
    disabled?: boolean;

    /** 颜色选项列表。 */
    colors?: string | string[];

    /** 将触发按钮显示为图标。 */
    icon?: IconType;

    /** 指定选择器同步颜色值作为文本到的元素。 */
    syncValue?: string;

    /** 指定选择器同步文字颜色到的元素。 */
    syncColor?: string;

    /** 指定选择器同步背景颜色到的元素。 */
    syncBackground?: string;

    /** 指定选择器同步边框颜色到的元素。 */
    syncBorder?: string;

    /** 提示文字。 */
    hint?: string;

    /** 是否在弹出面板上显示关闭按钮。 */
    closeBtn?: boolean;

    /** 弹出面板的标题。 */
    heading?: ComponentChildren;
}
```

<script>
export default {
    mounted() {
        onZUIReady(() => {
            new zui.ColorPicker('#color-picker-1', {
                heading: '选择颜色',
                defaultValue: '#0ea5e9'
            });

            new zui.ColorPicker('#color-picker-2', {
                heading: '选择颜色',
                colors: ['#0079FF', '#00DFA2', '#F6FA70', '#FF0060', '#F2D8D8', '#5C8984', '#545B77', '#374259'],
                defaultValue: '#374259',
            });

            new zui.ColorPicker('#color-picker-4', {
                heading: '选择颜色',
                syncValue: '#sync-text',
                syncColor: '#sync-color',
                syncBackground: '#sync-background',
                syncBorder: '#sync-border',
            });
        });
    }
}
</script>
