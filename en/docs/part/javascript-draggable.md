# Draggable

Draggable plugin can easily enable an element to change its position within a parent container by dragging.

<div class="alert alert-danger">
  <h4>Compatibility</h4>
  <p>Drag and drop is not supported on the touch screen.</p>
</div>

**The element being dragged needs to be set CSS `position` for `absolute`**. When the element is dragged, its position is calculated relative to the document `<body>`. You can also set `container` option to specify the reference element when calculating the position.

use `$().draggable()` To initialize the dragged element.

## Example

### Simple application

<style>
#draggableBox {
    height: 340px;
    background-color: #fafafa;
    position: relative;
}
#draggableBtn {
    position: absolute;
    top: 10px;
    left: 10px;
    transition: none;
}
#dragLog {
    margin: 0;
    border: none;
    background: none;
}
</style>

<example>
  <div id="draggableBox">
    <pre id="dragLog" class="pre-scrollable"></pre>
    <button id="draggableBtn" type="button" class="btn btn-primary"><i class="icon-move"></i> <span id="printPosition">Drag me</span></button>
  </div>
</example>

<script>
$(function() {
    var count = 0;
    var $dragLog = $('#dragLog');
    var $btnPosition = $('#printPosition');
    $('#draggableBtn').draggable({
        container: '#draggableBox',
        before: function() {
            $dragLog.prepend(count++ + ': ' + '[Start] drag...\n');
        },
        drag: function(e) {
            $dragLog.prepend(count++ + ': ' + 'drag: pos = ' + JSON.stringify(e.pos) + ', offset = ' + JSON.stringify(e.offset) + '\n');
            $btnPosition.text('(' + e.pos.left + ', ' + e.pos.top + ')');
        },
        finish: function(e) {
            $dragLog.prepend(count++ + ': ' + '[Finished]：pos = ' + JSON.stringify(e.pos) + ', offset = ' + JSON.stringify(e.offset) + '\n');
        }
    });
});
</script>

```html
<div id="draggableBox">
  <pre id="dragLog" class="pre-scrollable">Used to output demo log information</pre>
  <button id="draggableBtn" type="button" class="btn btn-primary"><i class="icon-move"></i> <span id="printPosition">Drag me</span></button>
</div>
```

```css
#draggableBox {
    height: 340px;
    background-color: #fafafa;
    position: relative;
}
#draggableBtn {
    position: absolute; /* The dragged element must be set position for absolute */
    top: 10px;
    left: 10px;
}
```

```js
var count = 0; // Used to mark the log output order
var $dragLog = $('#dragLog');
var $btnPosition = $('#printPosition');
$('#draggableBtn').draggable({
    container: '#draggableBox',
    before: function() {
        $dragLog.prepend(count++ + ': ' + '[Start] drag...\n');
    },
    drag: function(e) {
        $dragLog.prepend(count++ + ': ' + 'drag: pos = ' + JSON.stringify(e.pos) + ', offset = ' + JSON.stringify(e.offset) + '\n');
        $btnPosition.text('(' + e.pos.left + ', ' + e.pos.top + ')');
    },
    finish: function(e) {
        $dragLog.prepend(count++ + ': ' + '[Finished]：pos = ' + JSON.stringify(e.pos) + ', offset = ' + JSON.stringify(e.offset) + '\n');
    }
});
```

### Drag multiple elements inside the container

<style>
#draggableBox2 {
    height: 340px;
    background-color: #fafafa;
    position: relative;
}
#draggableBox2 .btn-draggable {
    position: absolute;
    transition: none;
    cursor: move;
}
#dragLog2 {
    margin: 0;
    border: none;
    background: none;
}
</style>

<example>
  <div id="draggableBox2">
    <pre id="dragLog2" class="pre-scrollable">Used to output demo log information</pre>
    <button type="button" class="btn btn-primary btn-draggable" style="top: 10px; left: 10px;"><i class="icon-move"></i> Button #<span class="btn-draggable-id">1</span></button>
    <button type="button" class="btn btn-danger btn-draggable" style="top: 60px; left: 10px;"><i class="icon-move"></i> Button #<span class="btn-draggable-id">2</span></button>
    <button type="button" class="btn btn-success btn-draggable" style="top: 110px; left: 110px;"><i class="icon-move"></i> Button #<span class="btn-draggable-id">3</span></button>
    <button type="button" class="btn btn-warning btn-draggable" style="top: 160px; left: 210px;"><i class="icon-move"></i> Button #<span class="btn-draggable-id">4</span></button>
  </div>
