section: javascript
id: droppable
description: 将内容拖放到另一个容器
icon: icon-external-link
filter: tuofang tf
---

# 拖放

拖放插件帮助你判断用户是否将元素拖动并放置在目标容器上。

拖动时会在文档中插入被拖动元素的**影子元素**，会跟随鼠标光标位置，用于指示当前拖动的位置。

拖放插件不会更改你的元素 DOM 结构，也就是说如果你需要将用户拖动的元素移动到目标容器内，则需要你自己使用 JavaScript 来移动相关 DOM 节点。

<div class="alert alert-danger">
  <h4>兼容性问题</h4>
  <p>在触摸屏上无法支持拖拽功能。</p>
</div>

## 示例

### 简单应用

<example>
  <div class="row" id="droppableContainer">
    <div class="col-sm-3">
      <div class="panel">
        <div class="panel-heading">开始吧</div>
        <div class="panel-body" style="height: 120px; text-align: center; line-height: 80px">
          <button type="button" class="btn btn-danger btn-lg" id="droppableBtn"><i class="icon icon-move"></i> 拖动我</button>
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="panel droppable-target" data-id="1">
        <div class="panel-heading">拖动到这里。</div>
        <div class="panel-body" style="height: 120px">
          <div class="area-name">A</div>
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="panel droppable-target" data-id="2">
        <div class="panel-heading">这里。</div>
        <div class="panel-body" style="height: 120px">
          <div class="area-name">B</div>
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="panel droppable-target" data-id="3">
        <div class="panel-heading">或这里。</div>
        <div class="panel-body" style="height: 120px">
          <div class="area-name">C</div>
        </div>
      </div>
    </div>
  </div>
</example>

<style>
.btn.drag-shadow {
  z-index: 9999; /* 设置影子元素的 z-index，保证在页面顶层显示 */
}
#droppableBtn {
  cursor: move; /* 为被拖动的按钮更改光标类型 */
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
      <div class="panel-heading">开始吧</div>
      <div class="panel-body" style="height: 120px; text-align: center; line-height: 80px">
        <button type="button" class="btn btn-danger btn-lg" id="droppableBtn"><i class="icon icon-move"></i> 拖动我</button>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="panel droppable-target">
      <div class="panel-heading">拖动到这里。</div>
      <div class="panel-body" style="height: 120px">
        <div class="area-name">A</div>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="panel droppable-target">
      <div class="panel-heading">这里。</div>
      <div class="panel-body" style="height: 120px">
        <div class="area-name">B</div>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="panel droppable-target">
      <div class="panel-heading">或这里。</div>
      <div class="panel-body" style="height: 120px">
        <div class="area-name">C</div>
      </div>
    </div>
  </div>
</div>
```

```css
/* 设置影子元素的 z-index，保证在页面顶层显示 */
.btn.drag-shadow { z-index: 9999; }

/* 为被拖动的按钮更改光标类型 */
#droppableBtn { cursor: move; }
```

```js
$('#droppableBtn').droppable({
    target: '.droppable-target',
    start: function() {
        $('#droppableContainer .droppable-target').removeClass('panel-warning').removeClass('panel-success').find('.panel-heading').text('拖动到这里吗？');
    },
    drop: function(event) {
        var msg = '真棒！';
        $('#droppableContainer .droppable-target').removeClass('panel-success').removeClass('panel-warning');
        if(event.target) {
            event.target.addClass('panel-success').find('.panel-heading').text('成功拖到目的地。');
            msg += '成功拖动到区域 ' + event.target.find('.area-name').text();
        }
        $.zui.messager.show(msg);
    },
    drag: function(event) {
        $('#droppableContainer .droppable-target').removeClass('panel-success').removeClass('panel-warning');
        if(event.target) event.target.addClass('panel-warning');
    }
});
```

### 拖放容器内的多个元素

<example>
  <div class="row" id="multiDroppableContainer">
    <div class="col-sm-3">
      <div class="panel">
        <div class="panel-heading">开始吧</div>
        <div class="panel-body" style="height: 150px; text-align: center; line-height: 40px">
          <button type="button" class="btn btn-primary btn-droppable"><i class="icon icon-move"></i> 按钮 #<span class="btn-droppable-id">1</span></button><br>
          <button type="button" class="btn btn-success btn-droppable"><i class="icon icon-move"></i> 按钮 #<span class="btn-droppable-id">2</span></button><br>
          <button type="button" class="btn btn-danger btn-droppable"><i class="icon icon-move"></i> 按钮 #<span class="btn-droppable-id">3</span></button>
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="panel droppable-target" data-id="1">
        <div class="panel-heading">拖动到这里。</div>
        <div class="panel-body" style="height: 150px">
          <div class="area-name">A</div>
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="panel droppable-target" data-id="2">
        <div class="panel-heading">这里。</div>
        <div class="panel-body" style="height: 150px">
          <div class="area-name">B</div>
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="panel droppable-target" data-id="3">
        <div class="panel-heading">或这里。</div>
        <div class="panel-body" style="height: 150px">
          <div class="area-name">C</div>
        </div>
      </div>
    </div>
  </div>
</example>

<style>
#multiDroppableContainer .btn-droppable {
  cursor: move; /* 为被拖动的按钮更改光标类型 */
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
      <div class="panel-heading">开始吧</div>
      <div class="panel-body" style="height: 150px; text-align: center; line-height: 40px">
        <button type="button" class="btn btn-primary btn-droppable"><i class="icon icon-move"></i> 按钮 #<span class="btn-droppable-id">1</span></button><br>
        <button type="button" class="btn btn-success btn-droppable"><i class="icon icon-move"></i> 按钮 #<span class="btn-droppable-id">2</span></button><br>
        <button type="button" class="btn btn-danger btn-droppable"><i class="icon icon-move"></i> 按钮 #<span class="btn-droppable-id">3</span></button>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="panel droppable-target" data-id="1">
      <div class="panel-heading">拖动到这里。</div>
      <div class="panel-body" style="height: 150px">
        <div class="area-name">A</div>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="panel droppable-target" data-id="2">
      <div class="panel-heading">这里。</div>
      <div class="panel-body" style="height: 150px">
        <div class="area-name">B</div>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="panel droppable-target" data-id="3">
      <div class="panel-heading">或这里。</div>
      <div class="panel-body" style="height: 150px">
        <div class="area-name">C</div>
      </div>
    </div>
  </div>
</div>
```

