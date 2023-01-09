# 漂浮消息

## 静态样式

```html:example
<div class="messager alert">
  <div class="alert-content">
    Hi! 这条消息可能需要你注意。
  </div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
```

## 一般用法

```html:example
<button type="button" class="btn messager-toggle">点我展示漂浮消息</button>
```

```js
document.querySelector('.messager-toggle').addEventListener('click', () => {
    const messager = Messager.show({content: '这是一个漂浮消息'});
});
```

## 标题和图标以及操作按钮

<button type="button" class="btn" id="messageToggle1">标题和图标以及操作按钮</button>

```js
document.querySelector('#messageToggle1').addEventListener('click', () => {
    const messager = Messager.show({
        icon: 'icon-check-sign',
        content: '包含标题和图标以及操作按钮',
        heading: '这是标题',
        actions: [
            {
                text: '了解更多'
            }
        ]
    });
});
```

## 显示位置

提供9个预设的显示位置。

```html:example
<button type="button" class="btn messager-toggle" data-placement="top-left">左侧上方</button>
<button type="button" class="btn messager-toggle" data-placement="top">上方居中</button>
<button type="button" class="btn messager-toggle" data-placement="top-right">右上方</button>
<button type="button" class="btn messager-toggle" data-placement="center">中心</button>
<button type="button" class="btn messager-toggle" data-placement="bottom-left">左侧下方</button>
<button type="button" class="btn messager-toggle" data-placement="bottom">下方居中</button>
<button type="button" class="btn messager-toggle" data-placement="bottom-right">右下方</button>
```

```js
document.querySelector('.messager-toggle').addEventListener('click', (event) => {
    Messager.show({
        message: '这是一个漂浮消息。',
        placement: event.target.dataset.placement,
    });
});
```

## 自动隐藏

默认超过 5000ms 自动隐藏，通过设置 time 为 `0` 取消自动隐藏。

<button type="button" class="btn messager-toggle" data-time="0">禁止自动隐藏</button>

```js
document.querySelector('.messager-toggle').addEventListener('click', (event) => {
    Messager.show({
        message: '这是一个漂浮消息。',
        time: event.target.dataset.time,
    });
});
```

## 动画效果

设置 `animation` 为 `false` 禁用动画效果。

<button type="button" class="btn messager-toggle" data-animation="false">禁用动画效果</button>

```js
document.querySelector('.messager-toggle').addEventListener('click', (event) => {
    Messager.show({
        message: '这是一个漂浮消息。',
        animation: event.target.dataset.animation !== 'false',
    });
});
```

## 颜色主题和样式

通过 `type` 设置 CSS 工具类来改变颜色主题和样式。

```html:example
<button type="button" class="btn messager-toggle" data-type="primary">primary</button>
<button type="button" class="btn messager-toggle" data-type="secondary">secondary</button>
<button type="button" class="btn messager-toggle" data-type="success">success</button>
<button type="button" class="btn messager-toggle" data-type="danger">danger</button>
<button type="button" class="btn messager-toggle" data-type="special">special</button>
<button type="button" class="btn messager-toggle" data-type="important">important</button>
<button type="button" class="btn messager-toggle" data-type="primary circle">primary circle</button>
```

```js
document.querySelector('.messager-toggle').addEventListener('click', (event) => {
    Messager.show({
        message: '这是一个漂浮消息。',
        type: event.target.dataset.type,
    });
});
```
