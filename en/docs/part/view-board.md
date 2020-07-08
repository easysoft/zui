section: view
id: board
description: Drag and drop content in multiple columns
icon: icon-columns
filter: kanban kb
---

# Board

A board manages multiple containers and sub items. It allow users to sort sub items by drag-and-drop and to drag an item from one container to another.

Insert a **shadow element** for the draggable, which will follow the mouse cursor and indicate the current placement of the draggable.

<div class="alert alert-danger">
  <h4>Not compatible with touch screens</h4>
  <p>Board cannot be dragged and dropped on the touch screens.</p>
</div>

## Comprehensive examples

### Introduce resources

Board is an independent component, so you need to introduce lib/ resources from local or CDN:

```html
<link href="lib/board/zui.board.min.css" rel="stylesheet">
<script src="lib/board/zui.board.min.js"></script>
```

### Examples

Use the mouse to drag and drop items.

<example class="margin-zero">
  <div class="boards" id="myBoard">
    <div class="board panel panel-primary">
      <div class="panel-heading">
        <strong>Unfinished</strong>
      </div>
      <div class="panel-body">
        <div class="board-list">
          <div class="board-item">test</div>
          <div class="board-item">release</div>
          <div class="board-item">celebrate</div>
          <div class="disable-drop board-item">not draggable</div>
        </div>
      </div>
    </div>
    <div class="board panel panel-warning">
      <div class="panel-heading">
        <strong>Ongoing</strong>
      </div>
      <div class="panel-body">
        <div class="board-list">
          <div class="board-item">design interface</div>
          <div class="board-item">write a document</div>
          <div class="board-item">urgent task</div>
        </div>
      </div>
    </div>
    <div class="board panel panel-success">
      <div class="panel-heading">
        <strong>Done</strong>
      </div>
      <div class="panel-body">
        <div class="board-list">
          <div class="board-item">initial design</div>
          <div class="board-item">database design</div>
          <div class="board-item">story writing</div>
        </div>
      </div>
    </div>
  </div>
</example>

<script src="../../dist/lib/board/zui.board.js"></script>
<link href="../../dist/lib/board/zui.board.css" rel="stylesheet">
<script>
function afterPageLoad() {
  if($.fn.boards) $('#pageContent .boards').boards({drop: function(e){
    $.zui.messager.show(e.element.text() + " Drag and drop to " + e.target.closest('.board').find('.panel-heading').text());
  }});
}
</script>

<style>
.board-item.drag-shadow {z-index: 9999}
</style>

```html
<!-- use .boards classes to manage multiple .board -->
<div class="boards" id="myBoards">
  <!-- .board is a container -->
  <div class="board panel">
    <div class="panel-heading">
      <strong>Unfinished</strong>
    </div>
    <div class="panel-body">
      <div class="board-list">
        <!-- use .board-item to specify the items that can be manipulated -->
        <div class="board-item">test</div>
        <div class="board-item">release</div>
        <div class="board-item">celebrate</div>
        <!-- Add to .disabled-dorp class for .board-item to stop this item from moving -->
        <div class="disable-drop board-item">not draggable</div>
      </div>
    </div>
  </div>
  <div class="board panel">
    <div class="panel-heading">
      <strong>Ongoing</strong>
    </div>
    <div class="panel-body">
      <div class="board-list">
        <div class="board-item">design interface</div>
        <div class="board-item">writing a document</div>
        <div class="board-item">urgent task</div>
      </div>
    </div>
  </div>
  <div class="board panel">
    <div class="panel-heading">
      <strong>Done</strong>
    </div>
    <div class="panel-body">
      <div class="board-list">
        <div class="board-item">initial design</div>
        <div class="board-item">database design</div>
        <div class="board-item">story writing</div>
      </div>
    </div>
  </div>
</div>
```

```css
/* Ensure that shadow elements are always visible */
.board-item.drag-shadow {z-index: 9999}
```

```js
$('#myBoards').boards({
    drop: function(e){
        $.zui.messager.show(e.element.text() + " Drag and drop to " + e.target.closest('.board').find('.panel-heading').text());
    }
});
```

## HTML structure

In order to make the interaction of a board work properly, CSS classes are used to identify specific elements. HTML structure of a board is as follows:

```html
<div class="boards">
  <div class="board">
    <div class="board-list">
      <div class="board-item">...</div>
      <div class="board-item">...</div>
      <div class="board-item">...</div>
      ...
    </div>
  </div>
  <div class="board">
    ...
  </div>
  ...
</div>
```

