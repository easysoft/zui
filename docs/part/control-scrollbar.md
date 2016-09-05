section: control
id: scrollbar
description: 美化浏览器滚动条
icon: icon-resize-v
filter: gundongtiao gdt
---

# 滚动条

ZUI也针对浏览器的滚动条进行了样式优化。

<div class="alert alert-warning">
  <h4>浏览器兼容性</h4>
  <p>滚动条样式目前仅支持Webkit内核浏览器。</p>
</div>

## 基本样式

<div style="max-height: 100px; max-width:250px; overflow: scroll; scroll: both" class="example panel">
  <h1>滚动条样式测试</h1>
  <p>一些文字</p>
  <p>更多的文字</p>
  <p>更多的文字</p>
  <p>更多的文字</p>
  <p>
  长段落文本，长段落文本，长段落文本，长段落文本，长段落文本，长段落文本，长段落文本，长段落文本，长段落文本，长段落文本，长段落文本，长段落文本，长段落文本，长段落文本，长段落文本，长段落文本。</p>
  <div class="alert" style="width: 300px">
    <h4>较宽的内容。</h4>
  </div>
</div>

## 动态隐藏与显示

为可滚动的容器元素添加 `.scrollbar-hover` 类，即可在默认情况下隐藏滚动条，在鼠标悬停在容器元素区域时显示滚动条。

<example>
  <div style="max-height: 100px; max-width:250px; overflow: scroll; scroll: both" class="panel panel-body scrollbar-hover">
    <h1>鼠标悬停此区域才显示滚动条</h1>
    <p>一些文字</p>
    <p>更多的文字</p>
    <p>更多的文字</p>
    <p>更多的文字</p>
    <p>
    长段落文本，长段落文本，长段落文本，长段落文本，长段落文本，长段落文本，长段落文本，长段落文本，长段落文本，长段落文本，长段落文本，长段落文本，长段落文本，长段落文本，长段落文本，长段落文本。</p>
    <div class="alert" style="width: 300px">
      <h4>较宽的内容。</h4>
    </div>
  </div>
</example>

```html
<div class="scrollbar-hover" style="max-height: 100px; overflow: scroll;">
  ...
</div>
```
