import type {ContextMenu} from '../vanilla/contextmenu';
import type {MenuItemOptions} from '@zui/menu/src/types/menu-item-options';
import type {ContextMenuTrigger} from './contextmenu-trigger';

export type ContextMenuEvents = {
    show: CustomEvent<{menu: ContextMenu, trigger: ContextMenuTrigger}>,
    shown: CustomEvent<ContextMenu>,
    hide: CustomEvent<ContextMenu>,
    hidden: CustomEvent<ContextMenu>,
    updateMenu: CustomEvent<{items: MenuItemOptions[], trigger: ContextMenuTrigger, contextmenu: ContextMenu}>,
};
