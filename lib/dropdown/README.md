## 下拉菜单

```html:example: -flex -gap-3 of-visible
<button class="btn" type="button" data-toggle="dropdown">菜单按钮 <span class="caret"></span></button>
<menu class="dropdown-menu menu">
  <li class="menu-item"><a>操作</a></li>
  <li class="menu-item"><a>另一个操作</a></li>
  <li class="menu-item"><a>更多操作</a></li>
</menu>
```

## 鼠标悬停展开菜单

添加属性 `[data-hover]` 实现鼠标悬停展开菜单

```html:example: -flex -gap-3
<button class="btn" type="button" data-toggle="dropdown" data-hover>鼠标悬停展开菜单按钮 <span class="caret"></span></button>
<menu class="dropdown-menu menu">
  <li class="menu-item"><a>操作</a></li>
  <li class="menu-item"><a>另一个操作</a></li>
  <li class="menu-item"><a>更多操作</a></li>
</menu>
```

## 弹出方向

通过 `data-placement` 控制弹出方向。

```html:example: -flex -gap-3
<button class="btn" type="button" data-toggle="dropdown" data-placement="top-start">上方左侧对齐 <span class="caret"></span></button>
<ul class="dropdown-menu menu">
  <li class="menu-item"><a>操作</a></li>
  <li class="menu-item"><a>另一个操作</a></li>
  <li class="menu-item"><a>更多操作</a></li>
</ul>

<button class="btn" type="button" data-toggle="dropdown" data-placement="bottom-start">下方左侧对齐 <span class="caret"></span></button>
<ul class="dropdown-menu menu">
  <li class="menu-item"><a>操作</a></li>
  <li class="menu-item"><a>另一个操作</a></li>
  <li class="menu-item"><a>更多操作</a></li>
</ul>

<button class="btn" type="button" data-toggle="dropdown">上方右侧对齐 <span class="caret" data-placement="top-end"></span></button>
<ul class="dropdown-menu menu">
  <li class="menu-item"><a>操作</a></li>
  <li class="menu-item"><a>另一个操作</a></li>
  <li class="menu-item"><a>更多操作</a></li>
</ul>

<button class="btn" type="button" data-toggle="dropdown">下方右侧对齐 <span class="caret" data-placement="bottom-end"></span></button>
<ul class="dropdown-menu menu">
  <li class="menu-item"><a>操作</a></li>
  <li class="menu-item"><a>另一个操作</a></li>
  <li class="menu-item"><a>更多操作</a></li>
</ul>
```
## 多级子菜单
在 `.dropdown-menu` 内的 `<li> `内包含另一个 `.dropdown-menu` 从而实现多级子菜单。包含子菜单 `<li>` 需要添加额外的类 `.dropdown-submenu`。
一般情况下子菜单会在菜单项的右侧显示，但也可以为作为子菜单的 `.dropdown-menu` 添加 `.expand-left` 类来使得子菜单在左侧显示
```html:example: -flex -gap-3
<div class="dropdown">
  <button class="btn" type="button" data-toggle="dropdown">菜单按钮 <span class="caret"></span></button>
  <ul class="dropdown-menu menu">
    <li class="menu-item dropdown-submenu">
      <a>打开</a>
      <ul class="dropdown-menu menu">
        <li class="menu-item"><a>运行</a></li>
        <li class="menu-item"><a>在终端中打开</a></li>
        <li class="menu-item"><a>在编辑器中打开</a></li>
      </ul>
    </li>
    <li class="menu-item dropdown-submenu">
        <a>一组操作</a>
        <ul class="dropdown-menu menu">
            <li class="menu-item dropdown-submenu">
                <a>修改</a>
                <ul class="dropdown-menu menu">
                    <li class="menu-item"><a>修改标题</a></li>
                    <li class="menu-item"><a>更新内容</a></li>
                    <li class="menu-item"><a>转移</a></li>
                </ul>
            </li>
            <li class="menu-item dropdown-submenu">
                <a>删除</a>
                <ul class="dropdown-menu menu">
                    <li class="menu-item"><a>移动到回收站</a></li>
                    <li class="menu-item"><a>直接删除</a></li>
                </ul>
            </li>
            <li class="menu-item"><a>撤销</a></li>
        </ul>
    </li>
    <li class="menu-item dropdown-submenu">
        <a>另一组操作</a>
        <ul class="dropdown-menu menu">
            <li class="menu-item"><a>评审</a></li>
            <li class="menu-item"><a>计划</a></li>
            <li class="menu-item"><a>关闭</a></li>
        </ul>
    </li>
    <li class="menu-item dropdown-submenu">
      <ul class="dropdown-menu expand-left">
        <li class="menu-item"><a>复制</a></li>
        <li class="menu-item"><a>粘贴</a></li>
        <li class="menu-item"><a>剪切</a></li>
      </ul>
    </li>
  </ul>
</div>
```
## 自定义菜单

通常情况下下拉菜单列表使用 `<ul>` 元素，你也可以替换为其他元素或内容

```html:example: -flex -gap-3
<div class="dropdown">
    <button class="btn" type="button"
        data-toggle="dropdown">自定义下拉菜单 <span class="caret"></span></button>
    <div class="dropdown-menu dropdown-menu-table">
        <p class="px-3">自定义内容</p>
    </div>
</div>
```

## 禁用的菜单项

为菜单项` <li> `添加` .disabled` 类即可获得禁用外观。

```html:example: -flex -gap-3
<div class="dropdown">
    <button class="btn" type="button"
        data-toggle="dropdown">菜单按钮 <span class="caret"></span></button>
    <ul class="dropdown-menu menu">
      <li class="menu-item"><a>操作</a></li>
      <li class="disabled"><a>被禁用的操作</a></li>
    </ul>
</div>
```

## 标题和分割线

在 `.dropdown-menu` 内使用 `.dropdown-header `来显示标题，使用 `.divider` 来显示分割线。

```html:example: -flex -gap-3
<div class="dropdown">
    <button class="btn" type="button"
        data-toggle="dropdown">菜单按钮 <span class="caret"></span></button>
    <ul class="dropdown-menu menu">
      <li class="dropdown-header">下拉菜单标题</li>
      <li class="menu-item"><a>操作</a></li>
      <li class="menu-item"><a>另一个操作</a></li>
      <li class="divider"></li>
      <li class="dropdown-header">更多操作</li>
      <li class="menu-item"><a>修改</a></li>
    </ul>
</div>
```
