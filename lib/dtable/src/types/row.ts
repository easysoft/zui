import type {JSX, ComponentType, h as _h} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {CellProps} from '../main-react';
import type {CellRenderCallback} from './cell';
import type {DTableColsLayout} from './layout';

export type RowID = string;

export type RowPropName = string;

export type RowPropValue = unknown;

export type RowData = Record<RowPropName, RowPropValue>;

export type RowInfoLike = string | number | RowInfo;

export type RowInfo = {
    id: string;
    index: number;
    top: number;
    data?: RowData;
    lazy?: boolean | 'resolved';
};

export type RowProps = {
    row: RowInfo;
    top: number;
    height: number;
    cols: DTableColsLayout;
    scrollLeft: number;
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    CellComponent?: ComponentType<CellProps>;
    onRenderCell?: CellRenderCallback;
};

export type RowsProps = {
    top: number;
    height: number;
    rowHeight: number;
    rows: RowInfo[];
    cols: DTableColsLayout;
    scrollLeft: number;
    scrollTop: number;
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    onRenderCell?: CellRenderCallback;
    onRenderRow?: (data: {props: RowProps, row: RowInfo}, h: typeof _h) => Partial<RowProps | (RowProps & JSX.HTMLAttributes<HTMLElement>)> | void;
};
