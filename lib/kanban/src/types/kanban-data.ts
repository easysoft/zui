import type {KanbanLaneOptions} from './kanban-lane-options';
import type {KanbanColOptions} from './kanban-col-options';
import type {KanbanItems} from './kanban-items';
import type {KanbanLinkOptions} from './kanban-link-options';

export interface KanbanData {
    lanes: KanbanLaneOptions[];
    cols: KanbanColOptions[];
    items: KanbanItems;
    links?: KanbanLinkOptions[];
    hasSubCols?: boolean;
}
