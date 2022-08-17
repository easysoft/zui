export type RowID = string | number;

export interface RowData {
    id: RowID,
    [key: string]: unknown;
}
