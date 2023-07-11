import type {JSX, h as _h} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {CellRenderCallback} from './cell';
import type {DTableColsLayout} from './layout';
import type {RowInfo, RowProps} from './row';

export type BlockProps = {
    top: number;
    height: number;
    rowHeight: number;
    rows: RowInfo | RowInfo[];
    cols: DTableColsLayout;
    scrollLeft: number;
    scrollTop: number;
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    onRenderCell?: CellRenderCallback;
    // onRenderRow?: (data: {props: RowProps, row: RowInfo}, h: typeof _h) => Partial<RowProps | (RowProps & JSX.HTMLAttributes<HTMLElement>)> | void;
};
