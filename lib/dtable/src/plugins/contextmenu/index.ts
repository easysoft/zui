import {ContextMenu} from '@zui/contextmenu';
import {definePlugin} from '../../helpers/shared-plugins';
import type {ListitemProps} from '@zui/list';
import type {DTablePointerInfo} from '../../types/dtable';
import type {DTableWithPlugin, DTablePlugin} from '../../types/plugin';

type DTableContextMenuCreator = (this: DTableContextMenu, event: MouseEvent, info: DTablePointerInfo) => ListitemProps[] | undefined;

export interface DTableContextMenuTypes {
    options: {
        contextmenu?: ListitemProps[] | DTableContextMenuCreator | {
            cell?: ListitemProps[] | DTableContextMenuCreator,
            header?: ListitemProps[] | DTableContextMenuCreator,
        };
    };
    data: {
        contextmenu: ContextMenu
    },
    methods: {
        getContextMenuItems: (this: DTableContextMenu, event: MouseEvent, info: DTablePointerInfo) => ListitemProps[] | undefined,
    }
}

export type DTableContextMenu = DTableWithPlugin<DTableContextMenuTypes>;

const contextmenuPlugin: DTablePlugin<DTableContextMenuTypes> = {
    name: 'contextmenu',
    when: options => !!options.contextmenu,
    events: {
        contextmenu(event) {
            const info = this.getPointerInfo(event);
            if (!info) {
                return;
            }
            const items = this.getContextMenuItems(event, info);
            if (!items || !items.length) {
                return;
            }
            event.preventDefault();
            ContextMenu.show({items, key: `dtable-ctx-${this.id}`, event, element: info.cellElement} as Parameters<typeof ContextMenu.show>[0]);
        },
    },
    methods: {
        getContextMenuItems(event: MouseEvent, info: DTablePointerInfo) {
            const {contextmenu} = this.options;
            if (typeof contextmenu === 'function') {
                return contextmenu.call(this, event, info);
            }
            if (!contextmenu || Array.isArray(contextmenu)) {
                return contextmenu;
            }
            const {header, cell} = contextmenu;
            if (info.rowID === 'HEADER') {
                if (typeof header === 'function') {
                    return header.call(this, event, info);
                }
                return header;
            }
            if (typeof cell === 'function') {
                return cell.call(this, event, info);
            }
            return cell;
        },
    },
};

export const contextmenu = definePlugin(contextmenuPlugin);
