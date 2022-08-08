import {ComponentType} from 'preact';
import {classes, ClassNameLike} from '@zui/browser-helpers/src/classes';
import {Cell, CellProps} from './cell';
import {Cells} from './cells';
import {ColInfo} from '../types/col-info';
import {RowData} from '../types/row-data';
import {CellRenderCallback} from '../types/cell-render';

export interface RowProps {
    rowID: string,
    className?: ClassNameLike,
    top: number,
    height: number,
    fixedLeftCols?: ColInfo[],
    fixedRightCols?: ColInfo[],
    scrollCols?: ColInfo[],
    flexLeftWidth: number,
    scrollWidth: number,
    scrollWidthTotal: number,
    flexRightWidth: number,
    scrollLeft: number,
    data?: RowData,
    CellComponent?: ComponentType<CellProps>,
    onRenderCell?: CellRenderCallback
}

export function Row({
    rowID,
    className,
    top,
    height,
    fixedLeftCols,
    fixedRightCols,
    scrollCols,
    flexLeftWidth,
    scrollWidth,
    scrollWidthTotal,
    flexRightWidth,
    scrollLeft,
    CellComponent = Cell,
    onRenderCell,
    data,
}: RowProps) {

    let flexLeftView = null;
    if (fixedLeftCols?.length) {
        flexLeftView = (
            <Cells
                className="-fixed-left"
                cols={fixedLeftCols}
                width={flexLeftWidth}
                rowID={rowID}
                CellComponent={CellComponent}
                onRenderCell={onRenderCell}
                data={data}
            />
        );
    }

    let scrollableView = null;
    if (scrollCols?.length) {
        scrollableView = (
            <Cells
                className="-flexable"
                cols={scrollCols}
                left={flexLeftWidth - scrollLeft}
                width={scrollWidthTotal}
                rowID={rowID}
                CellComponent={CellComponent}
                onRenderCell={onRenderCell}
                data={data}
            />
        );
    }

    let flexRightView = null;
    if (fixedRightCols?.length) {
        flexRightView = (
            <Cells
                className="-fixed-right"
                cols={fixedRightCols}
                left={flexLeftWidth + scrollWidth}
                width={flexRightWidth}
                rowID={rowID}
                CellComponent={CellComponent}
                onRenderCell={onRenderCell}
                data={data}
            />
        );
    }

    const style = {top, height, lineHeight: `${height - 2}px`};

    return (
        <div
            className={classes('dtable-row', className)}
            style={style}
            data-id={rowID}
        >
            {flexLeftView}
            {scrollableView}
            {flexRightView}
        </div>
    );
}
