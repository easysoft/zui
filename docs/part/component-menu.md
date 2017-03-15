section: component
id: menu
description: 垂直方向的导航菜单
icon: icon-list-ul
filter: chuizhicaidan czcd
---

# 垂直菜单

<div class="alert alert-primary">
  <h4>重要提示</h4>
  <p>现已不推荐在树形菜单中使用导航 `.nav`（此用法将在 1.7 中移除）。现在可以使用树形菜单 `.tree.tree-menu` 来代替。具体用法参见：<strong>[视图 → 树形菜单 → 树形导航菜单](#view/tree/1)</strong>。</p>
</div>

垂直菜单可以方便的为您的应用创建可折叠的菜单。

## 实例

<div class="example" contenteditable="false">
  <nav class="menu" data-ride="menu" style="width: 200px">
    <button class="btn btn-primary"><i class="icon icon-edit"></i> CREATE</button>
    <button class="btn"><i class="icon icon-cloud-upload"></i> UPLOAD</button>
    <ul class="nav nav-primary">
      <li><a href="javascript:;"><i class="icon icon-th"></i> Dashboard</a></li>
      <li><a href="javascript:;"><i class="icon icon-user"></i> Me</a></li>
      <li class="nav-parent">
        <a href="javascript:;"><i class="icon icon-time"></i> Time</a>
        <ul class="nav">
          <li><a href="javascript:;">Today</a></li>
          <li><a href="javascript:;">Tomarrow</a></li>
          <li><a href="javascript:;">Yestorday</a></li>
          <li><a href="javascript:;">This Week</a></li>
        </ul>
      </li>
      <li><a href="javascript:;"><i class="icon icon-trash"></i> Trash</a></li>
      <li><a href="javascript:;"><i class="icon icon-list-ul"></i> All</a></li>
      <li class="show nav-parent">
        <a href="javascript:;"><i class="icon icon-tasks"></i> Status</a>
        <ul class="nav">
          <li><a href="javascript:;"><i class="icon icon-circle-blank"></i> Ready</a></li>
          <li class="active"><a href="javascript:;"><i class="icon icon-play-sign"></i> Ongoing</a></li>
          <li><a href="javascript:;"><i class="icon icon-ok-sign"></i> Completed</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</div>

```html
<nav class="menu" data-ride="menu" style="width: 200px">
  <button class="btn btn-primary"><i class="icon icon-edit"></i> CREATE</button>
  <button class="btn"><i class="icon icon-cloud-upload"></i> UPLOAD</button>
  <ul class="nav nav-primary">
    <li><a href="javascript:;"><i class="icon icon-th"></i> Dashboard</a></li>
    <li><a href="javascript:;"><i class="icon icon-user"></i> Me</a></li>
    <li class="nav-parent">
      <a href="javascript:;"><i class="icon icon-time"></i> Time</a>
      <ul class="nav">
        <li><a href="javascript:;">Today</a></li>
        <li><a href="javascript:;">Tomarrow</a></li>
        <li><a href="javascript:;">Yestorday</a></li>
        <li><a href="javascript:;">This Week</a></li>
      </ul>
    </li>
    <li><a href="javascript:;"><i class="icon icon-trash"></i> Trash</a></li>
    <li><a href="javascript:;"><i class="icon icon-list-ul"></i> All</a></li>
    <li class="active show nav-parent">
      <a href="javascript:;"><i class="icon icon-tasks"></i> Status</a>
      <ul class="nav">
        <li><a href="javascript:;"><i class="icon icon-circle-blank"></i> Ready</a></li>
        <li class="active"><a href="javascript:;"><i class="icon icon-play-sign"></i> Ongoing</a></li>
        <li><a href="javascript:;"><i class="icon icon-ok-sign"></i> Completed</a></li>
      </ul>
    </li>
  </ul>
</nav>
```

## 激活选中项

你需要手动为 `.menu .nav` 内的菜单项 `<li>` 元素动态增加 `.active` 类来应用激活时的外观。下面以点击即激活为例：

```js
$('.menu .nav').on('click', 'li:not(.nav-parent) > a', function() {
    var $this = $(this);
    $('.menu .nav .active').removeClass('active');
    $this.closest('li').addClass('active');
    $this.closest('.nav-parent').addClass('active');
});
```

<div class="alert">示例中当点击菜单条目并应用高亮样式的效果是为演示方便有意添加的，并非垂直菜单自身交互功能。你仍然可以手动为 <code>.nav</code> 中的 <code>li</code> 添加 <code>.active</code> CLASS 来启用或移除高亮样式效果。</div>

<script>
function afterPageLoad() {
  $('#pageBody .menu').menu();
  $('#pageBody .menu .nav li:not(".nav-parent") a').click(function() {
      var $this = $(this);
      $('.menu .nav .active').removeClass('active');
      $this.closest('li').addClass('active');
      var parent = $this.closest('.nav-parent');
      if(parent.length)
      {
          parent.addClass('active');
      }
  });
}
</script>
