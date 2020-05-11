section: javascript
id: popover
description: interactive popover
icon: icon-comment-line
filter: tanchumianban tcmb
---

# Popover

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

## Static

<div class="example example-popover-static clearfix">
  <div class="popover top">
    <div class="arrow"></div>
    <h3 class="popover-title">Pop from above</h3>
    <div class="popover-content">
      <h4>Jiang Xue <small>Tang·Liu Zongyuan</small></h4>
      <p>Thousands of mountain birds flying，Million trail。</p>
      <p>Lone boat，Single fishing cold river snow。</p>
    </div>
  </div>
  <div class="popover right">
    <div class="arrow"></div>
    <h3 class="popover-title">Pop from the right</h3>
    <div class="popover-content">
      <h4>Jiang Xue <small>Tang·Liu Zongyuan</small></h4>
      <p>Thousands of mountain birds flying，Million trail。</p>
      <p>Lone boat，Single fishing cold river snow。</p>
    </div>
  </div>
  <div class="popover bottom">
    <div class="arrow"></div>
    <h3 class="popover-title">Pop from below</h3>
    <div class="popover-content">
      <h4>Jiang Xue <small>Tang·Liu Zongyuan</small></h4>
      <p>Thousands of mountain birds flying，Million trail。</p>
      <p>Lone boat，Single fishing cold river snow。</p>
    </div>
  </div>
  <div class="popover left">
    <div class="arrow"></div>
    <h3 class="popover-title">Pop from the left</h3>
    <div class="popover-content">
      <h4>Jiang Xue <small>Tang·Liu Zongyuan</small></h4>
      <p>Thousands of mountain birds flying，Million trail。</p>
      <p>Lone boat，Single fishing cold river snow。</p>
    </div>
  </div>
  <div class="popover left">
    <h3 class="popover-title">No arrow</h3>
    <div class="popover-content">
      <h4>Jiang Xue <small>Tang·Liu Zongyuan</small></h4>
      <p>Thousands of mountain birds flying，Million trail。</p>
      <p>Lone boat，Single fishing cold river snow。</p>
    </div>
  </div>
</div>

<template class="pre-scrollable linenums"/>

```html
<div class="popover top">
  <div class="arrow"></div>
  <h3 class="popover-title">Pop from above</h3>
  <div class="popover-content">
    <h4>Jiang Xue <small>Tang·Liu Zongyuan</small></h4>
    <p>Thousands of mountain birds flying，Million trail。</p>
    <p>Lone boat，Single fishing cold river snow。</p>
  </div>
</div>
<div class="popover right">
  <div class="arrow"></div>
  <h3 class="popover-title">Pop from the right</h3>
  <div class="popover-content">
    <h4>Jiang Xue <small>Tang·Liu Zongyuan</small></h4>
    <p>Thousands of mountain birds flying，Million trail。</p>
    <p>Lone boat，Single fishing cold river snow。</p>
  </div>
</div>
<div class="popover bottom">
  <div class="arrow"></div>
  <h3 class="popover-title">Pop from below</h3>
  <div class="popover-content">
    <h4>Jiang Xue <small>Tang·Liu Zongyuan</small></h4>
    <p>Thousands of mountain birds flying，Million trail。</p>
    <p>Lone boat，Single fishing cold river snow。</p>
  </div>
</div>
<div class="popover left">
  <div class="arrow"></div>
  <h3 class="popover-title">Pop from the left</h3>
  <div class="popover-content">
    <h4>Jiang Xue <small>Tang·Liu Zongyuan</small></h4>
    <p>Thousands of mountain birds flying，Million trail。</p>
    <p>Lone boat，Single fishing cold river snow。</p>
  </div>
</div>
<div class="popover left">
  <h3 class="popover-title">No arrow</h3>
  <div class="popover-content">
    <h4>Jiang Xue <small>Tang·Liu Zongyuan</small></h4>
    <p>Thousands of mountain birds flying，Million trail。</p>
    <p>Lone boat，Single fishing cold river snow。</p>
  </div>
</div>
```

## Dynamic

<div class="example">
  <button class="btn btn-danger" data-toggle="popover" title="Jiang Xue" data-content="Thousands of mountain birds flying，Million trail。">Show/Hide the popover</button>
</div>

```html
<button class="btn btn-danger" data-toggle="popover" title="Jiang Xue" data-content="Thousands of mountain birds flying，Million trail。">Show/Hide the popover</button>
```

```js
// You need to initialize it.
$('[data-toggle="popover"]').popover();
```

## Placement

`placement` is to specify the placement.

