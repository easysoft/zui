section: javascript
id: popover
description: 弹出交互式面板
icon: icon-comment-line
filter: tanchumianban tcmb
---

# 弹出面板

<style>
.example-popover-static .popover
{
  position: relative;
  display: block;
  float: left;
  width: 260px;
  margin: 20px;
  z-index: 0;
}
</style>

## 静态类型

<div class="example example-popover-static clearfix">
  <div class="popover top">
    <div class="arrow"></div>
    <h3 class="popover-title">从上方弹出</h3>
    <div class="popover-content">
      <h4>江雪 <small>唐·柳宗元</small></h4>
      <p>千山鸟飞绝，万径人踪灭。</p>
      <p>孤舟蓑笠翁，独钓寒江雪。</p>
    </div>
  </div>
  <div class="popover right">
    <div class="arrow"></div>
    <h3 class="popover-title">从右侧弹出</h3>
    <div class="popover-content">
      <h4>江雪 <small>唐·柳宗元</small></h4>
      <p>千山鸟飞绝，万径人踪灭。</p>
      <p>孤舟蓑笠翁，独钓寒江雪。</p>
    </div>
  </div>
  <div class="popover bottom">
    <div class="arrow"></div>
    <h3 class="popover-title">从下方弹出</h3>
    <div class="popover-content">
      <h4>江雪 <small>唐·柳宗元</small></h4>
      <p>千山鸟飞绝，万径人踪灭。</p>
      <p>孤舟蓑笠翁，独钓寒江雪。</p>
    </div>
  </div>
  <div class="popover left">
    <div class="arrow"></div>
    <h3 class="popover-title">从左侧弹出</h3>
    <div class="popover-content">
      <h4>江雪 <small>唐·柳宗元</small></h4>
      <p>千山鸟飞绝，万径人踪灭。</p>
      <p>孤舟蓑笠翁，独钓寒江雪。</p>
    </div>
  </div>
  <div class="popover left">
    <h3 class="popover-title">不带箭头</h3>
    <div class="popover-content">
      <h4>江雪 <small>唐·柳宗元</small></h4>
      <p>千山鸟飞绝，万径人踪灭。</p>
      <p>孤舟蓑笠翁，独钓寒江雪。</p>
    </div>
  </div>
</div>

<template class="pre-scrollable linenums"/>

```html
<div class="popover top">
  <div class="arrow"></div>
  <h3 class="popover-title">从上方弹出</h3>
  <div class="popover-content">
    <h4>江雪 <small>唐·柳宗元</small></h4>
    <p>千山鸟飞绝，万径人踪灭。</p>
    <p>孤舟蓑笠翁，独钓寒江雪。</p>
  </div>
</div>
<div class="popover right">
  <div class="arrow"></div>
  <h3 class="popover-title">从右侧弹出</h3>
  <div class="popover-content">
    <h4>江雪 <small>唐·柳宗元</small></h4>
    <p>千山鸟飞绝，万径人踪灭。</p>
    <p>孤舟蓑笠翁，独钓寒江雪。</p>
  </div>
</div>
<div class="popover bottom">
  <div class="arrow"></div>
  <h3 class="popover-title">从下方弹出</h3>
  <div class="popover-content">
    <h4>江雪 <small>唐·柳宗元</small></h4>
    <p>千山鸟飞绝，万径人踪灭。</p>
    <p>孤舟蓑笠翁，独钓寒江雪。</p>
  </div>
</div>
<div class="popover left">
  <div class="arrow"></div>
  <h3 class="popover-title">从左侧弹出</h3>
  <div class="popover-content">
    <h4>江雪 <small>唐·柳宗元</small></h4>
    <p>千山鸟飞绝，万径人踪灭。</p>
    <p>孤舟蓑笠翁，独钓寒江雪。</p>
  </div>
</div>
<div class="popover left">
  <h3 class="popover-title">不带箭头</h3>
  <div class="popover-content">
    <h4>江雪 <small>唐·柳宗元</small></h4>
    <p>千山鸟飞绝，万径人踪灭。</p>
    <p>孤舟蓑笠翁，独钓寒江雪。</p>
  </div>
</div>
```

## 动态演示

<div class="example">
  <button class="btn btn-danger" data-toggle="popover" title="江雪" data-content="千山鸟飞绝，万径人踪灭。">显示/隐藏弹出面板</button>
</div>

```html
<button class="btn btn-danger" data-toggle="popover" title="江雪" data-content="千山鸟飞绝，万径人踪灭。">显示/隐藏弹出面板</button>
```

```js
// 你需要手动进行初始化
$('[data-toggle="popover"]').popover();
```

## 弹出方向

使用 `placement` 选项来指定相对于元素显示的位置。

