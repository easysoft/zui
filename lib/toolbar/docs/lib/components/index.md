# 工具栏

## 使用方法

::: tabs

== 示例

<Example class="col gap-2">
  <nav class="toolbar">
    <button class="btn ghost" type="button"><span class="text">全部</span></button>
    <button class="btn primary-pale font-bold" type="button"><span class="text">未关闭</span></button>
    <button class="btn ghost" type="button"><span class="text">未开始</span></button>
    <button class="btn ghost" type="button"><span class="text">进行中</span></button>
    <button class="btn ghost" type="button"><span class="text">已挂起</span></button>
    <button class="btn ghost" type="button"><span class="text">已关闭</span></button>
    <button class="btn ghost" type="button"><i class="icon icon-search"></i><span class="text">搜索</span></button>
  </nav>
</Example>

== HTML

```html
<nav class="toolbar">
  <button class="btn ghost dropdown toolbar-dropdown square" title="更多" type="button" data-toggle="dropdown" href="#dropdownForToolbar1">
    <i class="icon icon-ellipsis-h"></i>
  </button>
  <button class="btn ghost text-secondary square" title="发起会议" type="button">
    <i class="icon icon-phone"></i>
  </button>
  <button class="btn ghost text-warning square" title="消息记录" type="button">
    <i class="icon icon-chat-dot"></i>
  </button>
  <button class="btn ghost text-important square" title="打开侧边栏" type="button">
    <i class="icon icon-step-forward"></i>
  </button>
</nav>
<div class="dropdown-menu" id="dropdownForToolbar1">
  <menu class="menu menu-context">
    <li class="menu-item"><a><span class="text">取消置顶</span></a></li>
    <li class="menu-item"><a><span class="text">开启免打扰</span></a></li>
    <li class="menu-item"><a><span class="text">取消订阅</span></a></li>
  </menu>
</div>
<nav class="toolbar">
  <button class="btn ghost" type="button"><span class="text">全部</span></button>
  <button class="btn ghost primary-pale font-bold active" type="button"><span class="text">未关闭</span></button>
  <button class="btn ghost" type="button"><span class="text">未开始</span></button>
  <button class="btn ghost" type="button"><span class="text">进行中</span></button>
  <button class="btn ghost" type="button"><span class="text">已挂起</span></button>
  <button class="btn ghost" type="button"><span class="text">已关闭</span></button>
  <button class="btn ghost" type="button"><i class="icon icon-search"></i><span class="text">搜索</span></button>
</nav>
```

:::

## 图标工具栏

::: tabs

== 示例

<Example>
  <nav class="toolbar">
    <button class="btn ghost dropdown toolbar-dropdown square" title="段落" type="button" data-toggle="dropdown" href="#dropdownForToolbar2"><i class="icon icon-header"></i><span class="caret-down"></span></button>
    <button class="btn ghost dropdown toolbar-dropdown square" title="字体" type="button" data-toggle="dropdown" href="#dropdownForToolbar3"><i class="icon icon-font"></i><span class="caret-down"></span></button>
    <button class="btn ghost square" title="粗体" type="button"><i class="icon icon-bold"></i></button>
    <button class="btn ghost square" title="斜体" type="button"><i class="icon icon-italic"></i></button>
    <button class="btn ghost square" title="下划线" type="button"><i class="icon icon-underline"></i></button>
    <button class="btn ghost square" title="消除线" type="button"><i class="icon icon-strikethrough"></i></button>
    <button class="btn ghost square" title="清楚格式" type="button"><i class="icon icon-eraser"></i></button>
    <button class="btn ghost square" title="自动对齐" type="button"><i class="icon icon-align-justify"></i></button>
    <div class="divider"></div>
    <button class="btn ghost square" title="左对齐" type="button"><i class="icon icon-align-left"></i></button>
    <button class="btn ghost square" title="项目符号" type="button"><i class="icon icon-list"></i></button>
    <button class="btn ghost square" title="插入表情" type="button"><i class="icon icon-smile"></i></button>
    <button class="btn ghost square" title="图片" type="button"><i class="icon icon-picture"></i></button>
    <button class="btn ghost square" title="超级链接" type="button"><i class="icon icon-link"></i></button>
    <button class="btn ghost square" title="后退" type="button"><i class="icon icon-reply"></i></button>
    <button class="btn ghost square" title="前进" type="button"><i class="icon icon-share-alt"></i></button>
    <div class="divider"></div>
    <button class="btn ghost square" title="全屏" type="button"><i class="icon icon-resize"></i></button>
  </nav>
  <div class="dropdown-menu" id="dropdownForToolbar2">
    <menu class="menu menu-context">
      <li class="menu-item"><a><span class="text">标题1</span></a></li>
      <li class="menu-item"><a><span class="text">标题2</span></a></li>
      <li class="menu-item"><a><span class="text">标题3</span></a></li>
      <li class="menu-item"><a><span class="text">正文</span></a></li>
    </menu>
  </div>
  <div class="dropdown-menu" id="dropdownForToolbar3">
    <menu class="menu menu-context">
      <li class="menu-item"><a><span class="text">宋体</span></a></li>
      <li class="menu-item"><a><span class="text">新宋体</span></a></li>
      <li class="menu-item"><a><span class="text">仿宋体</span></a></li>
    </menu>
  </div>
