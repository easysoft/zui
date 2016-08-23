section: component
id: buttongroup
description: 多个按钮组合形式
icon: icon-th-list
filter: anniuzu anz
---

# 按钮组

## 类型

### 一组按钮

通过div.btn-group包含多个button

<div class="example">
  <div class="btn-group">
    <button type="button" class="btn">左</button>
    <button type="button" class="btn">中</button>
    <button type="button" class="btn">右</button>
  </div>
</div>

```
<div class="btn-group">
  <button type="button" class="btn">左</button>
  <button type="button" class="btn">中</button>
  <button type="button" class="btn">右</button>
</div>
```

### 多组按钮

通过 `div.btn-toolbar` 包含 `.div.btn-group`。

<div class="example">
  <div class="btn-toolbar" style="margin: 0;">
    <div class="btn-group">
      <button class="btn">复制</button>
      <button class="btn">剪切</button>
      <button class="btn">粘贴</button>
      <button class="btn">删除</button>
    </div>
    <div class="btn-group">
      <button class="btn"><i class="icon icon-picture"></i></button>
      <button class="btn"><i class="icon icon-file-movie"></i></button>
      <button class="btn"><i class="icon icon-file-text-o"></i></button>
    </div>
    <div class="btn-group">
      <button class="btn"><i class="icon icon-code"></i></button>
    </div>
  </div>
</div>

```html
<div class="btn-toolbar">
  <div class="btn-group">
    <button class="btn"><i class="icon icon-paste"></i></button>
    ...
  </div>
  <div class="btn-group">
    ...
  </div>
  <div class="btn-group">
    ...
  </div>
</div>
```

### 垂直按钮组

通过 `div.btn-group-vertical` 实现。

<div class="example">
  <div class="btn-group btn-group-vertical">
    <button type="button" class="btn">上面</button>
    <button type="button" class="btn">中间</button>
    <button type="button" class="btn">下面</button>
  </div>
</div>

```html
<div class="btn-group btn-group-vertical">
  <button type="button" class="btn">上面</button>
  <button type="button" class="btn">中间</button>
  <button type="button" class="btn">下面</button>
</div>
```

## 变化

### 基本下拉按钮组

将 `.btn-group` 放置于另一个 `.btn-group` 中。

<div class="example">
  <div class="btn-group">
    <button type="button" class="btn">春天</button>
    <button type="button" class="btn">夏天</button>
    <div class="btn-group">
      <button id="btnGroupDrop1" type="button" class="btn dropdown-toggle" data-toggle="dropdown">未来 <span class="caret"></span></button>
      <ul class="dropdown-menu" role="menu" aria-labelledby="btnGroupDrop1">
        <li><a href="#">秋天</a></li>
        <li><a href="#">冬天</a></li>
      </ul>
    </div>
  </div>
</div>

```html
<div class="btn-group">
  <button type="button" class="btn">春天</button>
  <button type="button" class="btn">夏天</button>
  <div class="btn-group">
    <button id="btnGroupDrop1" type="button" class="btn dropdown-toggle" data-toggle="dropdown">未来 <span class="caret"></span></button>
    <ul class="dropdown-menu" role="menu" aria-labelledby="btnGroupDrop1">
      <li><a href="#">秋天</a></li>
      <li><a href="#">冬天</a></li>
    </ul>
  </div>
</div>
```

### 分裂式下拉按钮组

基本按钮组的变形，将第二个按钮改成图标即可。

<div class="example">
  <div class="btn-group">
    <button type="button" class="btn btn-danger">操作</button>
    <div class="btn-group">
      <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">
        <span class="caret"></span>
        <span class="sr-only">操作</span>
      </button>
      <ul class="dropdown-menu" role="menu">
        <li><a href="#">编辑</a></li>
        <li><a href="#">删除</a></li>
        <li class="divider"></li>
        <li><a href="#">撤销</a></li>
      </ul>
    </div>
  </div>
</div>

