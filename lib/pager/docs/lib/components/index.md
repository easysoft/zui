# 分页

## 使用方法

将多个按钮放置在 `<div class="pager">` 内即可创建一个分页组件。

::: tabs

== 示例

<Example class="gap-2 col">
  <nav class="pager">
    <div>共 42 项</div>
    <a class="btn ghost">第一页</a>
    <a class="btn ghost square" title="上一页"><i class="icon icon-angle-left"></i></a>
    <a class="btn ghost active">1</a>
    <a class="btn ghost">2</a>
    <a class="btn ghost">3</a>
    <a class="btn ghost">4</a>
    <a class="btn ghost square" title="下一页"><i class="icon icon-angle-right"></i></a>
    <a class="btn ghost">最后一页</a>
  </nav>
</Example>

== HTML

```html
<nav class="pager">
  <div>共 42 项</div>
  <a class="btn ghost">第一页</a>
  <a class="btn ghost square" title="上一页"><i class="icon icon-angle-left"></i></a>
  <a class="btn ghost active">1</a>
  <a class="btn ghost">2</a>
  <a class="btn ghost">3</a>
  <a class="btn ghost">4</a>
  <a class="btn ghost square" title="下一页"><i class="icon icon-angle-right"></i></a>
  <a class="btn ghost">最后一页</a>
</nav>
```

:::

## 简洁样式

简单的翻页。

::: tabs

== 示例

<Example class="flex-wrap gap-2 row">
  <nav class="gap-1 pager">
    <a class="btn ghost square size-sm" title="第一页"><i class="icon icon-double-angle-left"></i></a>
    <a class="btn ghost square size-sm" title="上一页"><i class="icon icon-angle-left"></i></a>
    <div>2/11</div>
    <a class="btn ghost square size-sm" title="下一页"><i class="icon icon-angle-right"></i></a>
    <a class="btn ghost square size-sm" title="最后一页"><i class="icon icon-double-angle-right"></i></a>
  </nav>
</Example>

== HTML

```html
<nav class="gap-1 pager">
  <a class="btn ghost square size-sm" title="第一页"><i class="icon icon-double-angle-left"></i></a>
  <a class="btn ghost square size-sm" title="上一页"><i class="icon icon-angle-left"></i></a>
  <div>2/11</div>
  <a class="btn ghost square size-sm" title="下一页"><i class="icon icon-angle-right"></i></a>
  <a class="btn ghost square size-sm" title="最后一页"><i class="icon icon-double-angle-right"></i></a>
</nav>
```

:::

## 状态

为分页按钮添加 `active` 类标记选中，添加 `disabled` 类来禁用页码，被禁用的页码将无法响应点击事件。

::: tabs

== 示例

<Example>
  <nav class="pager">
    <a class="btn ghost square size-sm disabled" title="第一页"><i class="icon icon-double-angle-left"></i></a>
    <a class="btn ghost square size-sm disabled" title="上一页"><i class="icon icon-angle-left"></i></a>
    <a class="btn ghost size-sm active">1</a>
    <a class="btn ghost size-sm">2</a>
    <a class="btn ghost size-sm">3</a>
    <a class="btn ghost size-sm">4</a>
    <a class="btn ghost square size-sm" title="下一页"><i class="icon icon-angle-right"></i></a>
    <a class="btn ghost square size-sm" title="最后一页"><i class="icon icon-double-angle-right"></i></a>
  </nav>
</Example>

== HTML

```html
<nav class="pager">
  <a class="btn ghost square size-sm disabled" title="第一页"><i class="icon icon-double-angle-left"></i></a>
  <a class="btn ghost square size-sm disabled" title="上一页"><i class="icon icon-angle-left"></i></a>
  <a class="btn ghost size-sm active">1</a>
  <a class="btn ghost size-sm">2</a>
  <a class="btn ghost size-sm">3</a>
  <a class="btn ghost size-sm">4</a>
  <a class="btn ghost square size-sm" title="下一页"><i class="icon icon-angle-right"></i></a>
  <a class="btn ghost square size-sm" title="最后一页"><i class="icon icon-double-angle-right"></i></a>
</nav>
```

:::

## 外观

### 分页按钮间距

使用 `gap-*` [CSS 工具类](/utilities/flex/utilities/gap) 可获得宽松的分页组件。

::: tabs

== 示例

<Example>
  <nav class="gap-4 pager">
    <a class="border btn size-sm square" title="上一页"><i class="icon icon-angle-left"></i></a>
    <a class="border btn size-sm primary-outline">1</a>
    <a class="border btn size-sm">2</a>
    <a class="border btn size-sm">3</a>
    <a class="border btn size-sm">4</a>
    <a class="border btn size-sm">5</a>
    <a class="border btn size-sm square" title="下一页"><i class="icon icon-angle-right"></i></a>
  </nav>
</Example>

== HTML

