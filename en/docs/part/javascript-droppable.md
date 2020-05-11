section: javascript
id: droppable
description: Drag and drop content to another container
icon: icon-external-link
filter: tuofang tf
---

# Droppable

Droppable plugin is used to determine whether an element is dragged and droppped to the target container.

Insert an **shadow element** in the document to follow the cursor when dragging an element, which is to indicate the current position.

Droppable plugin don't change the DOM structure of your elements. In other words, you need to use JavaScript to move related DOM node, if you need to move the draggable element into the target container.

<div class="alert alert-danger">
  <h4>Compatibility</h4>
  <p>Droppable is not supported on the touch screen.</p>
</div>

## Examples

### Simple application

<example>
  <div class="row" id="droppableContainer">
    <div class="col-sm-3">
      <div class="panel">
        <div class="panel-heading">let&#39;s start</div>
        <div class="panel-body" style="height: 120px; text-align: center; line-height: 80px">
          <button type="button" class="btn btn-danger btn-lg" id="droppableBtn"><i class="icon icon-move"></i> Drag me</button>
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="panel droppable-target" data-id="1">
        <div class="panel-heading">Drag me here.</div>
        <div class="panel-body" style="height: 120px">
          <div class="area-name">A</div>
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="panel droppable-target" data-id="2">
        <div class="panel-heading">Here.</div>
        <div class="panel-body" style="height: 120px">
          <div class="area-name">B</div>
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="panel droppable-target" data-id="3">
        <div class="panel-heading">Or here.</div>
        <div class="panel-body" style="height: 120px">
          <div class="area-name">C</div>
        </div>
      </div>
    </div>
  </div>
</example>

<style>
.btn.drag-shadow {
  z-index: 9999; /* Set the z-index of the shadow element, and ensure to display it at the top layer of the page. */
}
#droppableBtn {
  cursor: move; /* Change the cursor type for the button being dragged. */
}
#droppableContainer .area-name {
  font-size: 50px;
  line-height: 80px;
  text-align: center;
  color: #808080;
}
</style>

<template class="pre-scrollable"/>

```html
<div class="row" id="droppableContainer">
  <div class="col-sm-3">
    <div class="panel">
      <div class="panel-heading">let&#39;s start</div>
      <div class="panel-body" style="height: 120px; text-align: center; line-height: 80px">
        <button type="button" class="btn btn-danger btn-lg" id="droppableBtn"><i class="icon icon-move"></i> Drag me</button>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="panel droppable-target">
      <div class="panel-heading">Drag me here.</div>
      <div class="panel-body" style="height: 120px">
        <div class="area-name">A</div>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="panel droppable-target">
      <div class="panel-heading">Here.</div>
      <div class="panel-body" style="height: 120px">
        <div class="area-name">B</div>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="panel droppable-target">
      <div class="panel-heading">Or here.</div>
      <div class="panel-body" style="height: 120px">
        <div class="area-name">C</div>
      </div>
    </div>
  </div>
</div>
```

```css
/* Set the z-index of the shadow element, and ensure to display it at the top layer of the page.*/
.btn.drag-shadow { z-index: 9999; }

/* Change the cursor type for the button being dragged. */
#droppableBtn { cursor: move; }
```

```js
$('#droppableBtn').droppable({
    target: '.droppable-target',
    start: function() {
        $('#droppableContainer .droppable-target').removeClass('panel-warning').removeClass('panel-success').find('.panel-heading').text('Drag here?？');
    },
    drop: function(event) {
        var msg = 'Awesome！';
        $('#droppableContainer .droppable-target').removeClass('panel-success').removeClass('panel-warning');
        if(event.target) {
            event.target.addClass('panel-success').find('.panel-heading').text('Successfully dragged to the destination。');
            msg += 'Successfully dragged to the area ' + event.target.find('.area-name').text();
        }
        $.zui.messager.show(msg);
    },
    drag: function(event) {
        $('#droppableContainer .droppable-target').removeClass('panel-success').removeClass('panel-warning');
        if(event.target) event.target.addClass('panel-warning');
    }
});
```

### Drag and drop multiple elements inside a container

