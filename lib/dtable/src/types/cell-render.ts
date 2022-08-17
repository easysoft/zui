import {ColInfo} from './col-info';
import {CustomRenderResult} from './custom-render-result';
import {RowData, RowID} from './row-data';

export interface CellRenderCallback {
    (result: CustomRenderResult, rowID: RowID, col: ColInfo, rowData?: RowData): CustomRenderResult;
}
