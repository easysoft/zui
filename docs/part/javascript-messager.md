section: javascript
id: messager
description: 漂浮在页面之上的无打断消息
icon: icon-comment-alt
filter: piaofuxiaoxi pfxx
---

# 漂浮消息

漂浮消息允许在页面指定位置展示一个消息浮动在已有内容之上。此消息可以设置为自动关闭或者让用户自行决定关闭。漂浮消息不会打断用户当前操作，一般用于提示后台操作，或者针对用户的全局操作作出及时回应。

## 示例

漂浮消息可以设置图标，并且可以决定是否显示关闭按钮。

<div class="example">
  <button class="btn btn-primary show-messager" type="button" data-content="这是一个浮动消息。" data-icon="bell" data-time="100000">显示漂浮消息</button>
</div>

```js
// 点击按钮时显示漂浮消息
$('.btn').on('click', function() {
    new $.zui.Messager('这是一个浮动消息。', {
        icon: 'bell' // 定义消息图标
    }).show();
});
```

## 显示位置

提供7个预设的显示位置。

<div class="example">
  <button class="btn show-messager" type="button" data-content="Hello!" data-icon="heart" data-placement="top">上方</button>
  <button class="btn show-messager" type="button" data-content="Hello!" data-icon="heart" data-placement="bottom">下方</button>
  <button class="btn show-messager" type="button" data-content="Hello!" data-icon="heart" data-placement="top-left">左上</button>
  <button class="btn show-messager" type="button" data-content="Hello!" data-icon="heart" data-placement="top-right">右上</button>
  <button class="btn show-messager" type="button" data-content="Hello!" data-icon="heart" data-placement="bottom-left">左下</button>
  <button class="btn show-messager" type="button" data-content="Hello!" data-icon="heart" data-placement="bottom-right">右下</button>
  <button class="btn show-messager" type="button" data-content="Hello!" data-icon="heart" data-placement="center">中间</button>
</div>

```js
new $.zui.Messager('这是一个浮动消息。', {
    icon: 'heart',
    placement: 'center' // 定义显示位置
}).show();
```

## 颜色主题

提供 8 种预设颜色主题。

<div class="example">
  <style>.messager-example {position: relative; margin-bottom: 10px; cursor: pointer;}</style>
  <div class="messager messager-example messager-default"><div class="messager-content">普通提示消息</div><div class="messager-actions"><button type="button" class="close action">×</button></div></div>
  <div class="messager messager-example messager-primary" data-type="info"><div class="messager-content">提示消息：主要</div><div class="messager-actions"><button type="button" class="close action">×</button></div></div>
  <div class="messager messager-example messager-info" data-type="info"><div class="messager-content"><i class="icon-info-sign"></i> 提示消息：信息</div><div class="messager-actions"><button type="button" class="close action">×</button></div></div>
  <div class="messager messager-example messager-danger" data-type="danger"><div class="messager-content"><i class="icon-exclamation-sign"></i>提示消息：危险</div><div class="messager-actions"><button type="button" class="close action">×</button></div></div>
  <div class="messager messager-example messager-success" data-type="success"><div class="messager-content"><i class="icon-ok-sign"></i> 提示消息：成功</div><div class="messager-actions"><button type="button" class="close action">×</button></div></div>
  <div class="messager messager-example messager-warning" data-type="warning"><div class="messager-content"><i class="icon-warning-sign"></i> 提示消息：警告</div><div class="messager-actions"><button type="button" class="close action">×</button></div></div>
  <div class="messager messager-example messager-important" data-type="important"><div class="messager-content">提示消息：重要</div><div class="messager-actions"><button type="button" class="close action">×</button></div></div>
  <div class="messager messager-example messager-special" data-type="special"><div class="messager-content">提示消息：特别</div><div class="messager-actions"><button type="button" class="close action">×</button></div></div>
</div>

```js
new $.zui.Messager('提示消息：成功', {
    type: 'success' // 定义颜色主题
}).show();
```

## 自定义操作按钮

默认会在右侧显示关闭按钮，如果需要禁用关闭按钮，将 `close` 选项设置为 `false`。

<div class="example">
  <button class="btn btn-primary show-messager" type="button" data-fade="false" data-scale="false" data-content="此消息无法关闭，5秒后自动关闭" data-time="5000" data-close="false">禁用关闭按钮</button>
</div>

```js
new $.zui.Messager('此消息无法关闭，5秒后自动关闭', {
    close: false // 禁用关闭按钮
}).show();
```

通过 `actions` 对象来自定义一组操作。

<div class="example">
  <div class="messager messager-example messager-success" data-type="success" data-actions="{&quot;cancel&quot;: {&quot;icon&quot;: &quot;undo&quot;, &quot;text&quot;: &quot;撤销&quot;}}"><div class="messager-content"><i class="icon-ok-sign"></i> 你的邮件已成功发送。</div><div class="messager-actions"><button type="button" class="action action-cancel"><i class="icon-undo"></i> 撤销</button><button type="button" class="close action">×</button></div></div>
</div>

