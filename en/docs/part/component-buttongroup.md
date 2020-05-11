section: component
id: buttongroup
description: Multiple button combinations
icon: icon-th-list
filter: anniuzu anz
---

# Button group

## Types

### A group of buttons

Use div.btn-group to include multiple buttons.

<div class="example">
  <div class="btn-group">
    <button type="button" class="btn">left</button>
    <button type="button" class="btn">middle</button>
    <button type="button" class="btn">right</button>
  </div>
</div>

```html
<div class="btn-group">
  <button type="button" class="btn">left</button>
  <button type="button" class="btn">middle</button>
  <button type="button" class="btn">right</button>
</div>
```

### Multiple groups of buttons

Use `div.btn-toolbar` to include `.div.btn-group`.

<div class="example">
  <div class="btn-toolbar" style="margin: 0;">
    <div class="btn-group">
      <button class="btn">Copy</button>
      <button class="btn">Cut</button>
      <button class="btn">Paste</button>
      <button class="btn">Delete</button>
    </div>
    <div class="btn-group">
      <button class="btn"><i class="icon icon-picture"></i></button>
      <button class="btn"><i class="icon icon-file-movie"></i></button>
      <button class="btn"><i class="icon icon-file-text-o"></i></button>
    </div>
    <div class="btn-group">
      <button class="btn"><i class="icon icon-code"></i></button>
    </div>
  </div>
</div>

```html
<div class="btn-toolbar">
  <div class="btn-group">
    <button class="btn"><i class="icon icon-paste"></i></button>
    ...
  </div>
  <div class="btn-group">
    ...
  </div>
  <div class="btn-group">
    ...
  </div>
</div>
```

### Vertical button group

Use `div.btn-group-vertical` to create a vertical button group.

<div class="example">
  <div class="btn-group btn-group-vertical">
    <button type="button" class="btn">Top</button>
    <button type="button" class="btn">Middle</button>
    <button type="button" class="btn">Bottom</button>
  </div>
</div>

```html
<div class="btn-group btn-group-vertical">
  <button type="button" class="btn">Top</button>
  <button type="button" class="btn">Middle</button>
  <button type="button" class="btn">Bottom</button>
</div>
```

## Variation

### Dropdown button group

Place one `.btn-group` in another `.btn-group`.

<div class="example">
  <div class="btn-group">
    <button type="button" class="btn">spring</button>
    <button type="button" class="btn">summer</button>
    <div class="btn-group">
      <button id="btnGroupDrop1" type="button" class="btn dropdown-toggle" data-toggle="dropdown">future <span class="caret"></span></button>
      <ul class="dropdown-menu" role="menu" aria-labelledby="btnGroupDrop1">
        <li><a href="#">fall</a></li>
        <li><a href="#">winter</a></li>
      </ul>
    </div>
  </div>
</div>

```html
<div class="btn-group">
  <button type="button" class="btn">spring</button>
  <button type="button" class="btn">summer</button>
  <div class="btn-group">
    <button id="btnGroupDrop1" type="button" class="btn dropdown-toggle" data-toggle="dropdown">future <span class="caret"></span></button>
    <ul class="dropdown-menu" role="menu" aria-labelledby="btnGroupDrop1">
      <li><a href="#">fall</a></li>
      <li><a href="#">winter</a></li>
    </ul>
  </div>
</div>
```

### Split dropdown button group

It is a variation of a button group. Change the second button in the group to an icon.

<div class="example">
  <div class="btn-group">
    <button type="button" class="btn btn-danger">Action</button>
    <div class="btn-group">
      <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">
        <span class="caret"></span>
        <span class="sr-only">Action</span>
      </button>
      <ul class="dropdown-menu" role="menu">
        <li><a href="#">Edit</a></li>
        <li><a href="#">Delete</a></li>
        <li class="divider"></li>
        <li><a href="#">Cancel</a></li>
      </ul>
    </div>
  </div>
</div>

