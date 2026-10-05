# 侧边栏

`Sidebar` 为指定容器的左侧或右侧区域提供折叠、拖拽调宽和可选的宽度持久化。将它初始化在侧栏元素上；默认使用元素父级作为布局容器，也可通过 `parent` 显式指定容器。

## 基本使用

拖动中间的分隔条可以调整侧栏宽度，点击分隔条上的箭头按钮可以折叠或展开侧栏；双击分隔条恢复初始宽度。箭头按钮也支持通过 Tab 聚焦后按 Enter 或空格操作。

::: tabs

== 示例

<Example>
  <div class="row gap-3 h-40">
    <ZUI use="sidebar" class="sidebar" :options="sidebarOptions">
      <div class="p-3 surface rounded">
        <strong>客户门户</strong>
        <div>需求与任务</div>
        <div>发布记录</div>
      </div>
    </ZUI>
    <div class="flex-auto min-w-0 p-3">
      <strong>本周迭代</strong>
      <div>完善客户资料与工单流程。</div>
    </div>
  </div>
</Example>

== HTML

```html
<div class="row gap-3 h-40">
  <aside class="sidebar" id="projectSidebar">
    <div class="p-3 surface rounded">
      <strong>客户门户</strong>
      <div>需求与任务</div>
      <div>发布记录</div>
    </div>
  </aside>
  <main class="flex-auto min-w-0 p-3">
    <strong>本周迭代</strong>
    <div>完善客户资料与工单流程。</div>
  </main>
</div>
```

== JS

```js
const sidebar = new zui.Sidebar('#projectSidebar', {
    width: '40%',
    minWidth: 96,
    maxWidth: '65%',
    $onInited() {
        this.element.querySelector('.gutter-toggle').setAttribute('aria-label', '折叠或展开侧栏');
    },
});
```

:::

调用 `sidebar.toggle()` 可折叠或恢复侧栏，`sidebar.update(width)` 可设置像素宽度。设置 `preserve: 'project-sidebar'` 可在刷新页面后保留宽度；示例未启用持久化。

## 共享宽度

将多个实例的 `shareWidth` 设置为相同的非空字符串，即可共享宽度。拖拽、调用 `update()`、折叠/展开及双击重置都会同步到同组实例。

```html
<div class="row">
  <aside class="sidebar" id="sharedSidebarLeft"><div class="sidebar-content">项目目录：客户门户、移动端工单、团队知识库</div></aside>
  <main class="flex-auto">客户门户 · 本周迭代任务</main>
  <aside class="sidebar" id="sharedSidebarRight"><div class="sidebar-content">任务详情：负责人、计划日期与验收标准</div></aside>
</div>
```

```js
new zui.Sidebar('#sharedSidebarLeft', {width: 280, shareWidth: 'workspace'});
new zui.Sidebar('#sharedSidebarRight', {side: 'right', shareWidth: 'workspace'});
```

新实例会继承组内最早创建且已初始化实例的当前宽度，优先于自身的 `preserve` 和 `width`；组内没有其他实例时，按原有规则初始化。初始化继承不会额外触发 `onResize`、`onToggle` 或 `sidebarResize`。同组折叠后，可通过任一实例恢复展开宽度。

每个实例仍遵守自身的 `minWidth`、`maxWidth`、容器宽度及折叠规则，因此受限制时实际宽度可能不同。宽度实际变化的实例会各自触发现有回调和事件，并按各自的 `preserve` 保存宽度。

`shareWidth` 默认关闭，仅在当前页面的 Sidebar 实例间生效；跨刷新恢复继续使用 `preserve`。

## Preact（源码工作区）

以下入口用于 ZUI 源码工作区，需要解析 `@zui/*`、编译 TypeScript/JSX 并配置 Preact，同时加载 `@zui/sidebar/css` 或已有的 ZUI CSS。`/react` 是 Preact 实现的历史入口名；标准 npm 项目通过 `zui` 和 `zui/css` 接入，使用前文的原生实例 API。

```tsx
import {Sidebar} from '@zui/sidebar/react';

<Sidebar side="right" width={320} minWidth={200}>
  <div className="sidebar-content">任务详情与操作记录</div>
</Sidebar>
```

Preact 组件同样支持 `shareWidth`，例如 `<Sidebar shareWidth="workspace">...</Sidebar>`。

## 选项

<Props>
/** 布局容器；未设置时使用侧栏元素的父级。 */
parent?: Selector;
/** 侧边栏位置。 */
side?: 'left' | 'right';
/** 初始宽度，可使用像素值或百分比。 */
width?: SizeSetting;
/** 最小和最大宽度。 */
minWidth?: SizeSetting;
maxWidth?: SizeSetting;
/** 是否显示折叠按钮及允许拖拽调整。 */
toggleBtn?: boolean;
dragToResize?: boolean;
/** 是否启用过渡动画，或设置过渡时间（毫秒）。 */
animation?: boolean | number;
/** 双击 gutter 的行为。 */
dblclick?: 'toggle' | 'reset';
/** 持久化宽度的 Store 键。 */
preserve?: string;
/** 共享宽度的分组标识；相同非空标识的实例同步宽度，默认关闭。 */
shareWidth?: string;
/** 状态和宽度变化回调。 */
onToggle?: (collapsed: boolean) => void;
onResize?: (width: number) => void;
</Props>

<script setup>
const sidebarOptions = {
    width: '40%',
    minWidth: 96,
    maxWidth: '65%',
    $onInited() {
        this.element.querySelector('.gutter-toggle').setAttribute('aria-label', '折叠或展开侧栏');
    },
};
</script>