```js
new $.zui.Messager('你的邮件已成功发送。', {
    type: 'success',
    close: true,
    actions: [{
        name: 'undo',
        icon: 'undo',
        text: '撤销',
        action: function() {  // 点击该操作按钮的回调函数
            console.log('你点击了撤销按钮。');
        }
    }]
});
```

`actions` 参数为一个包含若干个操作定义对象，每个操作定义对象可取的属性值如下：

<table class="table table-bordered">
  <thead>
    <tr>
      <th>属性</th>
      <th>可用值</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`name`</td>
      <td>`'close'`</td>
      <td>该操作的名称，要求为全局唯一的全英文字符串</td>
    </tr>
    <tr>
      <td>`icon`</td>
      <td>`ok-sign`</td>
      <td>该操作的图标</td>
    </tr>
    <tr>
      <td>`text`</td>
      <td>`'确认'`</td>
      <td>操作显示的文本</td>
    </tr>
    <tr>
      <td>`html`</td>
      <td>`'<strong>好</strong>'`</td>
      <td>设置为操作按钮内的 HTML 代码，如果指定该属性，则 `icon` 和 `text` 属性会被忽略</td>
    </tr>
    <tr>
      <td>`action`</td>
      <td>`[function]`</td>
      <td>可选，当点击操作按钮时要调用的回调函数</td>
    </tr>
  </tbody>
</table>

`icon`、`text`、`html` 属性至少需要设置一项，否则操作按钮不可见。

在操作定义对象的操作回调函数 `action` 中返回 `false` 来取消点击操作后的隐藏操作。

```js
new $.zui.Messager('你的邮件已成功发送。', {
    type: 'success',
    close: true,
    actions: [{
        name: 'undo',
        icon: 'undo',
        text: '撤销',
        action: function() {  // 点击该操作按钮的回调函数
            return false; // 通过返回 false 来阻止消息被点击时隐藏
        }
    }]
});
```

如果在 `actions` 内已经定义 `name` 为 `'close'` 的操作，则 `close` 选项会被忽略。

```js
new $.zui.Messager('你的邮件已成功发送。', {
    type: 'success',
    close: true, // 此选项会被忽略，因为已经在 actions 选项中指定了 name 值为 close 的操作
    actions: [{
        name: 'close',
        icon: 'remove'
    }]
});
```

监听点击操作另一个方法是使用 `onAction` 选项。

```
new $.zui.Messager('你的邮件已成功发送。', {
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
            console.log('你点击了撤销按钮。');
        } else if(name === 'close') {
            console.log('你点击了关闭按钮。');
        }
    }
});
```

## 禁用动画效果

<div class="example">
  <button class="btn btn-primary show-messager" type="button" data-fade="false" data-scale="false" data-content="此消息没有动画效果。" data-icon="bell">禁用动画效果</button>
</div>

```js
new $.zui.Messager('此消息没有动画效果。', {
    fade:  false,  // 禁用渐隐效果
    scale: false   // 禁用缩放动画
}).show();
```

## 如何使用

创建一个 `Messager` 实例，并调用 `show()` 和 `hide()` 方法来显示或隐藏消息。

### 创建 Messager 实例

创建 Messager 实例方法调用形式：

 - <strong class="code text-danger">new $.zui.Messager()</strong>
 - <strong class="code text-danger">new $.zui.Messager(message)</strong>
 - <strong class="code text-danger">new $.zui.Messager(options)</strong>
 - <strong class="code text-danger">new $.zui.Messager(message, options)</strong>

参数定义如下：

 - `message`：用于设定要进行显示的消息内容；
 - `options`：初始化选项；

```js
var myMessager = new $.zui.Messager('Hello, messager!', {
    type: 'success'
});
```

### 显示消息

使用 Messager 实例方法 `show()` 来显示消息，该方法可用形式有：

 - <strong class="code text-danger">show()</strong>
 - <strong class="code text-danger">show(message)</strong>
 - <strong class="code text-danger">show(callback)</strong>
 - <strong class="code text-danger">show(message, callback)</strong>

参数定义如下：

 - `message`：用于设定要进行显示的消息内容；
 - `callback`：消息显示之后的回调函数；

```js
// 创建 Messager 实例
var myMessager = new $.zui.Messager({type: 'success'});

myMessager.show('Hello, messager');
```

你可以在任何时候调用 `show()` 方法来显示消息，如果消息已经显示，则会更新所显示的内容。

### 同时显示多条消息

如果你要同时显示多条消息，只需要使用不同的 Messager 实例，然后调用各自的 `show()` 方法即可。

```js
// 创建 Messager 实例
var myMessager1 = new $.zui.Messager('消息一');
var myMessager2 = new $.zui.Messager('消息二');

// 显示消息一
myMessager1.show();

// 显示消息二
myMessager2.show();
```

### 隐藏消息

使用 Messager 实例方法 `hide()` 来隐藏消息，该方法可用形式有：

 - <strong class="code text-danger">hide()</strong>
 - <strong class="code text-danger">hide(callback)</strong>

参数定义如下：

 - `callback`：消息隐藏之后的回调函数；

