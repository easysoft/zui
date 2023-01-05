# 输入组

## 基本类型

```html:example: -flex -gap-3 -overflow-x-auto
<div class="row gap-6">
    <div class="w-1/2 col gap-2">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="用户名">
        <span class="input-group-addon">@gmail.com</span>
      </div>
      <div class="input-group">
        <span class="input-group-addon">@</span>
        <input type="text" class="form-control" placeholder="用户名">
      </div>
      <div class="input-group">
        <span class="input-group-addon">@</span>
        <input type="text" class="form-control" placeholder="用户名">
        <input type="text" class="form-control" placeholder="密码">
        <span class="input-group-addon"><i class="icon icon-heart"></i></span>
      </div>
    </div>
    <div class="w-1/2 col gap-2">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="用户名">
        <span class="input-group-addon"><i class="icon icon-star"></i></span>
        <input type="text" class="form-control" placeholder="密码">
      </div>
      <div class="input-group">
        <span class="input-group-addon"><i class="icon-user"></i></span>
        <input type="text" class="form-control" placeholder="用户名">
        <span class="input-group-addon"><i class="icon-key"></i></span>
        <input type="text" class="form-control" placeholder="密码">
      </div>
      <div class="input-group">
        <span class="input-group-btn">
          <button type="button" class="btn" data-toggle="dropdown">类别<span class="caret"></span></button>
          <menu class="dropdown-menu menu">
            <li class="menu-item"><a>水果</a></li>
            <li class="menu-item"><a>宠物</a></li>
            <li class="menu-item"><a>其他类型</a></li>
          </menu>
        </span>
        <select data-placeholder="选择一些爱吃的水果..." class="form-control">
          <option value="strawberries" selected>草莓</option>
          <option value="apple">苹果</option>
          <option value="orange">橙子</option>
          <option value="cherry">樱桃</option>
          <option value="banana">香蕉</option>
          <option value="figs">无花果</option>
        </select>
        <span class="input-group-addon"><i class="icon-comment"></i></span>
        <input type="text" class="form-control" placeholder="备注">
        <span class="input-group-btn">
          <button type="button" class="btn">提交</button>
        </span>
      </div>
    </div>
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
    <button type="button" class="btn" data-toggle="dropdown">选项 <span class="caret"></span></button>
    <ul class="menu dropdown-menu">
      <li class="menu-item"><a>选项</a></li>
      <li class="menu-item"><a>另一个选项</a></li>
      <li class="menu-item"><a>更多选项</a></li>
      <li class="menu-divider"></li>
      <li class="menu-item"><a>特别内容</a></li>
    </ul>
  </div>
</div>
```

## 分段按钮

```html:example: -flex -gap-3
<div class="input-group">
  <input type="text" class="form-control">
  <div class="input-group-btn">
    <button type="button" class="btn">主要选项</button>
  </div>
  <div class="input-group-btn">
    <button type="button" class="btn" data-toggle="dropdown">
      选项 <span class="caret"></span>
    </button>
    <ul class="dropdown-menu menu">
      <li class="menu-item"><a>选项</a></li>
      <li class="menu-item"><a>另一个选项</a></li>
      <li class="menu-item"><a>更多选项</a></li>
      <li class="menu-divider"></li>
      <li class="menu-item"><a>特别内容</a></li>
    </ul>
  </div>
</div>
```
