# 分页

## 基础展示

```html:example: flex gap-3 flex-wrap
<div class="pager">
  <button type="button" class="btn previous"><i class="icon icon-angle-left"></i></button>
  <button type="button" class="btn">1</button>
  <button type="button" class="btn active primary">2</button>
  <button type="button" class="btn">3</button>
  <button type="button" class="btn">4</button>
  <button type="button" class="btn next"><i class="icon icon-angle-right"></i></button>
</div>
<div class="pager">
  <button type="button" class="btn">上一页</button>
  <button type="button" class="btn">1</button>
  <button type="button" class="btn active primary">2</button>
  <button type="button" class="btn">3</button>
  <button type="button" class="btn">4</button>
  <button type="button" class="btn">下一页</button>
</div>
<div class="pager">
  <button type="button" class="btn previous"><i class="icon icon-double-angle-left"></i></button>
  <button type="button" class="btn"><i class="icon icon-angle-left"></i></button>
  <button type="button" class="btn">1</button>
  <button type="button" class="btn active primary">2</button>
  <button type="button" class="btn">3</button>
  <button type="button" class="btn">4</button>
  <button type="button" class="btn"><i class="icon icon-angle-right"></i></button>
  <button type="button" class="btn next"><i class="icon icon-double-angle-right"></i></button>
</div>
```

## 简洁样式

```html:example: flex gap-3 flex-wrap
<div class="pager pager-simple">
  <button type="button" class="btn rounded previous"><i class="icon icon-angle-left"></i></button>
  <div class="pager-text"><span>1</span>/<span>4</span></div>
  <button type="button" class="btn rounded next"><i class="icon icon-angle-right"></i></button>
</div>
<div class="pager pager-simple borderless">
  <button type="button" class="btn previous"><i class="icon icon-angle-left"></i></button>
  <div class="pager-text"><span>1</span>/<span>4</span></div>
  <button type="button" class="btn next"><i class="icon icon-angle-right"></i></button>
</div>
```

## 禁用

```html:example: flex gap-3 flex-wrap
<div class="pager">
  <button type="button" class="btn previous"><i class="icon icon-angle-left"></i></button>
  <button type="button" class="btn">1</button>
  <button type="button" class="btn active primary">2</button>
  <button type="button" class="btn disabled">3</button>
  <button type="button" class="btn">4</button>
  <button type="button" class="btn next"><i class="icon icon-angle-right"></i></button>
</div>
```

## 无边框

```html:example:
<div class="pager borderless">
  <button type="button" class="btn previous"><i class="icon icon-angle-left"></i></button>
  <button type="button" class="btn">1</button>
  <button type="button" class="btn active primary">2</button>
  <button type="button" class="btn">3</button>
  <button type="button" class="btn">4</button>
  <button type="button" class="btn next"><i class="icon icon-angle-right"></i></button>
</div>
```

## 宽松样式

```html:example: flex gap-3 flex-wrap
<div class="pager pager-loose gap-x-2">
  <button type="button" class="btn previous"><i class="icon icon-angle-left"></i></button>
  <button type="button" class="btn">1</button>
  <button type="button" class="btn active primary">2</button>
  <button type="button" class="btn">3</button>
  <button type="button" class="btn">4</button>
  <button type="button" class="btn next"><i class="icon icon-angle-right"></i></button>
</div>
<div class="pager pager-loose gap-x-3">
  <button type="button" class="btn circle previous"><i class="icon icon-angle-left"></i></button>
  <button type="button" class="btn circle">1</button>
  <button type="button" class="btn circle active primary">2</button>
  <button type="button" class="btn circle">3</button>
  <button type="button" class="btn circle">4</button>
  <button type="button" class="btn circle next"><i class="icon icon-angle-right"></i></button>
</div>
```

## 带背景色

```html:example: row gap-3 flex-wrap
<div class="pager">
  <button type="button" class="btn lighter-pale previous"><i class="icon icon-angle-left"></i></button>
  <button type="button" class="btn lighter-pale">1</button>
  <button type="button" class="btn lighter-pale active primary">2</button>
  <button type="button" class="btn lighter-pale">3</button>
  <button type="button" class="btn lighter-pale">4</button>
  <button type="button" class="btn lighter-pale next"><i class="icon icon-angle-right"></i></button>
</div>
```

## 两边对齐

```html:example:
<div class="pager justify-between">
  <button type="button" class="btn previous"><i class="icon icon-angle-left"></i></button>
  <button type="button" class="btn next"><i class="icon icon-angle-right"></i></button>
</div>
<div class="pager justify-between">
  <button type="button" class="btn">上一页</button>
  <button type="button" class="btn">下一页</button>
</div>
```

