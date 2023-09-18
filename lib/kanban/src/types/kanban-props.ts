import type {ComponentChildren, CustomContentType, HElementProps} from '@zui/core';
import type {KanbanDataSetting} from './kanban-data-setting';
import type {KanbanLaneOptions} from './kanban-lane-options';
import type {KanbanColOptions} from './kanban-col-options';
import type {KanbanItem} from './kanban-item';
import type {ToolbarSetting} from '@zui/toolbar/src/types';
import type {KanbanItemInfo} from './kanban-item-info';
import type {KanbanData} from './kanban-data';

export interface KanbanProps extends HElementProps {
    data: KanbanDataSetting;
    laneProps: Partial<KanbanLaneOptions>;
    colProps: Partial<KanbanColOptions>;
    laneNameWidth?: number;
    itemProps: Partial<KanbanItem>;
    sortLane?: boolean;
    getCol?: (col: KanbanColOptions) => KanbanColOptions | false;
    getLane?: (lane: KanbanLaneOptions) => KanbanLaneOptions | false;
    getItem?: (info: KanbanItemInfo) => KanbanItem | false;
    itemRender?: (info: KanbanItemInfo) => ComponentChildren;
    onLoad?: (data: KanbanData) => void | KanbanData;
    onLoadFail?: CustomContentType | ((error: Error) => CustomContentType | void);
    beforeRender?: (options: KanbanProps) => void;
    afterRender?: (firstRender: boolean) => void;
    beforeDestroy?: () => void;
}
