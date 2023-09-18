import type {KanbanColName} from './kanban-col-name';
import type {KanbanColOptions} from './kanban-col-options';
import type {KanbanItem} from './kanban-item';
import type {KanbanLaneOptions} from './kanban-lane-options';

export interface KanbanLaneProps extends KanbanLaneOptions {
    index: number;
    cols: KanbanColOptions[];
    items: Record<KanbanColName, KanbanItem[]>;
}
