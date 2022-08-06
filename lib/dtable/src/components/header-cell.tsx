import {Cell, CellProps} from './cell';

export function HeaderCell({className, style, col, height, children}: CellProps) {
    let {sortType} = col;
    if (sortType === true) {
        sortType = 'none';
    }
    return (
        <Cell
            className={className}
            height={height}
            style={style}
            col={col}
            data-sort={sortType || null}
            data-type={col.type}
        >
            {col.title}
            {sortType && <div className={`dtable-sort -sort-${sortType}`}></div>}
            {children}
        </Cell>
    );
}
