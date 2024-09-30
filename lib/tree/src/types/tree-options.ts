import type {IconType} from '@zui/core';
import type {ListitemProps, NestedItem, NestedListItem} from '@zui/list';
import type {MenuOptions} from '@zui/menu';

export interface TreeOptions<T extends NestedItem = NestedListItem> extends MenuOptions<T> {
    lines?: boolean;
    itemActions?: ListitemProps['actions'];
    collapsedIcon?: IconType;
    expandedIcon?: IconType;
    normalIcon?: IconType;
}
