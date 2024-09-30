import type {JSX, ComponentChildren} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {CellRenderCallback} from './cell';
import type {DTableColsLayout} from './layout';
import type {RowInfo} from './row';

export type BlockProps = {
    top: number;
    height: number;
    rowHeight: number;
    rows: RowInfo | RowInfo[];
    cols: DTableColsLayout;
    scrollLeft: number;
    scrollTop: number;
    className?: ClassNameLike;
    cellClass?: ClassNameLike;
    style?: JSX.CSSProperties;
    onRenderCell?: CellRenderCallback;
    children?: ComponentChildren;
};
