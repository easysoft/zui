# 输入框

通过鼠标或键盘输入内容，通常用在表单、对话框上面。

## 基本用法

使用 `input-control` 类来获得输入框的外观和交互体验。

<Example class="flex gap-4">
  <div class="input-control">
    <input type="text" class="form-control" placeholder="请填写" />
  </div>
  <div class="input-control prefix">
    <span class="input-control-prefix">用户名</span>
    <input type="text" class="form-control" placeholder="请填写"/>
  </div>
</Example>

```html
<div class="input-control">
  <input type="text" class="form-control" placeholder="请填写" />
</div>
<div class="input-control prefix">
  <span class="input-control-prefix">用户名</span>
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

<Example class="col gap-2">
  <div class="flex gap-2">
    <p class="w-36">小号尺寸</p>
    <div class="col gap-2">
      <div class="input-control w-96">
        <input type="text" class="form-control size-sm" placeholder="请填写" />
      </div>
      <div class="input-control size-sm prefix suffix w-96">
        <span class="input-control-prefix">用户名</span>
        <input type="text" class="form-control size-sm" placeholder="请填写"/>
        <span class="input-control-suffix"><i class="icon icon-search"></i></span>
      </div>
      <div class="input-control size-sm prefix-sm w-96">
        <span class="input-control-prefix"><i class="icon icon-lock"></i></span>
        <input type="text" class="form-control size-sm" placeholder="请填写"/>
      </div>
      <div class="input-control size-sm prefix-lg w-96">
        <span class="input-control-prefix">有效身份证号码</span>
        <input type="text" class="form-control size-sm" placeholder="请填写"/>
      </div>
    </div>
  </div>
    <div class="flex gap-2">
    <p class="w-36">默认尺寸</p>
    <div class="col gap-2">
      <div class="input-control w-96">
        <input type="text" class="form-control" placeholder="请填写" />
      </div>
      <div class="input-control prefix suffix w-96">
        <span class="input-control-prefix">用户名</span>
        <input type="text" class="form-control" placeholder="请填写"/>
        <span class="input-control-suffix"><i class="icon icon-search"></i></span>
      </div>
      <div class="input-control prefix-sm w-96">
        <span class="input-control-prefix"><i class="icon icon-lock"></i></span>
        <input type="text" class="form-control" placeholder="请填写"/>
      </div>
      <div class="input-control prefix-lg w-96">
        <span class="input-control-prefix">有效身份证号码</span>
        <input type="text" class="form-control" placeholder="请填写"/>
      </div>
    </div>
  </div>
  <div class="flex gap-2">
    <p class="w-36">大号尺寸</p>
    <div class="col gap-2">
      <div class="input-control w-96">
        <input type="text" class="form-control size-lg" placeholder="请填写" />
      </div>
      <div class="input-control size-lg prefix suffix w-96">
        <span class="input-control-prefix">用户名</span>
        <input type="text" class="form-control size-lg" placeholder="请填写"/>
        <span class="input-control-suffix"><i class="icon icon-search"></i></span>
      </div>
      <div class="input-control size-lg prefix-sm w-96">
        <span class="input-control-prefix"><i class="icon icon-lock"></i></span>
        <input type="text" class="form-control size-lg" placeholder="请填写"/>
      </div>
      <div class="input-control size-lg prefix-lg w-96">
        <span class="input-control-prefix">有效身份证号码</span>
        <input type="text" class="form-control size-lg" placeholder="请填写"/>
      </div>
    </div>
  </div>
</Example>

```html
<div class="flex gap-2">
  <p class="w-36">小号尺寸</p>
  <div class="col gap-2">
    <div class="input-control w-96">
      <input type="text" class="form-control size-sm" placeholder="请填写" />
    </div>
    <div class="input-control size-sm prefix suffix w-96">
      <span class="input-control-prefix">用户名</span>
      <input type="text" class="form-control size-sm" placeholder="请填写"/>
      <span class="input-control-suffix"><i class="icon icon-search"></i></span>
    </div>
    <div class="input-control size-sm prefix-sm w-96">
      <span class="input-control-prefix"><i class="icon icon-lock"></i></span>
      <input type="text" class="form-control size-sm" placeholder="请填写"/>
    </div>
    <div class="input-control size-sm prefix-lg w-96">
      <span class="input-control-prefix">有效身份证号码</span>
      <input type="text" class="form-control size-sm" placeholder="请填写"/>
    </div>
  </div>
