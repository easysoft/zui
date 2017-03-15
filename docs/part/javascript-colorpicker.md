# 颜色选择器

## 按钮选择器

为 `<input type="hidden">` 设置 `[data-provide="colorpicker"]` 属性将以按钮的形式设置颜色值。所设置的颜色值会同步更新到 `<input>` 中，通过获取 `<input>` 的 `value` 属性值将会得到所选的颜色值。

<example>
  <input type="hidden" class="form-control" id="myColor2" name="myColor2" data-provide="colorpicker" value="#3280fC" data-pull-menu-right="false" data-btn-tip="主题颜色">
</example>

```html
<!-- 按钮选择器 -->
<input type="hidden" class="form-control" id="myColor2" name="myColor2" data-provide="colorpicker" value="#3280fC" data-pull-menu-right="false" data-btn-tip="主题颜色">
```

## 使用输入组

将 `<input type="text">` 放置在 `div class="input-group">` 中，并为 `<input>` 设置 `data-wrapper="input-group-btn"` 属性即可，这样为用户提供一个输入十六进制颜色值的文本框。用户自定义的颜色值将会追加到颜色菜单末尾以供重复选择。

<example>
  <div class="row">
    <div class="col-sm-6">
      <div class="input-group">
        <input type="text" class="form-control" id="myColor3" name="myColor3" data-provide="colorpicker" data-wrapper="input-group-btn" data-pull-menu-right="true" value="#3280fC" placeholder="请输入16进制颜色值，例如 #FF00DD">
      </div>
    </div>
    <div class="col-sm-6">
      <div class="input-group">
        <span class="input-group-addon">主题颜色</span>
        <input type="text" class="form-control" id="myColor3" name="myColor3" data-provide="colorpicker" data-wrapper="input-group-btn" data-pull-menu-right="true" value="#3280fC" placeholder="请输入16进制颜色值，例如 #FF00DD">
      </div>
    </div>
  </div>
</example>

```html
<!-- 使用输入组并提供输入框输入十六进制颜色值 -->
<div class="input-group">
  <span class="input-group-addon">主题颜色</span>
  <input type="text" class="form-control" id="myColor3" name="myColor3" data-provide="colorpicker" data-wrapper="input-group-btn" data-pull-menu-right="true" value="#3280fC" placeholder="请输入16进制颜色值，例如 #FF00DD">
</div>
```

## 自定义预设颜色

使用 `colors` 选项来自定义预设的颜色。当使用 `[data-colors]` 时，将多个颜色值用逗号进行分隔。

<example>
  <input type="hidden" class="form-control" id="myColor4" name="myColor4" data-provide="colorpicker" value="#3280fC" data-colors="#fff,#000,#3280fC,red" data-pull-menu-right="false">
</example>

```html
<input type="hidden" class="form-control" id="myColor4" name="myColor4" data-provide="colorpicker" value="#3280fC" data-colors="#fff,#000,#3280fC,red">
```

```js
// 手动初始化时，也可以使用数组来定于预设颜色
$('.input-group #myColor').colorpicker({
    colors: ['#fff', '#000', '#3280fC', 'red']
});
```

## 自定义按钮图标

