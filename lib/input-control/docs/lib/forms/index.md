# 输入框

通过鼠标或键盘输入内容，可以在输入框前后位置包含额外的文本或图标，通常用在表单、对话框上面。

## 基本使用

使用 `input-control` 类来获得输入框的外观和交互体验。

::: tabs

== 示例

<Example class="col gap-4">
  <div class="input-control has-prefix">
    <span class="input-control-prefix">用户名</span>
    <input type="text" class="form-control" placeholder="请填写" />
  </div>
  <div class="input-control has-prefix has-surffix">
    <span class="input-control-prefix">用户名</span>
    <input type="text" class="form-control" placeholder="请填写"/>
    <span class="input-control-suffix text-danger">验证失败</span>
  </div>
</Example>

== HTML

```html
<div class="input-control has-prefix">
  <span class="input-control-prefix">用户名</span>
  <input type="text" class="form-control" placeholder="请填写" />
</div>
<div class="input-control has-prefix has-surffix">
  <span class="input-control-prefix">用户名</span>
  <input type="text" class="form-control" placeholder="请填写"/>
  <span class="input-control-suffix text-danger">验证失败</span>
</div>
```

:::

## 包含图标和按钮

::: tabs

== 示例

<Example class="col gap-4">
  <div class="input-control has-prefix-icon">
    <span class="input-control-prefix icon icon-user"></span>
    <input type="text" class="form-control" placeholder="请填写" />
  </div>
  <div class="input-control has-prefix-icon has-surffix-icon has-error">
    <span class="input-control-prefix icon icon-user"></span>
    <input type="text" class="form-control" placeholder="请填写"/>
    <span class="input-control-suffix text-danger icon icon-warning-sign"></span>
  </div>
</Example>

== HTML

```html
<div class="input-control has-prefix-icon">
  <span class="input-control-prefix icon icon-user"></span>
  <input type="text" class="form-control" placeholder="请填写" />
</div>
<div class="input-control has-prefix-icon has-surffix-icon has-error">
  <span class="input-control-prefix icon icon-user"></span>
  <input type="text" class="form-control" placeholder="请填写"/>
  <span class="input-control-suffix text-danger icon icon-warning-sign"></span>
</div>
```

:::

## 前缀和后缀

通过结合类 `has-prefix` `has-suffix` 在输入框上添加前缀或后缀图标或字符。

除了预设的前 / 后缀宽度，还预设了其他两种尺寸，结合 `has-prefix-*` 和 `has-suffix-*` 类进行不同宽度展示。

::: tabs

== 示例

<Example class="col gap-4">
  <div class="input-control has-prefix-sm">
    <span class="input-control-prefix"><i class="icon icon-user"></i></span>
    <input type="text" class="form-control" placeholder="请填写"/>
  </div>
  <div class="input-control has-prefix-sm has-suffix-sm">
    <span class="input-control-prefix"><i class="icon icon-lock"></i></span>
    <input type="text" class="form-control" placeholder="请填写"/>
    <span class="input-control-suffix"><i class="icon icon-eye-open"></i></span>
  </div>
  <div class="input-control has-prefix has-suffix-sm">
    <span class="input-control-prefix">用户名</span>
    <input type="text" class="form-control" placeholder="请填写"/>
    <span class="input-control-suffix"><i class="icon icon-search"></i></span>
  </div>
  <div class="input-control has-prefix-lg">
    <span class="input-control-prefix">有效身份证号码</span>
    <input type="text" class="form-control" placeholder="请填写"/>
  </div>
</Example>

== HTML

```html
<div class="input-control has-prefix-sm">
  <span class="input-control-prefix"><i class="icon icon-user"></i></span>
  <input type="text" class="form-control" placeholder="请填写"/>
</div>
<div class="input-control has-prefix-sm has-suffix-sm">
  <span class="input-control-prefix"><i class="icon icon-lock"></i></span>
  <input type="text" class="form-control" placeholder="请填写"/>
  <span class="input-control-suffix"><i class="icon icon-eye-open"></i></span>
</div>
<div class="input-control has-prefix has-suffix">
  <span class="input-control-prefix">用户名</span>
  <input type="text" class="form-control" placeholder="请填写"/>
  <span class="input-control-suffix">点击搜索</span>
</div>
<div class="input-control has-prefix-lg">
  <span class="input-control-prefix">有效身份证号码</span>
  <input type="text" class="form-control" placeholder="请填写"/>
</div>
```

:::

## 尺寸

除了默认大小，输入框还提供了额外的 2 种预设尺寸。

::: tabs

== 示例

