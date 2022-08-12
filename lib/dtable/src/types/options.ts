import {ClassNameLike} from '@zui/browser-helpers/src/classes';
import {ComponentChildren} from 'preact';
import {CellRenderCallback} from './cell-render';
import {ColSetting} from './col-setting';
import {DTableLayout} from './layout';
import {DTablePlugin} from './plugin';
import {RowData} from './row-data';
import {DTableState} from './state';

export interface DTableOptions {
    cols: ColSetting[];
    className?: ClassNameLike,
    width?: number | '100%' | 'auto' | (() => number | 'auto');
    height?: number | '100%' | 'auto' | {min: number, max: number} | (() => number | 'auto' | {min: number, max: number});
    rowHeight?: number;
    rowDataMap?: Record<string, string>;
    data?: RowData[];
    defaultColWidth?: number;
    minColWidth?: number;
    maxColWidth?: number;
    header?: boolean | ComponentChildren | ((layout: DTableLayout, options: DTableOptions, state: DTableState) => (ComponentChildren | {__html: string}));
    footer?: boolean | ComponentChildren | ((layout: DTableLayout, options: DTableOptions, state: DTableState) => (ComponentChildren | {__html: string}));
    headerHeight?: number;
    footerHeight?: number;
    scrollbarWidth?: number;  // todo
    rowHover?: boolean;
    colHover?: boolean;
    cellHover?: boolean;
    bordered?: boolean;
    striped?: boolean;
    responsive?: boolean;
    scrollbarHover?: boolean;
    scrollbarSize?: number;
    horzScrollbarPos?: 'inside' | 'outside';
    onLayout?: (layout: DTableLayout, options: DTableOptions, state: DTableState) => (DTableLayout | undefined);
    onScroll?: (scrollPos: number, type: 'vert' | 'horz') => void;
    onRenderCell?: CellRenderCallback
    afterRender?: (options: DTableOptions, state: DTableState) => void;
    onRowClick?: (event: MouseEvent, data: {rowID: string, rowData?: RowData}) => void;
    onCellClick?: (event: MouseEvent, data: {rowID: string, colName: string, rowData?: RowData}) => void | true;
    onHeaderCellClick?: (event: MouseEvent, data: {colName: string}) => void;
    plugins?: DTablePlugin[]
}
