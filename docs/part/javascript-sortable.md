section: javascript
id: sortable
description: 拖动并排序一组元素
icon: icon-sort
filter: tuofangpaixu tfpx
---

# 拖放排序

拖放排序可以允许用户在目标容器内拖动子元素来排序这些子元素。

<div class="alert alert-danger">
  <h4>不兼容触摸屏</h4>
  <p>无法在触摸屏上完成拖拽功能。</p>
</div>

拖动时会在文档中插入被拖动元素的**影子元素**，会跟随鼠标光标位置，用于指示当前拖动的位置。

## 综合示例

下面的例子中可以通过拖放来重新排序列表组中的项目。

<example>
  <div class="list-group" id="sortableList">
    <div class="list-group-item"><i class="icon-move"></i> 猫咪</div>
    <div class="list-group-item"><i class="icon-move"></i> 小鸡</div>
    <div class="list-group-item"><i class="icon-move"></i> 大黄</div>
    <div class="list-group-item"><i class="icon-move"></i> 鹅鹅鹅</div>
    <div class="list-group-item"><i class="icon-move"></i> 猪王</div>
  </div>
</example>

<style>
#sortableList > .list-group-item {cursor: move}
#sortableList > .list-group-item.dragging {
  visibility: visible;
  opacity: .3;
}
</style>

<script>
$(function() {
    $('#sortableList').sortable();
});
</script>

```html
<div class="list-group" id="sortableList">
  <div class="list-group-item"><i class="icon-move"></i> 猫咪</div>
  <div class="list-group-item"><i class="icon-move"></i> 小鸡</div>
  <div class="list-group-item"><i class="icon-move"></i> 大黄</div>
  <div class="list-group-item"><i class="icon-move"></i> 鹅鹅鹅</div>
  <div class="list-group-item"><i class="icon-move"></i> 猪王</div>
</div>
```

```css
/* 为可拖动的条目应用可移动光标类型 */
#sortableList > .list-group-item {cursor: move}

/* 为正在被拖动的条目应用半透明外观 */
#sortableList > .list-group-item.dragging {
  visibility: visible;
  opacity: .3;
}
```

```javascript
$('#sortableList').sortable();
```

## 选项

在进行初始化时允许传入一个对象或者使用 `[data-*]` 属性参数作为初始化选项。可以使用的选项如下：

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
      <td>`selector`</td>
      <td>可拖动元素选择器</td>
      <td>默认 `'div,li'`</td>
      <td>使用 jQuery 选择器来指定容器内的哪些元素可以被拖动排序。</td>
    </tr>
    <tr>
      <td>`dragCssClass`</td>
      <td>用于被拖动元素的类</td>
      <td>默认 `'invisible'`</td>
      <td>当一个元素正在被拖动时，该选项设置的类会被添加到原元素上。</td>
    </tr>
    <tr>
      <td>`start`</td>
      <td>拖动前回调函数</td>
      <td>默认不设置</td>
      <td>指定一个回调函数在拖动发生前（`mousedown` 事件发生时）调用。</td>
    </tr>
    <tr>
      <td>`order`</td>
      <td>顺序发生变化的回调函数</td>
      <td>默认不设置</td>
      <td>指定一个回调函数在拖动元素过程中子元素顺序发生变化时调用。</td>
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

```javascript
// 定义选项对象
var options = {
    selector: '.sortable-item',
    finish: function(e) {
        console.log('排序完成：', e);
    },
    // 设置更多选项...
};

// 初始化时传入选项参数
$('#sortableList').sortable(options)
```


## 处理拖放排序过程

通过选项设置 `start`、`order`、`finish` 的回调函数来处理整个拖动过程，并实时获取拖动的位置。

### <span class="code">start(e)</span>

`start(e)` 回调函数在拖动发生之前调用，用于处理拖动前的操作。

### <span class="code">order(e)</span>

`order(e)` 回调函数在拖动时且子元素发生顺序变化时被调用，该回调函数参数 `e` 包含的属性定义如下：

 - `e.list`：已当前顺序返回所有可拖动元素；
 - `e.element`：当前正在被拖动的元素。

### <span class="code">finish(e)</span>

`finish(e)` 拖动完成时被调用。该回调函数参数 `e` 拥有 `order` 回调函数参数的所有属性。
