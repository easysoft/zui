/**
 * 拖放组件的运行时状态。
 * Runtime state of the Draggable component.
 */
export type DraggableState = {
    /**
     * 当前正在被拖拽的元素，无拖拽操作时为 `null`。
     * The element currently being dragged, or `null` when idle.
     */
    dragging: HTMLElement | null;

    /**
     * 当前悬停的放置目标元素，无放置目标时为 `null`。
     * The drop target element currently being hovered, or `null` when not over any target.
     */
    dropping: HTMLElement | null;
};
