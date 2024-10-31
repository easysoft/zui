import type {SortableEvent, MoveEvent} from 'sortablejs';
import type {ItemKey, Item} from '@zui/common-list';
import type {ListProps} from '@zui/list';
import type {SortableOptions} from './sortable-options';

export interface SortableListProps extends ListProps {
    sortable?: boolean | SortableOptions;
    onSort?: (event: SortableEvent, orders: ItemKey[]) => void;
    canSortTo?: (event: MoveEvent, from: Item, to: Item) => (boolean | -1 | 1 | void);
}
