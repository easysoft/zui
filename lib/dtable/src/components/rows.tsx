import {JSX} from 'preact/jsx-runtime';
import {classes, ClassNameLike} from '@zui/browser-helpers/src/classes';
import {Row} from './row';
import {RowInfo} from '../types/row-info';
import {ColInfo} from '../types/col-info';

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
    flexRightWidth: number,
    scrollLeft: number,
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
    flexRightWidth,
    scrollLeft,
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
                        flexRightWidth={flexRightWidth}
                        scrollLeft={scrollLeft}
                        data={row.data}
                    />
                );
            })}
        </div>
    );
}
