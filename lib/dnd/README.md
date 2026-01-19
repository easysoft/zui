# Darg and Drop

## Moveable

```html:example
<div id="example2" class="ring -h-48 -w-full -bg-slate-100 -relative">
  <div class="item -w-12 -h-12 primary -cursor-move hover:shadow -absolute -left-12 -top-0" moveable="true">item1</div>
  <div class="item -w-12 -h-12 primary -cursor-move hover:shadow relative" moveable="true">item2</div>
  <div class="item -w-12 -h-12 primary -cursor-move hover:shadow" moveable="true">item3</div>
</div>
```

## Resizable

```html:example
<div class="ring -h-[200px] -w-full -bg-slate-100 -relative">
  <div id="resize1" class="item -w-[100px] -h-[100px] ring canvas hover:shadow -absolute -left-[30px] -top-[30px]" resiable="true">resize1</div>
  <div id="resize2" class="item -w-[100px] -h-[100px] ring canvas hover:shadow -absolute -right-[30px] -bottom-[30px]" resiable="true">resize2</div>
  <div id="resize3" class="item -w-[100px] -h-[100px] ring canvas hover:shadow -fixed -right-[150px] -top-[150px] -z-10" resiable="true">resize3</div>
  <div id="resize4" class="item -w-[100px] -h-[100px] ring canvas hover:shadow -fixed -left-[150px] -bottom-[150px] -z-10" resiable="true">resize4</div>
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
