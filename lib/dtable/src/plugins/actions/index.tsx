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

function createActionFromString(action: string): Partial<ToolbarItemOptions & {name: string, items?: MenuItemOptions[]}> {
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

/**
 * @todo auto calculate column width by actions setting
 */
const actionsPlugin: DTablePlugin<DTableActionsTypes> = {
    name: 'actions',
    colTypes: {
        actions: {
            onRenderCell(result, info) {
                const {row, col} = info;
                let actionItems = row.data?.[col.name] as string | (string | Partial<ToolbarItemOptions & {name: string, items?: (string | MenuItemOptions)[]}>)[];
                if (typeof actionItems === 'string') {
                    actionItems = actionItems.split('|');
                }
                if (!actionItems?.length) {
                    return result;
                }
                const {actionsSetting, actionsMap, actionsCreator} = col.setting;
                const toolbarOptions: ToolbarOptions = {
                    items: actionsCreator?.(info) ?? actionItems.map(action => {
                        action = typeof action === 'string' ? createActionFromString(action) : action;
                        if (!action) {
                            return;
                        }
                        const {name, items, className, ...others} = action;
                        if (actionsMap && name) {
                            Object.assign(others, actionsMap[name], {...others});
                        }
                        if (items && others.type === 'dropdown') {
                            const {dropdown = {}} = (others as ToolbarDropdownProps);
                            dropdown.items = items.reduce((list, item) => {
                                const itemAction = typeof item === 'string' ? {name: item} : {...item};
                                if (itemAction?.name) {
                                    if (actionsMap && 'name' in itemAction) {
                                        Object.assign(itemAction, actionsMap[itemAction.name], {...itemAction});
                                    }
                                    list.push(itemAction as MenuItemOptions);
                                }
                                return list;
                            }, [] as MenuItemOptions[]);
                            dropdown.className = action.className;
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
