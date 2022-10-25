import type preact from 'preact';
import type {DTable} from '../main-react';
import type {ColInfo, ColSetting} from './col';
import type {CustomRenderResultGenerator, CustomRenderResultItem, CustomRenderResultList} from './common';
import type {DTableState, DTableEventTarget, DTableHTMLEvent, DTableEventListener, DTableLayout} from './dtable';
import type {MergeUnionTypes, MergeIntersectionTypes} from './helper';
import type {DTableOptions} from './options';
import type {RowInfo, RowProps} from './row';

export type DTablePluginName = string;

export type DTablePluginLike = DTablePluginName | DTablePlugin | DTablePluginComsumer;

export interface DTablePluginTypes {
    state?: {},
    options?: {},
    data?: {},
    methods?: {},
    col?: {},
    events?: {},
}

export type DTableWithPluginColSetting<T extends DTablePluginTypes = {}, D extends DTablePluginTypes[] = []> = ColSetting<PluginPropsDependency<T, D, 'col'>>;

export type DTableWithPluginState<S = {}> = DTableState & S;

export type DTableWithPluginOptions<T extends DTablePluginTypes = {}, D extends DTablePluginTypes[] = []> = DTableOptions<DTableWithPluginColSetting<T, D>> & PluginPropsDependency<T, D, 'options'>;

export type DTableWithPluginColInfo<T extends DTablePluginTypes = {}, D extends DTablePluginTypes[] = []> = ColInfo<DTableWithPluginColSetting<T, D>>;

export type PluginColSettingModifier<T extends DTablePluginTypes = {}, D extends DTablePluginTypes[] = []> = (col: DTableWithPluginColSetting<T, D>) => Partial<DTableWithPluginColSetting<T, D>> | undefined;

export type PluginPropsDependency<T extends DTablePluginTypes, D extends DTablePluginTypes[], P extends keyof DTablePluginTypes> = MergeUnionTypes<NonNullable<(D[number])[P] | T[P]>>;

export type PluginCustomEvents<T extends DTablePluginTypes, D extends DTablePluginTypes[]> = PluginPropsDependency<T, D, 'events'>;

export type DTableWithPlugin<T extends DTablePluginTypes = {}, D extends DTablePluginTypes[] = []> = DTable & {
    state: DTableWithPluginState<PluginPropsDependency<T, D, 'state'>>;
    options: DTableWithPluginOptions<T, D>;
    data: PluginPropsDependency<T, D, 'data'>;
    emitCustomEvent(event: keyof PluginCustomEvents<T, D>, detail?: PluginCustomEvents<T, D>[keyof PluginCustomEvents<T, D>], target?: DTableEventTarget): void;
    getColInfo: (name: string) => DTableWithPluginColInfo<T, D> | undefined;
    update(options: {dirtyType?: 'options' | 'layout', state?: Partial<DTableWithPluginState<PluginPropsDependency<T, D, 'state'>>>}, callback?: () => void): void;
} & PluginPropsDependency<T, D, 'methods'>;

export type DTablePluginEvents<T extends DTablePluginTypes = {}, D extends DTablePluginTypes[] = [], PluginTable = DTableWithPlugin<T, D>> = Partial<MergeIntersectionTypes<{
    [event in DTableHTMLEvent]: DTableEventListener<PluginTable, HTMLElementEventMap[event]>;
} & {
    [event in `window_${DTableHTMLEvent}`]: DTableEventListener<PluginTable, event extends `window_${infer htmlEvent}` ? htmlEvent extends DTableHTMLEvent ? HTMLElementEventMap[htmlEvent] : Event : Event>;
} & {
    [event in `document_${DTableHTMLEvent}`]: DTableEventListener<PluginTable, event extends `document_${infer htmlEvent}` ?  htmlEvent extends DTableHTMLEvent ? HTMLElementEventMap[htmlEvent] : Event : Event>;
} & {
    [event in keyof PluginCustomEvents<T, D>]: DTableEventListener<PluginTable, PluginCustomEvents<T, D>[event] extends Event ? PluginCustomEvents<T, D>[event] : Event>;
}>>;

