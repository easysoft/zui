import {MoveableStrategy} from './moveable-strategy';

/**
 * 可移动组件的运行时状态，记录整个移动过程中的坐标与偏移信息。
 * Runtime state of the Moveable component, tracking coordinates and offsets throughout a move operation.
 */
export type MoveableState = {
    /** 当前关联的鼠标事件。The current mouse event. */
    event: MouseEvent;

    /** 正在被移动的目标元素。The target element being moved. */
    target: HTMLElement;

    /** 当前使用的移动策略。The movement strategy in use. */
    strategy: MoveableStrategy;

    /** 移动开始时目标元素的 CSS left 值。The target's CSS left value at move start. */
    startX: number;

    /** 移动开始时目标元素的 CSS top 值。The target's CSS top value at move start. */
    startY: number;

    /** 移动开始时目标元素的 left 偏移量。The target's left offset at move start. */
    startLeft: number;

    /** 移动开始时目标元素的 top 偏移量。The target's top offset at move start. */
    startTop: number;

    /** 当前鼠标 x 坐标。Current mouse x coordinate. */
    x: number;

    /** 当前鼠标 y 坐标。Current mouse y coordinate. */
    y: number;

    /** 累计 x 方向偏移量。Accumulated x-axis displacement. */
    deltaX: number;

    /** 累计 y 方向偏移量。Accumulated y-axis displacement. */
    deltaY: number;

    /** 目标元素当前的 left 值。The target's current left value. */
    left: number;

    /** 目标元素当前的 top 值。The target's current top value. */
    top: number;

    /** 滚动容器当前的 scrollLeft 值。The scroll container's current scrollLeft value. */
    scrollLeft: number;

    /** 滚动容器当前的 scrollTop 值。The scroll container's current scrollTop value. */
    scrollTop: number;
};
