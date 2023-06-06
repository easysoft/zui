import type {DTable} from '../components/dtable';
import type {ColInfo} from './col';
import type {CustomRenderResultList, CustomRenderResult} from './common';
import type {DTableOptions} from './options';
import type {RowInfo, RowID} from './row';

export type DTableColsSectionLayout = {
    /** Section columns list. */
    list: ColInfo[];

    /** Flex cols in section. */
    flexList: ColInfo[];

    /** Section avaliable width. */
    width: number;

    /** User width setting. */
    widthSetting: number;

    /** Section columns total width. */
    totalWidth: number;
};

export type DTableColsLayout = {
    map: Record<string, ColInfo>;
    list: ColInfo[];
    left: DTableColsSectionLayout;
    center: DTableColsSectionLayout;
    right: DTableColsSectionLayout;
};

export type DTableLayout = {
    options: DTableOptions;
    width: number;
    height: number;
    rowHeight: number;
    rowsHeight: number;
    rowsHeightTotal: number;
    allRows: RowInfo[];
    rows: RowInfo[];
    rowsMap: Record<RowID, RowInfo>;
    header?: boolean | CustomRenderResultList<[table: DTable, layout: DTableLayout]>;
    footer?: boolean | CustomRenderResultList<[layout: DTableLayout], DTable> | ((this: DTable, layout: DTableLayout) => CustomRenderResultList<[layout: DTableLayout], DTable>);
    footerGenerators: Record<string, CustomRenderResult<[table: DTable, layout: DTableLayout]>>;
    headerHeight: number,
    footerHeight: number,
    cols: DTableColsLayout;

    visibleRows: RowInfo[];
    scrollTop: number;
    scrollLeft: number;
};
