# Context Menu

The context menu plugin enables a pop-out menu panel where the mouse is hovering. Preset list options are provided for users to select.

<div class="alert alert-warning">
  <h4>Compatibility</h4>
  <p>Context menus require a right-click to trigger, so they cannot be enabled on touchscreens or mobile devices.</p>
</div>

The context menu can be enabled in both passive and active ways.

## Passive

`$().contextmenu(options)` is used to initialize a context menu. It automatically listens `contextmenu` mouse event (use `trigger` to change listened event) of the selected action，and pop out a context menu when the event is triggered.

<div class="example hl-primary" id="contextMenuExample1">
Right click this area to display the context menu.
  <div class="text-info"></div>
</div>

```html
<div class="hl-primary" id="contextMenuExample1">
Right click this area to display the context menu.
  <div class="text-info"></div>
</div>
```

```js
$('#contextMenuExample1').contextmenu({
    items: [{
        label: 'New Project',
        onClick: function() {
            alert('You clicked on the new project');
        }
    }, {
      type: 'divider'
    }, {
        label: 'Copy',
    }, {
        label: 'Cut',
    }, {
        label: 'Paste',
    }],
    onClickItem: function(item, e) {
        $('#contextMenuExample1 .text-info').text('You just clicked "' + item.label + '"');
    }
});
```

## Active

`$.zui.ContextMenu.show(items, options, callback)` is used to display a context menu. It is to pop out a context menu at the right time, e.g. clicking a button.

`$.zui.ContextMenu.show` parameters are defined as follows：

* `items`：menu item group；
* `options`：menu customized options；
* `callback`：finished callback functions displayed on the menu.

<div class="example">
  <button id="contextMenuExample2" type="button" class="btn btn-primary">Click the button to pop up the context menu</button>
</div>

```html
<button id="contextMenuExample2" type="button" class="btn btn-primary">Click the button to pop up the context menu</button>
```

```js
$('#contextMenuExample2').on('click', function(e) {
    $.zui.ContextMenu.show([{
        label: 'New Project',
        onClick: function() {
            alert('You clicked on the new project');
        }
    }, {
        type: 'divider'
    }, {
        label: 'Copy',
    }, {
        label: 'Cut',
    }, {
        label: 'Paste',
    }], {
        event: e
    }, function() {
        console.log('The context menu is displayed.');
    });
});
```

## Options

Most of the options apply to both active and passive ways. Options that are only available in one way will be noted.

