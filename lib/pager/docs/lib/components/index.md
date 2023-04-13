# 分页

当数据量过多时，使用分页的形式分解数据。

## 使用方法

将多个按钮放置在 `<div class="pager">` 内即可创建一个分页组件。

<Example class="col gap-2">
  <nav class="pager">
    <a class="btn ghost square size-sm" title="第一页"><i class="icon icon-double-angle-left"></i></a>
    <a class="btn ghost square size-sm" title="上一页"><i class="icon icon-angle-left"></i></a>
    <a class="btn ghost size-sm text-primary"><span class="text">1</span></a>
    <a class="btn ghost size-sm"><span class="text">2</span></a>
    <a class="btn ghost size-sm"><span class="text">3</span></a>
    <a class="btn ghost size-sm"><span class="text">4</span></a>
    <a class="btn ghost square size-sm" title="下一页"><i class="icon icon-angle-right"></i></a>
    <a class="btn ghost square size-sm" title="最后一页"><i class="icon icon-double-angle-right"></i></a>
  </nav>
  <nav class="pager">
    <a class="btn ghost size-sm"><span class="text">上一页</span></a>
    <a class="btn ghost size-sm"><span class="text">1</span></a>
    <a class="btn primary size-sm"><span class="text">2</span></a>
    <a class="btn ghost size-sm"><span class="text">3</span></a>
    <a class="btn ghost size-sm"><span class="text">4</span></a>
    <a class="btn ghost size-sm"><span class="text">下一页</span></a>
  </nav>
</Example>

```html
<nav class="pager gap-1">
  <a class="btn ghost square size-sm" title="第一页"><i class="icon icon-double-angle-left"></i></a>
  <a class="btn ghost square size-sm" title="上一页"><i class="icon icon-angle-left"></i></a>
  <a class="btn ghost size-sm"><span class="text">1</span></a>
  <a class="btn ghost size-sm"><span class="text">2</span></a>
  <a class="btn ghost size-sm"><span class="text">3</span></a>
  <a class="btn ghost size-sm"><span class="text">4</span></a>
  <a class="btn ghost square size-sm" title="下一页"><i class="icon icon-angle-right"></i></a>
  <a class="btn ghost square size-sm" title="最后一页"><i class="icon icon-double-angle-right"></i></a>
</nav>
<nav class="pager gap-1">
  <a class="btn ghost size-sm"><span class="text">上一页</span></a>
  <a class="btn ghost size-sm"><span class="text">1</span></a>
  <a class="btn ghost size-sm"><span class="text">2</span></a>
  <a class="btn ghost size-sm"><span class="text">3</span></a>
  <a class="btn ghost size-sm"><span class="text">4</span></a>
  <a class="btn ghost size-sm"><span class="text">下一页</span></a>
</nav>
```

## 简洁样式

简单的翻页。

<Example class="row gap-2 flex-wrap">
  <nav class="pager gap-1">
    <a class="btn ghost square size-sm" title="第一页"><i class="icon icon-double-angle-left"></i></a>
    <a class="btn ghost square size-sm" title="上一页"><i class="icon icon-angle-left"></i></a>
    <div>2/11</div>
    <a class="btn ghost square size-sm" title="下一页"><i class="icon icon-angle-right"></i></a>
    <a class="btn ghost square size-sm" title="最后一页"><i class="icon icon-double-angle-right"></i></a>
  </nav>
</Example>

```html
<nav class="pager gap-1">
  <a class="btn ghost square size-sm" title="第一页"><i class="icon icon-double-angle-left"></i></a>
  <a class="btn ghost square size-sm" title="上一页"><i class="icon icon-angle-left"></i></a>
  <div>2/11</div>
  <a class="btn ghost square size-sm" title="下一页"><i class="icon icon-angle-right"></i></a>
  <a class="btn ghost square size-sm" title="最后一页"><i class="icon icon-double-angle-right"></i></a>
</nav>
```

## 禁用

分页里的按钮组件使用 `disabled` 工具类来禁用页码，被禁用的页码将无法响应点击事件。

<Example>
  <nav class="pager">
    <a class="btn ghost square size-sm" title="第一页"><i class="icon icon-double-angle-left"></i></a>
    <a class="btn ghost square size-sm" title="上一页"><i class="icon icon-angle-left"></i></a>
    <a class="btn ghost size-sm"><span class="text">1</span></a>
    <a class="btn ghost size-sm disabled"><span class="text">2</span></a>
    <a class="btn ghost size-sm"><span class="text">3</span></a>
    <a class="btn ghost size-sm"><span class="text">4</span></a>
    <a class="btn ghost square size-sm" title="下一页"><i class="icon icon-angle-right"></i></a>
    <a class="btn ghost square size-sm" title="最后一页"><i class="icon icon-double-angle-right"></i></a>
  </nav>
