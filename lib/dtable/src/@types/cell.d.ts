type CellRenderCallback<C = ColSetting> = (
    result: CustomRenderResultList,
    data: {
        row: RowInfo,
        col: ColInfo<C>,
    },
    h: typeof preact.h,
) => CustomRenderResultList;

type CellProps = import('../components/cell').CellProps;

type CellValueGetter = (row: RowInfo, col: ColInfo, originValue: unknown) => unknown;
