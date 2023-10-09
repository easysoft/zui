import {formatString} from '@zui/helpers/src/format-string';
import {Toolbar} from '@zui/toolbar/src/component/toolbar';
import {definePlugin} from '../../helpers/shared-plugins';

import type {ToolbarOptions, ToolbarItemOptions, ToolbarDropdownOptions} from '@zui/toolbar/src/types';
import type {DTablePlugin, DTableWithPlugin} from '../../types/plugin';
import type {RowData, RowInfo} from '../../types/row';
import type {ColInfo} from '../../types/col';
import type {ListitemProps} from '@zui/list/src/types';

type ActionItemInfo = Partial<ToolbarItemOptions & {name: string, items?: ListitemProps[]}>;

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
    const actionInfo: {type?: string, name: string, items?: ListitemProps[], disabled?: boolean} = name[0] === '-' ? {name: name.substring(1), disabled: true} : {name};
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

const defaultActionItemCreator = (item: Partial<ToolbarDropdownOptions>, info: {row: RowInfo, col: ColInfo}) => {
    if (item.url) {
        item.url = formatString(item.url, info.row.data);
    }
    const data = {row: info.row.id, col: info.col.name};
    const items = item.dropdown?.items || item.items;
    if (items) {
        (items as (ListitemProps & {url?: string})[]).forEach(x => {
            if (x.url) {
                x.url = formatString(x.url, info.row.data);
            }
            x.data = data;
            return x;
        });
    }
    item.data = data;
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
                const {
                    actionsSetting,
                    actionsMap,
                    actionsCreator = (this as DTableWithPlugin<DTableActionsTypes>).options.actionsCreator,
                    actionItemCreator = (this as DTableWithPlugin<DTableActionsTypes>).options.actionItemCreator || defaultActionItemCreator,
                } = col.setting;
                const toolbarOptions: ToolbarOptions = {
                    items: actionsCreator?.(info) ?? actionItems.map(action => {
                        const {name, ...others} = action;
                        if (actionsMap && name) {
                            Object.assign(others, actionsMap[name], {...others});
                            const {buildProps} = others as {buildProps?: unknown};
                            if (typeof buildProps === 'function') {
                                delete (others as {buildProps?: unknown}).buildProps;
                                Object.assign(others, buildProps(result, info));
                            }
                        }
                        const {items} = others;
                        if (others.disabled) {
                            delete others.url;
                            delete others['data-toggle'];
                        }
                        if (items && others.type === 'dropdown') {
                            const {dropdown = {placement: 'bottom-end'}} = (others as ToolbarDropdownOptions);
                            dropdown.menu = {
                                className: 'menu-dtable-actions',
                            };
                            dropdown.items = items.map((item) => {
                                const itemAction = (typeof item === 'string' ? {name: item} : {...item}) as ListitemProps & {name?: string, url?: string, disabled?: boolean};
                                if (itemAction.name) {
                                    if (actionsMap && actionsMap[itemAction.name]) {
                                        Object.assign(itemAction, actionsMap[itemAction.name], {...itemAction});
                                    }
                                }
                                if (itemAction.disabled) {
                                    delete itemAction.url;
                                    delete itemAction['data-toggle'];
                                } else if (itemAction.url) {
                                    itemAction.url = formatString(itemAction.url, row.data);
                                }
                                return itemAction;
                            });
                            (others as ToolbarDropdownOptions).dropdown = dropdown;
                            delete others.items;
                        }
                        return actionItemCreator ? actionItemCreator(others, info) : others;
                    }) as ToolbarItemOptions[],
                    btnProps: {btnType: 'ghost', size: 'sm', className: 'text-primary'},
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
