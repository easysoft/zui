# ajaxForm

基于 `form` 组件和 Ajax 请求的表单验证插件, 用以收集、校验、提交数据。

## 使用

使用 `new AjaxForm` 实例创建 `AjaxForm` 插件。

## 校验必填项

校验表单的必填项，并将错误提示显示在表单对应位置下。

```html:example
 <!-- data-novalidate="true" -->
<form id="apiForm2" class="form-horizontal validation"  action="url" method='post'>
  <div class="form-group has-error">
    <label for="name" class="required">登录名</label>
    <input type="text" id="name" class="form-control" />
    <div class="form-tip">错误提示</div>
  </div>
  <div class="form-group">
    <label for="pw" class="required">密码</label>
    <input type="password" id="pw" class="form-control" />
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
     <button class="btn" data-type="submit" type="button" id="btn2">提交</button>
     <button class="btn" data-type="reset" type="button" id="btn3">reset</button>
  </div>
</form>

<script>
  new AjaxForm('apiForm2', {
    rules: {
      'pw': {
          required: true,
          msg: 'pw必填',
      },
    },
    success: ()=>{
        console.log('success');
    },
    fail: ()=>{
        console.log('fail');
    },
    finish: ()=>{
        console.log('finish');
    },
  });


// </script>
```

## rules

表单数据提交至接口前的校验，避免接口多次请求。格式如下：

```js
new AjaxForm('id', {
  rules: {
    'key': {
      required: true, // 是否必填
      msg: 'name必填', // 错误信息提示
      patterns: [{
        reg: /^[a-zA-Z]+$/, // 前端传递的正则
        msg: 'name请填入英文', // 错误信息提示
      }],
    },
  }
  ...
});
```



## 清空

```html:example
<form id="resetForm" class="form-horizontal validation"  action="url" method='post'>
  <div class="form-group">
    <label for="name" class="required">登录名</label>
    <input type="text" id="name" class="form-control" />
  </div>
  <div class="form-group">
    <label for="pw" class="required">密码</label>
    <input type="password" id="pw" class="form-control" />
  </div>
  <div class="form-group">
     <button class="btn" data-type="submit" type="button">提交</button>
     <button class="btn" data-type="reset" type="button">reset</button>
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
                reg: /^[a-zA-Z]+$/,
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