</Example>

```html
<nav class="pager">
  ...
  <a class="btn ghost size-sm"><span class="text">1</span></a>
  <a class="btn ghost size-sm disabled"><span class="text">2</span></a>
  ...
</nav>
```

## 外观

### 分页按钮间距

使用 `gap-*` [CSS 工具类](/utilities/flex/utilities/gap) 可获得宽松的分页组件。

<Example>
  <nav class="pager gap-3">
    <a class="btn size-sm border square" title="上一页"><i class="icon icon-angle-left"></i></a>
    <a class="btn size-sm primary-outline border pager-nav"><span class="text">1</span></a>
    <a class="btn size-sm border pager-nav"><span class="text">2</span></a>
    <a class="btn size-sm border pager-nav"><span class="text">3</span></a>
    <a class="btn size-sm border pager-nav"><span class="text">4</span></a>
    <a class="btn size-sm border pager-nav"><span class="text">5</span></a>
    <a class="btn size-sm border square" title="下一页"><i class="icon icon-angle-right"></i></a>
  </nav>
</Example>

```html
<nav class="pager gap-3">
  <a class="btn size-sm border square" title="上一页"><i class="icon icon-angle-left"></i></a>
  <a class="btn size-sm primary-outline border pager-nav"><span class="text">1</span></a>
  <a class="btn size-sm border pager-nav"><span class="text">2</span></a>
  <a class="btn size-sm border pager-nav"><span class="text">3</span></a>
  <a class="btn size-sm border pager-nav"><span class="text">4</span></a>
  <a class="btn size-sm border pager-nav"><span class="text">5</span></a>
  <a class="btn size-sm border square" title="下一页"><i class="icon icon-angle-right"></i></a>
</nav>
```

### 背景色

使用 `*-pale` `*-outline` 等[CSS 工具类](/utilities/style/utilities/pale) 可得到不用外观的分页组件。

<Example class="col gap-2">
 <nav class="pager gap-1">
  <a class="btn size-sm bg-canvas square" title="上一页"><i class="icon icon-angle-left"></i></a>
  <a class="btn size-sm bg-canvas pager-nav"><span class="text">1</span></a>
  <a class="btn size-sm bg-canvas pager-nav"><span class="text">2</span></a>
  <a class="btn size-sm bg-canvas pager-nav"><span class="text">3</span></a>
  <a class="btn size-sm primary-outline bg-canvas pager-nav"><span class="text">4</span></a>
  <a class="btn size-sm bg-canvas pager-nav"><span class="text">5</span></a>
  <a class="btn size-sm bg-canvas square" title="下一页"><i class="icon icon-angle-right"></i></a>
 </nav>
</Example>

```html
<nav class="pager gap-1">
  <nav class="pager gap-1">
  <a class="btn size-sm bg-canvas square" title="上一页"><i class="icon icon-angle-left"></i></a>
  <a class="btn size-sm bg-canvas pager-nav"><span class="text">1</span></a>
  <a class="btn size-sm bg-canvas pager-nav"><span class="text">2</span></a>
  <a class="btn size-sm bg-canvas pager-nav"><span class="text">3</span></a>
  <a class="btn size-sm primary-outline bg-canvas pager-nav"><span class="text">4</span></a>
  <a class="btn size-sm bg-canvas pager-nav"><span class="text">5</span></a>
  <a class="btn size-sm bg-canvas square" title="下一页"><i class="icon icon-angle-right"></i></a>
 </nav>
```

### 两边对齐

结合使用 `justify-between` [CSS 工具类](/utilities/flex/utilities/justify-content) 可获得页面两端对齐的分页组件。

<Example>
  <nav class="pager justify-between">
    <a class="btn size-sm square" title="上一页"><i class="icon icon-angle-left"></i></a>
    <a class="btn size-sm square" title="下一页"><i class="icon icon-angle-right"></i></a>
  </nav>
</Example>

```html
<nav class="pager justify-between">
  <a class="btn size-sm square" title="上一页"><i class="icon icon-angle-left"></i></a>
  <a class="btn size-sm square" title="下一页"><i class="icon icon-angle-right"></i></a>
</nav>
```

