# 加载指示器

## 基本示例

使用辅助类 `.load-indicator` 和 `.loading` 即可显示一个加载指示器。

<div class="example">
  <div class="load-indicator loading" style="width: 100px; height: 100px; background: #eee"></div>
</div>

```html
<div class="load-indicator loading" style="width: 100px; height: 100px; background: #eee"></div>
```

<div class="alert alert-primary">
  <h4>注意</h4>
  <p>加载指示器辅助类 <code>.load-indicator</code>会自动应用 <code>position: relative</code> 样式，通常情况下没有问题，但是如果 <code>.load-indicator</code> 类所属的元素已将 <code>position</code> 设置为了 <code>absolute</code> 或 <code>fixed</code> 则需要重新覆盖 <code>.load-indicator</code> 的设置，否则可能导致界面样式不符合预期。</p>
</div>

## 包含提示文本示例

使用 `[data-loading]` 属性来设置用于显示的提示文本。

<div class="example">
  <div data-loading="正在加载..." class="load-indicator loading" style="width: 100px; height: 100px; background: #eee"></div>
</div>

```html
<div data-loading="正在加载..." class="load-indicator loading" style="width: 100px; height: 100px; background: #eee"></div>
```

## 使用 JS 控制

加载指示器仅提供 CSS 样式，如果需要动态控制，只需要使用 JS 在 `.load-indicator` 元素上添加 `.loading` 类即可显示正在加载状态，如果要移除正在加载状态的显示只需要使用 JS 移除 `.loading` 类。

<div class="example">
  <div data-loading="正在加载..." class="load-indicator" style="width: 100px; height: 100px; background: #eee; margin-bottom: 10px" id="loadIndicator1"></div>
  <button type="button" class="btn btn-primary" id="loadIndicator1ToggleBtn">显示/隐藏正在加载状态</button>
</div>

```html
<div data-loading="正在加载..." class="load-indicator" style="width: 100px; height: 100px; background: #eee; margin-bottom: 10px" id="loadIndicator1"></div>
<button type="button" class="btn btn-primary" id="loadIndicator1ToggleBtn">显示/隐藏正在加载状态</button>
```

```js
$('#loadIndicator1ToggleBtn').on('click', function() {
    $('#loadIndicator1').toggleClass('loading');
});
```

<script>
$(function() {
    $('#loadIndicator1ToggleBtn').on('click', function() {
        $('#loadIndicator1').toggleClass('loading');
    });
});
</script>

## 修改图标

使用 CSS 来修改用于指示加载中的动画图标。

<div class="example">
  <div id="loadIndicator3" class="load-indicator loading" style="width: 100px; height: 100px; background: #eee"></div>
</div>

<style>
#loadIndicator3.load-indicator:after {content: '\e97b'}
</style>

```html
<div class="load-indicator loading" style="width: 100px; height: 100px; background: #eee"></div>
```

```css
.load-indicator:after {content: '\e97b'}
```

## 与其他组件一起使用

加载指示器辅助类 `.load-indicator` 和 `.loading` 几乎可以与任何组件一起使用。

### 在按钮上使用

<div class="example">
    <button type="button" class="btn load-indicator loading">按钮示例</button>
</div>

```html
<button type="button" class="btn load-indicator loading">按钮示例</button>
```

### 在面板中使用

<div class="example">
  <div class="panel load-indicator loading" data-loading="正在处理...">
    <div class="panel-heading" contenteditable="">面板标题</div>
    <div class="panel-body" contenteditable="">面板内容</div>
  </div>
</div>

```html
<div class="panel load-indicator loading" data-loading="正在处理...">
  <div class="panel-heading" contenteditable="">面板标题</div>
  <div class="panel-body" contenteditable="">面板内容</div>
</div>
```

### 在表单中使用

<div class="example">
<form class="form-horizontal load-indicator loading" data-loading="正在提交，请稍后...">
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
</div>