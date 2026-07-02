import type {CSSProperties} from 'preact';
import type {DistanceRect} from './edge-detection';
import type {MoveableContainer} from './moveable-options';
import type {ResizableDirection, ResizableState} from './resizable-state';

export type ResizableUpdateInfo = {
    style?: CSSProperties;
};

/**
 * 尺寸调整区域的边距限制。可为固定数值/四边对象，或一个动态返回边距的函数（参数为当前被调整尺寸的元素与当前调整状态，未在调整时状态为 undefined）。
 * The area padding constraint. Either a fixed number/per-side object, or a function that dynamically returns the padding (its arguments are the element currently being resized and the current resize state, which is undefined when idle).
 */
export type ResizableContainerPadding = number
    | Partial<DistanceRect>
    | ((target: HTMLElement, state: ResizableState | undefined) => number | Partial<DistanceRect>);

export type ResizableOptions = {
    /**
     * 要调整尺寸的元素选择器，默认为匹配所有标记了 resizable 属性的元素。
     * The selector to find resizable elements. Defaults to all elements with the [resizable="true"] attribute.
     */
    selector?: 'self' | (string & {});

    /**
     * 当有元素正在调整尺寸时添加到根元素上的类名。
     * The class name added to the root element when an element is resizing.
     */
    hasResizingClass?: string;

    /**
     * 当有元素正在调整尺寸时添加到目标元素上的类名。
     * The class name added to the target element when it is resizing.
     */
    resizingClass?: string;

    /**
     * 尺寸调整区域限制，将目标元素约束在指定区域内。
     * The resize area constraint that keeps the target element inside the given area.
     */
    container?: MoveableContainer;

    /**
     * 元素距区域边缘的间距。也可传入一个函数，根据当前被调整尺寸的元素与当前调整状态动态返回边距值。
     * The gap between the element and the area edges. A function can also be passed to dynamically return the padding based on the element currently being resized and the current resize state.
     */
    containerPadding?: ResizableContainerPadding;

    /** 最小宽度。Minimum width. */
    minWidth?: number;

    /** 最小高度。Minimum height. */
    minHeight?: number;

    /** 最大宽度。Maximum width. */
    maxWidth?: number;

    /** 最大高度。Maximum height. */
    maxHeight?: number;

    /**
     * 当尺寸状态变更时触发。
     * Triggered when the resize state changes.
     */
    onChange?: (newState: ResizableState, oldState: ResizableState | undefined, event: MouseEvent) => void | false | Partial<ResizableState>;

    /**
     * 在尺寸调整开始时触发，如果返回 false，则取消调整。
     * Triggered when resizing starts. If returns false, the resize is canceled.
     */
    onResizeStart?: (event: MouseEvent, target: HTMLElement, direction: ResizableDirection) => void | boolean;

    /**
     * 在尺寸调整中触发。
     * Triggered while resizing.
     */
    onResize?: (event: MouseEvent, state: ResizableState) => void;

    /**
     * 在尺寸调整结束时触发。
     * Triggered when resizing ends.
     */
    onResizeEnd?: (event: MouseEvent, state: ResizableState) => void;

    /**
     * 在尺寸样式更新时触发。
     * Triggered when resize styles are updated.
     */
    onUpdate?: (info: ResizableUpdateInfo, state: ResizableState) => void | false | Partial<ResizableUpdateInfo>;
};
