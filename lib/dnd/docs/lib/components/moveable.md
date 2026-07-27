# 可移动

`Moveable` 基于鼠标事件实现元素的自由移动。它会在按下鼠标后跟随指针实时移动目标元素，支持 `position`、`transform`、`scroll`、`none` 四种移动策略，并可将元素约束在指定区域内。与基于原生拖放 API 的[拖拽](/lib/components/dnd/draggable/)不同，`Moveable` 适合用于自由拖动的浮层、看板卡片、画布节点等场景。

## 使用方法

### 基础用法

在容器上创建 `Moveable`，容器内所有匹配 `selector`（默认 `[moveable="true"]`）的子元素都可以被拖动。下面示例把 `container` 设为 `self`，使元素被约束在容器区域内移动。

::: tabs

== 示例

<Example>
  <div id="moveableBasic" class="ring rounded relative w-full" style="height: 220px;">
    <div moveable="true" class="center rounded primary cursor-move absolute" style="width: 72px; height: 72px; left: 16px; top: 16px;">拖我</div>
    <div moveable="true" class="center rounded secondary cursor-move absolute" style="width: 72px; height: 72px; left: 120px; top: 80px;">拖我</div>
  </div>
</Example>

== HTML

```html
<div id="moveableBasic" class="ring rounded relative w-full" style="height: 220px;">
  <div moveable="true" class="center rounded primary cursor-move absolute" style="width: 72px; height: 72px; left: 16px; top: 16px;">拖我</div>
  <div moveable="true" class="center rounded secondary cursor-move absolute" style="width: 72px; height: 72px; left: 120px; top: 80px;">拖我</div>
</div>

<script>
new zui.Moveable('#moveableBasic', {
    container: 'self',
    containerPadding: 8,
});
</script>
```

:::

### 使用移动手柄

设置 `handle` 后，只有在手柄区域内按下鼠标才能移动元素，常用于「标题栏拖动整个面板」的场景。

::: tabs

== 示例

<Example>
  <div id="moveableHandle" class="ring rounded relative w-full" style="height: 220px;">
    <div moveable="true" class="ring rounded canvas absolute overflow-hidden" style="width: 180px; left: 24px; top: 24px;">
      <div class="move-handle primary px-3 py-2 cursor-move">面板标题</div>
      <div class="p-3 text-muted">按住标题栏拖动整个面板。</div>
    </div>
  </div>
</Example>

== HTML

```html
<div id="moveableHandle" class="ring rounded relative w-full" style="height: 220px;">
  <div moveable="true" class="ring rounded canvas absolute overflow-hidden" style="width: 180px; left: 24px; top: 24px;">
    <div class="move-handle primary px-3 py-2 cursor-move">面板标题</div>
    <div class="p-3 text-muted">按住标题栏拖动整个面板。</div>
  </div>
</div>

<script>
new zui.Moveable('#moveableHandle', {
    handle: '.move-handle',
    container: 'self',
    containerPadding: 8,
});
</script>
```

:::

## 移动策略

`move` 选项决定元素在屏幕上如何被实际移动：

- `true`（默认）：根据元素的 `position` 自动推断。`fixed`/`absolute` 使用 `position` 策略，其余使用 `transform` 策略。
- `'position'`：修改 CSS `left`/`top`，要求元素为定位元素。
- `'transform'`：修改 CSS `transform: translate()`。
- `'scroll'`：调整容器的 `scrollLeft`/`scrollTop`，实现拖动滚动。
- `'none'`：不进行实际移动，仅触发回调，便于实现自定义移动逻辑。

区域限制（`container` / `containerPadding`）仅对 `position` 和 `transform` 策略生效。

## 区域限制

`container` 用于把被移动的元素约束在某个区域内：

- `false`：不限制。
- `'window'`（默认）：当前窗口视口。
- `'self'`：组件根元素自身区域。
- `'parent'`：组件根元素的父元素。
- CSS 选择器字符串、`HTMLElement` 或任意提供 `getBoundingClientRect()` 的对象：对应元素或对象的区域。