<example>
  <div class="row" id="multiDroppableContainer">
    <div class="col-sm-3">
      <div class="panel">
        <div class="panel-heading">let&#39;s start</div>
        <div class="panel-body" style="height: 150px; text-align: center; line-height: 40px">
          <button type="button" class="btn btn-primary btn-droppable"><i class="icon icon-move"></i> Button #<span class="btn-droppable-id">1</span></button><br>
          <button type="button" class="btn btn-success btn-droppable"><i class="icon icon-move"></i> Button #<span class="btn-droppable-id">2</span></button><br>
          <button type="button" class="btn btn-danger btn-droppable"><i class="icon icon-move"></i> Button #<span class="btn-droppable-id">3</span></button>
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="panel droppable-target" data-id="1">
        <div class="panel-heading">Drag me here.</div>
        <div class="panel-body" style="height: 150px">
          <div class="area-name">A</div>
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="panel droppable-target" data-id="2">
        <div class="panel-heading">Here.</div>
        <div class="panel-body" style="height: 150px">
          <div class="area-name">B</div>
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="panel droppable-target" data-id="3">
        <div class="panel-heading">Or here.</div>
        <div class="panel-body" style="height: 150px">
          <div class="area-name">C</div>
        </div>
      </div>
    </div>
  </div>
</example>

<style>
#multiDroppableContainer .btn-droppable {
  cursor: move; /* Change the cursor type for the button being dragged. */
}
#multiDroppableContainer .area-name {
  font-size: 50px;
  line-height: 80px;
  text-align: center;
  color: #808080;
}
</style>

```html
<div class="row" id="multiDroppableContainer">
  <div class="col-sm-3">
    <div class="panel">
      <div class="panel-heading">let&#39;s start</div>
      <div class="panel-body" style="height: 150px; text-align: center; line-height: 40px">
        <button type="button" class="btn btn-primary btn-droppable"><i class="icon icon-move"></i> Button #<span class="btn-droppable-id">1</span></button><br>
        <button type="button" class="btn btn-success btn-droppable"><i class="icon icon-move"></i> Button #<span class="btn-droppable-id">2</span></button><br>
        <button type="button" class="btn btn-danger btn-droppable"><i class="icon icon-move"></i> Button #<span class="btn-droppable-id">3</span></button>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="panel droppable-target" data-id="1">
      <div class="panel-heading">Drag me here.</div>
      <div class="panel-body" style="height: 150px">
        <div class="area-name">A</div>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="panel droppable-target" data-id="2">
      <div class="panel-heading">Here.</div>
      <div class="panel-body" style="height: 150px">
        <div class="area-name">B</div>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="panel droppable-target" data-id="3">
      <div class="panel-heading">Or here.</div>
      <div class="panel-body" style="height: 150px">
        <div class="area-name">C</div>
      </div>
    </div>
  </div>
</div>
```

```css
#multiDroppableContainer .btn-droppable {
  cursor: move; /* Change the cursor type for the button being dragged. */
}
#multiDroppableContainer .area-name {
  font-size: 50px;
  line-height: 80px;
  text-align: center;
  color: #808080;
}
```

```js
$('#multiDroppableContainer').droppable({
    selector: '.btn-droppable', // Define droppable elements.
    target: '.droppable-target',
    start: function() {
        $('#multiDroppableContainer .droppable-target').removeClass('panel-warning').removeClass('panel-success').find('.panel-heading').text('Drag here?？');
    },
    drop: function(event) {
        var msg = 'Awesome！';
        $('#multiDroppableContainer .droppable-target').removeClass('panel-success').removeClass('panel-warning');
        if(event.target) {
            var elementId = event.element.find('.btn-droppable-id').text();
            event.target.addClass('panel-success').find('.panel-heading').text('Success will【Button#' + elementId + '】Drag to destination。');
            msg += 'Successful drag【Button#' + elementId + '】To the area ' + event.target.find('.area-name').text();
        }
        $.zui.messager.show(msg);
    },
    drag: function(event) {
        $('#multiDroppableContainer .droppable-target').removeClass('panel-success').removeClass('panel-warning');
        if(event.target) event.target.addClass('panel-warning');
    }
});
```

## Options

