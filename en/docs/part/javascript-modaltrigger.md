section: javascript
id: modaltrigger
description: Dynamic display dialog
icon: icon-signout
filter: duihuakuangchufaqi dhkcfq motaikuang mtk
---

# Modal trigger

Modal triggers use a trigger button directly or Javascript to display a new dialog, instead of writing static dialogs HTML. Ajax is supported to get content remotely, or use iframe to load any page content. If not using remote content, local content is also available and very convenient.

## Load remote content

Ajax and iframe are used to load remote content. It seems the two are almost the same. Make sure that the content provided in the remote address is the correct.

When getting remote content, the icon animation will be loaded.

### Ajax

`data-remote="(ajax get url)"` is used to specify the URL to get ajax fragments. Or specify `data-type="ajax"` and `data-url="(ajax get url)"` at the same time.

<div class="example">
  <button type="button" class="btn btn-primary" data-remote="docs/partial/remote-modal.html" data-toggle="modal">Ajax Dialog</button>
</div>

```html
<!-- use data-remote -->
<button type="button" class="btn btn-primary" data-remote="partial/remote-modal.html" data-toggle="modal">Ajax Dialog</button>

<!-- use data-type and data-url -->
<button type="button" class="btn btn-primary" data-type="ajax" data-url="partial/remote-modal.html" data-toggle="modal">Ajax Dialog≶/button>
```

In the returned Ajax fragment, include a complete `.modal-dialog`, `.modal-content`. or any modal structure that is not static, then the trigger automatically fills in the missing part in the dialog based on what it includes.

### iframe (Inline)

`data-iframe="(iframe url)" is used to specify the URL to get the remote page content. Or specify `data-type="iframe"`with`data-url="(iframe url)"`at the same time.

<div class="example">
  <button type="button" class="btn btn-primary" data-waittime="5000" data-iframe="docs/partial/iframe-modal.html" data-toggle="modal" data-loading-icon="icon-spinner-snake" data-height="300">iframe Dialog</button>
</div>

```html
<!-- data-iframe -->
<button type="button" class="btn btn-primary" data-iframe="partial/iframe-modal.html" data-toggle="modal">iframe Dialog</button>

<!-- data-type withdata-url -->
<button type="button" class="btn btn-primary" data-type="iframe" data-url="partial/iframe-modal.html" data-toggle="modal">iframe Dialog≶/button>
```

## Load custom content

`custom` can make it more flexible to update content for dialogs.

### Specify texts

The easiest way is to specify the text for the custom property. `data-custom` works too.

<div class="example">
      <button type="button" class="btn btn-primary" data-custom="<h1>This content is custom</h1><p>Haha:)</p>" data-toggle="modal">Specify texts</button>
    </div>

```html
<!-- usedata-custom Attributes -->
<button type="button" class="btn btn-primary" data-custom="This content is custom:)" data-toggle="modal">Specify texts</button>
```

```js
/* use Javascript to bind triggers with the button */
$('#triggerButton').modalTrigger({custom: '<h1>This content is customized.</h1><p>Haha:)</p>'});

/* Display it using trigger objects */
(new $.zui.ModalTrigger({custom: 'Custom content'})).show();
```

### Specify page elements as contents

By specifying one jQuery selector to get its content as the content of the dialog.

<div class="example">
  <div id="myModalAlert" class="alert alert-success with-icon">
    <i class="icon-ok"></i>
    <div class="content">I want to be able to see this message in the dialog.</div>
  </div>
  <button type="button" class="btn btn-primary" data-custom="#myModalAlert" data-toggle="modal">Specify the content of the page element</button>
</div>

```html
<!-- usedata-custom Attributes -->
<button type="button" class="btn btn-primary" data-custom="#myModalAlert" data-toggle="modal">Specify the content of the page element</button>
```

```js
/* use Javascript to bind triggers with the button */
$('#triggerButton').modalTrigger({custom: '#myModalAlert'});

/* Display it using trigger objects */
(new $.zui.ModalTrigger({custom: '#myModalAlert'})).show();
```

### use jQuery objects as contents

Set one jQuery Object as the value of custom, and the contents of this object will be displayed in the dialog. Data property can not be called for this method.

```js
/* use Javascript to binding triggers with the button */
$('#triggerButton').modalTrigger({custom: $('#myModalAlert')});

/* Display it using trigger objects */
(new $.zui.ModalTrigger({custom: $('#myModalAlert')})).show();
```

### Dynamically generate contents using callbacks

Assign a callback function to custom, then the trigger object will automatically call this function to get the dynamic content in real time and display it in the dialog.

The callback function provides a parameter object which can be used flexibly in generating contents. If the generated content is asynchronous, call `.ready()` to display the dialog when the content is ready.

<div class="example">
  <button type="button" class="btn btn-primary" id="modalTriggerByFunc">Generate content using functions</button>
</div>

```js
/* use Javascript to bind triggers with the button */
$('#triggerButton').modalTrigger({custom: function() {
    return "When the dialog is displayed, the time is：" + (new Date).toString();
}});