export type DTablePlugin<T extends DTablePluginTypes = DTablePluginTypes, D extends DTablePluginTypes[] = [], PluginTable = DTableWithPlugin<T, D>, Options = DTableWithPluginOptions<T, D>, PluginColSetting = DTableWithPluginColSetting<T, D>, PluginColInfo = DTableWithPluginColInfo<T, D>> = {
    name: DTablePluginName;
} & Partial<{
    when: (options: Options) => boolean,
    defaultOptions: Partial<Options>;
    colTypes: Record<string, Partial<PluginColSetting> | PluginColSettingModifier<T, D>>;
    events: DTablePluginEvents<T, D> | ((this: PluginTable) => DTablePluginEvents<T, D>);
    methods: Readonly<T['methods']>,
    i18n?: Record<string, Record<string, string | object>>;
    data: (this: PluginTable) => {} & T['data'],
    state: (this: PluginTable) => {} & T['state'],
    options: (this: PluginTable, options: Options) => Partial<Options>;
    footer: Record<string, CustomRenderResultGenerator<[layout: DTableLayout], PluginTable> | CustomRenderResultItem>;
    onCreate: (this: PluginTable, plugin: DTablePlugin<T, D>) => void;
    onMounted: (this: PluginTable) => void;
    onUpdated: (this: PluginTable) => void;
    onUnmounted: (this: PluginTable) => void;
    onDestory: (this: PluginTable) => void;
    onAddCol: (this: PluginTable, col: PluginColInfo) => void;
    beforeLayout: (this: PluginTable, options: Options) => (Partial<Options> | void);
    onLayout: (this: PluginTable, layout: DTableLayout) => (DTableLayout | void);
    onRenderHeaderCell: (this: PluginTable, result: CustomRenderResultList, data: {row: RowInfo, col: PluginColInfo, value?: unknown}, h: typeof preact.h) => CustomRenderResultList;
    onRenderCell: (this: PluginTable, result: CustomRenderResultList, data: {row: RowInfo, col: PluginColInfo, value?: unknown}, h: typeof preact.h) => CustomRenderResultList;
    onRenderRow: (this: PluginTable, data: {props: RowProps, row: RowInfo}, h: typeof preact.h) => Partial<RowProps | (RowProps & preact.JSX.HTMLAttributes<HTMLElement>)> | void;
    onRenderHeaderRow: (this: PluginTable, data: {props: RowProps}, h: typeof preact.h) => RowProps;
    onRender: (this: PluginTable, layout: DTableLayout) => CustomRenderResultItem | void;
    afterRender: (this: PluginTable) => void;
    onRowClick: (this: PluginTable, event: MouseEvent, data: {rowID: string, rowInfo?: RowInfo, element: HTMLElement, cellElement?: HTMLElement}) => void | true;
    onCellClick: (this: PluginTable, event: MouseEvent, data: {rowID: string, colName: string, rowInfo?: RowInfo, element: HTMLElement, rowElement: HTMLElement}) => void | true;
    onHeaderCellClick: (this: PluginTable, event: MouseEvent, data: {colName: string, element: HTMLElement}) => void;
    onAddRow: (this: PluginTable, row: RowInfo, index: number) => void | false;
    onAddRows: (this: PluginTable, rows: RowInfo[]) => RowInfo[] | void;
    plugins: (DTablePluginLike | DTablePlugin<T, D>)[];
}>;

export interface DTablePluginComsumer<T extends DTablePluginTypes = {}, D extends DTablePluginTypes[] = []> {
    plugin: DTablePlugin<T, D>,
    (options?: DTableWithPluginOptions<T, D>): DTablePlugin<T, D>;
}

export interface DTablePluginDefineOptions {
    override?: boolean;
    buildIn?: boolean;
}
