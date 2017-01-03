section: control
id: header
description: 标题
icon: H1
filter: duojibiaoti djbt
---

# 多级标题

## 普通标题

内容标题用来对一段内容进行总结。内容标题有1-6个级别，用html中的`h1`、`h2`...`h6`来应用样式

<table class="table">
  <thead>
    <tr>
      <th style="width:30%">实例</th>
      <th>标签</th>
      <th>像素大小</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><h1>Heading1 一级标题</h1></td>
      <td>`<h1>`</td>
      <td>20px</td>
      <td>在一个页面（或在`hgroup`标记的范围内）只有一个页面标题。</td>
    </tr>
    <tr>
      <td><h2>Heading2 二级标题</h2></td>
      <td>`<h2>`</td>
      <td>24px</td>
      <td>作为页面第二级标题，可能在一个页面中使用到多个二级标题。</td>
    </tr>
    <tr>
      <td><h3>Heading3 三级标题</h3></td>
      <td>`<h3>`</td>
      <td>16px 粗体</td>
      <td>页面第三级标题，嵌套在二级标题下使用。</td>
    </tr>
    <tr>
      <td><h4>Heading4 四级标题</h4></td>
      <td>`<h4>`</td>
      <td>14px 粗体</td>
      <td>页面第四级标题，嵌套在三级标题下使用。</td>
    </tr>
    <tr>
      <td><h5>Heading5 五级标题</h5></td>
      <td>`<h5>`</td>
      <td>13px 粗体 颜色灰色</td>
      <td>页面第五级标题，嵌套在四级标题下使用。</td>
    </tr>
    <tr>
      <td><h6>Heading6 六级标题</h6></td>
      <td>`<h6>`</td>
      <td>12px 粗体 颜色灰色</td>
      <td>页面第六级标题，嵌套在五级标题下使用。</td>
    </tr>
  </tbody>
</table>

```html
<h1>Heading1 一级标题</h1>
```

```html
<h2>Heading2 二级标题</h2>
```

```html
<h3>Heading3 三级标题</h3>
```

```html
<h4>Heading4 四级标题</h4>
```

```html
<h5>Heading5 五级标题</h5>
```

```html
<h6>Heading6 六级标题</h6>
```

## 包含副标题

标题中可以显示一个副标题。副标题的文本通过一个`small`标签加入。

<div class="example" contenteditable="true">
  <h1>Heading1 标题1 <small>副标题 secondary headings</small></h1>
  <h2>Heading2 标题2 <small>副标题 secondary headings</small></h2>
  <h3>Heading3 标题3 <small>副标题 secondary headings</small></h3>
  <h4>Heading4 标题4 <small>副标题 secondary headings</small></h4>
  <h5>Heading5 标题5 <small>副标题 secondary headings</small></h5>
  <h6>Heading6 标题6 <small>副标题 secondary headings</small></h6>
</div>

```html
<h1>Heading1 标题1 <small>副标题</small></h1>
```

```html
<h2>Heading2 标题2 <small>副标题</small></h2>
```

```html
<h3>Heading3 标题3 <small>副标题</small></h3>
```

```html
<h4>Heading4 标题4 <small>副标题</small></h4>
```

```html
<h5>Heading5 标题5 <small>副标题</small></h5>
```

```html
<h6>Heading6 标题6 <small>副标题</small></h6>
```

## 带底部水平分隔线的标题

使用 `.header-dividing` 或 `.page-header`。

<div class="example" contenteditable="true">
  <h3 class="header-dividing">标题</h3>
  <div class="page-header">
    <h2>使用 <span class="code">.page-header</span></h2>
  </div>
</div>

```html
<h1 class="header-dividing">Heading1 一级标题</h1>
```

```html
<div class="page-header">
  <h2>使用 <span class="code">.page-header</span></h2>
</div>
```
