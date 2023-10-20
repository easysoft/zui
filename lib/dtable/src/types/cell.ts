import type {h as _h, JSX, ComponentChildren} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {ColSetting, ColInfo} from './col';
import type {CustomRenderResultList} from './common';
import type {RowInfo} from './row';

export type CellInfo<C = ColSetting> = {value: unknown, row: RowInfo, col: ColInfo<C>};

export type CellRenderCallback<C = ColSetting> = (
    result: CustomRenderResultList,
    cell: CellInfo<C>,
    props: CellProps,
    h: typeof _h,
) => CustomRenderResultList;

export type CellValueGetter = (row: RowInfo, col: ColInfo, originValue: unknown) => unknown;

export type CellProps = {
    col: ColInfo;
    row: RowInfo;
    left?: number,
    top?: number,
    width?: number,
    height: number;
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    outerClass?: ClassNameLike;
    outerStyle?: JSX.CSSProperties;
    children?: ComponentChildren;
    onRenderCell?: CellRenderCallback;
};

export type CellsProps = {
    rows: RowInfo | RowInfo[];
    cols: ColInfo[];
    rowHeight: number;
    scrollLeft?: number;
    scrollTop?: number;
    left?: number;
    top?: number;
    width?: number;
    height?: number | '100%';
    className?: ClassNameLike;
    CellComponent?: preact.ComponentType<CellProps>;
    onRenderCell?: CellRenderCallback;
};
