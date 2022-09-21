type CellRenderCallback<C extends ColSetting = ColSetting> = (
    result: CustomRenderResult,
    data: {
        row: RowInfo,
        col: ColInfo<C>,
        value?: unknown,
    },
    h: typeof preact.h,
) => CustomRenderResult;

type CellProps = import('../components/cell').CellProps;

type CellValueGetter = (row: RowInfo, col: ColInfo) => unknown;
