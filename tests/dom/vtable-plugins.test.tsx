import {act, fireEvent, render} from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import {createRef} from 'preact';
import {beforeEach, describe, expect, it, vi} from 'vitest';
import {VTable} from '@zui/vtable/react';
import {vtableSortingPlugin} from '@zui/vtable/plugins/sorting';
import {createVTableSelectionColumn, vtableRowSelectionPlugin} from '@zui/vtable/plugins/row-selection';
import {vtableColumnResizePlugin} from '@zui/vtable/plugins/column-resize';
import type {VTableColumnDef, VTableOptions} from '@zui/vtable';

type RecordRow = {id: string; name: string; score: number; disabled?: boolean};
const data: RecordRow[] = [
    {id: 'b', name: 'Beta', score: 2},
    {id: 'a', name: 'Alpha', score: 1},
    {id: 'c', name: 'Gamma', score: 3, disabled: true},
];
const columns: VTableColumnDef<RecordRow>[] = [
    createVTableSelectionColumn<RecordRow>(),
    {id: 'name', accessorKey: 'name', header: 'Name', size: 120, minSize: 80, maxSize: 180},
    {id: 'score', accessorKey: 'score', header: 'Score', size: 120, minSize: 80, maxSize: 180},
];
const plugins = [vtableSortingPlugin, vtableRowSelectionPlugin, vtableColumnResizePlugin];
const getRowId = (row: RecordRow) => row.id;
const enableRowSelection = (row: {original: RecordRow}) => !row.original.disabled;

beforeEach(() => {
    vi.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockReturnValue(400);
    vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get').mockReturnValue(180);
    vi.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockReturnValue(400);
    vi.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockReturnValue(180);
});

function setup(options: Partial<VTableOptions<RecordRow>> = {}) {
    const ref = createRef<VTable<RecordRow>>();
    const props = {data, columns, getRowId, enableRowSelection, plugins, lang: 'en', ...options};
    const view = render(<VTable ref={ref} {...props} />);
    return {...view, ref, table: ref.current!.table, props};
}

function pointer(target: Element | Window, type: string, clientX: number, pointerId = 1, pointerType = 'mouse') {
    const event = new MouseEvent(type, {bubbles: true, cancelable: true, button: 0, clientX});
    Object.assign(event, {pointerId, pointerType, isPrimary: true});
    fireEvent(target, event);
}

function capture(handle: HTMLElement) {
    handle.setPointerCapture = vi.fn();
    handle.hasPointerCapture = vi.fn().mockReturnValue(true);
    handle.releasePointerCapture = vi.fn();
}

