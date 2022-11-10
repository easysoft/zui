import {Toolbar} from '@zui/toolbar/src/component/toolbar';
import type {ToolbarOptions, ToolbarItemOptions} from '@zui/toolbar/src/types';
import {definePlugin} from '../../helpers/shared-plugins';
import type {DTablePlugin} from '../../types/plugin';
import type {RowInfo} from '../../types/row';
import type {ColInfo} from '../../types/col';

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
                const actionItems = row.data?.[col.name] as (string | Partial<ToolbarItemOptions & {name: string}>)[];
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
                        const {name, ...others} = action;
                        if (actionsMap && name) {
                            Object.assign(others, actionsMap[name]);
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
