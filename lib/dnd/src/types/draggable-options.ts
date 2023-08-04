import {Cash} from '@zui/core';

export type DraggableOptions = {
    selector?: string;
    handle?: string;
    hasDraggingClass?: string;
    draggingClass?: string;
    target?: string | ((dragElement: HTMLElement) => (HTMLElement[] | Cash));
    droppableClass?: string;
    droppingClass?: string;
    dropEffect?: 'copy' | 'move' | 'link' | 'none';
    beforeDrag?: (event: MouseEvent, dragElement: HTMLElement) => boolean;
    onDragStart?: (event: DragEvent, dragElement: HTMLElement) => boolean;
    onDrag?: (event: DragEvent, dragElement: HTMLElement) => void;
    onDragEnd?: (event: DragEvent, dragElement: HTMLElement) => void;
    onDragEnter?: (event: DragEvent, dragElement: HTMLElement, dropElement: HTMLElement) => void;
    onDragOver?: (event: DragEvent, dragElement: HTMLElement, dropElement: HTMLElement) => void;
    onDragLeave?: (event: DragEvent, dragElement: HTMLElement, dropElement: HTMLElement) => void;
    onDrop?: (event: Event, dragElement: HTMLElement, dropElement: HTMLElement) => void;
};
