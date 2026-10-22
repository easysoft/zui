# 输入组

## 基本类型

```html:example: -flex -gap-3 -overflow-x-auto
<div class="gap-6 row">
    <div class="w-1/2 gap-2 col">
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
        <span class="input-group-addon"><i class="example-icon example-icon-heart" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M12%2021S2%2015%202%208c0-6%208-7%2010-2%202-5%2010-4%2010%202%200%207-10%2013-10%2013z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></span>
      </div>
    </div>
    <div class="w-1/2 gap-2 col">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="用户名">
        <span class="input-group-addon"><i class="example-icon example-icon-star" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M12%202l3%206%207%201-5%205%201%208-6-4-6%204%201-8-5-5%207-1z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></span>
        <input type="text" class="form-control" placeholder="密码">
      </div>
      <div class="input-group">
        <span class="input-group-addon"><i class="example-icon example-icon-user" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M8%207a4%204%200%201%200%208%200%204%204%200%201%200-8%200M4%2021v-3c0-6%2016-6%2016%200v3z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></span>
        <input type="text" class="form-control" placeholder="用户名">
        <span class="input-group-addon"><i class="example-icon example-icon-key" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%208a5%205%200%201%200%2010%200%205%205%200%201%200-10%200M12%2012l9%209m-3-3%203-3m-6%200%203-3%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></span>
        <input type="text" class="form-control" placeholder="密码">
      </div>
      <div class="input-group">
        <button type="button" class="btn" data-toggle="dropdown">类别<span class="caret"></span></button>
        <menu class="dropdown-menu menu">
          <li class="menu-item"><a>水果</a></li>
          <li class="menu-item"><a>宠物</a></li>
          <li class="menu-item"><a>其他类型</a></li>
        </menu>
        <select data-placeholder="选择一些爱吃的水果..." class="form-control">
          <option value="strawberries" selected>草莓</option>
          <option value="apple">苹果</option>
          <option value="orange">橙子</option>
          <option value="cherry">樱桃</option>
          <option value="banana">香蕉</option>
          <option value="figs">无花果</option>
        </select>
        <span class="input-group-addon"><i class="example-icon example-icon-comment" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%203h18v14H9l-6%204z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></span>
        <input type="text" class="form-control" placeholder="备注">
        <button type="button" class="btn">提交</button>
      </div>
      <div class="input-group">
        <button type="button" class="btn" data-toggle="dropdown">类别<span class="caret"></span></button>
        <span class="input-group-addon"><i class="example-icon example-icon-star" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M12%202l3%206%207%201-5%205%201%208-6-4-6%204%201-8-5-5%207-1z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></span>
        <input type="text" class="form-control" placeholder="用户名">
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
    <div class="checkbox">
      <input type="checkbox">
    </div>
  </span>
  <input type="text" class="form-control">
</div>
<!-- 单选框 -->
<div class="input-group">
  <span class="input-group-addon">
    <div class="radio">
      <input type="radio">
    </div>
  </span>
  <input type="text" class="form-control">
</div>
```

## 带下拉菜单的按钮

```html:example: -flex -gap-3
<div class="input-group">
  <input type="text" class="form-control">
  <a class="btn" data-toggle="dropdown" data-placement="bottom-end" href="#dropdownMenuExample">选项 <span class="caret"></span></a>
</div>
<ul class="menu dropdown-menu" id="dropdownMenuExample">
  <li class="menu-item"><a>选项</a></li>
  <li class="menu-item"><a>另一个选项</a></li>
  <li class="menu-item"><a>更多选项</a></li>
  <li class="menu-divider"></li>
  <li class="menu-item"><a>特别内容</a></li>
</ul>
```

## 分段按钮

```html:example: -flex -gap-3
<div class="input-group">
  <input type="text" class="form-control" placeholder="分段按钮">
  <button type="button" class="btn">主要选项</button>
  <a class="btn" data-toggle="dropdown" data-placement="bottom-end" href="#dropdownMenuExample">选项 <span class="caret"></span></a>
</div>
```

## Sizes

```html:example: col gap-4
<div class="input-group size-lg">
  <span class="input-group-addon">前</span>
  <input type="text" class="form-control" placeholder="用户名">
</div>

<div class="input-group">
  <span class="input-group-addon">前</span>
  <input type="text" class="form-control" placeholder="用户名">
</div>

<div class="input-group size-sm">
  <span class="input-group-addon">前</span>
  <input type="text" class="form-control" placeholder="用户名">
</div>
```
