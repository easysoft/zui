import type {Item} from '@zui/common-list';
import type {ListItemsSetting} from './list-items-setting';
import type {NestedListProps} from './nested-list-props';

export interface NestedItem extends Item {
    items?: ListItemsSetting;
    listProps?: NestedListProps;
    expanded?: boolean;
}
