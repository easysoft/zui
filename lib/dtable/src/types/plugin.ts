import {DTableLayout} from './layout';
import {DTableOptions} from './options';
import {ColInfo} from './col-info';
import {DTable} from '../dtable-react';
import {RowInfo} from './row-info';
import {RowProps} from './row-props';
import {CustomRenderResult} from './custom-render-result';
import {RowData, RowID} from './row-data';
import {DTableState} from './state';
import {ColSetting} from './col-setting';

export type PluginColSetting<C> = ColSetting & C;

export type PluginColInfo<C> = ColInfo<PluginColSetting<C>>;

export type ColSettingModifier<C> = (col: PluginColSetting<C>) => Partial<PluginColSetting<C>> | void;

export type DTableWithPlugin<O = {}, S = {}, C = {}> = DTable & {
    state: S & DTableState;
    options: O & DTableOptions;
    getColInfo: (name: string) => ColInfo<ColSetting & C> | undefined;
};

export interface DTablePlugin<O = {}, S = {}, C = {}, T = {}, PluginTable = DTableWithPlugin<O, S, C> & T, Options = DTableOptions & O> {
    name: string;
    when?: (options: Options) => boolean,
    onCreate?: (this: PluginTable, plugin: this) => void;
    onMounted?: (this: PluginTable) => void;
    onUnmounted?: (this: PluginTable) => void;
    defaultOptions?: Partial<Options>;
    options?: ((options: Options) => Partial<Options>);
    colTypes?: Record<string, Partial<PluginColSetting<C>> | ColSettingModifier<C>>;
    onAddCol?: (this: PluginTable, col: PluginColInfo<C>) => void;
    beforeLayout?: (this: PluginTable, options: Options) => (Options | void);
    onLayout?: (this: PluginTable, layout: DTableLayout) => (DTableLayout | void);
    onRenderHeaderCell?: (this: PluginTable, result: CustomRenderResult, rowID: RowID, col: PluginColInfo<C>) => CustomRenderResult;
    onRenderCell?: (this: PluginTable, result: CustomRenderResult, rowID: RowID, col: PluginColInfo<C>, rowData?: RowData) => CustomRenderResult;
    onRenderRow?: (this: PluginTable, rowProps: RowProps, rowInfo: RowInfo) => RowProps;
    onRenderHeaderRow?: (this: PluginTable, rowProps: RowProps) => RowProps;
    afterRender?: (this: PluginTable) => void;
    onRowClick?: (this: PluginTable, event: MouseEvent, data: {rowID: string, rowInfo?: RowInfo, element: HTMLElement, cellElement?: HTMLElement}) => void | true;
    onCellClick?: (this: PluginTable, event: MouseEvent, data: {rowID: string, colName: string, rowInfo?: RowInfo, element: HTMLElement, rowElement: HTMLElement}) => void | true;
    onHeaderCellClick?: (this: PluginTable, event: MouseEvent, data: {colName: string, element: HTMLElement}) => void;
    onAddRow?: (this: PluginTable, row: RowInfo, index: number) => void | false;
    rowSorter?: (this: PluginTable, a: RowInfo, b: RowInfo) => number;
    rowFilter?: (this: PluginTable, row: RowInfo) => void | boolean;
}

export interface DTablePluginComsumer<O = {}> {
    plugin: DTablePlugin<O>,
    (options?: DTableOptions & O): DTablePlugin<O>;
}
