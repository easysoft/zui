import type {KanbanColOptions} from './kanban-col-options';
import type {KanbanItem} from './kanban-item';
import type {KanbanLaneOptions} from './kanban-lane-options';

export type KanbanItemInfo = {
    item: KanbanItem,
    lane: KanbanLaneOptions,
    col: KanbanColOptions,
};
