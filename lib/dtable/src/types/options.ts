import {ClassNameLike} from '@zui/browser-helpers/src/classes';
import {ComponentChildren, ComponentType, h as _h, JSX} from 'preact';
import {DTable} from '../dtable-react';
import {CellRenderCallback} from './cell-render';
import {ColSetting} from './col-setting';
import {DTableLayout} from './layout';
import {DTablePlugin, DTablePluginComsumer} from './plugin';
import {RowData, RowID} from './row-data';
import {RowInfo} from './row-info';
import {RowProps} from './row-props';
import {DTableState} from './state';

export type DTablePluginLike = string | DTablePlugin | DTablePluginComsumer;

export interface DTableOptions<C extends ColSetting = ColSetting> {
    cols?: C[];
    className?: ClassNameLike,
    width?: number | '100%' | 'auto' | (() => number | 'auto');
    height?: number | '100%' | 'auto' | {min: number, max: number} | ((actualHeight: number) => number | 'auto' | {min: number, max: number});
    rowHeight?: number;
    rowKey?: string;
    data?: (RowData | RowID)[] | number;
    dataGetter?: (ids: RowID[]) => RowData[],
    defaultColWidth?: number;
    minColWidth?: number;
    maxColWidth?: number;
    header?: boolean | ComponentChildren | ((this: DTable, layout: DTableLayout, state: DTableState) => (ComponentChildren | {__html: string}));
    footer?: boolean | ComponentChildren | ((this: DTable, layout: DTableLayout, state: DTableState) => (ComponentChildren | {__html: string}));
    headerHeight?: number;
    footerHeight?: number;
    rowHover?: boolean;
    colHover?: boolean | 'header';
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
    onRenderHeaderCell?: CellRenderCallback;
    onRenderRow?: (this: DTable, data: {props: RowProps, row: RowInfo}, h: typeof _h) => Partial<RowProps | (RowProps & JSX.HTMLAttributes<HTMLElement>)> | void;
    onRenderHeaderRow?: (this: DTable, data: {props: RowProps}, h: typeof _h) => RowProps;
    afterRender?: (this: DTable) => void;
    onRowClick?: (this: DTable, event: MouseEvent, data: {rowID: string, rowInfo?: RowInfo, element: HTMLElement, cellElement?: HTMLElement}) => void | true;
    onCellClick?: (this: DTable, event: MouseEvent, data: {rowID: string, colName: string, rowInfo?: RowInfo, element: HTMLElement, rowElement: HTMLElement}) => void | true;
    onHeaderCellClick?: (this: DTable, event: MouseEvent, data: {colName: string, element: HTMLElement}) => void;
    onAddRow?: (this: DTable, row: RowInfo, index: number) => void | false;
    onAddRows?: (this: DTable, rows: RowInfo[]) => RowInfo[] | void;
    plugins?: DTablePluginLike[];
    [prop: string]: unknown
}
