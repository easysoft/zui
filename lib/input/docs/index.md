# 输入框

通过鼠标或键盘输入内容，通常用在表单、对话框上面。

## 基本用法

使用 `.input-control` 类来获得输入框的外观和交互体验。

<Example class="flex gap-4">
  <div class="input-control">
    <input type="text" class="form-control" placeholder="请填写" />
  </div>
  <div class="input-control -prefix">
    <span class="input-control_prefix">用户名</span>
    <input type="text" class="form-control" placeholder="请填写"/>
  </div>
</Example>

```html
<div class="input-control">
  <input type="text" class="form-control" placeholder="请填写" />
</div>
<div class="input-control -prefix">
  <span class="input-control_prefix">用户名</span>
  <input type="text" class="form-control" placeholder="请填写"/>
</div>
```

## 禁用状态

为输入框提供 `disabled="disabled"` 属性来禁用输入框。

<Example class="flex gap-4">
  <div class="input-control">
    <input type="text" class="form-control" placeholder="请填写" disabled="disabled" />
  </div>
</Example>

```html
<div class="input-control">
  <input type="text" class="form-control" placeholder="请填写" disabled="disabled" />
</div>
```

## 尺寸

除了默认大小，输入框还提供了额外的 2 种预设尺寸。

<Example class="flex gap-4 flex-wrap items-end">
  <div class="input-control -sm">
    <input type="text" class="form-control" placeholder="请填写" />
  </div>
  <div class="input-control">
    <input type="text" class="form-control" placeholder="请填写" />
  </div>
  <div class="input-control -lg">
    <input type="text" class="form-control" placeholder="请填写" />
  </div>
</Example>

```html
<div class="input-control -sm">
  <input type="text" class="form-control" placeholder="请填写" />
</div>
<div class="input-control">
  <input type="text" class="form-control" placeholder="请填写" />
</div>
<div class="input-control -lg">
  <input type="text" class="form-control" placeholder="请填写" />
</div>
```

## 前缀和后缀

通过结合类 `-prefix` `-suffix` 在输入框上添加前缀或后缀图标或字符。

<Example class="flex gap-4 flex-wrap items-end">
  <div class="input-control -prefix">
    <span class="input-control_prefix">用户名</span>
    <input type="text" class="form-control" placeholder="请填写"/>
  </div>
  <div class="input-control -square-prefix">
    <input type="text" class="form-control" placeholder="请填写"/>
    <span class="input-control_prefix">pre</span>
  </div>
  <div class="input-control -square-prefix -square-suffix">
    <input type="text" class="form-control" placeholder="请填写"/>
    <span class="input-control_prefix">pre</span>
    <span class="input-control_suffix">suf</span>
  </div>
</Example>

```html
<div class="input-control -prefix">
  <span class="input-control_prefix">用户名</span>
  <input type="text" class="form-control" placeholder="请填写"/>
</div>
<div class="input-control -square-prefix">
  <input type="text" class="form-control" placeholder="请填写"/>
  <span class="input-control_prefix">pre</span>
</div>
<div class="input-control -square-prefix -square-suffix">
  <input type="text" class="form-control" placeholder="请填写"/>
  <span class="input-control_prefix">pre</span>
  <span class="input-control_suffix">suf</span>
</div>
```

## 外观类型

配合使用[CSS 工具类](/lib/utilities/)来实现不同输入框的外观。下面展示各种工具类的外观效果。

<Example class="flex gap-4 flex-wrap items-end">
  <div class="input-control -circle">
    <input type="text" class="form-control" placeholder="请填写" />
  </div>
  <div class="input-control -shadow">
    <input type="text" class="form-control" placeholder="请填写" />
  </div>
</Example>

```html
<div class="input-control -circle">
  <input type="text" class="form-control" placeholder="请填写" />
</div>
<div class="input-control -shadow">
  <input type="text" class="form-control" placeholder="请填写" />
</div>
```

## CSS 类

输入框提供了如下 CSS 类：

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `input-control`      | 实体类 | 元素作为输入框组件 |
| `-prefix`      | 修饰类 | 输入框前缀元素样式 |
| `-suffix`      | 修饰类 | 输入框后缀元素样式 |
| `-sm`      | 修饰类      |   输入框使用小号尺寸 |
| `-lg`      | 修饰类      |   输入框使用大号尺寸 |
