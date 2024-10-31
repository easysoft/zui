# 提示消息

提示消息又称“工具提示”，在用户鼠标悬停在元素上时及时显示额外的内容。

## 纯 CSS 提示

```html:example:row -gap-x-32 gap-y-4 flex-wrap
<div class="hint inline-block gray-pale" data-hint="提示消息">hint</div>
<div class="hint hint-right inline-block gray-pale" data-hint="提示消息">hint-right</div>
<div class="hint hint-bottom inline-block gray-pale" data-hint="提示消息">hint-bottom</div>
<div class="hint hint-left inline-block gray-pale" data-hint="提示消息">hint-left</div>

<div class="hint hint-sm inline-block gray-pale" data-hint="提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息">hint-sm</div>
<div class="hint hint-md inline-block gray-pale" data-hint="提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息">hint-md</div>
<div class="hint hint-lg inline-block gray-pale" data-hint="提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息">hint-lg</div>
<div class="hint hint-xl inline-block gray-pale" data-hint="提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息提示消息">hint-xl</div>

<div class="hint hint-primary inline-block gray-pale" data-hint="提示消息">hint-primary</div>
<div class="hint hint-success inline-block gray-pale" data-hint="提示消息">hint-success</div>
<div class="hint hint-danger inline-block gray-pale" data-hint="提示消息">hint-danger</div>
<div class="hint hint-warning inline-block gray-pale" data-hint="提示消息">hint-warning</div>
<div class="hint hint-important inline-block gray-pale" data-hint="提示消息">hint-important</div>
<div class="hint hint-special inline-block gray-pale" data-hint="提示消息">hint-special</div>
```

## 用法

使用组件类 `.btn` 来获得按钮外观，通常搭配 `<button>` 或 `<a>` 元素使用。

```html:example:
<div class="w-2/4">
  <div class="flex justify-center gap-1">
    <button type="button" class="btn" data-toggle="tooltip" data-title="提示消息" data-placement="top-start">上左</button>
    <button type="button" class="btn" data-toggle="tooltip" data-title="提示消息" data-placement="top">上中</button>
    <button type="button" class="btn" data-toggle="tooltip" data-title="提示消息" data-placement="top-end">上右</button>
  </div>
  <div class="flex justify-between">
    <div class="col gap-1">
      <button type="button" class="btn" data-toggle="tooltip" title="提示消息" data-placement="left-start">左上</button>
      <button type="button" class="btn" data-toggle="tooltip" title="提示消息" data-placement="left">左中</button>
      <button type="button" class="btn" data-toggle="tooltip" title="提示消息" data-placement="left-end">左下</button>
    </div>
    <div class="col gap-1">
      <button type="button" class="btn" data-toggle="tooltip" data-content="提示消息" data-placement="right-start">右上</button>
      <button type="button" class="btn" data-toggle="tooltip" data-content="提示消息" data-placement="right">右中</button>
      <button type="button" class="btn" data-toggle="tooltip" data-content="提示消息" data-placement="right-end">右下</button>
    </div>
  </div>
  <div class="flex justify-center gap-1">
    <button type="button" class="btn" data-toggle="tooltip" data-content="提示消息" data-placement="bottom-start">下左</button>
    <button type="button" class="btn" data-toggle="tooltip" data-content="提示消息" data-placement="bottom">下中</button>
    <button type="button" class="btn" data-toggle="tooltip" data-content="提示消息" data-placement="bottom-end">下右</button>
  </div>
</div>
```

## 主动调用

```html:example:
<button type="button" class="btn" data-toggle="tooltip" id="tooltipExample">点击触发</button>
```

## 外观

指定外观类型来更改颜色主题。

```html:example: -flex -gap-3 -flex-wrap
<button type="button" class="btn" data-toggle="tooltip" data-content="这是提示消息" data-type="gray">gray</button>
<button type="button" class="btn primary" data-toggle="tooltip" data-content="这是提示消息" data-type="primary">primary</button>
<button type="button" class="btn secondary" data-toggle="tooltip" data-content="这是提示消息" data-type="secondary">secondary</button>
<button type="button" class="btn warning" data-toggle="tooltip" data-content="这是提示消息" data-type="warning">warning</button>
<button type="button" class="btn success" data-toggle="tooltip" data-content="这是提示消息" data-type="success">success</button>
<button type="button" class="btn danger" data-toggle="tooltip" data-content="这是提示消息" data-type="danger">danger</button>
<button type="button" class="btn important" data-toggle="tooltip" data-content="这是提示消息" data-type="important rounded-full">important</button>
```
