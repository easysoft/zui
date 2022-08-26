import {ComponentType} from 'preact';
import {classes, ClassNameLike} from '@zui/browser-helpers/src/classes';
import {Cell, CellProps} from './cell';
import {ColInfo} from '../types/col-info';
import {RowData, RowID} from '../types/row-data';
import {CellRenderCallback} from '../types/cell-render';

export interface CellsProps {
    rowID: RowID,
    className?: ClassNameLike,
    cols: ColInfo[],
    left?: number,
    top?: number,
    width?: number,
    height?: number,
    data?: RowData,
    hoverCol?: string,
    CellComponent?: ComponentType<CellProps>,
    onRenderCell?: CellRenderCallback
}

export function Cells({rowID, className, top = 0, left = 0, width, height, cols, data, hoverCol, CellComponent = Cell, onRenderCell}: CellsProps) {
    return (
        <div className={classes('dtable-cells', className)} style={{top, left, width, height}}>
            {
                cols.map(col => {
                    if (!col.visible) {
                        return null;
                    }
                    return (
                        <CellComponent
                            key={col.name}
                            col={col}
                            hoverCol={hoverCol === col.name && col.setting.colHover !== false}
                            rowData={data}
                            rowID={rowID}
                            onRenderCell={onRenderCell}
                        />
                    );
                })
            }
        </div>
    );
}
