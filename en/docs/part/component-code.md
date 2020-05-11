section: component
id: code
description: Insert code in the document
icon: icon-code
filter: daima dm
---

# Code

## Inline Code

<div class="example" contenteditable="true">
  <p>Use  <code>&lt;code&gt;</code> to embed the code.</p>
</div>

```html
<code>&lt;code&gt;</code>
```

Use `.code` to create any content that uses the same monospaced font as the code.

<div class="example code" contenteditable="true">
  <h1 class="code">HelloCode();</h1>
</div>

```html
<h1 class="code">HelloCode();</h1>
```

## Keyboard Code

Use `<kbd>` to display the keyboard code.

<div class="example" contenteditable="true">
  <p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy the sample code. Press <kbd>Ctrl + V</kbd> to paste it.</p>
</div>

```html
Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy the sample code. Press <kbd>Ctrl + V</kbd> to paste it.
```

## Block

The basic code block is included in `<pre>`.

<div class="example" contenteditable="true">
  <pre><code>&lt;p&gt;Hello world!&lt;/p&gt;</code></pre>
</div>

```html
<pre><code>&lt;p&gt;Hello world!&lt;/p&gt;</code></pre>
```

`.pre-scrollable` is also used to set `max-height` for `350px`, and display scroll bars in vertical.

<div class="example" contenteditable="true">
  <pre class="pre-scrollable"><code>// This is a long code.
// Used to demonstrate .pre-scrollable.
// Vertical scroll bar appears when the number of lines exceeds the settings.
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

## Highlight

Highlight is to set colors for characteres in the code according to the syntax. Highlighted code can greatly improve the experience of code review. If you need to show users the code in your application, you should use highlight.

[Google Code Prettify](https://github.com/google/code-prettify) is the recommended solution to highlight code. Google Code Prettify automatically identify the code language and apply the right syntax to highlight.

Below is a php file for example：

<div class="example" contenteditable="true">
  <pre class="prettyprint linenums"><code>&lt;!doctype html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;title&gt;ZenTao Design Guidelines&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;?php
    echo "hello, world!";
  ?&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
</div>

```html
<!-- Add prettyprint CLASS for pre tag -->
<pre class="prettyprint linenums">
...
</pre>
```

```html
<!-- Call in prettyprint resources -->
<script async src="lib/prettify/prettify.js"></script>
```

```js
// After prettify.js, call  window.prettyPrint to initiate code highlighting.
window.prettyPrint();
```
