section: javascript
id: tooltip
description: Provide additional message text for the element
icon: icon-chat
filter: tishixiaoxi tsxx
---

# Tooltip

Tooltip is used to display additional content in time when the user hovers over the element.

## Example

Each link in the examples below has a tooltp. Hover the link to see the tooltip.

<example class="tooltip-demo">
  <p><a href="#" data-toggle="tooltip" title="Short as CSS">Cascading Style Sheet</a>  is a style sheet language used for describing the presentation of a document written in a <a href="#" data-toggle="tooltip" title="such as HTML or XML">markup language</a>. CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts. The CSS specifications are maintained by the World Wide Web Consortium (W3C).(Quoted from <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" data-toggle="tooltip" title="See “Cascadin gStyle Sheets" target="_blank">Wikipedia</a>)</p>
</example>

```html
<a href="#" data-toggle="tooltip" title="Short as CSS">Cascading Style Sheets</a>
```

```js
// You need to initialize the tooltip.
$('[data-toggle="tooltip"]').tooltip();
```

Add `[data-toggle="tooltip"]` for the tooltip, then call the initialization method of the tooltip. `[title]` is what the tooltip displays by default.

<div class="alert alert-warning">
  <h4>Tips</h4>
  <p>Tooltips require special settings if used in button groups and input box groups. If a tooltip is usesd in elements of .btn-group or .input-group, you have to specify container: 'body' to avoid unwanted side effects, e.g. the page elements that work with it may become wider or rounded after the tooltip is displayed.</p>
</div>


## Placement

Use `placement` to specify where the tooltip appears.

<div class="example tooltip-demo">
  <button type="button" class="btn" data-toggle="tooltip" data-placement="left" title="Display to the left">Left</button>
  <button type="button" class="btn" data-toggle="tooltip" data-placement="top" title="Display above it">Above</button>
  <button type="button" class="btn" data-toggle="tooltip" data-placement="bottom" title="Display below it">Below</button>
  <button type="button" class="btn" data-toggle="tooltip" data-placement="right" title="Display to the right">Right</button>
</div>

```html
<button type="button" class="btn" data-toggle="tooltip" data-placement="left" title="Display to the left">Left</button>
```

```html
<button type="button" class="btn" data-toggle="tooltip" data-placement="top" title="Display above it">Above</button>
```

```html
<button type="button" class="btn" data-toggle="tooltip" data-placement="bottom" title="Display below it">Below</button>
```

```html
<button type="button" class="btn" data-toggle="tooltip" data-placement="right" title="Display to the right">Right</button>
```

```js
// Or specify the placement at the initialization
$('[data-toggle="tooltip"]').tooltip({
    placement: 'bottom'
});
```

## Appearance

Use `tipClass` to specify the class name to change the theme.

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
// Or specify it at the initialization
$('[data-toggle="tooltip"]').tooltip({
    tipClass: 'tooltip-success'
});
```

## Options

Use the `[data-*]` attributes or JavaScript objects to specify an option.

<table class="table table-bordered">
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
      <td>Boolean value</td>
      <td>`true`</td>
      <td>Whether fade animation is applied.</td>
    </tr>
    <tr>
      <td>`container`</td>
      <td>String | `false`</td>
      <td>`false`</td>
      <td>
        <p>The parent container that determines the relative position, e.g. `container: 'body'`.</p>
      </td>
    </tr>
    <tr>
      <td>`delay`</td>
      <td>digital | Object</td>
      <td>`0`</td>
      <td>
        <p>If specified as a number, display it after the number of milliseconds is set.</p>
        <p>If specified as an object, set the previously delayed values for show and hide separately, e.g. `delay: { show: 500, hide: 100 }`.</p>
      </td>
    </tr>
    <tr>
      <td>`html`</td>
      <td>Boolean value</td>
      <td>`false`</td>
      <td>Whether HTML code is allowed in messages. If set to `false`, use jQuery `text()` to set the message content.</td>
    </tr>
    <tr>
      <td>`placement`</td>
      <td>String | function</td>
      <td>`'top'`</td>
      <td>Specify where the message is displayed, and its optional values are `'top'`, `'bottom'`, `'left'`, `'right'`, and `'auto'`. If set to `'auto'`, the placement will be automatically calculated. A function can also be specified to dynamically return the placement it should be.</td>
    </tr>
    <tr>
      <td>`selector`</td>
      <td>String | `false`</td>
      <td>`false`</td>
      <td>If this option is specified, a proxy element will be triggered to display it, which provides tooltips for some dynamic content.</td>
    </tr>
    <tr>
      <td>`template`</td>
      <td>String</td>
      <td>`'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'`</td>
      <td>HTML template string is used to create tooltips to display content elements. Top level elements require `.tooltip` class. The contents of the tooltip will be set to the content of `.tooltip-inner` and `.tooltip-arrow` will be used as an arrow element.</td>
    </tr>
    <tr>
      <td>`title`</td>
      <td>String | function</td>
      <td>`''`</td>
      <td>Used to set the content of the tooltip. If it is a function, dynamically return texts for the tooltip content.</td>
    </tr>
    <tr>
      <td>`trigger`</td>
      <td>String</td>
      <td>`'hover focus'`</td>
      <td>Specify events that trigger the tooltips. Separated events by spaces. Its optional values are `'click'`, `'hover'`, `'focus'`, and `'manual'`.</td>
    </tr>
    <tr>
      <td>`tipId`</td>
      <td>String</td>
      <td>`''`</td>
      <td>Specify one ID attribute for `.tooltip` which is created dynamically, when a tooltip is displayed.</td>
    </tr>
    <tr>
      <td>`tipClass`</td>
      <td>String</td>
      <td>`''`</td>
      <td>Specify one CLASS attribute for `.tooltip` which is created dynamically, when a tooltip is displayed. Separate multiple CLASS attributes by spaces.</td>
    </tr>
  </tbody>
</table>

## Methods

### <span class="code">$().tooltip(options)</span>

Apply tooltips to a set of elements.

### <span class="code">.tooltip('show')</span>

Display tooltips.

```js
$('#element').tooltip('show');
```

### <span class="code">.tooltip('show', content)</span>

Show tooltips and specify the text content to display.

```js
$('#element').tooltip('show', 'This is the new tooltip content.');
```

### <span class="code">.tooltip('hide')</span>

Hide tooltips.

```js
$('#element').tooltip('hide');
```

### <span class="code">.tooltip('toggle')</span>

Show or hide tooltips.

```js
$('#element').tooltip('toggle');
```

### <span class="code">.tooltip('destroy')</span>

Hide and destroy tooltips.

```js
$('#element').tooltip('destroy');
```

## Events

<table class="table table-bordered">
  <thead>
    <tr>
      <th style="width: 150px;">Event Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`show.zui.tooltip`</td>
      <td>When <code>show</code> is called, this event will be triggered immediately.</td>
    </tr>
    <tr>
      <td>`shown.zui.tooltip`</td>
      <td>When the tooltip is displayed and CSS transition effect is executed, this event is triggered.</td>
    </tr>
    <tr>
      <td>`hide.zui.tooltip`</td>
      <td>When <code>hide</code> is called, this event is triggered.</td>
    </tr>
    <tr>
      <td>`hidden.zui.tooltip`</td>
      <td>When the tooltip is hidden and CSS transition effect is executed, this event is triggered.</td>
    </tr>
  </tbody>
</table>

jQuery `on()` is to bind events.

```js
$('[data-toggle="tooltip"]').on('show.zui.tooltip', function() {
    // Handling events when the tooltip is displayed.
});
```

<script>
function afterPageLoad() {
    $('#pageBody [data-toggle="tooltip"]').tooltip();
};
</script>
