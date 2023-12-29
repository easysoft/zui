# 提示消息

提示消息又称“工具提示”，在鼠标悬停在元素上时及时显示额外的内容。

## 使用方法

组件提供多种不同方向的展示方式，可以根据需求选择你要的效果。

::: tabs

== 示例

<Example>
  <div class="w-72">
    <div class="flex justify-center gap-1">
      <button type="button" class="btn" data-toggle="tooltip" data-title="上左" data-placement="top-start">上左</button>
      <button type="button" class="btn" data-toggle="tooltip" data-title="上中" data-placement="top">上中</button>
      <button type="button" class="btn" data-toggle="tooltip" data-title="上右" data-placement="top-end">上右</button>
    </div>
    <div class="flex justify-between">
      <div class="col gap-1">
        <button type="button" class="btn" data-toggle="tooltip" data-title="左上" data-placement="left-start">左上</button>
        <button type="button" class="btn" data-toggle="tooltip" data-title="左中" data-placement="left">左中</button>
        <button type="button" class="btn" data-toggle="tooltip" data-title="左下" data-placement="left-end">左下</button>
      </div>
      <div class="col gap-1">
        <button type="button" class="btn" data-toggle="tooltip" data-title="右上" data-placement="right-start">右上</button>
        <button type="button" class="btn" data-toggle="tooltip" data-title="右中" data-placement="right">右中</button>
        <button type="button" class="btn" data-toggle="tooltip" data-title="右下" data-placement="right-end">右下</button>
      </div>
    </div>
    <div class="flex justify-center gap-1">
      <button type="button" class="btn" data-toggle="tooltip" data-title="下左" data-placement="bottom-start">下左</button>
      <button type="button" class="btn" data-toggle="tooltip" data-title="下中" data-placement="bottom">下中</button>
      <button type="button" class="btn" data-toggle="tooltip" data-title="下右" data-placement="bottom-end">下右</button>
    </div>
  </div>
</Example>

== HTML

```html
<button type="button" class="btn" data-toggle="tooltip" data-title="上左" data-placement="top-start">上左</button>
<button type="button" class="btn" data-toggle="tooltip" data-title="上中" data-placement="top">上中</button>
<button type="button" class="btn" data-toggle="tooltip" data-title="上右" data-placement="top-end">上右</button>
<button type="button" class="btn" data-toggle="tooltip" data-title="左上" data-placement="left-start">左上</button>
<button type="button" class="btn" data-toggle="tooltip" data-title="左中" data-placement="left">左中</button>
<button type="button" class="btn" data-toggle="tooltip" data-title="左下" data-placement="left-end">左下</button>
<button type="button" class="btn" data-toggle="tooltip" data-title="右上" data-placement="right-start">右上</button>
<button type="button" class="btn" data-toggle="tooltip" data-title="右中" data-placement="right">右中</button>
<button type="button" class="btn" data-toggle="tooltip" data-title="右下" data-placement="right-end">右下</button>
<button type="button" class="btn" data-toggle="tooltip" data-title="下左" data-placement="bottom-start">下左</button>
<button type="button" class="btn" data-toggle="tooltip" data-title="下中" data-placement="bottom">下中</button>
<button type="button" class="btn" data-toggle="tooltip" data-title="下右" data-placement="bottom-end">下右</button>
```

:::

## 触发方式

除了默认的鼠标悬浮展示信息外，组件也提供了点击触发的方式。

::: tabs

== 示例

<Example class="flex gap-2">
  <button type="button" class="btn" data-toggle="tooltip" data-trigger="hover" data-title="hover 触发">hover 触发</button>
  <button type="button" class="btn" data-toggle="tooltip" data-trigger="click" data-title="click 触发">click 触发</button>
</Example>

== HTML

```html
<button type="button" class="btn" data-toggle="tooltip" data-trigger="hover" data-title="hover 触发">hover 触发</button>
<button type="button" class="btn" data-toggle="tooltip" data-trigger="click" data-title="click 触发">click 触发</button>
```

:::

## 外观

指定 `type` 选项来更改外观类型。

::: tabs

== 示例

<Example class="flex gap-2 flex-wrap">
  <button type="button" class="btn" data-toggle="tooltip" data-title="提示消息">默认</button>
  <button type="button" class="btn primary" data-toggle="tooltip" data-type="primary" data-title="提示消息">Primary</button>
  <button type="button" class="btn secondary" data-toggle="tooltip" data-type="secondary" data-title="提示消息">Secondary</button>
  <button type="button" class="btn warning" data-toggle="tooltip" data-type="warning" data-title="提示消息">Warning</button>
  <button type="button" class="btn success" data-toggle="tooltip" data-type="success" data-title="提示消息">Success</button>
  <button type="button" class="btn danger" data-toggle="tooltip" data-type="danger" data-title="提示消息">Danger</button>
  <button type="button" class="btn important" data-toggle="tooltip" data-type="important" data-title="提示消息">Important</button>
  <button type="button" class="btn gray" data-toggle="tooltip" data-type="gray" data-title="提示消息">Gray</button>
</Example>

== HTML

```html
<button type="button" class="btn" data-toggle="tooltip" data-title="提示消息">默认</button>
<button type="button" class="btn primary" data-toggle="tooltip" data-type="primary" data-title="提示消息">Primary</button>
<button type="button" class="btn secondary" data-toggle="tooltip" data-type="secondary" data-title="提示消息">Secondary</button>
<button type="button" class="btn warning" data-toggle="tooltip" data-type="warning" data-title="提示消息">Warning</button>
<button type="button" class="btn success" data-toggle="tooltip" data-type="success" data-title="提示消息">Success</button>
<button type="button" class="btn danger" data-toggle="tooltip" data-type="danger" data-title="提示消息">Danger</button>
<button type="button" class="btn important" data-toggle="tooltip" data-type="important" data-title="提示消息">Important</button>
<button type="button" class="btn gray" data-toggle="tooltip" data-type="gray" data-title="提示消息">Gray</button>
```

:::

## 选项

<Props>
title?: string; // 提示消息内容
placement?: string; // 弹出方向，可选值包括：`'top-start' | 'top' | 'top-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end' | 'right-start' | 'right' | 'right-end'`
trigger?: string; // 触发方式，可选值包括：`'click' | 'hover'`
className?: string; // 类名
type?: string; // 外观类型，可选值包括：`'primary' | 'secondary' | 'warning' | 'success' | 'danger' | 'important' | 'gray'`
animation?: boolean; // 是否应用淡入淡出动画
arrow?: number | number; // 箭头大小
delay?: boolean | number; // 延迟显示，可选值包括：`true | false | number`
hideOthers?: boolean; // 显示时隐藏其他已经显示的提示消息
</Props>
