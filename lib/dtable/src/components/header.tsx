import {CellRenderCallback} from '../types/cell-render';
import {ColInfo} from '../types/col-info';
import {RowProps} from '../types/row-props';
import {HeaderCell} from './header-cell';
import {Row} from './row';

export interface HeaderProps {
    height: number,
    fixedLeftCols: ColInfo[],
    fixedRightCols: ColInfo[],
    scrollCols: ColInfo[],
    flexLeftWidth: number,
    scrollWidth: number,
    flexRightWidth: number,
    scrollLeft: number,
    scrollWidthTotal: number,
    hoverCol?: string,
    onRenderCell?: CellRenderCallback,
    onRenderRow?: (rowProps: RowProps) => RowProps
}

export function Header({height, onRenderRow, ...otherProps}: HeaderProps) {
    let rowProps: RowProps = {
        height,
        ...otherProps,
        rowID: 'HEADER',
        className: 'dtable-in-header',
        top: 0,
        CellComponent: HeaderCell,
    };
    if (onRenderRow) {
        rowProps = onRenderRow(rowProps);
    }
    return (
        <div className='dtable-header' style={{height}}>
            <Row {...rowProps} />
        </div>
    );
}
