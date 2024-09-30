import type {KanbanItemInfo} from './kanban-item-info';

export type KanbanDnDType = 'item' | 'lane' | 'col' | 'newItem';

export type KanbanDropSide = 'before' | 'after' | 'inside';

export type KanbanElementInfo = Partial<KanbanItemInfo> & {
    type: KanbanDnDType,
    element: HTMLElement,
    key?: string,
};

export type KanbanDragInfo = {
    event: DragEvent,
    drag: KanbanElementInfo,
};

export type KanbanDropInfo = {
    event: Event,
    drag: KanbanElementInfo,
    drop: KanbanElementInfo,
    side: KanbanDropSide,
    data?: unknown;
};
