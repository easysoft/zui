type CellRenderCallback<C = ColSetting> = (
    result: CustomRenderResult,
    data: {
        row: RowInfo,
        col: ColInfo<C>,
    },
    h: typeof preact.h,
) => CustomRenderResult;

type CellProps = import('../components/cell').CellProps;

type CellValueGetter = (row: RowInfo, col: ColInfo, originValue: unknown) => unknown;
