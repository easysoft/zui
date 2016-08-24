section: view
id: form
description: 用于组织表单控件
icon: icon-layout
filter: biaodan bd
---

# 表单

## 基本形式

将 [**控件 → 表单控件**](#control/textbox) 包裹在 `<div class="form-group">` 内即可得到一个表单控件组。

表单控件组中通常还包括文本标签 `<label>`，[**输入组**](#component/inputgroup)（`.input-group`）也可以放置在表单控件组中。

将多个表单控件组堆叠在 `<form>` 内即可得到一个垂直排列的表单。

按钮 `.btn` 可以直接添加到表单内。

<example>
  <form>
    <div class="form-group">
      <label for="exampleInputAccount1">账号</label>
      <input type="text" class="form-control" id="exampleInputAccount1" placeholder="电子邮件/手机号/用户名">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">密码</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="">
    </div>
    <div class="form-group">
      <label for="exampleInputMoney1">捐赠金额</label>
      <div class="input-group">
        <span class="input-group-addon">￥</span>
        <input type="number" class="form-control" id="exampleInputMoney1" placeholder="最低捐赠金额为 ￥10.00">
        <span class="input-group-addon">.00</span>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">提交</button>
  </form>
</example>

```html
<form>
  <div class="form-group">
    <label for="exampleInputAccount1">账号</label>
    <input type="text" class="form-control" id="exampleInputAccount1" placeholder="电子邮件/手机号/用户名">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">密码</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="">
  </div>
  <div class="form-group">
    <label for="exampleInputMoney1">捐赠金额</label>
    <div class="input-group">
      <span class="input-group-addon">￥</span>
      <input type="number" class="form-control" id="exampleInputMoney1" placeholder="最低捐赠金额为 ￥10.00">
      <span class="input-group-addon">.00</span>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">提交</button>
<form>
```

## 水平排列的表单

为 `<form>` 添加 `.form-horizontal` 类，并联合使用栅格相关类，可以得到一个水平布局（标签和输入框在同一行）的表单。实际上是改变了表单控件组 `.form-group` 的行为，使其表现为栅格中的行（`.row`），因此无需在表单中再次使用 `.row`。

使用要点：

 - 应该表单控件组中的标签 `<label>` 添加 `.col-*` 来设定标签的列宽；
 - 输入框（包括 `<input>`、`<textarea>`、`<select>`）、多选框和单选框（包括 `.checkbox` 和 `.radio`）及按钮（`.btn`）必须放置在单独的额外容器 `<div class="col-*">` 内来为其应用列宽；
 - 如果控件组中不包括标签，可以为 `<div class="col-*">` 添加 `.col-*-offset-*` 类来使其左侧在垂直方向对齐；
 - 可以在一行（`.form-group`）内包含多个 `.col-*` 来同时排列多个输入框。

<example>
  <form class="form-horizontal">
    <div class="form-group">
      <label for="exampleInputAccount4" class="col-sm-2">账号</label>
      <div class="col-md-6 col-sm-10">
        <input type="text" class="form-control" id="exampleInputAccount4" placeholder="电子邮件/手机号/用户名">
      </div>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword4" class="col-sm-2">密码</label>
      <div class="col-md-6 col-sm-10">
        <input type="password" class="form-control" id="exampleInputPassword4" placeholder="密码">
      </div>
    </div>
    <div class="form-group">
      <label for="exampleInputAddress1" class="col-sm-2">地址</label>
      <div class="col-sm-3">
        <select class="form-control" id="exampleInputAddress1">
          <option>北京</option>
          <option>上海</option>
        </select>
      </div>
      <div class="col-sm-3">
        <input type="text" class="form-control" id="exampleInputAddress2" placeholder="市/县">
      </div>
      <div class="col-sm-4">
        <input type="text" class="form-control" id="exampleInputAddress3" placeholder="详细地址">
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <div class="checkbox">
          <label>
            <input type="checkbox"> 记住我
          </label>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-default">登录</button>
      </div>
    </div>
  </form>
</example>

```html
<form class="form-horizontal">
  <div class="form-group">
    <label for="exampleInputAccount4" class="col-sm-2">账号</label>
    <div class="col-md-6 col-sm-10">
      <input type="text" class="form-control" id="exampleInputAccount4" placeholder="电子邮件/手机号/用户名">
    </div>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword4" class="col-sm-2">密码</label>
    <div class="col-md-6 col-sm-10">
      <input type="password" class="form-control" id="exampleInputPassword4" placeholder="密码">
    </div>
  </div>
  <div class="form-group">
    <label for="exampleInputAddress1" class="col-sm-2">地址</label>
    <div class="col-sm-3">
      <select class="form-control" id="exampleInputAddress1">
        <option>北京</option>
        <option>上海</option>
      </select>
    </div>
    <div class="col-sm-3">
      <input type="text" class="form-control" id="exampleInputAddress2" placeholder="市/县">
    </div>
    <div class="col-sm-4">
      <input type="text" class="form-control" id="exampleInputAddress3" placeholder="详细地址">
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <div class="checkbox">
        <label>
          <input type="checkbox"> 记住我
        </label>
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-default">登录</button>
    </div>
  </div>
</form>
```

## 内联表单

为表单 `<form>` 添加 `.form-inline` 类可使内部的表单控件表现为 `inline-block` 形式，这些表单控件会在允许的宽度内水平排列。仅当视窗口（viewport）宽度至少在 768px 宽度时生效（视窗口宽度再小的话就会使表单控件重新垂直排列）。

<example>
  <form class="form-inline">
    <div class="form-group">
      <label for="exampleInputEmail3">邮箱</label>
      <input type="text" class="form-control" id="exampleInputEmail3" placeholder="you@me.com">
    </div>
    <div class="form-group">
      <label for="exampleInputInviteCode3">邀请码</label>
      <input type="password" class="form-control" id="exampleInputInviteCode3" placeholder="XXXX-XXXX-XXXX">
    </div>
    <button type="submit" class="btn btn-primary">激活</button>
  </form>
</example>

```
<form class="form-inline">
  <div class="form-group">
    <label for="exampleInputEmail3">邮箱</label>
    <input type="text" class="form-control" id="exampleInputEmail3" placeholder="you@me.com">
  </div>
  <div class="form-group">
    <label for="exampleInputInviteCode3">邀请码</label>
    <input type="password" class="form-control" id="exampleInputInviteCode3" placeholder="XXXX-XXXX-XXXX">
  </div>
  <button type="submit" class="btn btn-primary">激活</button>
</form>
```

## 帮助性文本

使用 `<div class="help-block">` 来显示帮助性的文本并添加到表单控件组中。

<example>
  <div class="form-group">
    <label for="exampleInputAccount2">用户名</label>
    <input type="text" class="form-control" id="exampleInputAccount2" placeholder="输入用来注册的用户名">
    <div class="help-block">用户名可以包含特殊字符及汉字。</div>
  </div>
</example>

```html
<div class="form-group">
  <div class="form-group">
    <label for="exampleInputAccount2">账号</label>
    <input type="text" class="form-control" id="exampleInputAccount2" placeholder="输入用来注册的用户名">
    <div class="help-block">用户名可以包含特殊字符及汉字。</div>
  </div>
</div>
```

## 多选框和单选框

多选框和单选框（参见 [**控件 → 多选和单选框**](#control/checkbox/)）可以直接与表单控件组一起堆叠放置在 `<form>` 内。

<example>
  <form>
    <div class="form-group">
      <label for="exampleInputInviteCode1">邀请码</label>
      <input type="text" class="form-control" id="exampleInputInviteCode1" placeholder="请输入邀请码">
    </div>
    <div class="checkbox">
      <label>
        <input type="checkbox"> 我已阅读并接受用户协议
      </label>
    </div>
    <div class="radio">
      <label>
        <input type="radio" name="exampleRadioOption1"> 使用默认选项
      </label>
    </div>
    <div class="radio">
      <label>
        <input type="radio" name="exampleRadioOption1"> 让我自定义选项
      </label>
    </div>
    <button type="submit" class="btn">开始</button>
  </form>
</example>

```
<form>
  ...
  <div class="checkbox">
    <label>
      <input type="checkbox"> 我已阅读并接受用户协议
    </label>
  </div>
  <div class="radio">
    <label>
      <input type="radio" name="exampleRadioOption1"> 使用默认选项
    </label>
  </div>
  <div class="radio">
    <label>
      <input type="radio" name="exampleRadioOption1"> 让我自定义选项
    </label>
  </div>
  ...
</form>
```

内联多选框和内联单选框（参见 [**控件 → 多选和单选框**](#control/checkbox/1)）可以作为表单控件组的内容。

<example>
  <div class="form-group">
    <label class="checkbox-inline">
      <input type="checkbox"> 多选框 1
    </label>
    <label class="checkbox-inline">
      <input type="checkbox"> 多选框 2
    </label>
    <label class="checkbox-inline">
      <input disabled type="checkbox"> 被禁用的多选框
    </label>
  </div>
  <div class="form-group">
    <label class="radio-inline">
      <input type="radio" name="radioOptionsExample3"> 单选框 1
    </label>
    <label class="radio-inline">
      <input type="radio" name="radioOptionsExample3"> 单选框 2
    </label>
    <label class="radio-inline">
      <input disabled type="radio" name="radioOptionsExample3"> 被禁用的单选框
    </label>
  </div>
</example>

```html
<div class="form-group">
  <label class="checkbox-inline">
    <input type="checkbox"> 多选框 1
  </label>
  ...
</div>

<div class="form-group">
  <label class="radio-inline">
    <input type="radio" name="radioOptionsExample3"> 单选框 1
  </label>
  ...
</div>
```

## 效验状态

通过为表单控件组添加 `.has-warning`、`.has-error`、`.has-success`类即可应用相应的效验状态样式。这些样式会影响到表单控件组内的 `<label>`、`.form-control` 和 `.help-block` 元素。

效验状态类也可以添加到多选框（`.checkbox`）和单选框（`.radio`）上。

<example>
  <div class="form-group has-success">
    <label for="inputSuccess1">输入框（success）</label>
    <input type="text" class="form-control" id="inputSuccess1">
    <div class="help-block">这是帮助性提示文本</div>
  </div>
  <div class="form-group has-warning">
    <label for="inputWarning1">输入框（warning）</label>
    <input type="text" class="form-control" id="inputWarning1">
  </div>
  <div class="form-group has-error">
    <label for="inputError1">输入框（error）</label>
    <input type="text" class="form-control" id="inputError1">
  </div>
  <div class="checkbox has-success">
    <label>
      <input type="checkbox" id="checkboxSuccess" value="option1">
      多选框（success）
    </label>
  </div>
  <div class="checkbox has-warning">
    <label>
      <input type="checkbox" id="checkboxWarning" value="option1">
      多选框（warning）
    </label>
  </div>
  <div class="checkbox has-error">
    <label>
      <input type="checkbox" id="checkboxError" value="option1">
      多选框（error）
    </label>
  </div>
</example>

```html
<div class="form-group has-success">
  <label for="inputSuccess1">输入框（success）</label>
  <input type="text" class="form-control" id="inputSuccess1">
  <div class="help-block">这是帮助性提示文本。</div>
</div>
<div class="form-group has-warning">
  <label for="inputWarning1">输入框（warning）</label>
  <input type="text" class="form-control" id="inputWarning1">
</div>
<div class="form-group has-error">
  <label for="inputError1">输入框（error）</label>
  <input type="text" class="form-control" id="inputError1">
</div>
<div class="checkbox has-success">
  <label>
    <input type="checkbox" id="checkboxSuccess" value="option1">
    多选框（success）
  </label>
</div>
<div class="checkbox has-warning">
  <label>
    <input type="checkbox" id="checkboxWarning" value="option1">
    多选框（warning）
  </label>
</div>
<div class="checkbox has-error">
  <label>
    <input type="checkbox" id="checkboxError" value="option1">
    多选框（error）
  </label>
</div>
```

<div class="alert alert-info">
  <h4>使用 JavaScript 进行效验</h4>
  <p>这些效验状态通过添加类名的形式来改变外观，并不能在表单提交时自动应用正确的状态。你仍然需要使用 JavaScript 等其他手段在效验表单数据并应用合适的效验状态类。</p>
</div>

## 使用 fieldset

使用 `<fieldset>` 可以将多个表单控件放置在一起进行分组。

在 `<fieldset>` 内使用 `<legend>` 来定义分组标题。

<example>
  <form>
    <fieldset>
      <legend>账号信息</legend>
      <div class="form-group">
        <label for="exampleInputAccount3">账号</label>
        <input type="text" class="form-control" id="exampleInputAccount3" placeholder="电子邮件/手机号/用户名">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword3">密码</label>
        <input type="password" class="form-control" id="exampleInputPassword3" placeholder="">
      </div>
    </fieldset>
    <fieldset>
      <legend>额外内容</legend>
      <div class="form-group">
        <label for="exampleInputInviteCode2">邀请码</label>
        <input type="text" class="form-control" id="exampleInputInviteCode2" placeholder="请输入邀请码">
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="exampleRadioOption2"> 使用默认选项
        </label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="exampleRadioOption2"> 让我自定义选项
        </label>
      </div>
    </fieldset>
    <button type="submit" class="btn">开始</button>
  </form>
</example>

```html
<form>
  <fieldset>
    <legend>账号信息</legend>
    <div class="form-group">
      <label for="exampleInputAccount3">账号</label>
      <input type="text" class="form-control" id="exampleInputAccount3" placeholder="电子邮件/手机号/用户名">
    </div>
    ...
  </fieldset>
  <fieldset>
    <legend>额外内容</legend>
    ...
  </fieldset>
  <button type="submit" class="btn">开始</button>
</form>
```

## 静态文本

在水平排列的表单中，如果需要在标签右侧放置静态文本，只需要为 `<p>` 添加 `.form-control-static` 类即可。

<example>
  <form class="form-horizontal">
    <div class="form-group">
      <label class="col-sm-2">用户名</label>
      <div class="col-sm-10">
        <p class="form-control-static">me@example.com</p>
      </div>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword5" class="col-sm-2">密码</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" id="exampleInputPassword5" placeholder="密码">
      </div>
    </div>
  </form>
</example>

```html
<form class="form-horizontal">
  <div class="form-group">
    <label class="col-sm-2">用户名</label>
    <div class="col-sm-10">
      <p class="form-control-static">me@example.com</p>
    </div>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword5" class="col-sm-2">密码</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="exampleInputPassword5" placeholder="密码">
    </div>
  </div>
</form>
```

## 禁用状态和只读状态

只需要表单控件（包括 `<input>`、`<select>`、`<textarea`>）添加 `disabled` 属性即可禁用状态。处于禁用状态的控件有不同的外观并且不可与用户进行任何交互（包括获得焦点及进行输入等），此时鼠标光标被设置为 `not-allowed` 类型。表单控件的禁用状态可以参考 [**控件 → 表单控件**](#control/textbox) 章节。

<example>
  <form>
    <div class="form-group">
      <label for="exampleDisabledInput">被禁用的输入框</label>
      <input type="text" class="form-control" id="exampleDisabledInput" placeholder="被禁用的输入框" disabled>
    </div>
  </form>
</example>

```html
<div class="form-group">
  <label for="exampleDisabledInput">被禁用的输入框</label>
  <input type="text" class="form-control" id="exampleDisabledInput" placeholder="被禁用的输入框" disabled>
</div>
```

当使用了 `<fieldset>` 时，可以直接为 `<fieldset>` 添加 `disabled` 属性，这样处于 `<fieldset>` 内的所有表单控件都会处于禁用状态。

<example>
  <form>
    <fieldset disabled>
      <legend>此 fieldset 内的所有表单控件都被禁用</legend>
      <div class="form-group">
        <label for="exampleInputInviteCode2">邀请码</label>
        <input type="text" class="form-control" id="exampleInputInviteCode2" placeholder="请输入邀请码">
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="exampleRadioOption2"> 使用默认选项
        </label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="exampleRadioOption2"> 让我自定义选项
        </label>
      </div>
      <button type="submit" class="btn">开始</button>
    </fieldset>
  </form>
</example>

```html
<fieldset disabled>
  <legend>此 fieldset 内的所有表单控件都被禁用</legend>
  <div class="form-group">
    <label for="exampleInputInviteCode2">邀请码</label>
    <input type="text" class="form-control" id="exampleInputInviteCode2" placeholder="请输入邀请码">
  </div>
  <div class="radio">
    <label>
      <input type="radio" name="exampleRadioOption2"> 使用默认选项
    </label>
  </div>
  <div class="radio">
    <label>
      <input type="radio" name="exampleRadioOption2"> 让我自定义选项
    </label>
  </div>
  <button type="submit" class="btn">开始</button>
</fieldset>
```

为表单控件（包括 `<input>`、`<select>`、`<textarea`>）添加 `readonly` 属性可以为其应用只读状态。处于只读状态的控件外观与处于禁用状态的外观类似，用户无法编辑控件内的内容，但仍然保留默认的鼠标类型，而且可以被激活。

<example>
  <form>
    <div class="form-group">
      <label for="exampleReadonlyInput">只读的输入框</label>
      <input type="text" class="form-control" id="exampleReadonlyInput" placeholder="只读的输入框" readonly>
    </div>
  </form>
</example>

```html
<div class="form-group">
  <label for="exampleReadonlyInput">只读的输入框</label>
  <input type="text" class="form-control" id="exampleReadonlyInput" placeholder="只读的输入框" readonly>
</div>
```

## 标记必填项

标记必填项的一种通用方法是在标签上添加星标 <strong class="text-danger">*</strong>，在表单控件组中只需要为 `<label>` 添加 `.required` 类即可。

<example>
  <form>
    <div class="form-group">
      <label for="exampleInputAccount8" class="required">账号</label>
      <input type="text" class="form-control" id="exampleInputAccount8" placeholder="电子邮件/手机号/用户名">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword8" class="required">密码</label>
      <input type="password" class="form-control" id="exampleInputPassword8" placeholder="">
    </div>
    <button type="submit" class="btn btn-primary">提交</button>
  </form>
</example>

```html
<form>
  <div class="form-group">
    <label for="exampleInputAccount8" class="required">账号</label>
    <input type="text" class="form-control" id="exampleInputAccount8" placeholder="电子邮件/手机号/用户名">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword8" class="required">密码</label>
    <input type="password" class="form-control" id="exampleInputPassword8" placeholder="">
  </div>
  <button type="submit" class="btn btn-primary">提交</button>
</form>
```

星星标记同样适用于水平排列的表单。

<example>
  <form class="form-horizontal">
    <div class="form-group">
      <label for="exampleInputAccount9" class="col-sm-2 required">账号</label>
      <div class="col-md-6 col-sm-10">
        <input type="text" class="form-control" id="exampleInputAccount9" placeholder="电子邮件/手机号/用户名">
      </div>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword9" class="col-sm-2 required">密码</label>
      <div class="col-md-6 col-sm-10">
        <input type="password" class="form-control" id="exampleInputPassword9" placeholder="密码">
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <div class="checkbox">
          <label>
            <input type="checkbox"> 记住我
          </label>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-default">登录</button>
      </div>
    </div>
  </form>
</example>

```html
<form class="form-horizontal">
  <div class="form-group">
    <label for="exampleInputAccount9" class="col-sm-2 required">账号</label>
    <div class="col-md-6 col-sm-10">
      <input type="text" class="form-control" id="exampleInputAccount9" placeholder="电子邮件/手机号/用户名">
    </div>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword4" class="col-sm-2 required">密码</label>
    <div class="col-md-6 col-sm-10">
      <input type="password" class="form-control" id="exampleInputPassword4" placeholder="密码">
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <div class="checkbox">
        <label>
          <input type="checkbox"> 记住我
        </label>
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-default">登录</button>
    </div>
  </div>
</form>
```

## 更为紧凑的表单

为表单元素添加 `.form-condensed` 可以减小表单内的所有控件和文本尺寸及间距，从而获得一个更加紧凑的表单视图。

<example>
  <form class="form-condensed">
    <div class="form-group">
      <label for="exampleInputAccount6">账号</label>
      <input type="text" class="form-control" id="exampleInputAccount6" placeholder="电子邮件/手机号/用户名">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword6">密码</label>
      <input type="password" class="form-control" id="exampleInputPassword6" placeholder="">
    </div>
    <div class="form-group">
      <label for="exampleInputMoney1">捐赠金额</label>
      <div class="input-group">
        <span class="input-group-addon">￥</span>
        <input type="number" class="form-control" id="exampleInputMoney1" placeholder="最低捐赠金额为 ￥10.00">
        <span class="input-group-addon">.00</span>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">提交</button>
  </form>
</example>

```html
<form class="form-condensed">
  <div class="form-group">
    <label for="exampleInputAccount6">账号</label>
    <input type="text" class="form-control" id="exampleInputAccount6" placeholder="电子邮件/手机号/用户名">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword6">密码</label>
    <input type="password" class="form-control" id="exampleInputPassword6" placeholder="">
  </div>
  <div class="form-group">
    <label for="exampleInputMoney1">捐赠金额</label>
    <div class="input-group">
      <span class="input-group-addon">￥</span>
      <input type="number" class="form-control" id="exampleInputMoney1" placeholder="最低捐赠金额为 ￥10.00">
      <span class="input-group-addon">.00</span>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">提交</button>
</form>
```

`.form-condensed` 也可以应用于水平排列的表单。

<example>
  <form class="form-horizontal form-condensed">
    <div class="form-group">
      <label for="exampleInputAccount7" class="col-sm-2">账号</label>
      <div class="col-md-6 col-sm-10">
        <input type="text" class="form-control" id="exampleInputAccount7" placeholder="电子邮件/手机号/用户名">
      </div>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword7" class="col-sm-2">密码</label>
      <div class="col-md-6 col-sm-10">
        <input type="password" class="form-control" id="exampleInputPassword7" placeholder="密码">
      </div>
    </div>
    <div class="form-group">
      <label for="exampleInputAddress7" class="col-sm-2">地址</label>
      <div class="col-sm-3">
        <select class="form-control" id="exampleInputAddress7">
          <option>北京</option>
          <option>上海</option>
        </select>
      </div>
      <div class="col-sm-3">
        <input type="text" class="form-control" id="exampleInputAddress8" placeholder="市/县">
      </div>
      <div class="col-sm-4">
        <input type="text" class="form-control" id="exampleInputAddress9" placeholder="详细地址">
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <div class="checkbox">
          <label>
            <input type="checkbox"> 记住我
          </label>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-default">登录</button>
      </div>
    </div>
  </form>
</example>

```html
<form class="form-horizontal form-condensed">
  <div class="form-group">
    <label for="exampleInputAccount7" class="col-sm-2">账号</label>
    <div class="col-md-6 col-sm-10">
      <input type="text" class="form-control" id="exampleInputAccount7" placeholder="电子邮件/手机号/用户名">
    </div>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword7" class="col-sm-2">密码</label>
    <div class="col-md-6 col-sm-10">
      <input type="password" class="form-control" id="exampleInputPassword7" placeholder="密码">
    </div>
  </div>
  <div class="form-group">
    <label for="exampleInputAddress7" class="col-sm-2">地址</label>
    <div class="col-sm-3">
      <select class="form-control" id="exampleInputAddress7">
        <option>北京</option>
        <option>上海</option>
      </select>
    </div>
    <div class="col-sm-3">
      <input type="text" class="form-control" id="exampleInputAddress8" placeholder="市/县">
    </div>
    <div class="col-sm-4">
      <input type="text" class="form-control" id="exampleInputAddress9" placeholder="详细地址">
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <div class="checkbox">
        <label>
          <input type="checkbox"> 记住我
        </label>
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-default">登录</button>
    </div>
  </div>
</form>
```
