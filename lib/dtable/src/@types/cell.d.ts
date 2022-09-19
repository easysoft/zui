type CellRenderCallback = (
    result: CustomRenderResult,
    data: {
        rowID: RowID,
        col: ColInfo,
        rowData?: RowData
    },
    h: typeof preact.h,
) => CustomRenderResult;

type CellProps = import('../components/cell').CellProps;
