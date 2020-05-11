section: control
id: scrollbar
description: 美化浏览器滚动条
icon: icon-resize-v
filter: gundongtiao gdt
---

# Scrollbars

Scrollbars are optimized in ZUI.

<div class="alert alert-warning">
  <h4>Tips</h4>
  <p>Scrollbar styles are for desktop browsers only. For screens smaller than `768px`, scrollbar styles will not be applied.</p>
</div>

<div class="alert alert-warning">
  <h4>Browser Compatibility</h4>
  <p>Scrollbar styles only support Webkit browsers.</p>
</div>

## Styles

<div style="max-height: 100px; max-width:250px; overflow: scroll; scroll: both" class="example panel">
  <h1>Scrollbar Styles</h1>
  <p>Text</p>
  <p>More text</p>
  <p>More text</p>
  <p>More text</p>
  <p>
  Long paragraph text, long paragraph text, long paragraph text, long paragraph text, long paragraph text, long paragraph text, long paragraph text, long paragraph text, long paragraph text, long paragraph text, long paragraph text, long paragraph text, long paragraph text, long paragraph text.</p>
  <div class="alert" style="width: 300px">
    <h4>Text with height</h4>
  </div>
</div>

## Scrollbar Hover

Add `.scrollbar-hover` for a scrollbar to hide the scrollbar by default and display it when hovering over its containelements.

<example>
  <div style="max-height: 100px; max-width:250px; overflow: scroll; scroll: both" class="panel panel-body scrollbar-hover">
    <h1>Display the scrollbar when hovering</h1>
    <p>Text</p>
    <p>More text</p>
    <p>More text</p>
    <p>More text</p>
    <p>
    Long paragraph text, long paragraph text, long paragraph text, long paragraph text, long paragraph text, long parag    raph text, long paragraph text, long paragraph text, long paragraph text, long paragraph text, long paragraph text, l    ong paragraph text, long paragraph text, long paragraph text.</p>
    <div class="alert" style="width: 300px">
      <h4>Text with height</h4>
    </div>
  </div>
</example>

```html
<div class="scrollbar-hover" style="max-height: 100px; overflow: scroll;">
  ...
</div>
```
