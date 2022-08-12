import {CellRenderCallback} from './cell-render';
import {DTableLayout} from './layout';
import {DTableOptions} from './options';
import {RowData} from './row-data';
import {DTableState} from './state';
import {ColInfo} from './col-info';

export type ColTypeInfo = Omit<ColInfo, 'name' | 'type'>;

export type ColTypeInfoModifier = (colTypeInfo: ColTypeInfo) => ColTypeInfo;

export interface DTablePlugin {
    name: string;
    version: string;
    options: Partial<DTableOptions> | ((options: DTableOptions) => Partial<DTableOptions>);
    colTypes?: Record<string, ColTypeInfo | ColTypeInfoModifier>;
    onLayout?: (layout: DTableLayout, options: DTableOptions, state: DTableState) => (DTableLayout | undefined);
    onRenderCell?: CellRenderCallback
    afterRender?: (options: DTableOptions, state: DTableState) => void;
    onRowClick?: (event: MouseEvent, data: {rowID: string, rowData?: RowData}) => void;
    onCellClick?: (event: MouseEvent, data: {rowID: string, colName: string, rowData?: RowData}) => void | true;
    onHeaderCellClick?: (event: MouseEvent, data: {colName: string}) => void;
}
