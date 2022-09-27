type DTablePluginLike = string | DTablePlugin | DTablePluginComsumer;

type DTablePluginTypes = {
    state?: {},
    options?: {},
    data?: {},
    methods?: {},
    methods?: Record<string, CallableFunction>,
    col?: {},
};

type DTableWithPluginColSetting<T extends DTablePluginTypes = {}, D extends DTablePluginTypes[] = [DTablePluginTypes]> = ColSetting<PluginPropsDependency<T, D, 'col'>>;

type DTableWithPluginState<S = {}> = DTableState & S;

type DTableWithPluginOptions<T extends DTablePluginTypes = {}, D extends DTablePluginTypes[] = [DTablePluginTypes]> = DTableOptions<DTableWithPluginColSetting<T, D>> & PluginPropsDependency<T, D, 'options'>;

type DTableWithPluginColInfo<T extends DTablePluginTypes = {}, D extends DTablePluginTypes[] = [DTablePluginTypes]> = ColInfo<DTableWithPluginColSetting<T, D>>;

type PluginColSettingModifier<T extends DTablePluginTypes = {}, D extends DTablePluginTypes[] = [DTablePluginTypes]> = (col: DTableWithPluginColSetting<T, D>) => Partial<DTableWithPluginColSetting<T, D>> | undefined;

type PluginPropsDependency<T extends DTablePluginTypes, D extends DTablePluginTypes[], P extends keyof DTablePluginTypes> = D[0][P] & D[1][P] & D[2][P] & D[3][P] & D[4][P] & D[5][P] & T[P];

type DTableWithPlugin<T extends DTablePluginTypes = {}, D extends DTablePluginTypes[] = [DTablePluginTypes]> = DTable & {
    state: DTableWithPluginState<PluginPropsDependency<T, D, 'state'>>;
    options: DTableWithPluginOptions<T, D>;
    data: PluginPropsDependency<T, D, 'data'>;
    getColInfo: (name: string) => DTableWithPluginColInfo<T, D> | undefined;
} & PluginPropsDependency<T, D, 'methods'>;

type DTablePluginEvents<T extends DTablePluginTypes = {}, D extends DTablePluginTypes[] = [DTablePluginTypes]> = {
    [event in DTableEventType]?: DTableEventListener<event, DTableWithPlugin<T, D>>
};

type DTablePlugin<T extends DTablePluginTypes = DTablePluginTypes, D extends DTablePluginTypes[] = [DTablePluginTypes], PluginTable = DTableWithPlugin<T, D>, Options = DTableWithPluginOptions<T, D>, PluginColSetting = DTableWithPluginColSetting<T, D>, PluginColInfo = DTableWithPluginColInfo<T, D>> = {
    name: string;
} & Partial<{
    when: (options: Options) => boolean,
    defaultOptions: Partial<Options>;
    colTypes: Record<string, Partial<PluginColSetting> | PluginColSettingModifier<T, D>>;
    events: DTablePluginEvents<T, D>;
    methods: Readonly<T['methods']>,
    data: (this: PluginTable) => {} & T['data'],
    state: (this: PluginTable) => {} & T['state'],
    options: (this: PluginTable, options: Options) => Partial<Options>;
    onCreate: (this: PluginTable, plugin: this) => void;
    onMounted: (this: PluginTable) => void;
    onUpdated: (this: PluginTable) => void;
    onUnmounted: (this: PluginTable) => void;
    onDestory: (this: PluginTable) => void;
    onAddCol: (this: PluginTable, col: PluginColInfo) => void;
    beforeLayout: (this: PluginTable, options: Options) => (Partial<Options> | void);
    onLayout: (this: PluginTable, layout: DTableLayout) => (DTableLayout | void);
    onRenderHeaderCell: (this: PluginTable, result: CustomRenderResult, data: {row: RowInfo, col: PluginColInfo, value?: unknown}, h: typeof preact.h) => CustomRenderResult;
    onRenderCell: (this: PluginTable, result: CustomRenderResult, data: {row: RowInfo, col: ColInfo<C>, value?: unknown}, h: typeof preact.h) => CustomRenderResult;
    onRenderRow: (this: PluginTable, data: {props: RowProps, row: RowInfo}, h: typeof preact.h) => Partial<RowProps | (RowProps & preact.JSX.HTMLAttributes<HTMLElement>)> | void;
    onRenderHeaderRow: (this: PluginTable, data: {props: RowProps}, h: typeof preact.h) => RowProps;
    onRender: (this: PluginTable, layout: DTableLayout) => CustomRenderResultItem | void;
    afterRender: (this: PluginTable) => void;
    onRowClick: (this: PluginTable, event: MouseEvent, data: {rowID: string, rowInfo?: RowInfo, element: HTMLElement, cellElement?: HTMLElement}) => void | true;
    onCellClick: (this: PluginTable, event: MouseEvent, data: {rowID: string, colName: string, rowInfo?: RowInfo, element: HTMLElement, rowElement: HTMLElement}) => void | true;
    onHeaderCellClick: (this: PluginTable, event: MouseEvent, data: {colName: string, element: HTMLElement}) => void;
    onAddRow: (this: PluginTable, row: RowInfo, index: number) => void | false;
    onAddRows: (this: PluginTable, rows: RowInfo[]) => RowInfo[] | void;
    plugins: (DTablePluginLike | DTablePlugin<D[number]>)[];
}>;

interface DTablePluginComsumer<T extends DTablePluginTypes = {}, D extends DTablePluginTypes[] = [DTablePluginTypes]> {
    plugin: DTablePlugin<T, D>,
    (options?: DTableWithPluginOptions<T, D>): DTablePlugin<T, D>;
}

interface DTablePluginDefineOptions {
    override?: boolean;
    buildIn?: boolean;
}
