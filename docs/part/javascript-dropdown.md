section: javascript
id: dropdown
description: 浮动在页面之上的垂直菜单
icon: icon-align-justify
filter: xialacaidan xlcd
---

# 下拉菜单

下拉菜单用于实现当用户点击一个元素时弹出一个浮动的菜单层。

## 结构

下拉菜单由触发元素（例如按钮）和浮动（`.dropdown-menu`）组成。你需要为触发元素添加 `[data-toggle="dropdown"]` 属性。

触发元素和 浮动菜单 `.dropdown-menu` 通常都需要放置在 `.dropdown` 容器元素内，但也可以使用任何 `position: relative` 的元素作为下拉菜单容器。

### 示例

<example style="height: 164px">
  <div class="dropdown open">
    <button class="btn" type="button">菜单按钮 <span class="caret"></span></button>
    <ul class="dropdown-menu">
      <li><a href="###">操作</a></li>
      <li><a href="###">另一个操作</a></li>
      <li><a href="###">更多操作</a></li>
    </ul>
  </div>
</example>

```html
<div class="dropdown">
  <button class="btn" type="button" data-toggle="dropdown">菜单按钮 <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li><a href="###">操作</a></li>
    <li><a href="###">另一个操作</a></li>
    <li><a href="###">更多操作</a></li>
  </ul>
</div>
```

### 自动展开

默认情况下当点击触发按钮时会展开下拉菜单，如果需要自动（在鼠标悬停时展开），只需要为 `.dropdown` 增加 `.dropdown-hover` 类。

<example style="height: 164px">
  <div class="dropdown dropdown-hover">
    <button class="btn" type="button">鼠标悬停展开菜单按钮 <span class="caret"></span></button>
    <ul class="dropdown-menu">
      <li><a href="###">操作</a></li>
      <li><a href="###">另一个操作</a></li>
      <li><a href="###">更多操作</a></li>
    </ul>
  </div>
</example>

```html
<div class="dropdown dropdown-hover">
  <button class="btn" type="button" data-toggle="dropdown">鼠标悬停展开菜单按钮 <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li><a href="###">操作</a></li>
    <li><a href="###">另一个操作</a></li>
    <li><a href="###">更多操作</a></li>
  </ul>
</div>
```

## 使用按钮组

