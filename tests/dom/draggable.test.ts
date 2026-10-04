// @vitest-environment jsdom

import {fireEvent} from '@testing-library/preact';
import {describe, expect, it, vi} from 'vitest';
import {Component} from '@zui/core';
import {Draggable} from '@zui/dnd';
import {flushAnimationFrame} from '../setup/dom';

describe('Draggable', () => {
    it('can be destroyed before initialization and recreated on the same element', async () => {
        const element = document.createElement('div');
        element.innerHTML = '<div draggable="true"></div>';
        document.body.append(element);
        const onDestroy = vi.fn();
        const onInited = vi.fn();
        const draggable = new Draggable(element, {$onDestroy: onDestroy, $onInited: onInited});
        const afterInit = vi.spyOn(draggable, 'afterInit');

        expect(draggable.inited).toBe(false);
        expect(() => draggable.destroy()).not.toThrow();
        draggable.destroy();

        expect(draggable.destroyed).toBe(true);
        expect(onDestroy).toHaveBeenCalledOnce();
        expect(Draggable.get(element)).toBeUndefined();
        expect(Draggable.getAll()).toEqual([]);
        expect(Component.ALL.has(element)).toBe(false);
        expect(element).not.toHaveAttribute(Draggable.ATTR_KEY);
        expect(element).not.toHaveAttribute(Draggable.DATA_KEY);
        expect(element).not.toHaveAttribute('z-use');

        await flushAnimationFrame();

        expect(draggable.inited).toBe(false);
        expect(afterInit).not.toHaveBeenCalled();
        expect(onInited).not.toHaveBeenCalled();
        const dragElement = element.firstElementChild as HTMLElement;
        fireEvent.mouseDown(dragElement);
        expect(draggable.dragElement).toBeNull();

        const replacement = new Draggable(element);
        await flushAnimationFrame();
        fireEvent.mouseDown(dragElement);

        expect(Draggable.get(element)).toBe(replacement);
        expect(replacement.dragElement).toBe(dragElement);
        expect(draggable.dragElement).toBeNull();
    });

    it('cleans up an active drag and unbinds custom containers after initialization', async () => {
        const element = document.createElement('div');
        const dragContainer = document.createElement('div');
        const dropContainer = document.createElement('div');
        dragContainer.innerHTML = '<div draggable="true"></div>';
        dropContainer.innerHTML = '<div></div>';
        document.body.append(element, dragContainer, dropContainer);
        const dragElement = dragContainer.firstElementChild as HTMLElement;
        const dropElement = dropContainer.firstElementChild as HTMLElement;
        const onDragStart = vi.fn();
        const onDrop = vi.fn();
        const onDestroy = vi.fn();
        const draggable = new Draggable(element, {
            dragContainer,
            dropContainer,
            target: () => dropElement,
            onDragStart,
            onDrop,
            $onDestroy: onDestroy,
        });
        await flushAnimationFrame();
        fireEvent.mouseDown(dragElement);
        fireEvent.dragStart(dragElement);

        expect(draggable.dragElement).toBe(dragElement);
        expect(element).toHaveClass('has-dragging');
        expect(dragElement).toHaveClass('is-dragging');
        expect(dropElement).toHaveClass('is-droppable');

        draggable.destroy();
        draggable.destroy();

        expect(draggable.state).toEqual({dragging: null, dropping: null});
        expect(element).not.toHaveClass('has-dragging');
        expect(dragElement).not.toHaveClass('is-dragging');
        expect(dropElement).not.toHaveClass('is-droppable');
        expect(Draggable.get(element)).toBeUndefined();
        expect(onDestroy).toHaveBeenCalledOnce();

        fireEvent.mouseDown(dragElement);
        fireEvent.dragStart(dragElement);
        fireEvent.drop(dropElement);
        fireEvent.mouseUp(document);

        expect(draggable.state).toEqual({dragging: null, dropping: null});
        expect(onDragStart).toHaveBeenCalledOnce();
        expect(onDrop).not.toHaveBeenCalled();
    });
});
