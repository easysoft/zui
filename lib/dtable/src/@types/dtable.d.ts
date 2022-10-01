type DTable = import('../dtable-react').DTable;

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
    header: boolean | preact.ComponentChildren | ((layout: DTableLayout, state: DTableState) => (preact.ComponentChildren | {__html: string}));
    footer: boolean | preact.ComponentChildren | ((layout: DTableLayout, state: DTableState) => (preact.ComponentChildren | {__html: string}));
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
