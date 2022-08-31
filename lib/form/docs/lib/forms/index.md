# 表单

## 基本样式表单 

使用组件类`.form-group`来获得表单外观，通常搭配`<form>`,`<label>`以及`<input>`等表单控件使用

<Example>
  <form>
    <div class="form-group">
      <label> 账号 </label>
      <input type="text" class="form-control" />
    </div>
    <div class="form-group">
      <label> 密码 </label>
      <input type="password" class="form-control" />
    </div>
  </form>
</Example>

```html
<form>
  <div class="form-group">
    <label> 账号 </label>
    <input type="text" class="form-control" />
  </div>
  <div class="form-group">
    <label> 密码 </label>
    <input type="password" class="form-control" />
  </div>
</form>
```

## 水平排列的表单

使用组件类`.form-horizontal`来获得水平排列的表单外观

<Example>
  <form class="form-horizontal">
    <div class="form-group">
      <label> 账号 </label>
      <input type="text" class="form-control" />
    </div>
    <div class="form-group">
      <label> 密码 </label>
      <input type="password" class="form-control" />
    </div>
  </form>
</Example>

```html
<form class="form-horizontal">
  <div class="form-group">
    <label>账号</label>
    <input type="text" class="form-control">
    </input>
  </div>
  <div class="form-group">
    <label> 密码 </label>
    <input type="password" class="form-control" >
    </input>
  </div>
</form>
```
## 帮助性文本

使用 `<div class="form-tip">` 来显示帮助性的文本并添加到表单控件组中。
<Example>
  <div>
    <div class="form-group">
      <label for="exampleInputAccount2">账号</label>
      <input type="text" class="form-control" id="exampleInputAccount2" placeholder="输入用来注册的用户名">
      <div class="form-tip">用户名可以包含特殊字符及汉字。</div>
    </div>
  </div>
</Example>

```html

<div>
  <div class="form-group">
    <label for="exampleInputAccount2">账号</label>
    <input type="text" class="form-control" id="exampleInputAccount2" placeholder="输入用来注册的用户名">
    <div class="form-tip">用户名可以包含特殊字符及汉字。</div>
  </div>
</div>
```

## 校验状态

通过为表单控件组添加 has-warning,has-error,has-success类即可应用相应的效验状态样式。这些样式会影响到表单控件组内的 label form-control 和 form-tip 元素。

<Example>
<form>
  <div class="form-group has-success">
    <label for="inputSuccess1">输入框（success）</label>
    <input type="text" class="form-control" id="inputSuccess1">
    <div class="form-tip">这是帮助性提示文本。</div>
  </div>
  <div class="form-group has-warning">
    <label for="inputWarning1">输入框（warning）</label>
    <input type="text" class="form-control" id="inputWarning1">
  </div>
  <div class="form-group has-error">
    <label for="inputError1">输入框（error）</label>
    <input type="text" class="form-control" id="inputError1">
  </div>
</form>
</Example>

```html
<form>
  <div class="form-group has-success">
    <label for="inputSuccess1">输入框（success）</label>
    <input type="text" class="form-control" id="inputSuccess1">
    <div class="form-tip">这是帮助性提示文本。</div>
  </div>
  <div class="form-group has-warning">
    <label for="inputWarning1">输入框（warning）</label>
    <input type="text" class="form-control" id="inputWarning1">
  </div>
  <div class="form-group has-error">
    <label for="inputError1">输入框（error）</label>
    <input type="text" class="form-control" id="inputError1">
  </div>
</form>
```

## 表单分组

使用fieldset 将多个表单控件放置在一起进行分组。
在`<fieldset>` 内使用 `<legend>` 来定义分组标题。
<Example>
  <form>
    <fieldset>
      <legend>账号信息</legend>
      <div class="form-group">
        <label for="exampleInputAccount3">账号</label>
        <input type="text" class="form-control" id="exampleInputAccount3" placeholder="电子邮件/手机号/用户名">
      </div>
      <div class="form-group">
        <label> 密码 </label>
        <input type="password" class="form-control" />
      </div>
    </fieldset>
    <fieldset>
      <legend>额外内容</legend> 
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
  </form>
</Example>


```html
<form>
  <fieldset>
    <legend>账号信息</legend>
    <div class="form-group">
      <label for="exampleInputAccount3">账号</label>
      <input type="text" class="form-control" id="exampleInputAccount3" placeholder="电子邮件/手机号/用户名">
    </div>
    <div class="form-group">
       <label> 密码 </label>
       <input type="password" class="form-control" />
    </div>
  </fieldset>
  <legend>额外内容</legend> 
  <fieldset>
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
</form>
```

## 禁用状态和只读状态

只需要表单控件（包括 `<input>、<select>、<textarea>`）添加 disabled 属性即可禁用状态。处于禁用状态的控件有不同的外观并且不可与用户进行任何交互（包括获得焦点及进行输入等），此时鼠标光标被设置为 not-allowed 类型。表单控件的禁用状态可以参考 控件 → 表单控件 章节。
<Example>
  <div class="form-group">
    <label for="exampleDisabledInput">被禁用的输入框</label>
    <input type="text" class="form-control" id="exampleDisabledInput" placeholder="被禁用的输入框" disabled>
  </div>
</Example>


```html
<div class="form-group">
  <label for="exampleDisabledInput">被禁用的输入框</label>
  <input type="text" class="form-control" id="exampleDisabledInput" placeholder="被禁用的输入框" disabled>
</div>
```