Special class descriptions:

 - `.boards`: Top container;
 - `.board`: Identify a container as a child element of `.boards` or its descendant element;
 - `.board-list`: A list container as a child element of `.board` or its descendant element;
 - `.board-item`: Item of a board list. It has to be a child element of `.board-list` ;
 - `.disable-drop`: Add `.disable-drop` for `.board-item` to disable this list entry being dragged and dropped;
 - `.board-item-shadow`: The shadow element of the item in a draggable board list is dynamically generated by the program as a child element for `.board-list`.

As long as the hierarchy of each special class is guaranteed, you can customize your board structure at free.

## Options

Allows an object parameter to be passed as an initialization option. The options available are as follows:

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
      <td>`lang`</td>
      <td>Interface language</td>
      <td>
        <ul>
          <li>`null`(default)</li>
          <li>`'zh-cn'`</li>
          <li>`'zh-tw'`</li>
          <li>`'en'`</li>
        </ul>
      </td>
      <td>Specify the language used on the interface. If set to `null`, the language will be set by `[lang]`of `<html>`.</td>
    </tr>
    <tr>
      <td>`langs`</td>
      <td>Set interface language text</td>
      <td>The default is: <pre><code>{
    'zh_cn': {
        append2end: 'Move to the end'
    },
    'zh_tw': {
        append2end: 'Move to the end'
    },
    'en': {
        append2end: 'Move to the end.'
    }
}</code></pre></td>
      <td>Use this option to customize the language.</td>
    </tr>
    <tr>
      <td>`before`</td>
      <td>Callback function before dragging</td>
      <td>Not set by default</td>
      <td>Specify a callback function to be called before the dragging occurs(when `mousedown` event is enabled). Return `false` in this callback function to cancel this dragging.</td>
    </tr>
    <tr>
      <td>`drop`</td>
      <td>Valid drag-and-drop callback function</td>
      <td>Not set by default</td>
      <td>Specify a callback function to be called before the target element is moved(when `mouseup` event is enabled) and when the target element has been dragged to a valid droppable element.</td>
    </tr>
    <tr>
      <td>`droppable`</td>
      <td>Set drag and drop plugin options</td>
      <td>Not set by default</td>
      <td>Specify an option to reset [**Plugin → Doppable**](#javascript/droppable) options.</td>
    </tr>
  </tbody>
</table>

Use options:

```js
// Defining option objects
var options = {
    drop: function(e) {
        console.log('Successfully dragged to the target: ', e);
    },
    // Set more options...
};

// Option parameters passed at the initialization
$('#myBoards').boards(options)
```

## Board interaction

Use `before` and `drop` callback functions to handle the interaction of boards.

### <span class="code">before(e)</span>

`before(e)` callback function is called before the dragging. It is used to handle the actions before dragging or to cancel subsequent dragging events. The callback function parameter `e` has the attributes below:

 - `e.event`: `mousedown` parameter object when the mouse is clicked;
 - `e.element`: The element being dragged.

Return `false` in this callback function to cancel this dragging, and the subsequent events will not happen.

```js
$('#dragBtn').draggable({
    before: function(e) {
        console.log('It is not a good timing to drag. Cancel this action.');

        // Returning false to cancel this dragging
        return false;
    }
})
```

### <span class="code">drop(e)</span>

`drop(e)` is called when the dragging is finished. The callback function parameter `e` has attributes defined as follows:

 - `e.event` : `mousemove` parameter object when the mouse moves;
 - `e.element`: The element being dragged;
 - `e.target`: If it has been dragged to a valid target element, the attribute is the element. Otherwise it is `null`;
 - `e.position`: The position of th element being dragged away from to the parent container( a specified `container`);
 - `e.offset`: The position of the dragged element away from the position at the start of the dragging;
 - `e.mouseOffset`: Current cursor position relative to current relative parent container（`container` Designation）s position；
 - `e.clickOffset`: The position away from the top left corner of the dragged element when the mouse is clicked;
 - `e.isIn`: Whether the position has been dragged to one of the droppable elements;
 - `e.isNew`: Whether the dragged element is dragged to a new droppable element away from the position before the drag;
 - `e.selfTarget`: Whether it is currently dragged to its location.

### <span class="code">droppable</span>

Board drag-and-drop uses [**Plugin →Droppable**](#javascript/droppable). You can use `droppable` options to reset the plugin options. See droppable plugin documentation for definitions and usage of options.

The following options of `droppable` should not be set, because these options are managed by boards. If overwritten, it might cause the interaction not working properly;

 - `start`
 - `drag`
 - `drop`
 - `finish`
 - `target`
