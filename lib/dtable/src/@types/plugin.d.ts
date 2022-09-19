type PluginColSetting<C> = ColSetting & C;

type PluginColInfo<C> = ColInfo<PluginColSetting<C>>;

type ColSettingModifier<C> = (col: PluginColSetting<C>) => Partial<PluginColSetting<C>> | void;

type DTableWithPlugin<O = {}, S = {}, C = {}> = DTable & {
    state: S & DTableState;
    options: O & DTableOptions;
    getColInfo: (name: string) => ColInfo<ColSetting & C> | undefined;
};

type DTablePlugin<O = {}, S = {}, C = {}, T = {}, PluginTable = DTableWithPlugin<O, S, C> & T, Options = DTableOptions<PluginColSetting<C>> & O> = {
    name: string;
} & Partial<{
    when: (options: Options) => boolean,
    onCreate: (this: PluginTable, plugin: this) => void;
    onMounted: (this: PluginTable) => void;
    onUnmounted: (this: PluginTable) => void;
    defaultOptions: Partial<Options>;
    options: ((options: Options) => Partial<Options>);
    colTypes: Record<string, Partial<PluginColSetting<C>> | ColSettingModifier<C>>;
    onAddCol: (this: PluginTable, col: PluginColInfo<C>) => void;
    beforeLayout: (this: PluginTable, options: Options) => (Options | void);
    onLayout: (this: PluginTable, layout: DTableLayout) => (DTableLayout | void);
    onRenderHeaderCell: (this: PluginTable, result: CustomRenderResult, data: {rowID: RowID, col: PluginColInfo<C>}, h: typeof preact.h) => CustomRenderResult;
    onRenderCell: (this: PluginTable, result: CustomRenderResult, data: {rowID: RowID, col: PluginColInfo<C>, rowData?: RowData}, h: typeof preact.h) => CustomRenderResult;
    onRenderRow: (this: PluginTable, data: {props: RowProps, row: RowInfo}, h: typeof preact.h) => Partial<RowProps | (RowProps & preact.JSX.HTMLAttributes<HTMLElement>)> | void;
    onRenderHeaderRow: (this: PluginTable, data: {props: RowProps}, h: typeof preact.h) => RowProps;
    afterRender: (this: PluginTable) => void;
    onRowClick: (this: PluginTable, event: MouseEvent, data: {rowID: string, rowInfo?: RowInfo, element: HTMLElement, cellElement?: HTMLElement}) => void | true;
    onCellClick: (this: PluginTable, event: MouseEvent, data: {rowID: string, colName: string, rowInfo?: RowInfo, element: HTMLElement, rowElement: HTMLElement}) => void | true;
    onHeaderCellClick: (this: PluginTable, event: MouseEvent, data: {colName: string, element: HTMLElement}) => void;
    onAddRow: (this: PluginTable, row: RowInfo, index: number) => void | false;
    onAddRows: (this: PluginTable, rows: RowInfo[]) => RowInfo[] | void;
    plugins: string[]
}>;

interface DTablePluginComsumer<O = {}> {
    plugin: DTablePlugin<O>,
    (options?: DTableOptions & O): DTablePlugin<O>;
}
