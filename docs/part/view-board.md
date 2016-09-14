section: view
id: board
description: 在多个列进行拖放内容
icon: icon-columns
filter: kanban kb
---

# 看板

看板管理多个容器及子条目，允许用户通过拖拽为字条目排序，并将条目从一个容器拖动到另一个容器。

拖动时会在文档中插入被拖动元素的**影子元素**，会跟随鼠标光标位置，用于指示当前拖动的位置。

<div class="alert alert-danger">
  <h4>不兼容触摸屏</h4>
  <p>看板无法在触摸屏上完成拖拽功能。</p>
</div>

## 综合示例

使用鼠标来拖拽项目。

<example class="margin-zero">
  <div class="boards" id="myBoard">
    <div class="board panel panel-primary">
      <div class="panel-heading">
        <strong>未完成</strong>
      </div>
      <div class="panel-body">
        <div class="board-list">
          <div class="board-item">测试</div>
          <div class="board-item">发布</div>
          <div class="board-item">庆祝</div>
          <div class="disable-drop board-item">不可拖拽</div>
        </div>
      </div>
    </div>
    <div class="board panel panel-warning">
      <div class="panel-heading">
        <strong>进行中</strong>
      </div>
      <div class="panel-body">
        <div class="board-list">
          <div class="board-item">设计界面</div>
          <div class="board-item">撰写文档</div>
          <div class="board-item">紧急的任务</div>
        </div>
      </div>
    </div>
    <div class="board panel panel-success">
      <div class="panel-heading">
        <strong>已完成</strong>
      </div>
      <div class="panel-body">
        <div class="board-list">
          <div class="board-item">初步设计</div>
          <div class="board-item">数据库设计</div>
          <div class="board-item">需求整理</div>
        </div>
      </div>
    </div>
  </div>
</example>

<script>
function afterPageLoad() {
  if($.fn.boards) $('#pageContent .boards').boards({drop: function(e){
    $.zui.messager.show(e.element.text() + " 拖放到 " + e.target.closest('.board').find('.panel-heading').text());
  }});
}
</script>

<style>
.board-item.drag-shadow {z-index: 9999}
</style>

```html
<!-- 使用 .boards 类来管理多个 .board -->
<div class="boards" id="myBoards">
  <!-- .board 为单个容器 -->
  <div class="board panel">
    <div class="panel-heading">
      <strong>未完成</strong>
    </div>
    <div class="panel-body">
      <div class="board-list">
        <!-- 使用 .board-item 来标识可以操作的条目 -->
        <div class="board-item">测试</div>
        <div class="board-item">发布</div>
        <div class="board-item">庆祝</div>
        <!-- 为 .board-item 添加 .disabled-dorp 类来禁止移动此条目 -->
        <div class="disable-drop board-item">不可拖拽</div>
      </div>
    </div>
  </div>
  <div class="board panel">
    <div class="panel-heading">
      <strong>进行中</strong>
    </div>
    <div class="panel-body">
      <div class="board-list">
        <div class="board-item">设计界面</div>
        <div class="board-item">撰写文档</div>
        <div class="board-item">紧急的任务</div>
      </div>
    </div>
  </div>
  <div class="board panel">
    <div class="panel-heading">
      <strong>已完成</strong>
    </div>
    <div class="panel-body">
      <div class="board-list">
        <div class="board-item">初步设计</div>
        <div class="board-item">数据库设计</div>
        <div class="board-item">需求整理</div>
      </div>
    </div>
  </div>
</div>
```

```css
/* 保证影子元素一直可见 */
.board-item.drag-shadow {z-index: 9999}
```

```javascript
$('#myBoards').boards({
    drop: function(e){
        $.zui.messager.show(e.element.text() + " 拖放到 " + e.target.closest('.board').find('.panel-heading').text());
    }
});
```

## HTML 结构

为了使得看板交互正常工作，看板使用特定的 CSS 类来标识特定元素，一般情况下看板的 HTML 结构如下：

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

