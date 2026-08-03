# Split

基于 [split.js](https://split.js.org/) 的可拖拽分栏。根元素加 `split` 类，分栏子元素加 `split-cell` 类，对根元素初始化 `Split` 即可。

## 水平分栏（尺寸 + 折叠按钮 + 动画）

`#splitExample1` 由 `dev.ts` 以 `sizes: [50, 125, 'auto', 'auto']`、`toggleBtn: true`、`animation: true` 初始化，并监听 `onDragEnd`。

```html:example
<div class="split border h-24" id="splitExample1">
  <div class="split-cell"></div>
  <div class="split-cell"></div>
  <div class="split-cell"></div>
  <div class="split-cell"></div>
</div>
```

## 垂直分栏

`#splitExample2` 以 `vertical: true`、`toggleBtn: true` 初始化。

```html:example
<div class="split border h-96" id="splitExample2">
  <div class="split-cell"></div>
  <div class="split-cell"></div>
  <div class="split-cell"></div>
</div>
```

## 程序化控制（collapse / expand / toggle）

`#splitExample3` 由 `dev.ts` 初始化，并把下面的按钮接到实例方法上，演示程序化折叠、展开与切换。

```html:example
<div class="mb-2 -flex -gap-1">
  <button class="btn" data-split-collapse="0">collapse(0)</button>
  <button class="btn" data-split-expand="0">expand(0)</button>
  <button class="btn" data-split-toggle="2">toggle(2)</button>
</div>
<div class="split border h-24" id="splitExample3">
  <div class="split-cell"></div>
  <div class="split-cell"></div>
  <div class="split-cell"></div>
</div>
```
