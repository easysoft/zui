import type {IconType} from '@zui/core';
import type {ListitemProps, NestedItem, NestedListItem} from '@zui/list';
import type {SearchMenuOptions} from '@zui/menu';
import type {TreeOptions} from './tree-options';

export interface SearchTreeOptions<T extends NestedItem = NestedListItem> extends SearchMenuOptions<T>, TreeOptions<T> {
    itemActions?: ListitemProps['actions'];
    collapsedIcon?: IconType;
    expandedIcon?: IconType;
    normalIcon?: IconType;
}
