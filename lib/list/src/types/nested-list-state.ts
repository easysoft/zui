import type {ItemKey} from '@zui/core';
import type {ListState} from './list-state';

export interface NestedListState extends ListState {
    nestedShow?: boolean | Record<ItemKey, boolean>;
}
