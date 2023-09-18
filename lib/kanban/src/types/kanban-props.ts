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
    laneProps: Partial<KanbanLaneOptions> | ((lane: KanbanLaneOptions) => KanbanLaneOptions);
    colProps: Partial<KanbanColOptions> | ((col: KanbanColOptions) => KanbanColOptions);
    laneNameWidth?: number;
    itemProps: Partial<KanbanItem> | ((lane: KanbanLaneOptions, col: KanbanColOptions, item: KanbanItem) => KanbanItem);
    sortLane?: boolean;
    getItem?: (info: KanbanItemInfo) => KanbanItem | false;
    getItemActions?: (info: KanbanItemInfo) => ToolbarSetting | undefined;
    renderItem?: (info: KanbanItemInfo) => ComponentChildren;
    onLoad?: (data: KanbanData) => void | KanbanData;
    onLoadFail?: CustomContentType | ((error: Error) => CustomContentType | void);
    beforeRender?: (options: KanbanProps) => void;
    afterRender?: (firstRender: boolean) => void;
    beforeDestroy?: () => void;
}
