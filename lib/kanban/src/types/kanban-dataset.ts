import type {KanbanLaneOptions} from './kanban-lane-options';
import type {KanbanColOptions} from './kanban-col-options';
import type {KanbanItemsMap} from './kanban-items-map';
import type {KanbanLinkOptions} from './kanban-link-options';
import type {KanbanItem} from './kanban-item';

export interface KanbanDataset {
    lanes: KanbanLaneOptions[];
    cols: KanbanColOptions[];
    items: KanbanItemsMap | KanbanItem[];
    links?: KanbanLinkOptions[];
}
