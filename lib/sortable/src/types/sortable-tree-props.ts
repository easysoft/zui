import type {SortableEvent, MoveEvent} from 'sortablejs';
import type {ItemKey, Item} from '@zui/common-list';
import type {TreeOptions} from '@zui/tree';
import type {SortableOptions} from './sortable-options';

export interface SortableTreeProps extends TreeOptions {
    sortable?: boolean | SortableOptions;
    onSort?: (event: SortableEvent, orders: ItemKey[], parentKey: string | undefined) => void;
    canSortTo?: (event: MoveEvent, from: Item, to: Item, parentKey: string | undefined) => (boolean | -1 | 1 | void);
}
