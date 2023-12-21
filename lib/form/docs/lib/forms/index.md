# 表单

## 基本用法

为 `<form>` 元素使用类 `.form` 类来获得表单外观，将[表单控件](/lib/forms/form-control/)放置在表单控件组 `.form-group` 内，将表单操作按钮放置在表单操作栏 `.form-actions` 中。

::: tabs

== 示例

<Example>
  <form class="form w-56">
    <div class="form-group">
      <label class="form-label">账号</label>
      <input type="text" class="form-control" />
    </div>
    <div class="form-group">
      <label class="form-label">密码</label>
      <input type="password" class="form-control" />
    </div>
    <div class="form-actions">
      <button type="submit" class="btn primary btn-wide">登录</button>
    </div>
  </form>
</Example>

== HTML

```html
<form class="form w-56">
  <div class="form-group">
    <label class="form-label">账号</label>
    <input type="text" class="form-control" />
  </div>
  <div class="form-group">
    <label class="form-label">密码</label>
    <input type="password" class="form-control" />
  </div>
  <div class="form-actions">
    <button type="submit" class="btn primary btn-wide">登录</button>
  </div>
</form>
```

:::

## 水平布局的表单

为 `<form>` 元素使用类 `.form` 类来让表单实现水平布局。

::: tabs

== 示例

<Example>
  <form class="form-grid">
    <div class="form-group">
      <label class="form-label">账号</label>
      <input type="text" class="form-control" />
    </div>
    <div class="form-group">
      <label class="form-label">密码</label>
      <input type="password" class="form-control" />
    </div>
    <div class="form-actions">
      <button type="submit" class="btn primary btn-wide">登录</button>
    </div>
  </form>
</Example>

== HTML

```html
<form class="form-grid">
  <div class="form-group">
    <label class="form-label">账号</label>
    <input type="text" class="form-control" />
  </div>
  <div class="form-group">
    <label class="form-label">密码</label>
    <input type="password" class="form-control" />
  </div>
  <div class="form-actions">
    <button type="submit" class="btn primary btn-wide">登录</button>
  </div>
</form>
```

:::

## 帮助性文本

使用 `form-tip` 来显示帮助性的文本并添加到表单控件组中。

::: tabs

== 示例

<Example>
  <div class="form-group">
    <label class="form-label" for="exampleInputAccount2">账号</label>
    <input type="text" class="form-control" id="exampleInputAccount2" placeholder="输入用来注册的用户名">
    <label class="form-tip text-warning" for="exampleInputAccount2">用户名可以包含特殊字符及汉字。</label>
  </div>
</Example>

== HTML

```html
<div class="form-group">
  <div class="form-group">
    <label class="form-label" for="exampleInputAccount2">账号</label>
    <input type="text" class="form-control" id="exampleInputAccount2" placeholder="输入用来注册的用户名">
    <label class="form-tip text-warning" for="exampleInputAccount2">用户名可以包含特殊字符及汉字。</label>
  </div>
</div>
```

:::

## 校验状态

通过为表单控件组添加 `has-warning`、`has-error`、`has-success` 类即可应用相应的效验状态样式。这些样式会影响到表单控件组内的 `label`、`.form-control` 和 `.form-tip` 元素。

::: tabs

== 示例

<Example>
  <form class="form">
    <div class="form-group has-success">
      <label class="form-label" for="inputSuccess1">输入框（success）</label>
      <input type="text" class="form-control" id="inputSuccess1">
      <label class="form-tip" for="inputSuccess1">这是帮助性提示文本。</label>
    </div>
    <div class="form-group has-warning">
      <label class="form-label" for="inputWarning1">输入框（warning）</label>
      <input type="text" class="form-control" id="inputWarning1">
    </div>
    <div class="form-group has-error">
      <label class="form-label" for="inputError1">输入框（error）</label>
      <input type="text" class="form-control" id="inputError1">
    </div>
  </form>
</Example>

== HTML

```html
<form class="form">
  <div class="form-group has-success">
    <label class="form-label" for="inputSuccess1">输入框（success）</label>
    <input type="text" class="form-control" id="inputSuccess1">
    <label class="form-tip" for="inputSuccess1">这是帮助性提示文本。</label>
  </div>
  <div class="form-group has-warning">
    <label class="form-label" for="inputWarning1">输入框（warning）</label>
    <input type="text" class="form-control" id="inputWarning1">
  </div>
  <div class="form-group has-error">
    <label class="form-label" for="inputError1">输入框（error）</label>
    <input type="text" class="form-control" id="inputError1">
  </div>
</form>
```

:::

## 表单分组

使用fieldset 将多个表单控件放置在一起进行分组。在`<fieldset>` 内使用 `<legend>` 来定义分组标题。

::: tabs

== 示例

