import {ContextMenu} from '@zui/contextmenu';
import {definePlugin} from '../../helpers/shared-plugins';
import type {ListitemProps} from '@zui/list';
import type {DTablePointerInfo} from '../../types/dtable';
import type {DTableWithPlugin, DTablePlugin} from '../../types/plugin';

export interface DTableContextMenuTypes {
    options: Partial<{
        contextmenu: Partial<{
            cell: ListitemProps[] | ((event: MouseEvent, info: DTablePointerInfo, menu: ContextMenu) => ListitemProps[] | undefined),
            header: ListitemProps[] | ((event: MouseEvent, info: DTablePointerInfo, menu: ContextMenu) => ListitemProps[] | undefined),
        }>;
    }>;
    data: {
        contextmenu: ContextMenu
    },
}

export type DTableContextMenu = DTableWithPlugin<DTableContextMenuTypes>;

const contextmenuPlugin: DTablePlugin<DTableContextMenuTypes> = {
    name: 'contextmenu',
    defaultOptions: {
        contextmenu: {},
    },
    when: options => !!options.contextmenu,
    onMounted() {
        const {current} = this.ref;
        if (current) {
            this.data.contextmenu = new ContextMenu(current, {
                items: (menu, event) => {
                    const info = this.getPointerInfo(event);
                    if (!info) {
                        return;
                    }
                    const {contextmenu: {header, cell} = {}} = this.options;
                    if (info.rowID === 'HEADER') {
                        if (typeof header === 'function') {
                            return header(event, info, menu);
                        }
                        return header;
                    }
                    if (typeof cell === 'function') {
                        return cell(event, info, menu);
                    }
                    return cell;
                },
            });
        }
    },
    onUnmounted() {
        this.data.contextmenu?.destroy();
    },
};

export const contextmenu = definePlugin(contextmenuPlugin);
