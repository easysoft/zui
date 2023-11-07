import type {ListitemProps} from '@zui/list/src/types';
import type {KanbanProps} from './kanban-props';

export interface KanbanRegionProps {
    key?: string;
    heading?: ListitemProps | (() => ListitemProps);
    items?: KanbanProps[];
    kanbanItemKey?: string;
    collapsed?: boolean;
    toggleFromHeading?: boolean;
    kanbanProps?: Partial<KanbanRegionProps> | ((item: KanbanProps | KanbanRegionProps, index: number) => KanbanProps | KanbanRegionProps);
}
