import type {KanbanItemInfo} from './kanban-item-info';

export type KanbanDnDType = 'item' | 'lane' | 'col';

export type KanbanDropSide = 'before' | 'after' | 'inside';

export type KanbanElementInfo = Partial<KanbanItemInfo> & {
    type: KanbanDnDType,
    element: HTMLElement,
};

export type KanbanDragInfo = Partial<KanbanItemInfo> & {
    event: DragEvent,
    drag: KanbanElementInfo,
};

export type KanbanDropInfo = KanbanDragInfo & {
    event: Event,
    drag: KanbanElementInfo,
    drop: KanbanElementInfo,
    side: KanbanDropSide,
};
