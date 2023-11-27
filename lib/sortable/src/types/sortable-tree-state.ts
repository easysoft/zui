import type {ItemKey} from '@zui/common-list';
import type {ListState} from '@zui/list';

export interface SortableTreeState extends ListState {
    orders: ItemKey[]
}
