import {Component} from 'preact';
import {rowSelectionFeature, tableFeatures} from '@tanstack/table-core';
import {Checkbox} from '@zui/checkbox/react';
import '@zui/checkbox';
import type {Row, RowData} from '@tanstack/table-core';
import type {VTableColumnDef, VTableFeatures, VTablePlugin, VTableRenderContext} from '../types';
import './style';

export interface VTableSelectionColumnOptions<TData extends RowData = Record<string, unknown>> {
    id?: string;
    size?: number;
    minSize?: number;
    maxSize?: number;
    selectAllLabel?: string;
    selectRowLabel?: string | ((row: Row<VTableFeatures, TData>) => string);
}

interface SelectionHeaderProps<TData extends RowData> {
    context: VTableRenderContext<TData>;
    label?: string;
}

class SelectionHeader<TData extends RowData> extends Component<SelectionHeaderProps<TData>> {
    private _rows?: Row<VTableFeatures, TData>[];
    private _selection?: object;
    private _enableSelection?: unknown;
    private _selected = 0;
    private _selectable = 0;

    render({context: {table, i18n}, label}: SelectionHeaderProps<TData>) {
        const rows = table.getCoreRowModel().rows;
        const selection = table.atoms.rowSelection.get();
        const enableSelection = table.options.enableRowSelection;
        // The header also renders while scrolling: rescan only changed data or selection.
        if (rows !== this._rows || selection !== this._selection || enableSelection !== this._enableSelection) {
            this._rows = rows;
            this._selection = selection;
            this._enableSelection = enableSelection;
            this._selected = 0;
            this._selectable = 0;
            for (const row of rows) {
                if (row.getCanSelect()) {
                    this._selectable++;
                    if (row.getIsSelected()) {
                        this._selected++;
                    }
                }
            }
        }
        return (
            <Checkbox
                className="vtable-selection"
                checked={this._selectable > 0 && this._selected === this._selectable ? true : this._selected ? 'indeterminate' : false}
                disabled={!this._selectable || table.options.enableMultiRowSelection === false}
                label={<span className="vtable-selection-label">{label ?? i18n('selectAll')}</span>}
                onChange={(_event, checked) => table.toggleAllRowsSelected(checked === true)}
            />
        );
    }
}

/** Add the returned display column explicitly to the desired position. */
export function createVTableSelectionColumn<TData extends RowData = Record<string, unknown>>(options: VTableSelectionColumnOptions<TData> = {}): VTableColumnDef<TData> {
    const size = options.size ?? 44;
    return {
        id: options.id ?? '__selection',
        size,
        minSize: options.minSize ?? size,
        maxSize: options.maxSize ?? size,
        enableSorting: false,
        header: (_header, context) => <SelectionHeader context={context} label={options.selectAllLabel} />,
        cell: ({row}, context) => (
            <Checkbox
                className="vtable-selection"
                checked={row.getIsSelected()}
                disabled={!row.getCanSelect()}
                label={<span className="vtable-selection-label">{typeof options.selectRowLabel === 'function' ? options.selectRowLabel(row) : options.selectRowLabel ?? context.i18n('selectRow', [row.id])}</span>}
                onChange={(_event, checked) => row.toggleSelected(checked === true)}
            />
        ),
    };
}

export const vtableRowSelectionPlugin = {
    id: 'row-selection',
    features: tableFeatures({rowSelectionFeature}),
} satisfies VTablePlugin;
