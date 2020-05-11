section: component
id: panel
description: Panel with head and foot
icon: icon-list-alt
filter: mianban mb
---

# Panels

## Types

<div class="example">
  <div class="panel">
    <div class="panel-body" contenteditable="">Default .panel is to define basic boundaries and internals to include contents.</div>
  </div>
</div>

```html
<div class="panel">
  <div class="panel-body">
    ...
  </div>
</div>
```

## Panels with headings

<div class="example">
  <div class="panel">
    <div class="panel-heading" contenteditable="">Panel heading</div>
    <div class="panel-body" contenteditable="">Panel content</div>
  </div>
</div>

```html
<div class="panel">
  <div class="panel-heading">
    ...
  </div>
  <div class="panel-body">
    ...
  </div>
</div>
```

## Panels with footers

<div class="example">
  <div class="panel">
    <div class="panel-body" contenteditable="">Panel content</div>
    <div class="panel-footer" contenteditable="">Panel footer</div>
  </div>
</div>

```html
<div class="panel">
  <div class="panel-body">
    ...
  </div>
  <div class="panel-footer">
    ...
  </div>
</div>
```

## Color themes

<div class="example">
  <div class="panel panel-primary">
    <div class="panel-heading" contenteditable="">.panel-primary</div>
    <div class="panel-body"  contenteditable="">Panel content</div>
  </div>
  <div class="panel panel-success">
    <div class="panel-heading" contenteditable="">.panel-success</div>
    <div class="panel-body"  contenteditable="">Panel content</div>
  </div>
  <div class="panel panel-warning">
    <div class="panel-heading" contenteditable="">.panel-warning</div>
    <div class="panel-body"  contenteditable="">Panel content</div>
  </div>
  <div class="panel panel-danger">
    <div class="panel-heading" contenteditable="">.panel-danger</div>
    <div class="panel-body"  contenteditable="">Panel content</div>
  </div>
  <div class="panel panel-info">
    <div class="panel-heading" contenteditable="">.panel-info</div>
    <div class="panel-body"  contenteditable="">Panel content</div>
  </div>
</div>

```html
<div class="panel panel-primary">
  ...
</div>
```

```html
<div class="panel panel-success">
  ...
</div>
```

```html
<div class="panel panel-warning">
  ...
</div>
```

```html
<div class="panel panel-danger">
  ...
</div>
```

```html
<div class="panel panel-info">
  ...
</div>
```

## Forms

<div class="example">
  <div class="panel">
    <div class="panel-heading" contenteditable="">Panel heading</div>
    <table class="table">
      <thead>
        <tr>
          <th>Lorem ipsum.</th>
          <th>Repudiandae, harum!</th>
          <th>Tenetur, corporis.</th>
          <th>Perspiciatis, porro?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Lorem ipsum.</td>
          <td>Officiis, non.</td>
          <td>Molestias, qui.</td>
          <td>Odit, ducimus.</td>
        </tr>
        <tr>
          <td>Lorem ipsum.</td>
          <td>Repellendus, exercitationem!</td>
          <td>Velit, eos.</td>
          <td>Eius, officiis.</td>
        </tr>
        <tr>
          <td>Lorem ipsum.</td>
          <td>Amet, esse!</td>
          <td>Quis, pariatur!</td>
          <td>Totam, quae.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```html
<div class="panel">
  <div class="panel-heading">
    ...
  </div>
  <table class="table">
    ...
  </table>
</div>
```

## Lists

<div class="example">
  <div class="panel">
    <div class="panel-heading">Project</div>
    <ul class="list-group">
      <li class="list-group-item">Todo</li>
      <li class="list-group-item">Story</li>
      <li class="list-group-item">Task</li>
      <li class="list-group-item">Bug</li>
      <li class="list-group-item">Example</li>
    </ul>
  </div>
</div>

```html
<div class="panel">
  <div class="panel-heading">
    ...
  </div>
  <ul class="list-group">
    ...
  </ul>
</div>
```

## Panel group

<div class="example">
  <div class="panel-group">
    <div class="panel">
      <div class="panel-heading">Panel heading</div>
      <div class="panel-body">Panel content</div>
      <div class="panel-footer">Panel footer</div>
    </div>
    <div class="panel">
      <div class="panel-heading">Panel heading</div>
      <div class="panel-body">Panel content</div>
      <div class="panel-footer">Panel footer</div>
    </div>
    <div class="panel">
      <div class="panel-heading">Panel heading</div>
      <div class="panel-body">Panel content</div>
      <div class="panel-footer">Panel footer</div>
    </div>
  </div>
</div>

```html
<div class="panel-group">
  <div class="panel">
    ...
  </div>
  <div class="panel">
    ...
  </div>
  <div class="panel">
    ...
  </div>
  ...
</div>
```
