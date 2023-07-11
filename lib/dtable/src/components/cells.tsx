import type {ComponentChild} from 'preact';
import {classes, ClassNameLike} from '@zui/core';
import {Cell, CellProps} from './cell';
import type {CellRenderCallback} from '../types/cell';
import type {ColInfo} from '../types/col';
import type {RowInfo} from '../types/row';

export type CellsProps = {
    rows: RowInfo | RowInfo[];
    cols: ColInfo[];
    rowHeight: number;
    scrollLeft?: number;
    scrollTop?: number;
    left?: number;
    top?: number;
    width?: number;
    height?: number | '100%';
    className?: ClassNameLike;
    CellComponent?: preact.ComponentType<CellProps>;
    onRenderCell?: CellRenderCallback;
};

export function Cells({
    rows = [],
    cols,
    rowHeight,
    scrollLeft = 0,
    scrollTop = 0,
    left = 0,
    top = 0,
    width,
    height = '100%',
    className,
    CellComponent = Cell,
    onRenderCell,
}: CellsProps) {
    const rowsList = Array.isArray(rows) ? rows : [rows];
    const firstRowTop = rowsList[0]?.top ?? 0;
    return (
        <div
            className={classes('dtable-cells', className)}
            style={{top, left, width, height}}
        >
            <div className="dtable-cells-container" style={{left: -scrollLeft, top: -scrollTop + firstRowTop}}>
                {rowsList.reduce<ComponentChild[]>((list, row) => {
                    cols.forEach(col => {
                        list.push(
                            <CellComponent
                                key={`${row.index}:${col.name}`}
                                className={`is-${row.index % 2 ? 'odd' : 'even'}-row`}
                                col={col}
                                row={row}
                                top={row.top - firstRowTop}
                                height={rowHeight}
                                onRenderCell={onRenderCell}
                            />,
                        );
                    });
                    return list;
                }, [])}
            </div>
        </div>
    );
}
