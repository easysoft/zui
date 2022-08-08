import {JSX} from 'preact/jsx-runtime';
import {classes, ClassNameLike} from '@zui/browser-helpers/src/classes';
import {Row} from './row';
import {RowInfo} from '../types/row-info';
import {ColInfo} from '../types/col-info';
import {CellRenderCallback} from '../types/cell-render';

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
    onRenderCell?: CellRenderCallback
}

export function Rows({
    className,
    style,
    top,
    rows,
    height,
    rowHeight,
    fixedLeftCols,
    fixedRightCols,
    scrollCols,
    flexLeftWidth,
    scrollWidth,
    scrollWidthTotal,
    flexRightWidth,
    scrollLeft,
    onRenderCell,
}: RowsProps) {
    style = {...style, top, height};
    return (
        <div className={classes('dtable-rows', className)} style={style}>
            {rows.map(row => {
                return  (
                    <Row
                        rowID={row.data.id}
                        top={row.top}
                        height={rowHeight}
                        fixedLeftCols={fixedLeftCols}
                        fixedRightCols={fixedRightCols}
                        scrollCols={scrollCols}
                        flexLeftWidth={flexLeftWidth}
                        scrollWidth={scrollWidth}
                        scrollWidthTotal={scrollWidthTotal}
                        flexRightWidth={flexRightWidth}
                        scrollLeft={scrollLeft}
                        data={row.data}
                        onRenderCell={onRenderCell}
                    />
                );
            })}
        </div>
    );
}
