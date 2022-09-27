type RowID = string;

type RowPropName = string;

type RowPropValue = unknown;

type RowData = Record<RowPropName, RowPropValue>;

type RowInfo = {
    id: string;
    index: number;
    top: number;
    data?: RowData;
    lazy?: boolean | 'resolved';
};

type RowProps = {
    row: RowInfo;
    top: number;
    height: number;
    fixedLeftWidth: number;
    scrollWidth: number;
    scrollColsWidth: number;
    fixedRightWidth: number;
    scrollLeft: number;
} & Partial<{
    className: ClassNameLike;
    fixedLeftCols: ColInfo[];
    fixedRightCols: ColInfo[];
    scrollCols: ColInfo[];
    style: preact.JSX.CSSProperties;
    CellComponent: preact.ComponentType<CellProps>;
    onRenderCell: CellRenderCallback;
}>;
