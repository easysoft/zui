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

使用组件类`.form-horizontal`来获得label和input同行表单外观

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
