# Colorpicker

## Button colorpicker

Set `[data-provide="colorpicker"]` for `<input type="hidden">`, then the color value will be displayed as a button. The color values set by buttons will be updated synchronously to `<input>`. By getting the `value` of `<input>`, the  color value will be get.

<example>
  <input type="hidden" class="form-control" id="myColor2" name="myColor2" data-provide="colorpicker" value="#3280fC" data-pull-menu-right="false" data-btn-tip="Theme Color">
</example>

```html
<!-- Button colorpicker -->
<input type="hidden" class="form-control" id="myColor2" name="myColor2" data-provide="colorpicker" value="#3280fC" data-pull-menu-right="false" data-btn-tip="Theme Color">
```

## Input group

Place `<input type="text">` in `div class="input-group">` and set `data-wrapper="input-group-btn" for `<input>` to get a text box for entering a hexadecimal color value. User can define color values which will be added to the end of the color menu for selection.

<example>
  <div class="row">
    <div class="col-sm-6">
      <div class="input-group">
        <input type="text" class="form-control" id="myColor3" name="myColor3" data-provide="colorpicker" data-wrapper="input-group-btn" data-pull-menu-right="true" value="#3280fC" placeholder="Enter hexadecimal color value, e.g. #FF00DD">
      </div>
    </div>
    <div class="col-sm-6">
      <div class="input-group">
        <span class="input-group-addon">Theme color</span>
        <input type="text" class="form-control" id="myColor3" name="myColor3" data-provide="colorpicker" data-wrapper="input-group-btn" data-pull-menu-right="true" value="#3280fC" placeholder="Enter hexadecimal color value, e.g. #FF00DD">
      </div>
    </div>
  </div>
</example>

```html
<!-- Enter a hexadecimal color value using the input group to provide an input box -->
<div class="input-group">
  <span class="input-group-addon">Theme color</span>
  <input type="text" class="form-control" id="myColor3" name="myColor3" data-provide="colorpicker" data-wrapper="input-group-btn" data-pull-menu-right="true" value="#3280fC" placeholder="Enter hexadecimal color value, e.g. #FF00DD">
