import type {ActionMenuItem} from './action-menu-item';

export interface ActionSpace extends ActionMenuItem {
    type: 'space',
    space?: number | [leading: number, trailing: number],
    flex?: number | 'auto' | 'none'
}
