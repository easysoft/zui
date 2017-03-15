section: control
id: textbox
description: 文本框及表单控件
icon: icon-minus
filter: wenbenkuang wbk input file textarea wj wenjian
---

# 表单控件

为 `<input>`、`<textarea>`、`<select>` 添加 `form-control` 类即可得到统一外观的表单控件。

所有受支持的表单控件包括：

 - `<select class="form-control">`
 - `<textarea class="form-control">`
 - `<input type="text" class="form-control">`
 - `<input type="password" class="form-control">`
 - `<input type="datetime" class="form-control">`
 - `<input type="datetime-local" class="form-control">`
 - `<input type="date" class="form-control">`
 - `<input type="month" class="form-control">`
 - `<input type="time" class="form-control">`
 - `<input type="week" class="form-control">`
 - `<input type="number" class="form-control">`
 - `<input type="email" class="form-control">`
 - `<input type="url" class="form-control">`
 - `<input type="search" class="form-control">`
 - `<input type="tel" class="form-control">`
 - `<input type="color" class="form-control">`

## 基本类型

<table class="table">
  <tbody>
    <tr>
      <th width="200px">实例</th>
      <th>代码</th>
    </tr>
    <tr>
      <td><input type="text" class="form-control" placeholder=
      "用户名"></td>
      <td><pre><code>&lt;input type=&quot;text&quot; class=&quot;<em>form-control</em>&quot; placeholder=&quot;用户名&quot;&gt;</code></pre></td>
    </tr>
    <tr>
      <td><input type="email" class="form-control" placeholder=
      "电子邮件"></td>
      <td>
        <pre><code>&lt;input type=&quot;email&quot; class=&quot;<em>form-control</em>&quot; placeholder=&quot;电子邮件&quot;&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td>
      <textarea class="form-control" rows="3" placeholder="可以输入多行文本"></textarea></td>
      <td>
        <pre><code>&lt;textarea class=&quot;<em>form-control</em>&quot; rows=&quot;3&quot; placeholder=&quot;可以输入多行文本&quot;&gt;&lt;/textarea&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><input type="file" value="" class="form-control"></td>
      <td><pre><code>&lt;input type=&quot;file&quot; class=&quot;<em>form-control</em>&quot; value=&quot;&quot;&gt;</code></pre></td>
    </tr>
    <tr>
      <td>
        <select class="form-control">
          <option value="">请选择一种水果</option>
          <option value="apple">苹果</option>
          <option value="banana">香蕉</option>
          <option value="orange">桔子</option>
        </select>
      </td>
      <td><pre><code>&lt;select class=&quot;<em>form-control</em>&quot;&gt;
  &lt;option value=&quot;&quot;&gt;请选择一种水果&lt;/option&gt;
  &lt;option value=&quot;apple&quot;&gt;苹果&lt;/option&gt;
  &lt;option value=&quot;banana&quot;&gt;香蕉&lt;/option&gt;
  &lt;option value=&quot;orange&quot;&gt;桔子&lt;/option&gt;
  ...
&lt;/select&gt;</code></pre></td>
    </tr>
    <tr>
      <td>
        <select class="form-control" multiple>
          <option value="">请选择所有爱吃的水果</option>
          <option value="apple">苹果</option>
          <option value="banana">香蕉</option>
          <option value="orange">桔子</option>
          <option value="orange">西瓜</option>
        </select>
      </td>
      <td><pre><code>&lt;select class=&quot;<em>form-control</em>&quot; multiple&gt;
  &lt;option value=&quot;&quot;&gt;&#x8bf7;&#x9009;&#x62e9;&#x6240;&#x6709;&#x7231;&#x5403;&#x7684;&#x6c34;&#x679c;&lt;/option&gt;
  &lt;option value=&quot;apple&quot;&gt;&#x82f9;&#x679c;&lt;/option&gt;
  &lt;option value=&quot;banana&quot;&gt;&#x9999;&#x8549;&lt;/option&gt;
  &lt;option value=&quot;orange&quot;&gt;&#x6854;&#x5b50;&lt;/option&gt;
  &lt;option value=&quot;orange&quot;&gt;&#x897f;&#x74dc;&lt;/option&gt;
&lt;/select&gt;</code></pre></td>
    </tr>
  </tbody>
</table>

## 文本框状态