```html
<div class="btn-group">
  <button type="button" class="btn btn-danger">Action</button>
  <div class="btn-group">
    <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">
      <span class="caret"></span>
      <span class="sr-only">Action</span>
    </button>
    <ul class="dropdown-menu" role="menu">
      <li><a href="#">Edit</a></li>
      <li><a href="#">Delete</a></li>
      <li class="divider"></li>
      <li><a href="#">Cancel</a></li>
    </ul>
  </div>
</div>
```

### Pullup button groups

bydiv.dropupachieve

<div class="example">
  <div class="btn-group dropup">
    <button type="button" class="btn btn-danger">Action</button>
    <div class="btn-group">
      <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">
        <span class="caret"></span>
        <span class="sr-only">Action</span>
      </button>
      <ul class="dropdown-menu" role="menu">
        <li><a href="#">Edit</a></li>
        <li><a href="#">Delete</a></li>
        <li class="divider"></li>
        <li><a href="#">Cancel</a></li>
      </ul>
    </div>
  </div>
</div>

```html
<div class="btn-group dropup">
  <button type="button" class="btn btn-danger">Action</button>
  <div class="btn-group">
    <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">
      <span class="caret"></span>
      <span class="sr-only">Action</span>
    </button>
    <ul class="dropdown-menu" role="menu">
      <li><a href="#">Edit</a></li>
      <li><a href="#">Delete</a></li>
      <li class="divider"></li>
      <li><a href="#">Cancel</a></li>
    </ul>
  </div>
</div>
```

### Size

Use `.btn-lg`, `.btn-sm`, and `.btn-xs` to define the size.

<div class="example">
  <div class="btn-toolbar" style="margin: 0;">
    <div class="btn-group">
      <button type="button" class="btn btn-lg">left</button>
      <button type="button" class="btn btn-lg">middle</button>
      <button type="button" class="btn btn-lg">right</button>
    </div>
    <div class="btn-group">
      <button type="button" class="btn">left</button>
      <button type="button" class="btn">middle</button>
      <button type="button" class="btn">right</button>
    </div>
    <div class="btn-group">
      <button type="button" class="btn btn-sm">left</button>
      <button type="button" class="btn btn-sm">middle</button>
      <button type="button" class="btn btn-sm">right</button>
    </div>
    <div class="btn-group">
      <button type="button" class="btn btn-xs">left</button>
      <button type="button" class="btn btn-xs">middle</button>
      <button type="button" class="btn btn-xs">right</button>
    </div>
  </div>
</div>

```html
<!-- big -->
<div class="btn-group">
  <button type="button" class="btn btn-lg">left</button>
  <button type="button" class="btn btn-lg">middle</button>
  <button type="button" class="btn btn-lg">right</button>
</div>
<!-- Default size -->
<div class="btn-group">
  <button type="button" class="btn">left</button>
  <button type="button" class="btn">middle</button>
  <button type="button" class="btn">right</button>
</div>
<!-- small -->
<div class="btn-group">
  <button type="button" class="btn btn-sm">left</button>
  <button type="button" class="btn btn-sm">middle</button>
  <button type="button" class="btn btn-sm">right</button>
</div>
<!-- Ultra small -->
<div class="btn-group">
  <button type="button" class="btn btn-xs">left</button>
  <button type="button" class="btn btn-xs">middle</button>
  <button type="button" class="btn btn-xs">right</button>
</div>
```

### Colors

<div class="example">
  <div class="btn-group">
    <button type="button" class="btn">default</button>
    <button type="button" class="btn btn-primary">.btn-primary</button>
    <button type="button" class="btn btn-warning">.btn-warning</button>
    <button type="button" class="btn btn-danger">.btn-danger</button>
    <button type="button" class="btn btn-success">.btn-success</button>
    <button type="button" class="btn btn-info">.btn-info</button>
  </div>
</div>

```html
<div class="btn-group">
  <button type="button" class="btn">default</button>
  <button type="button" class="btn btn-primary">.btn-primary</button>
  <button type="button" class="btn btn-warning">.btn-warning</button>
  <button type="button" class="btn btn-danger">.btn-danger</button>
  <button type="button" class="btn btn-success">.btn-success</button>
  <button type="button" class="btn btn-info">.btn-info</button>
</div>
```
