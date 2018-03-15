section: control
id: checkbox
description: 内联或块级的多选和单选框
icon: icon-check-sign
filter: duoxuanhedanxuankuang dxhdx radio
---

# 多选和单选框

## 默认外观

### 多选框

复选框（checkbox）允许用户选择多个选项，不同于 `<select>`，这些选项是直接展示的。

为 `<input type="checkbox">` 设置 `disabled` 属性来应用禁用样式，如果为 `.checkbox` 添加 `disabled` 类，则整个复选框包括文字部分都会应用禁用样式。

将多个复选框堆叠形成一个复选框组。

<example>
  <div class="checkbox">
    <label>
      <input type="checkbox"> 复选框 1
    </label>
  </div>
  <div class="checkbox">
    <label>
      <input type="checkbox"> 复选框 2
    </label>
  </div>
  <div class="checkbox disabled">
    <label>
      <input disabled type="checkbox"> 被禁用的复选框
    </label>
  </div>
</example>

```html
<div class="checkbox">
  <label>
    <input type="checkbox"> 复选框 1
  </label>
</div>
<div class="checkbox">
  <label>
    <input type="checkbox"> 复选框 2
  </label>
</div>
<div class="checkbox disabled">
  <label>
    <input disabled type="checkbox"> 被禁用的复选框
  </label>
</div>
```

### 单选框

单选框（radio）与复选框不同之处在于同一组的单选框只能选中其中一个。

与复选框类似，可以通过 `disabled` 属性和 `disabled` 类来添加禁用样式。

将多个单选框堆叠形成一个单选框组。

<example>
  <div class="radio">
    <label>
      <input type="radio" name="radioOptionsExample1"> 单选框 1
    </label>
  </div>
  <div class="radio">
    <label>
      <input type="radio" name="radioOptionsExample1"> 单选框 2
    </label>
  </div>
  <div class="radio disabled">
    <label>
      <input disabled type="radio" name="radioOptionsExample1"> 被禁用的单选框
    </label>
  </div>
</example>

```html
<div class="radio">
  <label>
    <input type="radio" name="radioOptionsExample"> 单选框 1
  </label>
</div>
<div class="radio">
  <label>
    <input type="radio" name="radioOptionsExample"> 单选框 2
  </label>
</div>
<div class="radio disabled">
  <label>
    <input disabled type="radio" name="radioOptionsExample"> 被禁用的单选框
  </label>
</div>
```

### 不包括文字内容的复选框和单选框

如果不在 `<label>` 内包含任何文本则可以得到一个没有文字内容的复选框或单选框。这种用法适合少数情况，例如为表格添加一个复选框的列。

<example class="row">
  <div class="col-xs-6">
    <div class="checkbox">
      <label>
        <input type="checkbox">
      </label>
    </div>
    <div class="checkbox">
      <label>
        <input type="checkbox">
      </label>
    </div>
    <div class="checkbox disabled">
      <label>
        <input disabled type="checkbox">
      </label>
    </div>
  </div>
  <div class="col-xs-6">
    <div class="radio">
      <label>
        <input type="radio" name="radioOptionsExample2">
      </label>
    </div>
    <div class="radio">
      <label>
        <input type="radio" name="radioOptionsExample2">
      </label>
    </div>
    <div class="radio disabled">
      <label>
        <input disabled type="radio" name="radioOptionsExample2">
      </label>
    </div>
  </div>
</example>

```html
<div class="checkbox">
  <label>
    <input type="checkbox">
  </label>
</div>

<div class="radio">
  <label>
    <input type="radio" name="radioOptionsExample">
  </label>
</div>
```

## 内联形式

有时将多个复选框或单选框放置在一行显示比较好。这时只需要为 `<label>` 添加 `checkbox-inline` 或 `radio-inline` 类即可，不需要额外的 `<div>` 来包裹 `<label>`。

### 内联多选框

<example>
  <label class="checkbox-inline">
    <input type="checkbox"> 多选框 1
  </label>
  <label class="checkbox-inline">
    <input type="checkbox"> 多选框 2
  </label>
  <label class="checkbox-inline">
    <input disabled type="checkbox"> 被禁用的多选框
  </label>
</example>

