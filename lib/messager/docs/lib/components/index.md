# 浮动消息

通过 JS 动态创建一个浮动消息。

## 基本用法

通过构造一个 `messager` 实例，页面上创建一个浮动消息。

::: tabs

== 示例

<Example>
  <button class="btn" data-on="click" data-do="zui.Messager.show('项目设置已保存。')">显示浮动消息</button>
</Example>

== HTML

```html
<button id="messagerTrigger" class="btn" type="button">显示浮动消息</button>

<script>
$('#messagerTrigger').on('click', () => {
    zui.Messager.show('项目设置已保存。')
});
</script>
```

:::

## 显示位置

提供 9 个预设的显示位置，通过 `placement` 选项进行指定。

::: tabs

== 示例

<Example class="flex gap-2">
  <button class="btn" data-on="click" data-do="zui.Messager.show({content: '项目设置已保存。', placement: 'top-left'})">top-left</button>
  <button class="btn" data-on="click" data-do="zui.Messager.show({content: '项目设置已保存。', placement: 'top'})">top</button>
  <button class="btn" data-on="click" data-do="zui.Messager.show({content: '项目设置已保存。', placement: 'top-right'})">top-right</button>
  <button class="btn" data-on="click" data-do="zui.Messager.show({content: '项目设置已保存。', placement: 'bottom-left'})">bottom-left</button>
  <button class="btn" data-on="click" data-do="zui.Messager.show({content: '项目设置已保存。', placement: 'bottom'})">bottom</button>
  <button class="btn" data-on="click" data-do="zui.Messager.show({content: '项目设置已保存。', placement: 'bottom-right'})">bottom-right</button>
  <button class="btn" data-on="click" data-do="zui.Messager.show({content: '项目设置已保存。', placement: 'center'})">center</button>
</Example>

== JS

```js
Messager.show({
    content: '项目设置已保存。',
    placement: 'top-left',
});
```

:::

## 颜色主题

提供多种预设颜色主题，通过 `type` 选项指定外观工具类即可。

::: tabs

== 示例

<example class="flex gap-2 flex-wrap">
  <button type="button" class="btn primary" data-on="click" data-do="zui.Messager.show({content: '项目设置已保存。', type: 'primary'});">primary</button>
  <button type="button" class="btn secondary" data-on="click" data-do="zui.Messager.show({content: '当前视图已切换为我的任务。', type: 'secondary'});">secondary</button>
  <button type="button" class="btn success" data-on="click" data-do="zui.Messager.show({content: '验收报告已上传。', type: 'success'});">success</button>
  <button type="button" class="btn danger" data-on="click" data-do="zui.Messager.show({content: '上传失败，请检查网络后重试。', type: 'danger'});">danger</button>
  <button type="button" class="btn special" data-on="click" data-do="zui.Messager.show({content: '你已被邀请加入客户门户项目。', type: 'special'});">special</button>
  <button type="button" class="btn important" data-on="click" data-do="zui.Messager.show({content: '有 3 项任务等待你确认。', type: 'important'});">important</button>
  <button type="button" class="btn gray" data-on="click" data-do="zui.Messager.show({content: '筛选条件已重置。', type: 'gray'});">gray</button>
  <button type="button" class="btn black" data-on="click" data-do="zui.Messager.show({content: '已退出全屏模式。', type: 'black'});">black</button>
  <button type="button" class="btn primary circle" data-on="click" data-do="zui.Messager.show({content: '项目设置已保存。', type: 'primary circle'});">primary circle</button>
  <button type="button" class="btn success-pale circle" data-on="click" data-do="zui.Messager.show({content: '验收报告已上传。', type: 'success-pale circle'});">success-pale circle</button>
  <button type="button" class="btn danger-outline circle" data-on="click" data-do="zui.Messager.show({content: '上传失败，请检查网络后重试。', type: 'danger-outline circle'});">danger-outline circle</button>
</example>

== JS

```js
zui.Messager.show({
    content: '项目设置已保存。',
    type: 'primary',
});
```

:::

## 禁用关闭按钮

默认会在右侧显示关闭按钮，如果需要禁用关闭按钮，将 `close` 选项设置为 `false`。

::: tabs

== 示例

<example>
  <button class="btn" data-on="click" data-do="zui.Messager.show({content: '项目设置已保存。', close: false});">禁用关闭按钮</button>
</example>

== JS

```js
zui.Messager.show({
    content: '项目设置已保存。',
    close: false
});
```

:::

## 自定义操作按钮

通过 `actions` 数组来自定义一组操作。详细配置可参考 [工具栏](/lib/components/toolbar/)。

::: tabs

== 示例

<example>
  <button class="btn" data-on="click" data-do="zui.Messager.show({content: '项目周报.pdf 已移至回收站。', type: 'success', actions: [{name: 'undo', 'icon': 'undo', text: '撤销', onClick: () => console.log('已请求恢复项目周报.pdf。')}]});">自定义操作按钮</button>
</example>

== JS

```js
zui.Messager.show({
    content: '项目周报.pdf 已移至回收站。',
    type: 'success',
    actions: [{
        name: 'undo',
        icon: 'undo',
        text: '撤销',
        onClick: () => console.log('已请求恢复项目周报.pdf。'),
    }],
});
```

:::

## 禁用自动隐藏

默认超过 5000ms 自动隐藏，通过设置 `time` 为 `0` 取消自动隐藏。

::: tabs

== 示例

<example>
  <button class="btn" data-on="click" data-do="zui.Messager.show({content: '连接已断开，请检查网络后刷新页面。', time: 0});">禁用自动隐藏</button>
</example>

== JS

```js
zui.Messager.show({
    content: '连接已断开，请检查网络后刷新页面。',
    time: 0,
});
```

:::

## 禁用动画效果

设置 `animation` 为 `false` 禁用动画效果。

::: tabs

== 示例

<example>
  <button class="btn" data-on="click" data-do="zui.Messager.show({content: '项目设置已保存。', animation: false});">禁用动画效果</button>
</example>

== JS

```js
zui.Messager.show({
    content: '项目设置已保存。',
    animation: false,
});
```

:::

## 选项

<Props>
type?: string; // 消息类型
placement?: string; // 浮动消息定位方式，支持 `'top' | 'center' | 'bottom' | 'left-top' | 'left' | 'left-bottom' | 'right' | 'right-top' | 'right-bottom'`
time?: number; // 浮动消息持续时间
content?: string; // 浮动消息内容
message?: string; // 浮动消息内容，等同于 content
icon?: string; // 图标名称
actions?: object[]; // 操作按钮定义列表
margin?: number; // 外边距
</Props>
