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

    describe('drop target transitions', () => {
        async function startDrag(droppingClass = 'is-dropping') {
            const element = document.createElement('div');
            element.innerHTML = `
                <div draggable="true"></div>
                <div class="target"><input><span>Label</span><div class="target"><input></div></div>
                <div class="target"><input></div>
                <div class="blank"></div>
            `;
            document.body.append(element);
            const [source, target, nextTarget, blank] = Array.from(element.children) as HTMLElement[];
            const input = target.querySelector('input')!;
            const nextInput = nextTarget.querySelector('input')!;
            const onDragEnter = vi.fn();
            const onDragLeave = vi.fn();
            const onDragOver = vi.fn();
            const onDrop = vi.fn();
            const draggable = new Draggable(element, {
                target: '.target',
                droppingClass,
                onDragEnter,
                onDragLeave,
                onDragOver,
                onDrop,
            });
            await flushAnimationFrame();
            const dataTransfer = {dropEffect: 'none'};
            fireEvent.mouseDown(source);
            fireEvent.dragStart(source, {dataTransfer});
            fireEvent.dragOver(input, {dataTransfer});
            expect(draggable.dropElement).toBe(target);
            return {draggable, source, target, input, nextTarget, nextInput, blank, dataTransfer, onDragEnter, onDragLeave, onDragOver, onDrop};
        }

        function leave(target: HTMLElement, relatedTarget: HTMLElement | null) {
            fireEvent(target, new MouseEvent('dragleave', {bubbles: true, cancelable: true, relatedTarget}));
        }

        it.each(['dragEnter', 'dragOver'] as const)('clears the old target on %s over blank space', async (type) => {
            const {draggable, source, target, input, blank, dataTransfer, onDragEnter, onDragLeave, onDragOver, onDrop} = await startDrag();

            expect(fireEvent[type](blank, {dataTransfer})).toBe(true);
            fireEvent[type](blank, {dataTransfer});

            expect(draggable.dropElement).toBeNull();
            expect(target).not.toHaveClass('is-dropping');
            expect(onDragLeave).toHaveBeenCalledExactlyOnceWith(expect.any(Event), source, target);
            expect(onDragEnter).toHaveBeenCalledOnce();
            expect(onDragOver).toHaveBeenCalledOnce();
            fireEvent.drop(blank, {dataTransfer});
            expect(onDrop).not.toHaveBeenCalled();

            fireEvent.dragOver(input, {dataTransfer});
            expect(draggable.dropElement).toBe(target);
            expect(target).toHaveClass('is-dropping');
            expect(onDragEnter).toHaveBeenCalledTimes(2);
        });

        it.each([false, true])('clears a target left through a child (outside viewport: %s)', async (outsideViewport) => {
            const {draggable, source, target, input, blank, onDragLeave} = await startDrag();

            leave(input, outsideViewport ? null : blank);
            expect(draggable.dropElement).toBeNull();
            expect(target).not.toHaveClass('is-dropping');
            leave(target, outsideViewport ? null : blank);

            expect(draggable.dropElement).toBeNull();
            expect(target).not.toHaveClass('is-dropping');
            expect(onDragLeave).toHaveBeenCalledExactlyOnceWith(expect.any(Event), source, target);
        });

        it('keeps the active target while moving between its children', async () => {
            const {draggable, target, input, dataTransfer, onDragEnter, onDragLeave} = await startDrag();
            const label = target.querySelector('span')!;

            leave(target, input);
            fireEvent.dragEnter(label, {dataTransfer});
            leave(input, label);

            expect(draggable.dropElement).toBe(target);
            expect(target).toHaveClass('is-dropping');
            expect(onDragEnter).toHaveBeenCalledOnce();
            expect(onDragLeave).not.toHaveBeenCalled();
        });

        it.each(['is-dropping', ''])('preserves the new target after a late leave event with droppingClass=%j', async (droppingClass) => {
            const {draggable, source, target, input, nextTarget, nextInput, dataTransfer, onDragEnter, onDragLeave, onDrop} = await startDrag(droppingClass);

            fireEvent.dragEnter(nextInput, {dataTransfer});
            expect(onDragLeave).toHaveBeenCalledExactlyOnceWith(expect.any(Event), source, target);
            leave(input, nextInput);
            leave(target, nextInput);

            expect(draggable.dropElement).toBe(nextTarget);
            expect(target).not.toHaveClass('is-dropping');
            if (droppingClass) {
                expect(nextTarget).toHaveClass(droppingClass);
            }
            expect(onDragLeave).toHaveBeenCalledExactlyOnceWith(expect.any(Event), source, target);
            expect(onDragEnter).toHaveBeenLastCalledWith(expect.any(Event), source, nextTarget);

            fireEvent.drop(nextInput, {dataTransfer});
            expect(onDrop).toHaveBeenCalledExactlyOnceWith(expect.any(Event), source, nextTarget);
            fireEvent.dragEnd(source, {dataTransfer});
            expect(draggable.state).toEqual({dragging: null, dropping: null});
            expect(nextTarget).not.toHaveClass('is-dropping');
        });

        it('preserves the current target when moving into and out of a nested target', async () => {
            const {draggable, source, target, input, dataTransfer, onDragLeave} = await startDrag();
            const nestedTarget = target.querySelector<HTMLElement>('.target')!;
            const nestedInput = nestedTarget.querySelector('input')!;

            fireEvent.dragEnter(nestedInput, {dataTransfer});
            leave(input, nestedInput);
            leave(target, nestedInput);

            expect(draggable.dropElement).toBe(nestedTarget);
            expect(nestedTarget).toHaveClass('is-dropping');
            expect(target).not.toHaveClass('is-dropping');
            expect(onDragLeave).toHaveBeenCalledExactlyOnceWith(expect.any(Event), source, target);

            fireEvent.dragEnter(input, {dataTransfer});
            leave(nestedInput, input);
            leave(nestedTarget, input);

            expect(draggable.dropElement).toBe(target);
            expect(target).toHaveClass('is-dropping');
            expect(nestedTarget).not.toHaveClass('is-dropping');
            expect(onDragLeave).toHaveBeenCalledTimes(2);
            expect(onDragLeave).toHaveBeenLastCalledWith(expect.any(Event), source, nestedTarget);
        });
    });
});
