import type {ListitemProps} from '@zui/list/src/types';
import type {KanbanProps} from './kanban-props';

export interface KanbanGroupProps extends KanbanProps {
    heading?: ListitemProps;
    collapsed?: boolean;
    toggleFromHeading?: boolean;
}
