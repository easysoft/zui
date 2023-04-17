# 漂浮消息生成器

通过 JS 动态创建一个漂浮消息。

## 基本用法

通过构造一个 `messager` 实例，页面上创建一个漂浮消息。

<Example>
    <button
        id="messagerTrigger"
        class="btn primary messager-toggle"
    >显示漂浮消息</button>
</Example>

```js
button.addEventLinstener('click', function() {
    Messager.show({content: '这是一个悬浮消息'});
});
```

## 显示位置

提供9个预设的显示位置。

<Example class="flex gap-2">
    <button class="messager-toggle btn messager-toggle" data-placement="top-left">top-left</button>
    <button class="messager-toggle btn messager-toggle" data-placement="top">top</button>
    <button class="messager-toggle btn messager-toggle" data-placement="top-right">top-right</button>
    <button class="messager-toggle btn messager-toggle" data-placement="bottom-left">bottom-left</button>
    <button class="messager-toggle btn messager-toggle" data-placement="bottom">bottom</button>
    <button class="messager-toggle btn messager-toggle" data-placement="bottom-right">bottom-right</button>
    <button class="messager-toggle btn messager-toggle" data-placement="center">center</button>
</Example>


```js
Messager.show({
    message: '这是一条悬浮消息。',
    placement: 'top-left' // 定义位置
});
```

## 颜色主题

提供 多种预设颜色主题 详见 颜色。

<example class="flex gap-2">
    <button type="button" class="btn primary messager-toggle" data-type="primary">primary</button>
    <button type="button" class="btn secondary messager-toggle" data-type="secondary">secondary</button>
    <button type="button" class="btn success messager-toggle" data-type="success">success</button>
    <button type="button" class="btn danger messager-toggle" data-type="danger">danger</button>
    <button type="button" class="btn special messager-toggle" data-type="special">special</button>
    <button type="button" class="btn important messager-toggle" data-type="important">important</button>
    <button type="button" class="btn primary circle messager-toggle" data-type="primary circle">primary circle</button>
</example>
```

```js
document.querySelector('.messager-toggle').addEventListener('click', (event) => {
    Messager.show({
        message: '这是一个漂浮消息。',
        type: event.target.dataset.type,
    });
});
```

## 自定义操作按钮

默认会在右侧显示关闭按钮，如果需要禁用关闭按钮，将 close 选项设置为 false。

<example>
    <button class="btn primary messager-toggle" data-close="false"> 禁用关闭按钮 </button>
</example>

```js
Messager.show({
    message: '这是一个漂浮消息。',
    close: false
});
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

## 禁用自动隐藏

默认超过 5000ms 自动隐藏，通过设置 `time` 为 `0` 取消自动隐藏。

<Example>
    <button
        type="button"
        class="btn primary messager-toggle"
        data-time="0"
        data-content="禁用自动隐藏的悬浮消息"
    >禁用自动隐藏</button>
</Example>

## 禁用动画效果

设置 `animation` 为 `false` 禁用动画效果。

<Example>
    <button
        type="button"
        class="btn messager-toggle"
        data-animation="false"
        data-content="禁用动画效果的悬浮消息"
    >禁用动画效果</button>
</Example>

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

漂浮消息持续时间。

* 类型：`number`;
* 必选：否。
* 默认值：4000 (ms);

#### `message`

漂浮消息内容。

* 类型：`string`;
* 必选：否。

#### `parent`

漂浮消息父节点。

* 类型：`HTMLElement`;
* 必选：否。
* 默认值：body.

#### `icon`

图标内容。

* 类型：`string`;
* 必选：否。

#### `close`

是否展示关闭按钮。

* 类型：`boolean`;
* 必选：否。
* 默认值：false。

#### `show`

是否在初次渲染时展示消息。

* 类型：`boolean`;
* 必选：否。
* 默认值：true。

#### `fade`

是否显示和隐藏消息时使用渐隐渐显的动画效果。

* 类型：`boolean`;
* 必选：否。
* 默认值：false。

#### `scale`

是否显示和隐藏消息时使用缩放的动画效果。

* 类型：`boolean`;
* 必选：否。
* 默认值：false。

actions
漂浮消息按钮组配置项，详细配置可参考 [按钮组](/lib/components/btn-group/index.html)。

onAction

* 类型：`function(actionName, action, messager)`;
* 必选：否。

<script setup>
function parseDataset(dataset) {
    return Object.fromEntries(Object.entries(dataset).map(([key, value]) => {
        if (typeof value === 'string') {
            try {
                value = JSON.parse(value);
            // eslint-disable-next-line no-empty
            } catch (_) {}
        }
        return [key, value];
    }));
}

document.addEventListener('click', (event) => {
    const toggleElement = (event.target).closest('.messager-toggle');
    if (!toggleElement) {
        return;
    }
    const messager = zui.Messager.show({content: '这是一个漂浮消息', ...parseDataset(toggleElement.dataset)});
    console.log('> messager', messager);
});
</script>