<div class="example text-center">
  <button type="button" class="btn" data-toggle="popover" data-placement="left" data-content="Thousands of mountain birds flying，Million trail。" title="Jiang Xue">Pop from the left</button>
  <button type="button" class="btn" data-toggle="popover" data-placement="top" data-content="Thousands of mountain birds flying，Million trail。" title="Jiang Xue">Pop from above</button>
  <button type="button" class="btn" data-toggle="popover" data-placement="bottom" data-content="Thousands of mountain birds flying，Million trail。" title="Jiang Xue">Pop from below</button>
  <button type="button" class="btn" data-toggle="popover" data-placement="right" data-content="Thousands of mountain birds flying，Million trail。" title="Jiang Xue">Pop from the right</button>
</div>

```html
<button type="button" class="btn" data-toggle="popover" data-placement="left" data-content="Thousands of mountain birds flying，Million trail。" title="Jiang Xue">Pop from the left</button>
```

```html
<button type="button" class="btn" data-toggle="popover" data-placement="top" data-content="Thousands of mountain birds flying，Million trail。" title="Jiang Xue">Pop from above</button>
```

```html
<button type="button" class="btn" data-toggle="popover" data-placement="bottom" data-content="Thousands of mountain birds flying，Million trail。" title="Jiang Xue">Pop from below</button>
```

```html
<button type="button" class="btn" data-toggle="popover" data-placement="right" data-content="Thousands of mountain birds flying，Million trail。" title="Jiang Xue">Pop from the right</button>
```

```js
// Or specify the placement at the initialization
$('[data-toggle="popover"]').popover({
    placement: 'bottom'
});
```

## Appearance

`tipClass` is to specify the class name to change the theme.

<div class="example text-center">
  <button type="button" class="btn btn-primary" data-toggle="popover" data-tip-class="popover-primary" data-content="Thousands of mountain birds flying，Million trail。" title="Jiang Xue" data-placement="left">.popover-primary</button>
  <button type="button" class="btn btn-success" data-toggle="popover" data-tip-class="popover-success" data-content="Thousands of mountain birds flying，Million trail。" title="Jiang Xue" data-placement="top">.popover-success</button>
  <button type="button" class="btn btn-info" data-toggle="popover" data-tip-class="popover-info" data-content="Thousands of mountain birds flying，Million trail。" title="Jiang Xue" data-placement="bottom">.popover-info</button>
  <button type="button" class="btn btn-warning" data-toggle="popover" data-tip-class="popover-warning" data-content="Thousands of mountain birds flying，Million trail。" title="Jiang Xue" data-placement="top">.popover-warning</button>
  <button type="button" class="btn btn-danger" data-toggle="popover" data-tip-class="popover-danger" data-content="Thousands of mountain birds flying，Million trail。" title="Jiang Xue" data-placement="right">.popover-danger</button>
</div>

```html
<button type="button" class="btn btn-primary" data-toggle="popover" data-tip-class="popover-primary" data-content="Thousands of mountain birds flying，Million trail。" title="Jiang Xue" data-placement="left">.popover-primary</button>
```

```html
<button type="button" class="btn btn-success" data-toggle="popover" data-tip-class="popover-success" data-content="Thousands of mountain birds flying，Million trail。" title="Jiang Xue" data-placement="top">.popover-success</button>
```

```html
<button type="button" class="btn btn-info" data-toggle="popover" data-tip-class="popover-info" data-content="Thousands of mountain birds flying，Million trail。" title="Jiang Xue" data-placement="bottom">.popover-info</button>
```

```html
<button type="button" class="btn btn-warning" data-toggle="popover" data-tip-class="popover-warning" data-content="Thousands of mountain birds flying，Million trail。" title="Jiang Xue" data-placement="top">.popover-warning</button>
```

```html
<button type="button" class="btn btn-danger" data-toggle="popover" data-tip-class="popover-danger" data-content="Thousands of mountain birds flying，Million trail。" title="Jiang Xue" data-placement="right">.popover-danger</button>
```
```js
// Or specify appearance options at initialization time
$('[data-toggle="popover"]').popover({
    tipClass: 'danger'
});
```

## How to use it

### Initialization

For performance, api of data attritbutes is optional, which means  **You have to initialize them yourself**.

 - `$().popover()`
 - `$().popover(options)`

`options` is used to set initialization options and it is optional. Initialization options can also be set in `[data-*]`.

### Options

