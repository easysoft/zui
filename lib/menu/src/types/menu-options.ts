import type {NestedItem, NestedListItem, NestedListProps} from '@zui/list';

export interface MenuOptions<T extends NestedItem = NestedListItem> extends NestedListProps<T> {
    popup?: boolean;
    compact?: boolean;
}
