type CellRenderCallback<C extends ColSetting = ColSetting> = (
    result: CustomRenderResult,
    data: {
        rowID: RowID,
        col: ColInfo<C>,
        rowData?: RowData
    },
    h: typeof preact.h,
) => CustomRenderResult;

type CellProps = import('../components/cell').CellProps;