<table class="table">
  <tbody>
    <tr>
      <th width="200px">实例</th>
      <th>代码</th>
    </tr>
    <tr>
      <td><input class="form-control" type="text" placeholder=
      "此文本框被禁用" disabled>
      <br></td>
      <td><pre><code>&lt;input class=&quot;form-control&quot; type=&quot;text&quot; placeholder=&quot;此文本框被禁用&quot; <em>disabled</em>&gt;</code></pre></td>
    </tr>
    <tr>
      <td><input class="form-control" type="text" placeholder=
      "此文本框只读" readonly>
      <br></td>
      <td><pre><code>&lt;input class=&quot;form-control&quot; type=&quot;text&quot; placeholder=&quot;此文本框只读&quot; <em>readonly</em>&gt;</code></pre></td>
    </tr>
    <tr>
      <td><input class="form-control" autofocus type="text" placeholder="请激活此文本框">
      <br></td>
      <td><pre><code>&lt;input class=&quot;form-control form-focus&quot; autofocus type=&quot;text&quot; placeholder=&quot;请激活此文本框&quot;&gt;</code></pre></td>
    </tr>
    <tr>
      <td>
        <div class="has-warning">
          <input class="form-control" type="text" placeholder=
          "好像不对。">
        </div>
        <br>
      </td>
      <td>
        <pre><code>&lt;div class=&quot;has-warning&quot;&gt;
  &lt;input class=&quot;<em>form-control</em>&quot; type=&quot;text&quot; placeholder=&quot;Warning...&quot;&gt;
&lt;/div&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td>
        <div class="has-error">
          <input class="form-control" type="text" placeholder=
          "错的。">
        </div>
        <br>
      </td>
      <td>
        <pre><code>&lt;div class=&quot;has-error&quot;&gt;
  &lt;input class=&quot;<em>form-control</em>&quot; type=&quot;text&quot; placeholder=&quot;Warning...&quot;&gt;
&lt;/div&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td>
        <div class="has-success">
          <input class="form-control" type="text" placeholder=
          "对的！">
        </div>
        <br>
      </td>
      <td>
        <pre><code>&lt;div class=&quot;has-success&quot;&gt;
  &lt;input class=&quot;<em>form-control</em>&quot; type=&quot;text&quot; placeholder=&quot;Warning...&quot;&gt;
&lt;/div&gt;</code></pre>
      </td>
    </tr>
  </tbody>
</table>

## 尺寸

<table class="table">
  <tbody>
    <tr>
      <th width="200px">实例</th>
      <th>代码</th>
    </tr>
    <tr>
      <td><input class="form-control input-lg" type="text" placeholder="较大尺寸的文本框"></td>
      <td><pre><code>&lt;input class=&quot;form-control <em>input-lg</em>&quot; type=&quot;text&quot; placeholder=&quot;较大尺寸的文本框&quot;&gt;</code></pre></td>
    </tr>
    <tr>
      <td><input class="form-control" type="text" placeholder=
      "默认尺寸的文本框"></td>
      <td><pre><code>&lt;input class=&quot;<em>form-control</em>&quot; type=&quot;text&quot; placeholder=&quot;默认尺寸的文本框&quot;&gt;</code></pre></td>
    </tr>
    <tr>
      <td><input class="form-control input-sm" type="text" placeholder="小尺寸的文本框"></td>
      <td><pre><code>&lt;input class=&quot;form-control <em>input-sm</em>&quot; type=&quot;text&quot; placeholder=&quot;小尺寸的文本框&quot;&gt;</code></pre></td>
    </tr>
  </tbody>
</table>

## 使用栅格

使用栅格来使用水平布局。

<div class="example">
  <div class="row">
    <div class="col-xs-3">
      <input type="text" class="form-control" placeholder=".col-xs-2">
    </div>
    <div class="col-xs-4">
      <input type="text" class="form-control" placeholder=".col-xs-3">
    </div>
    <div class="col-xs-5">
      <input type="text" class="form-control" placeholder=".col-xs-4">
    </div>
  </div>
</div>

```html
<div class="row">
  <div class="col-xs-3">
    <input type="text" class="form-control" placeholder=".col-xs-2">
  </div>
  <div class="col-xs-4">
    <input type="text" class="form-control" placeholder=".col-xs-3">
  </div>
  <div class="col-xs-5">
    <input type="text" class="form-control" placeholder=".col-xs-4">
  </div>
</div>
```

<style>
#pageContent table td > pre {margin-bottom: 0}
</style>