</div>
  <div class="flex gap-2">
  <p class="w-36">默认尺寸</p>
  <div>
    <div class="input-control w-96">
      ...
    </div>
    <div class="input-control prefix suffix w-96">
      ...
    </div>
    <div class="input-control prefix-sm w-96">
      ...
    </div>
    <div class="input-control prefix-lg w-96">
      ...
    </div>
  </div>
</div>
<div class="flex gap-2">
  <p class="w-36">大号尺寸</p>
  <div>
    <div class="input-control w-96">
      ...
    </div>
    <div class="input-control size-lg prefix suffix w-96">
      ...
    </div>
    <div class="input-control size-lg prefix-sm w-96">
      ...
    </div>
    <div class="input-control size-lg prefix-lg w-96">
      ...
    </div>
  </div>
</div>
```

## 前缀和后缀

通过结合类 `prefix` `suffix` 在输入框上添加前缀或后缀图标或字符。

除了预设的前 / 后缀宽度，还预设了其他两种尺寸，结合 `prefix-*` 和 `suffix-*` 类进行不同宽度展示。

<Example class="flex gap-3 flex-wrap items-end">
  <div class="input-control prefix-sm">
    <span class="input-control-prefix"><i class="icon icon-user"></i></span>
    <input type="text" class="form-control" placeholder="请填写"/>
  </div>
  <div class="input-control prefix-sm suffix-sm">
    <span class="input-control-prefix"><i class="icon icon-lock"></i></span>
    <input type="text" class="form-control" placeholder="请填写"/>
    <span class="input-control-suffix"><i class="icon icon-eye-open"></i></span>
  </div>
  <div class="input-control prefix suffix suffix-sm">
    <span class="input-control-prefix">用户名</span>
    <input type="text" class="form-control" placeholder="请填写"/>
    <span class="input-control-suffix"><i class="icon icon-search"></i></span>
  </div>
  <div class="input-control prefix-lg">
    <span class="input-control-prefix">有效身份证号码</span>
    <input type="text" class="form-control" placeholder="请填写"/>
  </div>
</Example>

```html
<div class="input-control prefix-sm">
  <span class="input-control-prefix"><i class="icon icon-user"></i></span>
  <input type="text" class="form-control" placeholder="请填写"/>
</div>
<div class="input-control prefix-sm suffix-sm">
  <span class="input-control-prefix"><i class="icon icon-lock"></i></span>
  <input type="text" class="form-control" placeholder="请填写"/>
  <span class="input-control-suffix"><i class="icon icon-eye-open"></i></span>
</div>
<div class="input-control prefix suffix">
  <span class="input-control-prefix">用户名</span>
  <input type="text" class="form-control" placeholder="请填写"/>
  <span class="input-control-suffix">点击搜索</span>
</div>
<div class="input-control prefix-lg">
  <span class="input-control-prefix">有效身份证号码</span>
  <input type="text" class="form-control" placeholder="请填写"/>
</div>
```

## 外观类型

配合使用[CSS 工具类](/utilities/)来实现不同输入框的外观。下面展示各种工具类的外观效果。

<Example class="flex gap-4 flex-wrap items-end">
  <div class="input-control">
    <input type="text" class="form-control circle" placeholder="请填写" />
  </div>
  <div class="input-control">
    <input type="text" class="form-control shadow" placeholder="请填写" />
  </div>
</Example>

```html
<div class="input-control">
  <input type="text" class="form-control circle" placeholder="请填写" />
</div>
<div class="input-control">
  <input type="text" class="form-control shadow" placeholder="请填写" />
</div>
```

## CSS 类

输入框提供了如下 CSS 类：

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `input-control`      | 实体类 | 元素作为输入框组件 |
| `prefix`      | 修饰类 | 输入框前缀元素样式 |
| `suffix`      | 修饰类 | 输入框后缀元素样式 |
| `size-sm`      | 修饰类      |   输入框使用小号尺寸 |
| `size-lg`      | 修饰类      |   输入框使用大号尺寸 |

## CSS 变量

输入框提供了如下 CSS 变量，可进行全局修改。

| CSS 变量名        | 作用           |
| ------------- |:------------- |
| `--input-fix-width`      | 输入框前缀和后缀的宽度 |
| `--input-fix-sm-width`      | 输入框小号前缀和后缀的宽度 |
