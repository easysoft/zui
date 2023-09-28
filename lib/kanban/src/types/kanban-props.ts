import type {CustomContentType, HElementProps, SizeSetting} from '@zui/core';
import type {DraggableOptions} from '@zui/dnd';
import type {KanbanDataSetting} from './kanban-data-setting';
import type {KanbanLaneOptions} from './kanban-lane-options';
import type {KanbanColOptions} from './kanban-col-options';
import type {KanbanItem} from './kanban-item';
import type {KanbanItemInfo} from './kanban-item-info';
import type {KanbanData} from './kanban-data';
import type {KanbanLinkOptions} from './kanban-link-options';

export interface KanbanProps extends HElementProps {
    data: KanbanDataSetting;
    laneProps?: Partial<KanbanLaneOptions>;
    colProps?: Partial<KanbanColOptions>;
    laneNameWidth?: number;
    itemProps?: Partial<KanbanItem>;
    linkProps?: Partial<KanbanLinkOptions>;
    editLinks?: boolean;
    sortLane?: boolean;
    sticky?: boolean;
    lanesGap?: SizeSetting;
    colsGap?: SizeSetting;
    draggable?: DraggableOptions | boolean;
    itemKey?: string;
    getCol?: (col: KanbanColOptions) => KanbanColOptions | false;
    getLane?: (lane: KanbanLaneOptions) => KanbanLaneOptions | false;
    getItem?: (info: KanbanItemInfo) => KanbanItem | false;
    getLink?: (link: KanbanLinkOptions) => KanbanLinkOptions | false;
    itemRender?: (info: KanbanItemInfo) => CustomContentType;
    onAddLink?: (newLink: KanbanLinkOptions) => void | false | Promise<void | false>;
    onLoad?: (data: KanbanData) => void | KanbanData;
    onLoadFail?: CustomContentType | ((error: Error) => CustomContentType | void);
    beforeRender?: (options: KanbanProps) => void;
    afterRender?: (firstRender: boolean) => void;
    beforeDestroy?: () => void;
}
