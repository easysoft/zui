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
    fixedLeftWidth,
    scrollWidth,
    scrollColsWidth,
    fixedRightWidth,
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
                width={fixedLeftWidth}
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
                left={fixedLeftWidth - scrollLeft}
                width={scrollColsWidth}
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
                left={fixedLeftWidth + scrollWidth}
                width={fixedRightWidth}
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
