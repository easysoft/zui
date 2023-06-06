import {h as _h} from 'preact';
import type {JSX} from 'preact';
import {Row} from './row';
import type {DTableColsLayout, RowProps, CellRenderCallback} from '../types';

type HeaderProps = {
    height: number;
    scrollLeft: number;
    cols: DTableColsLayout;
    onRenderCell?: CellRenderCallback;
    onRenderRow?: (data: {props: RowProps}, h: typeof _h) => Partial<RowProps | (RowProps & JSX.HTMLAttributes<HTMLElement>)> | void;
};

export function Header({height, onRenderRow, ...otherProps}: HeaderProps) {
    const props: RowProps = {
        height,
        ...otherProps,
        row: {id: 'HEADER', index: -1, top: 0},
        className: 'dtable-in-header',
        top: 0,
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
