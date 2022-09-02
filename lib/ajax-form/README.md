# ajaxForm


基于 Ajax 请求的表单验证插件。


## 获取表单数据

进行表单提交操作时获取表单数据，并传给后端接口

## 校验必填项

校验表单的必填项，并将错误提示显示在表单对应位置下。

```html:example
<form id="apiForm" class="validation" action="url" novalidate method='post'>
  <div class="form-group has-error">
    <label for="account" class="required">账号</label>
    <input type="text" id="account" class="form-control" />
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
     <button class="btn" data-type="submit" type="button" id="btn1">提交</button>
  </div>
</form>
```

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
    <select class="form-control disabled" id="fruit">
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
  import {AjaxForm} from 'zui/ajaxForm';
  new AjaxForm('apiForm', {
    // url: 'docs/js/ui/ajax-exp.json',
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
</script>
```

## 监听表单变化

监听表单内的数据变化，点击提交按钮前若关闭当前页面进行对应提示。

[示例待定]

```js

import {AjaxForm} from 'zui/ajaxForm';

new AjaxForm(id, {
  url:'',
  method: '', // GET | POST
  success: (data)=>{
    console.log('success', data);
  },
  error: (data)=>{
    console.log('fail', data);
  },
  finish: (data)=>{
    console.log('finish', data);
  },
});
```


## 成功的回调

用户可将处理成功的回调添加到 `success` 函数里。表单成功提交后进行对应逻辑处理。

[示例待定]


## 失败的回调

用户可将处理失败的回调添加到 `fail` 函数里。表单失败提交后进行对应逻辑处理。

[示例待定]


## 完成的回调

无论成功失败，用户可将完成的回调添加到 `complete` 函数里。表单失败提交后进行对应逻辑处理。

[示例待定]


## 清空

```html:example
<form id="resetForm" class="form-horizontal validation"  action="url" method='post'>
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
    <select class="form-control disabled" id="fruit">
      <option value="">请选择一种水果</option>
      <option value="apple">苹果</option>
      <option value="banana">香蕉</option>
      <option value="orange">桔子</option>
    </select>
  </div>
  <div class="form-group">
     <button class="btn" data-type="submit" type="button">提交</button>
     <button class="btn" data-type="reset" type="button">reset</button>
  </div>
</form>
```
