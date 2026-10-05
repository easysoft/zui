import {act, fireEvent, render} from '@testing-library/preact';
import {createRef} from 'preact';
import {describe, expect, it} from 'vitest';
import {DTable} from '@zui/dtable/react';
import {cellspan, nested, sort} from '@zui/dtable/src/plugins';

const cols = [
    {name: 'action', title: 'Action', width: 80, fixed: 'right' as const},
    {name: 'name', title: 'Name', width: 200},
    {name: 'hidden', hidden: true},
    {name: 'id', title: 'ID', width: 60, fixed: 'left' as const},
];
const data = Array.from({length: 20}, (_, i) => ({id: String(i), name: `Row ${i}`, action: 'Edit'}));

describe('DTable accessibility', () => {
    it('owns each cell once in visual column order and keeps virtual row positions', () => {
        const ref = createRef<DTable>();
        const {getByRole, container} = render(<DTable ref={ref} width={400} height={140} cols={cols} data={data} aria-label="Projects" />);
        const table = getByRole('table', {name: 'Projects'});
        expect(table).toHaveAttribute('aria-rowcount', '21');
        expect(table).toHaveAttribute('aria-colcount', '3');
        const rows = [...table.querySelectorAll('[role="row"]')];
        expect(rows.map(row => row.getAttribute('aria-rowindex'))).toEqual(['1', '2', '3', '4']);
        for (const row of rows) {
            const cells = row.getAttribute('aria-owns')!.split(' ').map(id => document.getElementById(id)!);
            expect(cells.map(cell => cell.dataset.col)).toEqual(['id', 'name', 'action']);
            expect(cells.map(cell => cell.getAttribute('aria-colindex'))).toEqual(['1', '2', '3']);
            expect(cells.every(cell => container.contains(cell))).toBe(true);
            expect(cells.map(cell => cell.getAttribute('role'))).toEqual(Array(3).fill(row === rows[0] ? 'columnheader' : 'cell'));
        }
        act(() => {
            ref.current!.scroll({scrollTop: 350});
        });
        expect([...table.querySelectorAll('[role="row"]')].map(row => row.getAttribute('aria-rowindex'))).toEqual(['1', '12', '13', '14']);
        expect(new Set([...container.querySelectorAll('.dtable-cell')].map(cell => cell.id)).size).toBe(container.querySelectorAll('.dtable-cell').length);
    });

    it('counts body rows without a standard header, including empty tables', () => {
        const {getByRole, rerender} = render(<DTable width={400} cols={cols} data={data.slice(0, 1)} header={false} />);
        expect(getByRole('table')).toHaveAttribute('aria-rowcount', '1');
        expect(getByRole('row')).toHaveAttribute('aria-rowindex', '1');
        rerender(<DTable width={400} cols={cols} data={[]} header={false} />);
        expect(getByRole('table')).toHaveAttribute('aria-rowcount', '0');
    });

    it('scrolls from the table focus without consuming input keys and reveals focused actions', () => {
        const ref = createRef<DTable>();
        const {getByRole, container} = render(
            <DTable
                ref={ref}
                width={200}
                height={140}
                cols={[
                    {name: 'name', width: 200},
                    {name: 'action', width: 200},
                ]}
                data={data}
                onRenderCell={(result, {col}) => col.name === 'action' ? [<input aria-label="Action" />] : result}
            />,
        );
        const table = getByRole('table');
        expect(table).toHaveAttribute('tabindex', '0');
        fireEvent.keyDown(table, {key: 'ArrowRight'});
        expect(ref.current!.layout.scrollLeft).toBe(40);
        fireEvent.keyDown(table, {key: 'End'});
        expect(ref.current!.layout.scrollLeft).toBe(200);
        fireEvent.keyDown(table, {key: 'Home'});
        expect(ref.current!.layout.scrollLeft).toBe(0);
        const input = container.querySelector('input')!;
        fireEvent.keyDown(input, {key: 'End'});
        expect(ref.current!.layout.scrollLeft).toBe(0);
        act(() => {
            input.focus();
        });
        expect(ref.current!.layout.scrollLeft).toBe(200);
        fireEvent.keyDown(table, {key: 'PageDown'});
        expect(ref.current!.layout.scrollTop).toBe(105);
    });

    it('exposes merged cells, sort direction, and native disclosure buttons', () => {
        const {container, getByRole} = render(
            <DTable
                width={500}
                cols={[
                    {name: 'id', title: 'ID', sort: 'number'},
                    {name: 'name', title: 'Name', nestedToggle: true},
                ]}
                data={[{id: '1', name: 'Parent'}, {id: '2', name: 'Child', parent: '1'}]}
                plugins={[cellspan, nested, sort]}
                sort={true}
                sortBy={{name: 'id', order: 'asc'}}
                preserveNested={false}
                getCellSpan={({row, col}: {row: {index: number}; col: {name: string}}) => row.index === 0 && col.name === 'id' ? {rowSpan: 2} : undefined}
            />,
        );
        expect(container.querySelector('[data-row="1"][data-col="id"]')).toHaveAttribute('aria-rowspan', '2');
        expect(getByRole('columnheader', {name: 'ID'})).toHaveAttribute('aria-sort', 'ascending');
        const toggle = getByRole('button', {name: 'Parent'});
        expect(toggle).toHaveAttribute('aria-expanded', 'true');
        fireEvent.click(toggle);
        expect(toggle).toHaveAttribute('aria-expanded', 'false');
        expect(getByRole('table')).toHaveAttribute('aria-rowcount', '2');
    });
});
