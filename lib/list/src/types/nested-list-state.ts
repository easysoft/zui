import type {ItemKey} from '@zui/common-list';
import type {ListState} from './list-state';
import type {NestedItem} from './nested-item';
import type {NestedListItem} from './nested-list-item';

export interface NestedListState<T extends NestedItem = NestedListItem> extends ListState<T> {
    nestedShow?: Record<ItemKey, boolean>;
    defaultShow?: boolean;
}
