import type {SizeSetting} from '@zui/core';
import type {KanbanColOptions} from './kanban-col-options';
import type {KanbanBackgroundPattern} from './kanban-background-pattern';

export interface KanbanColProps extends KanbanColOptions {
    index: number;
    width?: SizeSetting;
    subCols?: KanbanColOptions[];
    backgroundPattern?: KanbanBackgroundPattern;
    colBgColor?: string;
    rowBgColor?: string;
    rowColor?: string;
}
