import {$, classes} from '@zui/core';
import {definePlugin} from '../../helpers/shared-plugins';
import {mousemove} from '../mousemove';
import {autoscroll} from '../autoscroll';
import './style.css';

import type {DTableWithPlugin, DTablePlugin} from '../../types/plugin';
import type {DTableMousemoveTypes} from '../mousemove';
import type {DTableAutoscrollTypes} from '../autoscroll';
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
        onSortEnd: (this: DTableSortable, from: RowInfo, to: RowInfo | undefined, sortingSide: SortingSide | undefined, orders: string[] | undefined) => void;
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
        sortableInfo?: {from: RowInfo, offset: number, state?: SortingState, startMouseY: number, lastMouseY: number};
    },
    methods: {
        getSortingState(this: DTableSortable, event: MouseEvent): SortingState | undefined;
    }
};

export type DTableSortable = DTableWithPlugin<DTableSortableTypes, [DTableMousemoveTypes, DTableAutoscrollTypes]>;

const sortablePlugin: DTablePlugin<DTableSortableTypes, [DTableMousemoveTypes, DTableAutoscrollTypes]> = {
    name: 'sortable',
    defaultOptions: {
        sortable: true,
    },
    when: options => !!options.sortable,
    plugins: [mousemove, autoscroll],
    resetState: true,
    state() {
        return {
            rowOrders: undefined,
            sortingFrom: undefined,
            sortingPos: undefined,
            sortingTo: undefined,
            sortingSide: undefined,
        };
    },
    events: {
        click(event) {
            if ((event.target as HTMLElement).closest('.dtable-sort-link')) {
                this.state.rowOrders = undefined;
            }
        },
        mousedown(event) {
            if (this.data.disableSortable) {
                return;
            }
            const {sortHandler = '.dtable-cell'} = this.options;
            const $target = $(event.target as HTMLElement);
            const $handler = $target.closest(sortHandler);
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
            event.preventDefault();
            const startMouseY = event.clientY;
            this.data.sortableInfo = {from: row, offset: startMouseY - info.cellElement.getBoundingClientRect().top, startMouseY, lastMouseY: startMouseY};
        },
        document_mouseup(event) {
            const {sortableInfo} = this.data;
            if (!sortableInfo) {
                return;
            }
            this.stopScrollToMouse();

            const sortingState = this.getSortingState(event);
            if (sortingState) {
                let rowOrders: Record<string, number> | undefined;
                let orders: string[] | undefined;
                const {sortingFrom, sortingTo, sortingSide} = sortingState;
                if (sortingTo && sortingSide) {
                    const ids = this.layout.rows.map(row => row.id);
                    const oldOrders = [...ids];
                    const fromIndex = sortingFrom.index;
                    const toIndex = sortingTo.index;
                    if (!(fromIndex === (toIndex + 1) && sortingSide === 'after') && !(fromIndex === (toIndex - 1) && sortingSide === 'before')) {
                        const row = ids.splice(fromIndex, 1);
                        ids.splice(toIndex, 0, row[0]);
                        rowOrders = {};
                        orders = [];
                        ids.forEach((id, index) => {
                            rowOrders![id] = index;
                            orders!.push(id);
                        });

                        if (oldOrders.join() === orders.join() || this.options.onSort?.call(this, sortingFrom, sortingTo, sortingSide, orders) === false) {
                            rowOrders = undefined;
                            orders = undefined;
                        }
                    }
                }

                if (sortingTo || Math.abs(sortableInfo.lastMouseY - sortableInfo.startMouseY) > 4) {
                    this.ignoreNextClick();
                }

                this.disableAnimation();
                this.update({
                    dirtyType: 'layout',
                    state: preState => {
                        return $.extend({
                            sortingFrom: undefined,
                            sortingPos: undefined,
                            sortingTo: undefined,
                            sortingSide: undefined,
                        }, rowOrders ? {rowOrders: {
                            ...(preState.rowOrders as Record<string, number>),
                            ...rowOrders,
                        }} : null);
                    },
                }, () => {
                    this.options.onSortEnd?.call(this, sortingFrom, sortingTo, sortingSide, orders);
                    setTimeout(() => {
                        this.data.disableCheckable = undefined;
                    }, 50);
                });
            }

            this.data.sortableInfo = undefined;
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
            }
            sortableInfo.lastMouseY = event.clientY;
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
        const undefinedOrder = rows.length * 100;
        rows = rows.sort((row1, row2) => {
            const order1 = rowOrders[row1.id] ?? (undefinedOrder + row1.index);
            const order2 = rowOrders[row2.id] ?? (undefinedOrder + row2.index);
            return order1 - order2;
        });
        return rows;
    },
    beforeRender(layout) {
        const {sortingFrom} = this.state;
        const {visibleRows} = layout;
        if (sortingFrom) {
            if (!visibleRows.some(x => x.id === sortingFrom.id)) {
                layout.visibleRows = [...visibleRows, sortingFrom];
            }
            layout.className = classes(layout.className, 'dtable-sorting');
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