</example>

<script>
$(function() {
    var count = 0;
    var $dragLog = $('#dragLog2');
    $('#draggableBox2').draggable({
        container: '#draggableBox2',
        selector: '.btn-draggable',
        before: function(e) {
            $dragLog.prepend(count++ + ': ' + '[Start] drag【Button#' + e.element.find('.btn-draggable-id').text() + '】...\n');
        },
        drag: function(e) {
            $dragLog.prepend(count++ + ': ' + 'drag【Button#' + e.element.find('.btn-draggable-id').text() + '】: pos = ' + JSON.stringify(e.pos) + ', offset = ' + JSON.stringify(e.offset) + '\n');
        },
        finish: function(e) {
            $dragLog.prepend(count++ + ': ' + '[Finished]【Button#' + e.element.find('.btn-draggable-id').text() + '】：pos = ' + JSON.stringify(e.pos) + ', offset = ' + JSON.stringify(e.offset) + '\n');
        }
    });
});
</script>

```html
<div id="draggableBox2">
  <pre id="dragLog2" class="pre-scrollable">Used to output demo log information</pre>
  <button type="button" class="btn btn-primary btn-draggable" style="top: 10px; left: 10px;"><i class="icon-move"></i> Button #<span class="btn-draggable-id">1</span></button>
  <button type="button" class="btn btn-danger btn-draggable" style="top: 60px; left: 10px;"><i class="icon-move"></i> Button #<span class="btn-draggable-id">2</span></button>
  <button type="button" class="btn btn-success btn-draggable" style="top: 110px; left: 110px;"><i class="icon-move"></i> Button #<span class="btn-draggable-id">3</span></button>
  <button type="button" class="btn btn-warning btn-draggable" style="top: 160px; left: 210px;"><i class="icon-move"></i> Button #<span class="btn-draggable-id">4</span></button>
</div>
```

```css
#draggableBox2 {
    height: 340px;
    background-color: #fafafa;
    position: relative;
}
#draggableBox2 .btn-draggable {
    position: absolute;
    transition: none;
    cursor: move;
}
#dragLog2 {
    margin: 0;
    border: none;
    background: none;
}
```

```js
var count = 0;
var $dragLog = $('#dragLog2');
$('#draggableBox2').draggable({
    container: '#draggableBox2',
    selector: '.btn-draggable', // Draggable element selector
    before: function(e) {
        $dragLog.prepend(count++ + ': ' + '[Start] drag【Button#' + e.element.find('.btn-draggable-id').text() + '】...\n');
    },
    drag: function(e) {
        $dragLog.prepend(count++ + ': ' + 'drag【Button#' + e.element.find('.btn-draggable-id').text() + '】: pos = ' + JSON.stringify(e.pos) + ', offset = ' + JSON.stringify(e.offset) + '\n');
    },
    finish: function(e) {
        $dragLog.prepend(count++ + ': ' + '[Finished]【Button#' + e.element.find('.btn-draggable-id').text() + '】：pos = ' + JSON.stringify(e.pos) + ', offset = ' + JSON.stringify(e.offset) + '\n');
    }
});
```

## Options

