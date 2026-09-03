// @vitest-environment jsdom

import {render} from '@testing-library/preact';
import {describe, expect, it} from 'vitest';
import {Kanban} from '@zui/kanban/src/component/kanban';

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
});
