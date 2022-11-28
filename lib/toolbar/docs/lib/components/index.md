# 工具栏

## 基本用法

<Example class="col gap-2">
  <nav class="toolbar">
    <button class="btn ghost toolbar-item"><i class="icon icon-home"></i><span class="text">首页</span></button>
    <button class="btn ghost toolbar-item"><span class="text">动态</span></button>
    <button class="btn ghost toolbar-item"><span class="text">论坛</span></button>
    <div class="toolbar-divider"></div>
    <button class="btn ghost toolbar-item"><i class="icon icon-rss"></i><span class="text">博客</span></button>
    <div class="toolbar-space" style="flex: 1 1 0%;"></div>
    <div class="btn-group toolbar-btn-group">
      <button class="btn" type="button"><i class="icon icon-user"></i><span class="text">登录</span></button>
      <button class="btn" type="button"><i class="icon icon-lock"></i><span class="text">注册</span></button>
    </div>
  </nav>
  <nav class="toolbar">
    <button class="btn ghost toolbar-item square" type="button"><i class="icon icon-home"></i></button><div class="toolbar-divider"></div>
    <button class="btn ghost toolbar-item square" type="button"><i class="icon icon-rss"></i></button>
    <button class="btn ghost toolbar-item square" type="button"><i class="icon icon-group"></i></button>
  </nav>
</Example>

```html
<nav class="toolbar">
  <button class="btn ghost toolbar-item"><i class="icon icon-home"></i><span class="text">首页</span></button>
  <button class="btn ghost toolbar-item"><span class="text">动态</span></button>
  <button class="btn ghost toolbar-item"><span class="text">论坛</span></button>
  <div class="toolbar-divider"></div>
  <button class="btn ghost toolbar-item"><i class="icon icon-rss"></i><span class="text">博客</span></button>
  <div class="toolbar-space" style="flex: 1 1 0%;"></div>
  <div class="btn-group toolbar-btn-group">
    <button class="btn" type="button"><i class="icon icon-user"></i><span class="text">登录</span></button>
    <button class="btn" type="button"><i class="icon icon-lock"></i><span class="text">注册</span></button>
  </div>
</nav>
<nav class="toolbar">
  <button class="btn ghost toolbar-item square" type="button"><i class="icon icon-home"></i></button><div class="toolbar-divider"></div>
  <button class="btn ghost toolbar-item square" type="button"><i class="icon icon-rss"></i></button>
  <button class="btn ghost toolbar-item square" type="button"><i class="icon icon-group"></i></button>
</nav>
```

## 禁用

为 `.toolbar-item` 同级提供 `disabled` 修饰类来禁用工具栏项。被禁用的工具栏项将无法响应点击事件。

<Example>
  <nav class="toolbar">
    <button class="btn ghost toolbar-item"><i class="icon icon-home"></i><span class="text">首页</span></button>
    <button class="btn ghost toolbar-item"><span class="text">动态</span></button>
    <button class="btn ghost toolbar-item"><span class="text">论坛</span></button>
    <div class="toolbar-divider"></div>
    <button class="btn ghost toolbar-item disabled"><i class="icon icon-rss"></i><span class="text">博客</span></button>
  </nav>
</Example>

```html
<nav class="toolbar">
  <button class="btn ghost toolbar-item"><i class="icon icon-home"></i><span class="text">首页</span></button>
  ...
  <div class="toolbar-divider"></div>
  <button class="btn ghost toolbar-item disabled"><i class="icon icon-rss"></i><span class="text">博客</span></button>
</nav>
```

## 存在下拉菜单

结合[下拉菜单](/lib/components/dropdown/)实现多功能工具栏。

<Example>
  <nav class="toolbar">
    <button class="btn ghost toolbar-item" type="button">
      <i class="icon icon-home"></i>
      <span class="text">首页</span>
    </button>
    <button class="btn ghost dropdown toolbar-dropdown square with-dropdown-show" type="button" data-toggle="dropdown" data-dropdown-placement="bottom" href="#dropdownForToolbar1">
      <i class="icon icon-rss"></i>
      <span class="caret-down"></span>
    </button>
    <div class="toolbar-divider"></div>
    <button class="btn ghost dropdown toolbar-dropdown" type="button" data-toggle="dropdown" href="#dropdownForToolbar2">
      <i class="icon icon-group"></i>
      <span class="text">关于我们</span>
      <span class="caret-down"></span>
    </button>
  </nav>
  <div class="dropdown-menu" id="dropdownForToolbar1" data-popper-placement="bottom-start" >
    <menu class="menu menu-context">
      <li class="menu-item"><a><span class="text">查看</span></a></li>
      <li class="menu-item"><a><span class="text">订阅</span></a></li>
      <li class="menu-item"><a><span class="text">取消订阅</span></a></li>
    </menu>
  </div>
  <div class="dropdown-menu" data-popper-placement="bottom-start" id="dropdownForToolbar2">
    <menu class="menu menu-context">
      <li class="menu-item"><a><span class="text">关于</span></a></li>
      <li class="menu-item"><a><span class="text">我们是谁</span></a></li>
    </menu>
  </div>
