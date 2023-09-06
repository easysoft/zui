import type {IconType} from '@zui/core';
import type {NestedListProps} from '@zui/list';
import type {TreeActionsSetting} from './tree-actions-setting';

export interface TreeOptions extends NestedListProps {
    itemActions?: TreeActionsSetting;
    collapsedIcon?: IconType;
    expandedIcon?: IconType;
    normalIcon?: IconType;
}
