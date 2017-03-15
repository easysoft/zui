section: basic
id: utilities
description: 一些使用的工具类
icon: icon-wrench
filter: fuzhulei fzl
---

# 辅助类

在ZUI中提供了众多实用的辅助类。任何时候只需要加入对应的CSS类名即可。虽然辅助类使用起来非常方便，但也要避免滥用。使用之前应该了解以下要点。

*   尽量少用或不用辅助类，如果有对应的控件或组件使用。
*   当相同的场景需要大量使用辅助类时，这时应该考虑是否单独定义一个新的控件或组件。

## 小字号文本

使用标签`<small>`或者CSS类名`.small`来使得文本字号比正常情况小一号。

<div class="example">
  <small contenteditable="true">小字号文本，small text.</small>
</div>

```html
<small>小字号文本，small text.</small>
```

## 文本颜色

<div class="example">
  <p class="text-muted" contenteditable="true">Lorem ipsum dolor sit amet, consectetur.</p>
  <p class="text-primary" contenteditable="true">Perferendis eveniet ipsa modi nesciunt, vel.</p>
  <p class="text-danger" contenteditable="true">Molestias maxime perspiciatis saepe unde corporis.</p>
  <p class="text-success" contenteditable="true">Culpa eum modi assumenda, velit vitae.</p>
  <p class="text-warning" contenteditable="true">Cumque consequuntur modi fugiat debitis dolorum.</p>
  <p class="text-info" contenteditable="true">Minus nisi consectetur dolorum temporibus
  architecto.</p>
  <p class="text-important" contenteditable="true">Tenetur ullam amet illo sint magni!</p>
  <p class="text-special" contenteditable="true">Sapiente voluptates debitis dolor ipsam libero!</p>
</div>

```html
<p class="text-muted">...</p>
<p class="text-primary">...</p>
<p class="text-danger">...</p>
<p class="text-success">...</p>
<p class="text-warning">...</p>
<p class="text-info">...</p>
<p class="text-important">...</p>
<p class="text-special">...</p>
```

## 文本背景高亮

<div class="example">
  <p class="hl-default" contenteditable="true">Lorem ipsum dolor sit amet, consectetur.</p>
  <p class="hl-primary" contenteditable="true">Perferendis eveniet ipsa modi nesciunt, vel.</p>
  <p class="hl-danger" contenteditable="true">Molestias maxime perspiciatis saepe unde
  corporis.</p>
  <p class="hl-success" contenteditable="true">Culpa eum modi assumenda, velit vitae.</p>
  <p class="hl-warning" contenteditable="true">Cumque consequuntur modi fugiat debitis
  dolorum.</p>
  <p class="hl-info" contenteditable="true">Minus nisi consectetur dolorum temporibus
  architecto.</p>
  <p class="hl-important" contenteditable="true">Tenetur ullam amet illo sint magni!</p>
  <p class="hl-special" contenteditable="true">Sapiente voluptates debitis dolor ipsam
  libero!</p>
</div>

```html
<p class="hl-default">...</p>
<p class="hl-primary">...</p>
<p class="hl-danger">...</p>
<p class="hl-success">...</p>
<p class="hl-warning">...</p>
<p class="hl-info">...</p>
<p class="hl-important">...</p>
<p class="hl-special">...</p>
```

## 文本背景色

<div class="example">
  <p class="bg-default" contenteditable="true">Lorem ipsum dolor sit amet, consectetur.</p>
  <p class="bg-primary" contenteditable="true">Perferendis eveniet ipsa modi nesciunt, vel.</p>
  <p class="bg-danger" contenteditable="true">Molestias maxime perspiciatis saepe unde corporis.</p>
  <p class="bg-success" contenteditable="true">Culpa eum modi assumenda, velit vitae.</p>
  <p class="bg-warning" contenteditable="true">Cumque consequuntur modi fugiat debitis dolorum.</p>
  <p class="bg-info" contenteditable="true">Minus nisi consectetur dolorum temporibus architecto.</p>
  <p class="bg-important" contenteditable="true">Tenetur ullam amet illo sint magni!</p>
  <p class="bg-special" contenteditable="true">Sapiente voluptates debitis dolor ipsam libero!</p>
