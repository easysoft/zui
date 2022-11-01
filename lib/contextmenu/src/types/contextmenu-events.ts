import type {ContextMenu} from '../vanilla/contextmenu';
import type {MenuOptions} from '@zui/menu/src/types/menu-options';
import type {ContextMenuTrigger} from './contextmenu-trigger';

export type ContextMenuEvents = {
    show: CustomEvent<{menu: ContextMenu, trigger: ContextMenuTrigger}>,
    shown: CustomEvent<ContextMenu>,
    hide: CustomEvent<ContextMenu>,
    hidden: CustomEvent<ContextMenu>,
    updateMenu: CustomEvent<{menu: MenuOptions, trigger: ContextMenuTrigger, contextmenu: ContextMenu}>,
};
