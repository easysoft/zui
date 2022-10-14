type DTable = import('../components/dtable').DTable;

type DTableState = {
    scrollTop: number;
    scrollLeft: number;
    [prop: string]: unknown;
};

type DTableHTMLEvent = keyof HTMLElementEventMap;

type DTableEventListener<T = DTable, E extends Event = Event> = (this: T, event: E) => void | false;

type DTableEventTarget = '' | 'window' | 'document';

type DTableLayout = {
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
    footer?: boolean | CustomRenderResultList<[table: DTable, layout: DTableLayout]> | CustomRenderResultList<[table: DTable, layout: DTableLayout]>[number];
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

type DTablePointerInfo = {
    cellElement: HTMLElement,
    rowElement: HTMLElement,
    colName: string,
    rowID: string,
    target: HTMLElement,
};
