section: javascript
id: messager
description: Uninterrupted message floating above the page
icon: icon-comment-alt
filter: piaofuxiaoxi pfxx
---

# Messager

Messagers are displayed on the specified position of the page and float above the existing content. They can be turned off automatically or ask the user to close it. Messagers do not interrupt the user's current action and are usuallyused to prompt background actions or respond promptly to the user's global actions.

## Example

Messagers can have icons and decide whether to display a close button.

<div class="example">
  <button class="btn btn-primary show-messager" type="button" data-content="This is a floating message。" data-icon="bell" data-time="100000">Show the messager</button>
</div>

```js
// Show messagers when you click the button.
$('.btn').on('click', function() {
    new $.zui.Messager('This is a messager.', {
        icon: 'bell' // Define messaget icons.
    }).show();
});
```

## Position

7 preset positions are provided.

<div class="example">
  <button class="btn show-messager" type="button" data-content="Hello!" data-icon="heart" data-placement="top">Above</button>
  <button class="btn show-messager" type="button" data-content="Hello!" data-icon="heart" data-placement="bottom">Below</button>
  <button class="btn show-messager" type="button" data-content="Hello!" data-icon="heart" data-placement="top-left">Upper left</button>
  <button class="btn show-messager" type="button" data-content="Hello!" data-icon="heart" data-placement="top-right">Upper right</button>
  <button class="btn show-messager" type="button" data-content="Hello!" data-icon="heart" data-placement="bottom-left">Bottom left</button>
  <button class="btn show-messager" type="button" data-content="Hello!" data-icon="heart" data-placement="bottom-right">Bottom right</button>
  <button class="btn show-messager" type="button" data-content="Hello!" data-icon="heart" data-placement="center">center</button>
</div>

```js
new $.zui.Messager('This is a messager.', {
    icon: 'heart',
    placement: 'center' // Define display position.
}).show();
```

## Color

8 preset color themes are provided.

<div class="example">
  <style>.messager-example {position: relative; margin-bottom: 10px; cursor: pointer;}</style>
  <div class="messager messager-example messager-default"><div class="messager-content">Common messager</div><div class="messager-actions"><button type="button" class="close action">×</button></div></div>
  <div class="messager messager-example messager-primary" data-type="info"><div class="messager-content">messager: primary</div><div class="messager-actions"><button type="button" class="close action">×</button></div></div>
  <div class="messager messager-example messager-info" data-type="info"><div class="messager-content"><i class="icon-info-sign"></i> Messager: Information</div><div class="messager-actions"><button type="button" class="close action">×</button></div></div>
  <div class="messager messager-example messager-danger" data-type="danger"><div class="messager-content"><i class="icon-exclamation-sign"></i>Messager: Danger</div><div class="messager-actions"><button type="button" class="close action">×</button></div></div>
  <div class="messager messager-example messager-success" data-type="success"><div class="messager-content"><i class="icon-ok-sign"></i> Messager: Success</div><div class="messager-actions"><button type="button" class="close action">×</button></div></div>
  <div class="messager messager-example messager-warning" data-type="warning"><div class="messager-content"><i class="icon-warning-sign"></i> MessageR: Warning</div><div class="messager-actions"><button type="button" class="close action">×</button></div></div>
  <div class="messager messager-example messager-important" data-type="important"><div class="messager-content">Messager: Important</div><div class="messager-actions"><button type="button" class="close action">×</button></div></div>
  <div class="messager messager-example messager-special" data-type="special"><div class="messager-content">Messager:Special</div><div class="messager-actions"><button type="button" class="close action">×</button></div></div>
</div>

```js
new $.zui.Messager('Messager: Success', {
    type: 'success' // Define color theme.
}).show();
```

## Custom action buttons

The close button is displayed on the right by default. If you want to disable the close button, set `close` to `false`.

<div class="example">
  <button class="btn btn-primary show-messager" type="button" data-fade="false" data-scale="false" data-content="This message cannot be closed，5Automatically close after seconds" data-time="5000" data-close="false">Disable close button</button>
</div>

```js
new $.zui.Messager('This message cannot be closed. It will be closed automatically in 5 seconds.', {
    close: false // Disable close button
}).show();
```

`actions` objects are customized to defined a set of actions.

<div class="example">
  <div class="messager messager-example messager-success" data-type="success" data-actions="{&quot;cancel&quot;: {&quot;icon&quot;: &quot;undo&quot;, &quot;text&quot;: &quot;Cancel&quot;}}"><div class="messager-content"><i class="icon-ok-sign"></i> Your message has been sent.</div><div class="messager-actions"><button type="button" class="action action-cancel"><i class="icon-undo"></i> Cancel</button><button type="button" class="close action">×</button></div></div>
</div>

```js
new $.zui.Messager('Your message has been sent.', {
    type: 'success',
    close: true,
    actions: [{
        name: 'undo',
        icon: 'undo',
        text: 'Cancel',
        action: function() {  // Click the callback function of the action button
            console.log('You clicked the Cancel button.');
        }
    }]
});
```

