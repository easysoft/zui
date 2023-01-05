# 表单

## `.form` `.form-group`

```html:example
<form class="form w-80">
  <div class="form-group">
    <label class="form-label required" for="exampleInputAccount1">账号</label>
    <input type="text" class="form-control" id="exampleInputAccount1" placeholder="电子邮件/手机号/用户名">
  </div>
  <div class="form-group">
    <label class="form-label required" for="exampleInputPassword1">密码</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="">
  </div>
  <div class="form-group">
    <label class="form-label" for="exampleInputMoney1">捐赠金额</label>
    <div class="input-group">
      <span class="input-group-addon">￥</span>
      <input type="number" class="form-control" id="exampleInputMoney1" placeholder="人民币">
      <span class="input-group-addon">.00</span>
    </div>
    <div class="form-tip">最低捐赠金额为 ￥10.00</div>
  </div>
  <button type="submit" class="btn primary">提交</button>
</form>
```

## `.form-grid`

```html:example
<form class="form-grid">
  <div class="form-group">
    <label class="form-label required" for="exampleInputAccount4">账号</label>
    <div class="form-cell">
      <input type="text" class="form-control" id="exampleInputAccount4" placeholder="电子邮件/手机号/用户名">
      <div class="form-tip">允许使用手机号或 Email</div>
    </div>
  </div>
  <div class="form-group has-error">
    <label class="form-label required" for="exampleInputPassword4">密码</label>
    <div class="form-row">
      <div class="form-cell">
        <input type="password" class="form-control" id="exampleInputPassword4" placeholder="密码">
      </div>
      <div class="form-cell">
        <div class="form-tip text-danger">密码必须包含数字和字母</div>
      </div>
    </div>
  </div>
  <div class="form-group">
    <label class="form-label" for="exampleInputAddress1">地址</label>
    <div class="form-row">
      <div class="form-cell w-20">
        <select class="form-control" id="exampleInputAddress1">
          <option>北京</option>
          <option>上海</option>
        </select>
      </div>
      <div class="form-cell">
        <input type="text" class="form-control" id="exampleInputAddress2" placeholder="市/县">
      </div>
      <div class="form-cell">
        <input type="text" class="form-control" id="exampleInputAddress3" placeholder="详细地址">
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="form-cell">
      <label class="checkbox">
        <input type="checkbox"> 记住我
      </label>
    </div>
  </div>
  <div class="form-group">
    <div class="form-cell">
      <button type="submit" class="btn primary">登录</button>
    </div>
  </div>
</form>
```
