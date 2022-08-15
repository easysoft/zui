import {ClassNameLike} from '@zui/browser-helpers/src/classes';
import {ComponentType} from 'preact';
import {CellProps} from '../components/cell';
import {CellRenderCallback} from './cell-render';
import {ColInfo} from './col-info';
import {RowData} from './row-data';

export interface RowProps {
    rowID: string | number,
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
