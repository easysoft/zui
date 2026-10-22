# 颜色选择器

提供基于下拉面板的 `ColorPicker`，以及调用浏览器原生取色面板的 [ColorInput 颜色输入框](#color-input)。

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

### 允许选择预设之外的颜色

设置 `custom: true`（HTML 使用 `data-custom="true"`）会在预设颜色后追加彩虹色块，点击后打开浏览器原生取色面板。选择预设之外的颜色后，彩虹色块中央显示当前颜色及勾选标记；选择预设色或清空时，自定义色块不显示勾选标记。

::: tabs

== 示例

<Example>
  <div class="flex flex-wrap items-center gap-4">
    <div zui-create="colorPicker" data-heading="主题颜色" data-custom="true" data-default-value="#123456" data-colors="#3b82f6,#22c55e,#f59e0b" data-sync-value="#customColorValue"></div>
    <span>当前颜色：<output id="customColorValue" class="font-mono" aria-live="polite"></output></span>
  </div>
</Example>

== 完整代码

```html
<div class="flex flex-wrap items-center gap-4">
    <div zui-create="colorPicker" data-heading="主题颜色" data-custom="true" data-default-value="#123456" data-colors="#3b82f6,#22c55e,#f59e0b" data-sync-value="#customColorValue"></div>
    <span>当前颜色：<output id="customColorValue" class="font-mono" aria-live="polite"></output></span>
</div>
```

:::

通过 JavaScript 初始化时，`custom` 也可传入 [ColorInput 选项](#color-input)，例如 `custom: {hint: '自定义主题颜色'}`。其中 `hint`、`className` 和回调可用于定制内部输入框；当前颜色应设置在 `ColorPicker` 顶层的 `value` 或 `defaultValue` 上。内部输入框的 `value` 和 `icon` 由选择器管理，`custom.value`、`custom.defaultValue` 和 `custom.icon` 不用于设置独立的初始颜色或图标。

原生 `change` 事件触发后，选择器先执行 `beforeChange`，通过后更新值、同步关联元素并关闭面板。`beforeChange` 返回 `false` 时保留原值和已打开的面板。

两个 `onChange` 的含义不同：`ColorPicker.onChange(value, oldValue)` 接收实际生效的新旧值；`custom.onChange(value, event)` 接收原生输入框提交的候选颜色和事件，即使 `beforeChange` 拒绝或替换该颜色也会执行。保存业务数据时应使用选择器自身的 `onChange`。

## 自定义图标

通过设置 `icon` 属性自定义颜色显示图标。

::: tabs

== 示例

<Example>
  <div zui-create="colorPicker" data-icon='{"className":"example-icon example-icon-tint","aria-hidden":true,"style":{"display":"inline-block","width":"1em","height":"1em","backgroundColor":"currentColor","mask":"url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M12%202S3%2012%203%2016a9%209%200%200%200%2018%200c0-4-9-14-9-14z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"}}'></div>
</Example>

== 完整代码

```html
<div zui-create="colorPicker" data-icon='{"className":"example-icon example-icon-tint","aria-hidden":true,"style":{"display":"inline-block","width":"1em","height":"1em","backgroundColor":"currentColor","mask":"url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M12%202S3%2012%203%2016a9%209%200%200%200%2018%200c0-4-9-14-9-14z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"}}'></div>
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
custom?: boolean | ColorInputOptions = false; // 追加 ColorInput 色块，选择预设列表之外的颜色。
icon?: string; // 显示为图标的名称。
closeBtn?: boolean = true; // 颜色面板是否使用关闭按钮。
syncValue?: string; // 颜色值容器选择器。
syncColor?: string; // 文本色同步容器选择器。
syncBackground?: string; // 背景色同步容器选择器。
syncBorder?: string; // 边框色同步容器选择器。
</Props>

## ColorInput 颜色输入框 {#color-input}

`ColorInput` 将原生 `<input type="color">` 显示为紧凑的圆形色块，适合在表单或工具栏中选择任意颜色。点击色块打开浏览器的取色面板；需要预设色板、面板内的清空按钮或同步其他元素时，使用上面的 `ColorPicker`。

### 基本使用

通过 `zui-create="colorInput"` 初始化，使用 `defaultValue` 设置初始颜色，省略或设为 `''` 时为空值，显示白色中心的彩虹色块。颜色值使用六位十六进制格式，例如 `#3b82f6`。设置 `icon` 可在色块中央显示图标，图标使用按钮的文字颜色。

::: tabs

== 示例

<Example>
  <div class="flex flex-wrap items-center gap-4">
    <div class="flex items-center gap-2"><span>未选择</span><div zui-create="colorInput" data-hint="选择可选颜色"></div></div>
    <div class="flex items-center gap-2"><span>初始颜色</span><div zui-create="colorInput" data-default-value="#3b82f6" data-hint="选择项目标签颜色"></div></div>
    <div class="flex items-center gap-2"><span>带图标</span><div zui-create="colorInput" data-default-value="#f59e0b" data-icon='{"className":"i-check","aria-hidden":true}' data-hint="选择带图标的颜色"></div></div>
  </div>
</Example>

== 完整代码

```html
<div class="flex flex-wrap items-center gap-4">
    <div class="flex items-center gap-2"><span>未选择</span><div zui-create="colorInput" data-hint="选择可选颜色"></div></div>
    <div class="flex items-center gap-2"><span>初始颜色</span><div zui-create="colorInput" data-default-value="#3b82f6" data-hint="选择项目标签颜色"></div></div>
    <div class="flex items-center gap-2"><span>带图标</span><div zui-create="colorInput" data-default-value="#f59e0b" data-icon='{"className":"i-check","aria-hidden":true}' data-hint="选择带图标的颜色"></div></div>
</div>
```

:::

`hint` 同时设置色块容器的 `title` 和内部输入框的 `aria-label`，建议始终填写具体用途。可通过 Tab 聚焦原生输入框，再按浏览器支持的键盘方式打开和操作取色面板；面板外观与操作方式由浏览器和操作系统决定。

### 变更回调与表单字段

通过 `new zui.ColorInput(element, options)` 初始化时，使用 `onInput(value, event)` 显示实时颜色，使用 `onChange(value, event)` 处理原生 `change` 事件提交的颜色。

当前实现会在原生 `change` 事件中先调用 `onInput`，再调用 `onChange`。因此一次选择可能多次触发 `onInput`；仅需处理原生 `input` 事件时，可判断 `event.type === 'input'`，保存或提交操作则放在 `onChange` 中。

设置 `name` 后，控件作为一个表单字段参与提交，未选择颜色时提交空字符串，选择黑色时提交 `#000000`。使用组件值或 `new FormData(form).get('accentColor')` 读取结果；不要把原生颜色输入框为空时显示的黑色当作组件已选择的颜色。非受控模式下，表单字段随 `input` 更新，不必等到 `onChange`。

::: tabs

== 示例

<Example>
  <form class="flex flex-wrap items-center gap-2">
    <ZUI
      use="colorInput"
      :options="{name: 'accentColor', defaultValue: '#0ea5e9', hint: '选择主题颜色', onInput: handleColorInputPreview, onChange: handleColorInputChange}"
      :beforeCreate="resetColorInputValue"
    />
    <span>当前颜色：<output id="colorInputPreview" class="font-mono" aria-live="polite">{{ colorInputPreview }}</output></span>
    <span>确认颜色：<output id="colorInputValue" class="font-mono" aria-live="polite">{{ colorInputValue }}</output></span>
  </form>
</Example>

== 完整代码

```html
<form id="colorInputForm" class="flex flex-wrap items-center gap-2">
    <div id="colorInputField"></div>
    <span>当前颜色：<output id="colorInputPreview" class="font-mono" aria-live="polite">#0ea5e9</output></span>
    <span>确认颜色：<output id="colorInputValue" class="font-mono" aria-live="polite">#0ea5e9</output></span>
</form>

<script>
{
    const preview = document.querySelector('#colorInputPreview');
    const output = document.querySelector('#colorInputValue');
    const colorInput = new zui.ColorInput('#colorInputField', {
        name: 'accentColor',
        defaultValue: '#0ea5e9',
        hint: '选择主题颜色',
        onInput(value, event) {
            preview.textContent = value;
        },
        onChange(value, event) {
            output.textContent = value;
        },
    });
}
</script>
```

:::

### 初始值与受控值

- `defaultValue` 用于初始化非受控组件，之后由用户操作更新颜色；不要通过反复修改它来设置当前颜色。
- `value` 表示由调用方管理的当前颜色，优先于 `defaultValue`。需要实时更新色块及表单值时，在 `onInput` 中保存新值并调用实例的 `render({value})`；只在 `onChange` 中更新则在提交时更新。Preact 用法由父组件传入新的 `value`。
- 程序设置 `value` 不会触发 `onInput` 或 `onChange`，需要同时显示颜色值时，由调用方同步更新显示内容。
- 设置 `value: ''` 可恢复空值及彩虹色块。

对于上面通过 JavaScript 创建的 `colorInput` 实例，可使用以下 API：

| API | 说明 |
| --- | --- |
| `colorInput.$?.value` | 初始化完成后读取内部 Preact 组件的当前颜色值；初始化前或销毁后 `$` 为 `null`。 |
| `colorInput.render({value: '#22c55e'})` | 更新颜色，并由调用方继续维护 `value`。 |
| `colorInput.destroy()` | 卸载组件并清理实例。 |

### ColorInput 选项

这些选项仅用于 `ColorInput`。`ColorPicker` 的 `colors`、`syncValue`、`syncColor`、`syncBackground` 和 `syncBorder` 不适用于此组件。这里的 `icon` 是色块中心的图标，不是颜色选择器触发器上的图标。

<Props>
id?: string; // 组件生成的色块容器 ID，不是内部 input 的 ID。
className?: ClassNameLike; // 添加到色块容器的 CSS 类。
name?: string; // 内部 input 的表单字段名。
value?: string; // 由调用方管理的当前颜色，优先于 defaultValue。
defaultValue?: string = ''; // 非受控模式的初始颜色，空字符串表示未选择。
hint?: string; // 色块容器的 title，同时用作内部 input 的 aria-label。
icon?: IconType; // 色块中心的图标，使用文字色，不使用 --color-input-value。
onInput?: (value: string, event: Event) => void; // 原生 input 时回调；change 时也会先于 onChange 调用。
onChange?: (value: string, event: Event) => void; // 原生 change 事件触发时回调。
</Props>

类型中保留了 `alpha?: boolean`，但当前实现未将其传给原生输入框，设置后不会启用透明度选择。原生取色面板不提供清空按钮；如需程序清空，按上面的受控值方式设置 `value: ''`。

### 样式

| CSS 变量 | 用途 |
| --- | --- |
| `--color-input-value` | 由组件根据当前值设置，用于绘制色块。应通过 `value` 或 `defaultValue` 设置颜色，直接改 CSS 不会更新组件值或表单字段。 |
| `--color-input-empty-bg` | 彩虹背景，默认由白色径向渐变与彩虹锥形渐变叠加。也用于 `ColorPicker` 自定义色块的彩虹边缘。 |

如需替换彩虹背景，可通过 `className` 添加自定义类，在生成的 `.color-input` 元素本身覆盖 `--color-input-empty-bg`。该变量在组件根元素上有默认值，仅设置在外层容器不会覆盖它。

<script setup>
import {ref} from 'vue';

const colorInputPreview = ref('#0ea5e9');
const colorInputValue = ref('#0ea5e9');

function resetColorInputValue() {
    colorInputPreview.value = '#0ea5e9';
    colorInputValue.value = '#0ea5e9';
}

function handleColorInputPreview(value) {
    colorInputPreview.value = value;
}

function handleColorInputChange(value) {
    colorInputValue.value = value;
}
</script>