</div>

```html
<p class="bg-default">...</p>
<p class="bg-primary">...</p>
<p class="bg-danger">...</p>
<p class="bg-success">...</p>
<p class="bg-warning">...</p>
<p class="bg-info">...</p>
<p class="bg-important">...</p>
<p class="bg-special">...</p>
```

## 禁用文本换行

使所有文本在一行显示。超出的部分将会被隐藏。只需要使用`.text-nowrap`或者`.nobr`。

```html
<h2 class="text-nowrap">...</h2>
```

## 文本超出省略

使所有文本在一行显示。超出的部分会被截断，并且在文本末尾添加省略号。使用`.text-ellipsis`。

```html
<h2 class="text-ellipsis">...</h2>
```

<div class="alert alert-warning">
  <p>并不是所有浏览器都支持此选项。</p>
</div>

## 内容边距

在内容元素内添加内边距，使得元素更易于阅读。使用`.with-padding`。

内容边距和文本背景一起使用的例子。

<div class="example">
  <p class="with-padding bg-default" contenteditable="true">Lorem ipsum dolor sit amet,
  consectetur.</p>
  <p class="with-padding bg-primary" contenteditable="true">Perferendis eveniet ipsa modi nesciunt,
  vel.</p>
  <p class="with-padding bg-danger" contenteditable="true">Molestias maxime perspiciatis saepe unde
  corporis.</p>
  <p class="with-padding bg-success" contenteditable="true">Culpa eum modi assumenda, velit vitae.</p>
  <p class="with-padding bg-warning" contenteditable="true">Cumque consequuntur modi fugiat debitis
  dolorum.</p>
  <p class="with-padding bg-info" contenteditable="true">Minus nisi consectetur dolorum temporibus
  architecto.</p>
  <p class="with-padding bg-important" contenteditable="true">Tenetur ullam amet illo sint magni!</p>
  <p class="with-padding bg-special" contenteditable="true">Sapiente voluptates debitis dolor ipsam
  libero!</p>
</div>

```html
<p class="with-padding bg-default">...</p>
<p class="with-padding bg-primary">...</p>
<p class="with-padding bg-danger">...</p>
<p class="with-padding bg-success">...</p>
<p class="with-padding bg-warning">...</p>
<p class="with-padding bg-info">...</p>
<p class="with-padding bg-important">...</p>
<p class="with-padding bg-special">...</p>
```

## 关闭按钮

通常用来关闭消息框或者模态框。

<div class="example">
  <button type="button" class="close" style="float:none"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
</div>

```html
<button type="button" class="close"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
```

## 三角符号

<div class="example"><span class="caret"></span></div>

```html
<span class="caret"></span>
```

## 浮动

强制使得一个元素向左或者向右浮动。

```html
<div class="pull-left"></div>
<div class="pull-right"></div>
```

对应的CSS代码：

```css
.pull-right {
  float: right !important;
}
.pull-left {
  float: left !important;
}
```

## 清除浮动

只需要一个CSS类名即可使得内部浮动元素也具备高度等特性。

```html
<div class="clearfix">...</div>
```

## 块居中

使得一个具备固定宽度的能够在父级容器中居中显示。

```html
<div class="center-block">...</div>
```

对应的CSS代码：

```css
.center-block {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
```

## 隐藏文本

隐藏文本能够使得标签内的文本不显示，通常用于图片代替文本。

```html
<h1 class="text-hide">此处文本不会显示</h1>
```

## 显示或隐藏元素

提供多个辅助类来帮助切换内容显示。

```css
.hide {
  display: none;
}
.hidden {
  display: none!important;
}
.show {
  display: block;
}
.showing {
  display: block!important;
}
.invisible {
  visibility: hidden;
}
```

`.hidden` 和 `.showing`具备更高的优先级，防止其他规则重写。`.invisible` 仅仅隐藏元素，但元素内容所占的空间并不会清除。