## 尺寸

除了默认大小，还提供了额外的 2 种预设尺寸。可以通过为 `pager` 添加同样等级的 `size-*` 类来获取其他尺寸外观。

<Example class="col gap-2">
  <nav class="pager">
    <a class="btn ghost square size-sm" title="第一页"><i class="icon icon-double-angle-left"></i></a>
    <a class="btn ghost square size-sm" title="上一页"><i class="icon icon-angle-left"></i></a>
    <a class="btn ghost size-sm"><span class="text">1</span></a>
    <a class="btn ghost size-sm"><span class="text">2</span></a>
    <a class="btn ghost size-sm"><span class="text">3</span></a>
    <a class="btn ghost size-sm"><span class="text">4</span></a>
    <a class="btn ghost square size-sm" title="下一页"><i class="icon icon-angle-right"></i></a>
    <a class="btn ghost square size-sm" title="最后一页"><i class="icon icon-double-angle-right"></i></a>
  </nav>
  <nav class="pager">
    <a class="btn ghost square" title="第一页"><i class="icon icon-double-angle-left"></i></a>
    <a class="btn ghost square" title="上一页"><i class="icon icon-angle-left"></i></a>
    <a class="btn ghost pager-nav"><span class="text">1</span></a>
    <a class="btn ghost pager-nav"><span class="text">2</span></a>
    <a class="btn ghost pager-nav"><span class="text">3</span></a>
    <a class="btn ghost pager-nav"><span class="text">4</span></a>
    <a class="btn ghost square" title="下一页"><i class="icon icon-angle-right"></i></a>
    <a class="btn ghost square" title="最后一页"><i class="icon icon-double-angle-right"></i></a>
  </nav>
  <nav class="pager">
    <a class="btn ghost square size-lg" title="第一页"><i class="icon icon-double-angle-left"></i></a>
    <a class="btn ghost square size-lg" title="上一页"><i class="icon icon-angle-left"></i></a>
    <a class="btn ghost size-lg"><span class="text">1</span></a>
    <a class="btn ghost size-lg"><span class="text">2</span></a>
    <a class="btn ghost size-lg"><span class="text">3</span></a>
    <a class="btn ghost size-lg"><span class="text">4</span></a>
    <a class="btn ghost square size-lg" title="下一页"><i class="icon icon-angle-right"></i></a>
    <a class="btn ghost square size-lg" title="最后一页"><i class="icon icon-double-angle-right"></i></a>
  </nav>
</Example>

```html
<nav class="pager">
  <a class="btn ghost square size-sm" title="第一页"><i class="icon icon-double-angle-left"></i></a>
  ...
</nav>
<nav class="pager">
  <a class="btn ghost square" title="第一页"><i class="icon icon-double-angle-left"></i></a>
  ...
</nav>
<nav class="pager">
  <a class="btn ghost square size-lg" title="第一页"><i class="icon icon-double-angle-left"></i></a>
  ...
</nav>
```

## 显示总数

展示总共有多少数据。

<Example class="col gap-2">
  <nav class="pager gap-1">
    <div>共 51 项</div>
    <a class="btn ghost square size-sm" title="第一页"><i class="icon icon-double-angle-left"></i></a>
    <a class="btn ghost square size-sm" title="上一页"><i class="icon icon-angle-left"></i></a>
    <a class="btn ghost size-sm"><span class="text">1</span></a>
    <a class="btn ghost size-sm"><span class="text">2</span></a>
    <a class="btn ghost size-sm"><span class="text">3</span></a>
    <a class="btn ghost size-sm"><span class="text">4</span></a>
    <a class="btn ghost size-sm"><span class="text">5</span></a>
    <a class="btn ghost size-sm"><span class="text">6</span></a>
    <a class="btn ghost square size-sm" title="下一页"><i class="icon icon-angle-right"></i></a>
    <a class="btn ghost square size-sm" title="最后一页"><i class="icon icon-double-angle-right"></i></a>
  </nav>
</Example>

