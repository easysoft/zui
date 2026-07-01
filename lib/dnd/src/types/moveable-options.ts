import type {CSSProperties} from 'preact';
import type {MoveableState} from './moveable-state';
import type {MoveableStrategy} from './moveable-strategy';

export type MoveableUpdateInfo = {
    style?: CSSProperties;
    scrollLeft?: number;
    scrollTop?: number;
};

export type MoveableOptions = {
    /**
     * 要移动的元素的选择器，默认为匹配所有标记了 moveable 属性的元素（[moveable="true"]）。
     * The selector to find moveable elements. Defaults to all elements with the [moveable="true"] attribute.
     */
    selector?: 'self' | (string & {});

    /**
     * 用于触发移动的元素的选择器，如果不指定则点击被拖动元素本身就会触发移动。
     * The selector to find handle elements. If not specified, clicking on the moveable element itself will trigger the move.
     */
    handle?: string;

    /**
     * 当有元素被移动时添加到根元素上的类名，默认为 "has-moving"。
     * The class name added to the root element when an element is moving. Defaults to "has-moving".
     */
    hasMovingClass?: string;

    /**
     * 当有元素被移动时添加到移动元素上的类名，默认为 "is-moving"。
     * The class name added to the moveable element when an element is moving. Defaults to "is-moving".
     */
    movingClass?: string;

    /**
     * 移动策略，包括："position"、"transform"、"scroll"、"none"（不进行实际移动），默认值为 true（自动根据元素的 position 属性推断）。
     * The move strategy, including: "position", "transform", "scroll", "none" (no actual move). Defaults to true (automatically infer from the element's position attribute).
     */
    move?: boolean | MoveableStrategy;

    /**
     * 当有元素位置变更时触发。
     * Triggered when the position of an element changes.
     *
     * @param newState 新的移动状态。New moveable state.
     * @param oldState 旧的移动状态。Old moveable state.
     * @param event    事件对象。Event object.
     * @returns 如果返回 false，则取消移动。If returns false, the moving is canceled.
     * @returns 如果返回部分移动状态，则更新移动状态。If returns partial move state, update the move state.
     */
    onChange?: (newState: MoveableState, oldState: MoveableState | undefined, event: MouseEvent) => void | false | Partial<MoveableState>;

    /**
     * 在移动开始时触发，如果返回 false，则取消移动。
     * Triggered when moving starts. If returns false, the moving is canceled.
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

    /**
     * 在移动状态更新时触发。
     * Triggered when the moveable state is updated.
     *
     * @param info 更新信息。Update information.
     * @param state 移动状态。Moveable state.
     * @returns 如果返回 false，则取消更新。If returns false, the update is canceled.
     * @returns 如果返回部分更新信息，则更新更新信息。If returns partial update information, update the update information.
     * @returns
     */
    onUpdate?: (info: MoveableUpdateInfo, state: MoveableState) => void | false | Partial<MoveableUpdateInfo>;
};
