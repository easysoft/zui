section: javascript
id: modal
description: a dialog box floating above the page
icon: icon-check-empty
filter: dhk mtk duihuakuang motaikuang
---

# Modal Dialog

Modal allows popout dialog boxes with translucent page mask and supports animation either displayed or hided.

## Examples

### Static

<div class="example">
  <div class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">shut down</span></button>
          <h4 class="modal-title">Title</h4>
        </div>
        <div class="modal-body">
          <p>Content...</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<div class="modal fade">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
        <h4 class="modal-title">Title</h4>
      </div>
      <div class="modal-body">
        <p>Content...</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>
```

### Dynamic

Click the button and a dialog box is enabled via Javascript.

<div class="example">
  <button type="button" class="btn btn-lg btn-primary" data-toggle="modal" data-target="#myModal">Start dialog box</button>
</div>

```html
<!-- Dialog box trigger button -->
<button type="button" class="btn btn-lg btn-primary" data-toggle="modal" data-target="#myModal">Start dialog box</button>

<!-- Dialog box HTML -->
<div class="modal fade" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>
```

## Dialog box position

Dialog boxes are displayed slightly above the center of the page by default. The position of a dialog box can be re-defined by some parameters. Refer to “How to us it“below.

<div class="example">
  <button type="button" class="btn btn-primary" data-position="fit" data-toggle="modal" data-target="#myModal">Default</button>
  <button type="button" class="btn btn-primary" data-position="center" data-toggle="modal" data-target="#myModal">Center</button>
  <button type="button" class="btn btn-primary" data-position="0" data-toggle="modal" data-target="#myModal">Top</button>
  <button type="button" class="btn btn-primary" data-position="100px" data-toggle="modal" data-target="#myModal">100px from the top</button>
</div>

```html
<button type="button" class="btn" data-position="fit" data-toggle="modal" data-target="#myModal">Default</button>
<button type="button" class="btn" data-position="center" data-toggle="modal" data-target="#myModal">Center</button>
<button type="button" class="btn" data-position="0" data-toggle="modal" data-target="#myModal">Top</button>
<button type="button" class="btn" data-position="100px" data-toggle="modal" data-target="#myModal">100px from the top</button>
```

## Dialog box size

The default width of a dialog box is`600px`. You can set `.modal-dialog` to change its width. ZUI has two preset widths.  Use `.modal-dialog` to change the size：

*   Large dialog box：Add `.modal-lg` CSS Class name, with a width `900px;
*   Small dialog box：Add `.modal-sm` CSS Class name, with a width `300px`;
*   Full screen dialog box：Add `.modal-fullscreen` CSS Class name.

<div class="example">
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myLgModal">Large dialog box</button>
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#mySmModal">Small dialog box</button>
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myFullscreenModal">Full screen dialog box</button>
</div>

```html
<!-- Large dialog box -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myLgModal">Large dialog box</button>

<div class="modal fade" id="myLgModal">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>

<!-- Small dialog box -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#mySmModal">Small dialog box</button>

<div class="modal fade" id="mySmModal">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>
```

## Moveable

This option allows the user to move the dialog box by dragging the header.

To enable it, you have to set `moveable` to `true`, or add `.modal-moveable` to `.modal-dialog`.

<div class="example">
  <button type="button" class="btn btn-primary" data-moveable="true" data-remember-pos="false" data-toggle="modal" data-target="#moveableModal" data-position="center"><i class="icon icon-move"></i> Click and drag me</button>
</div>

```html
<button type="button" class="btn" data-moveable="true" data-toggle="modal" data-target="#myModal">Click and drag me</button>
```

Set `rememberPos` as `true` to remember the position that the dialog is moved to. `rememberPos` values are：

*   `false`(default), its position is not remembered;
*   `true`,its position is remembered, but it will be reset after the page or browser is closed;
*   A string with a unique value within the page. Data will be saved via the browser local storage. Its position is saved after the page or browser is closed.

<div class="example">
  <button type="button" class="btn btn-primary" data-moveable="true" data-remember-pos="rememberMoveableModal" data-toggle="modal" data-target="#rememberMoveableModal"><i class="icon icon-move"></i>  Click and drag me</button>
</div>

Set `moveable` as `inside` to enable drag-and-drop, but it is forbidden to move the dialog box outside the visible area of the window.

<div class="example">
  <button type="button" class="btn btn-primary" data-moveable="inside" data-remember-pos="false" data-toggle="modal" data-target="#moveableModal" data-position="center"><i class="icon icon-move"></i>  Click and drag me</button>
</div>

## Disable animation

