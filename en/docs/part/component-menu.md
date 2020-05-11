section: component
id: menu
description: Vertical navigation menu
icon: icon-list-ul
filter: chuizhicaidan czcd
---

# Vertical Menu

<div class="alert alert-primary">
  <h4>Attention!</h4>
  <p>It is not recommended to use `.nav` in tree menus. Use `.tree.tree-menu` and refer to <strong>[view → Tree men → Tree avigation menu](#view/tree/1)</strong>.</p>
</div>

Vertical menu makes it easy to create collapsed menus for your application.

## Instance

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

## Activate the selected items

You have to add `.active`  for  `<li>` in `.menu .nav` to apply the appearance when activated. Take the click-to-activate as an example：

```js
$('.menu .nav').on('click', 'li:not(.nav-parent) > a', function() {
    var $this = $(this);
    $('.menu .nav .active').removeClass('active');
    $this.closest('li').addClass('active');
    $this.closest('.nav-parent').addClass('active');
});
```

<div class="alert">It is not the interaction of a vertical menu being higlighted when you click on it. It is for demonstration only. You can add <code>.active</code> to <code>li</code> in  <code>.nav</code> to enable the highlight style.</div>

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
