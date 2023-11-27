import type {SortableEvent} from 'sortablejs';
import type {ItemKey} from '@zui/common-list';
import type {TreeOptions} from '@zui/tree';
import type {SortableOptions} from './sortable-options';

export interface SortableTreeProps extends TreeOptions {
    sortable?: boolean | SortableOptions;
    onSort?: (event: SortableEvent, orders: ItemKey[], parentKey: string | undefined) => void;
}
