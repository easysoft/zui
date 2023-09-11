import type {IconType} from '@zui/core';
import type {ListitemProps, NestedItem, NestedListItem} from '@zui/list';
import type {SearchMenuOptions} from '@zui/menu';

export interface SearchTreeOptions<T extends NestedItem = NestedListItem> extends SearchMenuOptions<T> {
    itemActions?: ListitemProps['actions'];
    collapsedIcon?: IconType;
    expandedIcon?: IconType;
    normalIcon?: IconType;
}