Introduce an object parameter as an initializing option at the initialization. The options you can use are:

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
      <td>Use jQuery selector to specify the parent container used to calculate the position. The node used in the parent container `position` can be `'relative'`, `'absolute'`, or `'fixed'`.</td>
    </tr>
    <tr>
      <td>`move`</td>
      <td>Whether to move the dragged element</td>
      <td>`true`(default) and `false`</td>
      <td>If set as `false`, it does not change the position of the target element to drag it. The postion that it is dragged to can be get.</td>
    </tr>
    <tr>
      <td>`selector`</td>
      <td>Drag the element selector (1.6+)</td>
      <td>Default: `""`</td>
      <td>When this option is used, set `$()` element as a container. `selector` is used to specify which elements within the container can be dragged.</td>
    </tr>
    <tr>
      <td>`handle`</td>
      <td>Trigger element selector of a draggable</td>
      <td>Default: `null`</td>
      <td>Used as a selector for selected elements of the draggable. If specified, the draggable event will be triggered only by clicking the specified child element.</td>
    </tr>
    <tr>
      <td>`mouseButton`</td>
      <td>Responsive mouse button</td>
      <td>Default: `'all'`</td>
      <td>
        <p>All responsive mouse buttons refer to <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/button" target="_blank"><code>MouseEvent.button</code></a>:</p>
        <ul>
          <li>`'all'` or `-1`: Respond to all mouse buttons;</li>
          <li>`'left'` or `0`: Respond to the left mouse button;</li>
          <li>`'middle'` or `1`: Respond to the mouse wheel(middle button);</li>
          <li>`'right'` or `2`：Respond to right click.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`stopPropagation`</td>
      <td>Whether to prevent the event from propagation</td>
      <td>`true` and `false`(default)</td>
      <td>If set as `true` mouse-related events(`mousedown`, `mousemove`, `mouseup`) will call `event.stopPropagation()` to stop the event from propagation when dragging.</td>
    </tr>
    <tr>
      <td>`before`</td>
      <td>Callback function before dragging</td>
      <td>Not set by default</td>
      <td>Specify a callback function to be called before dragging(when `mousedown` enables). Return `false` in this callback function to cancel dragging.</td>
    </tr>
    <tr>
      <td>`drag`</td>
      <td>Callback function when dragging</td>
      <td>Not set by default</td>
      <td>Specify a callback function to be called when dragging the target element (when `mousedown` enables).</td>
    </tr>
    <tr>
      <td>`finish`</td>
      <td>Callback function after dragging</td>
      <td>Not set by default</td>
      <td>Specify a callback function to be called after the dragging is complete  (when `mousedown` enables).</td>
    </tr>
  </tbody>
</table>

Example:

```js
// Define an objects
var options = {
    container: 'body',
    before: function() {
        console.log('Drag start...');
    },
    // Set more options...
};

// Introduce option parameters at the initialization
$('#dragBtn').draggable(options)
```

## Handle the dragging

Set callback functions for `before`, `drag` and `finish` to process the entire dragging and get the real-time position.

### <span class="code">before(e)</span>

`before(e)` callback function is called before the dragging occurs. It is used to handle the action before dragging or to cancel the dragging events afterwards. The callback function parameter `e`  has attributes defined as follows:

 - `e.event`: `mousedown` parameter object when the mouse is clicked;
 - `e.element`: element being dragged.

Return `false` in this callback functio, so this dragging and the related events afterwards will be cancelled.

```js
$('#dragBtn').draggable({
    before: function(e) {
        console.log('It is not a good timing to drag. Cancel dragging.');

        // Return false to cancel dragging.
        return false;
    }
})
```

### <span class="code">drag(e)</span>

`drag(e)` callback function is called repeatedly when dragging. The callback function parameter `e` has attributes defined as follows:

 - `e.event`: `mousedown` parameter object when the mouse is clicked;
 - `e.element`: element being dragged;
 - `e.pos`：The position of the parent container(specified by `container`) that the element being dragged is related to;
 - `e.offset`：The position of the dragged element which is relative to the position at the beginning of the dragging;
 - `e.smallOffset`：The position of the dragged element which is relative to its previous position;
 - `e.startOffset`：The position of the dragged element which is relative to its parent container(specified by `container`) before dragging.

Because the callback function will be called repeatedly while dragging, there should not be too many actions in this callback function.

### <span class="code">finish(e)</span>

`finish(e)` callback function is called after the dragging. It is used to handle the action after the dragging is completed. The callback function parameter `e` has attributes defined:

 - `e.event`: `mousedown` parameter object when the mouse is moving;
 - `e.element`: element being dragged;
 - `e.pos`: The position of the dragged element which is relative to the position at the beginning of the dragging    ;
 - `e.offset`: The position of the dragged element which is relative to its previous position;
 - `e.smallOffset`: The position of the dragged element which is relative to its previous position;
 - `e.startOffset`: The position of the dragged element which is relative to its parent container(specified by `conta    iner`) before dragging.

### <span class="code">$().draggable('destroy')</span>

If dragging is not required, called `$().draggable('destroy')` to destroy the drag-and-drop plugin. You can initialize it again, if you need to enable it.

```js
$('#dragEles').draggable('destroy');
```
