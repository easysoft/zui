import {CellRenderCallback} from './cell-render';
import {DTableLayout} from './layout';
import {DTableOptions} from './options';
import {RowData} from './row-data';
import {DTableState} from './state';
import {ColSetting} from './col-setting';

export type ColTypeSetting = Omit<ColSetting, 'name'>;

export interface DTablePlugin {
    name: string;
    version: string;
    options: Partial<DTableOptions> | ((options: DTableOptions) => Partial<DTableOptions>);
    colTypes?: Record<string, ColTypeSetting>;
    onLayout?: (layout: DTableLayout, options: DTableOptions, state: DTableState) => (DTableLayout | undefined);
    onScroll?: (scrollPos: number, type: 'vert' | 'horz') => void;
    onRenderCell?: CellRenderCallback
    afterRender?: (options: DTableOptions, state: DTableState) => void;
    onRowClick?: (event: MouseEvent, data: {rowID: string, rowData?: RowData}) => void;
    onCellClick?: (event: MouseEvent, data: {rowID: string, colName: string, rowData?: RowData}) => void | true;
    onHeaderCellClick?: (event: MouseEvent, data: {colName: string}) => void;
}