```html
<div class="btn-group">
  <button type="button" class="btn btn-danger">操作</button>
  <div class="btn-group">
    <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">
      <span class="caret"></span>
      <span class="sr-only">操作</span>
    </button>
    <ul class="dropdown-menu" role="menu">
      <li><a href="#">编辑</a></li>
      <li><a href="#">删除</a></li>
      <li class="divider"></li>
      <li><a href="#">撤销</a></li>
    </ul>
  </div>
</div>
```

### 上拉按钮组

通过div.dropup实现

<div class="example">
  <div class="btn-group dropup">
    <button type="button" class="btn btn-danger">操作</button>
    <div class="btn-group">
      <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">
        <span class="caret"></span>
        <span class="sr-only">操作</span>
      </button>
      <ul class="dropdown-menu" role="menu">
        <li><a href="#">编辑</a></li>
        <li><a href="#">删除</a></li>
        <li class="divider"></li>
        <li><a href="#">撤销</a></li>
      </ul>
    </div>
  </div>
</div>

```html
<div class="btn-group dropup">
  <button type="button" class="btn btn-danger">操作</button>
  <div class="btn-group">
    <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">
      <span class="caret"></span>
      <span class="sr-only">操作</span>
    </button>
    <ul class="dropdown-menu" role="menu">
      <li><a href="#">编辑</a></li>
      <li><a href="#">删除</a></li>
      <li class="divider"></li>
      <li><a href="#">撤销</a></li>
    </ul>
  </div>
</div>
```

### 大小

通过 `.btn-lg`、 `.btn-sm`、 `.btn-xs` 实现。

<div class="example">
  <div class="btn-toolbar" style="margin: 0;">
    <div class="btn-group">
      <button type="button" class="btn btn-lg">左</button>
      <button type="button" class="btn btn-lg">中</button>
      <button type="button" class="btn btn-lg">右</button>
    </div>
    <div class="btn-group">
      <button type="button" class="btn">左</button>
      <button type="button" class="btn">中</button>
      <button type="button" class="btn">右</button>
    </div>
    <div class="btn-group">
      <button type="button" class="btn btn-sm">左</button>
      <button type="button" class="btn btn-sm">中</button>
      <button type="button" class="btn btn-sm">右</button>
    </div>
    <div class="btn-group">
      <button type="button" class="btn btn-xs">左</button>
      <button type="button" class="btn btn-xs">中</button>
      <button type="button" class="btn btn-xs">右</button>
    </div>
  </div>
</div>

```html
<!-- 大的 -->
<div class="btn-group">
  <button type="button" class="btn btn-lg">左</button>
  <button type="button" class="btn btn-lg">中</button>
  <button type="button" class="btn btn-lg">右</button>
</div>
<!-- 默认大小 -->
<div class="btn-group">
  <button type="button" class="btn">左</button>
  <button type="button" class="btn">中</button>
  <button type="button" class="btn">右</button>
</div>
<!-- 小的 -->
<div class="btn-group">
  <button type="button" class="btn btn-sm">左</button>
  <button type="button" class="btn btn-sm">中</button>
  <button type="button" class="btn btn-sm">右</button>
</div>
<!-- 超小的 -->
<div class="btn-group">
  <button type="button" class="btn btn-xs">左</button>
  <button type="button" class="btn btn-xs">中</button>
  <button type="button" class="btn btn-xs">右</button>
</div>
```

### 颜色

<div class="example">
  <div class="btn-group">
    <button type="button" class="btn">Normal</button>
    <button type="button" class="btn btn-primary">.btn-primary</button>
    <button type="button" class="btn btn-warning">.btn-warning</button>
    <button type="button" class="btn btn-danger">.btn-danger</button>
    <button type="button" class="btn btn-success">.btn-success</button>
    <button type="button" class="btn btn-info">.btn-info</button>
  </div>
</div>

```
<div class="btn-group">
  <button type="button" class="btn">Normal</button>
  <button type="button" class="btn btn-primary">.btn-primary</button>
  <button type="button" class="btn btn-warning">.btn-warning</button>
  <button type="button" class="btn btn-danger">.btn-danger</button>
  <button type="button" class="btn btn-success">.btn-success</button>
  <button type="button" class="btn btn-info">.btn-info</button>
</div>
```