`containerPadding` 设置元素距区域边缘的间距，可传入单个数值或分别指定 `top`/`right`/`bottom`/`left`。允许使用负值，表示区域向外扩展，元素可以移出边缘对应的距离。

`containerPadding` 也可以传入一个函数，根据当前被移动的元素与当前移动状态动态返回上述间距值（未在移动时状态参数为 `undefined`）：

```js
new zui.Moveable('#board', {
    container: 'parent',
    containerPadding: (target, state) => (target.classList.contains('large') ? 24 : {top: 8, bottom: 8}),
});
```

开启 `autoUpdate` 后，当容器区域或目标尺寸/位置发生变化（窗口缩放、滚动等）时，会自动把已移动的元素重新校正到最近的合法位置。

## 选项

<Props>
/** 要移动的元素选择器，设为 "self" 表示移动组件根元素自身。 */
selector?: 'self' | string = "[moveable=\"true\"]";

/** 触发移动的手柄选择器，未指定时点击元素自身即可移动。 */
handle?: string;

/** 移动策略，true 表示根据元素定位方式自动推断。 */
move?: boolean | 'position' | 'transform' | 'scroll' | 'none' = true;

/** 移动区域限制，仅对 position/transform 策略生效。 */
container?: false | 'window' | 'self' | 'parent' | string | HTMLElement = "window";

/** 元素距区域边缘的间距，允许负值；也可传入函数，按当前被移动元素与移动状态动态返回间距。 */
containerPadding?: number | {top?: number; right?: number; bottom?: number; left?: number} | ((target: HTMLElement, state: MoveableState | undefined) => number | {top?: number; right?: number; bottom?: number; left?: number});

/** 容器区域或目标尺寸变化时，自动把元素重新校正到合法位置。 */
autoUpdate?: boolean | {resize?: boolean; scroll?: boolean; animationFrame?: boolean; targets?: 'last' | 'all'};

/** 元素移动时添加到组件根元素的类名。 */
hasMovingClass?: string = "has-moving";

/** 元素移动时添加到被移动元素的类名。 */
movingClass?: string = "is-moving";
</Props>

## 事件

<Props>
/** 移动开始时触发，返回 false 可取消本次移动。 */
onMoveStart?: (event: MouseEvent, target: HTMLElement) => void | boolean;

/** 移动过程中持续触发。 */
onMove?: (event: MouseEvent, state: MoveableState) => void;

/** 移动结束时触发。 */
onMoveEnd?: (event: MouseEvent, state: MoveableState) => void;

/** 位置状态变更时触发；返回 false 取消移动，返回部分状态对象（Partial MoveableState）可修正移动结果。 */
onChange?: (newState: MoveableState, oldState: MoveableState | undefined, event: MouseEvent) => void | false | object;

/** 应用样式前触发；返回 false 取消更新，返回部分信息对象（Partial MoveableUpdateInfo）可修正写入的样式。 */
onUpdate?: (info: MoveableUpdateInfo, state: MoveableState) => void | false | object;
</Props>

## 属性与方法

- `state`：当前移动状态，空闲时为 `undefined`。
- `moveElement`：当前正在被移动的元素。
- `update(state?)`：按给定或当前状态重新应用位置。
- `startAutoUpdate()` / `stopAutoUpdate()`：开启 / 停止自动校正。
- `destroy()`：销毁组件，移除事件监听并清理状态类名。

## 引入

```js
import {Moveable} from '@zui/dnd';

const moveable = new Moveable('#board', {
    container: 'self',
    containerPadding: 8,
});
```

也可以通过全局对象 `zui` 使用：

```js
const moveable = new zui.Moveable('#board', options);
```

<script>
export default {
    mounted() {
        onZUIReady(() => {
            new zui.Moveable('#moveableBasic', {
                container: 'self',
                containerPadding: 8,
            });

            new zui.Moveable('#moveableHandle', {
                handle: '.move-handle',
                container: 'self',
                containerPadding: 8,
            });
        });
    },
};
</script>
