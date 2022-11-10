import type {DTable} from '../main-react';
import type {ColInfo} from './col';
import type {CustomRenderResultList, CustomRenderResult} from './common';
import type {DTableOptions} from './options';
import type {RowInfo, RowID} from './row';

export type DTableState = {
    scrollTop: number;
    scrollLeft: number;
    renderCount: number,
    [prop: string]: unknown;
};

export type DTableHTMLEvent = keyof HTMLElementEventMap;

export type DTableEventListener<T = DTable, E extends Event = Event> = (this: T, event: E) => void | false;

export type DTableEventTarget = '' | 'window' | 'document';

export type DTableLayout = {
    options: DTableOptions;
    width: number;
    height: number;
    rowHeight: number;
    rowsHeight: number;
    rowsHeightTotal: number;
    allRows: RowInfo[];
    rows: RowInfo[];
    rowsMap: Record<RowID, RowInfo>;
    header?: boolean | CustomRenderResultList<[table: DTable, layout: DTableLayout]>;
    footer?: boolean | CustomRenderResultList<[layout: DTableLayout], DTable> | ((this: DTable, layout: DTableLayout) => CustomRenderResultList<[layout: DTableLayout], DTable>);
    footerGenerators: Record<string, CustomRenderResult<[table: DTable, layout: DTableLayout]>>;
    headerHeight: number,
    footerHeight: number,
    colsMap: Record<string, ColInfo>;
    flexCols: ColInfo[];
    colsList: ColInfo[];
    colsInfo: {
        fixedLeftCols: ColInfo[];
        fixedRightCols: ColInfo[];
        scrollCols: ColInfo[];
        fixedLeftWidth: number;

        /** Scrollable section width */
        scrollWidth: number;
        fixedRightWidth: number;

        /** Scrollable cols total width */
        scrollColsWidth: number;
    };

    visibleRows: RowInfo[];
    scrollTop: number;
    scrollLeft: number;
};

export type DTablePointerInfo = {
    cellElement: HTMLElement,
    rowElement: HTMLElement,
    colName: string,
    rowID: string,
    target: HTMLElement,
};