```css
#multiDroppableContainer .btn-droppable {
  cursor: move; /* 为被拖动的按钮更改光标类型 */
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
    selector: '.btn-droppable', // 定义允许拖放的元素
    target: '.droppable-target',
    start: function() {
        $('#multiDroppableContainer .droppable-target').removeClass('panel-warning').removeClass('panel-success').find('.panel-heading').text('拖动到这里吗？');
    },
    drop: function(event) {
        var msg = '真棒！';
        $('#multiDroppableContainer .droppable-target').removeClass('panel-success').removeClass('panel-warning');
        if(event.target) {
            var elementId = event.element.find('.btn-droppable-id').text();
            event.target.addClass('panel-success').find('.panel-heading').text('成功将【按钮#' + elementId + '】拖到目的地。');
            msg += '成功拖动【按钮#' + elementId + '】到区域 ' + event.target.find('.area-name').text();
        }
        $.zui.messager.show(msg);
    },
    drag: function(event) {
        $('#multiDroppableContainer .droppable-target').removeClass('panel-success').removeClass('panel-warning');
        if(event.target) event.target.addClass('panel-warning');
    }
});
```

## 选项

在进行初始化时允许传入一个对象参数作为初始化选项。可以使用的选项如下：

<table class="table table-bordered">
  <thead>
    <tr>
      <th>选项</th>
      <th>名称</th>
      <th>可选值</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`container`</td>
      <td>位置计算容器</td>
      <td>默认 `'body'`</td>
      <td>使用 jQuery 选择器来指定用于计算位置的父级容器。用于父级容器的节点其 `position` 应该为 `'relative'`、`'absolute'`及`'fixed'` 中的一种；如果为 `'static'`，则会在拖动过程中被设置为 `'relative'`；此选项还可以指定为一个回调函数来在每次拖放开始前执行来返回实际的父级容器。</td>
    </tr>
    <tr>
      <td>`selector`</td>
      <td>拖动元素选择器 (1.6+)</td>
      <td>默认 `""`（可选）</td>
      <td>当设置此选项后将 `$()` 选定的元素作为容器，`selector` 选项用于指定容器内的哪些元素可以拖动。</td>
    </tr>
    <tr>
      <td>`handle`</td>
      <td>拖动事件触发元素选择器</td>
      <td>默认为 `null`</td>
      <td>用于选择被拖动元素内部元素的选择器，如果指定该选项，则仅当鼠标在指定的子元素上点按鼠标会触发拖动事件。</td>
    </tr>
    <tr>
      <td>`target`</td>
      <td>定义可放置元素</td>
      <td>必选项，默认 `'.droppable-target'`</td>
      <td>值类型为 jQuery 实例或有效的 jQuery 选择器字符串，也可以设置为一个回调函数来返回可放置元素。</td>
    </tr>
    <tr>
      <td>`mouseButton`</td>
      <td>响应的鼠标按钮</td>
      <td>默认为 `'all'`</td>
      <td>
        <p>所有可响应的鼠标按钮参考 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/button" target="_blank"><code>MouseEvent.button</code></a>：</p>
        <ul>
          <li>`'all'` 或 `-1`：响应所有鼠标按键；</li>
          <li>`'left'` 或 `0`：响应鼠标左键；</li>
          <li>`'middle'` 或 `1`：响应鼠标滚轮（中键）；</li>
          <li>`'right'` 或 `2`：响应鼠标右键。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`flex`</td>
      <td>`true`、`false`（默认）</td>
      <td>是否执行宽松判断</td>
      <td>如果设置为 `true`，当被拖动元素离开其中一个目标放置元素但没有进入下一个目标放置元素之前，仍然认定是放置在离开前的目标放置元素之上。</td>
    </tr>
    <tr>
      <td>`deviation`</td>
      <td>最小移动有效距离</td>
      <td>默认为 `5`</td>
      <td>当鼠标移动的距离在水平方向和垂直方向均小于此值时会忽略拖动判断来提高运行性能。</td>
    </tr>
    <tr>
      <td>`sensorOffsetX`</td>
      <td>水平方向上的额外判断距离</td>
      <td>默认为 `0`</td>
      <td>如果设定了此值，即使当前光标没有进入下一个目标放置元素但在水平方向上小于此值时仍然认定放置有效，增大此值可以提高判断敏感性。</td>
    </tr>
    <tr>
      <td>`sensorOffsetY`</td>
      <td>垂直方向上的额外判断距离</td>
      <td>默认为 `0`</td>
      <td>如果设定了此值，即使当前光标没有进入下一个目标放置元素但在垂直方向上小于此值时仍然认定放置有效，增大此值可以提高判断敏感性。</td>
    </tr>
    <tr>
      <td>`before`</td>
      <td>拖动前回调函数</td>
      <td>默认不设置</td>
      <td>指定一个回调函数在拖动发生前（`mousedown` 事件发生时）调用，在此回调函数中返回 `false` 来取消此次拖动操作。</td>
    </tr>
    <tr>
      <td>`start`</td>
      <td>拖动开始时的回调函数</td>
      <td>默认不设置</td>
      <td>指定一个回调函数在拖动发生前（第一次 `mousemove` 事件发生时）调用并且已经开始拖动时。</td>
    </tr>
    <tr>
      <td>`drag`</td>
      <td>移动时回调函数</td>
      <td>默认不设置</td>
      <td>指定一个回调函数在移动目标元素时前（`mousemove` 事件发生时）调用。</td>
    </tr>
    <tr>
      <td>`beforeDrop`</td>
      <td>决定为有效放置的回调函数</td>
      <td>默认不设置</td>
      <td>在函数内返回 `true` 或 `false` 来决定是否为有效的放置。</td>
    </tr>
    <tr>
      <td>`drop`</td>
      <td>拖动并有效放置的回调函数</td>
      <td>默认不设置</td>
      <td>指定一个回调函数在完成移动目标元素时前（`mouseup` 事件发生时）并且已经将目标元素拖动到有效的可放置元素上时调用。</td>
    </tr>
    <tr>
      <td>`finish`</td>
      <td>拖动完成回调函数</td>
      <td>默认不设置</td>
      <td>指定一个回调函数在拖动完成后（`mouseup` 事件发生时并且已经发生过移动事件 `mousemove`）调用。</td>
    </tr>
    <tr>
      <td>`always`</td>
      <td>操作结束时的回调函数</td>
      <td>默认不设置</td>
      <td>指定一个回调函数在操作完成后（`mouseup` 事件发生时，即使没有发生 `mousemove` 事件）调用。</td>
    </tr>
  </tbody>