<Example>
  <form class="form">
    <fieldset>
      <legend><div class="form-title">账号信息</div></legend>
      <div class="form-group">
        <label class="form-label" for="exampleInputAccount3">账号</label>
        <input type="text" class="form-control" id="exampleInputAccount3" placeholder="电子邮件/手机号/用户名">
      </div>
      <div class="form-group">
        <label class="form-label">密码</label>
        <input type="password" class="form-control" />
      </div>
    </fieldset>
    <fieldset>
      <legend><div class="form-title">额外内容</div></legend>
      <div class="check-list">
        <label class="radio">
          <input type="radio" name="exampleRadioOption2"> 使用默认选项
        </label>
        <label class="radio">
          <input type="radio" name="exampleRadioOption2"> 让我自定义选项
        </label>
      </div>
    </fieldset>
    <div class="form-actions">
      <button type="submit" class="btn primary btn-wide">提交</button>
    </div>
  </form>
</Example>

== HTML

```html
<form class="form">
  <fieldset>
    <legend><div class="form-title">账号信息</div></legend>
    <div class="form-group">
      <label class="form-label" for="exampleInputAccount3">账号</label>
      <input type="text" class="form-control" id="exampleInputAccount3" placeholder="电子邮件/手机号/用户名">
    </div>
    <div class="form-group">
      <label class="form-label">密码</label>
      <input type="password" class="form-control" />
    </div>
  </fieldset>
  <fieldset>
    <legend><div class="form-title">额外内容</div></legend>
    <div class="check-list">
      <label class="radio">
        <input type="radio" name="exampleRadioOption2"> 使用默认选项
      </label>
      <label class="radio">
        <input type="radio" name="exampleRadioOption2"> 让我自定义选项
      </label>
    </div>
  </fieldset>
  <div class="form-actions">
    <button type="submit" class="btn primary btn-wide">提交</button>
  </div>
</form>
```

:::

## 标记必填项

标记必填项的一种通用方法是在标签上添加星标 `*` , 在表单控件组中只需要为表单组标签 `.form-label` 添加 `required` 类。

::: tabs

== 示例

<Example>
  <form class="form w-56">
    <div class="form-group">
      <label for="exampleInputAccount8" class="form-label required">账号</label>
      <input type="text" class="form-control" id="exampleInputAccount8" placeholder="电子邮件/手机号/用户名">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword8" class="form-label required">密码</label>
      <input type="password" class="form-control" id="exampleInputPassword8">
    </div>
    <div class="form-actions">
      <button type="submit" class="btn primary btn-wide">提交</button>
    </div>
  </form>
</Example>

== HTML

```html
<form class="form">
  <div class="form-group">
    <label for="exampleInputAccount8" class="form-label required">账号</label>
    <input type="text" class="form-control" id="exampleInputAccount8" placeholder="电子邮件/手机号/用户名">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword8" class="form-label required">密码</label>
    <input type="password" class="form-control" id="exampleInputPassword8">
  </div>
  <div class="form-actions">
    <button type="submit" class="btn primary btn-wide">提交</button>
  </div>
</form>
```

:::

水平布局的表单中也可以使用：

::: tabs

== 示例

<Example>
  <form class="form-grid">
    <div class="form-group">
      <label for="exampleInputAccount8" class="form-label required">账号</label>
      <input type="text" class="form-control" id="exampleInputAccount8" placeholder="电子邮件/手机号/用户名">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword8" class="form-label required">密码</label>
      <input type="password" class="form-control" id="exampleInputPassword8">
    </div>
  </form>
</Example>

== HTML

```html
<form class="form-grid">
  <div class="form-group">
    <label for="exampleInputAccount8" class="form-label required">账号</label>
    <input type="text" class="form-control" id="exampleInputAccount8" placeholder="电子邮件/手机号/用户名">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword8" class="form-label required">密码</label>
    <input type="password" class="form-control" id="exampleInputPassword8">
  </div>
</form>
```

:::

## CSS 类

表单提供了如下 CSS 类

  | 类        | 类型           | 作用  |
  | ------------- |:-------------:| ----- |
  | `form-group`      | 实体类 | 元素作为表单组件 |
  | `form-label`        | 实体类 | 元素作为表单组标签 |
  | `form-control`    | 实体类 | 元素作为表单控件组件 |
  | `form-tip`        | 实体类 | 元素作为表单控件的提示性文本 |
  | `form-actions` | 实体类 | 元素作为表单按钮容器 |
  | `form-grid` | 修饰类 | 为表单启用水平排列样式 |
  | `required`        | 修饰类 | 为表单控件启用必填标记样式 |
  | `has-error`       | 修饰类 | 为表单控件启用报错样式 |
  | `has-warning`     | 修饰类 | 为表单控件启用警告样式 |
  | `has-success`     | 修饰类 | 为表单控件启用成功样式 |

## CSS 变量

 | 变量名称 | 变量含义 |
 | -------- | -------- |
 | `--form-label-color`       | 表单组标签颜色 |
 | `--form-tip-color`   | 帮助性文本默认颜色  |
 | `--form-grid-label-width`    | 水平布局时表单表单组标签宽度  |
