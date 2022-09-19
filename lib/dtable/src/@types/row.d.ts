type RowID = string | number;
type RowData = Record<string, unknown>;

type RowInfo = {
    id: RowID;
    index: number;
    top: number;
    data: RowData;
    lazy?: boolean | 'resolved';
};

type RowProps = {
    rowID: RowID;
    top: number;
    height: number;
    flexLeftWidth: number;
    scrollWidth: number;
    scrollWidthTotal: number;
    flexRightWidth: number;
    scrollLeft: number;
} & Partial<{
    className: ClassNameLike;
    fixedLeftCols: ColInfo[];
    fixedRightCols: ColInfo[];
    scrollCols: ColInfo[];
    data: RowData;
    style: preact.JSX.CSSProperties;
    CellComponent: preact.ComponentType<CellProps>;
    onRenderCell: CellRenderCallback;
}>;
