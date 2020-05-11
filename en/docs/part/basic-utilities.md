section: basic
id: utilities
description: 一些使用的工具类
icon: icon-wrench
filter: fuzhulei fzl
---

# Helper Class

ZUI provides practical helper classes. Although it is convenient to add helper classes, it should also be abused. Please understand

*   Use fewer or no helper classes, if controls or components can do the same thing.
*   Consider defining a control or component, when a large number of helper classes are required for the same scenario.

## Small Font

Use `<small>` or `.small` to make the font one size smaller.

<div class="example">
  <small contenteditable="true">small text</small>
</div>

```html
<small>small text</small>
```

## Font Color

<div class="example">
  <p class="text-muted" contenteditable="true">Lorem ipsum dolor sit amet, consectetur.</p>
  <p class="text-primary" contenteditable="true">Perferendis eveniet ipsa modi nesciunt, vel.</p>
  <p class="text-danger" contenteditable="true">Molestias maxime perspiciatis saepe unde corporis.</p>
  <p class="text-success" contenteditable="true">Culpa eum modi assumenda, velit vitae.</p>
  <p class="text-warning" contenteditable="true">Cumque consequuntur modi fugiat debitis dolorum.</p>
  <p class="text-info" contenteditable="true">Minus nisi consectetur dolorum temporibus
  architecto.</p>
  <p class="text-important" contenteditable="true">Tenetur ullam amet illo sint magni!</p>
  <p class="text-special" contenteditable="true">Sapiente voluptates debitis dolor ipsam libero!</p>
</div>

```html
<p class="text-muted">...</p>
<p class="text-gray">...</p>
```
```html
<p class="text-primary">...</p>
```
```html
<p class="text-danger">...</p>
<p class="text-red">...</p>
```
```html
<p class="text-success">...</p>
<p class="text-green">...</p>
```
```html
<p class="text-warning">...</p>
<p class="text-yellow">...</p>
```
```html
<p class="text-info">...</p>
<p class="text-blue">...</p>
```
```html
<p class="text-important">...</p>
<p class="text-brown">...</p>
```
```html
<p class="text-special">...</p>
<p class="text-purple">...</p>
```

## Background Higlight

<div class="example">
  <p class="hl-default" contenteditable="true">Lorem ipsum dolor sit amet, consectetur.</p>
  <p class="hl-primary" contenteditable="true">Perferendis eveniet ipsa modi nesciunt, vel.</p>
  <p class="hl-danger" contenteditable="true">Molestias maxime perspiciatis saepe unde
  corporis.</p>
  <p class="hl-success" contenteditable="true">Culpa eum modi assumenda, velit vitae.</p>
  <p class="hl-warning" contenteditable="true">Cumque consequuntur modi fugiat debitis
  dolorum.</p>
  <p class="hl-info" contenteditable="true">Minus nisi consectetur dolorum temporibus
  architecto.</p>
  <p class="hl-important" contenteditable="true">Tenetur ullam amet illo sint magni!</p>
  <p class="hl-special" contenteditable="true">Sapiente voluptates debitis dolor ipsam
  libero!</p>
</div>

```html
<p class="hl-default">...</p>
<p class="hl-gray">...</p>
```
```html
<p class="hl-primary">...</p>
```
```html
<p class="hl-danger">...</p>
<p class="hl-red">...</p>
```
```html
<p class="hl-success">...</p>
<p class="hl-green">...</p>
```
```html
<p class="hl-warning">...</p>
<p class="hl-yellow">...</p>
```
```html
<p class="hl-info">...</p>
<p class="hl-blue">...</p>
```
```html
<p class="hl-important">...</p>
<p class="hl-brown">...</p>
```
```html
<p class="hl-special">...</p>
<p class="hl-purple">...</p>
```

## Background Color

<div class="example">
  <p class="bg-default" contenteditable="true">Lorem ipsum dolor sit amet, consectetur.</p>
  <p class="bg-primary" contenteditable="true">Perferendis eveniet ipsa modi nesciunt, vel.</p>
  <p class="bg-danger" contenteditable="true">Molestias maxime perspiciatis saepe unde corporis.</p>
  <p class="bg-success" contenteditable="true">Culpa eum modi assumenda, velit vitae.</p>
  <p class="bg-warning" contenteditable="true">Cumque consequuntur modi fugiat debitis dolorum.</p>
  <p class="bg-info" contenteditable="true">Minus nisi consectetur dolorum temporibus architecto.</p>
  <p class="bg-important" contenteditable="true">Tenetur ullam amet illo sint magni!</p>
  <p class="bg-special" contenteditable="true">Sapiente voluptates debitis dolor ipsam libero!</p>
