import type {KanbanColOptions} from './kanban-col-options';
import type {KanbanItem} from './kanban-item';

export interface KanbanLaneColProps extends KanbanColOptions {
    items: KanbanItem[];
}
