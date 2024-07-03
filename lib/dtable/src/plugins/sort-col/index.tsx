import {$, classes} from '@zui/core';
import {definePlugin} from '../../helpers/shared-plugins';
import {mousemove} from '../mousemove';
import {autoscroll} from '../autoscroll';
import './style.css';

import type {DTableWithPlugin, DTablePlugin} from '../../types/plugin';
import type {DTableMousemoveTypes} from '../mousemove';
import type {DTableAutoscrollTypes} from '../autoscroll';
import type {ColInfo, ColName} from '../../types';

export type SortingColSide = 'before' | 'after';

export type SortingColState = {
    from: ColInfo;
    pos: number;
    to?: ColInfo;
    side?: SortingColSide;
};

export type DTableSortColTypes = {
    options: Partial<{
        sortCol: boolean | ColName[] | ((this: DTableSortCol, col: ColInfo) => boolean);
        canSortColTo: (this: DTableSortCol, from: ColInfo, to: ColInfo, sortingSide: SortingColSide) => boolean;
        onSortColStart: (this: DTableSortCol, col: ColInfo, event: MouseEvent) => false | void;
        onSortColEnd: (this: DTableSortCol, from: ColInfo, to: ColInfo | undefined, sortingSide: SortingColSide | undefined, orders: string[] | undefined) => void;
        onSortCol: (this: DTableSortCol, from: ColInfo, to: ColInfo, sortingSide: SortingColSide, orders: string[]) => void | false;
    }>;
    state: Partial<{
        colOrders: Record<string, number>;
        sortColFrom: ColInfo;
        sortingColPos: number;
        sortingColTo?: ColInfo;
        sortingColSide?: SortingColSide;
    }>;
    data: {
        sortColInfo?: {from: ColInfo, element: HTMLElement, offset: number, state?: SortingColState, startMouseX: number, lastMouseX: number, colOffsetMap?: Record<string, number>};
    },
    methods: {
        getSortingColState(this: DTableSortCol, event: MouseEvent): SortingColState | undefined;
    }
};

export type DTableSortCol = DTableWithPlugin<DTableSortColTypes, [DTableMousemoveTypes, DTableAutoscrollTypes]>;

export type DTableSorColPlugin = DTablePlugin<DTableSortColTypes, [DTableMousemoveTypes, DTableAutoscrollTypes]>;

const renderCell: DTableSorColPlugin['onRenderCell'] = function (result, info) {
    const {col} = info;
    const {sortColFrom} = this.state;
    if (sortColFrom) {
        if (sortColFrom.name === col.name) {
            result.push({
                outer: true,
                className: 'is-sorting-from-col',
            });
        }
        const offset = this.data.sortColInfo?.colOffsetMap?.[col.name];
        if (typeof offset === 'number') {
            result.push({outer: true, className: 'is-sorting-col-move', style: {left: col.left + offset}});
        }
    }
    return result;
};

