import type {HElementProps, Selector, SizeSetting} from '@zui/core';
import type {MoveableOptions} from '@zui/dnd/src/types';
import type {KanbanProps} from './kanban-props';
import type {KanbanGroupProps} from './kanban-group-props';

export interface KanbanListProps extends HElementProps {
    items?: (KanbanProps | KanbanGroupProps)[];
    kanbanProps?: Partial<KanbanGroupProps> | ((item: KanbanProps | KanbanGroupProps, index: number) => KanbanProps | KanbanGroupProps);
    moveable?: boolean | MoveableOptions;
    responsive?: Selector | boolean;
    sticky?: boolean;
    height?: SizeSetting | (() => SizeSetting);
    width?: SizeSetting | (() => SizeSetting);
    scrollbarHover?: boolean;
}
