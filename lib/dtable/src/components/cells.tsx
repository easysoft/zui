import {ComponentChildren, ComponentType} from 'preact';
import {classes, ClassNameLike} from '@zui/browser-helpers/src/classes';
import {Cell, CellProps} from './cell';
import {ColInfo} from '../types/col-info';
import {RowData} from '../types/row-data';

export interface CellsProps {
    rowID: string,
    className?: ClassNameLike,
    cols: ColInfo[],
    left?: number,
    top?: number,
    width?: number,
    height?: number,
    data?: RowData,
    CellComponent?: ComponentType<CellProps>,
    onRenderCell?: (rowID: string, col: ColInfo, data?: RowData) => ComponentChildren,
}

export function Cells({rowID, className, top = 0, left = 0, width, height, cols, data, CellComponent = Cell, onRenderCell}: CellsProps) {
    return (
        <div className={classes('dtable-cells', className)} style={{top, left, width, height}}>
            {
                cols.map(col => {
                    if (!col.visible) {
                        return null;
                    }
                    const value = onRenderCell ? onRenderCell(rowID, col, data) : (data ? data[col.name] : undefined);
                    return (
                        <CellComponent
                            key={col.name}
                            col={col}
                        >
                            {value as ComponentChildren}
                        </CellComponent>
                    );
                })
            }
        </div>
    );
}
