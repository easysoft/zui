section: javascript
id: colorset
description: Color tool class
icon: icon-tint
filter: secai sc
---

# Color

`$.zui.Color` is a color auxiliary class which is used to change and calculate color.

## Examples

The available constructors are:

 - `new $.zui.Color()`
 - `new $.zui.Color(hexStr)`
 - `new $.zui.Color(r, g, b)`
 - `new $.zui.Color(r, g, b, a)`
 - `new $.zui.Color(rgbaColor)`
 - `new $.zui.Color(hslaColor)`
 - `new $.zui.Color(name)`

The parameters are defined as follows:

 - `hexStr`, hexadecimal color value string, `'#'`  as refix;
 - `r`，RGB Color model R Component, `0 ~ 255`；
 - `g`，RGB Color model G Component, `0 ~ 255`；
 - `b`，RGB Color model B Component, `0 ~ 255`；
 - `a`，Color transparency, `0 ~ 1`；
 - `rgbaColor`, RGB Color model setting color used in an object, e.g. `{r: 255, g: 0, b: 255, a: 1}`, `a` as transparency or omitted with `1` as its default;
 - `hslaColor`, HSL Color model setting color used in an object, e.g. `{h: 350, s: 0.5, l: 0.9, a: 1}`, `h` as `0 ~ 359`, `s` and `l` as `0 ~ 1`, `a` as transparency or omitted with `1` as its default;
 - `name`, color name, and all colors in `$.zui.Color.names` are supported, e.g. `'red'`;

```js
var myColor = new $.zui.Color('#095823');
```

## Class methods and attributes

### Determine if the string is a valid color expression.

 - `$.zui.Color.isColor(str)`

```js
var isColor = $.zui.Color.isColor('#2343x'); // '#2343x' is not a valid color value.
```

### Get all named color values

 - `$.zui.Color.names`

All named colors are:

<example id="namedColors">
</example>

<style>
#namedColors .color-tile {height: auto; width: 125px; padding: 0 5px; margin: 0; border: none;}
</style>

<script>
$(function() {
    var $colors = $('<div class="clearfix"/>');
    $.each($.zui.Color.names, function(name, hex) {
        var color = new $.zui.Color(hex);
        $colors.append($('<div class="color-tile"/>').css({
            background: hex,
            color: color.contrast().toCssStr()
        }).text(name));
    });
    $('#namedColors').append($colors);
});
</script>

## Methods

### `rgb()`

Return an object which stores RGB Color model, e.g. `{r: 255, g: 0, b: 255, a: 1}`.

### `rgb(rgbaColor)`

Use an object to redefine colors in RGB Color model, e.g. `{r: 255, g: 0, b: 255, a: 1}`, meaning `a` as transparency or omitted, and the default is `1`.

### `hue()`

Return the H component HSL color model.

### `hue(hue)`

Use HSL Color model to reset H Component.

### `darken(percent)`

Reduce color brightness by percentage.

`percent` is an intege, percentage, `0 ~ 100`.

### `lighten(percent)`

Increase color brightness by percentage.

`percent` is an integer, percentage, `0 ~ 100`.

### `clone()`

Clone a copy of the current instance.

### `fade(percent)`

Set the schedule transparency to the specified percentage.

(percent) is an integer, percentage, `0 ~ 100`.

### `toHsl()`

Return an object which stores HSL Color model, e.g. `{h: 350, s: 0.5, l: 0.9, a: 1}`.

### `luma()`

Return the brightness of the color.

### `saturate()`

Returns the saturation of the color.

### `contrast(dark, light, threshold)`

Return the contrast of the color. Compare the brightness of the current color to the specified threshold. Returns the specified dark color if it is bright. Return the specified bright color if it is dark.

Parameter:

 - `dark`: the specified color when a dark color is returned. The default is `'#000'`;
 - `light`: the specified color when a bright color is returned. The default is `'#fff'`;
 - `threshold`: the threshold used to judge whether the color is a bright color. The default is `0.43` with a range `0 ~ 1`.

### `hexStr()`

Return the current color as a hexadecimal string.

### `toCssStr()`

Return current color suitable CSS Value.

### Call instance method

```js
// Create a color instance
var myColor = new $.zui.Color('#095823');

// Call instance method
var myHsl = myColor.toHsl();
```

## ZUI Colorset

ZUI colorset provides JS Code to get colors defined in ZUI CSS (Refer to [**basis → Color matching**](#basic/colorset)).

<div class="alert alert-warning">
  <h4>Tip</h4>
  <p>ZUI colorset source code is powered by <a class="alert-link" href="https://github.com/easysoft/zui/blob/master/src/js/color.js" target="_blank">colorset.js</a>, which is not included in the standard version or the lite version. Introduce an independent component <a class="alert-link" href="https://github.com/easysoft/zui/blob/master/dist/lib/colorset.js/zui.colorset.js" target="_blank">lib/zui.colorset.js</a>.</p>
</div>

ZUI colorset plugin is an independent component. Introduce resources in lib/ from local or CDN:

```html
<script src="lib/colorset/zui.colorset.min.js"></script>
```

### Get all colorset

 - `$.zui.colorset`

`$.zui.colorset` stores all ZUI colorsets. The attribute is a color name and its value is a hexadecimal color string.

All ZUI defined colors are:

<example id="zuiColors">
</example>

<style>
#zuiColors .color-tile {height: auto; width: 125px; padding: 0 5px; margin: 0; border: none;}
</style>

<script src="../../dist/lib/colorset.js/zui.colorset.min.js"></script>
<script>
$(function() {
    var $colors = $('<div class="clearfix"/>');
    $.each($.zui.colorset, function(name, hex) {
        var color = new $.zui.Color(hex);
        $colors.append($('<div class="color-tile"/>').css({
            background: hex,
            color: color.contrast().toCssStr()
        }).text(name));
    });
    $('#zuiColors').append($colors);
});
</script>

### Get a colorset instance

 - `$.zui.colorset.get(name)`

Get the `$.zui.Color` instance according to the color name.

```js
var zuiPrimaryColor = $.zui.colorset.get('primary');
console.log('ZUI primary color is', zuiPrimaryColor.toCssStr());
```
