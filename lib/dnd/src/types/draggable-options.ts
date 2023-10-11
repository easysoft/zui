import {Selector} from '@zui/core';
import {DraggableState} from './draggable-state';

export type DraggableOptions = {
    selector?: string;
    handle?: string;
    hasDraggingClass?: string;
    draggingClass?: string;
    target?: string | ((dragElement: HTMLElement) => Selector);
    droppableClass?: string;
    droppingClass?: string;
    dropEffect?: 'copy' | 'move' | 'link' | 'none';
    onChange?: (newState: DraggableState, oldState: DraggableState) => void;
    beforeDrag?: (event: MouseEvent, dragElement: HTMLElement) => void | boolean;
    onDragStart?: (event: DragEvent, dragElement: HTMLElement) => void | boolean;
    onDrag?: (event: DragEvent, dragElement: HTMLElement) => void;
    onDragEnd?: (event: DragEvent, dragElement: HTMLElement) => void;
    onDragEnter?: (event: DragEvent, dragElement: HTMLElement, dropElement: HTMLElement) => void;
    onDragOver?: (event: DragEvent, dragElement: HTMLElement, dropElement: HTMLElement) => void;
    onDragLeave?: (event: DragEvent, dragElement: HTMLElement, dropElement: HTMLElement) => void;
    onDrop?: (event: Event, dragElement: HTMLElement, dropElement: HTMLElement) => void;
};
