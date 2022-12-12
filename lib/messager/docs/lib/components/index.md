# 漂浮消息生成器

通过 JS 动态创建一个漂浮消息

## 示例

通过构造一个 `messager` 实例，页面上创建一个漂浮消息

<example>
<button id="messagerTrigger">显示漂浮消息</button>
</example>

```js

const messagerButton = document.getElementById("messagerTrigger");

messagerButton.addEventLinstener('click', function() {
    new Messager({'这是一个漂浮消息。'}).show();
})

```

## 显示位置

提供9个预设的显示位置。

<example>
    <button class="btn top-start">上方左侧</button>
    <button class="btn top">上方居中</button>
    <button class="btn top-end">上方右侧</button>
    <button class="btn bottom-start">下方左侧</button>
    <button class="btn bottom">下方居中</button>
    <button class="btn bottom-end">下方右侧</button>
    <button class="btn left">左侧居中</button>
    <button class="btn right">右侧居中</button>
    <button class="btn center">居中</button>
</example>

```js
new Messager({
    message: '这是一个漂浮消息。',
    placement: '*' // 定义位置
}).show();
```

## 颜色主题

提供 多种预设颜色主题 详见 颜色

<example>
    <div class="w-40 py-2">
        <div class="messager-default messager">
            <div class="messager-content">
                普通提示消息
            </div>
            <div class="messager-actions btn-group">
                <button type="btn" class="btn messager-default border-0">
                    <i class="icon icon-times"></i>
                </button>
            </div>
        </div>
    </div>
    <!-- <p><button type="button" class="btn messager">普通提示消息</button></p> -->
    <p><button type="button" class="btn messager primary">提示消息：主要</button></p>
    <p><button type="button" class="btn messager danger">提示消息：危险</button></p>
    <p><button type="button" class="btn messager success">提示消息：成功</button></p>
    <p><button type="button" class="btn messager warning">提示消息：警告</button></p>
    <p><button type="button" class="btn messager important">提示消息：重要</button></p>
    <p><button type="button" class="btn messager special">提示消息：特别</button></p>
</example>

```js

```

## 自定义操作按钮

默认会在右侧显示关闭按钮，如果需要禁用关闭按钮，将 close 选项设置为 false。

<example>
    <button class="btn primary"> 禁用关闭按钮 </button>
</example>

```js
new Messager({
    massage: '此消息无法关闭，5秒后自动关闭',
    close: false // 禁用关闭按钮
}).show();
```

通过 `actions` 数组来自定义一组操作。详细配置可参考 [按钮组](/lib/components/btn-group/index.html)。


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

## API

### `MessagerOptions`

漂浮消息定义对象。

#### `type`

消息类型

* 类型：`string`;
* 可选值：'default' | 'primary' | 'danger' | 'success' | 'warning' | 'important' | 'special'；
* 必选：否。
* 默认值：default

#### `placement`

漂浮消息定位方式

* 类型：`string`;
* 可选值：'top' | 'center' | 'bottom' | 'left-top' | 'left' | 'left-bottom' | 'right' | 'right-top' | 'right-bottom';
* 必选：否。
* 默认值：top

#### `time`

漂浮消息持续时间

* 类型：`number`;
* 必选：否。
* 默认值：4000 (ms);

#### `message`

漂浮消息内容

* 类型：`string`;
* 必选：否。

#### `parent`

漂浮消息父节点

* 类型：`HTMLElement`;
* 必选：否。
* 默认值：body.

#### `icon`

图标内容

* 类型：`string`;
* 必选：否。

#### `close`

是否展示关闭按钮

* 类型：`boolean`;
* 必选：否。
* 默认值：false。

#### `show`

是否在初次渲染时展示消息

* 类型：`boolean`;
* 必选：否。
* 默认值：true。

#### `fade`

是否显示和隐藏消息时使用渐隐渐显的动画效果。

* 类型：`boolean`;
* 必选：否。
* 默认值：false。

#### `scale`

是否显示和隐藏消息时使用缩放的动画效果

* 类型：`boolean`;
* 必选：否。
* 默认值：false。

actions
漂浮消息按钮组配置项，详细配置可参考 [按钮组](/lib/components/btn-group/index.html)

onAction

* 类型：`function(actionName, action, messager)`;
* 必选：否。