import type {CustomContentType} from '@zui/core';
import type {KanbanColOptions} from './kanban-col-options';
import type {KanbanItem} from './kanban-item';
import type {KanbanItemInfo} from './kanban-item-info';
import type {KanbanLaneName} from './kanban-lane-name';

export interface KanbanLaneColProps extends KanbanColOptions {
    items: KanbanItem[];
    lane: KanbanLaneName;
    itemRender?: (info: KanbanItemInfo) => CustomContentType;
    watchSize?: boolean;
}
