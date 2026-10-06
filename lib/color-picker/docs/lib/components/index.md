# 颜色选择器

基于下拉选择器实现的颜色选择器。

## 基本使用

通过 `zui-create="colorPicker"` 声明颜色选择器，使用 `data-*` 传入选项。

::: tabs

== 示例

<Example>
  <div zui-create="colorPicker" data-heading="项目标签颜色" data-default-value="#0ea5e9"></div>
</Example>

== 完整代码

```html
<div zui-create="colorPicker" data-heading="项目标签颜色" data-default-value="#0ea5e9"></div>
```

:::

使用 JavaScript 初始化时，可调用 `new zui.ColorPicker(element, options)`；同一元素选择一种初始化方式即可。

## 自定义颜色

通过设置 `colors` 属性自定义颜色列表，可以指定一个表示颜色的字符串数组，也可以通过英文逗号拼接多个颜色一起指定。

::: tabs

== 示例

<Example>
  <div zui-create="colorPicker" data-heading="项目标签颜色" data-default-value="#3b82f6" data-colors="#3b82f6,#22c55e,#f59e0b,#ef4444,#8b5cf6,#64748b"></div>
</Example>

== 完整代码

```html
<div zui-create="colorPicker" data-heading="项目标签颜色" data-default-value="#3b82f6" data-colors="#3b82f6,#22c55e,#f59e0b,#ef4444,#8b5cf6,#64748b"></div>
```

:::

## 自定义图标

通过设置 `icon` 属性自定义颜色显示图标。

::: tabs

== 示例

<Example>
  <div zui-create="colorPicker" data-icon="tint"></div>
</Example>

== 完整代码

```html
<div zui-create="colorPicker" data-icon="tint"></div>
```

:::

## 同步颜色

通过为 `syncValue`、`syncColor`、`syncBackground`、`syncBorder` 设置选择器可实现将当前选中的颜色信息同步到相应元素。

::: tabs

== 示例

<Example>
  <div class="flex flex-wrap gap-4 items-center">
      <div zui-create="colorPicker" data-heading="项目标签配色预览" data-sync-value="#syncText" data-sync-color="#syncColor" data-sync-background="#syncBackground" data-sync-border="#syncBorder"></div>
      <div class="flex h-8 items-center">颜色值：<span id="syncText" class="font-mono"></span></div>
      <div id="syncColor" class="center h-8 w-16">文字颜色</div>
      <div id="syncBackground" class="center h-8 w-16">背景色</div>
      <div id="syncBorder" class="center h-8 w-16 border">边框色</div>
  </div>
</Example>

== 完整代码

```html
<div class="flex flex-wrap gap-4 items-center">
    <div zui-create="colorPicker" data-heading="项目标签配色预览" data-sync-value="#syncText" data-sync-color="#syncColor" data-sync-background="#syncBackground" data-sync-border="#syncBorder"></div>
    <div class="flex h-8 items-center">颜色值：<span id="syncText" class="font-mono"></span></div>
    <div id="syncColor" class="center h-8 w-16">文字颜色</div>
    <div id="syncBackground" class="center h-8 w-16">背景色</div>
    <div id="syncBorder" class="center h-8 w-16 border">边框色</div>
</div>
```

:::

## 配合使用

### 作为按钮

::: tabs

== 示例

<Example>
  <button type="button" class="btn square" zui-create="colorPicker" data-default-value="#f97316" data-class-name="center w-8 square"></button>
</Example>

== 完整代码

```html
<button type="button" class="btn square" zui-create="colorPicker" data-default-value="#f97316" data-class-name="center w-8 square"></button>
```

:::

### 在输入组中使用

::: tabs

== 示例

<Example>
  <div class="input-group">
    <input type="text" class="form-control" placeholder="选择颜色" id="colorPickerInput">
    <button type="button" class="btn w-8 p-0" zui-create="colorPicker" data-default-value="#f97316" data-sync-value="#colorPickerInput" data-sync-color="#colorPickerInput" data-class-name="center w-8 h-8 square"></button>
  </div>
</Example>

== 完整代码

```html
<div class="input-group">
  <input type="text" class="form-control" placeholder="选择颜色" id="colorPickerInput">
  <button type="button" class="btn w-8 p-0" zui-create="colorPicker" data-default-value="#f97316" data-sync-value="#colorPickerInput" data-sync-color="#colorPickerInput" data-class-name="center w-8 h-8 square"></button>
</div>
```

:::

### 在输入框中使用

::: tabs

== 示例

<Example>
  <div class="input-control has-suffix-icon">
    <input type="text" class="form-control" placeholder="选择颜色" id="colorPickerInput2">
    <div class="input-control-suffix opacity-100" zui-create="colorPicker" data-sync-value="#colorPickerInput2" data-sync-color="#colorPickerInput2"></div>
  </div>
</Example>

== 完整代码

```html
<div class="input-control has-suffix-icon">
  <input type="text" class="form-control" placeholder="选择颜色" id="colorPickerInput2">
  <div class="input-control-suffix opacity-100" zui-create="colorPicker" data-sync-value="#colorPickerInput2" data-sync-color="#colorPickerInput2"></div>
</div>
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
