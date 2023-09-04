import type {ItemKey} from './item-key';
import type {ListState} from './list-state';

export interface NestedListState extends ListState {
    nestedShow?: boolean | Record<ItemKey, boolean>;
}
