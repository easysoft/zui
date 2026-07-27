# 拖拽

`Draggable` 基于浏览器原生的 HTML5 拖放 API 实现，用于把容器内的元素拖拽到放置目标上。它负责管理拖拽源、放置目标、拖拽手柄以及各阶段的状态类名，并提供覆盖整个拖放生命周期的回调，具体的业务逻辑（如排序、移动数据）由你在回调中实现。

## 使用方法

### 基础用法

在容器上创建 `Draggable`，容器内所有匹配 `selector`（默认 `[draggable="true"]`）的子元素既是拖拽源，也是彼此的放置目标。下面的示例在 `onDrop` 回调中把被拖拽的元素插入到放置目标之前，实现一个简单的列表排序。

::: tabs

== 示例

<Example>
  <menu id="draggableBasic" class="col gap-2 w-48">
    <li draggable="true" class="item ring rounded p-2 canvas cursor-move">列表项 1</li>
    <li draggable="true" class="item ring rounded p-2 canvas cursor-move">列表项 2</li>
    <li draggable="true" class="item ring rounded p-2 canvas cursor-move">列表项 3</li>
    <li draggable="true" class="item ring rounded p-2 canvas cursor-move">列表项 4</li>
  </menu>
</Example>

== HTML

```html
<menu id="draggableBasic" class="col gap-2 w-48">
  <li draggable="true" class="item ring rounded p-2 canvas cursor-move">列表项 1</li>
  <li draggable="true" class="item ring rounded p-2 canvas cursor-move">列表项 2</li>
  <li draggable="true" class="item ring rounded p-2 canvas cursor-move">列表项 3</li>
  <li draggable="true" class="item ring rounded p-2 canvas cursor-move">列表项 4</li>
</menu>

<script>
new zui.Draggable('#draggableBasic', {
    onDrop(event, dragElement, dropElement) {
        if (dragElement !== dropElement) {
            dropElement.parentNode.insertBefore(dragElement, dropElement);
        }
    },
});
</script>
```

:::

### 拖拽到放置目标

通过 `target` 选项单独指定放置目标（CSS 选择器或返回选择器的函数）。此时拖拽源与放置目标是两组不同的元素，只有 `target` 匹配到的元素才会被高亮为可放置区域。

::: tabs

== 示例

<Example class="row gap-6 items-start">
  <div id="draggableTarget" class="row gap-6 items-start">
    <div class="col gap-2 w-32">
      <div draggable="true" class="item ring rounded p-2 canvas cursor-move text-center">文件 A</div>
      <div draggable="true" class="item ring rounded p-2 canvas cursor-move text-center">文件 B</div>
      <div draggable="true" class="item ring rounded p-2 canvas cursor-move text-center">文件 C</div>
    </div>
    <div id="draggableDropZone" class="col gap-2 center w-40 h-40 ring rounded text-muted">拖放到此处</div>
  </div>
</Example>

== HTML

```html
<div id="draggableTarget" class="row gap-6 items-start">
  <div class="col gap-2 w-32">
    <div draggable="true" class="item ring rounded p-2 canvas cursor-move text-center">文件 A</div>
    <div draggable="true" class="item ring rounded p-2 canvas cursor-move text-center">文件 B</div>
    <div draggable="true" class="item ring rounded p-2 canvas cursor-move text-center">文件 C</div>
  </div>
  <div id="draggableDropZone" class="col gap-2 center w-40 h-40 ring rounded text-muted">拖放到此处</div>
</div>

<script>
new zui.Draggable('#draggableTarget', {
    target: '#draggableDropZone',
    onDrop(event, dragElement, dropElement) {
        dropElement.appendChild(dragElement);
    },
});
</script>
```

:::

### 使用拖拽手柄

设置 `handle` 后，只有在手柄区域内按下鼠标才会触发拖拽，元素其余部分不响应。

::: tabs

== 示例

<Example>
  <menu id="draggableHandle" class="col gap-2 w-56">
    <li draggable="true" class="item ring rounded canvas row items-center gap-2 pr-2">
      <span class="drag-handle center w-8 h-8 cursor-move text-muted">⣿</span>
      <span>可拖拽项 1</span>
    </li>
    <li draggable="true" class="item ring rounded canvas row items-center gap-2 pr-2">
      <span class="drag-handle center w-8 h-8 cursor-move text-muted">⣿</span>
      <span>可拖拽项 2</span>
    </li>
    <li draggable="true" class="item ring rounded canvas row items-center gap-2 pr-2">
      <span class="drag-handle center w-8 h-8 cursor-move text-muted">⣿</span>
      <span>可拖拽项 3</span>
    </li>
  </menu>
</Example>

== HTML

```html
<menu id="draggableHandle" class="col gap-2 w-56">
  <li draggable="true" class="item ring rounded canvas row items-center gap-2 pr-2">
    <span class="drag-handle center w-8 h-8 cursor-move text-muted">⣿</span>
    <span>可拖拽项 1</span>
  </li>
  <!-- 省略其余列表项 -->
</menu>

<script>
new zui.Draggable('#draggableHandle', {
    handle: '.drag-handle',
    onDrop(event, dragElement, dropElement) {
        if (dragElement !== dropElement) {
            dropElement.parentNode.insertBefore(dragElement, dropElement);
        }
    },
});
</script>
```

