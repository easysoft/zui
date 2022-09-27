type DTable = import('../dtable-react').DTable;

type DTableState = {
    scrollTop: number;
    scrollLeft: number;
    [prop: string]: unknown;
};

type DTableHTMLEvent = keyof HTMLElementEventMap;

type DTableEventType<E = DTableHTMLEvent> = E | `${'document' | 'window'}_${E}`;

type DTableEventListener<K extends DTableHTMLEvent = DTableHTMLEvent, T extends DTable = DTable> = (this: T, evt: HTMLElementEventMap[K]) => void | false;

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