```html
<nav class="pager gap-1">
  <div>共 51 项</div>
  <a class="btn ghost square size-sm" title="第一页"><i class="icon icon-double-angle-left"></i></a>
  <a class="btn ghost square size-sm" title="上一页"><i class="icon icon-angle-left"></i></a>
  <a class="btn ghost size-sm"><span class="text">1</span></a>
  <a class="btn ghost size-sm"><span class="text">2</span></a>
  <a class="btn ghost size-sm"><span class="text">3</span></a>
  <a class="btn ghost size-sm"><span class="text">4</span></a>
  <a class="btn ghost size-sm"><span class="text">5</span></a>
  <a class="btn ghost size-sm"><span class="text">6</span></a>
  <a class="btn ghost square size-sm" title="下一页"><i class="icon icon-angle-right"></i></a>
  <a class="btn ghost square size-sm" title="最后一页"><i class="icon icon-double-angle-right"></i></a>
</nav>
```

## 调整每页显示数

结合使用 `dropdown` [下拉菜单组件](/lib/components/dropdown/index) 可展示调整每页显示数的分页组件。

<Example>
  <nav class="pager gap-1">
    <div>共 51 项</div>
    <button class="btn ghost dropdown pager-size-menu size-sm" type="button" data-toggle="dropdown" data-dropdown-placement="top" href="#dropdownMenu3">
      <span class="text">每页 10 项</span><span class="caret-up"></span>
    </button>
    <a class="btn ghost square size-sm" title="第一页"><i class="icon icon-double-angle-left"></i></a>
    <a class="btn ghost square size-sm" title="上一页"><i class="icon icon-angle-left"></i></a>
    <a class="btn ghost size-sm"><span class="text">1</span></a>
    <a class="btn ghost size-sm"><span class="text">2</span></a>
    <a class="btn ghost size-sm"><span class="text">3</span></a>
    <a class="btn ghost size-sm"><span class="text">4</span></a>
    <a class="btn ghost size-sm"><span class="text">5</span></a>
    <a class="btn ghost size-sm"><span class="text">6</span></a>
    <a class="btn ghost square size-sm" title="下一页"><i class="icon icon-angle-right"></i></a>
    <a class="btn ghost square size-sm" title="最后一页"><i class="icon icon-double-angle-right"></i></a>
  </nav>
  <div class="dropdown-menu" id="dropdownMenu3" data-popper-placement="top">
    <menu class="menu pager-size-menu menu-context">
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=5"><span class="text">5</span></a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=10"><span class="text">10</span></a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=15"><span class="text">15</span></a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=20"><span class="text">20</span></a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=25"><span class="text">25</span></a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=30"><span class="text">30</span></a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=35"><span class="text">35</span></a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=40"><span class="text">40</span></a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=45"><span class="text">45</span></a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=50"><span class="text">50</span></a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=100"><span class="text">100</span></a></li>
    </menu>
  </div>
</Example>

```html
<nav class="pager gap-1">
  <div>共 51 项</div>
  <button class="btn ghost dropdown pager-size-menu size-sm" type="button" data-toggle="dropdown" data-dropdown-placement="top" href="#dropdownMenu3">
    <span class="text">每页 10 项</span><span class="caret-up"></span>
  </button>
  <a class="btn ghost square size-sm" title="第一页"><i class="icon icon-double-angle-left"></i></a>
  <a class="btn ghost square size-sm" title="上一页"><i class="icon icon-angle-left"></i></a>
  <a class="btn ghost size-sm"><span class="text">1</span></a>
  <a class="btn ghost size-sm"><span class="text">2</span></a>
  <a class="btn ghost size-sm"><span class="text">3</span></a>
  <a class="btn ghost size-sm"><span class="text">4</span></a>
  <a class="btn ghost size-sm"><span class="text">5</span></a>
  <a class="btn ghost size-sm"><span class="text">6</span></a>
  <a class="btn ghost square size-sm" title="下一页"><i class="icon icon-angle-right"></i></a>
  <a class="btn ghost square size-sm" title="最后一页"><i class="icon icon-double-angle-right"></i></a>
</nav>
<div class="dropdown-menu" id="dropdownMenu3" data-popper-placement="top">
  <menu class="menu pager-size-menu menu-context">
    <li class="menu-item"><a href="#?page=2&amp;recPerPage=5"><span class="text">5</span></a></li>
    <li class="menu-item"><a href="#?page=2&amp;recPerPage=10"><span class="text">10</span></a></li>
    <li class="menu-item"><a href="#?page=2&amp;recPerPage=15"><span class="text">15</span></a></li>
    <li class="menu-item"><a href="#?page=2&amp;recPerPage=20"><span class="text">20</span></a></li>
    <li class="menu-item"><a href="#?page=2&amp;recPerPage=25"><span class="text">25</span></a></li>
    <li class="menu-item"><a href="#?page=2&amp;recPerPage=30"><span class="text">30</span></a></li>
    <li class="menu-item"><a href="#?page=2&amp;recPerPage=35"><span class="text">35</span></a></li>
    <li class="menu-item"><a href="#?page=2&amp;recPerPage=40"><span class="text">40</span></a></li>
    <li class="menu-item"><a href="#?page=2&amp;recPerPage=45"><span class="text">45</span></a></li>
    <li class="menu-item"><a href="#?page=2&amp;recPerPage=50"><span class="text">50</span></a></li>
    <li class="menu-item"><a href="#?page=2&amp;recPerPage=100"><span class="text">100</span></a></li>
  </menu>
</div>
```

