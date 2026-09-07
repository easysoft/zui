// @vitest-environment jsdom

import {act, fireEvent, render} from '@testing-library/preact';
import {createRef} from 'preact';
import {describe, expect, it} from 'vitest';
import {Kanban} from '@zui/kanban/src/component/kanban';
import {flushAnimationFrame} from '../setup/dom';

import type {KanbanProps} from '@zui/kanban';

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
});
