import {classes} from '@zui/core';
import {Cells} from './cells';
import type {BlockProps} from '../types';

export function Block({
    top,
    height,
    rowHeight,
    rows,
    cols: {left, center, right},
    scrollLeft,
    scrollTop,
    className,
    style,
    onRenderCell,
}: BlockProps) {
    let leftView = null;
    if (left.list.length) {
        leftView = (
            <Cells
                key="left"
                className="dtable-fixed-left"
                rows={rows}
                scrollTop={scrollTop}
                cols={left.list}
                width={left.width}
                rowHeight={rowHeight}
                onRenderCell={onRenderCell}
            />
        );
    }
    let centerView = null;
    if (center.list.length) {
        centerView = (
            <Cells
                key="center"
                rows={rows}
                className="dtable-scroll-center"
                scrollLeft={scrollLeft}
                scrollTop={scrollTop}
                cols={center.list}
                left={left.width - scrollLeft}
                width={center.width}
                rowHeight={rowHeight}
                onRenderCell={onRenderCell}
            />
        );
    }
    let rightView = null;
    if (right.list.length) {
        rightView = (
            <Cells
                key="right"
                className="dtable-fixed-right"
                rows={rows}
                scrollTop={scrollTop}
                cols={right.list}
                left={left.width + center.width}
                width={right.width}
                rowHeight={rowHeight}
                onRenderCell={onRenderCell}
            />
        );
    }

    return (
        <div
            className={classes('dtable-block', className)}
            style={{...style, top, height}}
        >
            {leftView}
            {centerView}
            {rightView}
        </div>
    );
}
