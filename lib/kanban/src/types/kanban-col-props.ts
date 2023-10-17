import type {SizeSetting} from '@zui/core';
import type {KanbanColOptions} from './kanban-col-options';

export interface KanbanColProps extends KanbanColOptions {
    index: number;
    width?: SizeSetting;
    subCols?: KanbanColOptions[];
}
