import {$} from '@zui/core';
import {definePlugin} from '../../helpers/shared-plugins';
import {mousemove} from '../mousemove';
import {autoscroll} from '../autoscroll';
import './style.css';

import type {DTableWithPlugin, DTablePlugin} from '../../types/plugin';
import type {DTableMousemoveTypes} from '../mousemove';
import type {DTableAutoscrollTypes} from '../autoscroll';
import type {DTableNestedTypes, DTableNested} from '../nested';
import type {RowInfo} from '../../types/row';

export type SortingSide = 'before' | 'after';

export type SortingState = {
    sortingFrom: RowInfo;
    sortingPos: number;
    sortingTo?: RowInfo;
    sortingSide?: SortingSide;
};

export type DTableSortableTypes = {
    options: Partial<{
        sortable: boolean;
        sortHandler: string;
        canSortTo: (this: DTableSortable, from: RowInfo, to: RowInfo, sortingSide: SortingSide) => boolean;
        onSortStart: (this: DTableSortable, row: RowInfo, event: MouseEvent) => false | void;
        onSortEnd: (this: DTableSortable, from: RowInfo, to: RowInfo | undefined, sortingSide: SortingSide | undefined) => void;
        onSort: (this: DTableSortable, from: RowInfo, to: RowInfo, sortingSide: SortingSide, orders: string[]) => void | false;
    }>;
    state: Partial<{
        rowOrders: Record<string, number>;
        sortingFrom: RowInfo;
        sortingPos: number;
        sortingTo: RowInfo;
        sortingSide: SortingSide;
    }>;
    data: {
        disableCheckable?: boolean,
        disableSortable?: boolean,
        sortableInfo?: {from: RowInfo, offset: number, state?: SortingState};
    },
    methods: {
        getSortingState(this: DTableSortable, event: MouseEvent): SortingState | undefined;
    }
};

export type DTableSortable = DTableWithPlugin<DTableSortableTypes, [DTableMousemoveTypes, DTableNestedTypes, DTableAutoscrollTypes]>;