Introduce an object parameter as an initializating option at the initializzation. Options available are as follows:

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
      <td>`container`</td>
      <td>For position calculation</td>
      <td>Default: `'body'`</td>
      <td>Use jQuery a selector to specify the parent container which is used to calculate the position. The node used for the parent container `position` should be `'relative'`, `'absolute'`or `'fixed'`. If set as `'static'`, it will be set to `'relative'` when being dragged.</td>
    </tr>
    <tr>
      <td>`selector`</td>
      <td>Drag the element selector (1.6+)</td>
      <td>Default: `""`(Optional)</td>
      <td>When this option is set, use `$()` selected element as a container. `selector` is used to specify which elements within the container can be dragged.</td>
    </tr>
    <tr>
      <td>`handle`</td>
      <td>Trigger element selector</td>
      <td>Default: `null`</td>
      <td>Used as a selector for the internal elements of the dragged element. If specified, the drag event will be triggered only by clicking the specified child element.</td>
    </tr>
    <tr>
      <td>`target`</td>
      <td>Define target elements</td>
      <td>Required. Default: `'.droppable-target'`</td>
      <td>Its value type is a jQuery Instance or effective jQuery selector string. It can also be set as a callback function to return a target element.</td>
    </tr>
    <tr>
      <td>`mouseButton`</td>
      <td>Responsive mouse button</td>
      <td>Default: `'all'`</td>
      <td>
        <p>All responsive mouse buttons refer to <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/button" target="_blank"><code>MouseEvent.button</code></a>:</p>
        <ul>
          <li>`'all'` or `-1`: Respond to all mouse buttons;</li>
          <li>`'left'` or `0`: Respond to the left click;</li>
          <li>`'middle'` or `1`: Respond to the mouse wheel(Middle button);</li>
          <li>`'right'` or `2`: Respond to right click.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`flex`</td>
      <td>`true` and `false`(default)</td>
      <td>Judge whether it is flex</td>
      <td>If set as `true`, take the draggable as above the target element before leaving, when it leaves one of the target elements but does not enter the next target element.</td>
    </tr>
    <tr>
      <td>`deviation`</td>
      <td>Minimum moving distance</td>
      <td>Default: `5`</td>
      <td>If the distance dragged is less than this value either horizontally or vertically, it will be ignored to improve the performance.</td>
    </tr>
    <tr>
      <td>`sensorOffsetX`</td>
      <td>Determine horizontal distance</td>
      <td>Default: `0`</td>
      <td>If this value is set, the placement is still valid even when the cursor does not enter the next target element and is less than this value horizontally. Increasing this value can increase the sensitivity.</td>
    </tr>
    <tr>
      <td>`sensorOffsetY`</td>
      <td>Determine vertical distance</td>
      <td>Default: `0`</td>
      <td>If this value is set，the placement is still valid even when the cursor does not enter the next target element and is less than this value vertically. Increasing this value can increase the sensitivity.</td>
    </tr>
    <tr>
      <td>`before`</td>
      <td>Callback function before dragging</td>
      <td>Not set by default</td>
      <td>Specify a callback function before dragging(when `mousedown` enables). Return `false` in this callback function to cancel dragging.</td>
    </tr>
    <tr>
      <td>`start`</td>
      <td>Callback function at the beginning of the dragging</td>
      <td>Not set by default</td>
      <td>Specify a callback function before dragging(the first time `mousemove` is enables) and dragging is started.</td>
    </tr>
    <tr>
      <td>`drag`</td>
      <td>Callback function when dragging</td>
      <td>Not set by default</td>
      <td>Specify a callback function when moving the target element(when `mousemove` enables).</td>
    </tr>
    <tr>
      <td>`beforeDrop`</td>
      <td>Determine valid the callback function placed </td>
      <td>Not set by default</td>
      <td>Return `true` or `false` within function to determine if it is a valid placement.</td>
    </tr>
    <tr>
      <td>`drop`</td>
      <td>Valid dropped callback function</td>
      <td>Not set by default</td>
      <td>Specify a callback function when completing moving the target element( when `mouseup` enables) and the target element has been dragged onto a valid droppable element.</td>
    </tr>
    <tr>
      <td>`finish`</td>
      <td>Callback function after dragging</td>
      <td>Not set by default</td>
      <td>Specify a callback function after the dragging is complete(when `mouseup` and `mousemove` are both enabled).</td>
    </tr>
    <tr>
      <td>`always`</td>
      <td>Callback function at the end of the action</td>
      <td>Not set by default</td>
      <td>Specify a callback function after the action is complete (when `mouseup` is enabled but `mousemove` is not).</td>
    </tr>
  </tbody>
</table>

Example:

```js
// Define objects
var options = {
    target: '.droppable-target',
    drop: function(e) {
        console.log('Successfully dragged to the target:', e);
    },
    // Set more options...
};

// Pass option parameters at the initialization
$('#droppableBtn').droppable(options)
```

## Process the drag-and-drop

Multiple callback functions can be defined by the option to process the drag-and-drop. Callback functions below are called in one rag-and-drop:

1. `before`: return `false` in this callback function `false` to cancel dragging;
2. `start`
3. `drag`: repeatedly executed during dragging;
4. `beforeDrop`: return `false` in this callback to cancel `drop`;
5. `drop`
6. `finish`
7. `always`

When the mouse is clicked but not dragged, only `before` and `always` callback functions are called.

### <span class="code">before(e)</span>

`before(e)` callback function is called before dragging. It is used to handle the action before dragging or to cancel subsequent events. The callback function parameter `e` has attributes defined as follows:

 - `e.event`：When the mouse is pressed `mousedown` Event parameter object；
 - `e.element`：Dragged element。

Return `false` in this callback function to cancel dragging, and its related events afterwards will not happen.

