import type {ComponentChildren, JSX} from 'preact';
import type {CustomContentStatic, HElementProps} from '@zui/core';
import type {ScrollToOptions} from '@zui/virtualize';
import type {AccessorFn, CellContext, ColumnDefBase, Header, HeaderContext, RowData, Table, TableFeatures, TableOptions, columnSizingFeature} from '@tanstack/table-core' with {'resolution-mode': 'import'};
import type {storeReactivityBindings} from '@tanstack/table-core/store-reactivity-bindings' with {'resolution-mode': 'import'};

/** Feature types flow through options, columns, plugin contexts and the engine. */
export type VTableFeatures<TFeatures extends TableFeatures = TableFeatures> = TFeatures & {
    coreReactivityFeature: ReturnType<typeof storeReactivityBindings>;
    columnSizingFeature: typeof columnSizingFeature;
};

export type VTableEngine<TData extends RowData = Record<string, unknown>, TFeatures extends TableFeatures = TableFeatures> = Table<VTableFeatures<TFeatures>, TData>;

export interface VTableRenderContext<TData extends RowData = Record<string, unknown>, TFeatures extends TableFeatures = TableFeatures> {
    table: VTableEngine<TData, TFeatures>;
    rootElement: HTMLElement | null;
    scrollElement: HTMLElement | null;
    refresh: () => void;
    i18n: (key: string, args?: (string | number)[], defaultValue?: string) => string;
}

export type VTableContent<TContext, TData extends RowData = Record<string, unknown>, TFeatures extends TableFeatures = TableFeatures> = CustomContentStatic | ((context: TContext, vtable: VTableRenderContext<TData, TFeatures>) => CustomContentStatic);

/** Flat columns require explicit stable identifiers, including display columns. */
export type VTableColumnDef<TData extends RowData = Record<string, unknown>, TFeatures extends TableFeatures = TableFeatures> = Omit<ColumnDefBase<VTableFeatures<TFeatures>, TData, unknown>, 'header' | 'cell'> & {
    id: string;
    accessorKey?: (string & {}) | keyof TData;
    accessorFn?: AccessorFn<TData, unknown>;
    header?: VTableContent<HeaderContext<VTableFeatures<TFeatures>, TData>, TData, TFeatures>;
    cell?: VTableContent<CellContext<VTableFeatures<TFeatures>, TData>, TData, TFeatures>;
};

export interface VTablePluginContext<TData extends RowData = Record<string, unknown>, TFeatures extends TableFeatures = TableFeatures> extends VTableRenderContext<TData, TFeatures> {
    rootElement: HTMLElement;
    scrollElement: HTMLElement;
}

export interface VTableHeaderContext<TData extends RowData = Record<string, unknown>, TFeatures extends TableFeatures = TableFeatures> extends VTableRenderContext<TData, TFeatures> {
    header: Header<VTableFeatures<TFeatures>, TData, unknown>;
    content: ComponentChildren;
}

export interface VTableHeaderDecoration {
    content?: ComponentChildren;
    extra?: ComponentChildren;
    attrs?: JSX.HTMLAttributes<HTMLDivElement>;
}

/** Plugins are immutable per instance; recreate the view to change the collection. */
export interface VTablePlugin<TData extends RowData = Record<string, unknown>, TFeatures extends TableFeatures = TableFeatures> {
    id: string;
    features?: TFeatures;
    decorateHeader?(context: VTableHeaderContext<TData, TFeatures>): VTableHeaderDecoration | void;
    mount?(context: VTablePluginContext<TData, TFeatures>): (() => void) | void;
}

export type VTableOptions<TData extends RowData = Record<string, unknown>, TFeatures extends TableFeatures = TableFeatures> = Omit<HElementProps, 'data'> & Omit<TableOptions<VTableFeatures<TFeatures>, TData>, 'features' | 'columns' | 'getRowId'> & {
    columns: readonly VTableColumnDef<TData, TFeatures>[];
    getRowId: NonNullable<TableOptions<VTableFeatures<TFeatures>, TData>['getRowId']>;
    plugins?: readonly VTablePlugin<TData, TFeatures>[];
    width?: number | string;
    height?: number | string;
    rowHeight?: number;
    rowOverscan?: number;
    columnOverscan?: number;
    empty?: VTableContent<VTableEngine<TData, TFeatures>, TData, TFeatures>;
};

export type VTableProps<TData extends RowData = Record<string, unknown>, TFeatures extends TableFeatures = TableFeatures> = VTableOptions<TData, TFeatures>;

export type VTableScrollOptions = ScrollToOptions;
