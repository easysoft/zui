type ColName = string;

type ColFlexGrow = number;

type ColFlex = ColFlexGrow | boolean;

type ColFixedSide = 'left' | 'right' | false;

type ColSortType = 'asc' | 'desc' | boolean;

type ColInfo<S extends ColSetting = ColSetting> = {
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

type ColSetting<S = {}> = {
    name: ColName;
} & Partial<{
    title: string;
    width: number;
    minWidth: number;
    maxWidth: number;
    flex: ColFlex;
    fixed: ColFixedSide;
    border: 'left' | 'right' | boolean;
    sortType: ColSortType;
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
}> & S;
