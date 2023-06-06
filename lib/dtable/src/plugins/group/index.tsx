import {definePlugin} from '../../helpers/shared-plugins';
import type {DTablePlugin} from '../../types/plugin';
import {ColInfo} from '../../types';

export type DTableGroupTypes = {
    options: Partial<{
        groupDivider: boolean;
    }>,
    col: Partial<{
        group: string;
    }>
};

const applyGroupDivider = (cols: ColInfo[]) => {
    if (cols.length === 1) {
        return;
    }
    cols.forEach((col, index) => {
        if (!index || col.setting.border || col.setting.group === cols[index - 1].setting.group) {
            return;
        }
        col.setting.border = 'left';
    });
};

const groupPlugin: DTablePlugin<DTableGroupTypes> = {
    name: 'group',
    defaultOptions: {
        groupDivider: true,
    },
    when: options => !!options.groupDivider,
    onLayout(layout) {
        if (!this.options.groupDivider) {
            return;
        }
        const {cols} = layout;
        applyGroupDivider(cols.left.list);
        applyGroupDivider(cols.center.list);
        applyGroupDivider(cols.right.list);
    },
};

export const group = definePlugin(groupPlugin);
