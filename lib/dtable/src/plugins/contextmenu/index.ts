import {ContextMenu} from '@zui/contextmenu';
import {definePlugin} from '../../helpers/shared-plugins';
import type {MenuListItem} from '@zui/menu/src/component/menu';
import type {DTablePointerInfo} from '../../types/dtable';
import type {DTablePluginTypes, DTableWithPlugin, DTablePlugin} from '../../types/plugin';

export interface DTableContextMenuTypes extends DTablePluginTypes {
    options: Partial<{
        contextmenu: Partial<{
            cell: MenuListItem[] | ((event: MouseEvent, info: DTablePointerInfo, menu: ContextMenu) => MenuListItem[] | undefined),
            header: MenuListItem[] | ((event: MouseEvent, info: DTablePointerInfo, menu: ContextMenu) => MenuListItem[] | undefined),
        }>;
    }>;
    data: {
        contextmenu: ContextMenu
    },
}

export type DTableContextMenu = DTableWithPlugin<DTableContextMenuTypes>;

export const contextmenu: DTablePlugin<DTableContextMenuTypes> = {
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

const plugin = definePlugin(contextmenu);

export default plugin;
