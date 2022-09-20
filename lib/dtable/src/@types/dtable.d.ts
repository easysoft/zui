type DTable = import('../dtable-react').DTable;

type DTableState = {
    scrollTop: number;
    scrollLeft: number;
    [prop: string]: unknown;
};

interface DTableEventListener<T extends DTable = DTable, E extends Event = Event> {
    (this: T, evt: E): void | false;
}

type DTableLayout = {
    width: number;
    height: number;
    rowHeight: number;
    rowsHeight: number;
    rowsHeightTotal: number;
    allRows: RowInfo[];
    rows: RowInfo[];
    header: boolean | preact.ComponentChildren | ((layout: DTableLayout, state: DTableState) => (preact.ComponentChildren | {__html: string}));
    footer: boolean | preact.ComponentChildren | ((layout: DTableLayout, state: DTableState) => (preact.ComponentChildren | {__html: string}));
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

    visibleRows: RowInfo[];
    scrollTop: number;
    scrollLeft: number;
};

type ClassNameLike = import('../../../browser-helpers/src/classes').ClassNameLike;
