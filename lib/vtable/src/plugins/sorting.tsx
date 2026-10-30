import {createSortedRowModel, rowSortingFeature, sortFns, tableFeatures} from '@tanstack/table-core';
import type {RowData} from '@tanstack/table-core';
import type {VTableHeaderContext, VTablePlugin} from '../types';
import './style';

/** Client-side, single-column sorting. Import explicitly to keep the core small. */
export const vtableSortingPlugin = {
    id: 'sorting',
    features: tableFeatures({rowSortingFeature, sortedRowModel: createSortedRowModel(), sortFns}),
    decorateHeader<TData extends RowData>({header, content, table, i18n}: VTableHeaderContext<TData>) {
        const {column} = header;
        if (!column.getCanSort()) {
            return;
        }
        const direction = column.getIsSorted();
        const nextLabel = i18n(direction === 'asc' ? 'sortDescending' : direction === 'desc' ? 'sortNone' : 'sortAscending', [column.id]);
        return {
            attrs: {'aria-sort': direction === 'asc' ? 'ascending' : direction === 'desc' ? 'descending' : 'none'},
            content: (
                <button
                    type="button"
                    className="vtable-sort-button"
                    title={nextLabel}
                    onClick={() => table.setSorting(direction === 'desc' ? [] : [{id: column.id, desc: direction === 'asc'}])}
                >
                    <span>{content}</span>
                    <span className="vtable-sort-indicator" aria-hidden="true">{direction === 'asc' ? '↑' : direction === 'desc' ? '↓' : '↕'}</span>
                </button>
            ),
        };
    },
} satisfies VTablePlugin;