## 直接前往

结合使用 `input-group` [输入组组件](/lib/forms/input-group/index) 可展示快速跳转到某一页的分页组件。

<Example>
  <nav class="pager gap-1">
    <a class="btn ghost square size-sm" title="第一页"><i class="icon icon-double-angle-left"></i></a>
    <a class="btn ghost square size-sm" title="上一页"><i class="icon icon-angle-left"></i></a>
    <a class="btn ghost size-sm"><span class="text">1</span></a>
    <a class="btn ghost size-sm"><span class="text">2</span></a>
    <a class="btn ghost size-sm"><span class="text">3</span></a>
    <a class="btn ghost size-sm"><span class="text">4</span></a>
    <a class="btn ghost size-sm"><span class="text">5</span></a>
    <a class="btn ghost size-sm"><span class="text">6</span></a>
    <a class="btn ghost square size-sm" title="下一页"><i class="icon icon-angle-right"></i></a>
    <a class="btn ghost square size-sm" title="最后一页"><i class="icon icon-double-angle-right"></i></a>
    <div class="input-group size-sm pager-goto">
      <input type="number" class="form-control" max="6" min="1">
      <button class="btn ghost input-group-addon" type="button"><span class="text">跳转</span></button>
    </div>
  </nav>
</Example>

```html
<nav class="pager gap-1">
  <a class="btn ghost square size-sm" title="第一页"><i class="icon icon-double-angle-left"></i></a>
  <a class="btn ghost square size-sm" title="上一页"><i class="icon icon-angle-left"></i></a>
  <a class="btn ghost size-sm"><span class="text">1</span></a>
  <a class="btn ghost size-sm"><span class="text">2</span></a>
  <a class="btn ghost size-sm"><span class="text">3</span></a>
  <a class="btn ghost size-sm"><span class="text">4</span></a>
  <a class="btn ghost size-sm"><span class="text">5</span></a>
  <a class="btn ghost size-sm"><span class="text">6</span></a>
  <a class="btn ghost square size-sm" title="下一页"><i class="icon icon-angle-right"></i></a>
  <a class="btn ghost square size-sm" title="最后一页"><i class="icon icon-double-angle-right"></i></a>
  <div class="input-group size-sm pager-goto">
    <input type="number" class="form-control" max="6" min="1">
    <button class="btn ghost input-group-addon" type="button"><span class="text">跳转</span></button>
  </div>
</nav>
```

## 综合展示

展示所有的附加项配置。

