## 多选和单选框

## 默认外观

### 复选框

```html:example
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
```html:example
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

## 不包括文字内容的复选框和单选框

```html:example
<div class="checkbox">
  <label>
    <input type="checkbox">
  </label>
</div>
<div class="checkbox">
  <label>
    <input disabled type="checkbox">
  </label>
</div>
<div class="radio">
  <label>
    <input type="radio" name="radioOptionsExample">
  </label>
</div>
<div class="radio">
  <label>
    <input disabled type="radio" name="radioOptionsExample">
  </label>
</div>
```

## 内联形式

### 内联多选框

```html:example
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

```html:example
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

```html:example
<div class="checkbox-primary"><input type="checkbox" id="primaryCheckbox1"><label for="primaryCheckbox1">未选中</label></div>
<div class="checkbox-primary"><input type="checkbox" checked="checked" id="primaryCheckbox2"><label for="primaryCheckbox2">选中</label></div>
<div class="checkbox-primary"><input type="checkbox" checked="checked" disabled="disabled" id="primaryCheckbox3"><label for="primaryCheckbox3">禁用</label></div>
```

```html:example
<div class="radio-primary"><input type="radio" name="primaryRadioGroup1" id="primaryradio1"><label for="primaryradio1">选项一</label></div>
<div class="radio-primary"><input type="radio" name="primaryRadioGroup1" checked="checked" id="primaryradio2"><label for="primaryradio2">选项二</label></div>
<div class="radio-primary"><input type="radio" name="primaryRadioGroup1" checked="checked" id="primaryradio3"><label for="primaryradio3">选项三</label></div>
<div class="radio-primary"><input type="radio" name="primaryRadioGroup1" checked="checked" disabled="disabled" id="primaryradio4"><label for="primaryradio4">禁用</label></div>
```

```html
   <div class="checkbox-primary"><label>未选中</label></div>
   <div class="checkbox-primary checked"><label>选中</label></div>
   <div class="radio-primary"><label>未选中</label></div>
   <div class="radio-primary checked"><label>选中</label></div>
```
