section: control
id: label
description: 使用标签
icon: icon-tags
filter: biaoqian bq
---

# Label 

## Styles

<div class="example">
  <span class="label">Label</span>
  <span class="label label-primary">Tag</span>
</div>

```html
<span class="label">Label</span>
```

## Colors

<div class="example">
  <span class="label">Default</span>
  <span class="label label-primary">Primary</span>
  <span class="label label-success">Success</span>
  <span class="label label-info">Info</span>
  <span class="label label-warning">Warning</span>
  <span class="label label-danger">Danger</span>
</div>

```html
<span class="label">Default</span>
```

```html
<span class="label label-primary">Primary</span>
```

```html
<span class="label label-success">Success</span>
```

```html
<span class="label label-info">Info</span>
```

```html
<span class="label label-warning">Warning</span>
```

```html
<span class="label label-danger">Danger</span>
```

## Badges

`.label-badge`

<div class="example">
  <span class="label label-badge">12</span> <span class="label label-badge label-primary">Primary</span> <span class="label label-badge label-success">Success</span> <span class="label label-badge label-info">Info</span> <span class="label label-badge label-warning">Warning</span> <span class="label label-badge label-danger">Danger</span>
</div>

```html
<span class="label label-badge">Default</span>
```

```html
<span class="label label-badge label-primary">Primary</span>
```

```html
<span class="label label-badge label-success">Success</span>
```

```html
<span class="label label-badge label-info">Info</span>
```

```html
<span class="label label-badge label-warning">Warning</span>
```

```html
<span class="label label-badge label-danger">Danger</span>
```

### Dots

<div class="example">
  <span class="label label-dot">12</span> <span class="label label-dot label-info">Primary</span> <span class="label label-dot label-info">Success</span> <span class="label label-dot label-info">Info</span> <span class="label label-dot label-warning">Warning</span> <span class="label label-dot label-danger">Danger</span>
</div>

```html
<span class="label label-dot">Default</span>
```

```html
<span class="label label-dot label-primary">Primary</span>
```

```html
<span class="label label-dot label-success">Success</span>
```

```html
<span class="label label-dot label-info">Info</span>
```

```html
<span class="label label-dot label-warning">Warning</span>
```

```html
<span class="label label-dot label-danger">Danger</span>
```

### Outlines

`.label-outline` is used to define the outline of a label.

<div class="example">
  <span class="label label-outline">Default</span>
  <span class="label label-primary label-outline">Primary</span>
  <span class="label label-success label-outline">Success</span>
  <span class="label label-info label-outline">Info</span>
  <span class="label label-warning label-outline">Warning</span>
  <span class="label label-danger label-outline">Danger</span>
</div>

```html
<span class="label label-primary label-outline">Primary</span>
```

<div class="example">
  <span class="label label-badge label-outline">Default</span>
  <span class="label label-badge label-primary label-outline">Primary</span>
  <span class="label label-badge label-success label-outline">Success</span>
  <span class="label label-badge label-info label-outline">Info</span>
  <span class="label label-badge label-warning label-outline">Warning</span>
  <span class="label label-badge label-danger label-outline">Danger</span>
</div>

```html
<span class="label label-badge label-primary label-outline">Primary</span>
```

<div class="example">
  <span class="label label-dot label-outline">Default</span>
  <span class="label label-dot label-primary label-outline">Primary</span>
  <span class="label label-dot label-success label-outline">Success</span>
  <span class="label label-dot label-info label-outline">Info</span>
  <span class="label label-dot label-warning label-outline">Warning</span>
  <span class="label label-dot label-danger label-outline">Danger</span>
</div>

```html
<span class="label label-dot label-primary label-outline">Primary</span>
```

### Button Badges

<div class="example">
  <button class="btn">My Messages <span class="label label-badge">12</span></button>
  <button class="btn">Bugs <span class="label label-badge label-primary">12</span></button> <button class="btn">Bugs
  <span class="label label-badge label-success">12</span></button>
  <button class="btn">Bugs <span class="label label-badge label-info">12</span></button> <button class="btn">Bugs
  <span class="label label-badge label-warning">12</span></button>
  <button class="btn">Bugs <span class="label label-badge label-danger">12</span></button>
  <br>
  <br>
  <button class="btn btn-primary">Contacts <span class="label label-badge">12</span></button> <button class="btn btn-success">Contact
  <span class="label label-badge">12</span></button> <button class="btn btn-info">Contacts <span class="label label-badge">12</span></button>
  <button class="btn btn-warning">Contacts <span class="label label-badge">12</span></button> <button class="btn btn-danger">Contacts
  <span class="label label-badge">12</span></button>
  <br>
  <br>
  <button class="btn">Lists <span class="label label-dot">12</span></button>
  <button class="btn">Bugs <span class="label label-dot label-primary">12</span></button> <button class="btn">Bugs
  <span class="label label-dot label-success">12</span></button> <button class="btn">Bugs <span class="label label-dot label-info">12</span></button>
  <button class="btn">Bugs <span class="label label-dot label-warning">12</span></button> <button class="btn">Bugs
  <span class="label label-dot label-danger">12</span></button>
  <br>
  <br>
  <button class="btn btn-primary">Contacts <span class="label label-dot">12</span></button> <button class="btn btn-success">Contacts
  <span class="label label-dot">12</span></button> <button class="btn btn-info">Contacts <span class="label label-dot">12</span></button>
  <button class="btn btn-warning">Contacts <span class="label label-dot">12</span></button> <button class="btn btn-danger">Contacts
  <span class="label label-dot">12</span></button>
</div>

```html
<button class="btn">Lists <span class="label label-badge">12</span></button>
```

### Badges and Buttons in a List

<div class="example">
  <div class="list-group">
    <a href="#" class="list-group-item">Project <span class="label label-success">New</span></a>
    <a href="#" class="list-group-item">todo</a>
    <a href="#" class="list-group-item">story<span class="label label-badge label-primary">3 stories</span></a>
    <a href="#" class="list-group-item">task<span class="label label-info label-badge pull-right">10 tasks</span></a>
    <a href="#" class="list-group-item">bug <span class="label label-badge label-warning">2 bugs</span></a>
    <a href="#" class="list-group-item">case <span class="label label-badge label-danger pull-right">100+</span></a>
  </div>
</div>

```html
<div class="list-group">
  <a href="#" class="list-group-item">Project <span class="label label-success">New</span></a>
  ...
```
