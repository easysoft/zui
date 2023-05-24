import {Toolbar} from '@zui/toolbar/src/component/toolbar';
import {definePlugin} from '../../helpers/shared-plugins';
import type {ToolbarOptions} from '@zui/toolbar/src/types';
import type {DTablePlugin} from '../../types/plugin';
import type {DTableCheckable, DTableCheckableTypes} from '../checkable';

export type DTableToolbarTypes = {
    options: Partial<{
        footToolbar: ToolbarOptions,
        showToolbarOnChecked: boolean,
    }>
};

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
            return [footToolbar ? <Toolbar gap={2} {...footToolbar} /> : null];
        },
    },
};

export const toolbar = definePlugin(toolbarPlugin);