</Example>

== HTML

```html
<nav class="toolbar">
  <button class="btn ghost dropdown toolbar-dropdown square" title="段落" type="button" data-toggle="dropdown" href="#dropdownForToolbar2"><i class="icon icon-header"></i><span class="caret-down"></span></button>
  <button class="btn ghost dropdown toolbar-dropdown square" title="字体" type="button" data-toggle="dropdown" href="#dropdownForToolbar3"><i class="icon icon-font"></i><span class="caret-down"></span></button>
  <button class="btn ghost square" title="粗体" type="button"><i class="icon icon-bold"></i></button>
  <button class="btn ghost square" title="斜体" type="button"><i class="icon icon-italic"></i></button>
  <button class="btn ghost square" title="下划线" type="button"><i class="icon icon-underline"></i></button>
  <button class="btn ghost square" title="消除线" type="button"><i class="icon icon-strikethrough"></i></button>
  <button class="btn ghost square" title="清楚格式" type="button"><i class="icon icon-eraser"></i></button>
  <button class="btn ghost square" title="自动对齐" type="button"><i class="icon icon-align-justify"></i></button>
  <div class="divider"></div>
  <button class="btn ghost square" title="左对齐" type="button"><i class="icon icon-align-left"></i></button>
  <button class="btn ghost square" title="项目符号" type="button"><i class="icon icon-list"></i></button>
  <button class="btn ghost square" title="插入表情" type="button"><i class="icon icon-smile"></i></button>
  <button class="btn ghost square" title="图片" type="button"><i class="icon icon-picture"></i></button>
  <button class="btn ghost square" title="超级链接" type="button"><i class="icon icon-link"></i></button>
  <button class="btn ghost square" title="后退" type="button"><i class="icon icon-reply"></i></button>
  <button class="btn ghost square" title="前进" type="button"><i class="icon icon-share-alt"></i></button>
  <div class="divider"></div>
  <button class="btn ghost square" title="全屏" type="button"><i class="icon icon-resize"></i></button>
</nav>
<div class="dropdown-menu" id="dropdownForToolbar2">
  <menu class="menu menu-context">
    <li class="menu-item"><a><span class="text">标题1</span></a></li>
    <li class="menu-item"><a><span class="text">标题2</span></a></li>
    <li class="menu-item"><a><span class="text">标题3</span></a></li>
    <li class="menu-item"><a><span class="text">正文</span></a></li>
  </menu>
</div>
<div class="dropdown-menu" id="dropdownForToolbar3">
  <menu class="menu menu-context">
    <li class="menu-item"><a><span class="text">宋体</span></a></li>
    <li class="menu-item"><a><span class="text">新宋体</span></a></li>
    <li class="menu-item"><a><span class="text">仿宋体</span></a></li>
  </menu>
</div>
```

:::

## CSS 类

头像提供了如下 CSS 类：

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `toolbar`      | 实体类 | 元素作为工具栏 |
