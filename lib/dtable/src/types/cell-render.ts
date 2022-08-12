import {ColInfo} from './col-info';
import {CustomRenderResult} from './custom-render-result';
import {RowData} from './row-data';

export interface CellRenderCallback {
    (rowID: string, col: ColInfo, rowData?: RowData, previousResult?: CustomRenderResult): CustomRenderResult | undefined;
}
