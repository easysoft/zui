import type {ComponentChildren} from 'preact';
import type {KanbanColOptions} from './kanban-col-options';
import type {KanbanItemInfo} from './kanban-item-info';
import type {KanbanItems} from './kanban-items';
import type {KanbanLaneOptions} from './kanban-lane-options';

export interface KanbanBodyProps {
    cols: KanbanColOptions[];
    lanes: KanbanLaneOptions[];
    items: KanbanItems;
    itemRender?: (info: KanbanItemInfo) => ComponentChildren;
}
