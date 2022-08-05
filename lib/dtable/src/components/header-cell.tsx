import {Cell, CellProps} from './cell';

export function HeaderCell({className, style, col, height, children}: CellProps) {
    let {sortState} = col;
    if (sortState === true) {
        sortState = 'none';
    }
    return (
        <Cell
            className={className}
            height={height}
            style={style}
            col={col}
            data-sort={sortState || null}
            data-type={col.type}
        >
            {col.title}
            {sortState && <div className={`dtable-sort -sort-${sortState}`}></div>}
            {children}
        </Cell>
    );
}
