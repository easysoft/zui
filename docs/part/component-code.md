section: component
id: code
description: 在文档中插入代码
icon: icon-code
filter: daima dm
---

# 代码

## 内联代码

<div class="example" contenteditable="true">
  <p>通过<code>&lt;code&gt;</code>标签内嵌一小段代码。</p>
</div>

```html
<code>&lt;code&gt;</code>
```

通过 `.code` 来为任何内容应用与代码相同的等宽字体。

<div class="example code" contenteditable="true">
  <h1 class="code">HelloCode();</h1>
</div>

```html
<h1 class="code">HelloCode();</h1>
```

## 键盘码

使用标签 `<kbd>` 来显示键盘码。

<div class="example" contenteditable="true">
  <p>按 <kbd>Ctrl</kbd> + <kbd>C</kbd> 来复制示例代码，按 <kbd>Ctrl + V</kbd> 来粘贴代码。</p>
</div>

```html
按 <kbd>Ctrl</kbd> + <kbd>C</kbd> 来复制示例代码，按 <kbd>Ctrl + V</kbd> 来粘贴代码。
```

## 基本代码块

基本代码块包含在`<pre>`内。

<div class="example" contenteditable="true">
  <pre><code>&lt;p&gt;Hello world!&lt;/p&gt;</code></pre>
</div>

```html
<pre><code>&lt;p&gt;Hello world!&lt;/p&gt;</code></pre>
```

还可以使用`.pre-scrollable` class，其作用是设置 `max-height` 为 `350px`，并在垂直方向展示滚动条。

<div class="example" contenteditable="true">
  <pre class="pre-scrollable"><code>// 这是一段较长的代码
// 用来演示 .pre-scrollable
// 当代码行数超出时会出现垂直滚动条
// ============================================================================================================

function test() {
  var x = 1;
  var y = 2;

  var z1 = x*x + 2*x + 1;
  var z2 = y*y + 2*y + 1;
  var z  = z1*z1 + z2*z2;

  var o  = z*z + 2*z + 1;
  var p  = (o/2 - z*z + 1)/o;
  var q  = (o + p)/z;

  console.log(x);
  console.log(y);
  console.log(z);
  console.log(q);
}

test();</code></pre>
</div>

```html
<pre class="pre-scrollable">
...
</pre>
```

## 代码高亮

代码高亮是通过根据代码语言语法给代码中的单词、字符标记为不同颜色来显示的方法。代码高亮能大大提高代码的查阅体验。在web界面加上代码高亮非常容易，在产品中如需要向用户展现代码应该使用代码高亮。

这里推荐的方案是 [Google Code Prettify](https://github.com/google/code-prettify) 实现代码高亮。Google Code Prettify能够自动识别代码语言类型并正确应用语法高亮。

下面是一个 php 文件的示例：

<div class="example" contenteditable="true">
  <pre class="prettyprint linenums"><code>&lt;!doctype html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;title&gt;Zentao Design Guidelines&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;?php
    echo "hello, world!";
  ?&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
</div>

```html
<!-- 为 pre 增加 prettyprint CLASS -->
<pre class="prettyprint linenums">
...
</pre>
```

```html
<!-- 引入 prettyprint 相关资源 -->
<script async src="lib/prettify/prettify.js"></script>
```

```js
// 页面导入 prettify.js 后调用 window.prettyPrint 方法来初始化代码高亮效果
window.prettyPrint();
```
