section: control
id: header
description: 标题
icon: H1
filter: duojibiaoti djbt
---

# Headings

## Headings

Headings are defined with the `<h1>` to `<h6>` tags which embed contents from important to less important.

<table class="table">
  <thead>
    <tr>
      <th style="width:30%">Example</th>
      <th>Tag</th>
      <th>Pixel</th>
      <th>Note</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><h1>Heading 1</h1></td>
      <td>`<h1>`</td>
      <td>20px</td>
      <td>Only one Heading 1 for one page or within `hgroup`.</td>
    </tr>
    <tr>
      <td><h2>Heading 2</h2></td>
      <td>`<h2>`</td>
      <td>24px</td>
      <td>It is secondary, so multiple Heading 2 can be used on one page.</td>
    </tr>
    <tr>
      <td><h3>Heading 3</h3></td>
      <td>`<h3>`</td>
      <td>16px bold</td>
      <td>It is embeded in Heading 2.</td>
    </tr>
    <tr>
      <td><h4>Heading 4</h4></td>
      <td>`<h4>`</td>
      <td>14px bold</td>
      <td>It is embeded in Heading 3.</td>
    </tr>
    <tr>
      <td><h5>Heading 5</h5></td>
      <td>`<h5>`</td>
      <td>13px bold gray</td>
      <td>It is embeded in Heading 4.</td>
    </tr>
    <tr>
      <td><h6>Heading 6</h6></td>
      <td>`<h6>`</td>
      <td>12px bold gray</td>
      <td>It is embeded in Heading 5.</td>
    </tr>
  </tbody>
</table>

```html
<h1>Heading 1</h1>
```

```html
<h2>Heading 2</h2>
```

```html
<h3>Heading 3</h3>
```

```html
<h4>Heading 4</h4>
```

```html
<h5>Heading 5</h5>
```

```html
<h6>Heading 6</h6>
```

## Subheading

A heading can include a subheading which uses `small`.

<div class="example" contenteditable="true">
  <h1>Heading 1 <small>Subheading</small></h1>
  <h2>Heading 2 <small>Subheading</small></h2>
  <h3>Heading 3 <small>Subheading</small></h3>
  <h4>Heading 4 <small>Subheading</small></h4>
  <h5>Heading 5 <small>Subheading</small></h5>
  <h6>Heading 6 <small>Subheading</small></h6>
</div>

```html
<h1>Heading 1 <small>Subheading</small></h1>
```

```html
<h2>Heading 2 <small>Subheading</small></h2>
```

```html
<h3>Heading 3 <small>Subheading</small></h3>
```

```html
<h4>Heading 4 <small>Subheading</small></h4>
```

```html
<h5>Heading 5 <small>Subheading</small></h5>
```

```html
<h6>Heading 6 <small>Subheading</small></h6>
```

## Underlined Headings

Use `.header-dividing` or `.page-header`to create headings with underlines.

<div class="example" contenteditable="true">
  <h3 class="header-dividing">Heading</h3>
  <div class="page-header">
    <h2><span class="code">.page-header</span></h2>
  </div>
</div>

```html
<h1 class="header-dividing">Heading 1</h1>
```

```html
<div class="page-header">
  <h2><span class="code">.page-header</span></h2>
</div>
```