<div class="example text-center">
  <button type="button" class="btn" data-toggle="popover" data-placement="left" data-content="千山鸟飞绝，万径人踪灭。" title="江雪">从左侧弹出</button>
  <button type="button" class="btn" data-toggle="popover" data-placement="top" data-content="千山鸟飞绝，万径人踪灭。" title="江雪">从上方弹出</button>
  <button type="button" class="btn" data-toggle="popover" data-placement="bottom" data-content="千山鸟飞绝，万径人踪灭。" title="江雪">从下方弹出</button>
  <button type="button" class="btn" data-toggle="popover" data-placement="right" data-content="千山鸟飞绝，万径人踪灭。" title="江雪">从右侧弹出</button>
</div>

```html
<button type="button" class="btn" data-toggle="popover" data-placement="left" data-content="千山鸟飞绝，万径人踪灭。" title="江雪">从左侧弹出</button>
```

```html
<button type="button" class="btn" data-toggle="popover" data-placement="top" data-content="千山鸟飞绝，万径人踪灭。" title="江雪">从上方弹出</button>
```

```html
<button type="button" class="btn" data-toggle="popover" data-placement="bottom" data-content="千山鸟飞绝，万径人踪灭。" title="江雪">从下方弹出</button>
```

```html
<button type="button" class="btn" data-toggle="popover" data-placement="right" data-content="千山鸟飞绝，万径人踪灭。" title="江雪">从右侧弹出</button>
```

```js
// 或者在初始化时指定弹出方向
$('[data-toggle="popover"]').popover({
    placement: 'bottom'
});
```

## 外观

使用 `tipClass` 指定外观类名来更改颜色主题。

<div class="example text-center">
  <button type="button" class="btn btn-primary" data-toggle="popover" data-tip-class="popover-primary" data-content="千山鸟飞绝，万径人踪灭。" title="江雪" data-placement="left">.popover-primary</button>
  <button type="button" class="btn btn-success" data-toggle="popover" data-tip-class="popover-success" data-content="千山鸟飞绝，万径人踪灭。" title="江雪" data-placement="top">.popover-success</button>
  <button type="button" class="btn btn-info" data-toggle="popover" data-tip-class="popover-info" data-content="千山鸟飞绝，万径人踪灭。" title="江雪" data-placement="bottom">.popover-info</button>
  <button type="button" class="btn btn-warning" data-toggle="popover" data-tip-class="popover-warning" data-content="千山鸟飞绝，万径人踪灭。" title="江雪" data-placement="top">.popover-warning</button>
  <button type="button" class="btn btn-danger" data-toggle="popover" data-tip-class="popover-danger" data-content="千山鸟飞绝，万径人踪灭。" title="江雪" data-placement="right">.popover-danger</button>
</div>

```html
<button type="button" class="btn btn-primary" data-toggle="popover" data-tip-class="popover-primary" data-content="千山鸟飞绝，万径人踪灭。" title="江雪" data-placement="left">.popover-primary</button>
```

```html
<button type="button" class="btn btn-success" data-toggle="popover" data-tip-class="popover-success" data-content="千山鸟飞绝，万径人踪灭。" title="江雪" data-placement="top">.popover-success</button>
```

```html
<button type="button" class="btn btn-info" data-toggle="popover" data-tip-class="popover-info" data-content="千山鸟飞绝，万径人踪灭。" title="江雪" data-placement="bottom">.popover-info</button>
```

```html
<button type="button" class="btn btn-warning" data-toggle="popover" data-tip-class="popover-warning" data-content="千山鸟飞绝，万径人踪灭。" title="江雪" data-placement="top">.popover-warning</button>
```

```html
<button type="button" class="btn btn-danger" data-toggle="popover" data-tip-class="popover-danger" data-content="千山鸟飞绝，万径人踪灭。" title="江雪" data-placement="right">.popover-danger</button>
```
```js
// 或者在初始化时指定外观选项
$('[data-toggle="popover"]').popover({
    tipClass: 'danger'
});
```

## 用法

### 初始化

出于性能方面的考虑，工具提示和弹框组件的data属性api是选择性加入的，也就是说 **你必须自己初始化他们**。

 - `$().popover()`
 - `$().popover(options)`

参数 `options` 用于设置初始化选项，是可以选的。初始化选项也可以通过元素上的 `[data-*]` 属性来设置。

### 选项

可用的初始化选项如下：

