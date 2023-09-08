import type {ItemKey} from '@zui/common-list';
import type {ListState} from './list-state';

export interface NestedListState extends ListState {
    nestedShow?: boolean | Record<ItemKey, boolean>;
}
