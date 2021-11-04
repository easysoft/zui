section: javascript
id: dropdown
description: Vertical menu floating above the page
icon: icon-align-justify
filter: xialacaidan xlcd
---

# Dropdown

The dropdown is used to pop out a floating menu when the user clicks on an element.

## Structure

Dropdown is composed of a trigger element(e.g. buttons) and a floating(`.dropdown-menu`). You need to add `[data-toggle="dropdown"]` to the trigger element.

Trigger element and floating menu `.dropdown-menu`  are usually placed in the container `.dropdown`. You can also use any elements of `position: relative` as a dropdown container.

### Examples

<example style="height: 164px">
  <div class="dropdown open">
    <button class="btn" type="button">Menu button <span class="caret"></span></button>
    <ul class="dropdown-menu">
      <li><a href="###">Action</a></li>
      <li><a href="###">Another action</a></li>
      <li><a href="###">More operations</a></li>
    </ul>
  </div>
</example>

```html
<div class="dropdown">
  <button class="btn" type="button" data-toggle="dropdown">Menu button <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li><a href="###">Action</a></li>
    <li><a href="###">Another action</a></li>
    <li><a href="###">More operations</a></li>
  </ul>
</div>
```

### Auto unfolding

The dropdown unfolds when the trigger button is clicked. If you want it automatic(unfold when hovered),  add `.dropdown-hover` to `.dropdown`.

<example style="height: 164px">
  <div class="dropdown dropdown-hover">
    <button class="btn" type="button">Hover and unfold dropdown button <span class="caret"></span></button>
    <ul class="dropdown-menu">
      <li><a href="###">Action</a></li>
      <li><a href="###">Another action</a></li>
      <li><a href="###">More actions</a></li>
    </ul>
  </div>
</example>

```html
<div class="dropdown dropdown-hover">
  <button class="btn" type="button" data-toggle="dropdown">Hover and unfold dropdown button <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li><a href="###">Action</a></li>
    <li><a href="###">Another action</a></li>
    <li><a href="###">More actions</a></li>
  </ul>
</div>
```

## Button group

