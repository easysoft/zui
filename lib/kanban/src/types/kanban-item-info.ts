import type {KanbanColName} from './kanban-col-name';
import type {KanbanItem} from './kanban-item';
import type {KanbanLaneName} from './kanban-lane-name';

export type KanbanItemInfo = {
    item: KanbanItem,
    lane: KanbanLaneName,
    col: KanbanColName,
};