`actions` contains several action definition objects, and values that each action definition object can take are as follows:

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`name`</td>
      <td>`'close'`</td>
      <td>The name of the action. A globally unique string.</td>
    </tr>
    <tr>
      <td>`icon`</td>
      <td>`ok-sign`</td>
      <td>The icon of the action.</td>
    </tr>
    <tr>
      <td>`text`</td>
      <td>`'confirm'`</td>
      <td>Text of action displayed.</td>
    </tr>
    <tr>
      <td>`html`</td>
      <td>`'<strong>OK</strong>'`</td>
      <td>The action button HTML. If it is specified, `icon` and `text` can be ignored.</td>
    </tr>
    <tr>
      <td>`action`</td>
      <td>`[function]`</td>
      <td>Optional. The callback function called when the action button is clicked.</td>
    </tr>
  </tbody>
</table>

`icon`, `text`, and `html`. One of the three has to be set at least, otherwise the action button is not visible.

Return `false`  in the `action` callback function that defines the object to cancel the hide action after the click action.

```js
new $.zui.Messager('Your message has been successfully sent.', {
    type: 'success',
    close: true,
    actions: [{
        name: 'undo',
        icon: 'undo',
        text: 'Cancel',
        action: function() {  // Click the callback function of the action button
            return false; // By returning false to prevent messages from being hidden when clicked
        }
    }]
});
```

If `name` is defined as `'close'` in `actions`, `close` can be ignored.

```js
new $.zui.Messager('Your message has been successfully sent.', {
    type: 'success',
    close: true, // This option will be ignored, because the value of name is defined as close in actions.
    actions: [{
        name: 'close',
        icon: 'remove'
    }]
});
```

Another way to listen clicks is to use `onAction` option.

```
new $.zui.Messager('Your message has been successfully sent.', {
    type: 'success',
    actions: [{
        name: 'undo',
        icon: 'undo'
    }, {
        name: 'close',
        icon: 'remove'
    }],
    onAction: function(name, action, messager) {
        if(name === 'undo') {
            console.log('You clicked the Cancel button.');
        } else if(name === 'close') {
            console.log('You clicked the Close button.');
        }
    }
});
```

## Disable animations

<div class="example">
  <button class="btn btn-primary show-messager" type="button" data-fade="false" data-scale="false" data-content="This message has no animation effect。" data-icon="bell">Disable animation effects</button>
</div>

```js
new $.zui.Messager('This message has no animations.', {
    fade:  false,  // Disable fade effect
    scale: false   // Disable zoom animation
}).show();
```

## How to use it

Create a `Messager` instance, and call `show()` and `hide()` to show or hide messages.

### Create Messager Instance

Create messager call:

 - <strong class="code text-danger">new $.zui.Messager()</strong>
 - <strong class="code text-danger">new $.zui.Messager(message)</strong>
 - <strong class="code text-danger">new $.zui.Messager(options)</strong>
 - <strong class="code text-danger">new $.zui.Messager(message, options)</strong>

The parameters are defined as follows:

 - `message`：Content of the message to be displayed;
 - `options`：Initialization the option;

```js
var myMessager = new $.zui.Messager('Hello, messager!', {
    type: 'success'
});
```

### Show

`show()` is to display the message. The method can be used as follows:

 - <strong class="code text-danger">show()</strong>
 - <strong class="code text-danger">show(message)</strong>
 - <strong class="code text-danger">show(callback)</strong>
 - <strong class="code text-danger">show(message, callback)</strong>

The parameters are defined as follows:

 - `message`: Content of the message to be displayed;
 - `callback`：Callback function after the message is displayed;

```js
// create messager instance
var myMessager = new $.zui.Messager({type: 'success'});

myMessager.show('Hello, messager');
```

You can call `show()` to display a message. If the message is already displayed, it will update the displayed content.

### Display multiple messages

If you want to display multiple messages at the same time, use a different messager instance, then call its `show()`.

```js
// create a messager instance
var myMessager1 = new $.zui.Messager('Message 1');
var myMessager2 = new $.zui.Messager('Message 2');

// Display message 1
myMessager1.show();

// Show message 2
myMessager2.show();
```

### Hide

`hide()` is to hide the message. The method can be used as follows:

 - <strong class="code text-danger">hide()</strong>
 - <strong class="code text-danger">hide(callback)</strong>

The parameters are defined as follows:

 - `callback`：Callback function after message is hiden;

```js
// create a messger instance
var myMessager = new $.zui.Messager('Hello, messager!', {
    type: 'success',
    time: 0 // Do not auto hide it.
});

// Display message first.
myMessager.show();

// Hide messages in 5 seconds.
setTimeout(function() {
    myMessager.hide();
}, 5000);
```

<table class="table table-bordered">
  <thead>
    <tr><th>Method</th><th>Parameter</th><th>Definition</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>Constructor</td>
      <td>*   `message`: Message text to be displayed, html is supported;
