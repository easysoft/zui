import {classes} from '@zui/core';
import {Cell} from './cell';
import {Cells} from './cells';
import type {RowProps} from '../types/row';

export function Row({
    row,
    className,
    top,
    height,
    cols: {left, center, right},
    scrollLeft,
    CellComponent = Cell,
    onRenderCell,
    style,
    ...others
}: RowProps) {
    let flexLeftView = null;
    if (left.list.length) {
        flexLeftView = (
            <Cells
                className="dtable-fixed-left"
                cols={left.list}
                width={left.width}
                row={row}
                CellComponent={CellComponent}
                onRenderCell={onRenderCell}
            />
        );
    }

    let scrollableView = null;
    if (center.list.length) {
        scrollableView = (
            <Cells
                className="dtable-flexable"
                cols={center.list}
                left={left.width - scrollLeft}
                width={Math.max(center.width, center.totalWidth)}
                row={row}
                CellComponent={CellComponent}
                onRenderCell={onRenderCell}
            />
        );
    }

    let flexRightView = null;
    if (right.list.length) {
        flexRightView = (
            <Cells
                className="dtable-fixed-right"
                cols={right.list}
                left={left.width + center.width}
                width={right.width}
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
