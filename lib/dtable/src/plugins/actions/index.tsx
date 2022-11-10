import {Toolbar} from '@zui/toolbar/src/component/toolbar';
import type {ToolbarOptions, ToolbarItemOptions, ToolbarDropdownProps} from '@zui/toolbar/src/types';
import {definePlugin} from '../../helpers/shared-plugins';
import type {DTablePlugin} from '../../types/plugin';
import type {RowInfo} from '../../types/row';
import type {ColInfo} from '../../types/col';
import type {MenuItemOptions} from '@zui/menu/src/types';

export type DTableActionsTypes = {
    col: Partial<{
        actionsCreator?: (info: {row: RowInfo, col: ColInfo}) => ToolbarItemOptions[],
        actionsSetting?: Partial<ToolbarOptions>,
        actionsMap?: Record<string, Partial<ToolbarItemOptions>>,
    }>,
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
                const actionItems = row.data?.[col.name] as (string | Partial<ToolbarItemOptions & {name: string, items?: (string | MenuItemOptions)[]}>)[];
                if (!actionItems) {
                    return result;
                }
                const {actionsSetting, actionsMap, actionsCreator} = col.setting;
                const toolbarOptions: ToolbarOptions = {
                    items: actionsCreator?.(info) ?? actionItems.map(action => {
                        if (typeof action === 'string') {
                            action = {name: action};
                        }
                        if (!action) {
                            return;
                        }
                        const {name, items, ...others} = action;
                        if (actionsMap && name) {
                            Object.assign(others, actionsMap[name], {...others});
                        }
                        if (items && others.type === 'dropdown') {
                            const {dropdown = {}} = (others as ToolbarDropdownProps);
                            dropdown.items = items.reduce((list, item) => {
                                const itemAction = typeof item === 'string' ? {name: item} : {...item};
                                if (itemAction) {
                                    if (actionsMap && 'name' in itemAction) {
                                        Object.assign(itemAction, actionsMap[itemAction.name], {...itemAction});
                                    }
                                    list.push(itemAction as MenuItemOptions);
                                }
                                return list;
                            }, [] as MenuItemOptions[]);
                            (others as ToolbarDropdownProps).dropdown = dropdown;
                        }
                        return others;
                    }).filter(Boolean) as ToolbarItemOptions[],
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
};

export const actions = definePlugin(actionsPlugin);
