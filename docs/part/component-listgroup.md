section: component
id: listgroup
description: 垂直的可点击列表
icon: icon-reorder
filter: liebiaozu lbz
---

# 列表组

## 基本类型

<div class="example">
  <ul class="list-group">
    <li class="list-group-item">
      <a href="#">用ul &gt; li实现，点击区域只有文字</a>
    </li>
    <li class="list-group-item"><a href="#">待办</a></li>
    <li class="list-group-item"><a href="#">需求</a></li>
    <li class="list-group-item"><a href="#">任务</a></li>
    <li class="list-group-item"><a href="#">Bug</a></li>
    <li class="list-group-item">用例</li>
  </ul>
</div>

```html
<ul class="list-group">
  <li class="list-group-item">
    <a href="#">项目</a>
  </li>
  <li class="list-group-item"><a href="#">待办</a></li>
  <li class="list-group-item"><a href="#">需求</a></li>
  <li class="list-group-item"><a href="#">任务</a></li>
  <li class="list-group-item"><a href="#">Bug</a></li>
  <li class="list-group-item">用例</li>
</ul>
```

## 链接

<div class="example">
  <div class="list-group">
    <a href="#" class="list-group-item">用div &gt; a实现，实现整行点击</a>
    <a href="#" class="list-group-item">待办</a>
    <a href="#" class="list-group-item">需求</a>
    <a href="#" class="list-group-item active">任务</a>
    <a href="#" class="list-group-item">Bug</a>
    <a href="#" class="list-group-item">用例</a>
  </div>
</div>

```html
<div class="list-group">
  <a href="#" class="list-group-item">用div >项目</a>
  <a href="#" class="list-group-item">待办</a>
  <a href="#" class="list-group-item">需求</a>
  <a href="#" class="list-group-item active">任务</a>
  <a href="#" class="list-group-item">Bug</a>
  <a href="#" class="list-group-item">用例</a>
</div>
```

## 定制列表内容

<div class="example">
  <div class="list-group">
    <a href="#" class="list-group-item">
      <h4 class="list-group-item-heading">项目</h4>
      <p class="list-group-item-text text-muted">共12个新条目</p>
    </a>
    <a href="#" class="list-group-item active">
      <h4 class="list-group-item-heading">Bug</h4>
      <p class="list-group-item-text text-muted">没有未处理的bug</p>
    </a>
    <a href="#" class="list-group-item">
      <h4 class="list-group-item-heading">任务</h4>
      <p class="list-group-item-text text-muted"># 处理bug</p>
    </a>
  </div>
</div>

```html
<div class="list-group">
  <a href="#" class="list-group-item">
    <h4 class="list-group-item-heading">项目</h4>
    <p class="list-group-item-text text-muted">共12个新条目</p>
  </a>
  <a href="#" class="list-group-item active">
    <h4 class="list-group-item-heading">Bug</h4>
    <p class="list-group-item-text text-muted">没有未处理的bug</p>
  </a>
  <a href="#" class="list-group-item">
    <h4 class="list-group-item-heading">任务</h4>
    <p class="list-group-item-text text-muted"># 处理bug</p>
  </a>
</div>
```

<div class="alert">示例中当点击列表组条目并应用高亮样式的效果是为演示方便有意添加的，并非列表自身交互功能。你仍然可以手动为 <code>.list-group-item</code> 添加 <code>.active</code> CLASS 来启用或移除高亮样式效果。</div>

<script>
function afterPageLoad() {
    $('#pageContent').on('click', '.list-group > a.list-group-item', function() {
        var $item = $(this);
        $item.parent().children('.active').removeClass('active');
        $item.addClass('active');
    });
}
</script>
