import {CellRenderCallback} from '../types/cell-render';
import {ColInfo} from '../types/col-info';
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
    onRenderCell?: CellRenderCallback
}

export function Header({
    height,
    fixedLeftCols,
    fixedRightCols,
    scrollCols,
    flexLeftWidth,
    scrollWidth,
    flexRightWidth,
    scrollWidthTotal,
    scrollLeft,
    onRenderCell,
}: HeaderProps) {
    return (
        <div className='dtable-header' style={{height}}>
            <Row
                rowID="HEADER"
                className="-in-header"
                top={0}
                height={height}
                fixedLeftCols={fixedLeftCols}
                fixedRightCols={fixedRightCols}
                scrollCols={scrollCols}
                flexLeftWidth={flexLeftWidth}
                scrollWidth={scrollWidth}
                scrollWidthTotal={scrollWidthTotal}
                flexRightWidth={flexRightWidth}
                scrollLeft={scrollLeft}
                CellComponent={HeaderCell}
                onRenderCell={onRenderCell}
            />
        </div>
    );
}