</Example>

```html
<nav class="toolbar">
  <button class="btn ghost toolbar-item" type="button">
    <i class="icon icon-home"></i>
    <span class="text">首页</span>
  </button>
  <button class="btn ghost dropdown toolbar-dropdown square with-dropdown-show" type="button" data-toggle="dropdown" data-dropdown-placement="bottom" href="#dropdownForToolbar1">
    <i class="icon icon-rss"></i>
    <span class="caret-down"></span>
  </button>
  <div class="toolbar-divider"></div>
  <button class="btn ghost dropdown toolbar-dropdown" type="button" data-toggle="dropdown"  href="#dropdownForToolbar2">
    <i class="icon icon-group"></i>
    <span class="text">关于我们</span>
    <span class="caret-down"></span>
  </button>
</nav>
<div class="dropdown-menu" id="dropdownForToolbar1" data-popper-placement="bottom-start" >
  <menu class="menu menu-context">
    <li class="menu-item"><a><span class="text">查看</span></a></li>
    <li class="menu-item"><a><span class="text">订阅</span></a></li>
    <li class="menu-item"><a><span class="text">取消订阅</span></a></li>
  </menu>
</div>
<div class="dropdown-menu" data-popper-placement="bottom-start" id="dropdownForToolbar2">
  <menu class="menu menu-context">
    <li class="menu-item"><a><span class="text">关于</span></a></li>
    <li class="menu-item"><a><span class="text">我们是谁</span></a></li>
  </menu>
</div>
```

## 尺寸

当使用不同大小的工具栏组件时，可以通过为 `.toolbar-item` 添加同样等级的 `size-*` 辅助类获取其他尺寸外观。

同时也可以结合 [`gap-*`](/utilities/flex/utilities/gap.html) 和 [样式](/utilities/style/utilities/solid.html) 等工具类展示出视觉效果良好的工具栏组件。

<Example class="col gap-2">
  <nav class="toolbar gap-2">
    <button class="btn size-xs toolbar-item square secondary" type="button"><i class="icon icon-home"></i></button>
    <button class="btn size-xs toolbar-item square secondary" type="button"><i class="icon icon-rss"></i></button>
    <button class="btn size-xs toolbar-item square secondary" type="button"><i class="icon icon-group"></i></button>
  </nav>
  <nav class="toolbar gap-2">
    <button class="btn size-sm toolbar-item square secondary" type="button"><i class="icon icon-home"></i></button>
    <button class="btn size-sm toolbar-item square secondary" type="button"><i class="icon icon-rss"></i></button>
    <button class="btn size-sm toolbar-item square secondary" type="button"><i class="icon icon-group"></i></button>
  </nav>
  <nav class="toolbar gap-2">
    <button class="btn secondary size-lg toolbar-item square" type="button"><i class="icon icon-home"></i></button>
    <button class="btn secondary size-lg toolbar-item square" type="button"><i class="icon icon-rss"></i></button>
    <button class="btn secondary size-lg toolbar-item square" type="button"><i class="icon icon-group"></i></button>
  </nav>
  <nav class="toolbar gap-2">
    <button class="btn size-xl toolbar-item square secondary" type="button"><i class="icon icon-home"></i></button>
    <button class="btn size-xl toolbar-item square secondary" type="button"><i class="icon icon-rss"></i></button>
    <button class="btn size-xl toolbar-item square secondary" type="button"><i class="icon icon-group"></i></button>
  </nav>
</Example>

```html
<nav class="toolbar gap-2">
  <button class="btn size-xs toolbar-item square secondary" type="button"><i class="icon icon-home"></i></button>
  ...
</nav>
<nav class="toolbar gap-2">
  <button class="btn size-sm toolbar-item square secondary" type="button"><i class="icon icon-home"></i></button>
  ...
</nav>
<nav class="toolbar gap-2">
  <button class="btn secondary size-lg toolbar-item square" type="button"><i class="icon icon-home"></i></button>
  ...
</nav>
<nav class="toolbar gap-2">
  <button class="btn size-xl toolbar-item square secondary" type="button"><i class="icon icon-home"></i></button>
  ...
</nav>
```


## CSS 类

头像提供了如下 CSS 类：

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `toolbar`      | 实体类 | 元素作为工具栏 |
| `toolbar-item`      | 实体类 | 元素作为工具栏项 |
| `toolbar-divider`      | 实体类      |   元素作为分割线 |
| `toolbar-space`      | 实体类      |  元素作为工具栏项之前的间距 |
| `disabled`      | 修饰类      |   与 `toolbar-item` 一起使用，标记工具栏项为禁用状态 |
