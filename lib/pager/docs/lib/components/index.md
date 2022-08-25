# 分页

## 基本用法

使用组件类 `.pager` 来获得分页的外观展示 通常搭配 `<ul>`，`<li>` 标签来使用。

<Example class="flex gap-3 flex-wrap">
  <ul class="pager">
    <li class="previous"><a>&lt;</a></li>
    <li><a>1</a></li>
    <li class="active"><a>2</a></li>
    <li><a>3</a></li>
    <li><a>4</a></li>
    <li><a>5</a></li>
    <li class="next"><a>&gt;</a></li>
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
    <li><a>&lt;</a></li>
    <li><a>1</a></li>
    <li class="active"><a>2</a></li>
    <li><a>...</a></li>
    <li><a>4</a></li>
    <li><a>5</a></li>
    <li><a>&gt;</a></li>
    <li class="next"><a><i class="icon icon-double-angle-right"></i></a></li>
  </ul>
</Example>

```html
<ul class="pager">
  <li class="previous"><a>&lt;</a></li>
  <li><a>1</a></li>
  <li class="active"><a>2</a></li>
  <li><a>3</a></li>
  <li><a>4</a></li>
  <li><a>5</a></li>
  <li class="next"><a>&gt;</a></li>
</ul>

<ul class="pager">
  <li class="previous"><a>上一页</a></li>
  ...
  <li class="next"><a>下一页</a></li>
</ul>

<ul class="pager">
  <li class="previous"><a><i class="icon icon-double-angle-left"></i></a></li>
  ...
  <li class="next"><a><i class="icon icon-double-angle-right"></i></a></li>
</ul>
```

## 禁用

<Example>
  <ul class="pager">
    <li class="previous"><a>&lt;</a></li>
    <li><a>1</a></li>
    <li class="disabled"><a>2</a></li>
    <li><a>3</a></li>
    <li><a>4</a></li>
    <li><a>5</a></li>
    <li class="next"><a>&gt;</a></li>
  </ul>
</Example>

```html
<ul class="pager">
  <li class="previous"><a>&lt;</a></li>
  <li><a>1</a></li>
  <li class="disabled"><a>2</a></li>
  <li><a>3</a></li>
  <li><a>4</a></li>
  <li><a>5</a></li>
  <li class="next"><a>&gt;</a></li>
</ul>
```

## 无边框

<Example>
  <ul class="pager pager-nobd">
    <li class="previous"><a>&lt;</a></li>
    <li><a>1</a></li>
    <li class="active"><a>2</a></li>
    <li><a>3</a></li>
    <li><a>4</a></li>
    <li><a>5</a></li>
    <li class="next"><a>&gt;</a></li>
  </ul>
</Example>

```html
<ul class="pager pager-nobd">
  <li class="previous"><a>&lt;</a></li>
  <li><a>1</a></li>
  <li class="active"><a>2</a></li>
  <li><a>3</a></li>
  <li><a>4</a></li>
  <li><a>5</a></li>
  <li class="next"><a>&gt;</a></li>
</ul>
```

## 宽松样式

<Example class="flex gap-3 flex-wrap">
  <ul class="pager pager-loose">
    <li class="previous"><a>&lt;</a></li>
    <li><a>1</a></li>
    <li><a>2</a></li>
    <li><a>3</a></li>
    <li><a>4</a></li>
    <li><a>5</a></li>
    <li class="next"><a>&gt;</a></li>
  </ul>
  <ul class="pager pager-loose">
    <li class="previous"><a class="rounded-full">&lt;</a></li>
    <li><a class="rounded-full">1</a></li>
    <li><a class="rounded-full">2</a></li>
    <li><a class="rounded-full">3</a></li>
    <li><a class="rounded-full">4</a></li>
    <li><a class="rounded-full">5</a></li>
    <li class="next"><a class="rounded-full">&gt;</a></li>
  </ul>
</Example>

