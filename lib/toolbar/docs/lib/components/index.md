# 工具栏

## 使用方法

下面分别展示项目状态筛选和会话操作；每组按钮围绕同一种工作场景组织。

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
    <button class="btn ghost" type="button"><i class="magnifier"></i><span class="text">搜索</span></button>
  </nav>
</Example>

== HTML

```html
<nav class="toolbar">
  <button class="btn ghost dropdown toolbar-dropdown square" title="更多" type="button" data-toggle="dropdown" href="#dropdownForToolbar1">
    <i class="more"></i>
  </button>
  <button class="btn ghost text-secondary square" title="发起会议" type="button">
    <i class="example-icon example-icon-phone" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M4%202h5l2%206-4%202c2%204%204%206%207%207l2-4%206%202v5C12%2026-2%2012%204%202z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i>
  </button>
  <button class="btn ghost text-warning square" title="消息记录" type="button">
    <i class="example-icon example-icon-chat-dot" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%203h18v14H9l-6%204zM7%2010h.01M12%2010h.01M17%2010h.01%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i>
  </button>
  <button class="btn ghost text-important square" title="打开侧边栏" type="button">
    <i class="example-icon example-icon-play" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M6%203l15%209-15%209z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i>
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
  <button class="btn ghost" type="button"><i class="magnifier"></i><span class="text">搜索</span></button>
</nav>
```

:::

## 图标工具栏

::: tabs

== 示例

