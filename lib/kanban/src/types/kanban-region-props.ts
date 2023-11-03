import type {ListitemProps} from '@zui/list/src/types';
import type {KanbanProps} from './kanban-props';

export interface KanbanRegionProps {
    key?: string;
    heading?: ListitemProps | (() => ListitemProps);
    collapsed?: boolean;
    toggleFromHeading?: boolean;
    items?: KanbanProps[];
    kanbanProps?: Partial<KanbanRegionProps> | ((item: KanbanProps | KanbanRegionProps, index: number) => KanbanProps | KanbanRegionProps);
}
