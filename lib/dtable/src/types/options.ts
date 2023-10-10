import type {ClassNameLike, CustomContentType} from '@zui/core';
import type {DTable} from '../main-react';
import type {CellValueGetter, CellRenderCallback} from './cell';
import type {ColSetting} from './col';
import type {CustomRenderResultList, CustomRenderResultGenerator, CustomRenderResultItem} from './common';
import type {DTableLayout} from './layout';
import type {DTablePluginLike} from './plugin';
import type {RowData, RowInfo} from './row';

export interface DTableDataOptions<C = ColSetting> {
    cols: C[];
    data: (RowData | string)[] | number;
    rowDataGetter?: (ids: string[]) => RowData[],
    cellValueGetter?: CellValueGetter,
    rowKey?: string;
}

export interface DTableLayoutOptions {
    width: number | '100%' | ((this: DTable) => number | '100%');
    height: number | '100%' | 'auto' | {min: number, max: number} | ((this: DTable, actualHeight: number) => number | 'auto' | {min: number, max: number});
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
    responsive: boolean | string;
    scrollbarHover: boolean;
    scrollbarSize?: number;
    horzScrollbarPos?: 'inside' | 'outside';
    emptyTip?: CustomContentType;
}

export interface DTableStyleOptions {
    rowHover?: boolean;
    colHover?: boolean | 'header';
    cellHover?: boolean;
    bordered?: boolean;
    striped?: boolean;
}

export interface DTableCallbackOptions {
    onLayout?: (this: DTable, layout: DTableLayout) => (DTableLayout | void);
    onScroll?: (this: DTable, scrollInfo: {scrollTop?: number, scrollLeft?: number}) => void;
    onRenderCell?: CellRenderCallback;
    onRenderHeaderCell?: CellRenderCallback;
    beforeRender?: (this: DTable, layout: DTableLayout) => (DTableLayout | void);
    afterRender?: (this: DTable) => void;
    onCellClick?: (this: DTable, event: MouseEvent, data: {rowID: string, colName: string, rowInfo?: RowInfo, element: HTMLElement}) => void | true;
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
