import {Toolbar} from '@zui/toolbar/src/component/toolbar';
import {definePlugin} from '../../helpers/shared-plugins';
import type {ToolbarSetting} from '@zui/toolbar/src/types';
import type {DTablePlugin, DTableWithPlugin} from '../../types/plugin';
import type {DTableCheckable, DTableCheckableTypes} from '../checkable';

export type DTableToolbarTypes = {
    options: Partial<{
        footToolbar: ToolbarSetting<[DTableWithToolbar]>;
        showToolbarOnChecked: boolean,
    }>
};

export type DTableWithToolbar = DTableWithPlugin<DTableToolbarTypes>;

/**
 * @todo auto calculate column width by toolbar setting
 */
const toolbarPlugin: DTablePlugin<DTableToolbarTypes, [DTableCheckableTypes]> = {
    name: 'toolbar',
    footer: {
        toolbar() {
            const {footToolbar, showToolbarOnChecked} = this.options;
            if (showToolbarOnChecked && !(this as DTableCheckable).getChecks().length) {
                return [];
            }
            return [footToolbar ? Toolbar.render(footToolbar, [this], {
                gap: 2,
            }) : null];
        },
    },
};

export const toolbar = definePlugin(toolbarPlugin);
