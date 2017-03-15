# 拖动

拖动插件可以方便的允许一个元素在父级容器内通过拖动操作来更改位置。

<div class="alert alert-danger">
  <h4>兼容性问题</h4>
  <p>在触摸屏上无法支持拖拽功能。</p>
</div>

**被拖动的元素需要设置 CSS `position` 为 `absolute`**。当元素被拖动时，其位置是相对文档 `<body>` 来计算的，也可以通过设置 `container` 选项来指定计算位置时所使用的参考元素。

使用 `$().draggable()` 来为被拖动的元素进行初始化。

## 示例

### 简单应用

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
    <button id="draggableBtn" type="button" class="btn btn-primary"><i class="icon-move"></i> <span id="printPosition">拖动我</span></button>
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
            $dragLog.prepend(count++ + ': ' + '[开始] 拖动...\n');
        },
        drag: function(e) {
            $dragLog.prepend(count++ + ': ' + '拖动: pos = ' + JSON.stringify(e.pos) + ', offset = ' + JSON.stringify(e.offset) + '\n');
            $btnPosition.text('(' + e.pos.left + ', ' + e.pos.top + ')');
        },
        finish: function(e) {
            $dragLog.prepend(count++ + ': ' + '[完毕]：pos = ' + JSON.stringify(e.pos) + ', offset = ' + JSON.stringify(e.offset) + '\n');
        }
    });
});
</script>

```html
<div id="draggableBox">
  <pre id="dragLog" class="pre-scrollable">用于输出演示日志信息</pre>
  <button id="draggableBtn" type="button" class="btn btn-primary"><i class="icon-move"></i> <span id="printPosition">拖动我</span></button>
</div>
```

```css
#draggableBox {
    height: 340px;
    background-color: #fafafa;
    position: relative;
}
#draggableBtn {
    position: absolute; /* 被拖动的元素必须设置 position 为 absolute */
    top: 10px;
    left: 10px;
}
```

```js
var count = 0; // 用于标记日志输出顺序
var $dragLog = $('#dragLog');
var $btnPosition = $('#printPosition');
$('#draggableBtn').draggable({
    container: '#draggableBox',
    before: function() {
        $dragLog.prepend(count++ + ': ' + '[开始] 拖动...\n');
    },
    drag: function(e) {
        $dragLog.prepend(count++ + ': ' + '拖动: pos = ' + JSON.stringify(e.pos) + ', offset = ' + JSON.stringify(e.offset) + '\n');
        $btnPosition.text('(' + e.pos.left + ', ' + e.pos.top + ')');
    },
    finish: function(e) {
        $dragLog.prepend(count++ + ': ' + '[完毕]：pos = ' + JSON.stringify(e.pos) + ', offset = ' + JSON.stringify(e.offset) + '\n');
    }
});
```

### 容器内多个元素拖动

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
    <pre id="dragLog2" class="pre-scrollable">用于输出演示日志信息</pre>
    <button type="button" class="btn btn-primary btn-draggable" style="top: 10px; left: 10px;"><i class="icon-move"></i> 按钮 #<span class="btn-draggable-id">1</span></button>
    <button type="button" class="btn btn-danger btn-draggable" style="top: 60px; left: 10px;"><i class="icon-move"></i> 按钮 #<span class="btn-draggable-id">2</span></button>
    <button type="button" class="btn btn-success btn-draggable" style="top: 110px; left: 110px;"><i class="icon-move"></i> 按钮 #<span class="btn-draggable-id">3</span></button>
    <button type="button" class="btn btn-warning btn-draggable" style="top: 160px; left: 210px;"><i class="icon-move"></i> 按钮 #<span class="btn-draggable-id">4</span></button>
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
            $dragLog.prepend(count++ + ': ' + '[开始] 拖动【按钮#' + e.element.find('.btn-draggable-id').text() + '】...\n');
        },
        drag: function(e) {
            $dragLog.prepend(count++ + ': ' + '拖动【按钮#' + e.element.find('.btn-draggable-id').text() + '】: pos = ' + JSON.stringify(e.pos) + ', offset = ' + JSON.stringify(e.offset) + '\n');
        },
        finish: function(e) {
            $dragLog.prepend(count++ + ': ' + '[完毕]【按钮#' + e.element.find('.btn-draggable-id').text() + '】：pos = ' + JSON.stringify(e.pos) + ', offset = ' + JSON.stringify(e.offset) + '\n');
        }
    });
});
</script>

