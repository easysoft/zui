import {RowData, RowID} from './row-data';

export interface RowInfo {
    id: RowID;
    index: number;
    top: number;
    data: RowData
}