特殊类说明：

 - `.boards`：看板顶层容器；
 - `.board`：标识一个看板容器，应作为 `.boards` 的直接子元素或子元素的后代元素；
 - `.board-list`：看板列表容器，应作为 `.board` 的直接子元素或子元素的后代元素；
 - `.board-item`：看板列表条目，必须为 `.board-list` 的直接子元素；
 - `.disable-drop`：为 `.board-item` 添加 `.disable-drop` 类来禁用此列表条目被拖动；
 - `.board-item-shadow`：当拖动时由程序动态生成的被拖动看板列表条目的影子元素，为 `.board-list` 的直接子元素。

只要保证各个特殊类的层级关系，你可以自由定制自己的看板结构。

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
      <td>`lang`</td>
      <td>界面语言</td>
      <td>
        <ul>
          <li>`null`（默认）</li>
          <li>`'zh-cn'`</li>
          <li>`'zh-tw'`</li>
          <li>`'en'`</li>
        </ul>
      </td>
      <td>指定界面所使用的语言，如果设置为 `null`，则会自动根据 `<html>` 元素上的 `[lang]` 属性来判断语言。</td>
    </tr>
    <tr>
      <td>`langs`</td>
      <td>设定界面各种语言文本</td>
      <td>默认为：<pre><code>{
    'zh_cn': {
        append2end: '移动到末尾'
    },
    'zh_tw': {
        append2end: '移动到末尾'
    },
    'en': {
        append2end: 'Move to the end.'
    }
}</code></pre></td>
      <td>使用此选项来自定义语言。</td>
    </tr>
    <tr>
      <td>`before`</td>
      <td>拖动前回调函数</td>
      <td>默认不设置</td>
      <td>指定一个回调函数在拖动发生前（`mousedown` 事件发生时）调用，在此回调函数中返回 `false` 来取消此次拖动操作。</td>
    </tr>
    <tr>
      <td>`drop`</td>
      <td>拖动并有效放置的回调函数</td>
      <td>默认不设置</td>
      <td>指定一个回调函数在完成移动目标元素时前（`mouseup` 事件发生时）并且已经将目标元素拖动到有效的可放置元素上时调用。</td>
    </tr>
    <tr>
      <td>`droppable`</td>
      <td>设定拖放插件选项</td>
      <td>默认不设置</td>
      <td>指定一个选项来重新设置 [**插件 → 拖放**](#javascript/droppable) 的选项。</td>
    </tr>
  </tbody>
</table>

使用选项：

```javascript
// 定义选项对象
var options = {
    drop: function(e) {
        console.log('成功拖到目标：', e);
    },
    // 设置更多选项...
};

// 初始化时传入选项参数
$('#myBoards').boards(options)
```

## 处理看板交互过程

使用选项 `before` 和 `drop` 的回调函数来处理看板的交互过程。

### <span class="code">before(e)</span>

`before(e)` 回调函数在拖动发生之前调用，用于处理拖动前的操作或者决定取消后续的拖动事件，该回调函数参数 `e` 包含的属性定义如下：

 - `e.event`：鼠标按下时 `mousedown` 事件参数对象；
 - `e.element`：被拖动元素。

在该回调函数中返回 `false` 会取消这次拖动操作，后续相关事件也不会发生。

```javascript
$('#dragBtn').draggable({
    before: function(e) {
        console.log('现在不是拖动的好时机，取消这次拖动操作。');

        // 通过返回 false 来取消这次拖动操作
        return false;
    }
})
```

### <span class="code">drop(e)</span>

`drop(e)` 拖动完成时被调用。该回调函数参数 `e` 包含的属性定义如下：

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

### <span class="code">droppable</span>

看板的拖放实现使用的 [**插件 → 拖放**](#javascript/droppable)。你可以使用 `droppable` 选项来重新设定该插件选项。拖放插件选项定义及用法参见拖放插件文档。

`droppable` 选项中的以下选项不应该被设定，因为这些选项由看板来接管，如果覆盖后可能会导致看板交互无法正常工作的问题：

 - `start`
 - `drag`
 - `drop`
 - `finish`
 - `target`