```html
<nav class="gap-4 pager">
  <a class="border btn size-sm square" title="上一页"><i class="icon icon-angle-left"></i></a>
  <a class="border btn size-sm primary-outline">1</a>
  <a class="border btn size-sm">2</a>
  <a class="border btn size-sm">3</a>
  <a class="border btn size-sm">4</a>
  <a class="border btn size-sm">5</a>
  <a class="border btn size-sm square" title="下一页"><i class="icon icon-angle-right"></i></a>
</nav>
```

:::

### 两边对齐

结合使用 `justify-between` [CSS 工具类](/utilities/flex/utilities/justify-content) 可获得页面两端对齐的分页组件。

::: tabs

== 示例

<Example>
  <nav class="justify-between pager">
    <a class="btn size-sm square" title="上一页"><i class="icon icon-angle-left"></i></a>
    <div>2/11</div>
    <a class="btn size-sm square" title="下一页"><i class="icon icon-angle-right"></i></a>
  </nav>
</Example>

== HTML

```html
<nav class="justify-between pager">
  <a class="btn size-sm square" title="上一页"><i class="icon icon-angle-left"></i></a>
  <div>2/11</div>
  <a class="btn size-sm square" title="下一页"><i class="icon icon-angle-right"></i></a>
</nav>
```

:::

## 尺寸

除了默认大小，还提供了额外的 2 种预设尺寸。可以通过为 `pager` 添加 `size-*` 类来获取其他尺寸外观。

::: tabs

== 示例

<Example class="gap-2 col">
  <nav class="pager size-sm">
    <a class="btn ghost square " title="第一页"><i class="icon icon-double-angle-left"></i></a>
    <a class="btn ghost square" title="上一页"><i class="icon icon-angle-left"></i></a>
    <a class="btn ghost">1</a>
    <a class="btn ghost">2</a>
    <a class="btn ghost">3</a>
    <a class="btn ghost">4</a>
    <a class="btn ghost square" title="下一页"><i class="icon icon-angle-right"></i></a>
    <a class="btn ghost square" title="最后一页"><i class="icon icon-double-angle-right"></i></a>
  </nav>
  <nav class="pager">
    <a class="btn ghost square" title="第一页"><i class="icon icon-double-angle-left"></i></a>
    <a class="btn ghost square" title="上一页"><i class="icon icon-angle-left"></i></a>
    <a class="btn ghost">1</a>
    <a class="btn ghost">2</a>
    <a class="btn ghost">3</a>
    <a class="btn ghost">4</a>
    <a class="btn ghost square" title="下一页"><i class="icon icon-angle-right"></i></a>
    <a class="btn ghost square" title="最后一页"><i class="icon icon-double-angle-right"></i></a>
  </nav>
  <nav class="pager size-lg">
    <a class="btn ghost square" title="第一页"><i class="icon icon-double-angle-left"></i></a>
    <a class="btn ghost square" title="上一页"><i class="icon icon-angle-left"></i></a>
    <a class="btn ghost">1</a>
    <a class="btn ghost">2</a>
    <a class="btn ghost">3</a>
    <a class="btn ghost">4</a>
    <a class="btn ghost square" title="下一页"><i class="icon icon-angle-right"></i></a>
    <a class="btn ghost square" title="最后一页"><i class="icon icon-double-angle-right"></i></a>
  </nav>
</Example>

== HTML

```html
<nav class="pager size-sm">
  ...
</nav>
<nav class="pager">
  ...
</nav>
<nav class="pager size-lg">
  ...
</nav>
```

:::

## 调整每页显示数

结合使用 `dropdown` [下拉菜单组件](/lib/components/dropdown/index) 可展示调整每页显示数的分页组件。

::: tabs

== 示例

<Example>
  <nav class="gap-1 pager">
    <div>共 42 项</div>
    <button class="btn ghost dropdown pager-size-menu size-sm" type="button" data-toggle="dropdown" data-placement="top-start" data-target="#dropdownMenu">
      <span class="text">每页 10 项</span><span class="caret-up"></span>
    </button>
    <a class="btn ghost square size-sm" title="第一页"><i class="icon icon-double-angle-left"></i></a>
    <a class="btn ghost square size-sm" title="上一页"><i class="icon icon-angle-left"></i></a>
    <a class="btn ghost size-sm">1</a>
    <a class="btn ghost size-sm">2</a>
    <a class="btn ghost size-sm">3</a>
    <a class="btn ghost size-sm">4</a>
    <a class="btn ghost size-sm">5</a>
    <a class="btn ghost size-sm">6</a>
    <a class="btn ghost square size-sm" title="下一页"><i class="icon icon-angle-right"></i></a>
    <a class="btn ghost square size-sm" title="最后一页"><i class="icon icon-double-angle-right"></i></a>
  </nav>
  <div class="dropdown-menu" id="dropdownMenu" data-popper-placement="top">
    <menu class="menu pager-size-menu menu-context">
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=5">5</a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=10">10</a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=15">15</a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=20">20</a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=25">25</a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=30">30</a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=35">35</a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=40">40</a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=45">45</a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=50">50</a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=100">100</a></li>
    </menu>
  </div>
