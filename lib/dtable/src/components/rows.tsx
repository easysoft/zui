import {JSX} from 'preact/jsx-runtime';
import {classes, ClassNameLike} from '@zui/browser-helpers/src/classes';
import {Row} from './row';
import {RowInfo} from '../types/row-info';
import {ColInfo} from '../types/col-info';
import {CellRenderCallback} from '../types/cell-render';
import {RowProps} from '../types/row-props';

export interface RowsProps {
    className?: ClassNameLike,
    top: number,
    height: number,
    rowHeight: number,
    rows: RowInfo[],
    style?: JSX.CSSProperties,
    fixedLeftCols: ColInfo[],
    fixedRightCols: ColInfo[],
    scrollCols: ColInfo[],
    flexLeftWidth: number,
    scrollWidth: number,
    scrollWidthTotal: number,
    flexRightWidth: number,
    scrollLeft: number,
    hoverCol?: string,
    onRenderCell?: CellRenderCallback,
    onRenderRow?: (rowProps: RowProps, rowInfo: RowInfo) => RowProps,
}

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
                let rowProps: RowProps = {
                    className: `dtable-row-${row.index % 2 ? 'odd' : 'even'}`,
                    rowID: row.id,
                    data: row.data,
                    top: row.top,
                    height: rowHeight,
                    ...otherProps,
                };
                if (onRenderRow) {
                    rowProps = onRenderRow(rowProps, row);
                }
                return  (
                    <Row {...rowProps} />
                );
            })}
        </div>
    );
}
