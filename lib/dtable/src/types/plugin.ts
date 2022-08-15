import {DTableLayout} from './layout';
import {DTableOptions} from './options';
import {ColInfo} from './col-info';
import {DTable} from '../dtable-react';
import {RowInfo} from './row-info';
import {RowProps} from './row-props';
import {CustomRenderResult} from './custom-render-result';
import {RowData} from './row-data';
import {DTableState} from './state';
import {ColSetting} from './col-setting';


export type ColTypeInfo<C extends ColSetting> = Omit<ColInfo<C>, 'name' | 'type'>;

export type ColTypeModifier<C extends ColSetting> = (col: ColTypeInfo<C>) => void;

export type DTableWithPlugin<O = {}, S = {}> = DTable & {
    state: S & DTableState;
    options: O & DTableOptions;
};

export interface DTablePlugin<O = {}, S = {}, C = {}, T = {}, PluginTable = DTableWithPlugin<O, S> & T, Options = DTableOptions & O> {
    name: string;
    when?: (options: Options) => boolean,
    onCreate?: (this: PluginTable, plugin: this) => void;
    onMounted?: (this: PluginTable) => void;
    onUnmounted?: (this: PluginTable) => void;
    defaultOptions?: Partial<Options>;
    options?: ((options: Options) => Partial<Options>);
    colTypes?: Record<string, ColTypeInfo<ColSetting & C> | ColTypeModifier<ColSetting & C>>;
    beforeLayout?: (this: PluginTable, options: Options) => (Options | undefined);
    onLayout?: (this: PluginTable, layout: DTableLayout) => (DTableLayout | undefined);
    onRenderCell?: (this: PluginTable, result: CustomRenderResult, rowID: string | number, col: ColInfo<ColSetting & C>, rowData?: RowData) => CustomRenderResult;
    onRenderRow?: (this: PluginTable, rowProps: RowProps, rowInfo: RowInfo) => RowProps;
    onRenderHeaderRow?: (this: PluginTable, rowProps: RowProps) => RowProps;
    afterRender?: (this: PluginTable) => void;
    onRowClick?: (this: PluginTable, event: MouseEvent, data: {rowID: string, rowInfo?: RowInfo, element: HTMLElement, cellElement?: HTMLElement}) => void;
    onCellClick?: (this: PluginTable, event: MouseEvent, data: {rowID: string, colName: string, rowInfo?: RowInfo, element: HTMLElement, rowElement: HTMLElement}) => void | true;
    onHeaderCellClick?: (this: PluginTable, event: MouseEvent, data: {colName: string, element: HTMLElement}) => void;
}

export interface DTablePluginComsumer<O = {}> {
    plugin: DTablePlugin<O>,
    (options: DTableOptions & O): DTablePlugin<O>;
}
