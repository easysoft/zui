# ajaxForm

基于 `form` 组件和 Ajax 请求的表单验证插件, 用以收集、校验、提交数据。

## 使用

使用 `new AjaxForm` 实例创建 `AjaxForm` 插件。

## 校验必填项

校验表单的必填项，并将错误提示显示在表单对应位置下。

```html:example
 <!-- data-novalidate="true" -->
<form id="ajax-form-1" class="form-horizontal validation" action="url" method='POST'>
  <div class="form-group">
    <label for="name-1" class="form-label required">登录名</label>
    <input type="text" id="name-1" class="form-control" />
  </div>
  <div class="form-group">
    <label for="pw-1" class="form-label required">密码</label>
    <input type="password" id="pw-1" class="form-control" />
  </div>
  <div class="form-group">
    <label for="fruit" class="required">水果</label>
    <select class="form-control" id="fruit">
      <option value="">请选择一种水果</option>
      <option value="apple">苹果</option>
      <option value="banana">香蕉</option>
      <option value="orange">桔子</option>
    </select>
  </div>
  <div class="form-group">
    <button class="btn" data-type="submit" type="button">提交</button>
    <button class="btn" data-type="reset" type="button">重置</button>
  </div>
</form>

<script>
const ajaxForm = new AjaxForm('#ajax-form-1', {
    rules: {
        'name-1': {
            required: true,
            errMsg: '请输入登录名',
        },
        'pw-1': {
            required: true,
            errMsg: '请输入密码',
        },
    },
});
// </script>
```

## 规则校验

表单数据提交至接口前的校验，避免接口多次请求。格式如下：

```html:example
<form id="ajax-form-2" class="form-horizontal validation" action="url" method='POST'>
  <div class="form-group">
    <label for="price-2" class="form-label required">价格</label>
    <input type="text" id="price-2" class="form-control" />
  </div>
  <div class="form-group">
    <button class="btn" data-type="submit" type="button">提交</button>
    <button class="btn" data-type="reset" type="button">重置</button>
  </div>
</form>
<script>
const ajaxForm2 = new AjaxForm('#ajax-form-2', {
    rules: {
        'price-2': [{
            required: true,
            errMsg: '请输入价格', // 错误信息提示
        }, {
            regexp: /\d+/,
            errMsg: '价格必须为数字',
        }, {
            validate: (x) => +x > 0,
            errMsg: '价格不能为负数',
        }],
    },
});
</script>
```



## 重置

```html:example
<form id="ajax-form-3" class="form-horizontal validation"  action="url" method='post'>
  <div class="form-group">
    <label for="name-3" class="form-label required">登录名</label>
    <input type="text" id="name-3" class="form-control" />
  </div>
  <div class="form-group">
    <label for="pw-3" class="form-label required">密码</label>
    <input type="password" id="pw-3" class="form-control" />
  </div>
  <div class="form-group">
     <button class="btn" data-type="submit" type="button">提交</button>
     <button class="btn" data-type="reset" type="button">重置</button>
  </div>
</form>
```

## 回调

根据需求添加表单提交后不同状态下的所需要的逻辑。

| 名称        | 参数含义         | 作用  |
| ------------- |:-------------:| ----- |
| `success`      | 调用接口成功后的返回数据 | 表单成功的回调函数 |
| `error`      | 调用接口失败后的返回数据 | 表单失败的回调函数 |
| `finish`      | 调用接口完成后的返回数据 | 表单完成的回调函数 |

```js
new AjaxForm('id', {
    rules: {
        'name': {
            required: true,
            msg: 'name必填',
            patterns: [{
                regexp: /^[a-zA-Z]+$/,
                msg: 'name请填入英文',
            }],
        },
    },
    success: (data)=>{
        alert('success', data);
    },
    error: (data)=>{
        alert('fail', data);
    },
    finish: (data)=>{
        alert('finish', data);
    },
});
```
