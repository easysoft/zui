# 分页

当数据量过多时，使用分页的形式分解数据。

## 基本用法

将多个按钮放置在 `<div class="pager">` 内即可创建一个分页组件。

<Example class="col gap-2">
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
</Example>

```html
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
  ...
  <button type="button" class="btn">下一页</button>
</div>
<div class="pager">
  <button type="button" class="btn previous"><i class="icon icon-double-angle-left"></i></button>
  <button type="button" class="btn"><i class="icon icon-angle-left"></i></button>
  ...
  <button type="button" class="btn"><i class="icon icon-angle-right"></i></button>
  <button type="button" class="btn next"><i class="icon icon-double-angle-right"></i></button>
</div>
```

## 简洁样式

简单的翻页。

<Example class="row gap-2 flex-wrap">
  <div class="pager pager-sample">
    <button type="button" class="btn rounded previous"><i class="icon icon-angle-left"></i></button>
    <div class="pager-text"><span>1</span>/<span>4</span></div>
    <button type="button" class="btn rounded next"><i class="icon icon-angle-right"></i></button>
  </div>
  <div class="pager pager-sample borderless">
    <button type="button" class="btn previous"><i class="icon icon-angle-left"></i></button>
    <div class="pager-text"><span>1</span>/<span>4</span></div>
    <button type="button" class="btn next"><i class="icon icon-angle-right"></i></button>
  </div>
</Example>

```html
<div class="pager pager-sample">
  <button type="button" class="btn rounded previous"><i class="icon icon-angle-left"></i></button>
  <div class="pager-text"><span>1</span>/<span>4</span></div>
  <button type="button" class="btn rounded next"><i class="icon icon-angle-right"></i></button>
</div>
<div class="pager pager-sample borderless">
  <button type="button" class="btn previous"><i class="icon icon-angle-left"></i></button>
  <div class="pager-text"><span>1</span>/<span>4</span></div>
  <button type="button" class="btn next"><i class="icon icon-angle-right"></i></button>
</div>
```

## 禁用

分页里的按钮组件使用 `disabled` 修饰类来禁用页码，被禁用的页码将无法响应点击事件。

<Example>
  <div class="pager">
    <button type="button" class="btn previous"><i class="icon icon-angle-left"></i></button>
    <button type="button" class="btn">1</button>
    <button type="button" class="btn active primary">2</button>
    <button type="button" class="btn disabled">3</button>
    <button type="button" class="btn">4</button>
    <button type="button" class="btn next"><i class="icon icon-angle-right"></i></button>
  </div>
</Example>

```html
<div class="pager">
  ...
  <button type="button" class="btn disabled">3</button>
  ...
</div>
```

## 无边框

使用 `borderless` 类可获得无边框的分页组件。

<Example>
  <div class="pager borderless">
    <button type="button" class="btn previous"><i class="icon icon-angle-left"></i></button>
    <button type="button" class="btn">1</button>
    <button type="button" class="btn active primary">2</button>
    <button type="button" class="btn">3</button>
    <button type="button" class="btn">4</button>
    <button type="button" class="btn next"><i class="icon icon-angle-right"></i></button>
  </div>
</Example>

```html
<div class="pager borderless">
  ...
</div>
```

## 宽松样式

使用 `pager-loose` 类并结合 `gap-*` [CSS 工具类](/utilities/flex/utilities/gap) 可获得宽松并且带背景色的分页组件。

<Example class="flex gap-2 flex-wrap">
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
</Example>

```html
<div class="pager pager-loose gap-x-2">
  ...
</div>
<div class="pager pager-loose gap-x-3">
  ...
</div>
```

## 带背景色

使用 `*-pale` [CSS 工具类](/utilities/style/utilities/pale) 可得到带背景色的分页组件。

