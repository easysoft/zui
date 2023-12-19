# 颜色选择器

基于下拉选择器实现的颜色选择器。

## 基本使用

在选定元素上调用初始化函数即可使用颜色选择器。

::: tabs

== 示例

<Example>
  <div data-zui="colorPicker" data-heading="选择颜色" data-default-value="#0ea5e9"></div>
</Example>

== HTML

```html
<div id="myColorPicker"></div>
```

== JS

```js
const colorPicker = new ColorPicker('#myColorPicker', {
    heading: '选择颜色',
    defaultValue: '#0ea5e9',
});
```

:::

## 自定义颜色

通过设置 `colors` 属性自定义颜色列表，可以指定一个表示颜色的字符串数组，也可以通过英文逗号拼接多个颜色一起指定。

::: tabs

== 示例

<Example>
  <div data-zui="colorPicker" data-heading="选择颜色" data-default-value="#374259" data-colors="#0079FF,#00DFA2,#F6FA70,#FF0060,#F2D8D8,#5C8984,#545B77,#374259"></div>
</Example>

== HTML

```html
<div id="myColorPicker"></div>
```

== JS

```JavaScript
const colorPicker = new ColorPicker('#myColorPicker', {
    heading: '选择颜色',
    colors: ['#0079FF', '#00DFA2', '#F6FA70', '#FF0060', '#F2D8D8', '#5C8984', '#545B77', '#374259'],
    defaultValue: '#374259',
});
```

:::

## 自定义图标

通过设置 `icon` 属性自定义颜色显示图标。

::: tabs

== 示例

<Example>
  <div data-zui="colorPicker" data-icon="tint"></div>
</Example>

== HTML

```html
<div id="myColorPicker"></div>
```

== JS

```JavaScript
const colorPicker = new ColorPicker('#myColorPicker', {
    icon: 'tint',
});
```

:::


## 同步颜色

通过为 `syncValue`、`syncColor`、`syncBackground`、`syncBorder` 设置选择器可实现将当前选中的颜色信息同步到相应元素。

::: tabs

== 示例

<Example class="row gap-4 items-center">
  <div data-zui="colorPicker" data-heading="选择颜色进行同步" data-sync-value="#syncText" data-sync-color="#syncColor" data-sync-background="#syncBackground" data-sync-border="#syncBorder"></div>
  <div class="flex h-8 items-center">颜色值：<span id="syncText" class="font-mono"></span></div>
  <div id="syncText" class="center h-8 w-16">文字颜色</div>
  <div id="syncBackground" class="center h-8 w-16">背景色</div>
  <div id="syncBorder" class="center h-8 w-16 border">边框色</div>
</Example>

== HTML

```html
<div id="myColorPicker"></div>
<div class="flex h-8 items-center">颜色值：<span id="syncText" class="font-mono"></span></div>
<div id="syncText" class="center h-8 w-16">文字颜色</div>
<div id="syncBackground" class="center h-8 w-16">背景色</div>
<div id="syncBorder" class="center h-8 w-16 border">边框色</div>
```

== JS

```JS
const colorPicker = new ColorPicker('#myColorPicker', {
    heading: '选择颜色进行同步',
    syncValue: '#syncText',
    syncColor: '#syncColor',
    syncBackground: '#syncBackground',
    syncBorder: '#syncBorder',
});
```

:::

## 配合使用

### 作为按钮

::: tabs

== 示例

<Example>
  <button type="button" class="btn square" data-zui="colorPicker" data-default-value="#f97316" data-class-name="center w-8 square"></button>
</Example>

== HTML

```html
<button id="myColorPicker" type="button" class="btn square"></button>
```

== JS

```js
const colorPicker = new ColorPicker('#myColorPicker', {
    defaultValue: '#f97316',
    className: 'center w-8 square',
});
```

:::

### 在输入组中使用

::: tabs

== 示例

<Example>
  <div class="input-group">
    <input type="text" class="form-control" placeholder="选择颜色" id="colorPickerInput">
    <button type="button" class="btn w-8 p-0" data-zui="colorPicker" data-default-value="#f97316" data-sync-value="#colorPickerInput" data-sync-color="#colorPickerInput" data-class-name="center w-8 h-8 square"></button>
  </div>
</Example>

== HTML

```html
<div class="input-group">
  <input type="text" class="form-control" placeholder="选择颜色" id="colorPickerInput">
  <button type="button" class="btn w-8 p-0" id="myColorPicker"></button>
</div>
```

== JS

```js
const colorPicker = new ColorPicker('#myColorPicker', {
    defaultValue: '#f97316',
    syncValue: '#colorPickerInput',
    syncColor: '#colorPickerInput',
    className: 'center w-8 h-8 square',
});
```

:::

### 在输入框中使用

::: tabs

== 示例

<Example>
  <div class="input-control has-suffix-icon">
    <input type="text" class="form-control" placeholder="选择颜色" id="colorPickerInput2">
    <div class="input-control-suffix opacity-100" data-zui="colorPicker" data-sync-value="#colorPickerInput2" data-sync-color="#colorPickerInput2"></div>
  </div>
</Example>

== HTML

```html
<div class="input-control has-suffix-icon">
  <input type="text" class="form-control" placeholder="选择颜色" id="colorPickerInput2">
  <div id="myColorPicker" class="input-control-suffix"></div>
</div>
```

== JS

```js
const colorPicker = new ColorPicker('#myColorPicker', {
    syncValue: '#colorPickerInput2',
    syncColor: '#colorPickerInput2',
});
```

:::

## 选项

<Props>
heading?: string; // 颜色面板标题。
colors?: string | string[]; // 颜色选项列表。
icon?: string; // 显示为图标的名称。
closeBtn?: boolean = true; // 颜色面板是否使用关闭按钮。
syncValue?: string; // 颜色值容器选择器。
syncColor?: string; // 文本色同步容器选择器。
syncBackground?: string; // 背景色同步容器选择器。
syncBorder?: string; // 边框色同步容器选择器。
</Props>
