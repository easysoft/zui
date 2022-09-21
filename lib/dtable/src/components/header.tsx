import {h as _h} from 'preact';
import {HeaderCell} from './header-cell';
import {Row} from './row';

import type {JSX} from 'preact';

type HeaderProps = {
    height: number;
    fixedLeftCols: ColInfo[];
    fixedRightCols: ColInfo[];
    scrollCols: ColInfo[];
    flexLeftWidth: number;
    scrollWidth: number;
    flexRightWidth: number;
    scrollLeft: number;
    scrollWidthTotal: number;
} & Partial<{
    onRenderCell: CellRenderCallback;
    onRenderRow: (data: {props: RowProps}, h: typeof _h) => Partial<RowProps | (RowProps & JSX.HTMLAttributes<HTMLElement>)> | void;
}>;

export function Header({height, onRenderRow, ...otherProps}: HeaderProps) {
    const props: RowProps = {
        height,
        ...otherProps,
        row: {id: 'HEADER', index: -1, top: 0},
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