## 尺寸

```html:example: row gap-2
<div class="pager size-sm">
  <button type="button" class="btn previous"><i class="icon icon-angle-left"></i></button>
  <button type="button" class="btn">1</button>
  <button type="button" class="btn active primary">2</button>
  <button type="button" class="btn">3</button>
  <button type="button" class="btn">4</button>
  <button type="button" class="btn next"><i class="icon icon-angle-right"></i></button>
</div>
<div class="pager">
  <button type="button" class="btn previous"><i class="icon icon-angle-left"></i></button>
  <button type="button" class="btn">1</button>
  <button type="button" class="btn active primary">2</button>
  <button type="button" class="btn">3</button>
  <button type="button" class="btn">4</button>
  <button type="button" class="btn next"><i class="icon icon-angle-right"></i></button>
</div>
<div class="pager size-lg">
  <button type="button" class="btn previous"><i class="icon icon-angle-left"></i></button>
  <button type="button" class="btn">1</button>
  <button type="button" class="btn active primary">2</button>
  <button type="button" class="btn">3</button>
  <button type="button" class="btn">4</button>
  <button type="button" class="btn next"><i class="icon icon-angle-right"></i></button>
</div>
```

## 显示总数

```html:example:flex gap-3 flex-wrap
<div class="pager">
  <div class="pager-text">共<span class="font-bold">40</span>项</div>
  <button type="button" class="btn previous"><i class="icon icon-angle-left"></i></button>
  <button type="button" class="btn">1</button>
  <button type="button" class="btn active primary">2</button>
  <button type="button" class="btn">3</button>
  <button type="button" class="btn">4</button>
  <button type="button" class="btn next next"><i class="icon icon-angle-right"></i></button>
</div>
<div class="pager borderless">
  <div class="pager-text">共<span class="font-bold">40</span>项</div>
  <button type="button" class="btn previous"><i class="icon icon-angle-left"></i></button>
  <button type="button" class="btn">1</button>
  <button type="button" class="btn active primary">2</button>
  <button type="button" class="btn">3</button>
  <button type="button" class="btn">4</button>
  <button type="button" class="btn next next"><i class="icon icon-angle-right"></i></button>
</div>
```

## 调整每页显示数

```html:example:flex gap-3 flex-wrap
<div class="pager">
  <div class="dropdown pager-sizes">
    <button class="btn" type="button" data-toggle="dropdown">每页<span class="font-bold">10</span>项<span class="caret"></span></button>
    <ul class="dropdown-menu">
      <li><a>20</a></li>
      <li><a>50</a></li>
      <li><a>100</a></li>
    </ul>
  </div>
  <button type="button" class="btn previous"><i class="icon icon-angle-left"></i></button>
  <button type="button" class="btn">1</button>
  <button type="button" class="btn active primary">2</button>
  <button type="button" class="btn">3</button>
  <button type="button" class="btn">4</button>
  <button type="button" class="btn next"><i class="icon icon-angle-right"></i></button>
</div>
```

## 直接前往

```html:example:flex gap-3 flex-wrap
<div class="pager">
  <button type="button" class="btn previous"><i class="icon icon-angle-left"></i></button>
  <button type="button" class="btn">1</button>
  <button type="button" class="btn active primary">2</button>
  <button type="button" class="btn">3</button>
  <button type="button" class="btn">4</button>
  <button type="button" class="btn next"><i class="icon icon-angle-right"></i></button>
  <div class="pager-jump">
    <span>前往</span>
    <div class="input-control inline-block">
      <input type="text" class="form-control" />
    </div>
    <span>页</span>
  </div>
</div>
```

## 综合展示

```html:example
<div class="pager">
  <div class="pager-text">共<span class="font-bold">40</span>项</div>
  <div class="dropdown pager-sizes">
    <button class="btn" type="button" data-toggle="dropdown">每页<span class="font-bold">10</span>项<span class="caret"></span></button>
    <ul class="dropdown-menu">
      <li><a>20</a></li>
      <li><a>50</a></li>
      <li><a>100</a></li>
    </ul>
  </div>
  <button type="button" class="btn previous"><i class="icon icon-angle-left"></i></button>
  <button type="button" class="btn">1</button>
  <button type="button" class="btn active primary">2</button>
  <button type="button" class="btn">3</button>
  <button type="button" class="btn">4</button>
  <button type="button" class="btn next"><i class="icon icon-angle-right"></i></button>
  <div class="pager-jump">
    <span>前往</span>
    <div class="input-control inline-block">
      <input type="text" class="form-control" />
    </div>
    <span>页</span>
  </div>
</div>
```

