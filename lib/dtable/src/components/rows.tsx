import {h as _h} from 'preact';
import {classes} from '@zui/core';
import {Row} from './row';
import type {RowsProps, RowProps} from '../types';

export function Rows({
    className,
    style,
    top,
    rows,
    height,
    rowHeight,
    scrollTop,
    onRenderRow,
    ...otherProps
}: RowsProps) {
    style = {...style, top, height};
    return (
        <div className={classes('dtable-rows', className)} style={style}>
            {rows.map(row => {
                const props: RowProps = {
                    className: `dtable-row-${row.index % 2 ? 'odd' : 'even'}`,
                    row,
                    top: row.top - scrollTop,
                    height: rowHeight,
                    ...otherProps,
                };
                const result = onRenderRow?.({props, row}, _h);
                if (result) {
                    Object.assign(props, result);
                }
                return  (
                    <Row key={row.id} {...props} />
                );
            })}
        </div>
    );
}
