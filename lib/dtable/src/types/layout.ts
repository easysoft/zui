import {ComponentChildren} from 'preact';
import {ColInfo} from './col-info';
import {RowInfo} from './row-info';
import {DTableState} from './state';

export interface DTableLayout {
    width: number;
    height: number;
    rowHeight: number;
    rowsHeight: number;
    rowsHeightTotal: number;
    allRows: RowInfo[];
    rows: RowInfo[];
    visibleRows: RowInfo[];
    header: boolean | ComponentChildren | ((layout: DTableLayout, state: DTableState) => (ComponentChildren | {__html: string}));
    footer: boolean | ComponentChildren | ((layout: DTableLayout, state: DTableState) => (ComponentChildren | {__html: string}));
    headerHeight: number,
    footerHeight: number,
    colsInfo: {
        fixedLeftCols: ColInfo[];
        fixedRightCols: ColInfo[];
        scrollCols: ColInfo[];
        flexLeftWidth: number;
        scrollWidth: number;
        flexRightWidth: number;
        scrollWidthTotal: number;
    };
    scrollBottom: number;
    scrollTop: number;
    scrollLeft: number;
    startRowIndex: number; // todo
    endRowIndex: number; // todo
}
