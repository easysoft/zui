import type {ListitemProps} from '@zui/list/src/types';
import type {KanbanProps} from './kanban-props';

export interface KanbanRegionState {
    collapsed?: boolean;
    heading?: Partial<ListitemProps>;
    items?: KanbanProps[];
}
