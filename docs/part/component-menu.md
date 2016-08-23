section: component
id: menu
description: 垂直方向的导航菜单
icon: icon-list-ul
filter: chuizhicaidan czcd
---

# 垂直菜单

垂直菜单可以方便的为您的应用创建可折叠的菜单。

## 实例

<div class="example" contenteditable="false">
  <nav class="menu" data-toggle="menu" style="width: 200px">
    <button class="btn btn-primary"><i class="icon-edit"></i> CREATE</button>
    <button class="btn"><i class="icon-cloud-upload"></i> UPLOAD</button>
    <ul class="nav nav-primary">
      <li><a href="javascript:;"><i class="icon-th"></i> Dashboard</a></li>
      <li><a href="javascript:;"><i class="icon-user"></i> Me</a></li>
      <li class="nav-parent">
        <a href="javascript:;"><i class="icon-time"></i> Time<i class="icon-chevron-right nav-parent-fold-icon"></i></a>
        <ul class="nav">
          <li><a href="javascript:;">Today</a></li>
          <li><a href="javascript:;">Tomarrow</a></li>
          <li><a href="javascript:;">Yestorday</a></li>
          <li><a href="javascript:;">This Week</a></li>
        </ul>
      </li>
      <li><a href="javascript:;"><i class="icon-trash"></i> Trash</a></li>
      <li><a href="javascript:;"><i class="icon-list-ul"></i> All</a></li>
      <li class="active show nav-parent">
        <a href="javascript:;"><i class="icon-tasks"></i> Status<i class="icon-chevron-right nav-parent-fold-icon"></i></a>
        <ul class="nav">
          <li><a href="javascript:;"><i class="icon-circle-blank"></i> Ready</a></li>
          <li class="active"><a href="javascript:;"><i class="icon-play-sign"></i> Ongoing</a></li>
          <li><a href="javascript:;"><i class="icon-ok-sign"></i> Completed</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</div>

```html
<nav class="menu" data-toggle="menu" style="width: 200px">
  <button class="btn btn-primary"><i class="icon-edit"></i> CREATE</button>
  <button class="btn"><i class="icon-cloud-upload"></i> UPLOAD</button>
  <ul class="nav nav-primary">
    <li><a href="#"><i class="icon-th"></i> Dashboard</a></li>
    <li><a href="#"><i class="icon-user"></i> Me</a></li>
    <li>
      <a href="#"><i class="icon-time"></i> Time</a>
      <ul class="nav">
        <li><a href="#">Today</a></li>
        <li><a href="#">Tomarrow</a></li>
        ...
      </ul>
    </li>
    <li><a href="#"><i class="icon-list-ul"></i> All</a></li>
    ...
    <li class="active show">
      <a href="#"><i class="icon-tasks"></i> Status</a>
      <ul class="nav">
        <li><a href="#"><i class="icon-circle-blank"></i> Ready</a></li>
        <li class="active"><a href="#"><i class="icon-play-sign"></i> Ongoing</a></li>
        ...
      </ul>
    </li>
  </ul>
</nav>
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
