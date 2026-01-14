import {MoveableStrategy} from './moveable-strategy';

export type MoveableState = {
    target: HTMLElement;
    strategy: MoveableStrategy;
    startX: number;
    startY: number;
    startLeft: number;
    startTop: number;
    x: number;
    y: number;
    deltaX: number;
    deltaY: number;
    left: number;
    top: number;
    scrollLeft: number;
    scrollTop: number;

    // 鼠标事件的坐标（screenX/screenY）
    // 拖动起始位置
    fromX: number;
    fromY: number;
    // 上次移动位置
    lastX: number;
    lastY: number;
};
