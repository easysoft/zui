import type {CustomContentType, HElementProps, SizeSetting} from '@zui/core';
import type {DraggableOptions} from '@zui/dnd';
import type {KanbanDataSetting} from './kanban-data-setting';
import type {KanbanLaneOptions} from './kanban-lane-options';
import type {KanbanColOptions} from './kanban-col-options';
import type {KanbanItem} from './kanban-item';
import type {KanbanItemInfo} from './kanban-item-info';
import type {KanbanData} from './kanban-data';
import type {KanbanLinkOptions} from './kanban-link-options';
import type {KanbanDnDType, KanbanDragInfo, KanbanDropInfo} from './kanban-dnd-info';

export interface KanbanProps extends HElementProps {
    data: KanbanDataSetting;
    laneProps?: Partial<KanbanLaneOptions>;
    colProps?: Partial<KanbanColOptions>;
    laneNameWidth?: number;
    itemCountPerRow?: number;
    itemProps?: Partial<KanbanItem>;
    editLinks?: boolean;
    sortLane?: boolean;
    sticky?: boolean;
    lanesGap?: SizeSetting;
    colsGap?: SizeSetting;
    itemGap?: SizeSetting;
    itemKey?: string;
    getCol?: (col: KanbanColOptions) => KanbanColOptions | false;
    getLane?: (lane: KanbanLaneOptions) => KanbanLaneOptions | false;
    getItem?: (info: KanbanItemInfo) => KanbanItem | false;
    itemRender?: (info: KanbanItemInfo) => CustomContentType;

    /* Async load. */
    onLoad?: (data: KanbanData) => void | KanbanData;
    onLoadFail?: CustomContentType | ((error: Error) => CustomContentType | void);

    /* Link options.  */
    linkProps?: Partial<KanbanLinkOptions>;
    getLink?: (link: KanbanLinkOptions) => KanbanLinkOptions | false;
    onAddLink?: (newLink: KanbanLinkOptions) => void | false | Promise<void | false>;
    onDeleteLink?: (link: KanbanLinkOptions) => void | false | Promise<void | false>;

    /* Drag and drop. */
    draggable?: DraggableOptions | boolean;
    dragTypes?: KanbanDnDType | KanbanDnDType[];
    onDragStart?: (info: KanbanDragInfo) => void | boolean;
    canDropHere?: (info: KanbanDropInfo) => boolean;
    onDrop?: (changes: Partial<KanbanData>, info: KanbanDropInfo) => void | false | Promise<void | false>;

    /* Component lifecycle. */
    beforeRender?: (options: KanbanProps) => void;
    afterRender?: (firstRender: boolean) => void;
    beforeDestroy?: () => void;
}
