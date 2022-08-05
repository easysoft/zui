import {ClassNameLike} from '@zui/browser-helpers/src/classes';
import {ColSetting} from './col-setting';
import {RowData} from './row-data';

export interface DTableOptions {
    cols: ColSetting[];
    className?: ClassNameLike,
    width?: number | '100%' | 'auto' | (() => number | 'auto');
    height?: number | '100%' | 'auto' | {min: number, max: number} | (() => number | 'auto' | {min: number, max: number});
    rowHeight?: number;
    rowDataMap?: Record<string, string>;
    data?: RowData[];
    defaultColWidth?: number;
    minColWidth?: number;
    maxColWidth?: number;
    header?: boolean;
    footer?: boolean;
    headerHeight?: number;
    footerHeight?: number;
    scrollbarWidth?: number;
    rowHover?: boolean;
    colHover?: boolean;
    cellHover?: boolean;
    bordered?: boolean;
    striped?: boolean;
    responsive?: boolean;
}
