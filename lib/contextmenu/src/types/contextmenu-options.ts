import type {MenuOptions} from '@zui/menu/src/types/menu-options';
import type {MenuItemOptions} from '@zui/menu/src/types/menu-item-options';
import type {ContextMenu} from '../vanilla/contextmenu';
import type {Placement, Strategy} from '@floating-ui/core';

export type ContextMenuOptions = {
    placement?: Placement;
    strategy?: Strategy;
    preventOverflow?: boolean | {boundary: string};
    offset?: [number, number] | (() => [number, number]);
    flip?: boolean;
    subMenuTrigger?: 'click' | 'hover',
    menu?: Partial<MenuOptions>,
    items?: MenuItemOptions[] | ((menu: ContextMenu) => MenuItemOptions[]),
};
