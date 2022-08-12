import {ClassNameLike} from '@zui/browser-helpers/src/classes';
import {ComponentChildren} from 'preact';
import {DTable} from '../dtable-react';
import {CellRenderCallback} from './cell-render';
import {ColSetting} from './col-setting';
import {DTableLayout} from './layout';
import {DTablePlugin} from './plugin';
import {RowData} from './row-data';
import {RowInfo} from './row-info';
import {DTableState} from './state';

export interface DTableOptions {
    cols: ColSetting[];
    className?: ClassNameLike,
    width?: number | '100%' | 'auto' | (() => number | 'auto');
    height?: number | '100%' | 'auto' | {min: number, max: number} | (() => number | 'auto' | {min: number, max: number});
    rowHeight?: number;
    rowDataMap?: Record<string, string>;
    data?: RowData[] | {length: number | (() => number), getItem: (index: number) => RowData};
    defaultColWidth?: number;
    minColWidth?: number;
    maxColWidth?: number;
    header?: boolean | ComponentChildren | ((this: DTable, layout: DTableLayout, state: DTableState) => (ComponentChildren | {__html: string}));
    footer?: boolean | ComponentChildren | ((this: DTable, layout: DTableLayout, state: DTableState) => (ComponentChildren | {__html: string}));
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
    onLayout?: (this: DTable, layout: DTableLayout) => (DTableLayout | undefined);
    onScroll?: (this: DTable, scrollPos: number, type: 'vert' | 'horz') => void;
    onRenderCell?: CellRenderCallback
    afterRender?: (this: DTable) => void;
    onRowClick?: (this: DTable, event: MouseEvent, data: {rowID: string, rowInfo?: RowInfo}) => void;
    onCellClick?: (this: DTable, event: MouseEvent, data: {rowID: string, colName: string, rowInfo?: RowInfo}) => void | true;
    onHeaderCellClick?: (this: DTable, event: MouseEvent, data: {colName: string}) => void;
    plugins?: DTablePlugin[]
}
