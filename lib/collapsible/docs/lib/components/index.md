# 折叠

折叠区域用于按需显示详情。简单内容可使用原生 `<details>`；需要标题操作、动态内容或受控状态时使用 `Collapsible`。

## 原生折叠区域

为 `<details>` 添加 `.details`，把可操作标题放在首个 `<summary>` 中。无需初始化 JavaScript，添加 `open` 属性可默认展开。

::: tabs

== 示例

<Example>
  <details class="details">
    <summary>查看说明</summary>
    <p>点击标题即可展开或收起这段内容。</p>
  </details>
</Example>

== HTML

```html
<details class="details">
  <summary>查看说明</summary>
  <p>点击标题即可展开或收起这段内容。</p>
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
    <div class="panel-body">这里展示版本说明。</div>
  </details>
</Example>

== HTML

```html
<details class="details panel" open>
  <summary class="panel-heading"><span class="panel-title">发布说明</span></summary>
  <div class="panel-body">这里展示版本说明。</div>
</details>
```

:::

`.details` 默认提供展开、收起和箭头旋转的过渡，持续时间由 `--details-duration` 控制，默认 `0.2s`。添加 `.no-transition` 可禁用过渡；系统开启“减少动态效果”时也会禁用。内容高度动画依赖浏览器支持，原生展开和收起操作不依赖该动画。

## JavaScript 组件

页面已加载 ZUI 后，可以创建 `zui.Collapsible`。`defaultCollapsed` 设置初始状态，`content` 设置内容。

::: tabs

== 示例

<Example>
  <ZUI use="collapsible" :options="{title: '高级设置', caption: '可选', content: '这里展示更多设置。', bordered: true, defaultCollapsed: true, toggleButton: {attrs: {'aria-label': '展开或收起高级设置'}}}" />
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
    content: '这里展示更多设置。',
    bordered: true,
    defaultCollapsed: true,
    toggleButton: {attrs: {'aria-label': '展开或收起高级设置'}},
});
```

:::

默认点击标题区域或切换按钮均可折叠。标题内的链接和其他按钮不会触发标题点击折叠；设置 `toggleOnClickHeader: false` 后只通过切换按钮操作。

### 状态与内容生命周期

- `defaultCollapsed` 只决定初始状态，后续状态由组件维护。
- 传入 `collapsed` 后进入受控模式。用户操作触发 `onChange`，调用方需要更新 `collapsed` 才会改变显示状态。
- `onChange(collapsed)` 中的 `true` 表示将要收起，返回 `false` 可阻止切换。
- `onlyHideOnCollapsed` 默认为 `true`，收起后保留内容及内部状态；设为 `false` 会卸载内容，展开时重新挂载。

```html
<div id="controlledSettings"></div>
```

```js
const controlled = new zui.Collapsible('#controlledSettings', {
    title: '高级设置',
    content: '由调用方维护折叠状态。',
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
collapsible.render({title: '新的标题'});
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

原生 `<summary>` 支持 Tab 聚焦以及 Enter、空格切换。JS 组件的切换按钮可通过 `toggleButton.attrs` 设置描述操作的 `aria-label`，键盘用户可聚焦按钮后切换内容。需要原生展开状态语义时，优先使用 `<details>`。
