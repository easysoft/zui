import {Cell, CellProps} from './cell';

export function HeaderCell({col, children, style, ...props}: CellProps) {
    const {sortType} = col.setting;
    return (
        <Cell
            col={col}
            style={{...style, ...col.setting.style}}
            data-sort={sortType || null}
            data-type={col.type}
            {...props}
        >
            {col.setting.title}
            {sortType && <div className={`dtable-sort dtable-sort-${sortType === true ? 'none' : sortType}`}></div>}
            {children}
        </Cell>
    );
}
