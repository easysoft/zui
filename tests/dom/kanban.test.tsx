// @vitest-environment jsdom

import {act, fireEvent, render} from '@testing-library/preact';
import {createRef} from 'preact';
import {describe, expect, it, vi} from 'vitest';
import {Kanban as VanillaKanban} from '@zui/kanban';
import {Kanban} from '@zui/kanban/src/component/kanban';
import {flushAnimationFrame} from '../setup/dom';

import type {KanbanProps} from '@zui/kanban';

async function mountDraggableKanban(options: Partial<KanbanProps> = {}) {
    const element = document.createElement('div');
    document.body.append(element);
    const kanban = new VanillaKanban(element, {
        responsive: false,
        data: {
            lanes: [{name: 'lane', title: 'Lane'}],
            cols: [{name: 'todo', title: 'Todo'}, {name: 'done', title: 'Done'}],
            items: [{id: 'task', title: 'Task', lane: 'lane', col: 'todo'}],
        },
        ...options,
    });
    await flushAnimationFrame();
    await vi.advanceTimersByTimeAsync(1);
    return {
        kanban,
        card: kanban.element.querySelector<HTMLElement>('.kanban-item')!,
        destination: kanban.element.querySelector<HTMLElement>('.kanban-lane-col[z-col="done"] .kanban-items')!,
    };
}

function startDrag(card: HTMLElement) {
    fireEvent.mouseDown(card);
    fireEvent.dragStart(card);
}

describe('Kanban', () => {
    it('does not collapse auto-width columns when runtime bounds are also auto', () => {
        const autoBound = 'auto' as unknown as number;
        const {container} = render(
            <Kanban
                data={{
                    lanes: [{name: 'lane', title: 'Lane'}],
                    cols: [{name: 'todo', title: 'Todo'}],
                    items: {},
                }}
                colWidth="auto"
                minColWidth={autoBound}
                maxColWidth={autoBound}
                draggable={false}
                responsive={false}
            />,
        );
        const headerCol = container.querySelector<HTMLElement>('.kanban-header-col')!;
        const laneCol = container.querySelector<HTMLElement>('.kanban-lane-col')!;

        expect(headerCol.style.getPropertyValue('--kanban-col-width')).toBe('150px');
        expect(laneCol.style.getPropertyValue('--kanban-col-width')).toBe('150px');
    });

    it('restores the pre-drop data through a detached rollback callback', async () => {
        const ref = createRef<Kanban>();
        let restore: (() => void) | undefined;
        const onDrop: KanbanProps['onDrop'] = (_changes, _info, callback) => {
            restore = callback;
        };
        const {container} = render(
            <Kanban
                ref={ref}
                data={{
                    lanes: [{name: 'lane', title: 'Lane'}],
                    cols: [{name: 'todo', title: 'Todo'}, {name: 'done', title: 'Done'}],
                    items: [{id: 'task', title: 'Task', lane: 'lane', col: 'todo', order: 7}],
                }}
                responsive={false}
                onDrop={onDrop}
            />,
        );
        await flushAnimationFrame();
        act(() => {
            void ref.current!.updateItem({id: 'task', title: 'Edited before dragging'});
        });

        const card = container.querySelector<HTMLElement>('.kanban-item')!;
        const destination = container.querySelector<HTMLElement>('.kanban-lane-col[z-col="done"] .kanban-items')!;
        fireEvent.mouseDown(card);
        fireEvent.dragStart(card);
        fireEvent.drop(destination);
        fireEvent.dragEnd(card);

        expect(restore).toBeTypeOf('function');
        expect(ref.current!.getItem('task')).toMatchObject({col: 'done'});
        act(() => {
            restore!();
        });
        expect(ref.current!.getItem('task')).toMatchObject({
            title: 'Edited before dragging', lane: 'lane', col: 'todo', order: 7,
        });
        expect(container.querySelector('.kanban-lane-col[z-col="todo"] .kanban-item')).toHaveTextContent('Edited before dragging');
    });

    it('uses replaced, removed and newly added drop callbacks after render', async () => {
        const initialDrop = vi.fn(() => false as const);
        const nextDrop = vi.fn(() => false as const);
        const {kanban, card, destination} = await mountDraggableKanban({onDrop: initialDrop});

        act(() => kanban.render({onDrop: nextDrop}));
        startDrag(card);
        fireEvent.drop(destination);
        fireEvent.dragEnd(card);
        expect(initialDrop).not.toHaveBeenCalled();
        expect(nextDrop).toHaveBeenCalledTimes(1);

        act(() => kanban.render({onDrop: undefined}));
        startDrag(card);
        fireEvent.drop(destination);
        fireEvent.dragEnd(card);
        expect(nextDrop).toHaveBeenCalledTimes(1);

        act(() => kanban.render({onDrop: nextDrop}));
        startDrag(card);
        fireEvent.drop(destination);
        fireEvent.dragEnd(card);
        expect(nextDrop).toHaveBeenCalledTimes(2);
    });

    it('uses current drop rules and predicates when each drag starts', async () => {
        const {kanban, card, destination} = await mountDraggableKanban();
        const settings: Partial<KanbanProps>[] = [
            {dropRules: {todo: false}},
            {dropRules: {todo: ['done']}},
            {dropRules: undefined, canDrop: () => false},
            {canDrop: () => true},
            {canDrop: undefined},
        ];
        const allowed = [false, true, false, true, true];

        settings.forEach((options, index) => {
            act(() => kanban.render(options));
            startDrag(card);
            expect(destination.getAttribute('droppable')).toBe(allowed[index] ? 'true' : null);
            fireEvent.dragEnd(card);
        });
    });

    it('uses the current drag-start callback after render', async () => {
        const initialStart = vi.fn();
        const nextStart = vi.fn(() => false as const);
        const {kanban, card, destination} = await mountDraggableKanban({onDragStart: initialStart});

        act(() => kanban.render({onDragStart: nextStart}));
        startDrag(card);
        expect(initialStart).not.toHaveBeenCalled();
        expect(nextStart).toHaveBeenCalledTimes(1);
        expect(destination).not.toHaveAttribute('droppable');
        fireEvent.dragEnd(card);

        act(() => kanban.render({onDragStart: undefined}));
        startDrag(card);
        expect(destination).toHaveAttribute('droppable', 'true');
        fireEvent.dragEnd(card);
    });

    it('preserves the low-level canDrop override', async () => {
        const canDrop = vi.fn(() => false);
        const {card, destination} = await mountDraggableKanban({
            draggable: {canDrop},
            dropRules: {todo: ['done']},
        });

        startDrag(card);
        expect(canDrop).toHaveBeenCalled();
        expect(destination).not.toHaveAttribute('droppable');
        fireEvent.dragEnd(card);
    });
});
