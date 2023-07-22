# 弹出面板 Popover

## 静态样式

```html:example: h-36
<div class="popover popup show" style="position: relative">
  <div class="arrow arrow-top" style="top: -5px; left: 50%"></div>
  <div class="popover-heading">
    <div class="popover-title">标题</div>
    <button class="btn ghost square size-sm"><span class="close"></span></button>
  </div>
  <div class="popover-content">
    <div>这是提示框内容1</div>
    <div>这是提示框内容2</div>
  </div>
</div>
```

## 指定面板元素

```html:example: h-36
<button type="button" class="btn" id="popoverTrigger1">显示 Popover</button>
<div class="popover popup" id="popover1">
  <div class="arrow"></div>
  <div class="popover-heading">
    <div class="popover-title">标题</div>
    <button class="btn ghost square size-sm"><span class="close"></span></button>
  </div>
  <div class="popover-content">
    <div>这是提示框内容1</div>
    <div>这是提示框内容2</div>
  </div>
</div>
```

```js
const popover = new Popover('#popoverTrigger1', {
    target: '#popover1',
});
console.log('> popover', popover);
```

## 被动模式

```html:example
<button type="button" class="btn" data-toggle="popover" data-content="这是提示消息">点击显示 Popover</button>
<button type="button" class="btn" data-toggle="popover" data-trigger="hover" data-title="这是提示标题" data-content="这是提示消息">Hover 显示 Popover</button>
```

## 动态

```html:example
<button type="button" class="btn" id="popoverTrigger2">点击显示 Popover</button>
<button type="button" class="btn" id="popoverTrigger3">悬停显示 Popover</button>
```

```js
const popover2 = new Popover('#popoverTrigger2', {
    title: '这是提示消息',
    content: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
});
console.log('> popover2', popover2);

const popover3 = new Popover('#popoverTrigger3', {
    trigger: 'hover',
    title: '这是提示消息',
    content: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
});
console.log('> popover3', popover3);
```
