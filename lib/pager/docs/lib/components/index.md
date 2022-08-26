# 分页

## 基本用法

使用组件类 `.pager` 来获得分页的外观展示 通常搭配 `<ul>`，`<li>` 标签来使用。

<Example>
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

使用 `disabled` 修饰类来禁用页码，被禁用的页码将无法响应点击事件。

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
  ...
  <li class="disabled"><a>2</a></li>
  ...
</ul>
```

## 无边框

使用 `pager-nobd` 类可获得无边框的分页组件。

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
  ...
</ul>
```

## 宽松样式

使用 `pager-loose` 类可获得宽松并且带背景色的分页组件。

<Example class="flex gap-3 flex-wrap">
  <ul class="pager pager-loose">
    <li class="previous"><a>&lt;</a></li>
    <li class="active"><a>1</a></li>
    <li><a>2</a></li>
    <li><a>3</a></li>
    <li class="next"><a>&gt;</a></li>
  </ul>
  <ul class="pager pager-loose">
    <li class="previous"><a class="circle">&lt;</a></li>
    <li class="active"><a class="circle">1</a></li>
    <li><a class="circle">2</a></li>
    <li><a class="circle">3</a></li>
    <li class="next"><a class="circle">&gt;</a></li>
  </ul>
</Example>

```html
<ul class="pager pager-loose">
  ...
</ul>
<ul class="pager pager-loose">
  <li class="previous"><a class="circle">&lt;</a></li>
  ...
  <li class="next"><a class="circle">&gt;</a></li>
</ul>
```

## 宽松带背景色

使用 `pager-loose` 和 `pager-bg` 类可获得宽松并且带背景色的分页组件。

<Example>
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
  ...
</ul>
```

## 两边对齐

使用 `pager-justify` 类可获得页面两端对齐的分页组件。

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
    <li class="previous"><a class="circle">&lt;</a></li>
    <li class="next"><a class="circle">&gt;</a></li>
  </ul>
</Example>

```html
<ul class="pager pager-justify">
  <li class="previous"><a>上一页</a></li>
  <li class="next"><a>下一页</a></li>
</ul>
<ul class="pager pager-nobd pager-justify">
  ...
</ul>
<ul class="pager pager-bg pager-justify">
  ...
</ul>
<ul class="pager pager-justify">
  ...
</ul>
```

## 尺寸

除了默认大小，还提供了额外的 2 种预设尺寸。可以通过为 `.pager` 添加同样等级的 `size-*` 类来获取其他尺寸外观。

<Example>
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
</Example>

```html
<ul class="pager size-sm">
  ...
</ul>
<ul class="pager">
  ...
</ul>
<ul class="pager size-lg">
  ...
</ul>
```

## 附加功能

根据场景需要，可以添加其他功能模块。

<Example>
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
</Example>

```html
<div class="flex gap-3 flex-wrap items-center">
  <p class="w-32">显示总数</p>
  <div>
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

## CSS 类

分页提供了如下 CSS 类：

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `pager`      | 实体类 | 元素作为分页组件 |
| `size-sm`      | 修饰类      |   分页使用小号尺寸 |
| `size-lg`      | 修饰类      |   分页使用大号尺寸 |