The initialization options available are as follows：

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">Name</th>
      <th style="width: 100px;">Types</th>
      <th style="width: 50px;">Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`animation`</td>
      <td>`true`、`false`</td>
      <td>`true`</td>
      <td>Whether fade animation is applied.</td>
    </tr>
    <tr>
      <td>`container`</td>
      <td>String or `false`</td>
      <td>`false`</td>
      <td>CSS selector string can be set to specify the parent container element to which the dynamically created popover element is added, e.g. `container: 'body'`. The default is `false`,and the dynamically created popover element is added to the parent element which the trigger element belongs to.</td>
    </tr>
    <tr>
      <td>`content`</td>
      <td>String or function</td>
      <td>`''`</td>
      <td>Used to set the content of the popover. If specified as a function, return a string for the content within the function.</td>
    </tr>
    <tr>
      <td>`delay`</td>
      <td>Number or object</td>
      <td>`0`</td>
      <td>If specified as a number, display it after the number of milliseconds is set. If specified as an object, show or hide the previously delayed values separately, e.g. `delay: { show: 500, hide: 100 }`.</td>
    </tr>
    <tr>
      <td>`html`</td>
      <td>`true`、`false`</td>
      <td>`false`</td>
      <td>Whether HTML code is allowed in the popover. If set to false, use jQuery text() to set the popover content.</td>
    </tr>
    <tr>
      <td>`placement`</td>
      <td>String or function</td>
      <td>`'right'`</td>
      <td>Set the placement of the popover, and its optional values are `'top'`, `'bottom'`, `'left'`, `'right'`, and `'auto'`. If set as `'auto'`, the placement will be automatically calculated. A function can also be specified to dynamically return the position that should be displayed.</td>
    </tr>
    <tr>
      <td>`selector`</td>
      <td>String or `false`</td>
      <td>`false`</td>
      <td>If this option is specified, a proxy element is used to trigger the popover, which allows you to use a popover for dynamic content.</td>
    </tr>
    <tr>
      <td>`template`</td>
      <td>String</td>
      <td>`'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'`</td>
      <td>HTML template string is used to create a popover content element. Top level elements require `.popover` class. The content of the popover will be set as that of `.popover-content`. The title will be set as `.popover-title`, `.arrow` is an arrow element.</td>
    </tr>
    <tr>
      <td>`title`</td>
      <td>String or function</td>
      <td>`''`</td>
      <td>Used to set the title displayed in the popover. If specified as a function, return the string for the title within the function.</td>
    </tr>
    <tr>
      <td>`trigger`</td>
      <td>`string`</td>
      <td>`'click'`</td>
      <td>Specify events that trigger the popover. Separate multiple events by spaces. Optional values are `'click'`, `'hover'`, `'focus'`, and `'manual'`. If set as `'manual'`, use JavaScript to show or hide the popover.</td>
    </tr>
    <tr>
      <td>`tipClass`</td>
      <td>String</td>
      <td>`''`</td>
      <td>Add extra CSS class for dynamically generated `.popover`.</td>
    </tr>
    <tr>
      <td>`tipId`</td>
      <td>String</td>
      <td>`''`</td>
      <td>Set ID Attributes for dynamically generated `.popover`.</td>
    </tr>
  </tbody>
</table>

### Methods

#### <span class="code">$().popover('show')</span>

Show the popover.

```js
$('#myPopover').popover('show');
```

#### <span class="code">$().popover('hide')</span>

Hide the popover.

```js
$('#myPopover').popover('hide');
```

#### <span class="code">$().popover('toggle')</span>

Show or hide popovers.

```js
$('#myPopover').popover('toggle');
```

#### <span class="code">$().popover('destroy')</span>

Hide and destroy popovers.

```js
$('#myPopover').popover('destroy');
```

### Events

The following events are triggered when the popover is displayed or hidden.

<table class="table table-bordered">
  <thead>
    <tr>
      <th style="width: 150px;">Event Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`show.zui.popover`</td>
      <td>When `show` is called, this event will be triggered immediately.</td>
    </tr>
    <tr>
      <td>`shown.zui.popover`</td>
      <td>When the popover is displayed and CSS transition effect is executed, this event is triggered.</td>
    </tr>
    <tr>
      <td>`hide.zui.popover`</td>
      <td>When `hide` is called, this event is triggered.</td>
    </tr>
    <tr>
      <td>`hidden.zui.popover`</td>
      <td>When the popover is hidden and CSS transition effect is executed, this event is triggered.</td>
    </tr>
  </tbody>
</table>

### Tips

*   Popovers depend on [Tooltip plugin](#javascript/tooltips), so the tooltip plugin has to be loaded first.
*   Popovers used in button groups and input box groups require extra settings. When the popover is used with `.btn-group` and `.input-group`, `container: 'body'` option has to be specified(refer to the documentation below) to avoid unwanted side effects, e.g. when the popup is displayed, the page elements that work with it may become wider or rounded.
*   When using popovers on page elements that are forbidden, add an extra element to wrap them up. When adding a popover to `disabled` and `.disabled`, embed the page element of the added popover in `<div>`. Then apply a popover in this `<div>`.

<script>
function afterPageLoad() {
    $('#pageBody [data-toggle="popover"]').popover();
};
</script>