*   `options`: parameter object, refer to chapters below for its definition.</td>
      <td>Create a new Messager instance.</td>
    </tr>
    <tr>
      <td>`show`</td>
      <td>`message`(Optional): Reset message text as it is displayed.</td>
      <td>Show messages immediately</td>
    </tr>
    <tr>
      <td>`hide`</td>
      <td>N/A</td>
      <td>Hide messages immediately</td>
    </tr>
  </tbody>
</table>

```js
// use jQuery object
var msg = new $.zui.Messager('Message Content', {placement: 'bottom'});

// Show the message
msg.show();

// Hide the message
msg.hide();
```

If you are sure that the message instance is no longer used, call `destroy()` to destroy the message.

```js
// Destroy the message
myMsg.destroy();
```

### Quick display

Use `$.zui.messager` instance and its `show()` method to instantly display a messager.

Call `$.zui.messager.show()` or `$.zui.messager.show()` to display and return to the created `Messager` instance immediately. Use the returned instance `hide` to hide this message.

`show()` provides two parameter which are the same as defined in `Messager` Constructor.

```js
// use jQuery object
var msg = $.zui.messager.show('Message Content', {placement: 'bottom'});

// Hide the message
// msg.hide();
```

### Options

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`type`</td>
      <td>`'default'`(default)|`'primary'`|`'success'`|`'info'`|`'warning'`|`'danger'`|`'important'`|`'special'`</td>
      <td>Different types of messages are displayed in different colors.</td>
    </tr>
    <tr>
      <td>`placement`</td>
      <td>`'top'`(default)|`'bottom'`|`'top-left'`|`'top-right'`|`'bottom-left'`|`'bottom-right'`|`'center'`</td>
      <td>Decide where the message is displayed.</td>
    </tr>
    <tr>
      <td>`time`</td>
      <td>Time delayed in milliseconds. The default is 4000.</td>
      <td>Hide the message if time is delayed as set after the messager is displayed. If set as 0, it will not be hidden automatically.</td>
    </tr>
    <tr>
      <td>`message`</td>
      <td>The default is `null`.</td>
      <td>Used to set the message to be displayed.</td>
    </tr>
    <tr>
      <td>`parent`</td>
      <td>`'body'`</td>
      <td>A jQuery selector and a parent node to decide the message content of DOM.</td>
    </tr>
    <tr>
      <td>`icon`</td>
      <td>`null`</td>
      <td>You can specify an extra icon to be displayed in front of the message text. Refer to “Control&gt;icon for icon definitions.</td>
    </tr>
    <tr>
      <td>`close`</td>
      <td>`true`(default)|`false`</td>
      <td>If `true`, a close button is displayed to the right of the message. Users can hide messages.</td>
    </tr>
    <tr>
      <td>`fade`</td>
      <td>`true`(default)|`false`</td>
      <td>If `true`, use fade-in and fade-out animations when displaying and hiding messages.</td>
    </tr>
    <tr>
      <td>`scale`</td>
      <td>`true`(default)|`false`</td>
      <td>If `true`, use zoom animations when displaying and hiding messages.</td>
    </tr>
    <tr>
      <td>`actions`</td>
      <td>`[{action...}]`, it is not set by default.</td>
      <td>Use an array of action definition objects to customize action buttons.</td>
    </tr>
    <tr>
      <td>`onAction`</td>
      <td>`function(actionName, action, messager)`, it is not set by default.</td>
      <td>Callbackk function used When clicking the action button. The `this` of this callback function points to the clicked button. The parameters are defined as follows:

*   `actionName`：The name of the action;
*   `action`：Action definition object;
*   `messager`：Current messager instance.</td>
    </tr>
    <tr>
      <td>`cssClass`</td>
      <td>`'my-messager'`, it is not set by default.</td>
      <td>For `.messager`, add extra CSS class.</td>
    </tr>
    <tr>
      <td>`contentClass`</td>
      <td>`'my-messager-content'`, it is not set by default.</td>
      <td>For `.messager-content`, add extra CSS class.</td>
    </tr>
    <tr>
      <td>`show`</td>
      <td>`true` | `false`(default)</td>
      <td>Whether the message is displayed immediately after it is initialized.</td>
    </tr>
  </tbody>
</table>

<script>
function afterPageLoad() {
    $('#pageContent .show-messager').on('click', function() {
        var $this = $(this);
        var data = $this.data('zui.messager');
        if(data) {
            data.show(new Date());
        }
        else {
            var options = $this.data();
            if(typeof options.actions === 'string') options.actions = $.parseJSON(options.actions);
            $this.data('zui.messager', new $.zui.Messager(options.content, options).show());
        }
    });

    $('#pageContent .messager-example').click(function() {
        var $this = $(this);
        options = $this.data();
        if(typeof options.actions === 'string') options.actions = $.parseJSON(options.actions);
        new $.zui.Messager($this.find('.messager-content').html(), options).show();
    });
}
</script>
