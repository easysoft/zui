import type {KanbanColOptions} from './kanban-col-options';
import type {KanbanItems} from './kanban-items';
import type {KanbanLaneOptions} from './kanban-lane-options';

export interface KanbanBodyProps {
    cols: KanbanColOptions[];
    lanes: KanbanLaneOptions[];
    items: KanbanItems;
}
