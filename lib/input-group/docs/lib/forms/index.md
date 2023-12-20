# 输入组

通过在文本输入框 `<input>` 前面、后面或是两边加上文字、图标或按钮，可以实现对表单控件的扩展。

## 使用方法

在元素使用工具类 `.input-group` 作为输入组容器，然后在内部添加表单控件、按钮或附加文本（`.input-group-addon`）。

::: tabs

== 示例

<Example class="col gap-4">
  <div class="input-group">
    <span class="input-group-addon">账号</span>
    <input type="text" class="form-control" placeholder="用户名或 Email">
  </div>
  <div class="input-group">
    <span class="input-group-addon">密码</span>
    <input type="password" class="form-control" placeholder="密码">
    <button type="button" class="btn">检查安全性</button>
  </div>
</Example>

== HTML

```html
<div class="input-group">
  <span class="input-group-addon">账号</span>
  <input type="text" class="form-control" placeholder="用户名或 Email">
</div>
<div class="input-group">
  <span class="input-group-addon">密码</span>
  <input type="password" class="form-control" placeholder="密码">
  <button type="button" class="btn">检查安全性</button>
</div>
```

:::

## 组合方式

在输入组内部可以将不同的内容按需组合使用，包括附加文本（`.input-group-addon`）、表单控件（`.form-control`）、按钮（`.btn`）。

::: tabs

== 示例

<Example class="col gap-4">
  <div class="input-group">
    <span class="input-group-addon">登录</span>
    <input type="text" class="form-control" placeholder="用户名或 Email">
    <input type="password" class="form-control" placeholder="密码">
    <button type="button" class="btn">提交</button>
  </div>
  <div class="input-group">
    <select class="form-control w-20">
      <option>类别</option>
      <option>图片</option>
      <option>文件</option>
    </select>
    <input type="text" class="form-control" placeholder="关键词">
    <button type="button" class="btn"><i class="icon icon-search"></i></button>
  </div>
  <div class="input-group">
    <span class="input-group-addon">
      <div class="checkbox">
        <input type="checkbox">
      </div>
    </span>
    <input type="text" class="form-control" placeholder="自定义名称">
  </div>
</Example>

== HTML

```html
<div class="input-group">
  <span class="input-group-addon">登录</span>
  <input type="text" class="form-control" placeholder="用户名或 Email">
  <input type="password" class="form-control" placeholder="密码">
  <button type="button" class="btn">提交</button>
</div>
<div class="input-group">
  <select class="form-control">
    <option>类别</option>
    <option>图片</option>
    <option>文件</option>
  </select>
  <input type="text" class="form-control" placeholder="关键词">
  <button type="button" class="btn"><i class="icon icon-search"></i></button>
</div>
<div class="input-group">
  <span class="input-group-addon">
    <div class="checkbox">
      <input type="checkbox">
    </div>
  </span>
  <input type="text" class="form-control" placeholder="自定义名称">
</div>
```

:::

## 尺寸

除了默认大小，输入组还提供了额外的 2 种预设尺寸，通过修饰类 `.size-*` 来应用尺寸。

::: tabs

== 示例

<Example class="flex flex-wrap gap-4">
  <div class="input-group size-sm">
    <span class="input-group-addon">登录</span>
    <input type="text" class="form-control" placeholder="用户名或 Email">
    <input type="password" class="form-control" placeholder="密码">
    <button type="button" class="btn">提交</button>
  </div>
  <div class="input-group">
    <span class="input-group-addon">登录</span>
    <input type="text" class="form-control" placeholder="用户名或 Email">
    <input type="password" class="form-control" placeholder="密码">
    <button type="button" class="btn">提交</button>
  </div>
  <div class="input-group size-lg">
    <span class="input-group-addon">登录</span>
    <input type="text" class="form-control" placeholder="用户名或 Email">
    <input type="password" class="form-control" placeholder="密码">
    <button type="button" class="btn">提交</button>
  </div>
</Example>

== HTML

```html
<div class="input-group size-sm">
  <span class="input-group-addon">登录</span>
  <input type="text" class="form-control" placeholder="用户名或 Email">
  <input type="password" class="form-control" placeholder="密码">
  <button type="button" class="btn">提交</button>
</div>
<div class="input-group">
  <span class="input-group-addon">登录</span>
  <input type="text" class="form-control" placeholder="用户名或 Email">
  <input type="password" class="form-control" placeholder="密码">
  <button type="button" class="btn">提交</button>
</div>
<div class="input-group size-lg">
  <span class="input-group-addon">登录</span>
  <input type="text" class="form-control" placeholder="用户名或 Email">
  <input type="password" class="form-control" placeholder="密码">
  <button type="button" class="btn">提交</button>
</div>
```

:::

## CSS类

输入组提供了如下 CSS 类：

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `input-group`      | 实体类 | 元素作为输入组组件 |
| `input-group-addon`      | 实体类 | 元素作为输入组内部额外元素 |
| `size-sm`      | 工具类      |   输入组使用小号尺寸 |
| `size-lg`      | 工具类      |   输入组使用大号尺寸 |

## CSS 变量

| 变量名称 | 变量含义 |
| -------- | -------- |
| `--input-group-addon-bg`    | 输入组附加部分背景颜色 |
