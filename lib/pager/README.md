# 分页

## 基础展示

```html:example: flex gap-3 flex-wrap
<div class="pager">
  <button type="button" class="btn"><i class="icon icon-angle-left"></i></button>
  <button type="button" class="btn">1</button>
  <button type="button" class="btn active primary">2</button>
  <button type="button" class="btn">3</button>
  <button type="button" class="btn">4</button>
  <button type="button" class="btn"><i class="icon icon-angle-right"></i></button>
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
  <button type="button" class="btn"><i class="icon icon-double-angle-left"></i></button>
  <button type="button" class="btn"><i class="icon icon-angle-left"></i></button>
  <button type="button" class="btn">1</button>
  <button type="button" class="btn active primary">2</button>
  <button type="button" class="btn">3</button>
  <button type="button" class="btn">4</button>
  <button type="button" class="btn"><i class="icon icon-angle-right"></i></button>
  <button type="button" class="btn"><i class="icon icon-double-angle-right"></i></button>
</div>
```

## 禁用

```html:example: flex gap-3 flex-wrap
<div class="pager">
  <button type="button" class="btn"><i class="icon icon-angle-left"></i></button>
  <button type="button" class="btn">1</button>
  <button type="button" class="btn active primary">2</button>
  <button type="button" class="btn disabled">3</button>
  <button type="button" class="btn">4</button>
  <button type="button" class="btn"><i class="icon icon-angle-right"></i></button>
</div>
```

## 无边框

```html:example:
<div class="pager borderless">
  <button type="button" class="btn"><i class="icon icon-angle-left"></i></button>
  <button type="button" class="btn">1</button>
  <button type="button" class="btn active primary">2</button>
  <button type="button" class="btn">3</button>
  <button type="button" class="btn">4</button>
  <button type="button" class="btn"><i class="icon icon-angle-right"></i></button>
</div>
```

## 宽松样式

```html:example: flex gap-3 flex-wrap
<div class="pager gap-2">
  <button type="button" class="btn"><i class="icon icon-angle-left"></i></button>
  <button type="button" class="btn">1</button>
  <button type="button" class="btn active primary">2</button>
  <button type="button" class="btn">3</button>
  <button type="button" class="btn">4</button>
  <button type="button" class="btn"><i class="icon icon-angle-right"></i></button>
</div>
<div class="pager gap-2">
  <button type="button" class="btn circle"><i class="icon icon-angle-left"></i></button>
  <button type="button" class="btn circle">1</button>
  <button type="button" class="btn circle active primary">2</button>
  <button type="button" class="btn circle">3</button>
  <button type="button" class="btn circle">4</button>
  <button type="button" class="btn circle"><i class="icon icon-angle-right"></i></button>
</div>
```

## 宽松带背景色

```html:example: row gap-3 flex-wrap
<div class="pager">
  <button type="button" class="btn lighter-pale"><i class="icon icon-angle-left"></i></button>
  <button type="button" class="btn lighter-pale">1</button>
  <button type="button" class="btn lighter-pale active primary">2</button>
  <button type="button" class="btn lighter-pale">3</button>
  <button type="button" class="btn lighter-pale">4</button>
  <button type="button" class="btn lighter-pale"><i class="icon icon-angle-right"></i></button>
</div>
<div class="pager gap-2">
  <button type="button" class="btn lighter-pale"><i class="icon icon-angle-left"></i></button>
  <button type="button" class="btn lighter-pale">1</button>
  <button type="button" class="btn lighter-pale active primary">2</button>
  <button type="button" class="btn lighter-pale">3</button>
  <button type="button" class="btn lighter-pale">4</button>
  <button type="button" class="btn lighter-pale"><i class="icon icon-angle-right"></i></button>
</div>
```

## 两边对齐

```html:example:
<div class="pager justify-between">
  <button type="button" class="btn"><i class="icon icon-angle-left"></i></button>
  <button type="button" class="btn"><i class="icon icon-angle-right"></i></button>
</div>
<div class="pager justify-between">
  <button type="button" class="btn">上一页</button>
  <button type="button" class="btn">下一页</button>
</div>
<div class="pager justify-between">
  <button type="button" class="btn circle"><i class="icon icon-angle-left"></i></button>
  <button type="button" class="btn"><i class="icon icon-angle-right"></i></button>
</div>
```

## 尺寸

