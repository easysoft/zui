import type {ClassNameLike, CustomContentType, HElementProps, SizeSetting} from '@zui/core';
import type {ToolbarSetting} from '@zui/toolbar';
import type {KanbanLaneName} from './kanban-lane-name';
import type {KanbanLaneProps} from './kanban-lane-props';

export interface KanbanLaneOptions extends HElementProps {
    name: KanbanLaneName;
    deleted?: boolean;
    color?: string;
    order?: number;
    title?: CustomContentType;
    titleClass?: ClassNameLike
    actions? : ToolbarSetting<[KanbanLaneProps]>;
    height?: SizeSetting | ((lane: KanbanLaneOptions) => SizeSetting);
    minHeight?: SizeSetting;
    maxHeight?: SizeSetting;
}