</div>
```

## Customize preset colors

Use `colors` to customize preset colors. When using `[data-colors]`, separate color values with a comma.

<example>
  <input type="hidden" class="form-control" id="myColor4" name="myColor4" data-provide="colorpicker" value="#3280fC" data-colors="#fff,#000,#3280fC,red" data-pull-menu-right="false">
</example>

```html
<input type="hidden" class="form-control" id="myColor4" name="myColor4" data-provide="colorpicker" value="#3280fC" data-colors="#fff,#000,#3280fC,red">
```

```js
// Manual initialization or use an array to set the default color.
$('.input-group #myColor').colorpicker({
    colors: ['#fff', '#000', '#3280fC', 'red']
});
```

## Customize button icons

Use `icon` to customize button icons. Available icons can be found in [Control - icon](#control/icon).

<example>
  <div class="row">
    <div class="col-sm-6">
      <div class="input-group">
        <input type="text" class="form-control" id="myColor5" name="myColor5" data-provide="colorpicker" data-wrapper="input-group-btn" data-pull-menu-right="true" value="#3280fC" data-icon="ellipsis-v">
      </div>
    </div>
    <div class="col-sm-6">
      <input type="hidden" class="form-control" id="myColor6" name="myColor6" data-provide="colorpicker" value="#3280fC" data-pull-menu-right="false" data-icon="tint">
      <input type="hidden" class="form-control" id="myColor7" name="myColor7" data-provide="colorpicker" value="#3280fC" data-pull-menu-right="false" data-icon="star">
    </div>
  </div>
</example>

```html
<input type="hidden" class="form-control" id="myColor3" name="myColor3" data-provide="colorpicker" value="#3280fC" data-icon="tint">
```

## Update

Use `update-*` to update colors or text for other elements on the page.

<example>
  <input type="hidden" class="form-control" id="myColor8" name="myColor8" data-provide="colorpicker" value="#3280fC"  data-pull-menu-right="false" data-update-text="#myColor4Label" data-update-color="#myColor4Label">
  &nbsp; <span>You just selected the color:<strong id="myColor4Label"></strong></span>
</example>

```html
<input type="hidden" class="form-control" id="myColor8" name="myColor8" data-provide="colorpicker" value="#3280fC"  data-pull-menu-right="false" data-update-text="#myColor4Label" data-update-color="#myColor4Label">
<div>You just selected the color:<strong id="myColor4Label"></strong></div>
```

## How to use it

### Introduce resources

Colorpicker is an independent component. You need to introduce assets in lib/ from local or CDN:

```html
<link href="lib/colorpicker/zui.colorpicker.min.css" rel="stylesheet">
<script src="lib/colorpicker/zui.colorpicker.min.js"></script>
```

### Initialization

Use `[data-provide="colorpicker"]` to initialize and use `[data-*]` to specify initialization options.

```html
<input type="hidden" class="form-control" id="myColor2" name="myColor2" data-provide="colorpicker" value="#3280fC">
```

Use JavaScript to initialize and introduce initialization options while calling the initialization function.

```js
$('.input-group #myColor').colorpicker({
    wrapper: '.input-group-btn'
});
```

<link href="../../dist/lib/colorpicker/zui.colorpicker.min.css" rel="stylesheet">
<script src="../../dist/lib/colorpicker/zui.colorpicker.min.js"></script>
<script>
$(function() {
    $('#pageContent [data-provide="colorpicker"]').colorPicker();
});
</script>

### Options

All available initialization options are:

<table class="table table-bordered">
  <thead>
    <tr>
      <th style="width: 100px">Option</th>
      <th style="width: 120px">Name</th>
      <th style="width: 180px">Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`colors`</td>
      <td>Preset colors</td>
      <td>Use omma to separate hexadecimal colors or arrays of hexadecimal colors. The default is <code style="word-break:break-all; white-space: normal">['#00BCD4', '#388E3C', '#3280fc', '#3F51B5', '#9C27B0', '#795548', '#F57C00', '#F44336', '#E91E63']</code></td>
      <td></td>
    </tr>
    <tr>
      <td>`pullMenuRight`</td>
      <td>The dropdown is aligned on the right.</td>
      <td>`true`(default),`false`</td>
      <td></td>
    </tr>
    <tr>
      <td>`wrapper`</td>
      <td>CSS CLASS of dropdown button parent elements</td>
      <td>Default: `'btn-wrapper'`</td>
      <td>When using the input group, set this option as `'input-group-btn'.`</td>
    </tr>
    <tr>
      <td>`tileSize`</td>
      <td>Size of a color tile</td>
      <td>Default: `30` pixel</td>
      <td>The color tiles in the dropdown are all squares, and both width and height are defined.</td>
    </tr>
    <tr>
      <td>`lineCount`</td>
      <td>Number of color tiles per row</td>
      <td>Default: `5`</td>
      <td>If the number of preset color exceeds this number, display it on a new line.</td>
    </tr>
    <tr>
      <td>`optional`</td>
      <td>Whether null is allowed.</td>
      <td>`true`(default), `false`</td>
      <td>If set as `false`, clear color button will not be displayed in the dropdown, but it will not fordbid users from setting `<input>` as empty.</td>
    </tr>
    <tr>
      <td>`icon`</td>
      <td>Icon of the button</td>
      <td>Default: `'caret-down'`</td>
      <td></td>
    </tr>
    <tr>
      <td>`btnTip`</td>
      <td>Button tip</td>
      <td>Default: `null`</td>
      <td>The content of the tip is displayed when the mouse hovers over the button.</td>
    </tr>
    <tr>
      <td>`tooltip`</td>
      <td>Whether to display a tip</td>
      <td>`'top'`(default), `'bottom'`, `'left'`,`'right'` and `false`</td>
      <td>The placement where the tip is displayed. If set as `false`, no tip is displayed.</td>
    </tr>
    <tr>
      <td>`errorTip`</td>
      <td>Tip for error format</td>
      <td></td>
      <td>When using a input group, the tip is displayed if the value in the input box is not a valid hexadecimal color value.</td>
    </tr>
    <tr>
      <td>`updateColor`</td>
      <td>Update text colors</td>
      <td>Valid CSS selector. Not set by default.</td>
      <td>When the value of the colorpicker is changed the target element indicated by this value will update the text color to the current value synchronously.</td>
    </tr>
    <tr>
      <td>`updateBorder`</td>
      <td>Update border colors</td>
      <td>Valid CSS selector. Not set by default.</td>
      <td>When the value of the color picker is changed, the target element indicated by this value will update the border color to the current value synchronously.</td>
    </tr>
    <tr>
      <td>`updateBackground`</td>
      <td>Update background colors</td>
      <td>Valid CSS selector. Not set by default.</td>
      <td>When the value of the color picker is changed, the target element indicated by this value will update the background color to the current value synchronously.</td>
    </tr>
    <tr>
      <td>`updateText`</td>
      <td>Update text content</td>
      <td>Valid CSS selector. Not set by default.</td>
      <td>When the value of the color picker is changed, the target element indicated by this value will update the text content to the current value synchronously.</td>
    </tr>
    <tr>
      <td>`lang`</td>
      <td>Language options</td>
      <td>`'zh-cn'`, `'zh-tw'`, `'en'`</td>
      <td>The default settings is to get the `lang` in `<html>` automatically.</td>
    </tr>
  </tbody>
</table>

### Listen value changing event

Bind `change` event for `<input>`.

```js
$('#myColor').on('change', function() {
    console.log('The newly set color value is ', $(this).val());
});
```

### Methods

Available method are:

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Method</th>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`addColor(color)`</td>
      <td>`color`: Hexadecimal color value</td>
      <td>Add a new color to the preset colors</td>
    </tr>
    <tr>
      <td>`updateColors(colors)`</td>
      <td>`colors`: Hexadecimal color value array</td>
      <td>Reset all preset colors</td>
    </tr>
    <tr>
      <td>`setValue(color)`</td>
      <td>`colors`: Hexadecimal color value</td>
      <td>Set the currently selected color value. If the color is not a preset color, add it to the preset color list.</td>
    </tr>
  </tbody>
</table>

Call method:

```js
// Get colorpicker instance
var colorPicker = $('#myColor').data('zui.colorPicker');

// Set preset colors
colorPicker.updateColors(['#FFF', 'red', '#F8E800']);

// Add a preset color
colorPicker.addColor('#808080');

// Set current color
colorPicker.setValue('#FFF');
```
