interface DTableDataOptions<C = ColSetting> {
    cols: C[];
    data: (RowData | string)[] | number;
    rowDataGetter?: (ids: string[]) => RowData[],
    cellValueGetter?: CellValueGetter,
    rowKey?: string;
}

interface DTableLayoutOptions {
    width: number | '100%' | 'auto' | ((this: DTable, actualWidth: number) => number | 'auto');
    height: number | '100%' | 'auto' | {min: number, max: number} | ((this: DTable, actualHeight: number) => number | 'auto' | {min: number, max: number});
    rowHeight: number;
    defaultColWidth: number;
    minColWidth: number;
    maxColWidth: number;
    header?: boolean | CustomRenderResultList<[layout: DTableLayout], DTable> | CustomRenderResultGenerator<[layout: DTableLayout], DTable> | CustomRenderResultItem;
    footer?: boolean | CustomRenderResultList<[layout: DTableLayout], DTable> | CustomRenderResultGenerator<[layout: DTableLayout], DTable> | CustomRenderResultItem;
    headerHeight: number;
    footerHeight: number;
    responsive: boolean;
    scrollbarHover: boolean;
    scrollbarSize?: number;
    horzScrollbarPos?: 'inside' | 'outside';
}

interface DTableStyleOptions {
    rowHover?: boolean;
    colHover?: boolean | 'header';
    cellHover?: boolean;
    bordered?: boolean;
    striped?: boolean;
}

interface DTableCallbackOptions {
    onLayout?: (this: DTable, layout: DTableLayout) => (DTableLayout | undefined);
    onScroll?: (this: DTable, scrollInfo: {scrollTop?: number, scrollLeft?: number}) => void;
    onRenderCell?: CellRenderCallback;
    onRenderHeaderCell?: CellRenderCallback;
    onRenderRow?: (this: DTable, data: {props: RowProps, row: RowInfo}, h: typeof preact.h) => Partial<RowProps | (RowProps & preact.JSX.HTMLAttributes<HTMLElement>)> | void;
    onRenderHeaderRow?: (this: DTable, data: {props: RowProps}, h: typeof preact.h) => RowProps;
    afterRender?: (this: DTable) => void;
    onRowClick?: (this: DTable, event: MouseEvent, data: {rowID: string, rowInfo?: RowInfo, element: HTMLElement, cellElement?: HTMLElement}) => void | true;
    onCellClick?: (this: DTable, event: MouseEvent, data: {rowID: string, colName: string, rowInfo?: RowInfo, element: HTMLElement, rowElement: HTMLElement}) => void | true;
    onHeaderCellClick?: (this: DTable, event: MouseEvent, data: {colName: string, element: HTMLElement}) => void;
    onAddRow?: (this: DTable, row: RowInfo, index: number) => void | false;
    onAddRows?: (this: DTable, rows: RowInfo[]) => RowInfo[] | void;
}

interface DTableOptions<C = ColSetting> extends DTableDataOptions<C>, DTableLayoutOptions, DTableStyleOptions, DTableCallbackOptions {
    id?: string;
    lang?: string;
    i18n?: Record<string, Record<string, string | object>>;
    className?: ClassNameLike,
    parent?: HTMLElement,
    plugins?: DTablePluginLike[];
    [prop: string]: unknown
}
