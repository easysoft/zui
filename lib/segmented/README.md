# 分段选择器

在一组可见选项中选择一个值。完整参数见 [使用参考](ai.md)。

## 基础、尺寸与圆角

```html:example:col gap-4
<div id="segmentedBasic"></div>
<div id="segmentedSmall"></div>
<div id="segmentedLarge"></div>
<div id="segmentedRound"></div>
```

## 等宽与纵向

```html:example:col gap-4
<div id="segmentedBlock"></div>
<div id="segmentedVertical"></div>
```

## 图标与自定义内容

```html:example:col gap-4
<div id="segmentedIcons"></div>
<div id="segmentedCustom"></div>
```

## 禁用

```html:example
<div id="segmentedDisabled"></div>
```

## 受控选择

```html:example:col gap-3
<div id="segmentedControlled"></div>
<output id="segmentedControlledValue" aria-live="polite">list</output>
```

## 动态选项

```html:example:col gap-3
<div id="segmentedDynamic"></div>
<button id="segmentedLoad" type="button" class="btn">切换选项</button>
```

## 原生表单

```html:example
<form id="segmentedForm" class="col gap-3">
  <fieldset><legend>视图</legend><div id="segmentedField"></div></fieldset>
  <div class="flex gap-3">
    <button class="btn" type="submit">读取表单</button>
    <button class="btn" type="reset">重置</button>
  </div>
  <output aria-live="polite"></output>
</form>
```

## FormBuilder

```html:example:col gap-3
<div id="segmentedBuilder"></div>
<output id="segmentedBuilderValue" aria-live="polite"></output>
```

## 纯 HTML

```html:example
<div id="segmentedNative" class="segmented" role="radiogroup" aria-label="视图">
  <label class="segmented-item" for="segmentList">
    <input class="segmented-input" type="radio" id="segmentList" name="nativeView" value="list" checked>
    <span class="segmented-label"><span class="segmented-text">列表</span></span>
  </label>
  <label class="segmented-item" for="segmentBoard">
    <input class="segmented-input" type="radio" id="segmentBoard" name="nativeView" value="board" disabled>
    <span class="segmented-label"><span class="segmented-text">看板</span></span>
  </label>
  <label class="segmented-item" for="segmentCard">
    <input class="segmented-input" type="radio" id="segmentCard" name="nativeView" value="card">
    <span class="segmented-label"><span class="segmented-text">卡片</span></span>
  </label>
</div>
```

`Tab` 进入/离开组；方向键移动并选择可用项，空格选择当前项。纯 HTML 由浏览器维护选择和表单重置。