const sortColPlugin: DTableSorColPlugin = {
    name: 'sort-col',
    when: options => !!options.sortCol,
    plugins: [mousemove, autoscroll],
    events: {
        mousedown(event) {
            if (this.data.disableSortCol) {
                return;
            }
            const info = this.getPointerInfo(event);
            if (!info || info.rowID !== 'HEADER') {
                return;
            }
            const col = this.getColInfo(info.colName);
            if (!col || this.options.onSortColStart?.call(this, col, event) === false) {
                return;
            }
            if ($(event.target as HTMLElement).closest('a,button,img').attr('draggable', 'false').length) {
                event.preventDefault();
            }
            event.preventDefault();
            const startMouseX = event.clientX;
            this.data.sortColInfo = {from: col, element: info.cellElement, offset: startMouseX - info.cellElement.getBoundingClientRect().left, startMouseX, lastMouseX: startMouseX};
        },
        document_mouseup(event) {
            const {sortColInfo} = this.data;
            if (!sortColInfo) {
                return;
            }
            this.stopScrollToMouse();

            const sortingState = this.getSortingColState(event);
            if (sortingState) {
                let colOrders: Record<string, number> | undefined;
                let orders: string[] | undefined;
                const {from, to, side} = sortingState;
                if (to && side) {
                    const sideCols = this.layout.cols[from.side].list;
                    const fromIndex = from.sideIndex;
                    const toIndex = to.sideIndex;
                    const col = sideCols.splice(fromIndex, 1);
                    sideCols.splice(toIndex + (side === 'after' ? 1 : 0), 0, col[0]);
                    colOrders = {};
                    orders = [];
                    sideCols.forEach(({name}, index) => {
                        colOrders![name] = index;
                        orders!.push(name);
                    });

                    if (this.options.onSortCol?.call(this, from, to, side, orders) === false) {
                        colOrders = undefined;
                        orders = undefined;
                    }
                }

                if (to || Math.abs(sortColInfo.lastMouseX - sortColInfo.startMouseX) > 4) {
                    this.ignoreNextClick();
                }

                this.disableAnimation();
                this.update({
                    dirtyType: 'layout',
                    state: $.extend({
                        sortColFrom: undefined,
                        sortingColPos: undefined,
                        sortingColTo: undefined,
                        sortingColSide: undefined,
                    }, colOrders ? {colOrders} : null),
                }, () => {
                    this.options.onSortColEnd?.call(this, from, to, side, orders);
                });
            }

            this.data.sortColInfo = undefined;
        },
        document_mousemovesmooth(event) {
            const {sortColInfo} = this.data;
            if (!sortColInfo) {
                return;
            }
            const sortingState = this.getSortingColState(event);
            if (!sortingState) {
                return;
            }

            if (!sortColInfo.state) {
                this.startScrollToMouse({side: 'x'});
            }
            sortColInfo.lastMouseX = event.clientX;
            sortColInfo.state = sortingState;
            this.setState({
                sortColFrom: sortingState.from,
                sortingColPos: sortingState.pos,
                sortingColTo: sortingState.to,
                sortingColSide: sortingState.side,
            });
        },
    },
    methods: {
        getSortingColState(event) {
            const {disableSortCol, sortColInfo} = this.data;
            if (disableSortCol || !sortColInfo) {
                return;
            }

            const {from, element, offset} = sortColInfo;
            const $cells = $(element).closest('.dtable-cells');
            const bounding = $cells[0]!.getBoundingClientRect();
            const width = bounding.width;
            const pos = event.clientX - bounding.left - offset;
            if ((pos + from.width) < 0 || (pos - from.width) > width) {
                return sortColInfo.state;
            }
            const {cols, scrollLeft} = this.layout;
            const sideCols = cols[from.side].list;
            if (sideCols.length <= 1) {
                return sortColInfo.state;
            }
            const left = scrollLeft + pos;
            const to = sideCols.find(col => col.name !== from.name && col.visible && col.left <= left && (col.left + col.width) > left);
            if (!to) {
                return sortColInfo.state;
            }

            const side = left < (to.left + (to.width / 2)) ? 'before' : 'after';
            const canSortTo = from.side === to.side && this.options.canSortColTo?.call(this, from, to, side) !== false;
            const sortingColState: SortingColState = canSortTo ? {
                from,
                pos: pos + scrollLeft,
                to,
                side,
            } : {
                from,
                pos,
                to: undefined,
                side: undefined,
            };
            return sortingColState;
        },
    },
    onAddCol(col) {
        const {colOrders} = this.state;
        const order = colOrders?.[col.name];
        if (order !== undefined) {
            col.order = order;
        }
    },
    beforeRender(layout) {
        const {sortColFrom, sortingColTo, sortingColSide} = this.state;
        if (sortColFrom && sortingColTo) {
            layout.className = classes(layout.className, 'has-sorting-col');
            const sideCols = [...layout.cols[sortColFrom.side].list];
            const fromIndex = sortColFrom.sideIndex;
            const toIndex = sortingColTo.sideIndex;
            const col = sideCols.splice(fromIndex, 1);
            sideCols.splice(toIndex + (sortingColSide === 'after' ? 1 : 0), 0, col[0]);
            let left = 0;
            const colOffsetMap: Record<string, number> = {};
            sideCols.forEach((sideCol) => {
                const offset = left - sideCol.left;
                if (offset) {
                    colOffsetMap[sideCol.name] = offset;
                }
                left += sideCol.realWidth;
            });
            this.data.sortColInfo!.colOffsetMap = colOffsetMap;
        }
    },
    onRenderHeaderCell(result, info, props, t) {
        const {sortCol} = this.options;
        if (sortCol) {
            if (this.layout.cols[info.col.side].list.length > 1 && (sortCol === true || (Array.isArray(sortCol) && sortCol.includes(info.col.name)) || (typeof sortCol === 'function' && sortCol.call(this, info.col)))) {
                result.push({outer: true, className: 'is-sortable-col'});
            }
            result = renderCell.call(this, result, info, props, t);
        }
        return result;
    },
    onRenderCell: renderCell,
};

export const sortCol = definePlugin(sortColPlugin);
