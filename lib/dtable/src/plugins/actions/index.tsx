import {formatString} from '@zui/helpers/src/format-string';
import {Toolbar} from '@zui/toolbar/src/component/toolbar';
import type {ToolbarOptions, ToolbarItemOptions, ToolbarDropdownProps} from '@zui/toolbar/src/types';
import {definePlugin} from '../../helpers/shared-plugins';
import type {DTablePlugin, DTableWithPlugin} from '../../types/plugin';
import type {RowData, RowInfo} from '../../types/row';
import type {ColInfo} from '../../types/col';
import type {MenuItemOptions} from '@zui/menu/src/types';

type ActionItemInfo = Partial<ToolbarItemOptions & {name: string, items?: MenuItemOptions[]}>;

export type DTableActionsTypes = {
    col: Partial<{
        actions?: string | (string | ActionItemInfo)[],
        actionsCreator: (info: {row: RowInfo, col: ColInfo}) => ToolbarItemOptions[],
        actionItemCreator: (item: Partial<ToolbarItemOptions>, info: {row: RowInfo, col: ColInfo}) => ToolbarItemOptions,
        actionsSetting: Partial<ToolbarOptions>,
        actionsMap: Record<string, Partial<ToolbarItemOptions>>,
    }>,
    options: Partial<{
        actionsCreator: (info: {row: RowInfo, col: ColInfo}) => ToolbarItemOptions[],
        actionItemCreator: (item: Partial<ToolbarItemOptions>, info: {row: RowInfo, col: ColInfo}) => ToolbarItemOptions,
    }>,
};

function createActionFromString(action: string): ActionItemInfo {
    const [name, items] = action.split(':');
    const actionInfo: {type?: string, name: string, items?: MenuItemOptions[], disabled?: boolean} = name[0] === '-' ? {name: name.substring(1), disabled: true} : {name};
    if (items?.length) {
        actionInfo.type = 'dropdown';
        actionInfo.items = items.split(',').reduce<{name: string, disabled?: boolean}[]>((list, itemName) => {
            itemName = itemName.trim();
            if (itemName.length) {
                list.push(itemName[0] === '-' ? {name: itemName.substring(1), disabled: true} : {name: itemName});
            }
            return list;
        }, []);
    }
    return actionInfo;
}

const defaultActionItemCreator = (item: Partial<ToolbarDropdownProps>, info: {row: RowInfo, col: ColInfo}) => {
    if (item.url) {
        item.url = formatString(item.url, info.row.data);
    }
    if (item.dropdown?.items) {
        item.dropdown.items = (item.dropdown.items as (MenuItemOptions & {url?: string})[]).map(x => {
            if (x.url) {
                x.url = formatString(x.url, info.row.data);
            }
            return x;
        });
    }
    return item;
};

const getActionItems = (actions?: string | (string | ActionItemInfo)[]): ActionItemInfo[] => {
    if (!actions) {
        return [];
    }
    if (typeof actions === 'string') {
        actions = actions.split('|');
    }
    return actions.map(action => {
        return typeof action === 'string' ? createActionFromString(action) : action;
    }).filter(Boolean) as ActionItemInfo[];
};

/**
 * @todo auto calculate column width by actions setting
 */
const actionsPlugin: DTablePlugin<DTableActionsTypes> = {
    name: 'actions',
    colTypes: {
        actions: {
            onRenderCell(result, info) {
                const {row, col} = info;
                const actionItems = getActionItems(row.data?.[col.name] as string | (string | ActionItemInfo)[] || col.setting.actions);
                if (!actionItems.length) {
                    return result;
                }
                const {actionsSetting, actionsMap, actionsCreator = (this as DTableWithPlugin<DTableActionsTypes>).options.actionsCreator, actionItemCreator = (this as DTableWithPlugin<DTableActionsTypes>).options.actionItemCreator || defaultActionItemCreator} = col.setting;
                const toolbarOptions: ToolbarOptions = {
                    items: actionsCreator?.(info) ?? actionItems.map(action => {
                        const {name, items, ...others} = action;
                        if (actionsMap && name) {
                            Object.assign(others, actionsMap[name], {...others});
                            if (typeof (others as any).buildProps === 'function') {
                                const {buildProps} = others as any;
                                delete (others as any).buildProps;
                                Object.assign(others, buildProps(result, info));
                            }
                        }
                        if (items && others.type === 'dropdown') {
                            const {dropdown = {placement: 'bottom-end'}} = (others as ToolbarDropdownProps);
                            dropdown.menu = {
                                className: 'menu-dtable-actions',
                                items: items.reduce((list, item) => {
                                    const itemAction = (typeof item === 'string' ? {name: item} : {...item}) as MenuItemOptions & {name?: string, url?: string};
                                    if (itemAction?.name) {
                                        if (actionsMap && 'name' in itemAction) {
                                            Object.assign(itemAction, actionsMap[itemAction.name], {...itemAction});
                                        }
                                        list.push(itemAction as MenuItemOptions);
                                    }
                                    return list;
                                }, [] as MenuItemOptions[]),
                            };
                            (others as ToolbarDropdownProps).dropdown = dropdown;
                        }
                        return actionItemCreator ? actionItemCreator(others, info) : others;
                    }) as ToolbarItemOptions[],
                    btnProps: {size: 'sm', className: 'text-primary'},
                    ...actionsSetting,
                };
                result[0] = (
                    <Toolbar {...toolbarOptions} />
                );
                return result;
            },
        },
    },
    beforeLayout(options) {
        if (!Array.isArray(options.data) || !options.data.length) {
            return;
        }
        options.cols.forEach((col, index) => {
            if (col.type !== 'actions' || col.width) {
                return;
            }
            const {actionsMap = {}} = col;
            const actions = getActionItems((options.data as RowData[])[0][col.name] as string | (string | ActionItemInfo)[]);
            const width = actions.reduce((total, action) => {
                const item = action.name ? actionsMap[action.name] : null;
                if (item && item.type === 'dropdown' && item.caret && !item.text) {
                    return total + 16;
                }
                return total + 24;
            }, 24);
            options.cols[index] = {
                ...col,
                width,
            };
        });
    },
};

export const actions = definePlugin(actionsPlugin);
