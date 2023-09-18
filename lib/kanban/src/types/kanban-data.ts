import type {KanbanLaneOptions} from './kanban-lane-options';
import type {KanbanColOptions} from './kanban-col-options';
import type {KanbanItems} from './kanban-items';

export interface KanbanData {
    lanes: KanbanLaneOptions[];
    cols: KanbanColOptions[];
    items: KanbanItems;
}