describe('VTable plugins', () => {
    it('sorts ascending, descending, then original order with one keyboard-accessible control', async () => {
        const view = setup();
        const user = userEvent.setup({advanceTimers: vi.advanceTimersByTime});
        const button = view.getByRole('button', {name: 'Name'});
        const names = () => view.table.getRowModel().rows.map(row => row.id);
        expect(names()).toEqual(['b', 'a', 'c']);
        await user.click(button);
        expect(names()).toEqual(['a', 'b', 'c']);
        expect(button.closest('[role="columnheader"]')).toHaveAttribute('aria-sort', 'ascending');
        await user.keyboard('{Enter}');
        expect(names()).toEqual(['c', 'b', 'a']);
        expect(button).toHaveAttribute('title', 'Clear sorting for name');
        await user.keyboard(' ');
        expect(names()).toEqual(['b', 'a', 'c']);
        expect(button.closest('[role="columnheader"]')).toHaveAttribute('aria-sort', 'none');
        expect(button.querySelector('[role="separator"]')).toBeNull();
        expect(view.getByRole('separator', {name: 'Resize column name'}).parentElement).toBe(button.closest('[role="columnheader"]'));
    });

    it('uses a custom comparator and always replaces the previous sorted column', async () => {
        const customColumns: VTableColumnDef<RecordRow>[] = [
            ...columns.slice(0, 2),
            {...columns[2], sortFn: (a, b) => b.original.score - a.original.score},
        ];
        const view = setup({columns: customColumns});
        fireEvent.click(view.getByRole('button', {name: 'Name'}));
        fireEvent.click(view.getByRole('button', {name: 'Score'}), {shiftKey: true});
        expect(view.table.atoms.sorting.get()).toEqual([{id: 'score', desc: false}]);
        expect(view.table.getRowModel().rows.map(row => row.id)).toEqual(['c', 'b', 'a']);
    });

    it('does not rebuild or re-sort rows while scrolling, selecting, or resizing', async () => {
        const sortFn = vi.fn((a: {original: RecordRow}, b: {original: RecordRow}) => a.original.score - b.original.score);
        const view = setup({
            data: Array.from({length: 200}, (_, index) => ({id: `row-${index}`, name: `Row ${index}`, score: 200 - index})),
            columns: [...columns.slice(0, 2), {...columns[2], sortFn}],
        });
        const core = view.table.getCoreRowModel();
        await act(async () => view.table.setSorting([{id: 'score', desc: false}]));
        const sorted = view.table.getRowModel();
        const comparisons = sortFn.mock.calls.length;
        expect(comparisons).toBeGreaterThan(0);
        await act(async () => {
            const viewport = view.getByRole('table');
            viewport.scrollTop = 500;
            fireEvent.scroll(viewport);
            view.table.setRowSelection({'row-1': true});
            view.table.setColumnSizing({name: 150});
        });
        expect(view.table.getCoreRowModel()).toBe(core);
        expect(view.table.getRowModel()).toBe(sorted);
        expect(sortFn).toHaveBeenCalledTimes(comparisons);
    });

    it('selects every eligible row, shows indeterminate state, and preserves row identity after sorting', async () => {
        const view = setup();
        const model = view.table.getCoreRowModel();
        const all = view.getByRole('checkbox', {name: 'Select all selectable rows'}) as HTMLInputElement;
        fireEvent.click(view.getByRole('checkbox', {name: 'Select row b'}));
        expect(all.indeterminate).toBe(true);
        expect(view.table.atoms.rowSelection.get()).toEqual({b: true});
        fireEvent.click(view.getByRole('button', {name: 'Name'}));
        expect(view.getByRole('checkbox', {name: 'Select row b'})).toBeChecked();
        expect(view.getByRole('checkbox', {name: 'Select row c'})).toBeDisabled();
        fireEvent.click(all);
        expect(view.table.atoms.rowSelection.get()).toEqual({a: true, b: true});
        expect(all).toBeChecked();
        expect(all.indeterminate).toBe(false);
        expect(view.table.getCoreRowModel()).toBe(model);
        fireEvent.click(all);
        expect(view.table.atoms.rowSelection.get()).toEqual({});
    });

    it('only counts current eligible rows when selection contains stale or disabled ids', async () => {
        const view = setup({initialState: {rowSelection: {missing: true, c: true}}});
        const all = view.getByRole('checkbox', {name: 'Select all selectable rows'}) as HTMLInputElement;
        expect(all.indeterminate).toBe(false);
        expect(all).not.toBeChecked();
        view.rerender(<VTable ref={view.ref} {...view.props} data={data.filter(row => row.disabled)} />);
        expect(all).toBeDisabled();
        expect(all).not.toBeChecked();
    });

    it('preserves controlled selection and sorting until the caller writes state back', async () => {
        const onSortingChange = vi.fn();
        const onRowSelectionChange = vi.fn();
        const view = setup({state: {sorting: [], rowSelection: {}}, onSortingChange, onRowSelectionChange});
        fireEvent.click(view.getByRole('button', {name: 'Name'}));
        fireEvent.click(view.getByRole('checkbox', {name: 'Select row b'}));
        expect(onSortingChange).toHaveBeenCalledTimes(1);
        expect(onSortingChange.mock.calls[0][0]([])).toEqual([{id: 'name', desc: false}]);
        expect(onRowSelectionChange).toHaveBeenCalledTimes(1);
        expect(view.table.getRowModel().rows.map(row => row.id)).toEqual(['b', 'a', 'c']);
        expect(view.getByRole('checkbox', {name: 'Select row b'})).not.toBeChecked();
        view.rerender(<VTable ref={view.ref} {...view.props} state={{sorting: [{id: 'name', desc: false}], rowSelection: {b: true}}} />);
        expect(view.table.getRowModel().rows.map(row => row.id)).toEqual(['a', 'b', 'c']);
        expect(view.getByRole('checkbox', {name: 'Select row b'})).toBeChecked();
    });

    it('commits a clamped width only at pointer release without rebuilding the row model', async () => {
        const view = setup();
        const handle = view.getByRole('separator', {name: 'Resize column name'});
        capture(handle);
        const model = view.table.getRowModel();
        const setColumnSizing = vi.spyOn(view.table, 'setColumnSizing');
        const renderSpy = vi.spyOn(view.ref.current!, 'render');
        pointer(handle, 'pointerdown', 120);
        pointer(window, 'pointermove', 150);
        expect(view.table.getColumn('name')!.getSize()).toBe(120);
        expect(view.container.querySelector('.vtable-resize-guide')).toBeInTheDocument();
        expect(setColumnSizing).not.toHaveBeenCalled();
        expect(renderSpy).not.toHaveBeenCalled();
        pointer(window, 'pointerup', 250);
        expect(setColumnSizing).toHaveBeenCalledTimes(1);
        expect(view.table.getColumn('name')!.getSize()).toBe(180);
        expect(view.table.getRowModel()).toBe(model);
        expect(view.container.querySelector('.vtable-resize-guide')).toBeNull();
        expect(handle.releasePointerCapture).toHaveBeenCalledWith(1);
    });

    it.each(['Escape', 'blur', 'handle blur', 'pointercancel', 'lostpointercapture'] as const)('cancels a resize on %s without committing or leaving listeners', async (reason) => {
        const view = setup();
        const handle = view.getByRole('separator', {name: 'Resize column name'});
        capture(handle);
        const setColumnSizing = vi.spyOn(view.table, 'setColumnSizing');
        pointer(handle, 'pointerdown', 120, 1, 'touch');
        pointer(window, 'pointermove', 160, 1, 'touch');
        if (reason === 'Escape') {
            fireEvent.keyDown(window, {key: 'Escape'});
        } else if (reason === 'handle blur') {
            fireEvent.blur(handle);
        } else if (reason === 'blur') {
            fireEvent(window, new Event('blur'));
        } else {
            pointer(reason === 'lostpointercapture' ? handle : window, reason, 160);
        }
        pointer(window, 'pointerup', 160);
        expect(setColumnSizing).not.toHaveBeenCalled();
        expect(view.table.getColumn('name')!.getSize()).toBe(120);
        expect(view.container.querySelector('.vtable-resize-guide')).toBeNull();
        expect(handle.releasePointerCapture).toHaveBeenCalledTimes(1);
    });

    it('cleans the active gesture on header removal and on table destruction', async () => {
        const view = setup();
        const handle = view.getByRole('separator', {name: 'Resize column name'});
        capture(handle);
        const setColumnSizing = vi.spyOn(view.table, 'setColumnSizing');
        pointer(handle, 'pointerdown', 120);
        pointer(window, 'pointermove', 160);
        view.rerender(<VTable ref={view.ref} {...view.props} columns={columns.filter(column => column.id !== 'name')} />);
        pointer(window, 'pointerup', 160);
        expect(setColumnSizing).not.toHaveBeenCalled();
        expect(view.container.querySelector('.vtable-resize-guide')).toBeNull();
        const next = view.getByRole('separator', {name: 'Resize column score'});
        capture(next);
        pointer(next, 'pointerdown', 120);
        view.unmount();
        pointer(window, 'pointerup', 160);
        expect(setColumnSizing).not.toHaveBeenCalled();
        expect(document.querySelector('.vtable-resize-guide')).toBeNull();
    });

    it('supports keyboard widths and keeps controlled sizing with its owner', async () => {
        const onColumnSizingChange = vi.fn();
        const view = setup({state: {columnSizing: {name: 120}}, onColumnSizingChange});
        const handle = view.getByRole('separator', {name: 'Resize column name'});
        fireEvent.keyDown(handle, {key: 'ArrowRight'});
        expect(onColumnSizingChange.mock.calls[0][0]({name: 120})).toEqual({name: 130});
        expect(view.table.getColumn('name')!.getSize()).toBe(120);
        view.rerender(<VTable ref={view.ref} {...view.props} state={{columnSizing: {name: 130}}} />);
        expect(handle).toHaveAttribute('aria-valuenow', '130');
        fireEvent.keyDown(handle, {key: 'Home'});
        expect(onColumnSizingChange.mock.calls[1][0]({name: 130})).toEqual({name: 80});
        fireEvent.keyDown(handle, {key: 'End'});
        expect(onColumnSizingChange.mock.calls[2][0]({name: 130})).toEqual({name: 180});
        fireEvent.keyDown(handle, {key: 'ArrowLeft'});
        expect(onColumnSizingChange.mock.calls[3][0]({name: 130})).toEqual({name: 120});
    });

    it.each([
        ['zh_cn', '选择行 b', '调整 name 列宽', '按 name 升序排列'],
        ['zh_tw', '選擇列 b', '調整 name 欄寬', '依 name 升冪排列'],
        ['en', 'Select row b', 'Resize column name', 'Sort name ascending'],
    ])('localizes plugin labels in %s', (lang, selectedLabel, resizeLabel, sortTitle) => {
        const view = setup({lang});
        expect(view.getByRole('checkbox', {name: selectedLabel})).toBeInTheDocument();
        expect(view.getByRole('separator', {name: resizeLabel})).toBeInTheDocument();
        expect(view.getByRole('button', {name: 'Name'})).toHaveAttribute('title', sortTitle);
    });

    it('keeps two instances isolated and does not scan selection rows again during scrolling', async () => {
        const first = setup({data: [...data, ...Array.from({length: 100}, (_, index) => ({id: `extra-${index}`, name: `Extra ${index}`, score: index}))]});
        const second = setup();
        const firstRoot = first.container.querySelector('[role="table"]')!;
        const firstRow = first.table.getRow('b');
        const getCanSelect = vi.spyOn(first.table.getRow('extra-99'), 'getCanSelect');
        await act(async () => {
            fireEvent.scroll(firstRoot);
        });
        expect(getCanSelect).not.toHaveBeenCalled();
        await act(async () => firstRow.toggleSelected(true));
        expect(second.table.atoms.rowSelection.get()).toEqual({});
        expect(first.table.atoms.rowSelection.get()).toEqual({b: true});
    });
});