</Example>

== HTML

```html
<nav class="gap-1 pager">
  <div>共 42 项</div>
  <button class="btn ghost dropdown pager-size-menu size-sm" type="button" data-toggle="dropdown" data-placement="top-start" data-target="#dropdownMenu">
    <span class="text">每页 10 项</span><span class="caret-up"></span>
  </button>
  <a class="btn ghost square size-sm" title="第一页"><i class="icon icon-double-angle-left"></i></a>
  <a class="btn ghost square size-sm" title="上一页"><i class="icon icon-angle-left"></i></a>
  <a class="btn ghost size-sm">1</a>
  <a class="btn ghost size-sm">2</a>
  <a class="btn ghost size-sm">3</a>
  <a class="btn ghost size-sm">4</a>
  <a class="btn ghost size-sm">5</a>
  <a class="btn ghost size-sm">6</a>
  <a class="btn ghost square size-sm" title="下一页"><i class="icon icon-angle-right"></i></a>
  <a class="btn ghost square size-sm" title="最后一页"><i class="icon icon-double-angle-right"></i></a>
</nav>
<div class="dropdown-menu" id="dropdownMenu" data-popper-placement="top">
  <menu class="menu pager-size-menu menu-context">
    <li class="menu-item"><a href="#?page=2&amp;recPerPage=5">5</a></li>
    <li class="menu-item"><a href="#?page=2&amp;recPerPage=10">10</a></li>
    <li class="menu-item"><a href="#?page=2&amp;recPerPage=15">15</a></li>
    <li class="menu-item"><a href="#?page=2&amp;recPerPage=20">20</a></li>
    <li class="menu-item"><a href="#?page=2&amp;recPerPage=25">25</a></li>
    <li class="menu-item"><a href="#?page=2&amp;recPerPage=30">30</a></li>
    <li class="menu-item"><a href="#?page=2&amp;recPerPage=35">35</a></li>
    <li class="menu-item"><a href="#?page=2&amp;recPerPage=40">40</a></li>
    <li class="menu-item"><a href="#?page=2&amp;recPerPage=45">45</a></li>
    <li class="menu-item"><a href="#?page=2&amp;recPerPage=50">50</a></li>
    <li class="menu-item"><a href="#?page=2&amp;recPerPage=100">100</a></li>
  </menu>
</div>
```

:::

## 前往页码

结合使用 `input-group` [输入组组件](/lib/forms/input-group/index) 可展示快速跳转到某一页的分页组件。

::: tabs

== 示例

<Example>
  <nav class="pager">
    <a class="btn ghost square size-sm" title="第一页"><i class="icon icon-double-angle-left"></i></a>
    <a class="btn ghost square size-sm" title="上一页"><i class="icon icon-angle-left"></i></a>
    <a class="btn ghost size-sm">1</a>
    <a class="btn ghost size-sm">2</a>
    <a class="btn ghost size-sm">3</a>
    <a class="btn ghost size-sm">4</a>
    <a class="btn ghost size-sm">5</a>
    <a class="btn ghost size-sm">6</a>
    <a class="btn ghost square size-sm" title="下一页"><i class="icon icon-angle-right"></i></a>
    <a class="btn ghost square size-sm" title="最后一页"><i class="icon icon-double-angle-right"></i></a>
    <div class="input-group size-sm">
      <input type="number" class="form-control" max="6" min="1">
      <button class="btn" type="button"><span class="text">跳转</span></button>
    </div>
  </nav>
</Example>

== HTML

```html
<nav class="pager">
  <a class="btn ghost square size-sm" title="第一页"><i class="icon icon-double-angle-left"></i></a>
  <a class="btn ghost square size-sm" title="上一页"><i class="icon icon-angle-left"></i></a>
  <a class="btn ghost size-sm">1</a>
  <a class="btn ghost size-sm">2</a>
  <a class="btn ghost size-sm">3</a>
  <a class="btn ghost size-sm">4</a>
  <a class="btn ghost size-sm">5</a>
  <a class="btn ghost size-sm">6</a>
  <a class="btn ghost square size-sm" title="下一页"><i class="icon icon-angle-right"></i></a>
  <a class="btn ghost square size-sm" title="最后一页"><i class="icon icon-double-angle-right"></i></a>
  <div class="input-group size-sm">
    <input type="number" class="form-control" max="6" min="1">
    <button class="btn" type="button"><span class="text">跳转</span></button>
  </div>
</nav>
```

:::

## CSS 类

分页提供了如下 CSS 类：

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `pager`      | 实体类 | 元素作为分页组件 |
| `pager-goto`    | 实体类      |  元素作为分页的跳转组件 |
| `pager-size-menu`    | 实体类    |  元素作为分页的每页条数的下拉组件 |
