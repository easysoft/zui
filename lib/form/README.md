# 表单

## form

使用组件类`.form-group`来获得表单外观，通常搭配`<form>`,`<label>`以及`<input>`等表单控件使用

```html:example: flex gap-3
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

 ```html:example: flex gap-3
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
 ```

## 帮助性文本 

使用 <div class="help-block"> 来显示帮助性的文本并添加到表单控件组中。

```html:example: flex gap-3
<div>
  <div class="form-group">
    <label for="exampleInputAccount2">账号</label>
    <input type="text" class="form-control" id="exampleInputAccount2" placeholder="输入用来注册的用户名">
    <div class="help-block">用户名可以包含特殊字符及汉字。</div>
  </div>
</div>
```

## 校验状态

通过为表单控件组添加 .has-warning、.has-error、.has-success类即可应用相应的效验状态样式。这些样式会影响到表单控件组内的 <label>、.form-control 和 .help-block 元素。

```html:example: flex gap-3
<form>
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
</form>
```
