# 漂浮消息

## 一般用法

```html:example
<button id="messagerTrigger">点我展示漂浮消息</button>
```

```js
new Messager({'这是一个漂浮消息。'}).show();
```

## 显示位置

提供9个预设的显示位置。

```html:example
    <button class="btn left-top placementTrigger" data-placement="left-top">左侧上方</button>
    <button class="btn top placementTrigger" data-placement="left">左侧居中</button>
    <button class="btn left-bottom placementTrigger" data-placement="left-bottom">左侧下方</button>
    <button class="btn bottom-start placementTrigger" data-placement="top">顶部对齐</button>
    <button class="btn bottom placementTrigger" data-placement="center">居中对齐</button>
    <button class="btn bottom-end placementTrigger" data-placement="bottom">下方对齐</button>
    <button class="btn left placementTrigger" data-placement="right-top">右侧上方</button>
    <button class="btn right placementTrigger" data-placement="right">右侧居中</button>
    <button class="btn center placementTrigger" data-placement="right-bottom">右侧下方</button>
```

```js
new Messager({
    message: '这是一个漂浮消息。',
    placement: '*' // 定义位置
}).show();
```

## 颜色主题

提供 多种预设颜色主题 详见 颜色

```html:example
    <div class="w-40 py-2" data-type="default" data-message="普通提示消息">
        <div class="default messager">
            <div class="messager-content">
                普通提示消息
            </div>
            <div class="messager-actions btn-group">
                <button type="btn" class="btn default border-0">
                    <i class="icon icon-times"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="w-40 py-2" data-type="primary" data-message="提示消息：基础">
        <div class="primary messager">
            <div class="messager-content">
                提示消息：基础
            </div>
            <div class="messager-actions btn-group">
                <button type="btn" class="btn primary border-0">
                    <i class="icon icon-times"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="w-40 py-2" data-type="danger" data-message="提示消息：危险">
        <div class="danger messager">
            <div class="messager-content">
                提示消息：危险
            </div>
            <div class="messager-actions btn-group">
                <button type="btn" class="btn danger border-0">
                    <i class="icon icon-times"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="w-40 py-2" data-type="success" data-message="提示消息：成功">
        <div class="success messager">
            <div class="messager-content">
                提示消息：成功
            </div>
            <div class="messager-actions btn-group">
                <button type="btn" class="btn success border-0">
                    <i class="icon icon-times"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="w-40 py-2" data-type="warning" data-message="提示消息：警告">
        <div class="warning messager">
            <div class="messager-content">
                提示消息：警告
            </div>
            <div class="messager-actions btn-group">
                <button type="btn" class="btn warning border-0">
                    <i class="icon icon-times"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="w-40 py-2" data-type="important" data-message="提示消息：主要">
        <div class="important messager">
            <div class="messager-content">
                提示消息：主要
            </div>
            <div class="messager-actions btn-group">
                <button type="btn" class="btn important border-0">
                    <i class="icon icon-times"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="w-40 py-2" data-type="special" data-message="提示消息：特别">
        <div class="special messager">
            <div class="messager-content">
                提示消息：特别
            </div>
            <div class="messager-actions btn-group">
                <button type="btn" class="btn special border-0">
                    <i class="icon icon-times"></i>
                </button>
            </div>
        </div>
    </div>
```

```js
new Messager({
    message: '提示消息：*',
    type: '*' // 定义类型
}).show();
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

通过 `actions` 数组来自定义一组操作。

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