const sortablePlugin: DTablePlugin<DTableSortableTypes, [DTableMousemoveTypes, DTableNestedTypes, DTableAutoscrollTypes]> = {
    name: 'sortable',
    defaultOptions: {
        sortable: true,
        canSortTo(this: DTableSortable, from: RowInfo, to: RowInfo) {
            if (!this.options.nested) {
                return true;
            }
            return (this as unknown as DTableNested).getNestedRowInfo(from.id).parent === (this as unknown as DTableNested).getNestedRowInfo(to.id).parent;
        },
    },
    when: options => !!options.sortable,
    plugins: [mousemove, autoscroll],
    events: {
        mousedown(event) {
            if (this.data.disableSortable) {
                return;
            }
            const {sortHandler = '.dtable-cell'} = this.options;
            const $handler = $(event.target as HTMLElement).closest(sortHandler);
            if (!$handler.length) {
                return;
            }
            const info = this.getPointerInfo(event);
            if (!info || info.rowID === 'HEADER') {
                return;
            }
            const row = this.getRowInfo(info.rowID);
            if (!row || this.options.onSortStart?.call(this, row, event) === false) {
                return;
            }
            this.data.sortableInfo = {from: row, offset: event.clientY - info.cellElement.getBoundingClientRect().top};
        },
        document_mouseup(event) {
            if (!this.data.sortableInfo) {
                return;
            }
            this.stopScrollToMouse();

            const sortingState = this.getSortingState(event);
            if (sortingState) {
                let rowOrders: Record<string, number> | undefined;
                const {sortingFrom, sortingTo, sortingSide} = sortingState;
                if (sortingTo && sortingSide) {
                    const rows = [...this.layout.rows];
                    const fromIndex = sortingFrom.index;
                    const toIndex = sortingTo.index;
                    const row = rows.splice(fromIndex, 1);
                    rows.splice(toIndex, 0, row[0]);
                    rowOrders = {};
                    const orders: string[] = [];
                    rows.forEach(({id}, index) => {
                        rowOrders![id] = index;
                        orders.push(id);
                    });

                    if (this.options.onSort?.call(this, sortingFrom, sortingTo, sortingSide, orders) === false) {
                        rowOrders = undefined;
                    }
                }

                this.disableAnimation();
                this.update({
                    dirtyType: 'layout',
                    state: $.extend({
                        sortingFrom: undefined,
                        sortingPos: undefined,
                        sortingTo: undefined,
                        sortingSide: undefined,
                    }, rowOrders ? {rowOrders} : null),
                }, () => {
                    this.options.onSortEnd?.call(this, sortingFrom, sortingTo, sortingSide);
                    setTimeout(() => {
                        this.data.disableCheckable = undefined;
                    }, 50);
                });
            }

            this.data.sortableInfo = undefined;
            $(this.element).removeClass('dtable-sorting');
        },
        document_mousemovesmooth(event) {
            const {sortableInfo} = this.data;
            if (!sortableInfo) {
                return;
            }
            const sortingState = this.getSortingState(event);
            if (!sortingState) {
                return;
            }

            if (!sortableInfo.state) {
                this.startScrollToMouse({side: 'y'});
                this.data.disableCheckable = true;
                $(this.element).addClass('dtable-sorting');
            }
            sortableInfo.state = sortingState;
            this.setState(sortingState);
        },
    },
    methods: {
        getSortingState(event) {
            const {disableSortable, sortableInfo} = this.data;
            if (disableSortable || !sortableInfo) {
                return;
            }

            const {headerHeight, footerHeight, visibleRows, scrollTop, rowHeight} = this.layout;
            const bounding = this.element!.getBoundingClientRect();
            const width = bounding.width;
            const height = bounding.height - headerHeight - footerHeight;
            const x = event.clientX - bounding.left;
            const y = event.clientY - bounding.top - headerHeight;
            if (x < 0 || x > width || y < 0 || y > height) {
                return sortableInfo.state;
            }
            const top = y + scrollTop;
            const currentRow = visibleRows.find(row => row.top <= top && (row.top + rowHeight) > top);
            if (!currentRow) {
                return sortableInfo.state;
            }

            const sortingFrom = sortableInfo.from;
            const sortingToID = (currentRow.id !== sortingFrom.id) ? currentRow.id : undefined;
            const sortingTo = sortingToID ? this.getRowInfo(sortingToID) : undefined;
            const sortingPos = y;
            const sortingSide = top < (currentRow.top + (rowHeight / 2)) ? 'before' : 'after';
            const canSortTo = sortingTo && this.options.canSortTo?.call(this, sortingFrom, sortingTo, sortingSide) !== false;
            const sortingState: SortingState = canSortTo ? {
                sortingFrom,
                sortingPos,
                sortingTo,
                sortingSide,
            } : {
                sortingFrom,
                sortingPos,
                sortingTo: undefined,
                sortingSide: undefined,
            };
            return sortingState;
        },
    },
    onAddRows(rows) {
        const {rowOrders} = this.state;
        if (!rowOrders) {
            return;
        }
        rows = rows.sort((row1, row2) => {
            return rowOrders[row1.id] - rowOrders[row2.id];
        });
        return rows;
    },
    beforeRender(layout) {
        const {sortingFrom} = this.state;
        const {visibleRows} = layout;
        if (sortingFrom && !visibleRows.some(x => x.id === sortingFrom.id)) {
            layout.visibleRows = [...visibleRows, sortingFrom];
        }
    },
    onRenderCell(result, info, props) {
        const {sortingFrom, sortingPos, sortingTo, sortingSide} = this.state;
        if (!sortingFrom) {
            return result;
        }
        const currentRow = info.row;
        const style: Record<string, unknown> = {};
        const className: string[] = [];
        if (sortingFrom.id === currentRow.id) {
            style.top = sortingPos! - this.data.sortableInfo!.offset + ((props.top ?? currentRow.top) - (currentRow.top - this.layout.scrollTop));
            className.push('is-sorting-from');
        } else if (sortingTo) {
            const isSortToCurrent = sortingTo.id === currentRow.id;
            if (isSortToCurrent) {
                className.push(`text-primary is-sorting-to is-sorting-to-${sortingSide}`);
            }
            if (sortingFrom.index > currentRow.index && ((isSortToCurrent && sortingSide === 'before') || currentRow.index > sortingTo.index)) {
                className.push('is-sorting-before');
            } else if (sortingFrom.index < currentRow.index && ((isSortToCurrent && sortingSide === 'after') || currentRow.index < sortingTo.index)) {
                className.push('is-sorting-after');
            }
        }
        if (className.length) {
            result.push({
                outer: true,
                style,
                className,
            });
        }
        return result;
    },
};

export const sortable = definePlugin(sortablePlugin);
