import type {ClassNameLike, CustomContentType, HElementProps, IconType, SizeSetting} from '@zui/core';
import type {ToolbarSetting} from '@zui/toolbar';
import type {KanbanColName} from './kanban-col-name';

export interface KanbanColOptions extends HElementProps {
    name: KanbanColName;
    parentName?: KanbanColName;
    subCols?: KanbanColOptions[];
    deleted?: boolean;
    width?: SizeSetting | ((col: KanbanColOptions) => SizeSetting);
    minWidth?: SizeSetting;
    maxWidth?: SizeSetting;
    color?: string;
    order?: number;
    prefix?: CustomContentType;
    prefixClass?: ClassNameLike;
    title?: CustomContentType;
    titleClass?: ClassNameLike;
    subtitle?: CustomContentType;
    subtitleClass?: ClassNameLike;
    icon?: IconType;
    trailingIcon?: IconType;
    actions?: ToolbarSetting<[KanbanColOptions]>;
    content?: CustomContentType;
    contentClass?: ClassNameLike;
}
