// @vitest-environment jsdom

import {act, fireEvent, render} from '@testing-library/preact';
import {createRef} from 'preact';
import {describe, expect, it, vi} from 'vitest';
import {Kanban as VanillaKanban} from '@zui/kanban';
import {Kanban} from '@zui/kanban/src/component/kanban';
import {KanbanList} from '@zui/kanban/src/component/kanban-list';
import {KanbanRegion} from '@zui/kanban/src/component/kanban-region';
import {flushAnimationFrame} from '../setup/dom';

import type {
    KanbanBackgroundPattern,
    KanbanProps,
} from '@zui/kanban';

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

describe('Kanban background pattern', () => {
    const data = {
        lanes: [
            {
                name: 'lane',
                title: 'Lane',
                color: 'rgb(4, 5, 6)',
            },
        ],
        cols: [
            {
                name: 'todo',
                title: 'Todo',
                color: 'rgb(7, 8, 9)',
                backgroundColor: 'rgb(1, 2, 3)',
            },
            {name: 'done', title: 'Done'},
        ],
        items: {},
    };

    const rangeData = {
        lanes: [
            {name: 'lane-a', title: 'Lane A', color: 'rgb(4, 5, 6)'},
            {name: 'lane-b', title: 'Lane B', color: 'rgb(6, 7, 8)'},
        ],
        cols: [
            {name: 'todo', title: 'Todo'},
            {name: 'done', title: 'Done'},
        ],
        items: {},
    };

    it('uses default background when backgroundPattern is empty', () => {
        const {container} = render(
            <Kanban
                data={data}
                draggable={false}
                responsive={false}
            />,
        );
        const kanban = container.querySelector('.kanban')!;
        const header = container.querySelector<HTMLElement>('.kanban-header-col[z-col="todo"]')!;
        const todoCol = container.querySelector<HTMLElement>('.kanban-lane-col[z-col="todo"]')!;
        const doneCol = container.querySelector<HTMLElement>('.kanban-lane-col[z-col="done"]')!;

        expect([...kanban.classList].some(name => name.startsWith('is-bg-'))).toBe(false);
        expect(header.style.getPropertyValue('--kanban-col-color')).toBe('rgb(7, 8, 9)');
        expect(header.style.getPropertyValue('--kanban-col-bg')).toBe('');
        expect(todoCol.style.getPropertyValue('--kanban-col-bg')).toBe('');
        expect(doneCol.style.getPropertyValue('--kanban-col-bg')).toBe('');
    });

    it('uses column background in vertical pattern', () => {
        const {container} = render(
            <Kanban
                data={data}
                backgroundPattern="vertical"
                draggable={false}
                responsive={false}
            />,
        );
        const kanban = container.querySelector('.kanban')!;
        const header = container.querySelector<HTMLElement>('.kanban-header-col[z-col="todo"]')!;
        const todoCol = container.querySelector<HTMLElement>('.kanban-lane-col[z-col="todo"]')!;
        const doneCol = container.querySelector<HTMLElement>('.kanban-lane-col[z-col="done"]')!;

        expect(kanban.classList.contains('is-bg-vertical')).toBe(true);
        expect(header.style.getPropertyValue('--kanban-col-bg')).toBe('rgb(1, 2, 3)');
        expect(todoCol.style.getPropertyValue('--kanban-col-bg')).toBe('rgb(1, 2, 3)');
        expect(doneCol.style.getPropertyValue('--kanban-col-bg')).toBe('');
    });

    it('applies a sub-column background when the parent has no background', () => {
        const subColumnData = {
            lanes: [{name: 'lane-a'}],
            cols: [
                {name: 'doing', title: 'Doing'},
                {
                    name: 'sub-a',
                    title: 'Sub A',
                    parentName: 'doing',
                    backgroundColor: 'rgb(40, 50, 60)',
                },
            ],
            items: {},
        };
        const {container} = render(
            <Kanban
                data={subColumnData}
                backgroundPattern="vertical"
                draggable={false}
                responsive={false}
            />,
        );
        const parentHeader = container.querySelector<HTMLElement>('.kanban-header-col[z-col="doing"]')!;
        const subHeader = container.querySelector<HTMLElement>('.kanban-header-col[z-col="sub-a"]')!;
        const subCell = container.querySelector<HTMLElement>('.kanban-lane-col[z-col="sub-a"]')!;

        expect(parentHeader.style.getPropertyValue('--kanban-col-bg')).toBe('');
        expect(subHeader.style.getPropertyValue('--kanban-col-bg')).toBe('rgb(40, 50, 60)');
        expect(subCell.style.getPropertyValue('--kanban-col-bg')).toBe('rgb(40, 50, 60)');
    });

    it('uses its own sub-column background and inherits the parent only when unset', () => {
        const subColumnData = {
            lanes: [{name: 'lane-a'}],
            cols: [
                {
                    name: 'doing',
                    title: 'Doing',
                    backgroundColor: 'rgb(10, 20, 30)',
                },
                {
                    name: 'sub-a',
                    title: 'Sub A',
                    parentName: 'doing',
                    backgroundColor: 'rgb(40, 50, 60)',
                },
                {
                    name: 'sub-b',
                    title: 'Sub B',
                    parentName: 'doing',
                },
            ],
            items: {},
        };
        const {container} = render(
            <Kanban
                data={subColumnData}
                backgroundPattern="vertical"
                draggable={false}
                responsive={false}
            />,
        );
        const parentHeader = container.querySelector<HTMLElement>('.kanban-header-col[z-col="doing"]')!;
        const subAHeader = container.querySelector<HTMLElement>('.kanban-header-col[z-col="sub-a"]')!;
        const subBHeader = container.querySelector<HTMLElement>('.kanban-header-col[z-col="sub-b"]')!;
        const subACell = container.querySelector<HTMLElement>('.kanban-lane-col[z-col="sub-a"]')!;
        const subBCell = container.querySelector<HTMLElement>('.kanban-lane-col[z-col="sub-b"]')!;

        expect(parentHeader.style.getPropertyValue('--kanban-col-bg')).toBe('rgb(10, 20, 30)');
        expect(subAHeader.style.getPropertyValue('--kanban-col-bg')).toBe('rgb(40, 50, 60)');
        expect(subACell.style.getPropertyValue('--kanban-col-bg')).toBe('rgb(40, 50, 60)');
        expect(subBHeader.style.getPropertyValue('--kanban-col-bg')).toBe('rgb(10, 20, 30)');
        expect(subBCell.style.getPropertyValue('--kanban-col-bg')).toBe('rgb(10, 20, 30)');
    });

    it('falls back to no rule for an unknown pattern', () => {
        const {container} = render(
            <Kanban
                data={data}
                backgroundPattern={'unknown' as KanbanBackgroundPattern}
                draggable={false}
                responsive={false}
            />,
        );
        const kanban = container.querySelector('.kanban')!;
        expect([...kanban.classList].some(name => name.startsWith('is-bg-'))).toBe(false);
    });

    it('uses lane color for rows in horizontal pattern', () => {
        const {container} = render(
            <Kanban
                data={data}
                backgroundPattern="horizontal"
                draggable={false}
                responsive={false}
            />,
        );
        const kanban = container.querySelector('.kanban')!;
        const header = container.querySelector<HTMLElement>('.kanban-header-col[z-col="todo"]')!;
        const todoCol = container.querySelector<HTMLElement>('.kanban-lane-col[z-col="todo"]')!;

        expect(kanban.classList.contains('is-bg-horizontal')).toBe(true);
        expect(todoCol.style.getPropertyValue('--kanban-col-bg')).toBe('var(--kanban-lane-color)');
        expect(header.style.getPropertyValue('--kanban-col-bg')).toBe('rgb(4, 5, 6)');
    });

    it('supports a custom column background variable', () => {
        const {container} = render(
            <Kanban
                data={data}
                backgroundPattern="vertical"
                colBgColor="var(--custom-col-bg)"
                draggable={false}
                responsive={false}
            />,
        );
        const header = container.querySelector<HTMLElement>('.kanban-header-col[z-col="todo"]')!;
        const todoCol = container.querySelector<HTMLElement>('.kanban-lane-col[z-col="todo"]')!;

        expect(header.style.getPropertyValue('--kanban-col-bg')).toBe('var(--custom-col-bg)');
        expect(todoCol.style.getPropertyValue('--kanban-col-bg')).toBe('var(--custom-col-bg)');
    });

    it('supports a custom row background variable', () => {
        const {container} = render(
            <Kanban
                data={data}
                backgroundPattern="horizontal"
                rowBgColor="var(--custom-row-bg)"
                draggable={false}
                responsive={false}
            />,
        );
        const lane = container.querySelector<HTMLElement>('.kanban-lane')!;
        const header = container.querySelector<HTMLElement>('.kanban-header-col[z-col="todo"]')!;
        const todoCol = container.querySelector<HTMLElement>('.kanban-lane-col[z-col="todo"]')!;

        expect(lane.style.getPropertyValue('--kanban-lane-color')).toBe('rgb(4, 5, 6)');
        expect(header.style.getPropertyValue('--kanban-col-bg')).toBe('var(--custom-row-bg)');
        expect(todoCol.style.getPropertyValue('--kanban-col-bg')).toBe('var(--custom-row-bg)');
    });

    it('supports a column background color value', () => {
        const {container} = render(
            <Kanban
                data={data}
                backgroundPattern="vertical"
                colBgColor="rgb(10, 11, 12)"
                draggable={false}
                responsive={false}
            />,
        );
        const header = container.querySelector<HTMLElement>('.kanban-header-col[z-col="todo"]')!;
        const doneHeader = container.querySelector<HTMLElement>('.kanban-header-col[z-col="done"]')!;
        const todoCol = container.querySelector<HTMLElement>('.kanban-lane-col[z-col="todo"]')!;
        const doneCol = container.querySelector<HTMLElement>('.kanban-lane-col[z-col="done"]')!;

        expect(header.style.getPropertyValue('--kanban-col-bg')).toBe('rgb(10, 11, 12)');
        expect(doneHeader.style.getPropertyValue('--kanban-col-bg')).toBe('rgb(10, 11, 12)');
        expect(todoCol.style.getPropertyValue('--kanban-col-bg')).toBe('rgb(10, 11, 12)');
        expect(doneCol.style.getPropertyValue('--kanban-col-bg')).toBe('rgb(10, 11, 12)');
    });

    it('supports a row background color value', () => {
        const {container} = render(
            <Kanban
                data={data}
                backgroundPattern="horizontal"
                rowBgColor="rgb(20, 21, 22)"
                draggable={false}
                responsive={false}
            />,
        );
        const lane = container.querySelector<HTMLElement>('.kanban-lane')!;
        const header = container.querySelector<HTMLElement>('.kanban-header-col[z-col="todo"]')!;
        const todoCol = container.querySelector<HTMLElement>('.kanban-lane-col[z-col="todo"]')!;

        expect(lane.style.getPropertyValue('--kanban-lane-color')).toBe('rgb(4, 5, 6)');
        expect(header.style.getPropertyValue('--kanban-col-bg')).toBe('rgb(20, 21, 22)');
        expect(todoCol.style.getPropertyValue('--kanban-col-bg')).toBe('rgb(20, 21, 22)');
    });

    it('updates all backgrounds when the pattern changes', async () => {
        const ref = createRef<Kanban>();
        const {container} = render(
            <Kanban
                ref={ref}
                data={data}
                draggable={false}
                responsive={false}
            />,
        );
        const kanban = container.querySelector('.kanban')!;
        const header = container.querySelector<HTMLElement>('.kanban-header-col[z-col="todo"]')!;
        const todoCol = container.querySelector<HTMLElement>('.kanban-lane-col[z-col="todo"]')!;

        act(() => {
            void ref.current!.updateBackgroundPattern('horizontal');
        });

        expect(kanban.classList.contains('is-bg-horizontal')).toBe(true);
        expect(header.style.getPropertyValue('--kanban-col-bg')).toBe('rgb(4, 5, 6)');
        expect(todoCol.style.getPropertyValue('--kanban-col-bg')).toBe('var(--kanban-lane-color)');

        act(() => {
            void ref.current!.updateBackgroundPattern('vertical');
        });

        expect(kanban.classList.contains('is-bg-vertical')).toBe(true);
        expect(header.style.getPropertyValue('--kanban-col-bg')).toBe('rgb(1, 2, 3)');
        expect(todoCol.style.getPropertyValue('--kanban-col-bg')).toBe('rgb(1, 2, 3)');
    });

    it('updates all kanbans in a kanban list', () => {
        const ref = createRef<KanbanList>();
        const {container} = render(
            <KanbanList
                ref={ref}
                items={[
                    {key: 'a', data},
                    {key: 'b', data},
                ]}
                responsive={false}
            />,
        );

        act(() => {
            void ref.current!.updateBackgroundPattern('horizontal');
        });

        const kanbans = [...container.querySelectorAll<HTMLElement>('.kanban')];
        expect(kanbans).toHaveLength(2);
        expect(kanbans.every(kanban => kanban.classList.contains('is-bg-horizontal'))).toBe(true);
    });

    it('applies the latest pattern after a collapsed region expands', () => {
        const ref = createRef<KanbanRegion>();
        const {container} = render(
            <KanbanRegion
                ref={ref}
                collapsed
                items={[{key: 'kanban', data}]}
            />,
        );

        act(() => {
            void ref.current!.updateBackgroundPattern('horizontal');
        });

        expect(container.querySelector('.kanban')).toBeNull();

        act(() => {
            ref.current!.toggle(true);
        });

        const kanban = container.querySelector('.kanban');
        expect(kanban).not.toBeNull();
        expect(kanban!.classList.contains('is-bg-horizontal')).toBe(true);
    });

    it('normalizes an unknown pattern when updated at runtime', async () => {
        const ref = createRef<Kanban>();
        const {container} = render(
            <Kanban
                ref={ref}
                data={data}
                draggable={false}
                responsive={false}
            />,
        );
        const kanban = container.querySelector('.kanban')!;

        act(() => {
            void ref.current!.updateBackgroundPattern('unknown' as KanbanBackgroundPattern);
        });

        expect([...kanban.classList].some(name => name.startsWith('is-bg-'))).toBe(false);
    });

    it('syncs a changed background pattern from props', () => {
        const {container, rerender} = render(
            <Kanban
                data={data}
                backgroundPattern="vertical"
                draggable={false}
                responsive={false}
            />,
        );

        rerender(
            <Kanban
                data={data}
                backgroundPattern="horizontal"
                draggable={false}
                responsive={false}
            />,
        );

        const kanban = container.querySelector('.kanban')!;
        const header = container.querySelector<HTMLElement>('.kanban-header-col[z-col="todo"]')!;

        expect(kanban.classList.contains('is-bg-horizontal')).toBe(true);
        expect(header.style.getPropertyValue('--kanban-col-bg')).toBe('rgb(4, 5, 6)');
    });

    it('updates only the target lane in vertical pattern', async () => {
        const ref = createRef<Kanban>();
        const {container} = render(
            <Kanban
                ref={ref}
                data={rangeData}
                backgroundPattern="vertical"
                draggable={false}
                responsive={false}
            />,
        );
        const laneA = container.querySelector<HTMLElement>('.kanban-lane[z-lane="lane-a"]')!;
        const laneB = container.querySelector<HTMLElement>('.kanban-lane[z-lane="lane-b"]')!;
        const header = container.querySelector<HTMLElement>('.kanban-header-col[z-col="todo"]')!;

        act(() => {
            void ref.current!.updateLane({name: 'lane-a', color: 'rgb(9, 9, 9)'});
        });

        expect(laneA.style.getPropertyValue('--kanban-lane-color')).toBe('rgb(9, 9, 9)');
        expect(laneB.style.getPropertyValue('--kanban-lane-color')).toBe('rgb(6, 7, 8)');
        expect(header.style.getPropertyValue('--kanban-col-bg')).toBe('');
    });

    it('updates only the target row in horizontal pattern', async () => {
        const ref = createRef<Kanban>();
        const {container} = render(
            <Kanban
                ref={ref}
                data={rangeData}
                backgroundPattern="horizontal"
                draggable={false}
                responsive={false}
            />,
        );
        const laneA = container.querySelector<HTMLElement>('.kanban-lane[z-lane="lane-a"]')!;
        const laneB = container.querySelector<HTMLElement>('.kanban-lane[z-lane="lane-b"]')!;
        const header = container.querySelector<HTMLElement>('.kanban-header-col[z-col="todo"]')!;

        act(() => {
            void ref.current!.updateLane({name: 'lane-b', color: 'rgb(9, 9, 9)'});
        });

        expect(laneA.style.getPropertyValue('--kanban-lane-color')).toBe('rgb(4, 5, 6)');
        expect(laneB.style.getPropertyValue('--kanban-lane-color')).toBe('rgb(9, 9, 9)');
        expect(header.style.getPropertyValue('--kanban-col-bg')).toBe('rgb(4, 5, 6)');

        act(() => {
            void ref.current!.updateLane({name: 'lane-a', color: 'rgb(10, 10, 10)'});
        });

        expect(header.style.getPropertyValue('--kanban-col-bg')).toBe('rgb(10, 10, 10)');
    });

    it('updates only the target column in vertical pattern', async () => {
        const ref = createRef<Kanban>();
        const {container} = render(
            <Kanban
                ref={ref}
                data={rangeData}
                backgroundPattern="vertical"
                draggable={false}
                responsive={false}
            />,
        );
        const header = container.querySelector<HTMLElement>('.kanban-header-col[z-col="todo"]')!;
        const doneHeader = container.querySelector<HTMLElement>('.kanban-header-col[z-col="done"]')!;
        const todoCol = container.querySelector<HTMLElement>('.kanban-lane-col[z-col="todo"]')!;
        const doneCol = container.querySelector<HTMLElement>('.kanban-lane-col[z-col="done"]')!;

        act(() => {
            void ref.current!.updateCol({name: 'todo', backgroundColor: 'rgb(8, 8, 8)'});
        });

        expect(header.style.getPropertyValue('--kanban-col-bg')).toBe('rgb(8, 8, 8)');
        expect(todoCol.style.getPropertyValue('--kanban-col-bg')).toBe('rgb(8, 8, 8)');
        expect(doneHeader.style.getPropertyValue('--kanban-col-bg')).toBe('');
        expect(doneCol.style.getPropertyValue('--kanban-col-bg')).toBe('');
    });

    it('ignores column background color in horizontal pattern', async () => {
        const ref = createRef<Kanban>();
        const {container} = render(
            <Kanban
                ref={ref}
                data={rangeData}
                backgroundPattern="horizontal"
                draggable={false}
                responsive={false}
            />,
        );
        const header = container.querySelector<HTMLElement>('.kanban-header-col[z-col="todo"]')!;
        const todoCol = container.querySelector<HTMLElement>('.kanban-lane-col[z-col="todo"]')!;

        act(() => {
            void ref.current!.updateCol({name: 'todo', backgroundColor: 'rgb(8, 8, 8)'});
        });

        expect(header.style.getPropertyValue('--kanban-col-bg')).toBe('rgb(4, 5, 6)');
        expect(todoCol.style.getPropertyValue('--kanban-col-bg')).toBe('var(--kanban-lane-color)');
    });
});

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