<Example>
  <nav class="pager gap-1">
    <div>共 51 项</div>
    <button class="btn ghost dropdown pager-size-menu size-sm" type="button" data-toggle="dropdown" data-dropdown-placement="top" href="#dropdownMenu1">
      <span class="text">每页 10 项</span><span class="caret-up"></span>
    </button>
    <a class="btn ghost square size-sm" title="第一页"><i class="icon icon-double-angle-left"></i></a>
    <a class="btn ghost square size-sm" title="上一页"><i class="icon icon-angle-left"></i></a>
    <a class="btn ghost size-sm"><span class="text">1</span></a>
    <a class="btn ghost size-sm"><span class="text">2</span></a>
    <a class="btn ghost size-sm"><span class="text">3</span></a>
    <a class="btn ghost size-sm"><span class="text">4</span></a>
    <a class="btn ghost size-sm"><span class="text">5</span></a>
    <a class="btn ghost size-sm"><span class="text">6</span></a>
    <a class="btn ghost square size-sm" title="下一页"><i class="icon icon-angle-right"></i></a>
    <a class="btn ghost square size-sm" title="最后一页"><i class="icon icon-double-angle-right"></i></a>
    <div class="input-group size-sm pager-goto">
      <input type="number" class="form-control" max="6" min="1">
      <button class="btn ghost input-group-addon" type="button"><span class="text">跳转</span></button>
    </div>
  </nav>
  <div class="dropdown-menu" id="dropdownMenu1" data-popper-placement="top">
    <menu class="menu pager-size-menu menu-context">
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=5"><span class="text">5</span></a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=10"><span class="text">10</span></a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=15"><span class="text">15</span></a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=20"><span class="text">20</span></a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=25"><span class="text">25</span></a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=30"><span class="text">30</span></a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=35"><span class="text">35</span></a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=40"><span class="text">40</span></a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=45"><span class="text">45</span></a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=50"><span class="text">50</span></a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=100"><span class="text">100</span></a></li>
    </menu>
  </div>
  <nav class="pager gap-1">
    <div>共 51 项</div>
    <button class="btn ghost dropdown pager-size-menu size-sm" type="button" data-toggle="dropdown" data-dropdown-placement="top" href="#dropdownMenu2">
      <span class="text">每页 10 项</span><span class="caret-up"></span>
    </button>
    <a class="btn ghost square size-sm" title="第一页"><i class="icon icon-double-angle-left"></i></a>
    <a class="btn ghost square size-sm" title="上一页"><i class="icon icon-angle-left"></i></a>
    <div>2/11</div>
    <a class="btn ghost square size-sm" title="下一页"><i class="icon icon-angle-right"></i></a>
    <a class="btn ghost square size-sm" title="最后一页"><i class="icon icon-double-angle-right"></i></a>
    <div class="input-group size-sm pager-goto">
      <input type="number" class="form-control" max="6" min="1">
      <button class="btn ghost input-group-addon" type="button"><span class="text">跳转</span></button>
    </div>
  </nav>
  <div class="dropdown-menu" id="dropdownMenu2" data-popper-placement="top">
    <menu class="menu pager-size-menu menu-context">
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=5"><span class="text">5</span></a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=10"><span class="text">10</span></a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=15"><span class="text">15</span></a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=20"><span class="text">20</span></a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=25"><span class="text">25</span></a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=30"><span class="text">30</span></a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=35"><span class="text">35</span></a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=40"><span class="text">40</span></a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=45"><span class="text">45</span></a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=50"><span class="text">50</span></a></li>
      <li class="menu-item"><a href="#?page=2&amp;recPerPage=100"><span class="text">100</span></a></li>
    </menu>
  </div>
</Example>

```html
<nav class="pager gap-1">
  <div>共 51 项</div>
  <button class="btn ghost dropdown pager-size-menu size-sm" type="button" data-toggle="dropdown" data-dropdown-placement="top" href="#dropdownMenu1">
    <span class="text">每页 10 项</span><span class="caret-up"></span>
  </button>
  <a class="btn ghost square size-sm" title="第一页"><i class="icon icon-double-angle-left"></i></a>
  <a class="btn ghost square size-sm" title="上一页"><i class="icon icon-angle-left"></i></a>
  <a class="btn ghost size-sm"><span class="text">1</span></a>
  <a class="btn ghost size-sm"><span class="text">2</span></a>
  <a class="btn ghost size-sm"><span class="text">3</span></a>
  <a class="btn ghost size-sm"><span class="text">4</span></a>
  <a class="btn ghost size-sm"><span class="text">5</span></a>
  <a class="btn ghost size-sm"><span class="text">6</span></a>
  <a class="btn ghost square size-sm" title="下一页"><i class="icon icon-angle-right"></i></a>
  <a class="btn ghost square size-sm" title="最后一页"><i class="icon icon-double-angle-right"></i></a>
  <div class="input-group size-sm pager-goto">
    <input type="number" class="form-control" max="6" min="1">
    <button class="btn ghost input-group-addon" type="button"><span class="text">跳转</span></button>
  </div>
</nav>
<div class="dropdown-menu" id="dropdownMenu1" data-popper-placement="top">
  <menu class="menu pager-size-menu menu-context">
    <li class="menu-item"><a href="#?page=2&amp;recPerPage=5"><span class="text">5</span></a></li>
    ...
  </menu>
</div>
```

## CSS 类

分页提供了如下 CSS 类：

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `pager`      | 实体类 | 元素作为分页组件 |
| `pager-goto`    | 实体类      |  元素作为分页的跳转组件 |
| `pager-size-menu`    | 实体类    |  元素作为分页的每页条数的下拉组件 |