<table class="table table-bordered table-striped">
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
      <td>`true`、`false`</td>
      <td>`true`</td>
      <td>是否应用淡入淡出动画。</td>
    </tr>
    <tr>
      <td>`container`</td>
      <td>字符串或 `false`</td>
      <td>`false`</td>
      <td>可以设置为一个 CSS 选择器字符串用于指定动态创建的弹出面板元素被添加到的父级容器元素，例如 `container: 'body'`。默认为 `false`，此时动态创建的弹出面板元素被添加到触发元素所在的父级元素。</td>
    </tr>
    <tr>
      <td>`content`</td>
      <td>字符串或函数</td>
      <td>`''`</td>
      <td>用设定弹出面板显示的内容，如果指定为函数，则应该在函数内返回用于内容的字符串。</td>
    </tr>
    <tr>
      <td>`delay`</td>
      <td>数字或对象</td>
      <td>`0`</td>
      <td>如果指定为数字，则在指定数值的毫秒数后再显示。如果指定为对象，则可以分别为显示或隐藏之前延迟的数值，例如：`delay: { show: 500, hide: 100 }`。</td>
    </tr>
    <tr>
      <td>`html`</td>
      <td>`true`、`false`</td>
      <td>`false`</td>
      <td>是否允许弹出面板内容包含 HTML 格式源码。如果设置为 false，则仅仅使用 jQuery 的 text() 方法来设置弹出面板内容。</td>
    </tr>
    <tr>
      <td>`placement`</td>
      <td>字符串或函数</td>
      <td>`'right'`</td>
      <td>设置弹出面板显示的位置，可选值有：`'top'`, `'bottom'`, `'left'`, `'right'`, `'auto'`。如果设置为 `'auto'`，则会自动决定位置。也可以指定为一个函数，来动态返回应该显示的位置。</td>
    </tr>
    <tr>
      <td>`selector`</td>
      <td>字符串或 `false`</td>
      <td>`false`</td>
      <td>如果指定了该选项，则会在代理元素来触发显示弹出面板，这样可以对于一些动态内容使用弹出面板。</td>
    </tr>
    <tr>
      <td>`template`</td>
      <td>字符串</td>
      <td>`'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'`</td>
      <td>HTML 模板字符串用来创建弹出面板显示内容元素。要求顶级元素必须有 `.popover` 类，弹出面板的内容会设置为 `.popover-content` 的内容，标题会设置为 `.popover-title` 的内容，`.arrow` 将作为箭头元素。</td>
    </tr>
    <tr>
      <td>`title`</td>
      <td>字符串或函数</td>
      <td>`''`</td>
      <td>用设定弹出面板显示的标题，如果指定为函数，则应该在函数内返回用于标题的字符串。</td>
    </tr>
    <tr>
      <td>`trigger`</td>
      <td>`string`</td>
      <td>`'click'`</td>
      <td>指定哪些事件会触发显示弹出面板，多个事件用空格隔开，可选值包括：`'click'`、`'hover'`、`'focus'`、`'manual'`。如果设定为 `'manual'` 则需要用户通过 JavaScript 手动显示或隐藏弹出面板。</td>
    </tr>
    <tr>
      <td>`tipClass`</td>
      <td>字符串</td>
      <td>`''`</td>
      <td>为动态生成的 `.popover` 元素添加额外的 CSS 类。</td>
    </tr>
    <tr>
      <td>`tipId`</td>
      <td>字符串</td>
      <td>`''`</td>
      <td>为动态生成的 `.popover` 元素设置 ID 属性。</td>
    </tr>
  </tbody>
</table>

### 方法

#### <span class="code">$().popover('show')</span>

显示弹出框。

```js
$('#myPopover').popover('show');
```

#### <span class="code">$().popover('hide')</span>

隐藏弹出框。

```js
$('#myPopover').popover('hide');
```

#### <span class="code">$().popover('toggle')</span>

展示或隐藏弹出框。

```js
$('#myPopover').popover('toggle');
```

#### <span class="code">$().popover('destroy')</span>

隐藏并销毁弹出框。

```js
$('#myPopover').popover('destroy');
```

### 事件

当弹出面板显示或隐藏时会在触发元素上触发如下事件：

<table class="table table-bordered">
  <thead>
    <tr>
      <th style="width: 150px;">事件类型</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`show.zui.popover`</td>
      <td>当 `show`方法被调用之后，此事件将被立即触发。</td>
    </tr>
    <tr>
      <td>`shown.zui.popover`</td>
      <td>当弹出框展示到用户面前之后（同时CSS过渡效果执行完之后）此事件被触发。</td>
    </tr>
    <tr>
      <td>`hide.zui.popover`</td>
      <td>当 `hide`方法被调用之后，此事件被触发。</td>
    </tr>
    <tr>
      <td>`hidden.zui.popover`</td>
      <td>当弹出框被隐藏之后（同时 CSS 过渡效果执行完之后），此事件被触发。</td>
    </tr>
  </tbody>
</table>

### 使用要点

*   弹出框依赖 [工具提示插件](#javascript/tooltips) ，因此需要先加载工具提示插件。
*   弹出框在按钮组和输入框组中使用时，需要额外的设置：当提示框与 `.btn-group` 或 `.input-group` 联合使用时，你需要指定 `container: 'body'`选项（见下面的文档）以避免不需要的副作用（例如，当弹出框显示之后，与其合作的页面元素可能变得更宽或是去圆角）。
*   在禁止使用的页面元素上使用弹出框时需要额外增加一个元素将其包裹起来：为了给 `disabled` 或 `.disabled` 元素添加弹出框时，将需要增加弹出框的页面元素包裹在一个 `<div>` 中，然后对这个 `<div>` 元素应用弹出框。

<script>
function afterPageLoad() {
    setTimeout(function() {
        $('#pageContent [data-toggle="popover"]').popover();
    }, 1000);
}
</script>
