import type {MenuOptions} from '@zui/menu/src/types/menu-options';
import type {ContextMenuPlacement} from './contextmenu-placement';
import type {ContextMenuPositionStrategy} from './contextmenu-position-strategy';
import type {MenuItemOptions} from '@zui/menu/src/types/menu-item-options';
import type {ContextMenu} from '../vanilla/contextmenu';
import type {Modifier} from '@popperjs/core/lib/types';

export type ContextMenuOptions = {
    placement?: ContextMenuPlacement;
    strategy?: ContextMenuPositionStrategy;
    preventOverflow?: boolean | {boundary: string};
    offset?: [number, number] | (() => [number, number]);
    flip?: boolean;
    subMenuTrigger?: 'click' | 'hover',
    menu?: MenuOptions,
    items?: MenuItemOptions[] | ((menu: ContextMenu) => MenuItemOptions[]),
    modifiers?: Partial<Modifier<any, any>>[]
};
