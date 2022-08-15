import {ClassNameLike} from '@zui/browser-helpers/src/classes';
import {ComponentChildren} from 'preact';
import {DTable} from '../dtable-react';
import {CellRenderCallback} from './cell-render';
import {ColSetting} from './col-setting';
import {DTableLayout} from './layout';
import {DTablePlugin, DTablePluginComsumer} from './plugin';
import {RowData} from './row-data';
import {RowInfo} from './row-info';
import {RowProps} from './row-props';
import {DTableState} from './state';

export interface DTableOptions {
    cols?: ColSetting[];
    className?: ClassNameLike,
    width?: number | '100%' | 'auto' | (() => number | 'auto');
    height?: number | '100%' | 'auto' | {min: number, max: number} | (() => number | 'auto' | {min: number, max: number});
    rowHeight?: number;
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
    onRenderCell?: CellRenderCallback;
    onRenderRow?: (this: DTable, rowProps: RowProps, rowInfo: RowInfo) => RowProps;
    onRenderHeaderRow?: (this: DTable, rowProps: RowProps) => RowProps;
    afterRender?: (this: DTable) => void;
    onRowClick?: (this: DTable, event: MouseEvent, data: {rowID: string, rowInfo?: RowInfo, element: HTMLElement, cellElement?: HTMLElement}) => void;
    onCellClick?: (this: DTable, event: MouseEvent, data: {rowID: string, colName: string, rowInfo?: RowInfo, element: HTMLElement, rowElement: HTMLElement}) => void | true;
    onHeaderCellClick?: (this: DTable, event: MouseEvent, data: {colName: string, element: HTMLElement}) => void;
    plugins?: (string | DTablePlugin | DTablePluginComsumer)[];
    [prop: string]: unknown
}