</div>

```html
<p class="bg-default">...</p>
<p class="bg-black">...</p>
```
```html
<p class="bg-primary">...</p>
```
```html
<p class="bg-danger">...</p>
<p class="bg-red">...</p>
```
```html
<p class="bg-success">...</p>
<p class="bg-green">...</p>
```
```html
<p class="bg-warning">...</p>
<p class="bg-yellow">...</p>
```
```html
<p class="bg-info">...</p>
<p class="bg-blue">...</p>
```
```html
<p class="bg-important">...</p>
<p class="bg-brown">...</p>
```
```html
<p class="bg-special">...</p>
<p class="bg-purple">...</p>
```

## Text Break

Display all the text in one line and hide overflow text. Use `.text-nowrap` or `.nobr`.

```html
<h2 class="text-nowrap">...</h2>
```

## Text Ellipsis 

Display all the text in one line and add an ellipsis at the end of the overflowed text. Use `.text-ellipsis`.

```html
<h2 class="text-ellipsis">...</h2>
```

<div class="alert alert-warning">
  <p>Not supported in all browsers.</p>
</div>

## Padding

Add padding inside an element to make it easier to read. Use `.with-padding`.

Below are examples of using paddings with background colors.

<div class="example">
  <p class="with-padding bg-default" contenteditable="true">Lorem ipsum dolor sit amet,
  consectetur.</p>
  <p class="with-padding bg-primary" contenteditable="true">Perferendis eveniet ipsa modi nesciunt,
  vel.</p>
  <p class="with-padding bg-danger" contenteditable="true">Molestias maxime perspiciatis saepe unde
  corporis.</p>
  <p class="with-padding bg-success" contenteditable="true">Culpa eum modi assumenda, velit vitae.</p>
  <p class="with-padding bg-warning" contenteditable="true">Cumque consequuntur modi fugiat debitis
  dolorum.</p>
  <p class="with-padding bg-info" contenteditable="true">Minus nisi consectetur dolorum temporibus
  architecto.</p>
  <p class="with-padding bg-important" contenteditable="true">Tenetur ullam amet illo sint magni!</p>
  <p class="with-padding bg-special" contenteditable="true">Sapiente voluptates debitis dolor ipsam
  libero!</p>
</div>

```html
<p class="with-padding bg-default">...</p>
<p class="with-padding bg-primary">...</p>
<p class="with-padding bg-danger">...</p>
<p class="with-padding bg-success">...</p>
<p class="with-padding bg-warning">...</p>
<p class="with-padding bg-info">...</p>
<p class="with-padding bg-important">...</p>
<p class="with-padding bg-special">...</p>
```

Use `.no-padding` to remove paddings from elements.

```css
.no-padding {padding: 0!important;}
```

## Close Icon

It is to close an message box or modal.

<div class="example">
  <button type="button" class="close" style="float:none"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
</div>

```html
<button type="button" class="close"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
```

## caret

<div class="example"><span class="caret"></span></div>

```html
<span class="caret"></span>
```

## pull

It is to pull an element to the left or the right.

```html
<div class="pull-left"></div>
<div class="pull-right"></div>
```

CSS

```css
.pull-right {
  float: right !important;
}
.pull-left {
  float: left !important;
}
```

## clearfix

Add this class to enable defined styles, e.g. height, in float elements.

```html
<div class="clearfix">...</div>
```

## center-block

It is to enable a fixed-width element centered in a parent container.

```html
<div class="center-block">...</div>
```

CSS

```css
.center-block {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
```

## text-hide

It is to hide the text within the tags. Usually an image is used to replace the text.

```html
<h1 class="text-hide">Text here will be hidden.</h1>
```

## Hide/Show an element

It provides several helper classes to switch the content displayed.

```css
.hide {
  display: none;
}
.hidden {
  display: none!important;
}
.show {
  display: block;
}
.showing {
  display: block!important;
}
.invisible {
  visibility: hidden;
}
```

`.hidden` and `.showing` are prioritized to prevent being rewritten. `.invisible` is to hide elemenets only, and the space the element taken will not be cleared.
