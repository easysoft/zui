import {DTableOptions} from '../types/options';

export function getDefaultOptions(): Required<Omit<DTableOptions, 'className' | 'rowDataMap' | 'onScroll' | 'onLayout' | 'onRenderCell' | 'afterRender' | 'onRowClick' | 'onCellClick' | 'onHeaderCellClick' | 'plugins'>> {
    return {
        cols: [],
        data: [],
        width: '100%',
        height: 'auto',
        rowHeight: 35,
        defaultColWidth: 80,
        minColWidth: 20,
        maxColWidth: 1000,
        header: true,
        footer: false,
        headerHeight: 0,
        footerHeight: 0,
        scrollbarWidth: 10,
        rowHover: true,
        colHover: true,
        cellHover: false,
        bordered: false,
        striped: true,
        responsive: false,
        scrollbarHover: true,
        scrollbarSize: 10,
        horzScrollbarPos: 'outside',
    };
}
