import {RowData} from './row-data';

export interface RowInfo {
    id: string | number;
    index: number;
    top: number;
    data: RowData
}
