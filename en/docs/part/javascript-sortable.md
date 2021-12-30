# Sortable

Sortable is used to drag child elements within the target container to sort the child elements.

<div class="alert alert-danger">
  <h4>Compatiblilty</h4>
  <p>Drag-and-drop sorting is not supported on the touch screen.</p>
</div>

**Shadow element** of the dragged element is inserted in the file when dragging. It Will follow the position of the cursor, indicating the current position.

## Examples

### Introduce assets

Sortable is an independent components, so you need to introduce assets in lib/ from local or CDN:

```html
<script src="lib/sortable/zui.sortable.min.js"></script>
```

### Example

In the following example, you can sort items in a list by drag-and-drop.

<example>
  <div class="list-group" id="sortableList">
    <div class="list-group-item"><i class="icon-move"></i> Cat</div>
    <div class="list-group-item"><i class="icon-move"></i> Chick</div>
    <div class="list-group-item"><i class="icon-move"></i> Dog</div>
    <div class="list-group-item"><i class="icon-move"></i> Goose</div>
    <div class="list-group-item"><i class="icon-move"></i> Pig</div>
  </div>
  <button type="button" class="btn btn-primary" id="addMonkeyToSortableList"><i class="icon icon-plus"></i> Add Monkey</button>
</example>

<style>
#sortableList > .list-group-item {cursor: move}
#sortableList > .list-group-item.dragging {
  visibility: visible;
  opacity: .3;
}
</style>

<script src="../../dist/lib/sortable/zui.sortable.js"></script>
<link href="../../dist/lib/sortable/zui.sortable.css" rel="stylesheet">
<script>
$(function() {
    var $list = $('#sortableList').sortable({
        // trigger: '.icon-move' // valid only by drag the icon
    });
    var monkeyId = 1;
    $('#addMonkeyToSortableList').on('click', function() {
        $list.append('<div class="list-group-item"><i class="icon-move"></i> monkey <strong>' + (monkeyId++) + '</strong></div>');
    });
});
</script>

```html
<div class="list-group" id="sortableList">
  <div class="list-group-item"><i class="icon-move"></i> Cat</div>
  <div class="list-group-item"><i class="icon-move"></i> Chick</div>
  <div class="list-group-item"><i class="icon-move"></i> Dog</div>
  <div class="list-group-item"><i class="icon-move"></i> Goose</div>
  <div class="list-group-item"><i class="icon-move"></i> Pig</div>
</div>
```

```css
/* Apply a movable cursor type to a draggable item. */
#sortableList > .list-group-item {cursor: move}

/* Apply a semi-transparent look to the item being dragged. */
#sortableList > .list-group-item.dragging {
  visibility: visible;
  opacity: .3;
}
```

```js
$('#sortableList').sortable();
```

## Options

Allow incoming objects or use `[data-*]` parameters as initialization options. The options available are as follows:

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Option</th>
      <th>Name</th>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`selector`</td>
      <td>Draggable element selector</td>
      <td>Default: `'div,li'`</td>
      <td>Use jQuery selector to specify which elements in the container can be sorted by dragging.</td>
    </tr>
    <tr>
      <td>`trigger`</td>
      <td>Drag trigger element selector</td>
      <td>Default: `''`</td>
      <td>A selector for the internal elements of the dragged element. If specified, the drag event will be triggred by clicking the specified child element.</td>
    </tr>
    <tr>
      <td>`container`</td>
      <td>For position calculation</td>
      <td>Default: `'body'`</td>
      <td>Use jQuery a selector to specify the parent container which is used to calculate the position. The node used for the parent container `position` should be `'relative'`, `'absolute'`or `'fixed'`. If set as `'static'`, it will be set to `'relative'` when being dragged. This option can also be specified as a callback function to perform to return the actual parent container before each drag and drop start.</td>
    </tr>
    <tr>
      <td>`reverse`</td>
      <td>Whether to reverse sorting</td>
      <td>Default: `false`</td>
      <td>If set as `true`, follow `order` to sort.</td>
    </tr>
    <tr>
      <td>`dragCssClass`</td>
      <td>Class for the element being dragged</td>
      <td>Default: `'invisible'`</td>
      <td>When an element is being dragged, the class set by this option will be added to the original element.</td>
    </tr>
    <tr>
      <td>`sortingClass`</td>
      <td>Class added when dragging(1.6+)</td>
      <td>Default: `'sortable-sorting'`</td>
      <td>A class added to the parent element when an element is dragged.</td>
    </tr>
    <tr>
      <td>`dropToClass`</td>
      <td>A class added to the dragged element while dragging</td>
      <td>Default: `'drop-to'`</td>
      <td></td>
    </tr>
    <tr>
      <td>`stopPropagation`</td>
      <td>Whether to prevent event propagation on elements</td>
      <td>Default: `false`</td>
      <td></td>
    </tr>
    <tr>
      <td>`mouseButton`</td>
      <td>Responsive mouse button</td>
      <td>Default: `'all'`</td>
      <td>
        <p>All responsive mouse buttons refer to <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/button" target="_blank"><code>MouseEvent.button</code></a>: </p>
        <ul>
          <li>`'all'` or `-1`: Respond to all mouse clicks;</li>
          <li>`'left'` or `0`: Respond to the left click;</li>
          <li>`'middle'` or `1`: Respond to the mouse wheel(Middle button);</li>
          <li>`'right'` or `2`: Respond to right click.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`start`</td>
      <td>Callback function before dragging</td>
      <td>Not set by default</td>
      <td>Specify a callback function to be used before dragging( when `mousedown` is enabled).</td>
    </tr>
    <tr>
      <td>`order`</td>
      <td>Callback function when order changes</td>
      <td>Not set by default</td>
      <td>Specify a callback function to be called when the order of child elements changes when the dragging an element.</td>
    </tr>
    <tr>
      <td>`finish`</td>
      <td>Callback function after dragging</td>
      <td>Not set by default</td>
      <td>Specify a callback function after the dragging is done(when `mouseup` is enabled).</td>
    </tr>
  </tbody>
</table>

How to use options

```js
// Define option objects
var options = {
    selector: '.sortable-item',
    finish: function(e) {
        console.log('Sort completed：', e);
    },
    // Set more options...
};

// Pass option parameters when initializing
$('#sortableList').sortable(options)
```

## Handle drag-and-drop sorting

Set `start`, `order`, and `finish` callback functions to handle the entire dragging process and to get the real-time position.

### <span class="code">start(e)</span>

`start(e)` callback function is called before dragging. It is used to handle actions before dragging.

### <span class="code">order(e)</span>

`order(e)` callback function is called when it is dragged and the order of child elements is changed. The callback function parameter `e` has attributes defined as follows:

 - `e.list`: Return all draggable elements in the current order;
 - `e.element`: The element currently being dragged.

### <span class="code">finish(e)</span>

`finish(e)`  is called when the dragging is done. The callback function parameter `e` has all attributes of `order`.

### <span class="code">$().sortable('destroy')</span>

If you do not need sortable, called `$().sortable('destroy')` to destroy it. After it is destroyed, you need to initiate it again, if you need it later.

```js
$('#dragDropEles').sortable('destroy');
```

### Get sorted element array

* <span class="code">$().data('zui.sortable').getItems()</span>
* <span class="code">$().data('zui.sortable').getItems(onlyElements)</span>

If set `onlyElements` as `true`, return jQuery element array only. If you do not set it or set it as `false`, an array of the following objects will be returned.

```js
{
    item,  // Sorted element
    order  // Current element order
}
```