```js
// 创建 Messger 实例
var myMessager = new $.zui.Messager('Hello, messager!', {
    type: 'success',
    time: 0 // 不进行自动隐藏
});

// 先显示消息
myMessager.show();

// 5 秒之后隐藏消息
setTimeout(function() {
    myMessager.hide();
}, 5000);
```

<table class="table table-bordered">
  <thead>
    <tr><th>方法</th><th>参数</th><th>定义</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>构造函数</td>
      <td>*   `message`，需要显示的消息文本，支持html；
*   `options`一个参数对象，具体参数定义见后续章节。</td>
      <td>创建新的Messager实例。</td>
    </tr>
    <tr>
      <td>`show`</td>
      <td>`message`（可选），在显示时重新设置消息文本。</td>
      <td>立即显示消息</td>
    </tr>
    <tr>
      <td>`hide`</td>
      <td>无</td>
      <td>立即隐藏消息</td>
    </tr>
  </tbody>
</table>

```js
// 使用jQuery对象
var msg = new $.zui.Messager('消息内容', {placement: 'bottom'});

// 显示消息
msg.show();

// 隐藏消息
msg.hide();
```

如果确定消息实例不再使用，可以调用 `destroy()` 方法来销毁消息。

```js
// 销毁消息
myMsg.destroy();
```

### 快速显示

使用 `$.zui.messager` 实例的 `show()` 方法来即时显示一个漂浮消息。

调用`$.zui.messager.show()`或者`$.zui.messager.show()`之后立即显示并返回新创建的`Messager`实例。可以使用返回的实例来手动执行`hide`方法隐藏此消息。

`show()`方法提供两个参数，定义于`Messager`构造函数参数定义相同。

```js
// 使用jQuery对象
var msg = $.zui.messager.show('消息内容', {placement: 'bottom'});

// 隐藏消息
// msg.hide();
```

### 选项

<table class="table table-bordered">
  <thead>
    <tr>
      <th>参数</th>
      <th>可选值</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`type`</td>
      <td>`'default'`(默认)|`'primary'`|`'success'`|`'info'`|`'warning'`|`'danger'`|`'important'`|`'special'`</td>
      <td>不同类型的消息对应使用不同的颜色展示。</td>
    </tr>
    <tr>
      <td>`placement`</td>
      <td>`'top'`(默认)|`'bottom'`|`'top-left'`|`'top-right'`|`'bottom-left'`|`'bottom-right'`|`'center'`</td>
      <td>决定消息显示的位置。</td>
    </tr>
    <tr>
      <td>`time`</td>
      <td>表示时间延迟，单位毫秒，默认为4000</td>
      <td>自显示之后超过此时间设定会自动隐藏消息。如果设置为0则不会自动隐藏。</td>
    </tr>
    <tr>
      <td>`message`</td>
      <td>默认为 `null`</td>
      <td>使用选项来设置要显示的消息。</td>
    </tr>
    <tr>
      <td>`parent`</td>
      <td>`'body'`</td>
      <td>一个jquery选择器，决定消息内容DOM的父节点。</td>
    </tr>
    <tr>
      <td>`icon`</td>
      <td>`null`</td>
      <td>可以额外制定一个图标在消息文本之前显示，图标定义参见“控件&gt;图标”章节。</td>
    </tr>
    <tr>
      <td>`close`</td>
      <td>`true`(默认)|`false`</td>
      <td>如果为`true`，则在消息右侧显示一个关闭按钮，用户可以自行隐藏消息。</td>
    </tr>
    <tr>
      <td>`fade`</td>
      <td>`true`(默认)|`false`</td>
      <td>如果为`true`，则在显示和隐藏消息时使用渐隐渐显的动画效果。</td>
    </tr>
    <tr>
      <td>`scale`</td>
      <td>`true`(默认)|`false`</td>
      <td>如果为`true`，则在显示和隐藏消息时使用缩放的动画效果。</td>
    </tr>
    <tr>
      <td>`actions`</td>
      <td>`[{action...}]`，默认不设置</td>
      <td>使用包含操作定义对象的数组来自定义操作按钮。</td>
    </tr>
    <tr>
      <td>`onAction`</td>
      <td>`function(actionName, action, messager)`，默认不设置</td>
      <td>当点击操作按钮时的回调函数，该回调函数的 `this` 指向当前所点击的按钮，参数定义如下：

*   `actionName`：操作的名称；
*   `action`：操作定义对象；
*   `messager`：当前的漂浮消息实例。</td>
    </tr>
    <tr>
      <td>`cssClass`</td>
      <td>`'my-messager'`，默认不设置</td>
      <td>为 `.messager` 追加额外的 CSS 类</td>
    </tr>
    <tr>
      <td>`contentClass`</td>
      <td>`'my-messager-content'`，默认不设置</td>
      <td>为 `.messager-content` 追加额外的 CSS 类</td>
    </tr>
    <tr>
      <td>`show`</td>
      <td>`true` | `false`(默认)</td>
      <td>是否在初始化之后立即显示消息。</td>
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
