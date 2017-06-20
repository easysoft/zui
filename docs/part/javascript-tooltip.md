section: javascript
id: tooltip
description: 为元素额外提供消息文本
icon: icon-chat
filter: tishixiaoxi tsxx
---

# 提示消息

提示消息又称“工具提示”，在用户鼠标悬停在元素上时及时显示额外的内容。

## 示例

下面示例中的每个链接都有提示消息，将鼠标移到链接上可以查看提示消息。

<example class="tooltip-demo">
  <p><a href="#" data-toggle="tooltip" title="英语：Cascading Style Sheets，简写CSS">层叠样式表</a>，又称串样式列表、级联样式表、串接样式表、层叠样式表、階層式樣式表，一种用来为<a href="#" data-toggle="tooltip" title="如HTML文档或XML应用">结构化文档</a>添加样式（字体、间距和颜色等）的计算机语言，由 W3C 定义和维护。目前最新版本是 CSS2.1，为 W3C 的推荐标准。CSS3现在已被大部分现代浏览器支持，而下一版的 CSS4 仍在开发过程中。（摘自<a href="https://zh.wikipedia.org/wiki/%E5%B1%82%E5%8F%A0%E6%A0%B7%E5%BC%8F%E8%A1%A8" data-toggle="tooltip" title="访问“层叠样式表”词条" target="_blank">维基百科</a>）</p>
</example>

```html
<a href="#" data-toggle="tooltip" title="英语：Cascading Style Sheets，简写CSS">层叠样式表</a>
```

```js
// 你需要手动初始化工具提示
$('[data-toggle="tooltip"]').tooltip();
```

为需要显示工具提示的元素添加 `[data-toggle="tooltip"]` 属性，并调用工具提示初始化方法即可。默认情况下元素的 `[title]` 属性值即为工具提示显示的内容。

<div class="alert alert-warning">
  <h4>提示</h4>
  <p>提示消息与按钮组和输入框组联合使用时需要一些特殊设置：在 .btn-group 或 .input-group 内的元素上使用提示消息时，你需要指定 container: 'body'选项以避免不需要的副作用（例如，当工具提示显示之后，与其合作的页面元素可能变得更宽或是去圆角）。</p>
</div>


## 弹出方向

使用 `placement` 选项来指定工具提示相对于元素显示的位置。

<div class="example tooltip-demo">
  <button type="button" class="btn" data-toggle="tooltip" data-placement="left" title="左侧提示内容">左侧提示</button>
  <button type="button" class="btn" data-toggle="tooltip" data-placement="top" title="上方提示内容">上方提示</button>
  <button type="button" class="btn" data-toggle="tooltip" data-placement="bottom" title="下方提示内容">下方提示</button>
  <button type="button" class="btn" data-toggle="tooltip" data-placement="right" title="右侧提示内容">右侧提示</button>
</div>

```html
<button type="button" class="btn" data-toggle="tooltip" data-placement="left" title="左侧提示内容">左侧提示</button>
```

```html
<button type="button" class="btn" data-toggle="tooltip" data-placement="top" title="上方提示内容">上方提示</button>
```

```html
<button type="button" class="btn" data-toggle="tooltip" data-placement="bottom" title="下方提示内容">下方提示</button>
```

```html
<button type="button" class="btn" data-toggle="tooltip" data-placement="right" title="右侧提示内容">右侧提示</button>
```

```js
// 或者在初始化时指定
$('[data-toggle="tooltip"]').tooltip({
    placement: 'bottom'
});
```

## 外观

使用 `tipClass` 指定外观类名来更改颜色主题。

<div class="example tooltip-demo">
  <a class="text-primary" data-toggle="tooltip" data-tip-class="tooltip-primary" title="tooltip-primary">.tooltip-primary</a> &nbsp; 
  <a class="text-success" data-toggle="tooltip" data-tip-class="tooltip-success" title="tooltip-success">.tooltip-success</a> &nbsp; 
  <a class="text-info" data-toggle="tooltip" data-tip-class="tooltip-info" title="tooltip-info">.tooltip-info</a> &nbsp; 
  <a class="text-warning" data-toggle="tooltip" data-tip-class="tooltip-warning" title="tooltip-warning">.tooltip-warning</a> &nbsp; 
  <a class="text-danger" data-toggle="tooltip" data-tip-class="tooltip-danger" title="tooltip-danger">.tooltip-danger</a> &nbsp; 
</div>

```html
<a data-toggle="tooltip" data-tip-class="tooltip-primary" title="tooltip-primary">.tooltip-primary</a>
```

```html
<a data-toggle="tooltip" data-tip-class="tooltip-success" title="tooltip-success">.tooltip-success</a>
```

```html
<a data-toggle="tooltip" data-tip-class="tooltip-info" title="tooltip-info">.tooltip-info</a>
```

```html
<a data-toggle="tooltip" data-tip-class="tooltip-warning" title="tooltip-warning">.tooltip-warning</a>
```

```html
<a data-toggle="tooltip" data-tip-class="tooltip-danger" title="" data-original-title="tooltip-danger">.tooltip-danger</a>
```

```js
// 或者在初始化时指定
$('[data-toggle="tooltip"]').tooltip({
    tipClass: 'tooltip-success'
});
```

## 选项

可以将选项通过 `[data-*]` 属性或 JavaScript 对象指定。

