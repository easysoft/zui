# 拖放与尺寸调整

## meta

```json
{
  "schemaVersion": 1,
  "library": "dnd",
  "summary": "为现有 DOM 提供拖放、区域约束移动和八方向尺寸调整。",
  "keywords": [
    "Draggable",
    "Moveable",
    "Resizable",
    "拖拽",
    "尺寸"
  ]
}
```

## overview

对现有 DOM 提供 HTML5 拖放、鼠标移动和八方向尺寸调整。需要重新排列列表时用 [Sortable](../sortable/ai.md)；此库不自动更新业务数据或列表顺序。

## setup

workspace：`import {Draggable, Moveable, Resizable} from '@zui/dnd';`。主入口通过 Resizable 引入手柄 CSS；需要浏览器 DOM。browser 构建包含 dnd 时使用同名 zui 类。无 /react、/css 子入口；这些类没有在自身入口调用 register，不把 z-use 属性视为已自动接线。

## vanilla

### vanilla-draggable

```json
{"name": "Draggable", "summary": "在容器中拖动 DOM 并处理合法放置目标。"}
```

通用构造、实例查询、事件和销毁约定见 [Component](../core/ai.md#vanilla-component)。回调由组件调用，不需额外绑定全局 mousemove。

`new Draggable(element, options?)`。`selector` 默认 `[draggable="true"]`，`target` 未设置时匹配 `[droppable="true"]`；dragContainer 默认根节点，dropContainer 默认 dragContainer。handle 可限制鼠标按下区域；dropEffect 默认 move，仅设 DataTransfer 效果，不移动 DOM。

state 为 `{dragging,dropping}`（无目标为 null）；dragElement/dropElement 为对应 DOM。没有合法目标会取消拖拽。`beforeDrag(event,element)` 在 mousedown，`onDragStart(event,element)` 在 dragstart，返回 false 阻止；`canDrop(event,dragElement,dropElement)` 返回 false 拒绝。onDrag/onDragEnd 接收拖动元素；onDragEnter/onDragOver/onDragLeave/onDrop 接收事件、拖动元素、放置元素。onChange(newState,oldState) 在目标变化时通知。完整可选参数见 [DraggableOptions](#types-draggable)。

默认状态类根 has-dragging、源 is-dragging、所有有效目标 is-droppable、当前目标 is-dropping，可通过对应 *Class 选项改名；这些标记没有独立拖放布局样式。destroy() 清理状态、容器及 document 事件。

workspace（先插入 DOM）：

```ts
import {Draggable} from '@zui/dnd';
const root = document.createElement('div');
root.innerHTML = '<div draggable="true">任务</div><div droppable="true">目标</div>';
document.body.append(root);
const drag = new Draggable(root, {
    onDrop(_event, item, target) { target.append(item); },
});
// 页面卸载：drag.destroy(); root.remove();
```

来源：[实现](src/vanilla/draggable.ts)。


### vanilla-moveable

```json
{"name": "Moveable", "summary": "按鼠标位移移动或滚动目标并约束区域。"}
```

通用构造、实例查询、事件和销毁约定见 [Component](../core/ai.md#vanilla-component)。回调由组件调用，不需额外绑定全局 mousemove。

`new Moveable(element,options?)`，selector 默认 `[moveable="true"]`，也支持 self；handle 限制手柄。move 默认 true：absolute/fixed 目标用 position，其他用 transform。可显式指定 position、transform、scroll、none，false 等价 none。position 更新 left/top，transform 更新 translate，scroll 更新滚动偏移；none 只回调。

container 默认 window，也支持 self、parent、CSS selector、HTMLElement、提供 getBoundingClientRect 的对象、false（不限）。containerPadding 默认未设，数字/四边对象/函数返回边距，允许负数；约束使用视口坐标。autoUpdate 默认关闭；true 启用 resize+scroll，或对象配置 resize/scroll/animationFrame/targets(last 默认，all 匹配全部目标)。不可观察的矩形对象默认使用 rAF，除非 animationFrame=false。

state/ moveElement 空闲时 undefined。`update(state?:MoveableState):void` 写位置，省略 state 时重用当前状态或重新限制上次目标；`startAutoUpdate():void` 重启自动监听，`stopAutoUpdate():void` 停止；destroy() 清理监听、rAF 和状态。

onMoveStart(event,target) 返回 false 取消；onChange(newState,oldState,event) 返回 false 拒绝状态或 Partial<State> 修正；onMove/onMoveEnd(event,state) 通知；onUpdate(info,state) 返回 false 阻止写入或 Partial<MoveableUpdateInfo> 覆盖 style/scrollLeft/scrollTop。未设置回调不额外执行逻辑。完整状态、选项见 [类型](#types-moveable)。

静态 `normalizePadding(padding?)` 把数值/四边对象补为四边数值（缺失为0）；`clamp(value,min,max)` 限幅，min>max 返回 min；`getTranslate(element)` 从 computed transform 读取 `{left,top}`。

workspace：

```ts
import {Moveable} from '@zui/dnd';
const box = document.createElement('div');
box.textContent = '拖动';
box.style.cssText = 'position:fixed;left:20px;top:20px;width:100px;height:50px';
document.body.append(box);
const move = new Moveable(box, {selector: 'self', container: 'window', containerPadding: 8, autoUpdate: true});
// 页面卸载：move.destroy(); box.remove();
```

来源：[实现](src/vanilla/moveable.ts)。


### vanilla-resizable

```json
{"name": "Resizable", "summary": "为现有元素生成八方向尺寸手柄。"}
```

通用构造、实例查询、事件和销毁约定见 [Component](../core/ai.md#vanilla-component)。回调由组件调用，不需额外绑定全局 mousemove。

`new Resizable(element,options?)`，selector 默认 `[resizable="true"]` 或 self；初始化自动为匹配元素生成八个 .resizable-handle，static 定位目标会写 position:relative。container 默认 window，padding 规则同 Moveable；minWidth/minHeight 默认0，maxWidth/maxHeight 未设置。hasResizingClass 默认 has-resizing，resizingClass 默认 is-resizing。

`refresh():void` 删除旧的自动手柄，按当前 selector 重建；动态新增目标后调用。state 空闲 undefined，resizeElement 当前目标，handles 为手柄 Cash 集合。`update(state?:ResizableState):void` 使用当前操作上下文更新位置尺寸。`destroy():void` 删除自动手柄、取消 rAF/监听；不承诺恢复已修改的尺寸和 position。`Resizable.isDirection(value)` 判断 n/e/s/w/ne/nw/se/sw。

onResizeStart(event,target,direction) 返回 false 取消；onChange(newState,oldState,event) 返回 false 或状态补丁；onResize/onResizeEnd(event,state) 通知；onUpdate({style},state) 返回 false 阻止写入或替换 style。完整类型见 [ResizableOptions](#types-resizable)。

workspace：

```ts
import {Resizable} from '@zui/dnd';
const box = document.createElement('div');
box.style.cssText = 'width:240px;height:120px;border:1px solid';
document.body.append(box);
const resize = new Resizable(box, {selector: 'self', minWidth: 80, minHeight: 40});
// 页面卸载：resize.destroy(); box.remove();
```

来源：[实现](src/vanilla/resizable.ts)。

## preact

无。

## web-components

无。

## css

### css-resizable

```json
{"name": "resizable / resizable-handle", "summary": "尺寸调整容器与手柄外观。", "role": "js-component"}
```

作用域 .resizable；手柄 .resizable-handle 绝对定位，z-dir 为 n/e/s/w/ne/nw/se/sw 决定方向和 cursor。hover 或手柄 is-resizing 时着色。由 Resizable 创建结构；单独加类不会接入鼠标操作。不要删除 z-resizable-generated 标记，它供 refresh/destroy 清理。示例见 [Resizable](#vanilla-resizable)。来源：[样式](src/css/resizable.css)。


### css-dnd-states

```json
{"name": "has-dragging / is-dragging / is-droppable / is-dropping / has-moving / is-moving / has-resizing / is-resizing", "summary": "组件写入的操作状态钩子。", "role": "helper"}
```

分别位于根、被操作项或放置目标；只在对应操作期间生效。前六者不提供独立视觉规则，可在应用 CSS 中定义 `.is-dropping {outline:2px solid currentColor}`。is-resizing 与手柄样式配合。状态清理由实例负责，改名使用组件的类名选项。

## css-variables

### css-variables-resizable

```json
{"name": "--side-handle-* / --corner-handle-width", "summary": "在 .resizable 上设置手柄尺寸与颜色。"}
```

声明于 .resizable：--side-handle-width:4px，--side-handle-shift:4px，--side-handle-color:var(--color-primary-400)，--corner-handle-width:8px。在实际组件根节点覆盖，例如 `.resizable {--corner-handle-width:12px}`；后代手柄继承。依赖 base 主题颜色，未提供独立全局 token。来源：[CSS](src/css/resizable.css)。

## javascript

独立函数无。Moveable 的三个静态工具和 Resizable.isDirection 见上文各类；内部 helpers 未从主入口导出。

## types

### types-draggable

```json
{"name": "DraggableOptions / DraggableState", "summary": "拖放目标、回调和状态。"}
```

以下类型从 @zui/dnd 导出；可选字段未给值时使用对应类说明中的默认行为。

```ts
export type DraggableOptions = {
    selector?: string;
    dragContainer?: Selector;
    dropContainer?: Selector;
    handle?: string;
    hasDraggingClass?: string;
    draggingClass?: string;
    target?: string | ((dragElement: HTMLElement) => Selector);
    droppableClass?: string;
    droppingClass?: string;
    dropEffect?: 'copy' | 'move' | 'link' | 'none';
    onChange?: (newState: DraggableState, oldState: DraggableState) => void;
    beforeDrag?: (event: MouseEvent, dragElement: HTMLElement) => void | boolean;
    onDragStart?: (event: DragEvent, dragElement: HTMLElement) => void | boolean;
    onDrag?: (event: DragEvent, dragElement: HTMLElement) => void;
    onDragEnd?: (event: DragEvent, dragElement: HTMLElement) => void;
    onDragEnter?: (event: DragEvent, dragElement: HTMLElement, dropElement: HTMLElement) => void;
    onDragOver?: (event: DragEvent, dragElement: HTMLElement, dropElement: HTMLElement) => void;
    onDragLeave?: (event: DragEvent, dragElement: HTMLElement, dropElement: HTMLElement) => void;
    canDrop?: (event: DragEvent, dragElement: HTMLElement, dropElement: HTMLElement) => boolean | void;
    onDrop?: (event: DragEvent, dragElement: HTMLElement, dropElement: HTMLElement) => void;
};
```

来源：[src/types/draggable-options.ts](src/types/draggable-options.ts)。

```ts
export type DraggableState = {
    dragging: HTMLElement | null;
    dropping: HTMLElement | null;
};
```

来源：[src/types/draggable-state.ts](src/types/draggable-state.ts)。


### types-moveable

```json
{"name": "MoveableOptions / MoveableState / MoveableStrategy / DistanceRect", "summary": "移动区域、策略、回调和坐标。"}
```

以下类型从 @zui/dnd 导出；可选字段未给值时使用对应类说明中的默认行为。

```ts
export type MoveableUpdateInfo = {
    style?: CSSProperties;
    scrollLeft?: number;
    scrollTop?: number;
};
export type MoveableContainer = false
    | 'window'
    | 'self'
    | 'parent'
    | (string & {})
    | HTMLElement
    | {getBoundingClientRect(): DOMRect};
export type MoveableContainerPadding = number
    | Partial<DistanceRect>
    | ((target: HTMLElement, state: MoveableState | undefined) => number | Partial<DistanceRect>);
export type MoveableAutoUpdateOptions = {
    resize?: boolean;
    scroll?: boolean;
    animationFrame?: boolean;
    targets?: 'last' | 'all';
};
export type MoveableOptions = {
    selector?: 'self' | (string & {});
    handle?: string;
    hasMovingClass?: string;
    movingClass?: string;
    move?: boolean | MoveableStrategy;
    container?: MoveableContainer;
    containerPadding?: MoveableContainerPadding;
    autoUpdate?: boolean | MoveableAutoUpdateOptions;
    onChange?: (newState: MoveableState, oldState: MoveableState | undefined, event: MouseEvent) => void | false | Partial<MoveableState>;
    onMoveStart?: (event: MouseEvent, target: HTMLElement) => void | boolean;
    onMove?: (event: MouseEvent, state: MoveableState) => void;
    onMoveEnd?: (event: MouseEvent, state: MoveableState) => void;
    onUpdate?: (info: MoveableUpdateInfo, state: MoveableState) => void | false | Partial<MoveableUpdateInfo>;
};
```

来源：[src/types/moveable-options.ts](src/types/moveable-options.ts)。

```ts
export type MoveableState = {
    event: MouseEvent;
    target: HTMLElement;
    strategy: MoveableStrategy;
    startX: number;
    startY: number;
    startLeft: number;
    startTop: number;
    x: number;
    y: number;
    deltaX: number;
    deltaY: number;
    left: number;
    top: number;
    scrollLeft: number;
    scrollTop: number;
    startClientLeft: number;
    startClientTop: number;
    width: number;
    height: number;
};
```

来源：[src/types/moveable-state.ts](src/types/moveable-state.ts)。

```ts
export type MoveableStrategy = 'position' | 'transform' | 'scroll' | 'none';
```

来源：[src/types/moveable-strategy.ts](src/types/moveable-strategy.ts)。

```ts
export interface DistanceRect {
    left: number;
    top: number;
    right: number;
    bottom: number;
}
```

来源：[src/types/edge-detection.ts](src/types/edge-detection.ts)。


### types-resizable

```json
{"name": "ResizableOptions / ResizableState / ResizableDirection", "summary": "调整尺寸的选项、更新结果和方向。"}
```

以下类型从 @zui/dnd 导出；可选字段未给值时使用对应类说明中的默认行为。

```ts
export type ResizableUpdateInfo = {
    style?: CSSProperties;
};
export type ResizableContainerPadding = number
    | Partial<DistanceRect>
    | ((target: HTMLElement, state: ResizableState | undefined) => number | Partial<DistanceRect>);
export type ResizableOptions = {
    selector?: 'self' | (string & {});
    hasResizingClass?: string;
    resizingClass?: string;
    container?: MoveableContainer;
    containerPadding?: ResizableContainerPadding;
    minWidth?: number;
    minHeight?: number;
    maxWidth?: number;
    maxHeight?: number;
    onChange?: (newState: ResizableState, oldState: ResizableState | undefined, event: MouseEvent) => void | false | Partial<ResizableState>;
    onResizeStart?: (event: MouseEvent, target: HTMLElement, direction: ResizableDirection) => void | boolean;
    onResize?: (event: MouseEvent, state: ResizableState) => void;
    onResizeEnd?: (event: MouseEvent, state: ResizableState) => void;
    onUpdate?: (info: ResizableUpdateInfo, state: ResizableState) => void | false | Partial<ResizableUpdateInfo>;
};
```

来源：[src/types/resizable-option.ts](src/types/resizable-option.ts)。

```ts
export type ResizableDirection = 'n' | 'e' | 's' | 'w' | 'ne' | 'nw' | 'se' | 'sw';
export type ResizableState = {
    event: MouseEvent;
    direction: ResizableDirection;
    startX: number;
    startY: number;
    x: number;
    y: number;
    startLeft: number;
    startTop: number;
};
```

来源：[src/types/resizable-state.ts](src/types/resizable-state.ts)。

## recipes

浮动面板可在同一根节点分别创建 Moveable({selector:"self",handle:".title"}) 和 Resizable({selector:"self"})，限制 Moveable 的 handle 避免争抢尺寸手柄的 mousedown；卸载时销毁两个实例。

## constraints

使用鼠标事件和原生 HTML5 拖放，不提供键盘排序或触控手势的完整替代。回调维护业务数据；destroy 在组件移除前调用。不要把拖拽位置变动当作数组排序。

## references

- [包入口](package.json)
- [公开导出](src/main.ts)