<Example>
  <nav class="toolbar">
    <button class="btn ghost dropdown toolbar-dropdown square" title="段落" type="button" data-toggle="dropdown" href="#dropdownForToolbar2"><i class="example-icon example-icon-font" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ctext%20x%3D%224%22%20y%3D%2219%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22bold%22%3EA%3C%2Ftext%3E%3C%2Fsvg%3E) center / contain no-repeat"></i><span class="caret-down"></span></button>
    <button class="btn ghost dropdown toolbar-dropdown square" title="字体" type="button" data-toggle="dropdown" href="#dropdownForToolbar3"><i class="example-icon example-icon-font" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ctext%20x%3D%224%22%20y%3D%2219%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22bold%22%3EA%3C%2Ftext%3E%3C%2Fsvg%3E) center / contain no-repeat"></i><span class="caret-down"></span></button>
    <button class="btn ghost square" title="粗体" type="button"><i class="example-icon example-icon-bold" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ctext%20x%3D%224%22%20y%3D%2219%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22bold%22%3EB%3C%2Ftext%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></button>
    <button class="btn ghost square" title="斜体" type="button"><i class="example-icon example-icon-italic" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ctext%20x%3D%224%22%20y%3D%2219%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22bold%22%3EI%3C%2Ftext%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></button>
    <button class="btn ghost square" title="下划线" type="button"><i class="example-icon example-icon-underline" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ctext%20x%3D%224%22%20y%3D%2219%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22bold%22%3EU%3C%2Ftext%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></button>
    <button class="btn ghost square" title="删除线" type="button"><i class="example-icon example-icon-strikethrough" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ctext%20x%3D%224%22%20y%3D%2219%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22bold%22%3ES%3C%2Ftext%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></button>
    <button class="btn ghost square" title="清除格式" type="button"><i class="example-icon example-icon-eraser" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2014L15%202l8%208-12%2012H7zM8%209l8%208M13%2022h10%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></button>
    <button class="btn ghost square" title="两端对齐" type="button"><i class="i-menu"></i></button>
    <div class="divider"></div>
    <button class="btn ghost square" title="左对齐" type="button"><i class="i-menu"></i></button>
    <button class="btn ghost square" title="项目符号" type="button"><i class="i-menu"></i></button>
    <button class="btn ghost square" title="插入表情" type="button"><i class="example-icon example-icon-smile" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M2%2012a10%2010%200%201%200%2020%200%2010%2010%200%201%200-20%200M7%208h1m8%200h1M7%2015q5%206%2010%200%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></button>
    <button class="btn ghost square" title="图片" type="button"><i class="example-icon example-icon-picture" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M2%203h20v18H2zM2%2017l6-7%205%206%203-3%206%205M15%207h.01%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></button>
    <button class="btn ghost square" title="超级链接" type="button"><i class="example-icon example-icon-link" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M9%207l3-3c6-6%2014%202%208%208l-3%203M7%209l-3%203c-6%206%202%2014%208%208l3-3M8%2016l8-8%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></button>
    <button class="btn ghost square" title="撤销" type="button"><i class="example-icon example-icon-reply" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M10%203L2%2010l8%207v-5c8%200%2010%203%2012%208%200-10-4-13-12-13z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></button>
    <button class="btn ghost square" title="重做" type="button"><i class="example-icon example-icon-share-alt" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M14%203l8%207-8%207v-5C6%2012%204%2015%202%2020%202%2010%206%207%2014%207z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></button>
    <div class="divider"></div>
    <button class="btn ghost square" title="全屏" type="button"><i class="example-icon example-icon-resize" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2010V3h7M14%203h7v7M21%2014v7h-7M10%2021H3v-7%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></button>
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
  <button class="btn ghost dropdown toolbar-dropdown square" title="段落" type="button" data-toggle="dropdown" href="#dropdownForToolbar2"><i class="example-icon example-icon-font" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ctext%20x%3D%224%22%20y%3D%2219%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22bold%22%3EA%3C%2Ftext%3E%3C%2Fsvg%3E) center / contain no-repeat"></i><span class="caret-down"></span></button>
  <button class="btn ghost dropdown toolbar-dropdown square" title="字体" type="button" data-toggle="dropdown" href="#dropdownForToolbar3"><i class="example-icon example-icon-font" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ctext%20x%3D%224%22%20y%3D%2219%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22bold%22%3EA%3C%2Ftext%3E%3C%2Fsvg%3E) center / contain no-repeat"></i><span class="caret-down"></span></button>
  <button class="btn ghost square" title="粗体" type="button"><i class="example-icon example-icon-bold" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ctext%20x%3D%224%22%20y%3D%2219%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22bold%22%3EB%3C%2Ftext%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></button>
  <button class="btn ghost square" title="斜体" type="button"><i class="example-icon example-icon-italic" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ctext%20x%3D%224%22%20y%3D%2219%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22bold%22%3EI%3C%2Ftext%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></button>
  <button class="btn ghost square" title="下划线" type="button"><i class="example-icon example-icon-underline" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ctext%20x%3D%224%22%20y%3D%2219%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22bold%22%3EU%3C%2Ftext%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></button>
  <button class="btn ghost square" title="删除线" type="button"><i class="example-icon example-icon-strikethrough" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ctext%20x%3D%224%22%20y%3D%2219%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22bold%22%3ES%3C%2Ftext%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></button>
  <button class="btn ghost square" title="清除格式" type="button"><i class="example-icon example-icon-eraser" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2014L15%202l8%208-12%2012H7zM8%209l8%208M13%2022h10%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></button>
  <button class="btn ghost square" title="两端对齐" type="button"><i class="i-menu"></i></button>
  <div class="divider"></div>
  <button class="btn ghost square" title="左对齐" type="button"><i class="i-menu"></i></button>
  <button class="btn ghost square" title="项目符号" type="button"><i class="i-menu"></i></button>
  <button class="btn ghost square" title="插入表情" type="button"><i class="example-icon example-icon-smile" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M2%2012a10%2010%200%201%200%2020%200%2010%2010%200%201%200-20%200M7%208h1m8%200h1M7%2015q5%206%2010%200%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></button>
  <button class="btn ghost square" title="图片" type="button"><i class="example-icon example-icon-picture" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M2%203h20v18H2zM2%2017l6-7%205%206%203-3%206%205M15%207h.01%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></button>
  <button class="btn ghost square" title="超级链接" type="button"><i class="example-icon example-icon-link" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M9%207l3-3c6-6%2014%202%208%208l-3%203M7%209l-3%203c-6%206%202%2014%208%208l3-3M8%2016l8-8%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></button>
  <button class="btn ghost square" title="撤销" type="button"><i class="example-icon example-icon-reply" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M10%203L2%2010l8%207v-5c8%200%2010%203%2012%208%200-10-4-13-12-13z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></button>
  <button class="btn ghost square" title="重做" type="button"><i class="example-icon example-icon-share-alt" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M14%203l8%207-8%207v-5C6%2012%204%2015%202%2020%202%2010%206%207%2014%207z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></button>
  <div class="divider"></div>
  <button class="btn ghost square" title="全屏" type="button"><i class="example-icon example-icon-resize" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2010V3h7M14%203h7v7M21%2014v7h-7M10%2021H3v-7%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></button>
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