```js
$('#dragBtn').draggable({
    before: function(e) {
        console.log('It is not a good timing to drag. Cancel dragging.');

        // Return false to cancel this action.
        return false;
    }
})
```

### <span class="code">start(e)</span>

`start(e)` callback function before dragging (the first time when mousemove is enabled) and dragging is already started. The callback function parameter `e` has the same attributes as `before`.

### <span class="code">drag(e)</span>

`drag(e)` callback function when moving a target(every time when mousemove is enabled). Its parameter `e` has attributes defined as follows:

 - `e.event`: `mousemove` event parameter object when the mousing is moving;
 - `e.element`: the element dragged;
 - `e.target`: If it has been dragged to a placeable target element, its attribute is the placeable element. Otherwise, it is `null`;
 - `e.position`: The position that the element being dragged is currently relative to the parent container(`container` Designation);
 - `e.offset`：The position that the dragged element is currently relative to the position at the start of the dragging;
 - `e.mouseOffset`：The position that the cursor is relative to its parent container(`container`);
 - `e.clickOffset`：The position that is relative to the top left corner of the dragged element when the mouse is clicked;
 - `e.isIn`：Indicates whether the position dragged to is one of the droppable elements；
 - `e.isNew`：Indicates whether the element is dragged to a new droppable element;
 - `e.selfTarget`: Indicate whether it is dragged to its position.

Only an unique `[data-id]` is set in all placeable elements are set, `isNew` will work.

### <span class="code">beforeDrop(e)</span>

`beforeDrop(e)`  is called when the dragging is completed. It is used to indicate whether it is dragged to a valid droppable element. The callback function parameter `e` has all attributes of `drag`.

Return true or false within the function to determine whether it is a valid.

### <span class="code">drop(e)</span>

`drop(e)` is called when the dragging is complete. The callback function parameter `e` has all attributes of `drag`.

### <span class="code">finish(e)</span>

`finish(e)` is called when the drag is complete and the shadow element has been removed. The callback function parameter `e` has all attributes of `drag`.

### <span class="code">always(e)</span>

`always(e)` is called when the cursor is clicked, no matter whether it is dragged. When dragging, the callback function parameter `e` has the same attribute as `before`. If no dragging, the callback function has atttibutes defined as follows:

 - `e.event`: `mousedown` event parameter object when clicking the mouse;
 - `e.cancel`: If `true`, no dragging or dragging is cancelled in `before`.

### <span class="code">$().droppable('destroy')</span>

If no drag-and-drop is required, called `$().droppable('destroy')` to destroy it. After it is destroyed, initiate it again, if you need it.

```js
$('#dragDropEles').droppable('destroy');
```

<script>
function afterPageLoad() {
    if(!$.fn.droppable) return;
    $('#droppableBtn').droppable({
        target: '.droppable-target',
        start: function() {
            $('#droppableContainer .droppable-target').removeClass('panel-warning').removeClass('panel-success').find('.panel-heading').text('Drag here?？');
        },
        drop: function(event) {
            var msg = 'Awesome！';
            $('#droppableContainer .droppable-target').removeClass('panel-success').removeClass('panel-warning');
            if(event.target) {
                event.target.addClass('panel-success').find('.panel-heading').text('Successfully dragged to the destination。');
                msg += 'Successfully dragged to the area ' + event.target.find('.area-name').text();
            }
            $.zui.messager.show(msg);
        },
        drag: function(event) {
            $('#droppableContainer .droppable-target').removeClass('panel-success').removeClass('panel-warning');
            if(event.target) event.target.addClass('panel-warning');
        }
    });

    $('#multiDroppableContainer').droppable({
        selector: '.btn-droppable', // Define elements that allow drag-and-drop
        target: '.droppable-target',
        start: function() {
            $('#multiDroppableContainer .droppable-target').removeClass('panel-warning').removeClass('panel-success').find('.panel-heading').text('Drag here?？');
        },
        drop: function(event) {
            var msg = 'Awesome！';
            $('#multiDroppableContainer .droppable-target').removeClass('panel-success').removeClass('panel-warning');
            if(event.target) {
                var elementId = event.element.find('.btn-droppable-id').text();
                event.target.addClass('panel-success').find('.panel-heading').text('Success will【Button#' + elementId + '】Drag here。');
                msg += 'Successful drag【Button#' + elementId + '】To the area ' + event.target.find('.area-name').text();
            }
            $.zui.messager.show(msg);
        },
        drag: function(event) {
            $('#multiDroppableContainer .droppable-target').removeClass('panel-success').removeClass('panel-warning');
            if(event.target) event.target.addClass('panel-warning');
        }
    });
}
</script>
