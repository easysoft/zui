import type {MoveableState} from './moveable-state';
import type {MoveableStrategy} from './moveable-strategy';

export type MoveableOptions = {
    /**
     * 要移动的元素的选择器。
     * The selector to find moveable elements.
     */
    selector?: 'self' | (string & {});

    /**
     * 用于触发移动的元素的选择器。
     * The selector to find handle elements.
     */
    handle?: string;

    /**
     * 当有元素被移动时添加到根元素上的类名。
     * The class name added to the root element when an element is moving.
     */
    hasMovingClass?: string;

    /**
     * 当有元素被移动时添加到移动元素上的类名。
     * The class name added to the moveable element when an element is moving.
     */
    movingClass?: string;

    /**
     * 移动策略，包括："position"、"transform"、"scroll"、"none"（不进行实际移动）
     * The move strategy, including: "position", "transform", "scroll", "none" (no actual move).
     */
    move?: boolean | MoveableStrategy;

    /**
     * 当有元素位置变更时触发。
     * Triggered when the position of an element changes.
     *
     * @param newState 新的移动状态。New moveable state.
     * @param oldState 旧的移动状态。Old moveable state.
     * @param event    事件对象。Event object.
     * @returns
     */
    onChange?: (newState: MoveableState, oldState: MoveableState | undefined, event: MouseEvent) => void;

    /**
     * 在移动开始时触发。
     * Triggered when moving starts.
     *
     * @param event  鼠标事件对象。Mouse event object.
     * @param target 移动的目标元素。The moveable target element.
     * @returns 如果返回 false，则取消移动。If returns false, the moving is canceled.
     */
    onMoveStart?: (event: MouseEvent, target: HTMLElement) => void | boolean;

    /**
     * 在移动中触发。
     * Triggered when moving.
     *
     * @param event 鼠标事件对象。Mouse event object.
     * @param state 移动状态。Moveable state.
     * @returns
     */
    onMove?: (event: MouseEvent, state: MoveableState) => void;

    /**
     * 在移动结束时触发。
     * Triggered when moving ends.
     *
     * @param event 鼠标事件对象。Mouse event object.
     * @param state 移动状态。Moveable state.
     * @returns
     */
    onMoveEnd?: (event: MouseEvent, state: MoveableState) => void;
};
