# 标签页

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。先确认应用实际运行版本、导出、类型和 CSS。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{"schemaVersion":1,"library":"tabs","summary":"将现有导航链接与内容面板连接，切换 active 状态并发送 show/shown 事件。","keywords":["标签页","Tabs","tab-pane","选项卡"]}
```

## overview

用于已存在的导航与多个内容面板之间切换。导航外观来自 nav；本库不生成面板数据或加载远程内容。

## setup

workspace `@zui/tabs` 导出原生 Tabs、加载样式并注册 tab toggle；`@zui/tabs/css` 只加载样式。没有 Preact 或 Web Component 公开形态。browser 使用包含 tabs/nav 的 JS/CSS。

## vanilla

### vanilla-tabs

```json
{"name":"Tabs","summary":"在导航根节点管理标签面板。"}
```

`new Tabs(selector)` 继承 Component，selector 必须指向 `.nav` 导航容器。没有专有 options 类型。`active(selector?): void` 激活给定链接；省略时使用当前 active 链接，再回退首个匹配项。匹配链接为 `[data-toggle="tab"],[zui-toggle="tab"]`。目标依次读取 href、data-target、zui-toggle-tab 配置中的 target。

browser，已加载 ZUI JS/CSS：

```html
<div class="tabs"><nav class="nav" id="my-tabs"><a data-toggle="tab" href="#pane-a">A</a><a data-toggle="tab" href="#pane-b">B</a></nav><div><section class="tab-pane" id="pane-a">A 内容</section><section class="tab-pane" id="pane-b">B 内容</section></div></div>
<script>
const tabs = new zui.Tabs('#my-tabs');
tabs.active();
// 页面卸载时：tabs.destroy();
</script>
```

查找目标时优先限制在最近 `.tabs` 内；不存在或非法选择器保持当前状态。更新时清除同组 `.tab-pane` 的 active/in；新目标立即 active 并触发 show，10ms 后增加 in 并触发 shown。pane 上触发 show/shown，同时 Tabs 发出同名组件事件，参数为 data-name 或目标选择器字符串；这些通知没有实现取消协议。destroy 清除延迟定时器和基类资源；共有事件订阅/实例查找见 [Component](../core/ai.md#vanilla-component)。

## preact

无。

## web-components

无。

## css

### css-tab-pane

```json
{"name":".tab-pane / .tab-pane.active","summary":"标签面板的隐藏和显示。","role":"js-component"}
```

`.tab-pane` 默认 display:none，增加 `.active` 后 block。面板需是同一父节点下兄弟元素以便互斥；`.in` 由 JS 延后增加，动画样式依赖其他库。

## css-variables

无。

## javascript

无。

## types

无。

## recipes

### recipe-tabs-programmatic

```json
{"name":"程序切换","summary":"传入现有导航项激活。"}
```

browser，复用上例：`tabs.active('#my-tabs a[href="#pane-b"]')`。不要直接修改单个 pane 的 active，否则导航状态不会同步。

## constraints

- Tabs 不自动补齐完整 ARIA tablist/tab/tabpanel 与方向键交互，应用需要根据交互要求处理。
- 配置对象不能代替真实导航项，目标需存在。

## references

- [入口](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/tabs/package.json>)、[Tabs 实现](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/tabs/src/vanilla/tabs.ts>)、[面板样式](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/tabs/src/style/tab-pane.css>)
