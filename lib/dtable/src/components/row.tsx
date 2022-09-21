import {classes} from '@zui/browser-helpers/src/classes';
import {Cell} from './cell';
import {Cells} from './cells';

export function Row({
    row,
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
    style,
    ...others
}: RowProps) {
    let flexLeftView = null;
    if (fixedLeftCols?.length) {
        flexLeftView = (
            <Cells
                className="dtable-fixed-left"
                cols={fixedLeftCols}
                width={flexLeftWidth}
                row={row}
                CellComponent={CellComponent}
                onRenderCell={onRenderCell}
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
                row={row}
                CellComponent={CellComponent}
                onRenderCell={onRenderCell}
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
                row={row}
                CellComponent={CellComponent}
                onRenderCell={onRenderCell}
            />
        );
    }

    const finalStyle = {top, height, lineHeight: `${height - 2}px`, ...style};

    return (
        <div
            className={classes('dtable-row', className)}
            style={finalStyle}
            data-id={row.id}
            {...others}
        >
            {flexLeftView}
            {scrollableView}
            {flexRightView}
        </div>
    );
}
