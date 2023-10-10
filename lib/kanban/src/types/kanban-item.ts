import type {Item} from '@zui/common-list';
import type {KanbanLaneName} from './kanban-lane-name';
import type {KanbanColName} from './kanban-col-name';

export interface KanbanItem extends Item {
    lane?: KanbanLaneName;
    col?: KanbanColName;
    order?: number;
    deleted?: boolean;
}
