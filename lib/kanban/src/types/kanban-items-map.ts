import type {KanbanColName} from './kanban-col-name';
import type {KanbanItem} from './kanban-item';
import type {KanbanLaneName} from './kanban-lane-name';

export type KanbanItemsMap = Record<KanbanLaneName, Record<KanbanColName, KanbanItem[]>>;
