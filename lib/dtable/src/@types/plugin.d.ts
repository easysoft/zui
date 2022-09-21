type DTablePluginLike = string | DTablePlugin | DTablePluginComsumer;

type DTablePluginTypes = {
    state?: {},
    options?: {},
    data?: {},
    methods?: {},
    methods?: Record<string, CallableFunction>,
    col?: {},
};

type DTableWithPluginColSetting<T extends DTablePluginTypes = {}> = ColSetting<T['col']>;

type DTableWithPluginState<T extends DTablePluginTypes = {}> = DTableState & T['state'];

type DTableWithPluginOptions<T extends DTablePluginTypes = {}> = DTableOptions<DTableWithPluginColSetting<T>> & T['options'];

type DTableWithPluginColInfo<T extends DTablePluginTypes = {}> = ColInfo<DTableWithPluginColSetting<T>>;

type PluginColSettingModifier<T extends DTablePluginTypes = {}> = (col: DTableWithPluginColSetting<T>) => Partial<DTableWithPluginColSetting<T>> | undefined;

type DTableWithPlugin<T extends DTablePluginTypes = {}> = DTable & {
    state: DTableWithPluginState<T>;
    options: DTableWithPluginOptions<T>;
    data: T['data'];
    getColInfo: (name: string) => DTableWithPluginCol<T> | undefined;
} & T['methods'];

type DTablePluginEvents<T extends DTablePluginTypes = {}> = {[event in DTableEventType]?: DTableEventListener<event, DTableWithPlugin<T>>};

type DTablePlugin<T extends DTablePluginTypes = DTablePluginTypes, PluginTable = DTableWithPlugin<T>, Options = DTableWithPluginOptions<T>, PluginColSetting = DTableWithPluginColSetting<T>, PluginColInfo = DTableWithPluginColInfo<T>> = {
    name: string;
} & Partial<{
    when: (options: Options) => boolean,
    defaultOptions: Partial<Options>;
    colTypes: Record<string, Partial<PluginColSetting> | PluginColSettingModifier<T>>;
    events: DTablePluginEvents<T>;
    methods: Readonly<T['methods']>,
    data: {} & T['data'],
    state: {} & T['state'],
    options: ((options: Options) => Partial<Options>);
    onCreate: (this: PluginTable, plugin: this) => void;
    onMounted: (this: PluginTable) => void;
    onUpdated: (this: PluginTable) => void;
    onUnmounted: (this: PluginTable) => void;
    onAddCol: (this: PluginTable, col: PluginColInfo) => void;
    beforeLayout: (this: PluginTable, options: Options) => (Partial<Options> | void);
    onLayout: (this: PluginTable, layout: DTableLayout) => (DTableLayout | void);
    onRenderHeaderCell: (this: PluginTable, result: CustomRenderResult, data: {rowID: RowID, col: PluginColInfo}, h: typeof preact.h) => CustomRenderResult;
    onRenderCell: (this: PluginTable, result: CustomRenderResult, data: {rowID: RowID, col: PluginColInfo, rowData?: RowData}, h: typeof preact.h) => CustomRenderResult;
    onRenderRow: (this: PluginTable, data: {props: RowProps, row: RowInfo}, h: typeof preact.h) => Partial<RowProps | (RowProps & preact.JSX.HTMLAttributes<HTMLElement>)> | void;
    onRenderHeaderRow: (this: PluginTable, data: {props: RowProps}, h: typeof preact.h) => RowProps;
    onRender: (this: PluginTable, layout: DTableLayout) => CustomRenderResultItem | void;
    afterRender: (this: PluginTable) => void;
    onRowClick: (this: PluginTable, event: MouseEvent, data: {rowID: string, rowInfo?: RowInfo, element: HTMLElement, cellElement?: HTMLElement}) => void | true;
    onCellClick: (this: PluginTable, event: MouseEvent, data: {rowID: string, colName: string, rowInfo?: RowInfo, element: HTMLElement, rowElement: HTMLElement}) => void | true;
    onHeaderCellClick: (this: PluginTable, event: MouseEvent, data: {colName: string, element: HTMLElement}) => void;
    onAddRow: (this: PluginTable, row: RowInfo, index: number) => void | false;
    onAddRows: (this: PluginTable, rows: RowInfo[]) => RowInfo[] | void;
    plugins: DTablePluginLike[];
}>;

interface DTablePluginComsumer<T extends DTablePluginTypes = {}> {
    plugin: DTablePlugin<T>,
    (options?: DTableWithPluginOptions<T>): DTablePlugin<T>;
}

interface DTablePluginDefineOptions {
    override?: boolean;
    buildIn?: boolean;
}
