import type {KanbanColOptions} from './kanban-col-options';

export interface KanbanColProps extends KanbanColOptions {
    index: number;
    width: number;
    subCols?: KanbanColProps[];
}
