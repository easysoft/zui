import type {Item} from './item';
import type {ItemsSetting} from './items-setting';
import type {NestedListProps} from './nested-list-props';

export interface NestedItem extends Item {
    items?: ItemsSetting;
    listProps?: NestedListProps;
    expanded?: boolean;
}
