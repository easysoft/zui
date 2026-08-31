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

## React / Preact

```tsx
import {Sidebar} from '@zui/sidebar/react';

<Sidebar side="right" width={320} minWidth={200}>
  <div className="sidebar-content">...</div>
</Sidebar>
```

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
/** 状态和宽度变化回调。 */
onToggle?: (collapsed: boolean) => void;
onResize?: (width: number) => void;
</Props>
