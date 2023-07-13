import type {h as _h} from 'preact';
import type {ColSetting, ColInfo} from './col';
import type {CustomRenderResultList} from './common';
import type {RowInfo} from './row';

export type CellInfo<C = ColSetting> = {value?: unknown, row: RowInfo, col: ColInfo<C>};

export type CellRenderCallback<C = ColSetting> = (
    result: CustomRenderResultList,
    cell: CellInfo<C>,
    h: typeof _h,
) => CustomRenderResultList;

export type CellValueGetter = (row: RowInfo, col: ColInfo, originValue: unknown) => unknown;
