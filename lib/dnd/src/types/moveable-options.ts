import type {CSSProperties} from 'preact';
import type {DistanceRect} from './edge-detection';
import type {MoveableState} from './moveable-state';
import type {MoveableStrategy} from './moveable-strategy';

export type MoveableUpdateInfo = {
    style?: CSSProperties;
    scrollLeft?: number;
    scrollTop?: number;
};

/**
 * 移动区域限制目标。
 * The movement area constraint target.
 *
 * - `false`      不限制。No constraint.
 * - `'window'`   当前窗口视口。The current window viewport.
 * - `'self'`     组件根元素（this.element）。The component root element (this.element).
 * - `'parent'`   组件根元素的父元素（this.element.parentElement）。The parent of the root element.
 * - `string`     CSS 选择器指定的元素对应的区域。The element matched by a CSS selector.
 * - `HTMLElement` / `{getBoundingClientRect}` 给定的元素或提供 getBoundingClientRect 方法的对象。
 *                A given element or any object providing getBoundingClientRect.
 */
export type MoveableContainer = false
    | 'window'
    | 'self'
    | 'parent'
    | (string & {})
    | HTMLElement
    | {getBoundingClientRect(): DOMRect};

/**
 * autoUpdate 的精细控制选项。
 * Fine-grained control for autoUpdate.
 */
export type MoveableAutoUpdateOptions = {
    /**
     * 监听容器与目标元素的尺寸变化（基于 ResizeObserver 与 window 的 resize 事件）。默认 true。
     * Watch size changes of the container and the target via ResizeObserver and the window resize event. Defaults to true.
     */
    resize?: boolean;

    /**
     * 监听祖先滚动容器与窗口的滚动（基于 window 的捕获阶段 scroll 事件）。默认 true。
     * Watch scrolling of ancestor scroll containers and the window via a capture-phase scroll listener on window. Defaults to true.
     */
    scroll?: boolean;

    /**
     * 使用 requestAnimationFrame 持续轮询，以兼容无法被观察的容器（如仅提供 getBoundingClientRect 方法的普通对象）。
     * 默认 false；当 container 为此类无法观察的对象时会自动启用（可显式设为 false 关闭）。
     * Continuously poll via requestAnimationFrame to support containers that cannot be observed (e.g. plain objects that only provide a getBoundingClientRect method).
     * Defaults to false; auto-enabled when container is such an unobservable object (can be turned off explicitly by setting false).
     */
    animationFrame?: boolean;

    /**
     * 自动更新作用的目标范围：
     * - `'last'`（默认）仅重排最近一次被移动的元素。
     * - `'all'` 重排所有匹配 selector 的元素（selector 为 "self" 时即根元素）。
     * The scope of elements the auto-update applies to:
     * - `'last'` (default) re-clamps only the most recently moved element.
     * - `'all'` re-clamps every element matching the selector (the root element when selector is "self").
     */
    targets?: 'last' | 'all';
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
     * 移动区域限制，将被移动元素约束在指定区域内，默认为 "window"（当前窗口）。仅对 "position"/"transform" 策略生效。
     * The movement area constraint that keeps the moved element inside the given area. Defaults to "window". Only applies to the "position"/"transform" strategies.
     */
    container?: MoveableContainer;

    /**
     * 元素距区域边缘的间距。可传入单个数值同时控制上下左右，也可以分别指定 top/right/bottom/left。允许负值（负值表示区域向外扩展，元素可移出区域边缘对应的距离），缺省为 0。
     * The gap between the element and the area edges. Pass a single number to control all four sides, or specify top/right/bottom/left separately. Negative values are allowed (expanding the area outward so the element can move beyond the edges). Defaults to 0.
     */
    containerPadding?: number | Partial<DistanceRect>;

    /**
     * 是否在容器区域或目标元素的尺寸/位置发生变化时，自动按当前约束把已移动的元素重新校正到最近的合法位置。
     * 传入 true 开启（等价于 {resize: true, scroll: true}），也可传入对象进行精细控制。仅对 "position"/"transform" 策略生效。
     * 当 selector 为 "self" 时，即使尚未拖动过也会约束根元素。
     * Whether to automatically re-clamp the moved element to the nearest valid position under the current constraint when the container area or the target size/position changes.
     * Pass true to enable (equivalent to {resize: true, scroll: true}), or pass an object for fine-grained control. Only applies to the "position"/"transform" strategies.
     * When selector is "self", the root element is constrained even before it is moved.
     */
    autoUpdate?: boolean | MoveableAutoUpdateOptions;

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
