import {ComponentChildren, ComponentType} from 'preact';
import {classes, ClassNameLike} from '@zui/browser-helpers/src/classes';
import {Cell, CellProps} from './cell';
import {ColInfo} from '../types/col-info';
import {RowData} from '../types/row-data';
import {CellRenderCallback} from '../types/cell-render';
import {CustomRenderResult} from '../types/custom-render-result';
import {parseRenderResult} from '../helpers/parse-render-result';

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
    onRenderCell?: CellRenderCallback
}

export function Cells({rowID, className, top = 0, left = 0, width, height, cols, data, CellComponent = Cell, onRenderCell}: CellsProps) {
    return (
        <div className={classes('dtable-cells', className)} style={{top, left, width, height}}>
            {
                cols.map(col => {
                    if (!col.visible) {
                        return null;
                    }
                    let value: CustomRenderResult = data?.[col.name] as ComponentChildren;
                    if (col.onRenderCell) {
                        const newValue = col.onRenderCell(rowID, col, data, value);
                        if (newValue !== undefined) {
                            value = newValue;
                        }
                    }
                    if (onRenderCell) {
                        const newValue = onRenderCell(rowID, col, data, value);
                        if (newValue !== undefined) {
                            value = newValue;
                        }
                    }
                    const {children, html, className: cellClassName, style} = parseRenderResult(value);
                    return (
                        <CellComponent
                            key={col.name}
                            col={col}
                            className={cellClassName}
                            style={style}
                            html={html}
                        >
                            {children}
                        </CellComponent>
                    );
                })
            }
        </div>
    );
}
