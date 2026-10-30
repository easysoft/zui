import {act, fireEvent, render} from '@testing-library/preact';
import {setImmediate as nextJob} from 'node:timers/promises';
import {setFlagsFromString} from 'node:v8';
import {runInNewContext} from 'node:vm';
import {createRef} from 'preact';
import {beforeEach, describe, expect, it, vi} from 'vitest';
import {VTable as VTableNative} from '@zui/vtable';
import {VTable} from '@zui/vtable/react';
import {vtableSortingPlugin} from '@zui/vtable/plugins/sorting';

import type {RowData, TableFeature, TableFeatures} from '@tanstack/table-core';
import type {VTableColumnDef, VTablePlugin} from '@zui/vtable';

type RecordRow = {id: string; name: string; value: number};
const getRowId = (row: RecordRow) => row.id;
const data = Array.from({length: 1000}, (_, index) => ({id: `row-${index}`, name: `Name ${index}`, value: index}));
const columns: VTableColumnDef<RecordRow>[] = [
    {id: 'name', accessorKey: 'name', header: 'Name', size: 120},
    {id: 'value', accessorKey: 'value', header: 'Value', size: 120},
];

declare module '@tanstack/table-core' {
    interface Plugins {
        vtableProofFeature: TableFeature;
    }
    interface Table_FeatureMap<TFeatures extends TableFeatures, TData extends RowData> {
        vtableProofFeature: {getProof: () => {data: TData[]; features: TFeatures}};
    }
}

beforeEach(() => {
    vi.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockReturnValue(320);
    vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get').mockReturnValue(180);
    vi.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockReturnValue(320);
    vi.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockReturnValue(180);
    HTMLElement.prototype.scrollTo = vi.fn(function (this: HTMLElement, options?: ScrollToOptions | number, y?: number) {
        if (typeof options === 'number') {
            this.scrollLeft = options;
            this.scrollTop = y ?? 0;
            return;
        }
        if (options?.top !== undefined) {
            this.scrollTop = options.top;
        }
        if (options?.left !== undefined) {
            this.scrollLeft = options.left;
        }
        this.dispatchEvent(new Event('scroll'));
    });
});

