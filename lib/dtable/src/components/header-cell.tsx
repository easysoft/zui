import {Cell, CellProps} from './cell';

export function HeaderCell({col, children, style, ...props}: CellProps) {
    let {sortType} = col.setting;
    if (sortType === true) {
        sortType = 'none';
    }
    return (
        <Cell
            col={col}
            style={{...style, ...col.setting.style}}
            data-sort={sortType || null}
            data-type={col.type}
            {...props}
        >
            {col.setting.title}
            {sortType && <div className={`dtable-sort dtable-sort-${sortType}`}></div>}
            {children}
        </Cell>
    );
}
