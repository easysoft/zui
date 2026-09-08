# 侧边栏

`Sidebar` 为指定容器的左侧或右侧区域提供折叠、拖拽调宽和可选的宽度持久化。将它初始化在侧栏元素上；默认使用元素父级作为布局容器，也可通过 `parent` 显式指定容器。

## 基本使用

```html
<div class="row" id="layout">
  <aside class="sidebar" id="projectSidebar">...</aside>
  <main class="flex-auto">...</main>
</div>
```

```js
const sidebar = new zui.Sidebar('#projectSidebar', {
    width: 280,
    minWidth: 180,
    preserve: 'project-sidebar',
});
```

调用 `sidebar.toggle()` 可折叠或恢复侧栏，`sidebar.update(width)` 可设置像素宽度。启用 `dragToResize`（默认值）时，用户可以拖动 gutter 调整宽度；双击 gutter 默认恢复初始宽度。

## 共享宽度

将多个实例的 `shareWidth` 设置为相同的非空字符串，即可共享宽度。拖拽、调用 `update()`、折叠/展开及双击重置都会同步到同组实例。

```html
<div class="row">
  <aside class="sidebar" id="sharedSidebarLeft"><div class="sidebar-content">左侧内容</div></aside>
  <main class="flex-auto">主要内容</main>
  <aside class="sidebar" id="sharedSidebarRight"><div class="sidebar-content">右侧内容</div></aside>
</div>
```

```js
new zui.Sidebar('#sharedSidebarLeft', {width: 280, shareWidth: 'workspace'});
new zui.Sidebar('#sharedSidebarRight', {side: 'right', shareWidth: 'workspace'});
```

新实例会继承组内最早创建且已初始化实例的当前宽度，优先于自身的 `preserve` 和 `width`；组内没有其他实例时，按原有规则初始化。初始化继承不会额外触发 `onResize`、`onToggle` 或 `sidebarResize`。同组折叠后，可通过任一实例恢复展开宽度。

每个实例仍遵守自身的 `minWidth`、`maxWidth`、容器宽度及折叠规则，因此受限制时实际宽度可能不同。宽度实际变化的实例会各自触发现有回调和事件，并按各自的 `preserve` 保存宽度。

`shareWidth` 默认关闭，仅在当前页面的 Sidebar 实例间生效；跨刷新恢复继续使用 `preserve`。

## React / Preact

```tsx
import {Sidebar} from '@zui/sidebar/react';

<Sidebar side="right" width={320} minWidth={200}>
  <div className="sidebar-content">...</div>
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
dbclick?: 'toggle' | 'reset';
/** 持久化宽度的 Store 键。 */
preserve?: string;
/** 共享宽度的分组标识；相同非空标识的实例同步宽度，默认关闭。 */
shareWidth?: string;
/** 状态和宽度变化回调。 */
onToggle?: (collapsed: boolean) => void;
onResize?: (width: number) => void;
</Props>