在[按钮组](#component/buttongroup) `.btn-group` 元素可以直接作为下拉菜单父级容器，从而不需要额外的 `.dropdown` 元素。

<example>
  <div class="btn-group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
      菜单按钮 <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" role="menu">
      <li><a href="###">操作</a></li>
      <li><a href="###">删除</a></li>
      <li class="divider"></li>
      <li><a href="###">撤销</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-danger">菜单按钮</button>
    <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" role="menu">
      <li><a href="###">操作</a></li>
      <li><a href="###">另一个操作</a></li>
      <li class="divider"></li>
      <li><a href="###">更多操作</a></li>
    </ul>
  </div>
</example>

```html
<!-- 按钮组 -->
<div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
    菜单按钮 <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" role="menu">
    <li><a href="###">操作</a></li>
    <li><a href="###">另一个操作</a></li>
    <li class="divider"></li>
    <li><a href="###">更多操作</a></li>
  </ul>
</div>
<!-- 分割按钮组 -->
<div class="btn-group">
  <button type="button" class="btn btn-danger">菜单按钮</button>
  <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" role="menu">
    <li><a href="###">操作</a></li>
    <li><a href="###">删除</a></li>
    <li class="divider"></li>
    <li><a href="###">撤销</a></li>
  </ul>
</div>
```

使用按钮组来实现下拉菜单的一个好处就是多个按钮组下拉菜单可以在一行显示。

## 下拉菜单三角图标

在下拉菜单按钮内包含 `<span class="caret"></span>` 来显示一个三角图标。你也可以使用 [字体图标](#control/icon) 来替代。

<example>
  <button class="btn" type="button">菜单按钮 <span class="caret"></span></button>
  <button class="btn" type="button">菜单按钮 <i class="icon-caret-down"></i></button>
  <button class="btn" type="button">更多 <i class="icon-ellipsis-v"></i></button>
</example>

```html
<button class="btn" type="button">菜单按钮 <span class="caret"></span></button>
```

```html
<button class="btn" type="button">菜单按钮 <i class="icon-caret-down"></i></button>
```

```html
<button class="btn" type="button">更多 <i class="icon-ellipsis-v"></i></button>
```

## 标题和分割线

在 `.dropdown-menu` 内使用 `.dropdown-header` 来显示标题，使用 `.divider` 来显示分割线。

<example style="height: 230px">
  <div class="dropdown open">
    <button class="btn" type="button">菜单按钮 <span class="caret"></span></button>
    <ul class="dropdown-menu">
      <li class="dropdown-header">下拉菜单标题</li>
      <li><a href="###">操作</a></li>
      <li><a href="###">另一个操作</a></li>
      <li class="divider"></li>
      <li class="dropdown-header">更多操作</li>
      <li><a href="###">修改</a></li>
    </ul>
  </div>
</example>

```html
<div class="dropdown open">
  <button class="btn" type="button" data-toggle="dropdown">菜单按钮 <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li class="dropdown-header">下拉菜单标题</li>
    <li><a href="###">操作</a></li>
    <li><a href="###">另一个操作</a></li>
    <li class="divider"></li>
    <li class="dropdown-header">更多操作</li>
    <li><a href="###">修改</a></li>
  </ul>
</div>
```

## 浮动方向

通常情况下，下拉菜单会在触发元素下发弹出，可以为下拉菜单父级元素(`.dropdown` 或 `.btn-group`）添加 `.dropup` 类时下拉菜单在出发元素上方弹出。

在水平方向上下拉菜单左侧会与触发元素的左侧对齐，为 `.dorpdown-menu` 添加 `.pull-right` 可以使得下拉菜单的右侧与触发元素的右侧对齐。

<example>
  <div class="btn-group">
    <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">下方左侧对齐 <span class="caret"></span></button>
    <ul class="dropdown-menu" role="menu">
      <li><a href="###">操作</a></li>
      <li><a href="###">另一个操作</a></li>
      <li class="divider"></li>
      <li><a href="###">更多操作</a></li>
    </ul>
  </div>
  <div class="btn-group dropup">
    <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">上方左侧对齐 <span class="caret"></span></button>
    <ul class="dropdown-menu" role="menu">
      <li><a href="###">操作</a></li>
      <li><a href="###">另一个操作</a></li>
      <li class="divider"></li>
      <li><a href="###">更多操作</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">下方右侧对齐 <span class="caret"></span></button>
    <ul class="dropdown-menu pull-right" role="menu">
      <li><a href="###">操作</a></li>
      <li><a href="###">另一个操作</a></li>
      <li class="divider"></li>
      <li><a href="###">更多操作</a></li>
    </ul>
  </div>
  <div class="btn-group dropup">
    <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">上方右侧对齐 <span class="caret"></span></button>
    <ul class="dropdown-menu pull-right" role="menu">
      <li><a href="###">操作</a></li>
      <li><a href="###">另一个操作</a></li>
      <li class="divider"></li>
      <li><a href="###">更多操作</a></li>
    </ul>
  </div>
</example>

```html
<div class="btn-group">
  <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">下方左侧对齐 <span class="caret"></span></button>
  <ul class="dropdown-menu" role="menu">
    <li><a href="###">操作</a></li>
    <li><a href="###">另一个操作</a></li>
    <li class="divider"></li>
    <li><a href="###">更多操作</a></li>
  </ul>
</div>
```

```html
<div class="btn-group dropup">
  <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">上方左侧对齐 <span class="caret"></span></button>
  <ul class="dropdown-menu" role="menu">
    <li><a href="###">操作</a></li>
    <li><a href="###">另一个操作</a></li>
    <li class="divider"></li>
    <li><a href="###">更多操作</a></li>
  </ul>
</div>
```

```html
<div class="btn-group">
  <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">下方右侧对齐 <span class="caret"></span></button>
  <ul class="dropdown-menu pull-right" role="menu">
    <li><a href="###">操作</a></li>
    <li><a href="###">另一个操作</a></li>
    <li class="divider"></li>
    <li><a href="###">更多操作</a></li>
  </ul>
</div>
```

```html
<div class="btn-group dropup">
  <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">上方右侧对齐 <span class="caret"></span></button>
  <ul class="dropdown-menu pull-right" role="menu">
    <li><a href="###">操作</a></li>
    <li><a href="###">另一个操作</a></li>
    <li class="divider"></li>
    <li><a href="###">更多操作</a></li>
  </ul>
</div>
```

## 多级子菜单

可以在 `.dropdown-menu` 内的 `<li>` 内包含另一个 `.dropdown-menu` 从而实现多级子菜单。包含子菜单 `<li>` 需要添加额外的类 `.dropdown-submenu`。

一般情况下子菜单会在菜单项的右侧显示，但也可以为作为子菜单的 `.dropdown-menu` 添加 `.pull-left` 类来使得子菜单在左侧显示。

<example style="height: 210px; padding-left: 140px">
  <div class="dropdown open">
    <button class="btn" type="button" data-toggle="dropdown">菜单按钮 <span class="caret"></span></button>
    <ul class="dropdown-menu">
      <li class="dropdown-submenu">
        <a href="###">打开</a>
        <ul class="dropdown-menu">
          <li><a href="###">运行</a></li>
          <li><a href="###">在终端中打开</a></li>
          <li><a href="###">在编辑器中打开</a></li>
        </ul>
      </li>
      <li class="dropdown-submenu">
        <a href="###">一组操作</a>
        <ul class="dropdown-menu">
          <li class="dropdown-submenu">
            <a href="###">修改</a>
            <ul class="dropdown-menu">
              <li><a href="###">修改标题</a></li>
              <li><a href="###">更新内容</a></li>
              <li><a href="###">转移</a></li>
            </ul>
          </li>
          <li class="dropdown-submenu">
            <a href="###">删除</a>
            <ul class="dropdown-menu">
              <li><a href="###">移动到回收站</a></li>
              <li><a href="###">直接删除</a></li>
            </ul>
          </li>
          <li><a href="###">撤销</a></li>
        </ul>
      </li>
      <li class="dropdown-submenu">
        <a href="###">另一组操作</a>
        <ul class="dropdown-menu">
          <li><a href="###">评审</a></li>
          <li><a href="###">计划</a></li>
          <li><a href="###">关闭</a></li>
        </ul>
      </li>
      <li class="divider"></li>
      <li class="dropdown-submenu">
        <a href="###">在左侧显示</a>
        <ul class="dropdown-menu pull-left">
          <li><a href="###">复制</a></li>
          <li><a href="###">粘贴</a></li>
          <li><a href="###">剪切</a></li>
        </ul>
      </li>
    </ul>
  </div>
</example>

<template class="pre-scrollable linenums"/>

```html
<div class="dropdown">
  <button class="btn" type="button" data-toggle="dropdown">菜单按钮 <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li class="dropdown-submenu">
      <a href="###">打开</a>
      <ul class="dropdown-menu">
        <li><a href="###">运行</a></li>
        <li><a href="###">在终端中打开</a></li>
        <li><a href="###">在编辑器中打开</a></li>
      </ul>
    </li>
    <li class="dropdown-submenu">
      <a href="###">一组操作</a>
      <ul class="dropdown-menu">
        <li class="dropdown-submenu">
          <a href="###">修改</a>
          <ul class="dropdown-menu">
            <li><a href="###">修改标题</a></li>
            <li><a href="###">更新内容</a></li>
            <li><a href="###">转移</a></li>
          </ul>
        </li>
        <li class="dropdown-submenu">
          <a href="###">删除</a>
          <ul class="dropdown-menu">
            <li><a href="###">移动到回收站</a></li>
            <li><a href="###">直接删除</a></li>
          </ul>
        </li>
        <li><a href="###">撤销</a></li>
      </ul>
    </li>
    <li class="dropdown-submenu">
      <a href="###">另一组操作</a>
      <ul class="dropdown-menu">
        <li><a href="###">评审</a></li>
        <li><a href="###">计划</a></li>
        <li><a href="###">关闭</a></li>
      </ul>
    </li>
    <li class="divider"></li>
    <li class="dropdown-submenu">
      <a href="###">在左侧显示</a>
      <ul class="dropdown-menu pull-left">
        <li><a href="###">复制</a></li>
        <li><a href="###">粘贴</a></li>
        <li><a href="###">剪切</a></li>
      </ul>
    </li>
  </ul>
</div>
```

## 禁用的菜单项

为菜单项 `<li>` 添加 `.disabled` 类即可获得禁用外观。

<example style="height: 164px">
  <div class="dropdown open">
    <button class="btn" type="button">菜单按钮 <span class="caret"></span></button>
    <ul class="dropdown-menu">
      <li><a href="###">操作</a></li>
      <li class="disabled"><a href="###">被禁用的操作</a></li>
    </ul>
  </div>
</example>

```html
<div class="dropdown">
  <button class="btn" type="button" data-toggle="dropdown">菜单按钮 <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li><a href="###">操作</a></li>
    <li class="disabled"><a href="###">被禁用的操作</a></li>
  </ul>
</div>
```

## 自定义菜单

通常情况下下拉菜单列表使用 `<ul>` 元素，你也可以替换为其他元素或内容。

<example style="height: 260px">
  <div class="dropdown open">
    <button class="btn" type="button" data-toggle="dropdown">自定义下拉菜单 <span class="caret"></span></button>
    <div class="dropdown-menu dropdown-menu-table">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>常用操作</th>
            <th>更多操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="###">修改</a></td>
            <td><a href="###">打开</a></td>
          </tr>
          <tr>
            <td><a href="###">编辑</a></td>
            <td><a href="###">运行</a></td>
          </tr>
          <tr>
            <td><a href="###">删除</a></td>
            <td><a href="###">调试</a></td>
          </tr>
          <tr>
            <td><a href="###">移动</a></td>
            <td><a href="###"></a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</example>

<style>
/* 自定义下拉菜单外观 */
.dropdown-menu-table {
  padding: 0;
  border: none;
}
.dropdown-menu-table .table {
  margin-bottom: 0;
}
.dropdown-menu-table .table td {
  padding: 0;
}
.dropdown-menu-table .table a {
  padding: 8px;
  display: block;
}
.dropdown-menu-table .table a:hover,
.dropdown-menu-table .table a:active,
.dropdown-menu-table .table a:focus {
  background-color: #e5e5e5;
  text-decoration: none;
}
</style>

```html
<div class="dropdown">
  <button class="btn" type="button" data-toggle="dropdown">自定义下拉菜单 <span class="caret"></span></button>
  <div class="dropdown-menu dropdown-menu-table">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>常用操作</th>
          <th>更多操作</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><a href="###">修改</a></td>
          <td><a href="###">打开</a></td>
        </tr>
        <tr>
          <td><a href="###">编辑</a></td>
          <td><a href="###">运行</a></td>
        </tr>
        <tr>
          <td><a href="###">删除</a></td>
          <td><a href="###">调试</a></td>
        </tr>
        <tr>
          <td><a href="###">移动</a></td>
          <td><a href="###"></a></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

```css
/* 自定义下拉菜单外观 */
.dropdown-menu-table {
  padding: 0;
  border: none;
}
.dropdown-menu-table .table {
  margin-bottom: 0;
}
.dropdown-menu-table .table td {
  padding: 0;
}
.dropdown-menu-table .table a {
  padding: 8px;
  display: block;
}
.dropdown-menu-table .table a:hover,
.dropdown-menu-table .table a:active,
.dropdown-menu-table .table a:focus {
  background-color: #e5e5e5;
  text-decoration: none;
}
```


## 在导航或导航条中使用

在[导航](#component/nav)和[导航条](#component/navbar)中使用下拉菜单也非常方便，直接使用导航条目 `<li>` 作为下拉菜单父级容器并为其添加 `.dropdown` 类。

<example class="example-dropdown-in-navs">
  <div class="row">
    <div class="col-md-4">
      <ul class="nav nav-primary">
        <li class="active"><a href="###">首页</a></li>
        <li><a href="###">演示</a></li>
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="###">下拉菜单 <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="###">操作</a></li>
            <li><a href="###">另一个操作</a></li>
            <li class="divider"></li>
            <li><a href="###">更多操作</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="col-md-4">
      <ul class="nav nav-pills">
        <li class="active"><a href="###">首页</a></li>
        <li><a href="###">演示</a></li>
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="###">下拉菜单 <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="###">操作</a></li>
            <li><a href="###">另一个操作</a></li>
            <li class="divider"></li>
            <li><a href="###">更多操作</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="col-md-4">
      <ul class="nav nav-tabs">
        <li class="active"><a href="###">首页</a></li>
        <li><a href="###">演示</a></li>
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="###">下拉菜单 <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="###">操作</a></li>
            <li><a href="###">另一个操作</a></li>
            <li class="divider"></li>
            <li><a href="###">更多操作</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</example>

<style>
@media (max-width: 767px) {
  .example-dropdown-in-navs .col-md-4 + .col-md-4 {
    margin-top: 20px;
  }
}
</style>

```html
<ul class="nav nav-primary">
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">演示</a></li>
  <li class="dropdown">
    <a class="dropdown-toggle" data-toggle="dropdown" href="###">下拉菜单 <span class="caret"></span></a>
    <ul class="dropdown-menu">
      <li><a href="###">操作</a></li>
      <li><a href="###">另一个操作</a></li>
      <li class="divider"></li>
      <li><a href="###">更多操作</a></li>
    </ul>
  </li>
</ul>
```
