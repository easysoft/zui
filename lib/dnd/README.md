# Drag and Drop

`@zui/dnd` 提供三个基于鼠标事件的原生组件:

- `Draggable`:基于 HTML5 拖放的列表拖拽/放置。
- `Moveable`:通过 `position` / `transform` / `scroll` 策略移动元素。
- `Resizable`:为目标元素生成八向缩放手柄。

> 注意:当前实现基于鼠标事件,仅面向桌面端;触控/指针支持尚未提供。
> 缩放手柄以绝对定位插入目标内部,静态定位的目标会在初始化时被自动设为 `position: relative`。

## Moveable

```html:example
<div id="example2" class="ring -h-48 -w-full -bg-slate-100 -relative z-10">
  <div class="item -w-12 -h-12 primary -cursor-move hover:shadow -absolute -left-14 -top-2" moveable="true">item1</div>
  <div class="item -w-12 -h-12 primary -cursor-move hover:shadow relative -left-2 -top-2" moveable="true">item2</div>
  <div class="item -w-12 -h-12 primary -cursor-move hover:shadow relative -left-2 -top-2" moveable="true">item3</div>
</div>
```

## Resizable

```html:example
<div class="ring -h-[200px] -w-full -bg-slate-100 -relative">
  <div id="resize1" class="item center -w-[100px] -h-[100px] ring canvas hover:shadow -absolute -left-[30px] -top-[30px]" resizable="true">resize1</div>
  <div id="resize2" class="item center -w-[100px] -h-[100px] ring canvas hover:shadow -absolute -left-[230px] -top-[130px]" resizable="true">resize2</div>
  <div id="resize3" class="item center -w-[100px] -h-[100px] ring canvas hover:shadow -fixed -left-[150px] -top-[150px] -z-10" resizable="true">resize3</div>
  <div id="resize4" class="item center -w-[100px] -h-[100px] ring canvas hover:shadow -fixed -right-[150px] -bottom-[150px] -z-10" resizable="true">resize4</div>
</div>
```

## Draggable

```html:example
<menu id="example1" class="col gap-1 p-5">
  <li id="item1" class="item ring p-2 canvas" draggable="true"><strong>Item</strong> 1</li>
  <li id="item2" class="item ring p-2 canvas" draggable="true"><strong>Item</strong> 2</li>
  <li id="item3" class="item ring p-2 canvas" draggable="true"><strong>Item</strong> 3</li>
  <li id="item4" class="item ring p-2 canvas" draggable="true"><strong>Item</strong> 4</li>
  <li id="item5" class="item ring p-2 canvas" draggable="true"><strong>Item</strong> 5</li>
  <li id="item6" class="item ring p-2 canvas" draggable="true"><strong>Item</strong> 6</li>
</menu>
```