/* Display it using trigger objects */
(new $.zui.ModalTrigger({custom: function() {
    return "When the dialog is displayed, the time is：" + (new Date).toString();
}})).show();
```

If your callback function is global, specify custom with a string which is the the name of the function.

## Automatically adjust positions

If the content of the dialog changes, the dialog size changes. Then the dialog will automatically adjust the position according to the settings.

Automatically adjust position feature applies for any dialogs.

<div class="example">
  <button type="button" class="btn btn-primary" data-toggle="modal" data-custom="<div contenteditable='true' style='height: auto' class='form-control'>Enter some content and newline to change the dialog size</div>" id="modalTriggerByFunc">Test auto-adjust position</button>
</div>

## Full screen dialog

<div class="example">
  <button type="button" class="btn btn-primary" data-custom="<h1>This is a full screen dialog example</h1>" data-toggle="modal" data-size="fullscreen">Full screen dialog</button>
</div>

```html
<button type="button" class="btn btn-primary" data-custom="..." data-toggle="modal" data-size="fullscreen">Full screen dialog</button>
```

## Customize headers

### Hide headers

Set `showHeader` as `false` to hide a header of a dialog.

<div class="example">
  <button type="button" class="btn btn-primary" data-toggle="modal" data-custom="This dialog does not display the header" data-show-header="false" id="modalTriggerByFunc">Do not show the head</button>
</div>

```html
<!-- use data-showHeader -->
<button type="button" class="btn btn-primary" data-show-header="false" data-toggle="modal">Do not show the header</button>
```

```js
/* use Javascript to bind triggers with the button */
$('#triggerButton').modalTrigger({showHeader: false});

/* Display it using trigger objects */
(new $.zui.ModalTrigger({showHeader: false})).show();
```

### Customize dialog titles

If you do not specify a title for the dialog box, it automatically use the title or the text of the trigger button as the title of the dialog.

<div class="example"><button type="button" class="btn btn-primary" data-toggle="modal" data-custom="The title of this dialog is new." data-title="The new title is important" id="modalTriggerByFunc">Custom title</button></div>

```html
<!-- use data-title -->
<button type="button" class="btn btn-primary" data-title="New title" data-toggle="modal">Do not show the header</button>
```

```js
/* use Javascript to bind triggers with the button */
$('#triggerButton').modalTrigger({title: 'New title'});

/* Display it using trigger objects */
(new $.zui.ModalTrigger({title: 'New title'})).show();
```

### Icons

Use `icon` to add an icon in front of the title.

Please refer to the definition of the icon in “Control-Icon”.

<div class="example"><button type="button" class="btn btn-primary" data-toggle="modal" data-custom="This dialog title contains an icon" data-icon="heart" data-title="Icon is important" id="modalTriggerByFunc">Look at what the icon is.</button></div>

```html
<!-- use data-title -->
<button type="button" class="btn btn-primary" data-icon="heart" data-toggle="modal">Do not show the header</button>
```

```js
/* use Javascript to bind triggers with the button */
$('#triggerButton').modalTrigger({icon: 'heart'});

