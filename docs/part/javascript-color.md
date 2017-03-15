section: javascript
id: colorset
description: 色彩工具类
icon: icon-tint
filter: secai sc
---

# Color

`$.zui.Color` 是一个颜色辅助类，可以方便的实现对颜色的转换和计算。

## 创建 Color 实例

可用的构造方法形式如下：

 - `new $.zui.Color()`
 - `new $.zui.Color(hexStr)`
 - `new $.zui.Color(r, g, b)`
 - `new $.zui.Color(r, g, b, a)`
 - `new $.zui.Color(rgbaColor)`
 - `new $.zui.Color(hslaColor)`
 - `new $.zui.Color(name)`

参数定义如下：

 - `hexStr`，16 进制颜色值字符串，需要包括 `'#'` 前缀；
 - `r`，RGB 颜色模型的 R 分量，取值范围 `0 ~ 255`；
 - `g`，RGB 颜色模型的 G 分量，取值范围 `0 ~ 255`；
 - `b`，RGB 颜色模型的 B 分量，取值范围 `0 ~ 255`；
 - `a`，颜色透明度，取值范围 `0 ~ 1`；
 - `rgbaColor`，一个对象来使用 RGB 颜色模型设定颜色，例如 `{r: 255, g: 0, b: 255, a: 1}`，其中 `a` 代表透明度，可以省略，默认为 `1`；
 - `hslaColor`，一个对象来使用 HSL 颜色模型设定颜色，例如 `{h: 350, s: 0.5, l: 0.9, a: 1}`，其中 `h` 取值范围为 `0 ~ 359`，`s` 和 `l` 取值范围为 `0 ~ 1`，其中 `a` 代表透明度，可以省略，默认为 `1`；
 - `name`，颜色英文名称，所有在 `$.zui.Color.names` 定义的命名颜色都支持，例如 `'red'`；

```js
var myColor = new $.zui.Color('#095823');
```

## 类方法和属性

### 判断字符串是否是有效的颜色表达式。

 - `$.zui.Color.isColor(str)`

```js
var isColor = $.zui.Color.isColor('#2343x'); // '#2343x' 不是有效的颜色值
```

### 获取所有命名颜色值

 - `$.zui.Color.names`

所有命名颜色有：

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

## 实例方法

### `rgb()`

返回一个存储 RGB 颜色模型的对象，例如 `{r: 255, g: 0, b: 255, a: 1}`。

### `rgb(rgbaColor)`

使用一个对象来使用 RGB 颜色模型重新设定颜色，例如 `{r: 255, g: 0, b: 255, a: 1}`，其中 `a` 代表透明度，可以省略，默认为 `1`.

### `hue()`

返回 HSL 颜色模型中的 H 分量。

### `hue(hue)`

以 HSL 颜色模型，重新设置 H 分量。

### `darken(percent)`

以百分比降低颜色亮度。

`percent` 参数为整数，表示百分比，取值范围 `0 ~ 100`。

### `lighten(percent)`

以百分比提高颜色亮度。

`percent` 参数为整数，表示百分比，取值范围 `0 ~ 100`。

### `clone()`

克隆一个当前实例的副本。

### `fade(percent)`

设定档期透明度为指定的百分比。

percent 参数为整数，表示百分比，取值范围 `0 ~ 100`。

### `toHsl()`

返回一个存储 HSL 颜色模型的对象，例如 `{h: 350, s: 0.5, l: 0.9, a: 1}`。

### `luma()`

返回颜色的亮度。

### `saturate()`

返回颜色的饱和度。

### `contrast(dark, light, threshold)`

返回颜色的对比色，将当前颜色的亮度与指定的阈值进行比较，如果判断为亮色则返回指定的暗色，如果判断为暗色则返回指定的亮色。

参数：

 - `dark` 指定当需要返回一个暗色时使用的颜色，默认为 `'#000'`；
 - `light`，指定当需要返回一个亮色时使用的颜色，默认为 `'#fff'`；
 - `threshold`，判断颜色是否为亮色的阈值，默认为 `0.43`，取值范围为 `0 ~ 1`。

### `hexStr()`

将当前颜色以十六进制字符串返回。

### `toCssStr()`

返回当前颜色适合 CSS 的值。

### 调用实例方法

```js
// 创建颜色实例
var myColor = new $.zui.Color('#095823');

// 调用实例方法
var myHsl = myColor.toHsl();
```

## ZUI 配色

ZUI 配色辅助工具允许你使用 JS 代码来获取 ZUI CSS 中定义的颜色（参见 [**基础 → 配色**](#basic/colorset)）。

<div class="alert alert-warning">
  <h4>提示</h4>
  <p>ZUI 配色源码由 <a class="alert-link" href="https://github.com/easysoft/zui/blob/master/src/js/color.js" target="_blank">colorset.js</a> 提供，不包含在标准版或简洁版中，你需要引用独立组件文件 <a class="alert-link" href="https://github.com/easysoft/zui/blob/master/dist/lib/colorset.js/zui.colorset.js" target="_blank">lib/zui.colorset.js</a>。</p>
</div>

### 获取所有配色

 - `$.zui.colorset`

`$.zui.colorset` 对象中存储了 ZUI 的所有配色，属性为配色名称，对应的属性值为十六进制颜色字符串。

ZUI 中所有已定义的配色有：

<example id="zuiColors">
</example>

<style>
#zuiColors .color-tile {height: auto; width: 125px; padding: 0 5px; margin: 0; border: none;}
</style>

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

### 获取配色实例

 - `$.zui.colorset.get(name)`

根据配色名称获取类型为 `$.zui.Color` 的实例。

```js
var zuiPrimaryColor = $.zui.colorset.get('primary');
console.log('ZUI primary color is', zuiPrimaryColor.toCssStr());
```
