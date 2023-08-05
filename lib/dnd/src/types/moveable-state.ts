import {MoveableStrategy} from './moveable-strategy';

export type MoveableState = {
    target: HTMLElement,
    strategy: MoveableStrategy,
    startX: number,
    startY: number,
    startLeft: number,
    startTop: number,
    x: number,
    y: number,
    deltaX: number,
    deltaY: number,
    left: number,
    top: number,
};
