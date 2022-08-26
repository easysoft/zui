# 输入组

通过在文本输入框 `<input>` 前面、后面或是两边加上文字、图标或按钮，可以实现对表单控件的扩展。
依赖`form`表单中的`input`组件

## 基本用法

使用 `.input-group` 类来获得按钮的外观和交互体验

<Example>
  <div class="input-group">
    <span class="input-group-addon">前</span>
    <input type="text" class="form-control" placeholder="用户名">
  </div>
</Example>


可以使用`input-group-addon`类和`input`输入框组合，通过调换顺序实现不同种输入组外观显示

<Example class="flex flex-wrap gap-4">
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
</Example>

```html
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

除了默认大小，输入组还提供了额外的 2 种预设尺寸。

<Example class="flex flex-wrap gap-4">
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
</Example>

```html
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

## 连续分段的文本框

连续多个`.form-control`组成连续分段的文本框，可省去不必要的label标签

<Example class="flex flex-wrap gap-4">
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
</Example>

```html
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

`.input-group-addon`内部可包含单选框或复选框，增强输入框功能

<Example class="flex gap-4">
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
</Example>

```html
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

`.input-group`内可包含`.dropdown`下拉菜单组成下拉菜单输入组

<Example>
  <div class="input-group">
    <input type="text" class="form-control">
    <div class="dropdown">
      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">选项 <span class="caret"></span></button>
      <ul class="dropdown-menu menu-align-right" role="menu">
        <li><a href="#">选项</a></li>
        <li><a href="#">另一个选项</a></li>
        <li><a href="#">更多选项</a></li>
        <li class="divider"></li>
        <li><a href="#">特别内容</a></li>
      </ul>
    </div>
  </div>
</Example>

```html
<div class="input-group">
  <input type="text" class="form-control">
  <div class="dropdown">
    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">选项 <span class="caret"></span></button>
    <ul class="dropdown-menu menu-align-right" role="menu">
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

可以使用 `.input-group-btn`类内部包含多个按钮或下拉菜单来表示分段按钮输入组

<Example>
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
</Example>

```html
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

## CSS类

输入组提供了如下 CSS 类：

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `input-group`      | 实体类 | 元素作为输入组组件 |
| `input-group-addon`      | 实体类 | 元素作为输入组内部额外元素 |
| `size-sm`      | 修饰类      |   输入组使用小号尺寸 |
| `size-lg`      | 修饰类      |   输入组使用大号尺寸 |

## CSS 变量

| 变量名称 | 变量含义 |
| -------- | -------- |
| --input-group-addon-bg    | 输入组插件背景颜色 |
| --input-group-addon-color | 输入组插件文字颜色 |