<Example class="col gap-2">
 <div class="pager">
    <button type="button" class="btn lighter-pale previous"><i class="icon icon-angle-left"></i></button>
    <button type="button" class="btn lighter-pale">1</button>
    <button type="button" class="btn lighter-pale active primary">2</button>
    <button type="button" class="btn lighter-pale">3</button>
    <button type="button" class="btn lighter-pale">4</button>
    <button type="button" class="btn lighter-pale next"><i class="icon icon-angle-right"></i></button>
  </div>
  <div class="pager pager-loose gap-x-2">
    <button type="button" class="btn lighter-pale previous"><i class="icon icon-angle-left"></i></button>
    <button type="button" class="btn lighter-pale">1</button>
    <button type="button" class="btn lighter-pale active primary">2</button>
    <button type="button" class="btn lighter-pale">3</button>
    <button type="button" class="btn lighter-pale">4</button>
    <button type="button" class="btn lighter-pale next"><i class="icon icon-angle-right"></i></button>
  </div>
</Example>

```html
<div class="pager">
  <button type="button" class="btn lighter-pale previous"><i class="icon icon-angle-left"></i></button>
  ...
</div>
<div class="pager pager-loose gap-x-2">
  <button type="button" class="btn lighter-pale previous"><i class="icon icon-angle-left"></i></button>
  ...
</div>
```

## 两边对齐

结合使用 `justify-between` [CSS 工具类](/utilities/flex/utilities/justify-content) 可获得页面两端对齐的分页组件。

<Example class="col gap-2">
  <div class="pager justify-between">
    <button type="button" class="btn previous"><i class="icon icon-angle-left"></i></button>
    <button type="button" class="btn next"><i class="icon icon-angle-right"></i></button>
  </div>
  <div class="pager justify-between">
    <button type="button" class="btn">上一页</button>
    <button type="button" class="btn">下一页</button>
  </div>
</Example>

```html
<div class="pager justify-between">
  ...
</div>
<div class="pager justify-between">
  ...
</div>
```

## 尺寸

除了默认大小，还提供了额外的 2 种预设尺寸。可以通过为 `pager` 添加同样等级的 `size-*` 类来获取其他尺寸外观。

<Example class="col gap-2">
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
</Example>

```html
<div class="pager size-sm">
  ...
</div>
<div class="pager">
  ...
</div>
<div class="pager size-lg">
  ...
</div>
```

## 显示总数

展示总共有多少数据。

<Example class="col gap-2">
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
</Example>

```html
<div class="pager">
  <div class="pager-text">共<span class="font-bold">40</span>项</div>
  <button type="button" class="btn previous"><i class="icon icon-angle-left"></i></button>
  ...
  <button type="button" class="btn next next"><i class="icon icon-angle-right"></i></button>
</div>
<div class="pager borderless">
  <div class="pager-text">共<span class="font-bold">40</span>项</div>
 ...
</div>
```

## 调整每页显示数

结合使用 `dropdown` [下拉菜单组件](/lib/components/dropdown/index) 可展示调整每页显示数的分页组件。

<Example>
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
</Example>

```html
<div class="pager">
  <div class="dropdown pager-sizes">
    <button class="btn" type="button" data-toggle="dropdown">每页<span class="font-bold">10</span>项<span class="caret"></span></button>
    <ul class="dropdown-menu">
      <li><a>20</a></li>
      <li><a>50</a></li>
      <li><a>100</a></li>
    </ul>
  </div>
  ...
</div>
```

## 直接前往

结合使用 `input-control` [输入框组件](/lib/forms/input/index) 可展示快速跳转到某一页的分页组件。

<Example>
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
</Example>

```html
<div class="pager">
  ...
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

展示所有的附加项配置。

<Example>
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
</Example>

```html
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
  ...
  <div class="pager-jump">
    <span>前往</span>
    <div class="input-control inline-block">
      <input type="text" class="form-control" />
    </div>
    <span>页</span>
  </div>
</div>
```

## CSS 类

分页提供了如下 CSS 类：

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `pager`      | 实体类 | 元素作为分页组件 |
| `size-sm`      | 修饰类      |   分页使用小号尺寸 |
| `size-lg`      | 修饰类      |   分页使用大号尺寸 |
