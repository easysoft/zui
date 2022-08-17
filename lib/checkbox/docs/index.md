## 单选框和复选框

复选框（checkbox）允许用户选择多个选项，不同于 `<select>`，这些选项是直接展示的。
为 `<input type="checkbox">` 设置 disabled 属性来应用禁用样式，
如果为 .checkbox 添加 disabled 类，则整个复选框包括文字部分都会应用禁用样式。
将多个复选框堆叠形成一个复选框组。

## 基本用法

### 基本样式复选框

<Example>
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
</Example>

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

### 基本样式单选框

<Example>
  <div class="radio">
    <label>
      <input type="radio" name="radioOptionsExample"> 单选框1
    </label>
  </div>
  <div class="radio">
    <label>
      <input type="radio" name="radioOptionsExample"> 单选框2
    </label>
  </div>
  <div class="radio disabled">
    <label>
      <input disabled type="radio" name="radioOptionsExample"> 被禁用的单选框
    </label>
  </div>
</Example>

```html
<div class="radio">
  <label>
    <input type="radio">单选框1
  </label>
</div>
<div class="radio">
  <label>
    <input type="radio">单选框2
  </label>
</div>
<div class="radio">
  <label>
    <input disabled type="radio">被禁用的单选框
  </label>
</div>
```

## 不包含文字样式

### 复选框

<Example>
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
  <div class="checkbox">
    <label>
      <input type="checkbox" disabled>
    </label>
  </div>
</Example>

```html
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
<div class="checkbox">
  <label>>
    <input type="checkbox" disabled > 
  </label>
</div>
```

### 单选框

<Example>
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
</Example>

```html
<div class="checkbox">
  <label type="radio">
    <input type="checkbox">
  </label>
</div>
<div class="checkbox">
  <label>
    <input type="checkbox">
  </label>
</div>
<div class="checkbox">
  <label>>
    <input type="checkbox" disabled > 
  </label>
</div>
```

## 内联形式

### 多选框

<Example>
 <label class="checkbox-inline">
   <input type="checkbox"> 多选框 1
 </label>
 <label class="checkbox-inline">
   <input type="checkbox"> 多选框 2
 </label>
 <label class="checkbox-inline">
   <input disabled type="checkbox"> 被禁用的多选框
 </label>
</Example>

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

### 单选框
<Example>
 <label class="radio-inline">
   <input type="radio" name="radioOptionsExample"> 单选框 1
 </label>
 <label class="radio-inline">
   <input type="radio" name="radioOptionsExample"> 单选框 2
 </label>
 <label class="radio-inline">
   <input disabled type="radio" name="radioOptionsExample"> 被禁用的单选框
 </label>
</Example>

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

<Example>
  <div class="checkbox-primary"><input type="checkbox" id="primaryCheckbox1"><label for="primaryCheckbox1">未选中</label></div>
  <div class="checkbox-primary"><input type="checkbox" checked="checked" id="primaryCheckbox2"><label for="primaryCheckbox2">选中</label></div>
  <div class="checkbox-primary"><input type="checkbox" checked="checked" disabled="disabled" id="primaryCheckbox3"><label for="primaryCheckbox3">禁用</label></div>
</Example>

```html
<div class="checkbox-primary"><input type="checkbox" id="primaryCheckbox1"><label for="primaryCheckbox1">未选中</label></div>
<div class="checkbox-primary"><input type="checkbox" checked="checked" id="primaryCheckbox2"><label for="primaryCheckbox2">选中</label></div>
<div class="checkbox-primary"><input type="checkbox" checked="checked" disabled="disabled" id="primaryCheckbox3"><label for="primaryCheckbox3">禁用</label></div>
```

<Example>
  <div class="radio-primary"><input type="radio" name="primaryRadioGroup1" id="primaryradio1"><label for="primaryradio1">选项一</label></div>
  <div class="radio-primary"><input type="radio" name="primaryRadioGroup1" checked="checked" id="primaryradio2"><label for="primaryradio2">选项二</label></div>
  <div class="radio-primary"><input type="radio" name="primaryRadioGroup1" checked="checked" id="primaryradio3"><label for="primaryradio3">选项三</label></div>
  <div class="radio-primary"><input type="radio" name="primaryRadioGroup1" checked="checked" disabled="disabled" id="primaryradio4"><label for="primaryradio4">禁用</label></div>
</Example>

```html
<div class="radio-primary"><input type="radio" name="primaryRadioGroup1" id="primaryradio1"><label for="primaryradio1">选项一</label></div>
<div class="radio-primary"><input type="radio" name="primaryRadioGroup1" checked="checked" id="primaryradio2"><label for="primaryradio2">选项二</label></div>
<div class="radio-primary"><input type="radio" name="primaryRadioGroup1" checked="checked" id="primaryradio3"><label for="primaryradio3">选项三</label></div>
<div class="radio-primary"><input type="radio" name="primaryRadioGroup1" checked="checked" disabled="disabled" id="primaryradio4"><label for="primaryradio4">禁用</label></div>
```

高级外观还可以不使用 `<input>` 元素，在此种情况下，为 .checkbox-primary 或 .radio-primary 添加 .checked 类标记为选中状态，用户无法通过点击来切换选中状态，但可以通过程序手动添加或移除 .checked 来更改选中状态。
<Example>
  <div class="checkbox-primary"><label>未选中</label></div>
  <div class="checkbox-primary checked"><label>选中</label></div>
</Example>

```html
 <div class="checkbox-primary"><label>未选中</label></div>
 <div class="checkbox-primary checked"><label>选中</label></div>
```

<Example>
  <div class="radio-primary"><label>未选中</label></div>
  <div class="radio-primary checked"><label>选中</label></div>
</Example>

```html
  <div class="radio-primary"><label>未选中</label></div>
  <div class="radio-primary checked"><label>选中</label></div>
```

<style>
.radio-primary,
.checkbox-primary {
  line-height: 16px;
}
</style>
