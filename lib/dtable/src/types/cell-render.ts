import {ColInfo} from './col-info';
import {CustomRenderResult} from './custom-render-result';
import {RowData} from './row-data';

export interface CellRenderCallback {
    (result: CustomRenderResult, rowID: string | number, col: ColInfo, rowData?: RowData): CustomRenderResult;
}
