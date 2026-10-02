# 折叠

折叠区域用于按需显示详情。简单内容可使用原生 `<details>`；需要标题操作、动态内容或受控状态时使用 `Collapsible`。

## 原生折叠区域

为 `<details>` 添加 `.details`，把可操作标题放在首个 `<summary>` 中。无需初始化 JavaScript，添加 `open` 属性可默认展开。

::: tabs

== 示例

<Example>
  <details class="details">
    <summary>查看交付范围</summary>
    <p>本次交付包含工单查询与附件预览，消息通知将在下个迭代完成。</p>
  </details>
</Example>

== HTML

```html
<details class="details">
  <summary>查看交付范围</summary>
  <p>本次交付包含工单查询与附件预览，消息通知将在下个迭代完成。</p>
</details>
```

:::

### 面板外观

结合 [面板](/lib/components/panel/) 的类名，可以得到带边框的折叠面板。

::: tabs

== 示例

<Example>
  <details class="details panel" open>
    <summary class="panel-heading"><span class="panel-title">发布说明</span></summary>
    <div class="panel-body">客户门户 v1.2 新增附件预览，并修复移动端图片上传失败的问题。</div>
  </details>
</Example>

== HTML

```html
<details class="details panel" open>
  <summary class="panel-heading"><span class="panel-title">发布说明</span></summary>
  <div class="panel-body">客户门户 v1.2 新增附件预览，并修复移动端图片上传失败的问题。</div>
</details>
```

:::

`.details` 默认提供展开、收起和箭头旋转的过渡，持续时间由 `--details-duration` 控制，默认 `0.2s`。添加 `.no-transition` 可禁用过渡；系统开启“减少动态效果”时也会禁用。内容高度动画依赖浏览器支持，原生展开和收起操作不依赖该动画。

## JavaScript 组件

页面已加载 ZUI 后，可以创建 `zui.Collapsible`。组件渲染为 `<details class="details collapsible">`，首个子元素为 `<summary>`，复用 `.details` 的显隐和过渡样式。`defaultCollapsed` 设置初始状态，`content` 设置内容。

使用 `<div>` 作为初始化目标时保留宿主，在内部渲染折叠区域；使用 `<details>` 时直接复用该元素。

::: tabs

== 示例

<Example>
  <ZUI use="collapsible" :options="{title: '高级设置', caption: '可选', content: '开启每周摘要后，系统将在周一汇总上周的项目动态。', bordered: true, defaultCollapsed: true, toggleButton: {attrs: {'aria-label': '展开或收起高级设置'}}}" />
</Example>

== HTML

```html
<div id="advancedSettings"></div>
```

== JS

```js
const collapsible = new zui.Collapsible('#advancedSettings', {
    title: '高级设置',
    caption: '可选',
    content: '开启每周摘要后，系统将在周一汇总上周的项目动态。',
    bordered: true,
    defaultCollapsed: true,
    toggleButton: {attrs: {'aria-label': '展开或收起高级设置'}},
});
```

:::

默认点击标题区域或切换按钮均由浏览器执行原生折叠。标题内的链接、工具栏和其他交互控件保留自身行为，不触发折叠；设置 `toggleOnClickHeader: false` 后只通过切换按钮操作。切换按钮始终保留，可配置按钮属性和展开、收起图标。

动画默认开启。设置 `animation: false` 可禁用，也可通过 `collapsible.render({animation: false})` 动态关闭，设为 `true` 恢复。该选项复用 `.no-transition` 样式，不影响原生展开和收起操作。

### 状态与内容生命周期

- `defaultCollapsed` 只决定初始状态，后续状态以原生 `details.open` 为准，组件通过 `toggle` 事件同步按钮与内容。
- 传入 `collapsed` 后进入受控模式。用户操作触发 `onChange`，调用方需要更新 `collapsed` 才会改变显示状态。
- `onChange(collapsed)` 在用户操作或调用 `toggle()` 切换前触发，`true` 表示将要收起，返回 `false` 可阻止切换。
- 直接修改 DOM 的 `open` 不触发 `onChange`。非受控模式接纳该状态；受控模式恢复为 `collapsed` 指定的状态。
- `onlyHideOnCollapsed` 默认为 `true`，收起后保留内容及内部状态；设为 `false` 后，在原生 `toggle` 事件中卸载或重新挂载内容。快速连续切换以浏览器最终状态为准，卸载模式不保证收起动画。

```html
<div id="controlledSettings"></div>
```

```js
const controlled = new zui.Collapsible('#controlledSettings', {
    title: '高级设置',
    content: '每周摘要发送到项目成员的工作邮箱。',
    collapsed: true,
    onChange(collapsed) {
        controlled.render({collapsed});
    },
});
```

## 选项

除通用元素属性外，常用选项如下。`CustomContentType` 可使用文本或 ZUI 自定义内容定义。

<Props>
title?: CustomContentType; // 标题。
caption?: CustomContentType; // 标题旁的补充说明。
header?: CustomContentType; // 自定义标题区内容。
content?: CustomContentType; // 折叠区内容。
actions?: ToolbarSetting; // 标题区工具栏。
collapsed?: boolean; // 受控的折叠状态。
defaultCollapsed?: boolean = false; // 初始折叠状态。
animation?: boolean = true; // 是否启用展开和收起动画。
bordered?: boolean = false; // 显示边框。
disabled?: boolean = false; // 禁止用户通过标题和按钮切换。
toggleOnClickHeader?: boolean = true; // 点击标题区域时切换。
onlyHideOnCollapsed?: boolean = true; // 收起时保留内容。
toggleButton?: Partial&lt;ButtonProps&gt;; // 切换按钮属性。
collapsedIcon?: IconType; // 收起状态下的按钮图标。
expandedIcon?: IconType; // 展开状态下的按钮图标。
headerClass?: ClassNameLike; // 标题区附加类名。
contentClass?: ClassNameLike; // 内容区附加类名。
contentStyle?: CSSProperties; // 内容区样式。
onChange?: (collapsed: boolean) =&gt; void | false; // 切换前回调。
</Props>

## 实例方法

```js
collapsible.render({title: '通知设置'});
collapsible.$?.toggle();      // 切换状态。
collapsible.$?.toggle(true);  // 收起。
collapsible.$?.toggle(false); // 展开。
const collapsed = collapsible.$?.collapsed;
collapsible.destroy();
```

`$` 访问内部 Preact 组件实例。`toggle` 同样遵循 `onChange` 与受控状态约定；`disabled` 用于限制用户交互，不阻止调用方主动切换。

## 模块引入

```ts
import {Collapsible} from '@zui/collapsible';
import {Collapsible as CollapsibleView} from '@zui/collapsible/react';
```

使用 Preact 入口时还需加载样式：`import '@zui/collapsible/css'`。JS 根入口已经引入组件样式；单独使用原生 `.details` 时也可只引入 CSS 入口。

## 键盘操作

纯 HTML 用法中的 `<summary>` 支持 Tab 聚焦以及 Enter、空格切换。JS 组件使用独立切换按钮作为键盘入口，标题不额外占用 Tab 停靠点；聚焦按钮后可按 Enter 或空格切换。通过 `toggleButton.attrs` 设置描述操作的 `aria-label`，按钮的 `aria-expanded` 会随展开状态更新。
