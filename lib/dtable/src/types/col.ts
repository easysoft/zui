import type {ClassNameLike} from '@zui/browser-helpers';
import type {CellRenderCallback} from './cell';

export type ColName = string;

export type ColFlexGrow = number;

export type ColFlex = ColFlexGrow | boolean;

export type ColFixedSide = 'left' | 'right' | false;

export type ColInfoLike = string | number | ColInfo;

export type ColInfo<S = ColSetting> = {
    name: ColName;
    type: string;
    flex: ColFlexGrow; // 0 will disable flex
    width: number;
    realWidth: number;
    left: number;
    setting: S & {onRenderCell?: CellRenderCallback<S>};
    visible: boolean;
    index: number;
};

export type ColSetting<S = {}> = S & {
    name: ColName;
} & Partial<{
    title: string;
    width: number;
    minWidth: number;
    maxWidth: number;
    flex: ColFlex;
    fixed: ColFixedSide;
    border: 'left' | 'right' | boolean;
    align: 'left' | 'center' | 'right';
    data: Record<string, unknown>;
    style: preact.JSX.CSSProperties;
    cellStyle: preact.JSX.CSSProperties;
    className: ClassNameLike;
    type: string;
    hidden: boolean;
    colHover: boolean;
    onRenderCell: CellRenderCallback<ColSetting & S>;
    [prop: string]: unknown;
}>;
