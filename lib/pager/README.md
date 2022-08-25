# 分页

## 基础展示

```html:example: flex gap-3 flex-wrap
<ul class="pager">
  <li class="previous"><a><</a></li>
  <li><a>1</a></li>
  <li class="active"><a>2</a></li>
  <li><a>3</a></li>
  <li><a>4</a></li>
  <li><a>5</a></li>
  <li class="next"><a>></a></li>
</ul>

<ul class="pager">
  <li class="previous"><a>上一页</a></li>
  <li><a>1</a></li>
  <li class="active"><a>2</a></li>
  <li><a>3</a></li>
  <li><a>4</a></li>
  <li><a>5</a></li>
  <li class="next"><a>下一页</a></li>
</ul>

<ul class="pager">
  <li class="previous"><a><i class="icon icon-double-angle-left"></i></a></li>
  <li><a><</a></li>
  <li><a>1</a></li>
  <li class="active"><a>2</a></li>
  <li><a>...</a></li>
  <li><a>4</a></li>
  <li><a>5</a></li>
  <li><a>></a></li>
  <li class="next"><a><i class="icon icon-double-angle-right"></i></a></a></li>
</ul>
```

## 禁用

```html:example: flex gap-3 flex-wrap
<ul class="pager">
  <li class="previous"><a><</a></li>
  <li><a>1</a></li>
  <li class="disabled"><a>2</a></li>
  <li><a>3</a></li>
  <li><a>4</a></li>
  <li><a>5</a></li>
  <li class="next"><a>></a></li>
</ul>
```

## 无边框

```html:example:
<ul class="pager pager-nobd">
  <li class="previous"><a><</a></li>
  <li><a>1</a></li>
  <li class="active"><a>2</a></li>
  <li><a>3</a></li>
  <li><a>4</a></li>
  <li><a>5</a></li>
  <li class="next"><a>></a></li>
</ul>
```

## 宽松样式

```html:example: flex gap-3 flex-wrap
<ul class="pager pager-loose">
  <li class="previous"><a><</a></li>
  <li><a>1</a></li>
  <li><a>2</a></li>
  <li><a>3</a></li>
  <li><a>4</a></li>
  <li><a>5</a></li>
  <li class="next"><a>></a></li>
</ul>
<ul class="pager pager-loose">
  <li class="previous"><a class="rounded-full"><</a></li>
  <li><a class="rounded-full">1</a></li>
  <li><a class="rounded-full">2</a></li>
  <li><a class="rounded-full">3</a></li>
  <li><a class="rounded-full">4</a></li>
  <li><a class="rounded-full">5</a></li>
  <li class="next"><a class="rounded-full">></a></li>
</ul>
```

## 宽松带背景色

```html:example:
<ul class="pager pager-loose pager-bg">
  <li class="previous"><a><</a></li>
  <li><a>1</a></li>
  <li class="active"><a>2</a></li>
  <li><a>3</a></li>
  <li><a>4</a></li>
  <li><a>5</a></li>
  <li class="next"><a>></a></li>
</ul
```

## 两边对齐

```html:example:
<ul class="pager pager-justify">
  <li class="previous"><a>上一页</a></li>
  <li class="next"><a>下一页</a></li>
</ul>
<ul class="pager pager-nobd pager-justify">
  <li class="previous"><a><</a></li>
  <li class="next"><a>></a></li>
</ul>
<ul class="pager pager-bg pager-justify">
  <li class="previous"><a><</a></li>
  <li class="next"><a>></a></li>
</ul>
<ul class="pager pager-justify">
  <li class="previous"><a class="rounded-full"><</a></li>
  <li class="next"><a class="rounded-full">></a></li>
</ul>
```

## 综合分页

```html:example:
<div class="flex gap-3 flex-wrap items-center">
  <p class="w-32">显示总数</p>
  <ul class="pager pager-nobd">
    <li><p class="pager-total">共<span class="font-bold">1</span>页</p></li>
    <li class="previous"><a><</a></li>
    <li><a>1</a></li>
    <li class="active"><a>2</a></li>
    <li><a>3</a></li>
    <li><a>4</a></li>
    <li><a>5</a></li>
    <li class="next"><a>></a></li>
  </ul>
  <ul class="pager">
    <li><p class="pager-total">共<span class="font-bold">1</span>页</p></li>
    <li class="previous"><a><</a></li>
    <li><a>1</a></li>
    <li class="active"><a>2</a></li>
    <li><a>3</a></li>
    <li><a>4</a></li>
    <li><a>5</a></li>
    <li class="next"><a>></a></li>
  </ul>
  <ul class="pager pager-loose">
    <li><p class="pager-total">共<span class="font-bold">1</span>页</p></li>
    <li class="previous"><a><</a></li>
    <li><a>1</a></li>
    <li class="active"><a>2</a></li>
    <li><a>3</a></li>
    <li><a>4</a></li>
    <li><a>5</a></li>
    <li class="next"><a>></a></li>
  </ul>
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
    <li class="previous"><a><</a></li>
    <li><a>1</a></li>
    <li class="active"><a>2</a></li>
    <li><a>3</a></li>
    <li><a>4</a></li>
    <li><a>5</a></li>
    <li class="next"><a>></a></li>
  </ul>
</div>
<div class="flex gap-3 flex-wrap items-center">
  <p class="w-32">直接前往</p>
  <ul class="pager pager-nobd">
    <li class="previous"><a><</a></li>
    <li><a>1</a></li>
    <li class="active"><a>2</a></li>
    <li><a>3</a></li>
    <li><a>4</a></li>
    <li><a>5</a></li>
    <li class="next"><a>></a></li>
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
    <li class="previous"><a><</a></li>
    <li><a>1</a></li>
    <li class="active"><a>2</a></li>
    <li><a>3</a></li>
    <li><a>4</a></li>
    <li><a>5</a></li>
    <li class="next"><a>></a></li>
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

