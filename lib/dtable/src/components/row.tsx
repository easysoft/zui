import {classes} from '@zui/browser-helpers/src/classes';
import {RowProps} from '../types/row-props';
import {Cell} from './cell';
import {Cells} from './cells';


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
    hoverCol,
    data,
}: RowProps) {
    let flexLeftView = null;
    if (fixedLeftCols?.length) {
        flexLeftView = (
            <Cells
                className="dtable-fixed-left"
                cols={fixedLeftCols}
                width={flexLeftWidth}
                rowID={rowID}
                hoverCol={hoverCol}
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
                className="dtable-flexable"
                cols={scrollCols}
                left={flexLeftWidth - scrollLeft}
                width={scrollWidthTotal}
                rowID={rowID}
                hoverCol={hoverCol}
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
                className="dtable-fixed-right"
                cols={fixedRightCols}
                left={flexLeftWidth + scrollWidth}
                width={flexRightWidth}
                rowID={rowID}
                hoverCol={hoverCol}
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
