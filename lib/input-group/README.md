# 输入组

## 基本类型

```html:example: -flex -gap-3 -overflow-x-auto
<div class="input-group">
  <span class="input-group-addon">前</span>
  <input type="text" class="form-control" placeholder="用户名">
</div>

<div class="input-group">
  <input type="text" class="form-control" placeholder="用户名">
  <span class="input-group-addon">中</span>
  <input type="text" class="form-control" placeholder="密码">
</div>

<div class="input-group">
  <input type="text" class="form-control" placeholder="用户名">
  <span class="input-group-addon">后</span>
</div>

<div class="input-group">
  <span class="input-group-addon">前</span>
  <input type="text" class="form-control" placeholder="用户名">
    <span class="input-group-addon">中</span>
  <input type="text" class="form-control" placeholder="密码">
</div>

<div class="input-group">
  <span class="input-group-addon">前</span>
  <input type="text" class="form-control" placeholder="用户名">
  <span class="input-group-addon">后</span>
</div>

<div class="input-group">
  <span class="input-group-addon">前</span>
  <input type="text" class="form-control" placeholder="用户名">
    <span class="input-group-addon">中</span>
  <input type="text" class="form-control" placeholder="密码">
  <span class="input-group-addon">后</span>
</div>
```

## 尺寸

```html:example: -flex -gap-3
<div class="input-group lg">
  <span class="input-group-addon">前</span>
  <input type="text" class="form-control" placeholder="用户名">
</div>

<div class="input-group">
  <span class="input-group-addon">前</span>
  <input type="text" class="form-control" placeholder="用户名">
</div>

<div class="input-group sm">
  <span class="input-group-addon">前</span>
  <input type="text" class="form-control" placeholder="用户名">
</div>
```


## 连续分段的文本框

```html:example: -flex -gap-3 -overflow-x-auto
<div class="input-group">
  <span class="input-group-addon">姓名</span>
  <input type="text" class="form-control" placeholder="姓氏">
  <input type="text" class="form-control" placeholder="名字">
</div>

<div class="input-group">
  <input type="text" class="form-control" placeholder="省份">
  <input type="text" class="form-control" placeholder="城市">
  <input type="text" class="form-control" placeholder="县/市">
  <input type="text" class="form-control" placeholder="社区/乡镇">
  <input type="text" class="form-control" placeholder="街道 门牌号">
</div>
```

## 单选框和复选框

```html:example: -flex -gap-3
<!-- 复选框 -->
<div class="input-group">
  <span class="input-group-addon">
    <input type="checkbox">
  </span>
  <input type="text" class="form-control">
</div>
<!-- 单选框 -->
<div class="input-group">
  <span class="input-group-addon">
    <input type="radio">
  </span>
  <input type="text" class="form-control">
</div>
```

## 带下拉菜单的按钮

```html:example: -flex -gap-3
<div class="input-group">
  <input type="text" class="form-control">
  <div class="dropdown menu-align-right">
    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">选项 <span class="caret"></span></button>
    <ul class="dropdown-menu" role="menu">
      <li><a href="#">选项</a></li>
      <li><a href="#">另一个选项</a></li>
      <li><a href="#">更多选项</a></li>
      <li class="divider"></li>
      <li><a href="#">特别内容</a></li>
    </ul>
  </div>
</div>
```

## 分段按钮

```html:example: -flex -gap-3
<div class="input-group">
  <input type="text" class="form-control">
  <div class="input-group-btn">
    <button type="button" class="btn btn-default" tabindex="-1">主要选项</button>
    <div class="dropdown menu-align-right">
      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" tabindex="-1">
        选项 <span class="caret"></span>
      </button>
        <ul class="dropdown-menu" role="menu">
        <li><a href="#">选项</a></li>
        <li><a href="#">另一个选项</a></li>
        <li><a href="#">更多选项</a></li>
        <li class="divider"></li>
        <li><a href="#">特别内容</a></li>
      </ul>
    </div>
  </div>
</div>
```
