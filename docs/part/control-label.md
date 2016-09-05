section: control
id: label
description: 使用标签
icon: icon-tags
filter: biaoqian bq
---

# 标签

## 基本样式

<div class="example">
  <span class="label">标签</span>
  <span class="label label-primary">Tag</span>
</div>

```
<span class="label">标签</span>
```

## 颜色主题

<div class="example">
  <span class="label">Default</span>
  <span class="label label-primary">Primary</span>
  <span class="label label-success">Success</span>
  <span class="label label-info">Info</span>
  <span class="label label-warning">Warning</span>
  <span class="label label-danger">Danger</span>
</div>

```
<span class="label">Default</span>
```

```
<span class="label label-primary">Primary</span>
```

```
<span class="label label-success">Success</span>
```

```
<span class="label label-info">Info</span>
```

```
<span class="label label-warning">Warning</span>
```

```
<span class="label label-danger">Danger</span>
```

## 作为徽标

`.label-badge`

<div class="example">
  <span class="label label-badge">12</span> <span class="label label-badge label-primary">Primary</span> <span class="label label-badge label-success">Success</span> <span class="label label-badge label-info">Info</span> <span class="label label-badge label-warning">Warning</span> <span class="label label-badge label-danger">Danger</span>
</div>

```
<span class="label label-badge">Default</span>
```

```
<span class="label label-badge label-primary">Primary</span>
```

```
<span class="label label-badge label-success">Success</span>
```

```
<span class="label label-badge label-info">Info</span>
```

```
<span class="label label-badge label-warning">Warning</span>
```

```
<span class="label label-badge label-danger">Danger</span>
```

### 小圆点徽标

<div class="example">
    <span class="label label-dot">12</span> <span class="label label-dot label-info">Primary</span> <span class="label label-dot label-info">Success</span> <span class="label label-dot label-info">Info</span> <span class="label label-dot label-warning">Warning</span> <span class="label label-dot label-danger">Danger</span>
  </div>

```
<span class="label label-dot">Default</span>
```

```
<span class="label label-dot label-primary">Primary</span>
```

```
<span class="label label-dot label-success">Success</span>
```

```
<span class="label label-dot label-info">Info</span>
```

```
<span class="label label-dot label-warning">Warning</span>
```

```
<span class="label label-dot label-danger">Danger</span>
```

### 按钮中的徽标

<div class="example">
  <button class="btn">我的消息 <span class="label label-badge">12</span></button>
  <button class="btn">处理错误 <span class="label label-badge label-primary">12</span></button> <button class="btn">处理错误
  <span class="label label-badge label-success">12</span></button>
  <button class="btn">处理错误 <span class="label label-badge label-info">12</span></button> <button class="btn">处理错误
  <span class="label label-badge label-warning">12</span></button>
  <button class="btn">处理错误 <span class="label label-badge label-danger">12</span></button>
  <br>
  <br>
  <button class="btn btn-primary">联系人 <span class="label label-badge">12</span></button> <button class="btn btn-success">联系人
  <span class="label label-badge">12</span></button> <button class="btn btn-info">联系人 <span class="label label-badge">12</span></button>
  <button class="btn btn-warning">联系人 <span class="label label-badge">12</span></button> <button class="btn btn-danger">联系人
  <span class="label label-badge">12</span></button>
  <br>
  <br>
  <button class="btn">列表 <span class="label label-dot">12</span></button>
  <button class="btn">处理错误 <span class="label label-dot label-primary">12</span></button> <button class="btn">处理错误
  <span class="label label-dot label-success">12</span></button> <button class="btn">处理错误 <span class="label label-dot label-info">12</span></button>
  <button class="btn">处理错误 <span class="label label-dot label-warning">12</span></button> <button class="btn">处理错误
  <span class="label label-dot label-danger">12</span></button>
  <br>
  <br>
  <button class="btn btn-primary">联系人 <span class="label label-dot">12</span></button> <button class="btn btn-success">联系人
  <span class="label label-dot">12</span></button> <button class="btn btn-info">联系人 <span class="label label-dot">12</span></button>
  <button class="btn btn-warning">联系人 <span class="label label-dot">12</span></button> <button class="btn btn-danger">联系人
  <span class="label label-dot">12</span></button>
</div>

```
<button class="btn">列表 <span class="label label-badge">12</span></button>
```

### 列表组中的徽标和标签

<div class="example">
  <div class="list-group">
    <a href="#" class="list-group-item">Project <span class="label label-success">New</span></a>
    <a href="#" class="list-group-item">todo</a>
    <a href="#" class="list-group-item">story<span class="label label-badge label-primary">3 stories</span></a>
    <a href="#" class="list-group-item">task<span class="label label-info label-badge pull-right">10 tasks</span></a>
    <a href="#" class="list-group-item">bug <span class="label label-badge label-warning">2 bugs</span></a>
    <a href="#" class="list-group-item">case <span class="label label-badge label-danger pull-right">100+</span></a>
  </div>
</div>

```
<div class="list-group">
  <a href="#" class="list-group-item">Project <span class="label label-success">New</span></a>
  ...
```
