import type {ListitemProps} from '@zui/list';
import type {KanbanProps} from './kanban-props';

export interface KanbanRegionState {
    collapsed?: boolean;
    heading?: Partial<ListitemProps>;
    items?: (KanbanProps & {deleted?: boolean})[];
}