<table class="table table-bordered">
  <thead>
    <tr>
      <th style="width: 100px;">名称</th>
      <th style="width: 100px;">类型</th>
      <th style="width: 50px;">默认值</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`animation`</td>
      <td>布尔值</td>
      <td>`true`</td>
      <td>决定是否应用淡入淡出动画。</td>
    </tr>
    <tr>
      <td>`container`</td>
      <td>字符串 | `false`</td>
      <td>`false`</td>
      <td>
        <p>决定相对位置的父级容器，例如：`container: 'body'`</p>
      </td>
    </tr>
    <tr>
      <td>`delay`</td>
      <td>数字 | 对象</td>
      <td>`0`</td>
      <td>
        <p>如果指定为数字，则在指定数值的毫秒数后再显示。</p>
        <p>如果指定为对象，则可以分别为显示或隐藏之前延迟的数值，例如：`delay: { show: 500, hide: 100 }`</p>
      </td>
    </tr>
    <tr>
      <td>`html`</td>
      <td>布尔值</td>
      <td>`false`</td>
      <td>是否允许消息内容包含 HTML 格式源码。如果设置为 `false`，则仅仅使用 jQuery 的 `text()` 方法来设置消息内容。</td>
    </tr>
    <tr>
      <td>`placement`</td>
      <td>字符串 | 函数</td>
      <td>`'top'`</td>
      <td>指定消息显示的位置，可选值有：`'top'`, `'bottom'`, `'left'`, `'right'`, `'auto'`。如果设置为 `'auto'`，则会自动决定位置。也可以指定为一个函数，来动态返回应该显示的位置。</td>
    </tr>
    <tr>
      <td>`selector`</td>
      <td>字符串 | `false`</td>
      <td>`false`</td>
      <td>如果指定了该选项，则会在代理元素来触发显示工具提示，这样可以对于一些动态内容展示工具提示。</td>
    </tr>
    <tr>
      <td>`template`</td>
      <td>字符串</td>
      <td>`'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'`</td>
      <td>HTML 模板字符串用来创建工具提示显示内容元素。要求顶级元素必须有 `.tooltip` 类，工具提示的内容会设置为 `.tooltip-inner` 的内容，`.tooltip-arrow` 将作为箭头元素。</td>
    </tr>
    <tr>
      <td>`title`</td>
      <td>字符串 | 函数</td>
      <td>`''`</td>
      <td>设定提示消息内容，如果为函数，可以动态返回用于提示消息内容文本。</td>
    </tr>
    <tr>
      <td>`trigger`</td>
      <td>字符串</td>
      <td>`'hover focus'`</td>
      <td>指定哪些事件会触发显示提示消息，多个事件用空格隔开，可选值包括：`'click'`、`'hover'`、`'focus'`、`'manual'`。</td>
    </tr>
    <tr>
      <td>`tipId`</td>
      <td>字符串</td>
      <td>`''`</td>
      <td>当工具提示显示时为动态创建的 `.tooltip` 元素指定一个 ID 属性。</td>
    </tr>
    <tr>
      <td>`tipClass`</td>
      <td>字符串</td>
      <td>`''`</td>
      <td>当工具提示显示时为动态创建的 `.tooltip` 元素指定一个 CLASS 属性，多个 CLASS 使用空格分隔。</td>
    </tr>
  </tbody>
</table>

## 方法

### <span class="code">$().tooltip(options)</span>

为一组元素应用工具提示。

### <span class="code">.tooltip('show')</span>

展示工具提示。

```js
$('#element').tooltip('show');
```

### <span class="code">.tooltip('show', content)</span>

展示工具提示并指定要显示的文本内容。

```js
$('#element').tooltip('show', '这是新的工具提示内容');
```

### <span class="code">.tooltip('hide')</span>

隐藏工具提示。

```js
$('#element').tooltip('hide');
```

### <span class="code">.tooltip('toggle')</span>

展示或隐藏工具提示。

```js
$('#element').tooltip('toggle');
```

### <span class="code">.tooltip('destroy')</span>

隐藏并销毁工具提示。

```js
$('#element').tooltip('destroy');
```

## 事件

<table class="table table-bordered">
  <thead>
    <tr>
      <th style="width: 150px;">事件类型</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`show.zui.tooltip`</td>
      <td>当 <code>show</code> 方法被调用之后，此事件将被立即触发。</td>
    </tr>
    <tr>
      <td>`shown.zui.tooltip`</td>
      <td>当工具提示展示到用户面前之后（同时CSS过渡效果执行完之后）此事件被触发。</td>
    </tr>
    <tr>
      <td>`hide.zui.tooltip`</td>
      <td>当 <code>hide</code> 方法被调用之后，此事件被触发。</td>
    </tr>
    <tr>
      <td>`hidden.zui.tooltip`</td>
      <td>当工具提示被隐藏之后（同时CSS过渡效果执行完之后），此事件被触发。</td>
    </tr>
  </tbody>
</table>

使用 jQuery `on()` 方法来绑定事件。

```js
$('[data-toggle="tooltip"]').on('show.zui.tooltip', function() {
    // 处理工具提示显示时的事件
});
```

<script>
function afterPageLoad() {
    $('#pageBody [data-toggle="tooltip"]').tooltip();
};
</script>