<table class="table table-bordered">
  <thead>
    <tr>
      <th style="width: 140px">Option</th>
      <th style="width: 150px">Name</th>
      <th style="width: 150px">Available Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>items</code></td>
      <td>menu item group</td>
      <td>E.g: `[{label: 'copy'}]`, or use a callback function `function(options)`</td>
      <td>Refer to the followings for how to use menu items. When using a callback function, you can use the function to dynamically return a menu item to create a menu and destroy all options created for the menu by `options`.</td>
    </tr>
    <tr>
      <td><code>x</code>(Active only)</td>
      <td>Horizontal position when the menu pops out (Distance from the left of the window)</td>
      <td>E.g. `100`</td>
      <td>If it is obtained from the mouse even, usually `event.clientX`.</td>
    </tr>
    <tr>
      <td><code>y</code>(Active only)</td>
      <td>Vertical position when the menu pops up(Distance from the top of the window)</td>
      <td>E.g. `50`</td>
      <td>If it is obtained from the page mouse event, usually `event.clientY`.</td>
    </tr>
    <tr>
      <td><code>event</code>(Active only)</td>
      <td>Mouse event object when the menu pops up</td>
      <td>E.g., the callback function `event` returned when the button is clicked </td>
      <td>If an object is specified，`x` with `y` do not have to be specified and they will be automatically calculated.</td>
    </tr>
    <tr>
      <td><code>trigger</code>(Passive only)</td>
      <td>Display the trigger event of the menu</td>
      <td>The default is `'contextmenu'`</td>
      <td> `'mousedown'` and 'click'` events</td>
    </tr>
    <tr>
      <td><code>selector</code>(Passive only)</td>
      <td>Trigger event selector</td>
      <td>The default is `''`</td>
      <td>Use jQuery Selector to specify on which elements to the trigger event, e.g. set this option to `'li'`, so only `<li>` will trigger the menu.</td>
    </tr>
    <tr>
      <td><code>animation</code></td>
      <td>Animation options when the menu is displayed</td>
      <td>The default is `false`, which means do not enable animations.</td>
      <td>
        <p>Available animations include：</p>
        <ul>
          <li>`fade`：Enable fade-in effect；</li>
          <li>`scale`：Enable zoom effect；</li>
          <li>`fade scale`：Enable fade-in and fade-out effects at the same time.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>duration</code></td>
      <td>The time the animation is executed</td>
      <td>The default is `200`</td>
      <td>Its unit is millisecond</td>
    </tr>
      <tr>
      <td><code>className</code></td>
      <td>CSS class name to add to context menu element</td>
      <td>default `''`</td>
      <td>Already exists `'contextmenu-menu dropdown-menu'`</td>
    </tr>
    <tr>
      <td><code>itemCreator</code></td>
      <td>Menu item element generator</td>
      <td>The default is `null` or `function(item, index, options)`</td>
      <td>
        <p>If a callback function is specified, use this method to generate each menu item $dom elementen when creating a menu item element, and html Code or jQuery Element object have to be returned. The parameters of the callback function are defined as follows：</p>
        <ul>
          <li>`item`: Menu item object for the current operation；</li>
          <li>`index`: The index of the currently operating item in the menu(From 0 Start)；</li>
          <li>`options`: All options for the menu to be created；</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>onClickItem</code></td>
      <td>Callback function used when the user clicks on a menu item</td>
      <td>The default is `null` or `function(item, $item, e)`</td>
      <td>
        <p>The parameters of the callback function are defined as follows：</p>
        <ul>
          <li>`item`: Menu item object for the current action；</li>
          <li>`$item`: Currently clicked menu item element；</li>
          <li>`e`: Mouse click event object；</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>onShow</code></td>
      <td>Prepare the callback function when the menu is displayed</td>
      <td>The default is `null` or `function()`</td>
      <td>
      </td>
    </tr>
    <tr>
      <td><code>onShown</code></td>
      <td>The callback function when the menu has been completed</td>
      <td>The default is `null`，or `function()`</td>
      <td>
      </td>
    </tr>
    <tr>
      <td><code>onHide</code></td>
      <td>The callback function when preparing to hide the menu</td>
      <td>The default is `null` or `function()`</td>
      <td>
      </td>
    </tr>
    <tr>
      <td><code>onHidden</code></td>
      <td>The callback function when the hidden menu has been completed</td>
      <td>The default is `null` or `function()`</td>
      <td>
      </td>
    </tr>
  </tbody>
</table>


## Item object properties

Each object in the item group corresponds to an entry on the menu list. The available properties on each item object include：

<table class="table table-bordered">
  <thead>
    <tr>
      <th style="width: 140px">Option</th>
      <th style="width: 150px">Name</th>
      <th style="width: 150px">Available value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>type</code></td>
      <td>Item type</td>
      <td>default `''`</td>
      <td>
        <p>The types available by default include：</p>
        <ul>
          <li>`''` or `'item'`：Default clickable items；</li>
          <li>`divider` or `'seperator'`：split lines；</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>label</code></td>
      <td>The content of an item displayed</td>
      <td>`''`</td>
      <td></td>
    </tr>
    <tr>
      <td><code>html</code></td>
      <td>Whether to display the content of the item as html</td>
      <td>`false`(default)</td>
      <td>If `true`, jQuery `$().html()` is used to insert the content into the interfac. Make sure the content you insert is secure, before you enable the option. If this option is a string, display this string as html.</td>
    </tr>
    <tr>
      <td><code>url</code></td>
      <td>URl item as a link</td>
      <td>default `'###'`</td>
      <td></td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>Whether to disable clicks</td>
      <td>The default is `false`</td>
      <td>If set as `true`, the item will be gray, and `onClick` event is not triggered when clicked.</td>
    </tr>
    <tr>
      <td><code>className</code></td>
      <td>The class to add to an item element</td>
      <td>default `''`</td>
      <td></td>
    </tr>
    <tr>
      <td><code>style</code></td>
      <td>The style to add to an item element</td>
      <td>default `null`</td>
      <td>E.g. `{color: 'red'}`</td>
    </tr>
    <tr>
      <td><code>onClick</code></td>
      <td>Callback function when clicking on this item</td>
      <td>The default is `null` or function(event)</td>
      <td>
        <p>The callback function parameters are defined as follows：</p>
        <ul>
          <li>`event`：click the event object；</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

When an item object only displays text as key information or the object is a split line, you can use a string to represent it.

For example：

* `'divider'`、`'-'`、`'|'` is equivalent to `{type: 'divider'}`；
* `'copy'` is equivalent to `{label: 'copy'}`.

The menu item group can also be shortened as follows：

```js
// Short
var items1 = ['New Project', '-', 'Copy', 'Paste'];

