import {h as _h} from 'preact';
import {classes} from '@zui/browser-helpers/src/classes';
import {Row} from './row';

import type {JSX} from 'preact/jsx-runtime';

type RowsProps = {
    top: number;
    height: number;
    rowHeight: number;
    rows: RowInfo[];
    fixedLeftCols: ColInfo[];
    fixedRightCols: ColInfo[];
    scrollCols: ColInfo[];
    fixedLeftWidth: number;
    scrollWidth: number;
    scrollColsWidth: number;
    fixedRightWidth: number;
    scrollLeft: number;
} & Partial<{
    className: ClassNameLike;
    style: JSX.CSSProperties;
    onRenderCell: CellRenderCallback;
    onRenderRow: (data: {props: RowProps, row: RowInfo}, h: typeof _h) => Partial<RowProps | (RowProps & JSX.HTMLAttributes<HTMLElement>)> | void;
}>;

export function Rows({
    className,
    style,
    top,
    rows,
    height,
    rowHeight,
    onRenderRow,
    ...otherProps
}: RowsProps) {
    style = {...style, top, height};
    return (
        <div className={classes('dtable-rows', className)} style={style}>
            {rows.map(row => {
                const props: RowProps = {
                    className: `dtable-row-${row.index % 2 ? 'odd' : 'even'}`,
                    row,
                    top: row.top,
                    height: rowHeight,
                    ...otherProps,
                };
                const result = onRenderRow?.({props, row}, _h);
                if (result) {
                    Object.assign(props, result);
                }
                return  (
                    <Row {...props} />
                );
            })}
        </div>
    );
}
