import type {CustomContentType, SizeSetting} from '@zui/core';
import type {KanbanColName} from './kanban-col-name';
import type {KanbanColOptions} from './kanban-col-options';
import type {KanbanItem} from './kanban-item';
import type {KanbanItemInfo} from './kanban-item-info';
import type {KanbanLaneOptions} from './kanban-lane-options';

export interface KanbanLaneProps extends KanbanLaneOptions {
    index: number;
    cols: KanbanColOptions[];
    items: Record<KanbanColName, KanbanItem[]>;
    itemRender?: (info: KanbanItemInfo) => CustomContentType;
    height?: SizeSetting;
}
