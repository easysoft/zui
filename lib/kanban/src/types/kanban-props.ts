import type {CustomContentType, HElementProps} from '@zui/core';
import type {DraggableOptions} from '@zui/dnd';
import type {ListitemProps} from '@zui/list/src/types';
import type {KanbanDataSetting} from './kanban-data-setting';
import type {KanbanLaneOptions} from './kanban-lane-options';
import type {KanbanColOptions} from './kanban-col-options';
import type {KanbanItem} from './kanban-item';
import type {KanbanItemInfo} from './kanban-item-info';
import type {KanbanData} from './kanban-data';

export interface KanbanProps extends HElementProps {
    heading?: ListitemProps;
    data: KanbanDataSetting;
    laneProps?: Partial<KanbanLaneOptions>;
    colProps?: Partial<KanbanColOptions>;
    laneNameWidth?: number;
    itemProps?: Partial<KanbanItem>;
    sortLane?: boolean;
    sticky?: boolean;
    getCol?: (col: KanbanColOptions) => KanbanColOptions | false;
    getLane?: (lane: KanbanLaneOptions) => KanbanLaneOptions | false;
    getItem?: (info: KanbanItemInfo) => KanbanItem | false;
    itemRender?: (info: KanbanItemInfo) => CustomContentType;
    onLoad?: (data: KanbanData) => void | KanbanData;
    onLoadFail?: CustomContentType | ((error: Error) => CustomContentType | void);
    beforeRender?: (options: KanbanProps) => void;
    afterRender?: (firstRender: boolean) => void;
    beforeDestroy?: () => void;
    draggable?: DraggableOptions | boolean;
}