describe('VTable core', () => {
    it('keeps one engine and row model during scrolling and column sizing', async () => {
        const ref = createRef<VTable<RecordRow>>();
        const view = render(<VTable ref={ref} data={data} columns={columns} getRowId={getRowId} />);
        const table = ref.current!.table;
        const model = table.getRowModel();
        const viewport = view.getByRole('table');
        expect(view.getAllByRole('cell').length).toBeGreaterThan(0);
        expect(view.getAllByRole('cell').length).toBeLessThan(40);
        await act(async () => {
            viewport.scrollTop = 3600;
            fireEvent.scroll(viewport);
        });
        expect(ref.current!.table).toBe(table);
        expect(table.getRowModel()).toBe(model);
        expect(view.getByText('Name 100')).toBeInTheDocument();
        await act(async () => table.setColumnSizing({name: 200}));
        expect(table.getRowModel()).toBe(model);
        const header = view.getByRole('columnheader', {name: 'Name'});
        expect(header.style.width).toBe('200px');
        expect(view.getByRole('columnheader', {name: 'Value'}).style.left).toBe('200px');
    });

    it('responds to external options updates, empty data, and restoring the data', async () => {
        const ref = createRef<VTable<RecordRow>>();
        const view = render(<VTable ref={ref} data={data} columns={columns} getRowId={getRowId} />);
        const table = ref.current!.table;
        await act(async () => table.setOptions(previous => ({...previous, data: [{id: 'next', name: 'Replacement', value: 7}]})));
        expect(view.getByText('Replacement')).toBeInTheDocument();
        expect(view.queryByText('Name 0')).not.toBeInTheDocument();
        await act(async () => table.setOptions(previous => ({...previous, data: []})));
        expect(view.queryAllByRole('cell')).toHaveLength(0);
        expect(view.getByText('暂无数据')).toBeInTheDocument();
        view.rerender(<VTable ref={ref} data={data.slice(0, 2)} columns={columns} getRowId={getRowId} />);
        expect(ref.current!.table).toBe(table);
        expect(view.getByText('Name 1')).toBeInTheDocument();
    });

    it('locates existing and newly appended rows and columns after the current layout commits', async () => {
        const ref = createRef<VTable<RecordRow>>();
        const view = render(<VTable ref={ref} data={data} columns={columns} getRowId={getRowId} />);
        const root = view.getByRole('table');
        // Reflect the committed DOM dimensions so a premature scroll is clamped
        // just as it would be by a browser before the larger layout is committed.
        Object.defineProperties(root, {
            scrollHeight: {get: () => Number.parseFloat(root.querySelector<HTMLElement>('.vtable-body')!.style.height) + 36},
            scrollWidth: {get: () => Math.max(320, Number.parseFloat(root.querySelector<HTMLElement>('.vtable-header')!.style.width))},
        });
        await act(async () => {
            expect(ref.current!.scrollToRow('row-999', {align: 'end', behavior: 'instant'})).toBe(true);
        });
        expect(root.scrollTop).toBe(1000 * 36 + 36 - 180);
        expect(view.getByText('Name 999')).toBeInTheDocument();

        const moreRows = Array.from({length: 2000}, (_, index) => ({id: `next-${index}`, name: `Next ${index}`, value: index}));
        const moreColumns = Array.from({length: 20}, (_, index) => ({id: `col-${index}`, accessorKey: 'value', header: `Col ${index}`, size: 120}));
        await act(async () => {
            ref.current!.table.setOptions(previous => ({...previous, data: moreRows, columns: moreColumns}));
            expect(ref.current!.scrollToRow('next-1999', {align: 'end', behavior: 'instant'})).toBe(true);
            expect(ref.current!.scrollToColumn('col-19', {align: 'end', behavior: 'instant'})).toBe(true);
        });
        expect(root.scrollTop).toBe(2000 * 36 + 36 - 180);
        expect(root.scrollLeft).toBe(20 * 120 - 320);
        expect(root.querySelector('[data-row="next-1999"] [data-col="col-19"]')).toBeInTheDocument();
        expect(view.getByRole('columnheader', {name: 'Col 19'})).toBeInTheDocument();

        await act(async () => {
            expect(ref.current!.scrollToRow('next-0', {align: 'start', behavior: 'instant'})).toBe(true);
            expect(ref.current!.scrollToColumn('col-0', {align: 'start', behavior: 'instant'})).toBe(true);
        });
        expect(root.scrollTop).toBe(0);
        expect(root.scrollLeft).toBe(0);
        expect(root.querySelector('[data-row="next-0"] [data-col="col-0"]')).toBeInTheDocument();
    });

    it.each([false, true])('releases old data and row models after a native replacement (sorting: %s)', async (sorting) => {
        let collectGarbage = globalThis.gc;
        if (!collectGarbage) {
            setFlagsFromString('--expose-gc');
            try {
                collectGarbage = runInNewContext('gc') as typeof globalThis.gc;
            } finally {
                setFlagsFromString('--no-expose-gc');
            }
        }
        const createFixture = () => {
            const initialData: RecordRow[] = [{id: 'initial', name: 'Initial', value: 1}];
            const weakData = new WeakRef(initialData);
            const weakOriginalRow = new WeakRef(initialData[0]);
            const host = document.createElement('div');
            document.body.append(host);
            const native = new VTableNative<RecordRow>(host, {data: initialData, columns, getRowId, plugins: sorting ? [vtableSortingPlugin] : []});
            act(() => native.render());
            const weakEngineRow = new WeakRef(native.table!.getRowModel().rows[0]);
            return {weakData, weakOriginalRow, weakEngineRow, native, host};
        };
        const {weakData, weakOriginalRow, weakEngineRow, native, host} = createFixture();
        try {
            await act(async () => native.render({data: [{id: 'replacement', name: 'Replacement', value: 2}]}));
            if (sorting) {
                await act(async () => native.table!.setSorting([{id: 'value', desc: false}]));
            }
            // WeakRef targets stay alive for the current job; collect on a later
            // job without reading deref() between collections and prolonging it.
            for (let count = 0; count < 3; count++) {
                await nextJob();
                collectGarbage!();
            }
            expect(host.textContent).toContain('Replacement');
            expect(weakData.deref()).toBeUndefined();
            expect(weakOriginalRow.deref()).toBeUndefined();
            expect(weakEngineRow.deref()).toBeUndefined();
        } finally {
            act(() => native.destroy());
            host.remove();
        }
    });

    it('leaves controlled sizing to the caller and forwards renderer contexts', async () => {
        const change = vi.fn();
        const ref = createRef<VTable<RecordRow>>();
        const header = vi.fn(context => <strong>{context.column.id}</strong>);
        const cell = vi.fn(context => <button>{context.row.original.name}</button>);
        const renderedColumns: VTableColumnDef<RecordRow>[] = [{id: 'name', accessorKey: 'name', header, cell}];
        const props = {data: data.slice(0, 2), columns: renderedColumns, getRowId, state: {columnSizing: {name: 120}}, onColumnSizingChange: change};
        const view = render(<VTable ref={ref} {...props} />);
        await act(async () => ref.current!.table.setColumnSizing({name: 210}));
        expect(change).toHaveBeenCalledTimes(1);
        expect(ref.current!.table.getColumn('name')!.getSize()).toBe(120);
        view.rerender(<VTable ref={ref} {...props} state={{columnSizing: {name: 210}}} />);
        expect(ref.current!.table.getColumn('name')!.getSize()).toBe(210);
        expect(header.mock.calls[0][0].table).toBe(ref.current!.table);
        expect(view.getByRole('button', {name: 'Name 0'})).toBeInTheDocument();
    });

    it('supports a typed external feature and bounds Cell creation to the two-axis window', async () => {
        const constructed = vi.fn();
        const event = vi.fn();
        const cleanup = vi.fn();
        const proofFeature: TableFeature = {
            initCellInstanceData: constructed,
            constructTableAPIs(table) {
                Object.assign(table, {getProof: () => ({data: table.options.data, features: table.options.features})});
            },
        };
        const features = {vtableProofFeature: proofFeature};
        const plugin: VTablePlugin<RecordRow, typeof features> = {
            id: 'external-proof',
            features,
            decorateHeader(context) {
                return {content: (
                    <span data-proof={context.header.column.id}>
                        {context.content}
                        {' external'}
                    </span>
                )};
            },
            mount(context) {
                context.rootElement.addEventListener('proof', event);
                return () => {
                    context.rootElement.removeEventListener('proof', event);
                    cleanup();
                };
            },
        };
        const wideColumns: VTableColumnDef<RecordRow, typeof features>[] = Array.from({length: 100}, (_, index) => ({id: `column-${index}`, accessorKey: 'name', header: `Column ${index}`, size: 100}));
        const ref = createRef<VTable<RecordRow, typeof features>>();
        const view = render(<VTable ref={ref} data={data} columns={wideColumns} getRowId={getRowId} plugins={[plugin]} />);
        expect(ref.current!.table.getProof().data[0].name).toBe('Name 0');
        expect(view.getByRole('columnheader', {name: 'Column 0 external'})).toBeInTheDocument();
        expect(constructed.mock.calls.length).toBeGreaterThan(0);
        expect(constructed.mock.calls.length).toBeLessThan(200);
        const root = view.getByRole('table');
        root.dispatchEvent(new Event('proof'));
        expect(event).toHaveBeenCalledTimes(1);
        view.unmount();
        root.dispatchEvent(new Event('proof'));
        expect(event).toHaveBeenCalledTimes(1);
        expect(cleanup).toHaveBeenCalledTimes(1);
    });

    it('rejects ambiguous identities and incompatible plugin collections', () => {
        const props = {data, columns, getRowId};
        expect(() => new VTable({...props, data: [data[0], data[0]]})).toThrow(/row ids/);
        expect(() => new VTable({...props, columns: [columns[0], columns[0]]})).toThrow(/column/);
        expect(() => new VTable({...props, plugins: [{id: 'same'}, {id: 'same'}]})).toThrow(/plugin id/);
        expect(() => new VTable({...props, plugins: [
            {id: 'a', features: {vtableProofFeature: {}}},
            {id: 'b', features: {vtableProofFeature: {}}},
        ]})).toThrow(/Conflicting VTable feature/);
    });

    it('preserves native lifecycle, resets sizing, and returns false for unavailable targets', async () => {
        const host = document.createElement('div');
        document.body.append(host);
        const native = new VTableNative<RecordRow>(host, {data, columns, getRowId});
        expect(native.table).toBeNull();
        expect(native.scrollToRow('row-0')).toBe(false);
        act(() => native.render());
        const table = native.table!;
        expect(native.scrollToRow('missing')).toBe(false);
        expect(native.scrollToColumn('missing')).toBe(false);
        await act(async () => table.setColumnSizing({name: 200}));
        act(() => native.render({data, columns, getRowId}, true));
        expect(native.table).toBe(table);
        expect(table.getColumn('name')!.getSize()).toBe(120);
        act(() => native.destroy());
        expect(native.table).toBeNull();
        expect(host.children).toHaveLength(0);
        expect(native.scrollToColumn('name')).toBe(false);
        expect(() => native.destroy()).not.toThrow();
    });
});
