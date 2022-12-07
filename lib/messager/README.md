# 漂浮消息

## 组件模式

```html:example
<button id="messagerTrigger">显示漂浮消息</button>
```

```js

const messagerButton = document.getElementById("messagerTrigger");

messagerButton.addEventLinstener('click', function() {
    new Messager({'这是一个漂浮消息。'}).show();
})

```

## 显示位置

提供12个预设的显示位置。

```html:example
    <button class="btn top-start">上方左侧</button>
    <button class="btn top">上方居中</button>
    <button class="btn top-end">上方右侧</button>
    <button class="btn bottom-start">下方左侧</button>
    <button class="btn bottom">下方居中</button>
    <button class="btn bottom-end">下方右侧</button>
    <button class="btn left-start">左侧上方</button>
    <button class="btn left">左侧居中</button>
    <button class="btn left-end">左侧下方</button>
    <button class="btn right-start">右侧上方</button>
    <button class="btn right">右侧居中</button>
    <button class="btn right-end">右侧下方</button>
```

```js
new Messager({
    message: '这是一个漂浮消息。',
    placement: 'center' // 定义位置
}).show();
```

## 颜色主题

提供 多种预设颜色主题 详见 颜色

```html:example
    <button type="button" class="btn">普通提示消息</button>
    <button type="button" class="btn primary">提示消息：主要</button>
    <button type="button" class="btn danger">提示消息：危险</button>
    <button type="button" class="btn success">提示消息：成功</button>
    <button type="button" class="btn warning">提示消息：警告</button>
    <button type="button" class="btn important">提示消息：重要</button>
    <button type="button" class="btn special">提示消息：特别</button>
```

```js

```

## 自定义操作按钮

默认会在右侧显示关闭按钮，如果需要禁用关闭按钮，将 close 选项设置为 false。

```html:example
    <button class="btn primary"> 禁用关闭按钮 </button>
```

```js
new Messager({
    massage: '此消息无法关闭，5秒后自动关闭',
    close: false // 禁用关闭按钮
}).show();
```

通过 `actions` 对象来自定义一组操作。

```js
new Messager({
    massage: '你的邮件已成功发送。',
    type: 'success',
    close: true,
    actions: [{
        name: 'undo',
        icon: 'undo',
        text: '撤销',
        action: function() {  // 点击该操作按钮的回调函数
            console.log('你点击了撤销按钮。');
        }
    }]
});
```

icon、text、html 属性至少需要设置一项，否则操作按钮不可见。

在操作定义对象的操作回调函数 action 中返回 false 来取消点击操作后的隐藏操作。