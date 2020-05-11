section: component
id: listgroup
description: Vertical clickable list
icon: icon-reorder
filter: liebiaozu lbz
---

# List group

## Types

<div class="example">
  <ul class="list-group">
    <li class="list-group-item">
      <a href="#">Use ul >li. Only text in the clicking area.</a>
    </li>
    <li class="list-group-item"><a href="#">Todo</a></li>
    <li class="list-group-item"><a href="#">Story</a></li>
    <li class="list-group-item"><a href="#">Task</a></li>
    <li class="list-group-item"><a href="#">Bug</a></li>
    <li class="list-group-item">Example</li>
  </ul>
</div>

```html
<ul class="list-group">
  <li class="list-group-item">
    <a href="#">Project</a>
  </li>
  <li class="list-group-item"><a href="#">Todo</a></li>
  <li class="list-group-item"><a href="#">Story</a></li>
  <li class="list-group-item"><a href="#">Task</a></li>
  <li class="list-group-item"><a href="#">Bug</a></li>
  <li class="list-group-item">Example</li>
</ul>
```

## Link

Directly add `.list-group-item` to `<a>`.

<div class="example">
  <div class="list-group">
    <a href="#" class="list-group-item">Use div > a. A line is the clicking area.</a>
    <a href="#" class="list-group-item">Todo</a>
    <a href="#" class="list-group-item">Story</a>
    <a href="#" class="list-group-item active">Task</a>
    <a href="#" class="list-group-item">Bug</a>
    <a href="#" class="list-group-item">Example</a>
  </div>
</div>

```html
<div class="list-group">
  <a href="#" class="list-group-item">usediv >Project</a>
  <a href="#" class="list-group-item">Todo</a>
  <a href="#" class="list-group-item">Story</a>
  <a href="#" class="list-group-item active">Task</a>
  <a href="#" class="list-group-item">Bug</a>
  <a href="#" class="list-group-item">Example</a>
</div>
```

## Customize lists

<div class="example">
  <div class="list-group">
    <a href="#" class="list-group-item">
      <h4 class="list-group-item-heading">Project</h4>
      <p class="list-group-item-text text-muted">Total 12 new entries</p>
    </a>
    <a href="#" class="list-group-item active">
      <h4 class="list-group-item-heading">Bug</h4>
      <p class="list-group-item-text text-muted">No waiting bugs</p>
    </a>
    <a href="#" class="list-group-item">
      <h4 class="list-group-item-heading">Task</h4>
      <p class="list-group-item-text text-muted"># fix bugs</p>
    </a>
  </div>
</div>

```html
<div class="list-group">
  <a href="#" class="list-group-item">
    <h4 class="list-group-item-heading">Project</h4>
    <p class="list-group-item-text text-muted">Total 12 new entries</p>
  </a>
  <a href="#" class="list-group-item active">
    <h4 class="list-group-item-heading">Bug</h4>
    <p class="list-group-item-text text-muted">No waiting bugs</p>
  </a>
  <a href="#" class="list-group-item">
    <h4 class="list-group-item-heading">Task</h4>
    <p class="list-group-item-text text-muted"># fix bugs</p>
  </a>
</div>
```

<div class="alert">It is not the interaction of the list as shown in the example which is highlighted just for demonstration. You can add  add to <code>.active</code> to <code>.list-group-item</code> to enable or disable the highlight style.</div>

<script>
function afterPageLoad() {
    $('#pageContent').on('click', '.list-group > a.list-group-item', function() {
        var $item = $(this);
        $item.parent().children('.active').removeClass('active');
        $item.addClass('active');
    });
}
</script>