Animation is enabled when a dialog box pops out or hides(fade in/out).If you do not want it, remove `.fade` class from `.modal`.

<div class="example">
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#fastModal">Show immediately</button>
</div>

```html
<!-- Dialog box with animation disabled -->
<div class="modal">
...
</div>
```

## Close

Add a button and then add `data-dismiss="modal"` to static dialog box HTML. Then this dialog box is closed when the button is clicked. You can add it to any element in the dialog.

```html
<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only"Close</span></button>
```

## How to use it

### Data properties

Usually you do not have to call Javascript to enable a dialog box. Add `data-toggle="modal"`and `data-target="#myModal"` to the button or the link which triggers the dialog box, and it will work.

`data-toggle` is to define whether the dialog box is displayed or hidden after clicking a button or a link. `data-target` is to indicate the ID property of a static dialog box.

If `<a>` is used to trigger a dialog box, you can write the ID of a static dialog box to `href` and ignore `data-target`.

Data properties can also be used to provide additional parameters for a dialog box.

```html
<!-- Button -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Start dialog box</button>

<!-- Hyperlinks -->
<a data-toggle="modal" href="#myModal">Start dialog box</a>
```

### Call JavaScript

You can also use Javascript, instead of a button or a link, to trigger a dialog box.

```js
$('#myModal').modal(options)
```

### Parameters

Parameters can be specified either when called manually or when data properties are used in a static dialog box or a trigger.

The available parameters are：

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Parameter</th>
      <th style="width: 80px">Name</th>
      <th style="width: 300px">Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`name`</td>
      <td>Dialog box name</td>
      <td>Strings.The default is`'triggerModal'`</td>
      <td>It will specify a the ID of a dialog box, the ID of iframe, and the name.</td>
    </tr>
    <tr>
      <td>`backdrop`</td>
      <td>Background mask</td>
      <td>*   `'static'`
*   `true`(default)
*   `false`</td>
      <td>Use boolean values to enable or disable background masks. If specified as `'static'`, the background mask will be started. But the process of closing the dialog will not be triggered when you click on the background mask.</td>
    </tr>
    <tr>
      <td>`keyboard`</td>
      <td>button</td>
      <td>*   `true`(default)
*   `false`</td>
      <td>If `ture`, press`esc` to close the dialog.</td>
    </tr>
    <tr>
      <td>`show`</td>
      <td>Show immediately</td>
      <td>*   `true`(default)
*   `false`</td>
      <td>Define whether it is displayed immediately after the dialog is initialize.</td>
    </tr>
    <tr>
      <td>`position`</td>
      <td>Displayed position</td>
      <td>
        <ul>
          <li><code>'fit'</code>：Best position (default);</li>
          <li><code>'center'</code>：Displayed in the center of the window;</li>
          <li><code>'0'</code>：Displayed at the top；</li>
          <li><code>'200'</code>：Define the pixels away from the top of the window;</li>
          <li>CSS supports values for the position and specifies the offset from the top of the window;</li>
          <li>A callback function is used to dynamically return the position of each display (JS is used for the styles of an object).</li>
        </ul>
      </td>
      <td>The default position is slightly above the center of the window.</td>
    </tr>
    <tr>
      <td>`moveable`</td>
      <td>Movable</td>
      <td>
        <ul>
          <li><code>false</code>：Disabled(default);</li>
          <li><code>true</code>：Enabled;</li>
          <li><code>'inside'</code>：Enabled and defines dialog boxes can only be moved inside the window.</li>
        </ul>
      </td>
      <td>Whether enable drag-and-drop function for a dialog box.</td>
    </tr>
    <tr>
      <td>`rememberPos`</td>
      <td>Remember the position that the dialog box is moved to.</td>
      <td>*   `false`(default), the position is not remembered;
*   `true`, the position is remembered;
*   The only string of values on the page and is saved to local storage;</td>
      <td>Enable `moveable` to enable this option. When the value is the only string within the page range save data through browser local storage, so the data will not be removed after the page or browser is closed.</td>
    </tr>
  </tbody>
</table>

### Methods

#### .modal(options)

Use parameter objects to initialize the dialog box.

```js
$('#myModal').modal({
    keyboard : false,
    show     : true
})
```

#### .modal('toggle', position)

Manually show or hide a dialog box. `position` is optional and used to specify the position to display.

```js
$('#myModal').modal('toggle', 'center')
```

#### .modal('show', position)

Manually display a dialog box. `position` is optional and used to specify the position to display.

```js
$('#myModal').modal('show', 'fit')
```

#### .modal('hide', position)

