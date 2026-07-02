# 可调大小

`Resizable` 基于鼠标事件实现元素尺寸调整。它会自动在目标元素上生成八个方向（上、下、左、右及四角）的缩放手柄，拖动手柄即可改变元素大小；拖动上边或左边时，会通过 `transform` 同步调整元素位置。还可设置最小/最大尺寸以及区域限制。

## 使用方法

### 基础用法

把 `selector` 设为 `self`，直接对组件根元素启用尺寸调整。将鼠标移到元素边缘或四角，即可看到缩放手柄。

::: tabs

== 示例

<Example>
  <div id="resizableArea" class="ring rounded relative w-full" style="height: 240px;">
    <div id="resizableBasic" class="center rounded canvas ring absolute" style="width: 140px; height: 100px; left: 24px; top: 24px;">调整我的大小</div>
  </div>
</Example>

== HTML

```html
<div id="resizableArea" class="ring rounded relative w-full" style="height: 240px;">
  <div id="resizableBasic" class="center rounded canvas ring absolute" style="width: 140px; height: 100px; left: 24px; top: 24px;">调整我的大小</div>
</div>

<script>
new zui.Resizable('#resizableBasic', {
    selector: 'self',
    container: 'parent',
    containerPadding: 8,
});
</script>
```

:::

### 限制最小与最大尺寸

通过 `minWidth`、`minHeight`、`maxWidth`、`maxHeight` 限定元素可调整的尺寸范围。

::: tabs

== 示例

<Example>
  <div class="ring rounded relative w-full" style="height: 240px;">
    <div id="resizableLimit" class="center rounded primary-pale absolute" style="width: 140px; height: 100px; left: 24px; top: 24px;">100~240 × 80~180</div>
  </div>
</Example>

== HTML

```html
<div class="ring rounded relative w-full" style="height: 240px;">
  <div id="resizableLimit" class="center rounded primary-pale absolute" style="width: 140px; height: 100px; left: 24px; top: 24px;">100~240 × 80~180</div>
</div>

<script>
new zui.Resizable('#resizableLimit', {
    selector: 'self',
    minWidth: 100,
    maxWidth: 240,
    minHeight: 80,
    maxHeight: 180,
});
</script>
```

:::

## 缩放手柄

组件初始化时会自动为每个目标元素生成八个方向的手柄（`n`、`e`、`s`、`w`、`ne`、`nw`、`se`、`sw`），并在根元素上添加 `resizable` 类。手柄外观由 `resizable.css` 提供，可通过以下 CSS 变量调整：

- `--side-handle-width`：上下左右边缘手柄的厚度。
- `--side-handle-shift`：边缘手柄两端相对容器边界的内缩距离。
- `--side-handle-color`：手柄在 hover 或拖拽中时的高亮颜色。
- `--corner-handle-width`：四角手柄的宽高尺寸。

如果目标元素内容发生变化需要重新生成手柄，可调用实例的 `refresh()` 方法。

## 区域限制

`container` 与 `containerPadding` 的含义同[可移动](/lib/components/dnd/moveable/)组件，用于把调整后的元素约束在指定区域内：

- `false`：不限制。
- `'window'`（默认）：当前窗口视口。
- `'self'`：组件根元素自身区域。
- `'parent'`：组件根元素的父元素。
- CSS 选择器字符串、`HTMLElement` 或任意提供 `getBoundingClientRect()` 的对象。

## 选项

<Props>
/** 要调整尺寸的元素选择器，设为 "self" 表示调整组件根元素自身。 */
selector?: 'self' | string = "[resizable=\"true\"]";

/** 最小宽度。 */
minWidth?: number = 0;

/** 最小高度。 */
minHeight?: number = 0;

/** 最大宽度。 */
maxWidth?: number;

/** 最大高度。 */
maxHeight?: number;

/** 尺寸调整区域限制。 */
container?: false | 'window' | 'self' | 'parent' | string | HTMLElement = "window";

/** 元素距区域边缘的间距，允许负值。 */
containerPadding?: number | {top?: number; right?: number; bottom?: number; left?: number};

/** 元素调整尺寸时添加到组件根元素的类名。 */
hasResizingClass?: string = "has-resizing";

/** 元素调整尺寸时添加到目标元素的类名。 */
resizingClass?: string = "is-resizing";
</Props>

## 事件

<Props>
/** 尺寸调整开始时触发，返回 false 可取消本次调整。 */
onResizeStart?: (event: MouseEvent, target: HTMLElement, direction: ResizableDirection) => void | boolean;

/** 尺寸调整过程中持续触发。 */
onResize?: (event: MouseEvent, state: ResizableState) => void;

/** 尺寸调整结束时触发。 */
onResizeEnd?: (event: MouseEvent, state: ResizableState) => void;

/** 尺寸状态变更时触发；返回 false 取消调整，返回部分状态对象（Partial ResizableState）可修正结果。 */
onChange?: (newState: ResizableState, oldState: ResizableState | undefined, event: MouseEvent) => void | false | object;

/** 应用样式前触发；返回 false 取消更新，返回部分信息对象（Partial ResizableUpdateInfo）可修正写入的样式。 */
onUpdate?: (info: ResizableUpdateInfo, state: ResizableState) => void | false | object;
</Props>

## 属性与方法

- `state`：当前缩放状态，空闲时为 `undefined`。
- `resizeElement`：当前正在被调整尺寸的元素。
- `handles`：所有缩放手柄元素。
- `refresh()`：重新生成缩放手柄。
- `destroy()`：销毁组件，移除生成的手柄与事件监听。

## 引入

```js
import {Resizable} from '@zui/dnd';

const resizable = new Resizable('#panel', {
    selector: 'self',
    minWidth: 100,
    minHeight: 80,
});
```

也可以通过全局对象 `zui` 使用：

```js
const resizable = new zui.Resizable('#panel', options);
```

<script>
export default {
    mounted() {
        onZUIReady(() => {
            new zui.Resizable('#resizableBasic', {
                selector: 'self',
                container: 'parent',
                containerPadding: 8,
            });

            new zui.Resizable('#resizableLimit', {
                selector: 'self',
                minWidth: 100,
                maxWidth: 240,
                minHeight: 80,
                maxHeight: 180,
            });
        });
    },
};
</script>
