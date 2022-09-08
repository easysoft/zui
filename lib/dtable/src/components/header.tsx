import {h as _h, JSX} from 'preact';
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
    onRenderCell?: CellRenderCallback,
    onRenderRow?: (data: {props: RowProps}, h: typeof _h) => Partial<RowProps | (RowProps & JSX.HTMLAttributes<HTMLElement>)> | void;
}

export function Header({height, onRenderRow, ...otherProps}: HeaderProps) {
    const props: RowProps = {
        height,
        ...otherProps,
        rowID: 'HEADER',
        className: 'dtable-in-header',
        top: 0,
        CellComponent: HeaderCell,
    };
    if (onRenderRow) {
        const result = onRenderRow({props}, _h);
        if (result) {
            Object.assign(props, result);
        }
    }
    return (
        <div className='dtable-header' style={{height}}>
            <Row {...props} />
        </div>
    );
}