Manually hide a dialog box. `position` is optional and used to specify the position to display.

```js
$('#myModal').modal('hide', 'fit')
```

#### .modal('ajustPosition', position)

Manually adjust the displayed position of a dialog box. `position` is optional and used to specify the position to display.

```js
$('#myModal').modal('ajustPosition', 'fit')
```

### Events

The dialog box has events to listen its running status, so your code can be run at the right time.

<table class="table table-bordered">
  <thead>
   <tr>
     <th style="width: 80px;">Event</th>
     <th>Description</th>
   </tr>
  </thead>
  <tbody>
   <tr>
     <td>`show.zui.modal`</td>
     <td>`show` called to trigger this event immediately.</td>
   </tr>
   <tr>
     <td>`shown.zui.modal`</td>
     <td>When a modal dialog is displayed and the transition effect is executed, this event is triggered.</td>
   </tr>
   <tr>
     <td>`hide.zui.modal`</td>
     <td>`hide` is called to trigger this event immediately.</td>
   </tr>
   <tr>
     <td>`hidden.zui.modal`</td>
     <td>When the modal dialog is hidden and the transition effect is completed, this event will be triggered.</td>
   </tr>
   <tr>
     <td>`escaping.zui.modal`</td>
     <td>When `esc` is pressed, this method is called. If returned `false`, the dialog closing process will be terminated.</td>
   </tr>
  </tbody>
</table>

Listen events via jQueryo method：

```js
$('#myModal').on('shown.zui.modal', function() {
  alert('Dialog box has been displayed.');
})
```

### Tips

*   Do not overlap one dialog box with another. Two and more dialog boxes can not be displayed on the mask at the same time;
*   Static dialog box HTML should be placed in the top level of the document. As `<body>` child elements, they should avoid conflicts with other components in the document;
*   Dialog box is inherited from Bootstrap(v3.2) and has all its features and interfaces. Refer to [Bootstrap](http://getbootstrap.com/javascript/#modals).

<div class="modal modal-for-page fade" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
        <h4 class="modal-title">Dialog box title</h4>
      </div>
      <div class="modal-body">
        <h4>虞美人·春花秋月何时了 <small五代·李煜</small></h4>
        <p>春花秋月何时了，往事知多少？小楼昨夜又东风，故国不堪回首月明中！<br>雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流。</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">cancel</button>
        <button type="button" class="btn btn-primary">determine</button>
      </div>
    </div>
  </div>
</div>

<div class="modal modal-for-page fade" id="myLgModal">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
        <h4 class="modal-title">Large dialog box</h4>
      </div>
      <div class="modal-body">...</div>
    </div>
  </div>
</div>

<div class="modal modal-for-page fade" id="mySmModal">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
        <h4 class="modal-title">Small dialog box</h4>
      </div>
      <div class="modal-body">...</div>
    </div>
  </div>
</div>

<div class="modal modal-for-page fade" id="myFullscreenModal">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
        <h4 class="modal-title">Full screen dialog box</h4>
      </div>
      <div class="modal-body">...</div>
    </div>
  </div>
</div>

<div class="modal modal-for-page" id="fastModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
        <h4 class="modal-title">Disable animation effects demo</h4>
      </div>
      <div class="modal-body">...</div>
    </div>
  </div>
</div>

<div class="modal modal-for-page fade" id="moveableModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
        <h4 class="modal-title">Moveable dialog box</h4>
      </div>
      <div class="modal-body">
        <h1 class="text-warning">:)</h1>
        <p>Drag my header to change my position.</p>
      </div>
    </div>
  </div>
</div>

<div class="modal modal-for-page fade" id="rememberMoveableModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
        <h4 class="modal-title">Draggable dialog box</h4>
      </div>
      <div class="modal-body">
        <h1 class="text-warning">:)</h1>
        <p>Drag my head to change my position.</p>
        <p>Close this page or open my browser again, the dialog will appear in the last displayed position.</p>
      </div>
    </div>
  </div>
</div>

<div class="modal modal-for-page" id="fastModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">shut down</span></button>
        <h4 class="modal-title">Disable animation effects demo</h4>
      </div>
      <div class="modal-body">...</div>
    </div>
  </div>
</div>

<style>
#pageContent .example > .modal {display: block; position: static;}
</style>

<script>
function afterPageLoad() {
    $('body > .modal-for-page').remove();
    $('#pageBody .modal-for-page').appendTo('body').on('click', function(e) {
        e.stopPropagation();
    });
}

function onPageClose() {
    $('body > .modal-for-page').remove();
}
</script>
