import {Toolbar} from '@zui/toolbar/src/component/toolbar';
import type {ToolbarOptions} from '@zui/toolbar/src/types';
import {definePlugin} from '../../helpers/shared-plugins';
import type {DTablePlugin} from '../../types/plugin';

export type DTableToolbarTypes = {
    options: Partial<{
        footToolbar: ToolbarOptions
    }>
};

/**
 * @todo auto calculate column width by toolbar setting
 */
const toolbarPlugin: DTablePlugin<DTableToolbarTypes> = {
    name: 'toolbar',
    footer: {
        toolbar() {
            const {footToolbar} = this.options;
            return [footToolbar ? <Toolbar {...footToolbar} /> : null];
        },
    },
};

export const toolbar = definePlugin(toolbarPlugin);
