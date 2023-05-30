import type {ClassNameLike} from '@zui/core';
import type {CellProps} from '../main-react';
import type {CellRenderCallback} from './cell';
import type {ColInfo} from './col';

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
