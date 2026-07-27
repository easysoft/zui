import {Selector} from '@zui/core';
import {DraggableState} from './draggable-state';

/**
 * 拖放组件配置项。
 * Options for the Draggable component.
 */
export type DraggableOptions = {
    /**
     * 可拖拽元素的 CSS 选择器，用于在容器内匹配可拖拽子元素。
     * CSS selector to match draggable child elements within the container.
     */
    selector?: string;

    /**
     * 拖拽事件的监听容器，默认为组件根元素。
     * The container element for drag event listeners. Defaults to the component root element.
     */
    dragContainer?: Selector;

    /**
     * 放置事件的监听容器，默认与 dragContainer 相同。
     * The container element for drop event listeners. Defaults to the same as dragContainer.
     */
    dropContainer?: Selector;

    /**
     * 拖拽手柄的 CSS 选择器，仅当点击在手柄区域内时才触发拖拽。
     * CSS selector for the drag handle. Dragging only starts when the click originates within this element.
     */
    handle?: string;

    /**
     * 当有元素正在被拖拽时，添加到组件根元素上的 CSS 类名。
     * CSS class added to the component root element while a drag operation is in progress.
     */
    hasDraggingClass?: string;

    /**
     * 正在被拖拽的元素上添加的 CSS 类名。
     * CSS class added to the element currently being dragged.
     */
    draggingClass?: string;

    /**
     * 放置目标的选择器或生成函数。字符串时作为 CSS 选择器；函数时接收拖拽元素，返回目标元素的选择器。
     * Selector (or factory function) for valid drop targets. When a string, used as a CSS selector;
     * when a function, receives the drag element and returns a Selector for drop targets.
     */
    target?: string | ((dragElement: HTMLElement) => Selector);

    /**
     * 添加到合法放置目标元素上的 CSS 类名，在拖拽开始时添加。
     * CSS class added to valid drop target elements when a drag operation starts.
     */
    droppableClass?: string;

    /**
     * 当拖拽元素悬停在放置目标上方时，添加到该放置目标的 CSS 类名。
     * CSS class added to a drop target while a dragged element hovers over it.
     */
    droppingClass?: string;

    /**
     * 拖放操作的效果类型，对应 `DataTransfer.dropEffect`。
     * The drop effect for the drag operation, mapped to `DataTransfer.dropEffect`.
     */
    dropEffect?: 'copy' | 'move' | 'link' | 'none';

    /**
     * 拖放状态变化时的回调。
     * Callback invoked when the drag/drop state changes.
     *
     * @param newState 新的拖放状态。New drag/drop state.
     * @param oldState 旧的拖放状态。Previous drag/drop state.
     */
    onChange?: (newState: DraggableState, oldState: DraggableState) => void;

    /**
     * 在拖拽开始前（mousedown 阶段）触发，返回 `false` 可阻止拖拽。
     * Called on mousedown before a drag starts. Return `false` to prevent the drag.
     *
     * @param event  鼠标事件。The mouse event.
     * @param dragElement 即将被拖拽的元素。The element about to be dragged.
     */
    beforeDrag?: (event: MouseEvent, dragElement: HTMLElement) => void | boolean;

    /**
     * 原生 dragstart 事件触发时的回调，返回 `false` 可取消本次拖拽。
     * Called when the native dragstart event fires. Return `false` to cancel the drag.
     *
     * @param event  拖拽事件。The drag event.
     * @param dragElement 被拖拽的元素。The dragged element.
     */
    onDragStart?: (event: DragEvent, dragElement: HTMLElement) => void | boolean;

    /**
     * 拖拽过程中持续触发的回调。
     * Called repeatedly while the element is being dragged.
     *
     * @param event  拖拽事件。The drag event.
     * @param dragElement 被拖拽的元素。The dragged element.
     */
    onDrag?: (event: DragEvent, dragElement: HTMLElement) => void;

    /**
     * 拖拽结束时触发的回调。
     * Called when the drag operation ends.
     *
     * @param event  拖拽事件。The drag event.
     * @param dragElement 被拖拽的元素。The dragged element.
     */
    onDragEnd?: (event: DragEvent, dragElement: HTMLElement) => void;

    /**
     * 拖拽元素进入放置目标时触发的回调。
     * Called when the dragged element enters a drop target.
     *
     * @param event  拖拽事件。The drag event.
     * @param dragElement 被拖拽的元素。The dragged element.
     * @param dropElement 进入的放置目标元素。The drop target element being entered.
     */
    onDragEnter?: (event: DragEvent, dragElement: HTMLElement, dropElement: HTMLElement) => void;

    /**
     * 拖拽元素在放置目标上方移动时持续触发的回调。
     * Called repeatedly while the dragged element moves over a drop target.
     *
     * @param event  拖拽事件。The drag event.
     * @param dragElement 被拖拽的元素。The dragged element.
     * @param dropElement 正在悬停的放置目标元素。The drop target element being hovered.
     */
    onDragOver?: (event: DragEvent, dragElement: HTMLElement, dropElement: HTMLElement) => void;

    /**
     * 拖拽元素离开放置目标时触发的回调。
     * Called when the dragged element leaves a drop target.
     *
     * @param event  拖拽事件。The drag event.
     * @param dragElement 被拖拽的元素。The dragged element.
     * @param dropElement 离开的放置目标元素。The drop target element being left.
     */
    onDragLeave?: (event: DragEvent, dragElement: HTMLElement, dropElement: HTMLElement) => void;

    /**
     * 判断拖拽元素是否可以放置到目标上的回调，返回 `false` 表示不允许放置。
     * Called to determine if a dragged element can be dropped on a target. Return `false` to disallow the drop.
     *
     * @param event  拖拽事件。The drag event.
     * @param dragElement 被拖拽的元素。The dragged element.
     * @param dropElement 放置目标元素。The potential drop target element.
     */
    canDrop?: (event: DragEvent, dragElement: HTMLElement, dropElement: HTMLElement) => boolean | void;

    /**
     * 拖拽元素被放置到目标上时触发的回调。
     * Called when a dragged element is dropped onto a target.
     *
     * @param event  拖拽事件。The drag event.
     * @param dragElement 被拖拽的元素。The dragged element.
     * @param dropElement 放置目标元素。The drop target element.
     */
    onDrop?: (event: DragEvent, dragElement: HTMLElement, dropElement: HTMLElement) => void;
};
