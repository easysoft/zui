type ColInfo<S extends ColSetting = ColSetting> = {
    name: string;
    type: string;
    setting: S;
    left: number;
    flex: number;
    realWidth: number;
    flexWidth: number;
    visible: boolean;
    index: number;
};

type ColSetting = {
    name: string;
} & Partial<{
    title: string;
    width: number;
    flex: number; // default value = 1;
    minWidth: number;
    maxWidth: number;
    border: 'left' | 'right' | boolean;
    sortType: 'asc' | 'desc' | boolean;
    align: 'left' | 'center' | 'right';
    data: Record<string, unknown>;
    style: preact.JSX.CSSProperties;
    cellStyle: preact.JSX.CSSProperties;
    className: ClassNameLike;
    type: string;
    hidden: boolean;
    fixed: 'left' | 'right' | false;
    colHover: boolean;
    onRenderCell: CellRenderCallback;
    [prop: string]: unknown;
}>;