</table>

使用选项：

```js
// 定义选项对象
var options = {
    target: '.droppable-target',
    drop: function(e) {
        console.log('成功拖到目标：', e);
    },
    // 设置更多选项...
};

// 初始化时传入选项参数
$('#droppableBtn').droppable(options)
```

## 处理拖放过程

通过选项可以定义多个回调函数来处理拖放过程。在一次拖放过程中，这些回调函数会按照如下顺序被调用。

1. `before`，在此回调函数中返回 `false`，可以取消拖动操作
2. `start`
3. `drag`，拖动过程中会被反复执行
4. `beforeDrop`，在此回调函数返回 `false`，可以取消 `drop` 的调用；
5. `drop`
6. `finish`
7. `always`

当点击了鼠标但没有移动鼠标进行拖动，则只有 `before` 和 `always` 回调函数被调用。

### <span class="code">before(e)</span>

`before(e)` 回调函数在拖动发生之前调用，用于处理拖动前的操作或者决定取消后续的拖动事件，该回调函数参数 `e` 包含的属性定义如下：

 - `e.event`：鼠标按下时 `mousedown` 事件参数对象；
 - `e.element`：被拖动元素。

在该回调函数中返回 `false` 会取消这次拖动操作，后续相关事件也不会发生。

```js
$('#dragBtn').draggable({
    before: function(e) {
        console.log('现在不是拖动的好时机，取消这次拖动操作。');

        // 通过返回 false 来取消这次拖动操作
        return false;
    }
})
```

