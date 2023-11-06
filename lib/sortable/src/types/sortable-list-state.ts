import type {ItemKey} from '@zui/common-list';
import type {ListState} from '@zui/list';

export interface SortableListState extends ListState {
    orders: ItemKey[]
}
