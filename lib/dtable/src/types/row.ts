export type RowID = string;

export type RowPropName = string;

export type RowPropValue = unknown;

export type RowData = Record<RowPropName, RowPropValue>;

export type RowInfoLike = string | number | RowInfo;

export type RowInfo = {
    id: string;
    index: number;
    top: number;
    data?: RowData;
    lazy?: boolean | 'resolved';
};
