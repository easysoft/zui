# 提示消息

提示消息又称“工具提示”，在用户鼠标悬停在元素上时及时显示额外的内容。

## 用法

使用组件类 `.btn` 来获得按钮外观，通常搭配 `<button>` 或 `<a>` 元素使用。

```html:example:
<div class="w-2/4">
  <div class="flex justify-center gap-1">
    <button type="button" class="btn" data-toggle="tooltip" data-content="提示消息" data-placement="top-start">上左</button>
    <button type="button" class="btn" data-toggle="tooltip" data-content="提示消息" data-placement="top">上中</button>
    <button type="button" class="btn" data-toggle="tooltip" data-content="提示消息" data-placement="top-end">上右</button>
  </div>
  <div class="flex justify-between">
    <div class="col gap-1">
      <button type="button" class="btn" data-toggle="tooltip" data-content="提示消息" data-placement="left-start">左上</button>
      <button type="button" class="btn" data-toggle="tooltip" data-content="提示消息" data-placement="left">左中</button>
      <button type="button" class="btn" data-toggle="tooltip" data-content="提示消息" data-placement="left-end">左下</button>
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
