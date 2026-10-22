import {KanbanColOptions} from './kanban-col-options';
import type {KanbanBackgroundPattern} from './kanban-background-pattern';

export interface KanbanHeaderProps {
    cols: KanbanColOptions[];
    backgroundPattern?: KanbanBackgroundPattern;
    colBgColor?: string;
    rowBgColor?: string;
    rowColor?: string;
}
