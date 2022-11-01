import type {MenuOptions} from '@zui/menu/src/types/menu-options';
import {ContextMenuPlacement} from './contextmenu-placement';
import {ContextMenuPositionStrategy} from './contextmenu-position-strategy';
import type {MenuItemOptions} from '@zui/menu/src/types/menu-item-options';

export type ContextMenuOptions = {
    placement?: ContextMenuPlacement;
    strategy?: ContextMenuPositionStrategy;
    preventOverflow?: boolean | {boundary: string};
    offset?: [number, number] | (() => [number, number]);
    flip?: boolean;
    subMenuTrigger?: 'click' | 'hover',
    menu?: MenuOptions | MenuItemOptions[] | (() => MenuItemOptions[])
};
