import type {MenuOptions} from '@zui/menu/src/types/menu-options';
import type {ContextMenuTrigger} from './contextmenu-trigger';

export type ContextMenuEvents = {
    show: [trigger: ContextMenuTrigger],
    shown: [],
    hide: [],
    hidden: [],
    updateMenu: [menu: MenuOptions, trigger: ContextMenuTrigger],
};
