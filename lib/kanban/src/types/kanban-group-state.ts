import type {KanbanState} from './kanban-state';

export interface KanbanGroupState extends KanbanState {
    collapsed?: boolean;
}
