import type {HElementProps, Selector, SizeSetting} from '@zui/core';
import type {MoveableOptions} from '@zui/dnd/src/types';
import type {KanbanProps} from './kanban-props';
import type {KanbanRegionProps} from './kanban-region-props';
import type {KanbanLinkOptions} from './kanban-link-options';

export interface KanbanListProps extends HElementProps {
    items?: (KanbanProps | KanbanRegionProps)[];
    kanbanProps?: Partial<KanbanRegionProps> | ((item: KanbanProps | KanbanRegionProps, index: number) => KanbanProps | KanbanRegionProps);
    moveable?: boolean | MoveableOptions;
    responsive?: Selector | boolean;
    sticky?: boolean;
    height?: SizeSetting | (() => SizeSetting);
    width?: SizeSetting | (() => SizeSetting);
    scrollbarHover?: boolean;

    /* Link options.  */
    links?: KanbanLinkOptions[];
    linkProps?: Partial<KanbanLinkOptions>;
    linkItemKey?: string;
    editLinks?: boolean;
    showLinkOnHover?: boolean;
    showLinkOnSelected?: boolean;
    selectable?: boolean;
    getLink?: (link: KanbanLinkOptions) => KanbanLinkOptions | false;
    onAddLink?: (newLink: KanbanLinkOptions) => void | false | Promise<void | false>;
    onDeleteLink?: (link: KanbanLinkOptions) => void | false | Promise<void | false>;
}
