import type {ClassNameLike} from '@zui/core';
import type preact from 'preact';
import type {DTable} from '../main-react';
import type {CellValueGetter, CellRenderCallback} from './cell';
import type {ColSetting} from './col';
import type {CustomRenderResultList, CustomRenderResultGenerator, CustomRenderResultItem} from './common';
import type {DTableLayout} from './layout';
import type {DTablePluginLike} from './plugin';
import type {RowData, RowProps, RowInfo} from './row';

export interface DTableDataOptions<C = ColSetting> {
    cols: C[];
    data: (RowData | string)[] | number;
    rowDataGetter?: (ids: string[]) => RowData[],
    cellValueGetter?: CellValueGetter,
    rowKey?: string;
}

export interface DTableLayoutOptions {
    width: number | '100%' | ((this: DTable) => number | '100%');
    height: number | '100%' | 'auto' | {min: number, max: number} | ((this: DTable) => number | 'auto' | {min: number, max: number});
    fixedLeftWidth?: number | 'auto' | `${number}%` | ((this: DTable) => number);
    fixedRightWidth?: number | 'auto' | `${number}%` | ((this: DTable) => number);
    rowHeight: number;
    defaultColWidth: number;
    minColWidth: number;
    maxColWidth: number;
    header?: boolean | CustomRenderResultList<[layout: DTableLayout], DTable> | CustomRenderResultGenerator<[layout: DTableLayout], DTable> | CustomRenderResultItem;
    footer?: boolean | CustomRenderResultList<[layout: DTableLayout], DTable> | ((this: DTable, layout: DTableLayout) => CustomRenderResultList<[layout: DTableLayout], DTable>);
    headerHeight: number;
    footerHeight: number;
    responsive: boolean;
    scrollbarHover: boolean;
    scrollbarSize?: number;
    horzScrollbarPos?: 'inside' | 'outside';
}

export interface DTableStyleOptions {
    rowHover?: boolean;
    colHover?: boolean | 'header';
    cellHover?: boolean;
    bordered?: boolean;
    striped?: boolean;
}

export interface DTableCallbackOptions {
    onLayout?: (this: DTable, layout: DTableLayout) => (DTableLayout | undefined);
    onScroll?: (this: DTable, scrollInfo: {scrollTop?: number, scrollLeft?: number}) => void;
    onRenderCell?: CellRenderCallback;
    onRenderHeaderCell?: CellRenderCallback;
    onRenderRow?: (this: DTable, data: {props: RowProps, row: RowInfo}, h: typeof preact.h) => Partial<RowProps | (RowProps & preact.JSX.HTMLAttributes<HTMLElement>)> | void;
    onRenderHeaderRow?: (this: DTable, data: {props: RowProps}, h: typeof preact.h) => RowProps;
    afterRender?: (this: DTable) => void;
    onRowClick?: (this: DTable, event: MouseEvent, data: {rowID: string, rowInfo?: RowInfo, element: HTMLElement, cellElement?: HTMLElement}) => void | true;
    onCellClick?: (this: DTable, event: MouseEvent, data: {rowID: string, colName: string, rowInfo?: RowInfo, element: HTMLElement, rowElement: HTMLElement}) => void | true;
    onHeaderCellClick?: (this: DTable, event: MouseEvent, data: {colName: string, element: HTMLElement}) => void;
    onAddRow?: (this: DTable, row: RowInfo, index: number) => void | false;
    onAddRows?: (this: DTable, rows: RowInfo[]) => RowInfo[] | void;
}

export interface DTableOptions<C = ColSetting> extends DTableDataOptions<C>, DTableLayoutOptions, DTableStyleOptions, DTableCallbackOptions {
    id?: string;
    lang?: string;
    i18n?: Record<string, Record<string, string | object>>;
    className?: ClassNameLike,
    parent?: HTMLElement,
    plugins?: DTablePluginLike[];
    [prop: string]: unknown
}
