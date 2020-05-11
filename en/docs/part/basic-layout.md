# Layout 

The layout container is used to wrap the grid system and page content. It is automatically centered horizontally and has a left and right padding, which work with `.row` to neutralize the margins on the left and right of `.row`.

<div class="alert alert-warning">A layout container has padding, so one container should not wrap another container, which causes extra padding.</div>

ZUI has three types of containers for layouts: responsive, liquid-width, and fixed-width.

## Responsive Container

A responsive container automatically adjusts the width of the container based on the width of the page.

```html
<div class="container">
  ...
</div>
```

## Liquid-width Container

A liquid-width Container is 100% wide all the time and takes 100% width of the parent container.

```html
<div class="container-fluid">
  ...
</div>
```

## Fixed-width Container

A fixed-width Container is fixed. Below are four types of fix-width containers:

<template class="table-auto table-bordered"/>

| Class                 | Width  |
|-----------------------|--------|
| `.container-fixed`    | 1160px |
| `.container-fixed-md` | 960px  |
| `.container-fixed-sm` | 740px  |
| `.container-fixed-xs` | 440px  |

```html
<div class="container-fixed">
  ...
</div>
```
