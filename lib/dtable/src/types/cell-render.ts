import {h as _h} from 'preact';
import {ColInfo} from './col-info';
import {CustomRenderResult} from './custom-render-result';
import {RowData, RowID} from './row-data';

export interface CellRenderCallback {
    (result: CustomRenderResult, data: {rowID: RowID, col: ColInfo, rowData?: RowData}, h: typeof _h): CustomRenderResult;
}