```html
<label class="checkbox-inline">
  <input type="checkbox"> 多选框 1
</label>
<label class="checkbox-inline">
  <input type="checkbox"> 多选框 2
</label>
<label class="checkbox-inline">
  <input disabled type="checkbox"> 被禁用的多选框
</label>
```

### 内联单选框

<example>
  <label class="radio-inline">
    <input type="radio" name="radioOptionsExample3"> 单选框 1
  </label>
  <label class="radio-inline">
    <input type="radio" name="radioOptionsExample3"> 单选框 2
  </label>
  <label class="radio-inline">
    <input disabled type="radio" name="radioOptionsExample3"> 被禁用的单选框
  </label>
</example>

```html
<label class="radio-inline">
  <input type="radio" name="radioOptionsExample"> 单选框 1
</label>
<label class="radio-inline">
  <input type="radio" name="radioOptionsExample"> 单选框 2
</label>
<label class="radio-inline">
  <input disabled type="radio" name="radioOptionsExample"> 被禁用的单选框
</label>
```

## 高级外观

高级外观的多选和单选框使用自定义的外观代替原生外观，在所有浏览器都具有一致的体验。

<example>
<div class="checkbox-primary"><input type="checkbox" id="primaryCheckbox1"><label for="primaryCheckbox1">未选中</label></div>
<div class="checkbox-primary"><input type="checkbox" checked="checked" id="primaryCheckbox2"><label for="primaryCheckbox2">选中</label></div>
<div class="checkbox-primary"><input type="checkbox" checked="checked" disabled="disabled" id="primaryCheckbox3"><label for="primaryCheckbox3">禁用</label></div>
</example>

```html
<div class="checkbox-primary"><input type="checkbox" id="primaryCheckbox1"><label for="primaryCheckbox1">未选中</label></div>
<div class="checkbox-primary"><input type="checkbox" checked="checked" id="primaryCheckbox2"><label for="primaryCheckbox2">选中</label></div>
<div class="checkbox-primary"><input type="checkbox" checked="checked" disabled="disabled" id="primaryCheckbox3"><label for="primaryCheckbox3">禁用</label></div>
```

<example>
<div class="radio-primary"><input type="radio" name="primaryRadioGroup1" id="primaryradio1"><label for="primaryradio1">选项一</label></div>
<div class="radio-primary"><input type="radio" name="primaryRadioGroup1" checked="checked" id="primaryradio2"><label for="primaryradio2">选项二</label></div>
<div class="radio-primary"><input type="radio" name="primaryRadioGroup1" checked="checked" id="primaryradio3"><label for="primaryradio3">选项三</label></div>
<div class="radio-primary"><input type="radio" name="primaryRadioGroup1" checked="checked" disabled="disabled" id="primaryradio4"><label for="primaryradio4">禁用</label></div>
</example>

```html
<div class="radio-primary"><input type="radio" name="primaryRadioGroup1" id="primaryradio1"><label for="primaryradio1">选项一</label></div>
<div class="radio-primary"><input type="radio" name="primaryRadioGroup1" checked="checked" id="primaryradio2"><label for="primaryradio2">选项二</label></div>
<div class="radio-primary"><input type="radio" name="primaryRadioGroup1" checked="checked" id="primaryradio3"><label for="primaryradio3">选项三</label></div>
<div class="radio-primary"><input type="radio" name="primaryRadioGroup1" checked="checked" disabled="disabled" id="primaryradio4"><label for="primaryradio4">禁用</label></div>
```

高级外观还可以不使用 `<input>` 元素，在此种情况下，为 `.checkbox-primary` 或 `.radio-primary` 添加 `.checked` 类标记为选中状态，用户无法通过点击来切换选中状态，但可以通过程序手动添加或移除 `.checked` 来更改选中状态。

<example>
<div class="checkbox-primary"><label>未选中</label></div>
<div class="checkbox-primary checked"><label>选中</label></div>
<div class="radio-primary"><label>未选中</label></div>
<div class="radio-primary checked"><label>选中</label></div>
</example>

```html
<div class="checkbox-primary"><label>未选中</label></div>
<div class="checkbox-primary checked"><label>选中</label></div>
<div class="radio-primary"><label>未选中</label></div>
<div class="radio-primary checked"><label>选中</label></div>
```
