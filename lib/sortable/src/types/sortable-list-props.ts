import type {SortableEvent} from 'sortablejs';
import type {ItemKey} from '@zui/common-list';
import type {ListProps} from '@zui/list';
import type {SortableOptions} from './sortable-options';

export interface SortableListProps extends ListProps {
    sortable?: boolean | SortableOptions;
    onSort?: (event: SortableEvent, orders: ItemKey[]) => void;
}