```html:example
<ul class="pager size-sm">
  <li class="previous"><a>&lt;</a></li>
  <li><a>1</a></li>
  <li class="active"><a>2</a></li>
  <li><a>3</a></li>
  <li><a>4</a></li>
  <li><a>5</a></li>
  <li class="next"><a>&gt;</a></li>
</ul>
<ul class="pager">
  <li class="previous"><a>&lt;</a></li>
  <li><a>1</a></li>
  <li class="active"><a>2</a></li>
  <li><a>3</a></li>
  <li><a>4</a></li>
  <li><a>5</a></li>
  <li class="next"><a>&gt;</a></li>
</ul>
<ul class="pager size-lg">
  <li class="previous"><a>&lt;</a></li>
  <li><a>1</a></li>
  <li class="active"><a>2</a></li>
  <li><a>3</a></li>
  <li><a>4</a></li>
  <li><a>5</a></li>
  <li class="next"><a>&gt;</a></li>
</ul>
```

## 附加功能

```html:example:
<div class="flex gap-3 flex-wrap items-center">
  <p class="w-32">显示总数</p>
  <div>
    <ul class="pager pager-nobd">
      <li><p class="pager-total">共<span class="font-bold">1</span>页</p></li>
      <li class="previous"><a>&lt;</a></li>
      <li><a>1</a></li>
      <li class="active"><a>2</a></li>
      <li><a>3</a></li>
      <li><a>4</a></li>
      <li><a>5</a></li>
      <li class="next"><a>&gt;</a></li>
    </ul>
    <ul class="pager">
      <li><p class="pager-total">共<span class="font-bold">1</span>页</p></li>
      <li class="previous"><a>&lt;</a></li>
      <li><a>1</a></li>
      <li class="active"><a>2</a></li>
      <li><a>3</a></li>
      <li><a>4</a></li>
      <li><a>5</a></li>
      <li class="next"><a>&gt;</a></li>
    </ul>
    <ul class="pager pager-loose">
      <li><p class="pager-total">共<span class="font-bold">1</span>页</p></li>
      <li class="previous"><a>&lt;</a></li>
      <li><a>1</a></li>
      <li class="active"><a>2</a></li>
      <li><a>3</a></li>
      <li><a>4</a></li>
      <li><a>5</a></li>
      <li class="next"><a>&gt;</a></li>
    </ul>
  </div>
</div>
<div class="flex gap-3 flex-wrap items-center">
  <p class="w-32">调整每页显示条数</p>
  <ul class="pager pager-nobd">
    <li>
      <div class="dropdown pager-sizes">
        <button class="btn" type="button" data-toggle="dropdown">每页<span class="font-bold">10</span>项<span class="caret"></span></button>
        <ul class="dropdown-menu">
            <li><a>20</a></li>
            <li><a>50</a></li>
            <li><a>100</a></li>
        </ul>
      </div>
    </li>
    <li class="previous"><a>&lt;</a></li>
    <li><a>1</a></li>
    <li class="active"><a>2</a></li>
    <li><a>3</a></li>
    <li><a>4</a></li>
    <li><a>5</a></li>
    <li class="next"><a>&gt;</a></li>
  </ul>
</div>
<div class="flex gap-3 flex-wrap items-center">
  <p class="w-32">直接前往</p>
  <ul class="pager pager-nobd">
    <li class="previous"><a>&lt;</a></li>
    <li><a>1</a></li>
    <li class="active"><a>2</a></li>
    <li><a>3</a></li>
    <li><a>4</a></li>
    <li><a>5</a></li>
    <li class="next"><a>&gt;</a></li>
    <li>
      <div class="pager-jump">
        <span>前往</span>
        <div class="input-control inline-block">
          <input type="text" class="form-control" />
        </div>
        <span>页</span>
      </div>
    </li>
  </ul>
</div>
<div class="flex gap-3 flex-wrap items-center">
  <p class="w-32">完整功能</p>
  <ul class="pager pager-nobd">
    <li><p class="pager-total">共<span class="font-bold">1</span>页</p></li>
    <li>
      <div class="dropdown pager-sizes">
        <button class="btn" type="button" data-toggle="dropdown">每页<span class="font-bold">10</span>项<span class="caret"></span></button>
        <ul class="dropdown-menu">
            <li><a>20</a></li>
            <li><a>50</a></li>
            <li><a>100</a></li>
        </ul>
      </div>
    </li>
    <li class="previous"><a>&lt;</a></li>
    <li><a>1</a></li>
    <li class="active"><a>2</a></li>
    <li><a>3</a></li>
    <li><a>4</a></li>
    <li><a>5</a></li>
    <li class="next"><a>&gt;</a></li>
    <li>
      <div class="pager-jump">
        <span>前往</span>
        <div class="input-control inline-block">
          <input type="text" class="form-control" />
        </div>
        <span>页</span>
      </div>
    </li>
  </ul>
</div>
```