```html
<ul class="pager pager-loose">
  <li class="previous"><a>&lt;</a></li>
  <li><a>1</a></li>
  <li><a>2</a></li>
  <li><a>3</a></li>
  <li><a>4</a></li>
  <li><a>5</a></li>
  <li class="next"><a>&gt;</a></li>
</ul>
<ul class="pager pager-loose">
  <li class="previous"><a class="rounded-full">&lt;</a></li>
  <li><a class="rounded-full">1</a></li>
  <li><a class="rounded-full">2</a></li>
  <li><a class="rounded-full">3</a></li>
  <li><a class="rounded-full">4</a></li>
  <li><a class="rounded-full">5</a></li>
  <li class="next"><a class="rounded-full">&gt;</a></li>
</ul>
```

## 宽松带背景色

<Example class="flex gap-3 flex-wrap">
  <ul class="pager pager-loose pager-bg">
    <li class="previous"><a>&lt;</a></li>
    <li><a>1</a></li>
    <li class="active"><a>2</a></li>
    <li><a>3</a></li>
    <li><a>4</a></li>
    <li><a>5</a></li>
    <li class="next"><a>&gt;</a></li>
  </ul>
</Example>

```html
<ul class="pager pager-loose pager-bg">
  <li class="previous"><a> &lt; </a></li>
  <li><a>1</a></li>
  <li class="active"><a>2</a></li>
  <li><a>3</a></li>
  <li><a>4</a></li>
  <li><a>5</a></li>
  <li class="next"><a> &gt; </a></li>
</ul>
```

## 宽松带背景色

<Example>
  <ul class="pager pager-justify">
    <li class="previous"><a>上一页</a></li>
    <li class="next"><a>下一页</a></li>
  </ul>
  <ul class="pager pager-nobd pager-justify">
    <li class="previous"><a>&lt;</a></li>
    <li class="next"><a>&gt;</a></li>
  </ul>
  <ul class="pager pager-bg pager-justify">
    <li class="previous"><a>&lt;</a></li>
    <li class="next"><a>&gt;</a></li>
  </ul>
  <ul class="pager pager-justify">
    <li class="previous"><a class="rounded-full">&lt;</a></li>
    <li class="next"><a class="rounded-full">&gt;</a></li>
  </ul>
</Example>

```html
<ul class="pager pager-justify">
  <li class="previous"><a>上一页</a></li>
  <li class="next"><a>下一页</a></li>
</ul>
<ul class="pager pager-nobd pager-justify">
  <li class="previous"><a>&lt;</a></li>
  <li class="next"><a>&gt;</a></li>
</ul>
<ul class="pager pager-bg pager-justify">
  <li class="previous"><a>&lt;</a></li>
  <li class="next"><a>&gt;</a></li>
</ul>
<ul class="pager pager-justify">
  <li class="previous"><a class="rounded-full">&lt;</a></li>
  <li class="next"><a class="rounded-full">&gt;</a></li>
</ul>
```

## 综合分页

<Example>
<div class="flex gap-3 flex-wrap items-center">
  <p class="w-32">显示总数</p>
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
</Example>

```html
<div class="flex gap-3 flex-wrap items-center">
  <p class="w-32">显示总数</p>
  <ul class="pager pager-nobd">
    ...
  </ul>
  <ul class="pager">
    ...
  </ul>
  <ul class="pager pager-loose">
    ...
  </ul>
</div>
<div class="flex gap-3 flex-wrap items-center">
  <p class="w-32">调整每页显示条数</p>
  <ul class="pager pager-nobd">
    ...
  </ul>
</div>
<div class="flex gap-3 flex-wrap items-center">
  <p class="w-32">直接前往</p>
  <ul class="pager pager-nobd">
    ...
  </ul>
</div>
<div class="flex gap-3 flex-wrap items-center">
  <p class="w-32">完整功能</p>
  <ul class="pager pager-nobd">
    ...
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

