import type {MoveableState} from './moveable-state';
import type {MoveableStrategy} from './moveable-strategy';

export type MoveableOptions = {
    selector?: string;
    handle?: string;
    hasMovingClass?: string;
    movingClass?: string;
    move?: boolean | MoveableStrategy;
    onChange?: (newState: MoveableState, oldState: MoveableState | undefined, event: MouseEvent) => void;
    onMoveStart?: (event: MouseEvent, target: HTMLElement) => boolean;
    onMove?: (event: MouseEvent, state: MoveableState) => boolean;
    onMoveEnd?: (event: MouseEvent, state: MoveableState) => boolean;
};
