import {ComponentChildren} from 'preact';
import {ColInfo} from './col-info';
import {RowInfo} from './row-info';

export interface DTableLayout {
    width: number;
    height: number;
    rowHeight: number;
    rowsHeight: number;
    rowsHeightTotal: number;
    rows: RowInfo[];
    visibleRows: RowInfo[];
    header: ComponentChildren,
    footer: ComponentChildren,
    headerHeight: number,
    footerHeight: number,
    colsInfo: {
        fixedLeftCols: ColInfo[];
        fixedRightCols: ColInfo[];
        scrollCols: ColInfo[];
        flexLeftWidth: number;
        scrollWidth: number;
        flexRightWidth: number;
    };
    scrollWidthTotal: number;
    scrollBottom: number;
    scrollTop: number;
    scrollLeft: number;
    startRowIndex: number;
    endRowIndex: number;
}
