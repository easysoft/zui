import {Component} from 'preact';
import {CustomContent} from '@zui/core';
import {constructCell} from '@tanstack/table-core';

import type {Cell, Column, Row, RowData, TableFeatures} from '@tanstack/table-core' with {'resolution-mode': 'import'};
import type {VTableFeatures, VTableRenderContext} from '../types';

interface CellProps<TData extends RowData, TFeatures extends TableFeatures> {
    row: Row<VTableFeatures<TFeatures>, TData>;
    column: Column<VTableFeatures<TFeatures>, TData, unknown>;
    context: VTableRenderContext<TData, TFeatures>;
    index: number;
    start: number;
    size: number;
}

/** A cell only lives as long as its visible Preact node, never on the row model. */
export class VTableCell<TData extends RowData, TFeatures extends TableFeatures> extends Component<CellProps<TData, TFeatures>> {
    private _cell?: Cell<VTableFeatures<TFeatures>, TData, unknown>;

    render({row, column, context, index, start, size}: CellProps<TData, TFeatures>) {
        let cell = this._cell;
        if (!cell || cell.row !== row || cell.column !== column) {
            cell = this._cell = constructCell(column, row, context.table);
        }
        return (
            <div className="vtable-cell" role="cell" aria-colindex={index + 1} data-col={column.id} style={{left: start, width: size}}>
                <CustomContent content={column.columnDef.cell ?? String(cell.getValue() ?? '')} generatorArgs={[cell.getContext(), context]} />
            </div>
        );
    }
}