// Complete
var items2 = [
    {label: 'New Project'},
    {type: 'divider'},
    {label: 'Copy'},
    {label: 'Paste'}
];
```

## Methods

### `show(options, callback)`

Show menus immediately. When used in active way, it can also be：`show(items, options, callback)`.

Active：

```js
var items = ['New Project', '-', 'copy', 'Paste'];
$.zui.ContextMenu.show(items, {x: 100, y: 100});
```

Passive：

```js
// Get the object
var contextMenu = $('#myContextMenu').data('zui.contextmenu');

// Call the method
contextMenu.show({x: 100, y: 100});
```

### `hide(callback)`

Hide the menu immediately.

Active：

```js
$.zui.ContextMenu.hide();
```

Passive：

```js
// Get the object
var contextMenu = $('#myContextMenu').data('zui.contextmenu');

// Call the method
contextMenu.hide();
```

### `listenMouseMove()` (Active only)

Listen the mouse movement. After calling this method, it will automatically listen and record the mouse position. You do not have to use `x`, `y`, and `event` to specify the position of the menu, if you call `show()`.

How to use it：

```js
$.zui.ContextMenu.listenMouseMove();
```

### `stopListenMouse()` (Active only)

Stop listening the mouse movement.

How to use it：

```js
$.zui.ContextMenu.stopListenMouse();
```

### `destory()` (Passive only)

Destroy an object instance bound to an element. After this method is executed, the specific event is no longer listened and the context menu automatically pops out.

How to use it：

```js
// Get the object
var contextMenu = $('#myContextMenu').data('zui.contextmenu');

// Call the method
contextMenu.destory();
```

<script>
function afterPageLoad() {
    $('#contextMenuExample1').contextmenu({
        items: [{
            label: 'New Project',
            onClick: function() {
                alert('You clicked on the new project');
            }
        }, {
          type: 'divider'
        }, {
            label: 'Copy',
        }, {
            label: 'Cut',
        }, {
            label: 'Paste',
        }],
        onClickItem: function(item, e) {
            $('#contextMenuExample1 .text-info').text('You just clicked "' + item.label + '"');
        }
    });

    $('#contextMenuExample2').on('click', function(e) {
        $.zui.ContextMenu.show([{
            label: 'New Project',
            onClick: function() {
                alert('You clicked on the new project.');
            }
        }, {
            type: 'divider'
        }, {
            label: 'Copy',
        }, {
            label: 'Cutting',
        }, {
            label: 'Paste',
        }], {
            event: e
        }, function() {
            console.log('Context menu is displayed.');
        });
    });
}
</script>