当使用了 `<fieldset>` 时，可以直接为 `<fieldset>` 添加 disabled 属性，这样处于 `<fieldset>`内的所有表单控件都会处于禁用状态。
<Example>
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
</fieldset>
</Example>


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
</fieldset>
```

为表单控件（包括` <input>、<select>、<textarea>`）添加 readonly 属性可以为其应用只读状态。处于只读状态的控件外观与处于禁用状态的外观类似，用户无法编辑控件内的内容，但仍然保留默认的鼠标类型，而且可以被激活。
<Example>
<div class="form-group">
  <label for="exampleReadonlyInput">只读的输入框</label>
  <input type="text" class="form-control" id="exampleReadonlyInput" placeholder="只读的输入框" readonly>
</div>
</Example>


```html
<div class="form-group">
  <label for="exampleReadonlyInput">只读的输入框</label>
  <input type="text" class="form-control" id="exampleReadonlyInput" placeholder="只读的输入框" readonly>
</div>
```

## 标记必填项

标记必填项的一种通用方法是在标签上添加星标* , 在表单控件组中只需要为`<label>`添加.required 类
<Example>
<form>
  <div class="form-group">
    <label for="exampleInputAccount8" class="required">账号</label>
    <input type="text" class="form-control" id="exampleInputAccount8" placeholder="电子邮件/手机号/用户名">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword8" class="required">密码</label>
    <input type="password" class="form-control" id="exampleInputPassword8" placeholder="">
  </div>
</form>
</Example>


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
</form>
```

水平表单中也可以使用
<Example>
  <form class="form-horizontal">
    <div class="form-group">
      <label for="exampleInputAccount8" class="required">账号</label>
      <input type="text" class="form-control" id="exampleInputAccount8" placeholder="电子邮件/手机号/用户名">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword8" class="required">密码</label>
      <input type="password" class="form-control" id="exampleInputPassword8" placeholder="">
    </div>
  </form>
</Example>


```html
 <form class="form-horizontal">
   <div class="form-group">
     <label for="exampleInputAccount8" class="required">账号</label>
     <input type="text" class="form-control" id="exampleInputAccount8" placeholder="电子邮件/手机号/用户名">
   </div>
   <div class="form-group">
     <label for="exampleInputPassword8" class="required">密码</label>
     <input type="password" class="form-control" id="exampleInputPassword8" placeholder="">
   </div>
 </form>
```

## 表单控件

为`<input>`,`<textarea>`,`<select>` 添加.form-control 类即可得到统一的表单外观。所受支持的表单控件包括:

 `<select class="form-control">`

 `<textarea class="form-control" rows="3">`

 `<input type="text" class="form-control">`

 `<input type="password" class="form-control">`

 `<input type="datetime" class="form-control">`

 `<input type="datetime-local" class="form-control">`

 `<input type="date" class="form-control">`

 `<input type="month" class="form-control">`

 `<input type="time" class="form-control">`

 `<input type="week" class="form-control">`

 `<input type="number" class="form-control">`

 `<input type="email" class="form-control">`

 `<input type="url" class="form-control">`

 `<input type="search" class="form-control">`
 
 `<input type="tel" class="form-control">`
 
 `<input type="color" class="form-control">`

<Example>
 <input type="text" class="form-control" placeholder="请输入文本">
</Example>

```html
 <input type="text" class="form-control" placeholder="请输入文本">
```

<Example>
  <textarea class="form-control" rows="3" placeholder="可输入多行文本"></textarea>
</Example>

```
  <textarea class="form-control" rows="3" placeholder="可输入多行文本"></textarea>
```

<Example>
 <select class="form-control">
   <option value="">请选择一种水果</option>
   <option value="apple">苹果</option>
   <option value="banana">香蕉</option>
   <option value="orange">桔子</option>
 </select>
</Example>

```html
 <select class="form-control">
   <option value="">请选择一种水果</option>
   <option value="apple">苹果</option>
   <option value="banana">香蕉</option>
   <option value="orange">桔子</option>
 </select>
```

<Example>
 <select multiple class="form-control">
   <option value="">请选择一种水果</option>
   <option value="apple">苹果</option>
   <option value="banana">香蕉</option>
   <option value="orange">橘子</option>
 </select>
</Example>

```html
 <select class="form-control" multiple>
   <option value="">请选择所有爱吃的水果</option>
   <option value="apple">苹果</option>
   <option value="banana">香蕉</option>
   <option value="orange">橘子</option>
 </select>
```

## CSS 类

表单提供了如下CSS类

  | 类        | 类型           | 作用  |
  | ------------- |:-------------:| ----- |
  | `form-group`      | 实体类 | 元素作为表单组件 |
  | `form-control`    | 实体类 | 元素作为表单控件组件 |
  | `form-tip`        | 实体类 | 元素作为表单控件的提示性文本 |
  | `form-horizontal` | 修饰类 | 为表单启用水平排列样式 |
  | `required`        | 修饰类 | 为表单控件启用必填标记样式 |
  | `has-error`       | 修饰类 | 为表单控件启用报错样式 |
  | `has-warning`     | 修饰类 | 为表单控件启用警告样式 |
  | `has-success`     | 修饰类 | 为表单控件启用成功样式 |

## CSS 变量 

 | 变量名称 | 变量含义 |
 | -------- | -------- |
 | --form-label-width       | 表单文本宽度 |
 | --form-horz-label-align  | 水平布局下文本对齐方向 |
 | --form-control-radius        | 表单控件圆角     |
 | --form-control-border-color  | 表单控件边框颜色 |
 | --form-focus-color   | 表单控件响应聚焦边框颜色  |
 | --form-placeholder-color    | 表单控件提示文本文字颜色  |
