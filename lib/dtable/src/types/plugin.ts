import {CellRenderCallback} from './cell-render';
import {DTableLayout} from './layout';
import {DTableOptions} from './options';
import {ColInfo} from './col-info';
import {DTable} from '../dtable-react';
import {RowInfo} from './row-info';

export type ColTypeInfo = Omit<ColInfo, 'name' | 'type'>;

export type ColTypeInfoModifier = (colTypeInfo: ColTypeInfo) => ColTypeInfo;

export interface DTablePlugin {
    name: string;
    version: string;
    options: Partial<DTableOptions> | ((options: DTableOptions) => Partial<DTableOptions>);
    colTypes?: Record<string, ColTypeInfo | ColTypeInfoModifier>;
    onLayout?: (this: DTable, layout: DTableLayout) => (DTableLayout | undefined);
    onRenderCell?: CellRenderCallback
    afterRender?: (this: DTable) => void;
    onRowClick?: (this: DTable, event: MouseEvent, data: {rowID: string, rowInfo?: RowInfo}) => void;
    onCellClick?: (this: DTable, event: MouseEvent, data: {rowID: string, colName: string, rowInfo?: RowInfo}) => void | true;
    onHeaderCellClick?: (this: DTable, event: MouseEvent, data: {colName: string}) => void;
}