/* Display it using trigger objects */
(new $.zui.ModalTrigger({icon: 'heart'})).show();
```

## Draggable dialog

Turning on this option allows the user to move the dialog by dragging its header after the dialog is displayed. See examples in [JS Plugin -> Dialog](#javascript/modaltrigger/5)。

<div class="example">
  <button type="button" class="btn btn-primary" data-icon="move" data-moveable="true" data-toggle="modal" data-custom="<div><p>Drag my head to move this dialog。</p><h1>:)</h1></div>" id="modalTriggerMoveable"><i class="icon icon-move"></i> Open and Drag me</button>
</div>

```html
<button type="button" class="btn btn-primary" data-moveable="true" data-toggle="modal" data-custom="..."><i class="icon icon-move"></i> Open and Drag me</button>
```

## How to use it

### data property

Set data properties of the trigger button. This method is the same writing as the trigger button property of regular dialogs. Add a few special properties, e.g. `data-remote` `data-iframe`, and `data-custom`.

Refer to the examples above for how to call data properties.

### Javascript

Javascript is also very flexible.

### jQuery object method

Make onejquery object listen for events, usually a click, and launch the dialog.

```js
$('#triggerButton').modalTrigger(options);
```

Can also be used`modalTrigger`Alias method`modal`，This is exactly the same as the initialization method of the traditional dialog box.。

### Example: modalTrigger

`$.zui` obeject has a dialog trigger object bound by default. You can use `method` and pass different parameters to start the dialog at any time.

```js
$.zui.modalTrigger.show(options);
```

### Create a new trigger object

Create a new dialog trigger to save the configuration and launch the dialog.

```js
var myModalTrigger = new $.zui.ModalTrigger(options);
myModalTrigger.show();
```

### Parameters

Use parameters to customiize your dialog when initializing the dialog or displaying it.

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Name</th>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`name`</td>
      <td>Dialog element name</td>
      <td>Optional, `'triggerModal'` as default</td>
      <td>It will be an example of this trigger, and will be the ID property of `.modal` generated.</td>
    </tr>
    <tr>
      <td>`className`</td>
      <td>Dialog element class name</td>
      <td>Optional, `''` as default</td>
      <td>Added to the class property of `.modal` generated.</td>
    </tr>
    <tr>
      <td>`type`</td>
      <td>Dialog type</td>
      <td>*   `'custom'`(default),
*   `'iframe'`
*   `'ajax'`</td>
      <td>Usually used with `url`use together. If specified `custom`, `remote`, and `iframe`, it can be ignored.</td>
    </tr>
    <tr>
      <td>`url`</td>
      <td>Remote content address</td>
      <td>Remote address string</td>
      <td>Usually used with `type`. If specified`custom`, `remote`, and `iframe`, it can be ignored.</td>
    </tr>
     <tr>
      <td>`remote`</td>
      <td>Ajax content address</td>
      <td>Remote address string</td>
      <td>If you use this parameter, its `type` and `url` can be omitted.</td>
    </tr>
    <tr>
      <td>`iframe`</td>
      <td>iframe page address</td>
      <td>Remote address string</td>
      <td>If you use this parameter, its `type` and `url`can be omitted.</td>
    </tr>
    <tr>
      <td>`size`</td>
      <td>Dialog size</td>
      <td>*   `''`(default), default size:
*   `'lg'`, large;
*   `'sm'`, small;
*   `'fullscreen'`, full-screen display.</td>
      <td></td>
    </tr>
    <tr>
      <td>`width`</td>
      <td>Dialog width</td>
      <td>*   `null`(default), default width:
*   CSS value strings for other widths</td>
      <td>If `size` is used. you can ignore this parameter.</td>
    </tr>
    <tr>
      <td>`height`</td>
      <td>Dialog height</td>
      <td>*   `'auto'`(default), automatically adjusted based on contents
*   Other indicates heightCSSValue string</td>
      <td>If the height is specified but not`'auto'`, the content might not match the height.</td>
    </tr>
    <tr>
      <td>`showHeader`</td>
      <td>Whether the header is diplayed</td>
      <td>*   `true`(default)
*   `false`</td>
      <td></td>
    </tr>
    <tr>
      <td>`title`</td>
      <td>Text of a dialog header</td>
      <td>String</td>
      <td>If `showHeader` is `false`, this parameter is invalid.</td>
    </tr>
    <tr>
      <td>`icon`</td>
      <td>Icon of a dialog header</td>
      <td>Icon name string</td>
      <td>If `showHeader` is `false`, this parameter is invalid.</td>
    </tr>
    <tr>
      <td>`fade`</td>
      <td>Whether fade animation is used</td>
      <td>*   `true`(default)
*   `false`</td>
      <td></td>
    </tr>
    <tr>
      <td>`position`</td>
      <td>Dialog position</td>
        <ul>
          <li><code>'fit'</code>: Best position(default);</li>
          <li><code>'center'</code>: Displayed in the center of the window;</li>
          <li><code>'0'</code>: Displayed at the top;</li>
          <li><code>'200'</code>: Pixels from the top of the window;</li>
          <li>CSS values are all supported for the position. Specify the pixels from the top of the window;</li>
          <li>Use a callback function to dynamically return the position of each display (use JS style object).</li>
        </ul>
      <td>The best position is slightly above the center of the window.</td>
    </tr>
    <tr>
      <td>`backdrop`</td>
      <td>Background mask</td>
      <td>*   `true`(default)
*   `false`
*   `'static'`</td>
      <td>Use boolean values to enable or disable background masks. If specified as`'static'`, the background mask will be started. But it does not trigger the process of closing the dialog, if you click on the background mask.</td>
    </tr>
    <tr>
      <td>`keyboard`</td>
      <td>button</td>
      <td>*   `true`(default)
*   `false`</td>
      <td>If `ture`, press `esc` to close the dialog.</td>
    </tr>
    <tr>
      <td>`moveable`</td>
      <td>Movable</td>
      <td>
        <ul>
          <li><code>false</code>: Disabled(default);</li>
          <li><code>true</code>: Enable;</li>
          <li><code>'inside'</code>: Enable and restrict dialogs to be moved only inside the window.</li>
        </ul>
      </td>
      <td>Whether drag-and-drop is enabled</td>
    </tr>
    <tr>
      <td>`rememberPos`</td>
      <td>Remember the position the dialog is moved to</td>
      <td>*   `false`(default), the position is not remembered;
*   `true`, the position is remembered;
*   the onlyg string within the page and remembered in local storage;</td>
      <td>It requireds to enable `moveable` to enable this option. If the value is the only string within the page, remeber it in the browser of local storage, so it will be remembered after the page or the browser is closed.</td>
    </tr>
    <tr>
      <td>`waittime`</td>
      <td>Maximum wait time when loading remote content</td>
      <td>Integer, milliseconds, default is `0`</td>
      <td>The dialog will be displayed in the specified time, no matter whether the remote content is loaded or not; default is `0`, meaning the dialog will be displayed after the remote content is loaded. Animation will be displayed while waiting.</td>
    </tr>
    <tr>
      <td>`loadingIcon`</td>
      <td>The icon used for the animation displayed when loading</td>
      <td>*   `icon-*` used to defined icon name
*   Customize the animation used to load the animation html</td>
      <td>For `icon-*`icon name definition,refer to [icon](#search/icon:spin).</td>
    </tr>
    <tr>
      <td>`scrollInside`</td>
      <td>Whether a scroll bar in a dialog is displayed</td>
      <td>The default is `false`, which means the scroll bar is displayed on the page the dialog belongs to.</td>
      <td></td>
    </tr>
    <tr>
      <td>`iframeStyle`</td>
      <td>Style to inject to page on iframe modal load</td>
      <td>CSS style string</td>
      <td></td>
    </tr>
  </tbody>
</table>

### Methods

### Get the trigger object

To use the trigger method, get an example of the trigger object first.

##### Get data properties in trigger button

```js
var modalTrigger = $('#triggerButton').data('zui.modaltrigger');
```

##### Use bound trigger in preset $.zui object

```js
var myTrigger = $.zui.modalTrigger;
```

##### Create a new trigger instance

```js
var newTrigger = new $.zui.ModalTrigger(options);
```

### Display

When the dialog is displayed, new parameters can be introduced without affecting the original parameters of the trigger object.

```js
myModalTrigger.show(options);
```

### Close

```js
myModalTrigger.close();
```

### Status of display toggle and close

If the dialog is not displayed, display it immediately, and close it if displayed.

When the dialog is toggled and closed, new parameters can be introduced without affecting the original parameters of the trigger object.

```js
myModalTrigger.toggle(options);
```

### Change positions

Use the new parameters to reset the display position of the dialog.

```js
myModalTrigger.ajustPosition(options);
```

### Events

DOM content of the dialog is dynamically generated, so it is inconvenient to use jQuery methods to bind events. However, you can pass the callback function of the event listened to the parameter.

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Event</th>
      <th>jQuery event name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`onShow`</td>
      <td>`show.zui.modal`</td>
      <td>Enable it when the show method called</td>
    </tr>
    <tr>
      <td>`shown`</td>
      <td>`shown.zui.modal`</td>
      <td>Enable it  when the dialog is displayed (After animation is executed)</td>
    </tr>
    <tr>
      <td>`onHide`</td>
      <td>`hide.zui.modal`</td>
      <td>Enable it when the hide method called</td>
    </tr>
    <tr>
      <td>`hidden`</td>
      <td>`hidden.zui.modal`</td>
      <td>Enable it when the dialog is hidden(After animation is executed)</td>
    </tr>
    <tr>
      <td>`loaded`</td>
      <td>`loaded.zui.modal`</td>
      <td>Enable it when remote content loading is complete</td>
    </tr>
    <tr>
      <td>`broken`</td>
      <td>`broken.zui.modal`</td>
      <td>Called after loading remote content failed. The content of the dialog will be updated by the string returned in the next callback method. For example, display a tip in the dialog after the loading failed.</td>
    </tr>
  </tbody>
</table>

```js
myModalTrigger.show({shown: function() {
    alert('Dialog has been displayed.');
}});
```

If the dialog `name` is known, get the dialog jQuery object instance and use jQuery object on method to bind events.

```js
$('#triggerModal').on('shown.zui.modal', function() {...});
```

<style>
.modal > .loader {
  opacity: 1;
  height: auto;
  transform: scale(1);
}
</style>

<script>
function afterPageLoad() {
    $(document).on('click', '.modal-backdrop.in, .modal', function(e) {
        e.stopPropagation();
    });

    /* modal trigger */
    var $trigger = $('#modalTriggerByFunc');
    if(!$trigger.data('modalTriggerSetup')) {
        $trigger.modalTrigger({moveable: true, custom: function() {
            return "When the dialog is displayed，the time is：" + (new Date).toString();
        }});
        $trigger.data('modalTriggerSetup', 1)
    }
}
</script>