:::

## 状态类名

拖放过程中，组件会在相关元素上自动添加以下类名，可用于编写高亮、占位等视觉反馈样式：

- `has-dragging`：拖拽进行中时添加到组件根元素。
- `is-dragging`：添加到正在被拖拽的元素。
- `is-droppable`：拖拽开始时添加到所有合法放置目标。
- `is-dropping`：添加到当前正被悬停的放置目标。

类名均可通过对应选项（`hasDraggingClass`、`draggingClass`、`droppableClass`、`droppingClass`）自定义，设为空字符串可关闭。

## 选项

<Props>
/** 可拖拽元素的 CSS 选择器，用于在容器内匹配拖拽源。 */
selector?: string = "[draggable=\"true\"]";

/** 放置目标的选择器，或接收拖拽元素返回选择器的函数；默认与拖拽源相同。 */
target?: string | ((dragElement: HTMLElement) => Selector);

/** 拖拽手柄的 CSS 选择器，仅当在手柄区域内按下鼠标时才触发拖拽。 */
handle?: string;

/** 拖拽事件的监听容器，默认为组件根元素。 */
dragContainer?: Selector;

/** 放置事件的监听容器，默认与 dragContainer 相同。 */
dropContainer?: Selector;

/** 拖放操作的效果类型，对应 DataTransfer.dropEffect。 */
dropEffect?: 'copy' | 'move' | 'link' | 'none' = "move";

/** 拖拽进行中时添加到组件根元素的类名。 */
hasDraggingClass?: string = "has-dragging";

/** 添加到正在被拖拽元素的类名。 */
draggingClass?: string = "is-dragging";

/** 添加到合法放置目标的类名。 */
droppableClass?: string = "is-droppable";

/** 添加到当前悬停放置目标的类名。 */
droppingClass?: string = "is-dropping";
</Props>

## 事件

<Props>
/** 拖拽开始前（mousedown 阶段）触发，返回 false 可阻止拖拽。 */
beforeDrag?: (event: MouseEvent, dragElement: HTMLElement) => void | boolean;

/** 原生 dragstart 触发时调用，返回 false 可取消本次拖拽。 */
onDragStart?: (event: DragEvent, dragElement: HTMLElement) => void | boolean;

/** 拖拽过程中持续触发。 */
onDrag?: (event: DragEvent, dragElement: HTMLElement) => void;

/** 判断拖拽元素能否放置到目标上，返回 false 表示不允许。 */
canDrop?: (event: DragEvent, dragElement: HTMLElement, dropElement: HTMLElement) => boolean | void;

/** 拖拽元素进入放置目标时触发。 */
onDragEnter?: (event: DragEvent, dragElement: HTMLElement, dropElement: HTMLElement) => void;

/** 拖拽元素在放置目标上方移动时持续触发。 */
onDragOver?: (event: DragEvent, dragElement: HTMLElement, dropElement: HTMLElement) => void;

/** 拖拽元素离开放置目标时触发。 */
onDragLeave?: (event: DragEvent, dragElement: HTMLElement, dropElement: HTMLElement) => void;

/** 拖拽元素被放置到目标上时触发。 */
onDrop?: (event: DragEvent, dragElement: HTMLElement, dropElement: HTMLElement) => void;

/** 拖拽结束时触发。 */
onDragEnd?: (event: DragEvent, dragElement: HTMLElement) => void;

/** 拖放状态（拖拽元素或放置目标）发生变化时触发。 */
onChange?: (newState: DraggableState, oldState: DraggableState) => void;
</Props>

## 属性与方法

- `state`：当前拖放状态 `{dragging, dropping}`。
- `dragElement`：当前正在被拖拽的元素，无拖拽时为 `null`。
- `dropElement`：当前悬停的放置目标，无目标时为 `null`。
- `destroy()`：销毁组件，移除所有事件监听并清理状态类名。

## 引入

```js
import {Draggable} from '@zui/dnd';

const draggable = new Draggable('#list', {
    onDrop(event, dragElement, dropElement) {
        dropElement.parentNode.insertBefore(dragElement, dropElement);
    },
});
```

也可以通过全局对象 `zui` 使用：

```js
const draggable = new zui.Draggable('#list', options);
```

<script>
export default {
    mounted() {
        onZUIReady(() => {
            new zui.Draggable('#draggableBasic', {
                onDrop(event, dragElement, dropElement) {
                    if (dragElement !== dropElement) {
                        dropElement.parentNode.insertBefore(dragElement, dropElement);
                    }
                },
            });

            new zui.Draggable('#draggableTarget', {
                target: '#draggableDropZone',
                onDrop(event, dragElement, dropElement) {
                    dropElement.appendChild(dragElement);
                },
            });

            new zui.Draggable('#draggableHandle', {
                handle: '.drag-handle',
                onDrop(event, dragElement, dropElement) {
                    if (dragElement !== dropElement) {
                        dropElement.parentNode.insertBefore(dragElement, dropElement);
                    }
                },
            });
        });
    },
};
</script>

<style>
.is-dragging {
  opacity: 0.4;
}
.is-droppable {
  outline: 1px dashed var(--color-primary-400);
  outline-offset: 2px;
}
.is-dropping {
  background-color: var(--color-primary-100);
  border-color: var(--color-primary-500);
}
</style>