[Button group](#component/buttongroup) `.btn-group` can be used as a parent container, so no additional `.dropdown` is needed.

<example>
  <div class="btn-group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
      Menu button <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" role="menu">
      <li><a href="###">Action</a></li>
      <li><a href="###">Delete</a></li>
      <li class="divider"></li>
      <li><a href="###">Cancel</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-danger">Menu button</button>
    <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" role="menu">
      <li><a href="###">Action</a></li>
      <li><a href="###">Another action</a></li>
      <li class="divider"></li>
      <li><a href="###">More operations</a></li>
    </ul>
  </div>
</example>

```html
<!-- Button group -->
<div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
    Menu button <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" role="menu">
    <li><a href="###">Action</a></li>
    <li><a href="###">Another action</a></li>
    <li class="divider"></li>
    <li><a href="###">More actions</a></li>
  </ul>
</div>
<!-- Split button group -->
<div class="btn-group">
  <button type="button" class="btn btn-danger">Menu button</button>
  <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" role="menu">
    <li><a href="###">Action</a></li>
    <li><a href="###">Delete</a></li>
    <li class="divider"></li>
    <li><a href="###">Cancel</a></li>
  </ul>
</div>
```

Button groups can display multiple dropdown menus in one line.

## Triangle icon

Include `<span class="caret"></span>`  in the dropdown button to display a triangle icon. You can also use [Font icon](#control/icon) to replace it.

<example>
  <button class="btn" type="button">Menu button <span class="caret"></span></button>
  <button class="btn" type="button">Menu button <i class="icon-caret-down"></i></button>
  <button class="btn" type="button">More <i class="icon-ellipsis-v"></i></button>
</example>

```html
<button class="btn" type="button">Menu button <span class="caret"></span></button>
```

```html
<button class="btn" type="button">Menu button <i class="icon-caret-down"></i></button>
```

```html
<button class="btn" type="button">More <i class="icon-ellipsis-v"></i></button>
```

## Headers and dividers

In `.dropdown-menu`, use `.dropdown-header` to display the header and `.divider`, the dividing line.

<example style="height: 230px">
  <div class="dropdown open">
    <button class="btn" type="button">Menu button <span class="caret"></span></button>
    <ul class="dropdown-menu">
      <li class="dropdown-header">Dropdown menu header</li>
      <li><a href="###">Action</a></li>
      <li><a href="###">Another action</a></li>
      <li class="divider"></li>
      <li class="dropdown-header">More actions</li>
      <li><a href="###">Modify</a></li>
    </ul>
  </div>
</example>

```html
<div class="dropdown open">
  <button class="btn" type="button" data-toggle="dropdown">Menu button <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li class="dropdown-header">Dropdown header</li>
    <li><a href="###">Action</a></li>
    <li><a href="###">Another action</a></li>
    <li class="divider"></li>
    <li class="dropdown-header">More actions</li>
    <li><a href="###">Modify</a></li>
  </ul>
</div>
```

## Floating

The dropdown usually pops out under the trigger element. Add `.dropup` to the drop-down menu parent element(`.dropdown` or `.btn-group`) to pop out above the element.

In the horizontal direction, the left side of the dropdown will be aligned with the left side of the trigger element. Add `.pull-right` to `.dorpdown-menu` to align the right side of the dropdown with the right side of the trigger element.

<example>
  <div class="btn-group">
    <button type="button" class="btn dropdown-toggle" data-toggle="dropdown"> Pop down and aligned to the left <span class="caret"></span></button>
    <ul class="dropdown-menu" role="menu">
      <li><a href="###">Action</a></li>
      <li><a href="###">Another action</a></li>
      <li class="divider"></li>
      <li><a href="###">More actions</a></li>
    </ul>
  </div>
  <div class="btn-group dropup">
    <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">Pop up and ligned to the left <span class="caret"></span></button>
    <ul class="dropdown-menu" role="menu">
      <li><a href="###">Action</a></li>
      <li><a href="###">Another action</a></li>
      <li class="divider"></li>
      <li><a href="###">More actions</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">Pop down and aligned to the right <span class="caret"></span></button>
    <ul class="dropdown-menu pull-right" role="menu">
      <li><a href="###">Action</a></li>
      <li><a href="###">Another action</a></li>
      <li class="divider"></li>
      <li><a href="###">More actions</a></li>
    </ul>
  </div>
  <div class="btn-group dropup">
    <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">Pop up and aligned to the right <span class="caret"></span></button>
    <ul class="dropdown-menu pull-right" role="menu">
      <li><a href="###">Action</a></li>
      <li><a href="###">Another action</a></li>
      <li class="divider"></li>
      <li><a href="###">More actions</a></li>
    </ul>
  </div>
</example>

```html
<div class="btn-group">
  <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">Pop down and aligned to the left <span class="caret"></span></button>
  <ul class="dropdown-menu" role="menu">
    <li><a href="###">Action</a></li>
    <li><a href="###">Another action</a></li>
    <li class="divider"></li>
    <li><a href="###">More actions</a></li>
  </ul>
</div>
```

```html
<div class="btn-group dropup">
  <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">Pop up and aligned to the left <span class="caret"></span></button>
  <ul class="dropdown-menu" role="menu">
    <li><a href="###">Action</a></li>
    <li><a href="###">Another action</a></li>
    <li class="divider"></li>
    <li><a href="###">More actions</a></li>
  </ul>
</div>
```

```html
<div class="btn-group">
  <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">Pop down and aligned to the right <span class="caret"></span></button>
  <ul class="dropdown-menu pull-right" role="menu">
    <li><a href="###">Action</a></li>
    <li><a href="###">Another action</a></li>
    <li class="divider"></li>
    <li><a href="###">More actions</a></li>
  </ul>
</div>
```

```html
<div class="btn-group dropup">
  <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">Pop up and aligned to the right <span class="caret"></span></button>
  <ul class="dropdown-menu pull-right" role="menu">
    <li><a href="###">Action</a></li>
    <li><a href="###">Another action</a></li>
    <li class="divider"></li>
    <li><a href="###">More acions</a></li>
  </ul>
</div>
```

## Multi-level submenu

`.dropdown-menu` can be added to `<li>` of another `.dropdown-menu` to enable a multi-level submenu. `.dropdown-submenu` has to be added to `<li>`.

In general, the submenu will be displayed on the right side of the menu item, but it can also be displayed on the left by adding `.pull-left` to `.dropdown-menu`.

<example style="height: 210px; padding-left: 140px">
  <div class="dropdown open">
    <button class="btn" type="button" data-toggle="dropdown">Menu button <span class="caret"></span></button>
    <ul class="dropdown-menu">
      <li class="dropdown-submenu">
        <a href="###">Open</a>
        <ul class="dropdown-menu">
          <li><a href="###">Run</a></li>
          <li><a href="###">Open in the terminal</a></li>
          <li><a href="###">Open in the editor</a></li>
        </ul>
      </li>
      <li class="dropdown-submenu">
        <a href="###">A set of actions</a>
        <ul class="dropdown-menu">
          <li class="dropdown-submenu">
            <a href="###">Modify</a>
            <ul class="dropdown-menu">
              <li><a href="###">Edit title</a></li>
              <li><a href="###">Update content</a></li>
              <li><a href="###">Transfer</a></li>
            </ul>
          </li>
          <li class="dropdown-submenu">
            <a href="###">Delete</a>
            <ul class="dropdown-menu">
              <li><a href="###">Move to the recycle bin</a></li>
              <li><a href="###">Delete</a></li>
            </ul>
          </li>
          <li><a href="###">Cancel</a></li>
        </ul>
      </li>
      <li class="dropdown-submenu">
        <a href="###">Another set of operations</a>
        <ul class="dropdown-menu">
          <li><a href="###">Review</a></li>
          <li><a href="###">Plan</a></li>
          <li><a href="###">Close</a></li>
        </ul>
      </li>
      <li class="divider"></li>
      <li class="dropdown-submenu">
        <a href="###">Show on the left</a>
        <ul class="dropdown-menu pull-left">
          <li><a href="###">Copy</a></li>
          <li><a href="###">Paste</a></li>
          <li><a href="###">Cut</a></li>
        </ul>
      </li>
    </ul>
  </div>
</example>

<template class="pre-scrollable linenums"/>

```html
<div class="dropdown">
  <button class="btn" type="button" data-toggle="dropdown">Menu button <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li class="dropdown-submenu">
      <a href="###">Open</a>
      <ul class="dropdown-menu">
        <li><a href="###">Run</a></li>
        <li><a href="###">Open in the terminal</a></li>
        <li><a href="###">Open in the editor</a></li>
      </ul>
    </li>
    <li class="dropdown-submenu">
      <a href="###">Set of operations</a>
      <ul class="dropdown-menu">
        <li class="dropdown-submenu">
          <a href="###">modify</a>
          <ul class="dropdown-menu">
            <li><a href="###">Edit title</a></li>
            <li><a href="###">Update content</a></li>
            <li><a href="###">Transfer</a></li>
          </ul>
        </li>
        <li class="dropdown-submenu">
          <a href="###">Delete</a>
          <ul class="dropdown-menu">
            <li><a href="###">Move to the recycle bin</a></li>
            <li><a href="###">Delete</a></li>
          </ul>
        </li>
        <li><a href="###">Cancel</a></li>
      </ul>
    </li>
    <li class="dropdown-submenu">
      <a href="###">Another set of operations</a>
      <ul class="dropdown-menu">
        <li><a href="###">Review</a></li>
        <li><a href="###">Plan</a></li>
        <li><a href="###">Close</a></li>
      </ul>
    </li>
    <li class="divider"></li>
    <li class="dropdown-submenu">
      <a href="###">Show on the left</a>
      <ul class="dropdown-menu pull-left">
        <li><a href="###">Copy</a></li>
        <li><a href="###">Paste</a></li>
        <li><a href="###">Cut</a></li>
      </ul>
    </li>
  </ul>
</div>
```

## Disabled items

Add `.disabled` to menu items `<li>` to  disable it.

<example style="height: 164px">
  <div class="dropdown open">
    <button class="btn" type="button">Menu button <span class="caret"></span></button>
    <ul class="dropdown-menu">
      <li><a href="###">Action</a></li>
      <li class="disabled"><a href="###">Disabled action</a></li>
    </ul>
  </div>
</example>

```html
<div class="dropdown">
  <button class="btn" type="button" data-toggle="dropdown">Menu button <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li><a href="###">Action</a></li>
    <li class="disabled"><a href="###">Disabled action</a></li>
  </ul>
</div>
```

## Disabled close by click

You can use specific class `not-clear-menu` on elements to skip to close dropdown menu on click.

<example style="height: 164px">
  <div class="dropdown open">
    <button class="btn" type="button" data-toggle="dropdown">Open dropdown-menu to test<span class="caret"></span></button>
    <ul class="dropdown-menu" style="min-width: 200px">
      <li class="not-clear-menu" style="padding: 5px 10px">
        <input class="form-control" type="text" placeholder="Click here will not close the menu">
      </li>
      <li><a href="###">Action</a></li>
    </ul>
  </div>
</example>

```html
<div class="dropdown open">
  <button class="btn" type="button" data-toggle="dropdown">Open dropdown-menu to test <span class="caret"></span></button>
  <ul class="dropdown-menu" style="min-width: 200px">
    <li class="not-clear-menu" style="padding: 5px 10px">
      <input class="form-control" type="text" placeholder="Click here will not close the menu">
    </li>
    <li><a href="###">Action</a></li>
  </ul>
</div>
```

## Custom menus

Use `<ul>` element to enable a dropdown list. You can also replace it with other elements or content.

<example style="height: 260px">
  <div class="dropdown open">
    <button class="btn" type="button" data-toggle="dropdown">Custom dropdown <span class="caret"></span></button>
    <div class="dropdown-menu dropdown-menu-table">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Common actions</th>
            <th>More actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="###">Modify</a></td>
            <td><a href="###">Open</a></td>
          </tr>
          <tr>
            <td><a href="###">Edit</a></td>
            <td><a href="###">Run</a></td>
          </tr>
          <tr>
            <td><a href="###">Delete</a></td>
            <td><a href="###">Debug</a></td>
          </tr>
          <tr>
            <td><a href="###">Mobile</a></td>
            <td><a href="###"></a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</example>

<style>
/* Custom dropdown appearance */
.dropdown-menu-table {
  padding: 0;
  border: none;
}
.dropdown-menu-table .table {
  margin-bottom: 0;
}
.dropdown-menu-table .table td {
  padding: 0;
}
.dropdown-menu-table .table a {
  padding: 8px;
  display: block;
}
.dropdown-menu-table .table a:hover,
.dropdown-menu-table .table a:active,
.dropdown-menu-table .table a:focus {
  background-color: #e5e5e5;
  text-decoration: none;
}
</style>

```html
<div class="dropdown">
  <button class="btn" type="button" data-toggle="dropdown">Custom dropdown <span class="caret"></span></button>
  <div class="dropdown-menu dropdown-menu-table">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Common actions</th>
          <th>More actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><a href="###">Modify</a></td>
          <td><a href="###">Open</a></td>
        </tr>
        <tr>
          <td><a href="###">Edit</a></td>
          <td><a href="###">Run</a></td>
        </tr>
        <tr>
          <td><a href="###">Delete</a></td>
          <td><a href="###">Debug</a></td>
        </tr>
        <tr>
          <td><a href="###">Mobile</a></td>
          <td><a href="###"></a></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

```css
/* Custom dropdown appearance */
.dropdown-menu-table {
  padding: 0;
  border: none;
}
.dropdown-menu-table .table {
  margin-bottom: 0;
}
.dropdown-menu-table .table td {
  padding: 0;
}
.dropdown-menu-table .table a {
  padding: 8px;
  display: block;
}
.dropdown-menu-table .table a:hover,
.dropdown-menu-table .table a:active,
.dropdown-menu-table .table a:focus {
  background-color: #e5e5e5;
  text-decoration: none;
}
```


## In navigation and navigation bar

It is also convenient to use dropdowns in [navigation](#component/nav) and [Navigation bar](#component/navbar). Use `<li>` as a drop-down menu parent container and add `.dropdown` for it.

<example class="example-dropdown-in-navs">
  <div class="row">
    <div class="col-md-4">
      <ul class="nav nav-primary">
        <li class="active"><a href="###">Home</a></li>
        <li><a href="###">Demonstration</a></li>
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="###">Dropdown menu <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="###">Action</a></li>
            <li><a href="###">Another action</a></li>
            <li class="divider"></li>
            <li><a href="###">More actions</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="col-md-4">
      <ul class="nav nav-pills">
        <li class="active"><a href="###">Home</a></li>
        <li><a href="###">Demonstration</a></li>
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="###">Dropdown menu <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="###">Action</a></li>
            <li><a href="###">Another action</a></li>
            <li class="divider"></li>
            <li><a href="###">More actions</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="col-md-4">
      <ul class="nav nav-tabs">
        <li class="active"><a href="###">Home</a></li>
        <li><a href="###">Demonstration</a></li>
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="###">Dropdown menu <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="###">Action</a></li>
            <li><a href="###">Another action</a></li>
            <li class="divider"></li>
            <li><a href="###">More actions</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</example>

<style>
@media (max-width: 767px) {
  .example-dropdown-in-navs .col-md-4 + .col-md-4 {
    margin-top: 20px;
  }
}
</style>

```html
<ul class="nav nav-primary">
  <li class="active"><a href="###">Home</a></li>
  <li><a href="###">Demonstration</a></li>
  <li class="dropdown">
    <a class="dropdown-toggle" data-toggle="dropdown" href="###">Dropdown menu <span class="caret"></span></a>
    <ul class="dropdown-menu">
      <li><a href="###">Action</a></li>
      <li><a href="###">Another action</a></li>
      <li class="divider"></li>
      <li><a href="###">More actions</a></li>
    </ul>
  </li>
</ul>
```
