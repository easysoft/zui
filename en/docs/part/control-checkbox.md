section: control
id: checkbox
description: 内联或块级的多选和单选框
icon: icon-check-sign
filter: duoxuanhedanxuankuang dxhdx radio
---

# Checkbox and Radio

## Default Appearance

### Checkbox

A checkbox is for users to select multiple options. It is different from `<select>`, and its options are displayed.

For `<input type="checkbox">` set `disabled` to disble a style. If `disabled` s added to `.checkbox`, the checkbox, including its text, is disabled.

Stack several checkboxes to create a checkbox group.

<example>
  <div class="checkbox">
    <label>
      <input type="checkbox"> Checkbox 1
    </label>
  </div>
  <div class="checkbox">
    <label>
      <input type="checkbox"> Checkbox 2
    </label>
  </div>
  <div class="checkbox disabled">
    <label>
      <input disabled type="checkbox"> Disabled Checkbox
    </label>
  </div>
</example>

```html
<div class="checkbox">
  <label>
    <input type="checkbox"> Checkbox 1
  </label>
</div>
<div class="checkbox">
  <label>
    <input type="checkbox"> Checkbox 2
  </label>
</div>
<div class="checkbox disabled">
  <label>
    <input disabled type="checkbox"> Disabled Checkbox
  </label>
</div>
```

### Radio

Only one radio can be selected, which is different from a checkbox.

Add `disabled` class and `disabled` property to disable styles.

Stack several radios to create a radio group.

<example>
  <div class="radio">
    <label>
      <input type="radio" name="radioOptionsExample1"> Radio 1
    </label>
  </div>
  <div class="radio">
    <label>
      <input type="radio" name="radioOptionsExample1"> Radio 2
    </label>
  </div>
  <div class="radio disabled">
    <label>
      <input disabled type="radio" name="radioOptionsExample1"> Disabled Radio
    </label>
  </div>
</example>

```html
<div class="radio">
  <label>
    <input type="radio" name="radioOptionsExample"> Radio 1
  </label>
</div>
<div class="radio">
  <label>
    <input type="radio" name="radioOptionsExample"> Radio 2
  </label>
</div>
<div class="radio disabled">
  <label>
    <input disabled type="radio" name="radioOptionsExample"> Disabled Radio
  </label>
</div>
```

### No Text Checkbox and Radio

If no text is included in `<label>`, you will have a checkbox or raido without any text. It is used in a few situations, e.g. adding a checkbox column to a table.

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

## Inline

Sometimes it is better to put several chechboxes or radios in the same line. For `<label>`, add `checkbox-inline` or `radio-inline` and it will work. No `<div>` is required to wrap `<label>`.

### Inline Checkbox

<example>
  <label class="checkbox-inline">
    <input type="checkbox"> Checkbox 1
  </label>
  <label class="checkbox-inline">
    <input type="checkbox"> Checkbox 2
  </label>
  <label class="checkbox-inline">
    <input disabled type="checkbox"> Disabled Checkbox
  </label>
</example>

```html
<label class="checkbox-inline">
  <input type="checkbox"> Checkbox 1
</label>
<label class="checkbox-inline">
  <input type="checkbox"> Checkbox 2
</label>
<label class="checkbox-inline">
  <input disabled type="checkbox"> Disabled Checkbox
</label>
```

### Inline Radio

<example>
  <label class="radio-inline">
    <input type="radio" name="radioOptionsExample3"> Radio 1
  </label>
  <label class="radio-inline">
    <input type="radio" name="radioOptionsExample3"> Radio 2
  </label>
  <label class="radio-inline">
    <input disabled type="radio" name="radioOptionsExample3"> Disabled Radio
  </label>
</example>

```html
<label class="radio-inline">
  <input type="radio" name="radioOptionsExample"> Radio 1
</label>
<label class="radio-inline">
  <input type="radio" name="radioOptionsExample"> Radio 2
</label>
<label class="radio-inline">
  <input disabled type="radio" name="radioOptionsExample"> Disabled Radio
</label>
```

## Advanced Appearance

Checkbox/Raido with advanced appearance is customized, so the experience is the same in all browsers.

<example>
<div class="checkbox-primary"><input type="checkbox" id="primaryCheckbox1"><label for="primaryCheckbox1">Unselected</label></div>
<div class="checkbox-primary"><input type="checkbox" checked="checked" id="primaryCheckbox2"><label for="primaryCheckbox2">Selected</label></div>
<div class="checkbox-primary"><input type="checkbox" checked="checked" disabled="disabled" id="primaryCheckbox3"><label for="primaryCheckbox3">Disabled</label></div>
</example>

```html
<div class="checkbox-primary"><input type="checkbox" id="primaryCheckbox1"><label for="primaryCheckbox1">Unselected</label></div>
<div class="checkbox-primary"><input type="checkbox" checked="checked" id="primaryCheckbox2"><label for="primaryCheckbox2">Selected</label></div>
<div class="checkbox-primary"><input type="checkbox" checked="checked" disabled="disabled" id="primaryCheckbox3"><label for="primaryCheckbox3">Disabled</label></div>
```

<example>
<div class="radio-primary"><input type="radio" name="primaryRadioGroup1" id="primaryradio1"><label for="primaryradio1">Option 1</label></div>
<div class="radio-primary"><input type="radio" name="primaryRadioGroup1" checked="checked" id="primaryradio2"><label for="primaryradio2">Option 2</label></div>
<div class="radio-primary"><input type="radio" name="primaryRadioGroup1" checked="checked" id="primaryradio3"><label for="primaryradio3">Option 3</label></div>
<div class="radio-primary"><input type="radio" name="primaryRadioGroup1" checked="checked" disabled="disabled" id="primaryradio4"><label for="primaryradio4">Disabled</label></div>
</example>

```html
<div class="radio-primary"><input type="radio" name="primaryRadioGroup1" id="primaryradio1"><label for="primaryradio1">Option 1</label></div>
<div class="radio-primary"><input type="radio" name="primaryRadioGroup1" checked="checked" id="primaryradio2"><label for="primaryradio2">Option 2</label></div>
<div class="radio-primary"><input type="radio" name="primaryRadioGroup1" checked="checked" id="primaryradio3"><label for="primaryradio3">Option 3</label></div>
<div class="radio-primary"><input type="radio" name="primaryRadioGroup1" checked="checked" disabled="disabled" id="primaryradio4"><label for="primaryradio4">Disabled</label></div>
```

`<input>` is not always required for advanced appearance. Add `.checked` for `.checkbox-primary` or `.radio-primary`, so users can not select the option by clicking it. Remove `.checked` to change the selected state.

<example>
<div class="checkbox-primary"><label>Unselected</label></div>
<div class="checkbox-primary checked"><label>Selected</label></div>
<div class="radio-primary"><label>Unselected</label></div>
<div class="radio-primary checked"><label>Selected</label></div>
</example>

```html
<div class="checkbox-primary"><label>Unselected</label></div>
<div class="checkbox-primary checked"><label>Selected</label></div>
<div class="radio-primary"><label>Unselected</label></div>
<div class="radio-primary checked"><label>Selected</label></div>
```
