import type {ClassNameLike, CustomContentType} from '@zui/core';
import type {KanbanColOptions} from './kanban-col-options';
import type {KanbanItem} from './kanban-item';
import type {KanbanItemInfo} from './kanban-item-info';
import type {KanbanLaneName} from './kanban-lane-name';
import type {KanbanBackgroundPattern} from './kanban-background-pattern';

export interface KanbanLaneColProps extends KanbanColOptions {
    laneColClass?: ClassNameLike;
    items: KanbanItem[];
    lane: KanbanLaneName;
    itemRender?: (info: KanbanItemInfo) => CustomContentType;
    watchSize?: boolean;
    backgroundPattern?: KanbanBackgroundPattern;
    colBgColor?: string;
    rowBgColor?: string;
}
