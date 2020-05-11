section: control
id: textbox
description: Textbox and form controls
icon: icon-minus
filter: wenbenkuang wbk input file textarea wj wenjian
---

# Textbox 

For `<input>`, `<textarea>`, and `<select>`, add `form-control` to create form controls in the same style.

ZUI supports form controls, including:

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

## Types

<table class="table">
  <tbody>
    <tr>
      <th width="200px">Example</th>
      <th>Code</th>
    </tr>
    <tr>
      <td><input type="text" class="form-control" placeholder=
      "Username"></td>
      <td><pre><code>&lt;input type=&quot;text&quot; class=&quot;<em>form-control</em>&quot; placeholder=&quot;Username&quot;&gt;</code></pre></td>
    </tr>
    <tr>
      <td><input type="email" class="form-control" placeholder=
      "Email"></td>
      <td>
        <pre><code>&lt;input type=&quot;email&quot; class=&quot;<em>form-control</em>&quot; placeholder=&quot;Email&quot;&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td>
      <textarea class="form-control" rows="3" placeholder="Enter multiline text here"></textarea></td>
      <td>
        <pre><code>&lt;textarea class=&quot;<em>form-control</em>&quot; rows=&quot;3&quot; placeholder=&quot;Enter multiline text here&quot;&gt;&lt;/textarea&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><input type="file" value="" class="form-control"></td>
      <td><pre><code>&lt;input type=&quot;file&quot; class=&quot;<em>form-control</em>&quot; value=&quot;&quot;&gt;</code></pre></td>
    </tr>
    <tr>
      <td>
        <select class="form-control">
          <option value="">Select fruits</option>
          <option value="apple">Apples</option>
          <option value="banana">Bananas</option>
          <option value="orange">Oranges</option>
        </select>
      </td>
      <td><pre><code>&lt;select class=&quot;<em>form-control</em>&quot;&gt;
  &lt;option value=&quot;&quot;&gt;Select a kind of fruits&lt;/option&gt;
  &lt;option value=&quot;apple&quot;&gt;Apples&lt;/option&gt;
  &lt;option value=&quot;banana&quot;&gt;Bananas&lt;/option&gt;
  &lt;option value=&quot;orange&quot;&gt;Oranges&lt;/option&gt;
  ...
&lt;/select&gt;</code></pre></td>
    </tr>
    <tr>
      <td>
        <select class="form-control" multiple>
          <option value="">Select fruits you like</option>
          <option value="apple">Apples</option>
          <option value="banana">Bananas</option>
          <option value="orange">Oranges</option>
          <option value="orange">Watermelons</option>
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

## Textbox States

<table class="table">
  <tbody>
    <tr>
      <th width="200px">Example</th>
      <th>Code</th>
    </tr>
    <tr>
      <td><input class="form-control" type="text" placeholder=
      "This textbox is disabled." disabled>
      <br></td>
      <td><pre><code>&lt;input class=&quot;form-control&quot; type=&quot;text&quot; placeholder=&quot;This textbox is disabled.&quot; <em>disabled</em>&gt;</code></pre></td>
    </tr>
    <tr>
      <td><input class="form-control" type="text" placeholder=
      "This textbox is readonly." readonly>
      <br></td>
      <td><pre><code>&lt;input class=&quot;form-control&quot; type=&quot;text&quot; placeholder=&quot;This textbox is readonly.&quot; <em>readonly</em>&gt;</code></pre></td>
    </tr>
    <tr>
      <td><input class="form-control" autofocus type="text" placeholder="Please activate this textbox.">
      <br></td>
      <td><pre><code>&lt;input class=&quot;form-control form-focus&quot; autofocus type=&quot;text&quot; placeholder=&quot;Please activate this textbox.&quot;&gt;</code></pre></td>
    </tr>
    <tr>
      <td>
        <div class="has-warning">
          <input class="form-control" type="text" placeholder=
          "It looks weird.">
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
          "Wrong.">
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
          "Correct!">
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

## Sizes

<table class="table">
  <tbody>
    <tr>
      <th width="200px">Example</th>
      <th>Code</th>
    </tr>
    <tr>
      <td><input class="form-control input-lg" type="text" placeholder="large textbox"></td>
      <td><pre><code>&lt;input class=&quot;form-control <em>input-lg</em>&quot; type=&quot;text&quot; placeholder=&quot;large textbox&quot;&gt;</code></pre></td>
    </tr>
    <tr>
      <td><input class="form-control" type="text" placeholder=
      "textbox in default size"></td>
      <td><pre><code>&lt;input class=&quot;<em>form-control</em>&quot; type=&quot;text&quot; placeholder=&quot;textbox in default size&quot;&gt;</code></pre></td>
    </tr>
    <tr>
      <td><input class="form-control input-sm" type="text" placeholder="small textbox"></td>
      <td><pre><code>&lt;input class=&quot;form-control <em>input-sm</em>&quot; type=&quot;text&quot; placeholder=&quot;small textbox&quot;&gt;</code></pre></td>
    </tr>
  </tbody>
</table>

## Grid

Grid is used to enable a horizontal layout.

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
