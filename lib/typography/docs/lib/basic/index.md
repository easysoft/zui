# 基础排版

`typography` 为标题、链接、列表、代码和引用提供基础样式，也提供 `.article` 容器来排版完整文章。无需 JavaScript 初始化。

## 文章容器

::: tabs

== 示例

<Example>
  <article class="article">
    <h3>准备发布新版本</h3>
    <p>先确认发布范围，再验证文档和构建产物。</p>
    <ul>
      <li>完善常用场景的说明。</li>
      <li>检查代码示例和文档链接。</li>
    </ul>
    <blockquote>让读者可以直接运行基础示例。</blockquote>
  </article>
</Example>

== HTML

```html
<article class="article">
  <h3>准备发布新版本</h3>
  <p>先确认发布范围，再验证文档和构建产物。</p>
  <ul>
    <li>完善常用场景的说明。</li>
    <li>检查代码示例和文档链接。</li>
  </ul>
  <blockquote>让读者可以直接运行基础示例。</blockquote>
</article>
```

:::

`.article` 统一段落、标题、媒体、列表和表格之间的间距，并对长文本换行。它采用 `white-space: pre-wrap`，源内容中的换行和连续空格会保留；生成文章 HTML 时应避免不必要的文本空白。

## 标题

`h1` 到 `h6` 使用预设字号、粗体和正常行高。`.h1` 到 `.h6` 可将相应外观应用于其他元素。

::: tabs

== 示例

<Example class="space-y-2">
  <div class="h1">一级标题外观</div>
  <div class="h2">二级标题外观</div>
  <div class="h3">三级标题外观</div>
  <div class="h4">四级标题外观</div>
  <div class="h5">五级标题外观</div>
  <div class="h6">六级标题外观</div>
</Example>

== HTML

```html
<div class="h1">一级标题外观</div>
<div class="h2">二级标题外观</div>
<div class="h3">三级标题外观</div>
```

:::

标题标签用于表达内容层级，应按页面结构选择。`.h*` 类只改变外观，不会让普通元素获得标题语义。字号配置见 [字体配置](/guide/config/base/font)。

## 链接与列表

链接默认使用链接颜色，悬停时改变颜色，键盘聚焦时显示焦点轮廓。无序列表使用圆点，有序列表使用数字；`dt` 加粗，`dd` 缩进。

::: tabs

== 示例

<Example class="space-y-3">
  <a href="#文章容器">查看文章容器示例</a>
  <ol><li>确认范围</li><li>完成验证</li></ol>
  <dl><dt>文档</dt><dd>说明用途、用法和限制。</dd></dl>
</Example>

== HTML

```html
<a href="/guide/">查看使用指南</a>
<ol><li>确认范围</li><li>完成验证</li></ol>
<dl><dt>文档</dt><dd>说明用途、用法和限制。</dd></dl>
```

:::

需要调整列表符号或文本外观时，可组合 [列表样式工具类](/utilities/typography/utilities/list-style) 和其他排版工具类。

## 代码与引用

行内 `code` 或 `.code` 提供强调色背景；`pre` 提供内边距和溢出滚动，其内部 `code` 会取消行内代码的背景。该库不负责语法高亮。

::: tabs

== 示例

<Example class="space-y-3">
  <p>使用 <code>zui.Messager.show()</code> 显示消息。</p>
  <pre><code>const version = '3.0.0';</code></pre>
  <blockquote>先验证，再发布。<figcaption>项目约定</figcaption></blockquote>
</Example>

== HTML

```html
<p>使用 <code>zui.Messager.show()</code> 显示消息。</p>
<pre><code>const version = '3.0.0';</code></pre>
<blockquote>先验证，再发布。<figcaption>项目约定</figcaption></blockquote>
```

:::

`blockquote` 或 `.blockquote` 提供左侧边线，内部 `figcaption` 使用较小的辅助文字。`var` 和 `samp` 默认加粗。

## CSS 变量

| 变量 | 默认值 | 作用 |
| --- | --- | --- |
| `--font-h1-size` | `2.25rem` | 一级标题字号 |
| `--article-p-space` | `0.5em` | 文章段落、列表及媒体等的上下间距 |
| `--article-heading-space` | `0.5em` | 文章标题上下间距 |
| `--article-hr-space` | `1.5em` | 文章分割线上下间距 |
| `--article-cell-padding` | `0.25rem 0.75rem` | 文章表格单元格内边距 |

文章字号使用全局 `--font-size-article`；表头背景优先使用 `--table-head-bg`，否则回退到灰色背景。

```html
<article class="article" style="--article-p-space: 1em; --article-heading-space: 0.75em">
  <h2>自定义文章间距</h2>
  <p>变量可在单个容器上覆盖。</p>
</article>
```

## 引入

全量 ZUI 样式包含基础排版。使用构建工具时可单独引入：

```js
import '@zui/typography';
```

基础元素规则会影响页面中的同名 HTML 元素，文章间距等增强规则仅作用于 `.article` 容器。