### <span class="code">start(e)</span>

`start(e)` 回调函数在拖动发生前（第一次 mousemove 事件发生时）调用并且已经开始拖动时被调用。该回调函数参数 `e` 包含的属性定义同 `before` 回调函数参数。

### <span class="code">drag(e)</span>

`drag(e)` 回调函数在移动目标时（每一次 mousemove 事件发生时）被反复调用。该回调函数参数 `e` 包含的属性定义如下：

 - `e.event`：鼠标移动时 `mousemove` 事件参数对象；
 - `e.element`：被拖动元素；
 - `e.target`：如果现在已经被拖到一个可放置的目标元素，则该属性指示该可放置的元素，否则值为 `null`；
 - `e.position`：被拖动元素当前相对父级容器（`container` 指定）的位置；
 - `e.offset`：被拖动元素当前相对于开始拖动时的位置变化；
 - `e.mouseOffset`：当前光标位置相对于当前相对父级容器（`container` 指定）的位置；
 - `e.clickOffset`：当鼠标按下时相对于被拖动元素左上角的位置；
 - `e.isIn`：指示当前被拖动位置是否已经被拖到其中一个可放置元素上；
 - `e.isNew`：指示被拖动元素相对于拖动之前的位置是否被拖到一个新的可放置元素上；
 - `e.selfTarget`：指示当前是否拖到自身所在的位置。

仅当所有可放置元素都被设置了唯一的 `[data-id]` 属性，`isNew` 属性才会正常工作。

### <span class="code">beforeDrop(e)</span>

`beforeDrop(e)` 拖动快完成时被调用，用于干预指示此次拖动是否被拖动到有效的可放置元素上。该回调函数参数 `e` 拥有 `drag` 回调函数参数的所有属性。

在函数内返回 true 或 false 来决定是否为有效的放置。

### <span class="code">drop(e)</span>

`drop(e)` 拖动完成时被调用。该回调函数参数 `e` 拥有 `drag` 回调函数参数的所有属性。

### <span class="code">finish(e)</span>

`finish(e)` 拖动完成时被调用，此时影子元素已被移除。该回调函数参数 `e` 拥有 `drag` 回调函数参数的所有属性。

### <span class="code">always(e)</span>

`always(e)` 点击并弹起鼠标按钮后被调用，无论是否已经发生过拖动操作。当发生了拖动操作过程时，该回调函数参数 `e` 包含的属性定义同 `before` 回调函数参数。如果没有发生拖动操作时，该回调函数包含的属性定义如下：

 - `e.event`：鼠标按下时 `mousedown` 事件参数对象；
 - `e.cancel`：其值为 `true`，指示是否没有发生拖动操作或者拖动操作在 `before` 中被取消。

### <span class="code">$().droppable('destroy')</span>

如果已确定不需要拖放操作，则可以调用 `$().droppable('destroy')` 来销毁拖放插件。销毁之后如果需要重新启用拖放则重新进行初始化即可。

```js
$('#dragDropEles').droppable('destroy');
```

<script>
function afterPageLoad() {
    if(!$.fn.droppable) return;
    $('#droppableBtn').droppable({
        target: '.droppable-target',
        start: function() {
            $('#droppableContainer .droppable-target').removeClass('panel-warning').removeClass('panel-success').find('.panel-heading').text('拖动到这里吗？');
        },
        drop: function(event) {
            var msg = '真棒！';
            $('#droppableContainer .droppable-target').removeClass('panel-success').removeClass('panel-warning');
            if(event.target) {
                event.target.addClass('panel-success').find('.panel-heading').text('成功拖到目的地。');
                msg += '成功拖动到区域 ' + event.target.find('.area-name').text();
            }
            $.zui.messager.show(msg);
        },
        drag: function(event) {
            $('#droppableContainer .droppable-target').removeClass('panel-success').removeClass('panel-warning');
            if(event.target) event.target.addClass('panel-warning');
        }
    });

    $('#multiDroppableContainer').droppable({
        selector: '.btn-droppable', // 定义允许拖放的元素
        target: '.droppable-target',
        start: function() {
            $('#multiDroppableContainer .droppable-target').removeClass('panel-warning').removeClass('panel-success').find('.panel-heading').text('拖动到这里吗？');
        },
        drop: function(event) {
            var msg = '真棒！';
            $('#multiDroppableContainer .droppable-target').removeClass('panel-success').removeClass('panel-warning');
            if(event.target) {
                var elementId = event.element.find('.btn-droppable-id').text();
                event.target.addClass('panel-success').find('.panel-heading').text('成功将【按钮#' + elementId + '】拖到这里。');
                msg += '成功拖动【按钮#' + elementId + '】到区域 ' + event.target.find('.area-name').text();
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