```html
<div id="draggableBox2">
  <pre id="dragLog2" class="pre-scrollable">用于输出演示日志信息</pre>
  <button type="button" class="btn btn-primary btn-draggable" style="top: 10px; left: 10px;"><i class="icon-move"></i> 按钮 #<span class="btn-draggable-id">1</span></button>
  <button type="button" class="btn btn-danger btn-draggable" style="top: 60px; left: 10px;"><i class="icon-move"></i> 按钮 #<span class="btn-draggable-id">2</span></button>
  <button type="button" class="btn btn-success btn-draggable" style="top: 110px; left: 110px;"><i class="icon-move"></i> 按钮 #<span class="btn-draggable-id">3</span></button>
  <button type="button" class="btn btn-warning btn-draggable" style="top: 160px; left: 210px;"><i class="icon-move"></i> 按钮 #<span class="btn-draggable-id">4</span></button>
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
    selector: '.btn-draggable', // 可拖动元素选择器
    before: function(e) {
        $dragLog.prepend(count++ + ': ' + '[开始] 拖动【按钮#' + e.element.find('.btn-draggable-id').text() + '】...\n');
    },
    drag: function(e) {
        $dragLog.prepend(count++ + ': ' + '拖动【按钮#' + e.element.find('.btn-draggable-id').text() + '】: pos = ' + JSON.stringify(e.pos) + ', offset = ' + JSON.stringify(e.offset) + '\n');
    },
    finish: function(e) {
        $dragLog.prepend(count++ + ': ' + '[完毕]【按钮#' + e.element.find('.btn-draggable-id').text() + '】：pos = ' + JSON.stringify(e.pos) + ', offset = ' + JSON.stringify(e.offset) + '\n');
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
      <td>使用 jQuery 选择器来指定用于计算位置的父级容器。用于父级容器的节点其 `position` 应该为 `'relative'`、`'absolute'`及`'fixed'` 中的一种。</td>
    </tr>
    <tr>
      <td>`move`</td>
      <td>是否移动被拖动元素</td>
      <td>`true`（默认）、`false`</td>
      <td>如果设置为 `false`，则拖动目标元素时并不会更改目标元素当前显示的位置，但仍然可以获得鼠标当前拖到的位置信息。</td>
    </tr>
    <tr>
      <td>`selector`</td>
      <td>拖动元素选择器 (1.6+)</td>
      <td>默认为 `""`</td>
      <td>当设置此选项后将 `$()` 选定的元素作为容器，`selector` 选项用于指定容器内的哪些元素可以拖动。</td>
    </tr>
    <tr>
      <td>`handle`</td>
      <td>拖动事件触发元素选择器</td>
      <td>默认为 `null`</td>
      <td>用于选择被拖动元素内部元素的选择器，如果指定该选项，则仅当鼠标在指定的子元素上点按鼠标会触发拖动事件。</td>
    </tr>
    <tr>
      <td>`stopPropagation`</td>
      <td>是否阻止事件冒泡</td>
      <td>`true`、`false`（默认）</td>
      <td>如果设置为 `true`，则拖动发生时与鼠标相关的事件（包括 `mousedown`、`mousemove` 和 `mouseup`）会调用 `event.stopPropagation()` 来阻止事件冒泡。</td>
    </tr>
    <tr>
      <td>`before`</td>
      <td>拖动前回调函数</td>
      <td>默认不设置</td>
      <td>指定一个回调函数在拖动发生前（`mousedown` 事件发生时）调用，在此回调函数中返回 `false` 来取消此次拖动操作。</td>
    </tr>
    <tr>
      <td>`drag`</td>
      <td>移动时回调函数</td>
      <td>默认不设置</td>
      <td>指定一个回调函数在移动目标元素时前（`mousemove` 事件发生时）调用。</td>
    </tr>
    <tr>
      <td>`finish`</td>
      <td>拖动完成回调函数</td>
      <td>默认不设置</td>
      <td>指定一个回调函数在拖动完成后（`mouseup` 事件发生时）调用。</td>
    </tr>
  </tbody>
</table>

使用选项：

```js
// 定义选项对象
var options = {
    container: 'body',
    before: function() {
        console.log('拖动开始...');
    },
    // 设置更多选项...
};

// 初始化时传入选项参数
$('#dragBtn').draggable(options)
```

## 处理拖动过程

通过选项设置 `before`、`drag`、`finish` 的回调函数来处理整个拖动过程，并实时获取拖动的位置。

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

### <span class="code">drag(e)</span>

`drag(e)` 回调函数在拖动时被反复调用，该回调函数参数 `e` 包含的属性定义如下：

 - `e.event`：鼠标移动时 `mousemove` 事件参数对象；
 - `e.element`：被拖动元素；
 - `e.pos`：被拖动元素当前相对父级容器（`container` 指定）的位置；
 - `e.offset`：被拖动元素当前相对于开始拖动时的位置变化；
 - `e.smallOffset`：被拖动元素当前相对于上次位置发生变化时的位置变化；
 - `e.startOffset`：被拖动元素在开始拖动前相对父级容器（`container` 指定）的位置变化。

由于该回调函数会在拖动时反复调用，不应该在此回调函数中进行过多的操作。

### <span class="code">finish(e)</span>

`finish(e)` 回调函数在拖动发生之后调用，用于处理拖动完成后的操作，该回调函数参数 `e` 包含的属性定义如下：

 - `e.event`：鼠标移动时 `mousemove` 事件参数对象；
 - `e.element`：被拖动元素；
 - `e.pos`：被拖动元素当前相对父级容器（`container` 指定）的位置；
 - `e.offset`：被拖动元素当前相对于开始拖动时的位置变化；
 - `e.smallOffset`：被拖动元素当前相对于上次位置发生变化时的位置变化；
 - `e.startOffset`：被拖动元素在开始拖动前相对父级容器（`container` 指定）的位置变化。

### <span class="code">$().draggable('destroy')</span>

如果以确定不需要拖拽操作，则可以调用 `$().draggable('destroy')` 来销毁拖拽插件。销毁之后如果需要重新启用拖拽则重新进行初始化即可。

```js
$('#dragEles').draggable('destroy');
```