使用 `icon` 选项来自定义预设的颜色。可供使用的图标参见 [控件 - 图标](#control/icon) 章节。

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

## 同步更新

使用 `update-*` 选项来为页面上的其他元素更新颜色或文本。

<example>
  <input type="hidden" class="form-control" id="myColor8" name="myColor8" data-provide="colorpicker" value="#3280fC"  data-pull-menu-right="false" data-update-text="#myColor4Label" data-update-color="#myColor4Label">
  &nbsp; <span>你刚刚选择了颜色：<strong id="myColor4Label"></strong></span>
</example>

```html
<input type="hidden" class="form-control" id="myColor8" name="myColor8" data-provide="colorpicker" value="#3280fC"  data-pull-menu-right="false" data-update-text="#myColor4Label" data-update-color="#myColor4Label">
<div>你刚刚选择了颜色：<strong id="myColor4Label"></strong></div>
```

## 使用方法

### 初始化

使用 `[data-provide="colorpicker"]` 属性初始化，通过 `[data-*]` 来指定初始化选项。

```html
<input type="hidden" class="form-control" id="myColor2" name="myColor2" data-provide="colorpicker" value="#3280fC">
```

使用 JavaScript 代码手动初始化，允许在调用初始化函数的同时传入初始化选项。

```js
$('.input-group #myColor').colorpicker({
    wrapper: '.input-group-btn'
});
```

<script>
$(function() {
    $('#pageContent [data-provide="colorpicker"]').colorPicker();
});
</script>

### 选项

所有可用的初始化选项：

<table class="table table-bordered">
  <thead>
    <tr>
      <th style="width: 100px">选项</th>
      <th style="width: 120px">名称</th>
      <th style="width: 180px">可选值</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`colors`</td>
      <td>预设颜色列表</td>
      <td>用逗号分隔的十六进制颜色字符串，或者包含十六进制颜色的数组，默认值为 <code style="word-break:break-all; white-space: normal">['#00BCD4', '#388E3C', '#3280fc', '#3F51B5', '#9C27B0', '#795548', '#F57C00', '#F44336', '#E91E63']</code></td>
      <td></td>
    </tr>
    <tr>
      <td>`pullMenuRight`</td>
      <td>下拉菜单是以右侧对齐</td>
      <td>`true`（默认），`false`</td>
      <td></td>
    </tr>
    <tr>
      <td>`wrapper`</td>
      <td>下拉按钮父元素的 CSS CLASS</td>
      <td>默认为 `'btn-wrapper'`</td>
      <td>当使用输入组形式时，应该讲此选项设置为 `'input-group-btn'`</td>
    </tr>
    <tr>
      <td>`tileSize`</td>
      <td>颜色方块大小</td>
      <td>默认值 `30`，单位像素</td>
      <td>下拉菜单中的颜色选择方块都是正方形，这里会同时定义宽和高</td>
    </tr>
    <tr>
      <td>`lineCount`</td>
      <td>每行颜色方块的数目</td>
      <td>默认值 `5`</td>
      <td>预设颜色超过此数目则在新的一行显示</td>
    </tr>
    <tr>
      <td>`optional`</td>
      <td>是否允许空值</td>
      <td>`true`（默认），`false`</td>
      <td>如果设置为 `false`，则不会在下拉菜单中显示清除颜色的按钮，但不会阻止用户手动设置 `<input>` 值为空</td>
    </tr>
    <tr>
      <td>`icon`</td>
      <td>按钮上的图标</td>
      <td>默认值 `'caret-down'`</td>
      <td></td>
    </tr>
    <tr>
      <td>`btnTip`</td>
      <td>按钮提示文本</td>
      <td>默认值 `null`</td>
      <td>当鼠标悬停在按钮上时显示的提示消息内容</td>
    </tr>
    <tr>
      <td>`tooltip`</td>
      <td>是否显示提示消息</td>
      <td>`'top'`（默认）、`'bottom'`、`'left'`、`'right'`和`false`</td>
      <td>提示消息显示的位置，如果设置为 `false`，则不显示提示消息</td>
    </tr>
    <tr>
      <td>`errorTip`</td>
      <td>错误格式提示消息</td>
      <td>中文环境下默认值为：`'不是有效的颜色值'`</td>
      <td>当使用输入组形式时，如果文本框中值不是有效的十六进制颜色值时会提示此消息</td>
    </tr>
    <tr>
      <td>`updateColor`</td>
      <td>同步更新文本颜色</td>
      <td>有效的 CSS 选择器，默认不设置</td>
      <td>当颜色选择器的值被更改时，该值所指示的目标元素会同步更新文本颜色为当前值</td>
    </tr>
    <tr>
      <td>`updateBorder`</td>
      <td>同步更新边框颜色</td>
      <td>有效的 CSS 选择器，默认不设置</td>
      <td>当颜色选择器的值被更改时，该值所指示的目标元素会同步更新边框颜色为当前值</td>
    </tr>
    <tr>
      <td>`updateBackground`</td>
      <td>同步更新背景颜色</td>
      <td>有效的 CSS 选择器，默认不设置</td>
      <td>当颜色选择器的值被更改时，该值所指示的目标元素会同步更新背景颜色为当前值</td>
    </tr>
    <tr>
      <td>`updateText`</td>
      <td>同步更新文本内容</td>
      <td>有效的 CSS 选择器，默认不设置</td>
      <td>当颜色选择器的值被更改时，该值所指示的目标元素会同步更新文本内容为当前值</td>
    </tr>
    <tr>
      <td>`lang`</td>
      <td>语言选项</td>
      <td>`'zh-cn'`, `'zh-tw'`, `'en'`</td>
      <td>一般不需要手动设置，默认会根据 `<html>` 上的 `lang` 属性自动设置</td>
    </tr>
  </tbody>
</table>

### 监听值更改事件

为 `<input>` 绑定 `change` 事件即可。

```js
$('#myColor').on('change', function() {
    console.log('新设置的颜色值是 ', $(this).val());
});
```

### 方法

可用的方法：

<table class="table table-bordered">
  <thead>
    <tr>
      <th>方法</th>
      <th>参数</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`addColor(color)`</td>
      <td>`color`：十六进制颜色值</td>
      <td>在预设的颜色中增加一个新的颜色</td>
    </tr>
    <tr>
      <td>`updateColors(colors)`</td>
      <td>`colors`：十六进制颜色值数组</td>
      <td>重新设置所有预设的颜色</td>
    </tr>
    <tr>
      <td>`setValue(color)`</td>
      <td>`colors`：十六进制颜色值</td>
      <td>设置当前选中的颜色值，如果所设置的颜色不在预设颜色列表中，则将该颜色增加到预设颜色中</td>
    </tr>
  </tbody>
</table>

调用方法：

```js
// 获取 colorpicker 实例
var colorPicker = $('#myColor').data('zui.colorPicker');

// 设置预设颜色
colorPicker.updateColors(['#FFF', 'red', '#F8E800']);

// 增加一种预设的颜色
colorPicker.addColor('#808080');

// 设置当前颜色
colorPicker.setColor('#FFF');
```