<Example class="col gap-2">
  <div class="flex gap-2">
    <p class="w-36">小号尺寸</p>
    <div class="col gap-2">
      <div class="input-control size-sm">
        <input type="text" class="form-control" placeholder="请填写" />
      </div>
      <div class="input-control size-sm has-prefix has-suffix w-96">
        <span class="input-control-prefix">用户名</span>
        <input type="text" class="form-control size-sm" placeholder="请填写"/>
        <span class="input-control-suffix"><i class="icon icon-search"></i></span>
      </div>
      <div class="input-control size-sm has-prefix-sm w-96">
        <span class="input-control-prefix"><i class="icon icon-lock"></i></span>
        <input type="text" class="form-control size-sm" placeholder="请填写"/>
      </div>
      <div class="input-control size-sm has-prefix-lg w-96">
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
      <div class="input-control has-prefix has-suffix w-96">
        <span class="input-control-prefix">用户名</span>
        <input type="text" class="form-control" placeholder="请填写"/>
        <span class="input-control-suffix"><i class="icon icon-search"></i></span>
      </div>
      <div class="input-control has-prefix-sm w-96">
        <span class="input-control-prefix"><i class="icon icon-lock"></i></span>
        <input type="text" class="form-control" placeholder="请填写"/>
      </div>
      <div class="input-control has-prefix-lg w-96">
        <span class="input-control-prefix">有效身份证号码</span>
        <input type="text" class="form-control" placeholder="请填写"/>
      </div>
    </div>
  </div>
  <div class="flex gap-2">
    <p class="w-36">大号尺寸</p>
    <div class="col gap-2">
      <div class="input-control size-lg w-96">
        <input type="text" class="form-control" placeholder="请填写" />
      </div>
      <div class="input-control size-lg has-prefix has-suffix w-96">
        <span class="input-control-prefix">用户名</span>
        <input type="text" class="form-control size-lg" placeholder="请填写"/>
        <span class="input-control-suffix"><i class="icon icon-search"></i></span>
      </div>
      <div class="input-control size-lg has-prefix-sm w-96">
        <span class="input-control-prefix"><i class="icon icon-lock"></i></span>
        <input type="text" class="form-control size-lg" placeholder="请填写"/>
      </div>
      <div class="input-control size-lg has-prefix-lg w-96">
        <span class="input-control-prefix">有效身份证号码</span>
        <input type="text" class="form-control size-lg" placeholder="请填写"/>
      </div>
    </div>
  </div>
</Example>

== HTML

```html
<div class="flex gap-2">
  <p class="w-36">小号尺寸</p>
  <div class="col gap-2">
    <div class="input-control size-sm w-96">
      <input type="text" class="form-control" placeholder="请填写" />
    </div>
    <div class="input-control size-sm has-prefix has-suffix w-96">
      <span class="input-control-prefix">用户名</span>
      <input type="text" class="form-control size-sm" placeholder="请填写"/>
      <span class="input-control-suffix"><i class="icon icon-search"></i></span>
    </div>
    <div class="input-control size-sm has-prefix-sm w-96">
      <span class="input-control-prefix"><i class="icon icon-lock"></i></span>
      <input type="text" class="form-control size-sm" placeholder="请填写"/>
    </div>
    <div class="input-control size-sm has-prefix-lg w-96">
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
    <div class="input-control has-prefix has-suffix w-96">
      ...
    </div>
    <div class="input-control has-prefix-sm w-96">
      ...
    </div>
    <div class="input-control has-prefix-lg w-96">
      ...
    </div>
  </div>
</div>
<div class="flex gap-2">
  <p class="w-36">大号尺寸</p>
  <div>
    <div class="input-control size-lg w-96">
      ...
    </div>
    <div class="input-control size-lg has-prefix has-suffix w-96">
      ...
    </div>
    <div class="input-control size-lg has-prefix-sm w-96">
      ...
    </div>
    <div class="input-control size-lg has-prefix-lg w-96">
      ...
    </div>
  </div>
</div>
```

:::

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
| `input-control-prefix`      | 工具类 | 输入框前缀元素样式 |
| `input-control-suffix`      | 工具类 | 输入框后缀元素样式 |
| `has-prefix`      | 工具类 | 标记输入框拥有前缀元素 |
| `has-suffix`      | 工具类 | 标记输入框拥有后缀元素 |
| `has-prefix-icon`      | 工具类 | 标记输入框拥有前缀图标 |
| `has-suffix-icon`      | 工具类 | 标记输入框拥有后缀图标 |
| `size-sm`      | 工具类      |   输入框使用小号尺寸 |
| `size-lg`      | 工具类      |   输入框使用大号尺寸 |

## CSS 变量

输入框提供了如下 CSS 变量，可进行全局修改。

| CSS 变量名        | 作用           |
| ------------- |:------------- |
| `--input-fix-width`      | 输入框前/后缀的默认宽度 |
| `--input-fix-width-sm`      | 输入框前/后缀的小号宽度 |
| `--input-fix-width-lg`      | 输入框前/后缀的大号宽度 |
