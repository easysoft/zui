import {CustomContent, HElement, i18n} from '@zui/core';
import {createVirtualizer} from '@zui/virtualize/virtualizer';
import {columnSizingFeature, constructTable, tableFeatures} from '@tanstack/table-core';
import {storeReactivityBindings} from '@tanstack/table-core/store-reactivity-bindings';
import {vtableI18n} from '../i18n';
import {VTableCell} from './cell';
import '../style';

import type {ComponentChildren, JSX, RenderableProps} from 'preact';
import type {Column, Column_ColumnSizing, ColumnDef, Row, RowData, TableFeatures, TableOptions} from '@tanstack/table-core' with {'resolution-mode': 'import'};
import type {VTableEngine, VTableFeatures, VTableHeaderDecoration, VTableOptions, VTablePlugin, VTableRenderContext, VTableScrollOptions} from '../types';

function createReactivityBindings() {
    const bindings = storeReactivityBindings();
    const createWritableAtom = bindings.createWritableAtom;
    bindings.createWritableAtom = (value, options) => {
        // Store 0.11.2 retains an atom's construction value in its getter closure.
        // Seed empty, then publish the real value so replaced datasets can be freed.
        const atom = createWritableAtom(undefined as typeof value, options);
        atom.set(() => value);
        return atom;
    };
    return bindings;
}

// Give each axis its own closure scope; a stable column key must not retain old rows.
function createItemKey(items: readonly {id: string}[]) {
    return (index: number) => items[index].id;
}

/** Fixed-height, flat-data table with independently virtualized rows and columns. */
export class VTable<TData extends RowData = Record<string, unknown>, TFeatures extends TableFeatures = TableFeatures> extends HElement<VTableOptions<TData, TFeatures>> {
    static NAME = 'VTable';

    static i18n = vtableI18n;

    static customProps = ['onSortingChange', 'onRowSelectionChange', 'onColumnSizingChange'];

    readonly table: VTableEngine<TData, TFeatures>;

    private _plugins: readonly VTablePlugin<TData, TFeatures>[];

    private _features: VTableFeatures<TFeatures>;

    private _root: HTMLElement | null = null;

    private _mounted = false;

    private _updatingOptions = false;

    private _disposers: (() => void)[] = [];

    private _lastProps: VTableOptions<TData, TFeatures>;

    private _validatedData?: readonly TData[];

    private _validatedColumns?: readonly unknown[];

    private _validatedGetRowId?: VTableOptions<TData, TFeatures>['getRowId'];

    private _rows: Row<VTableFeatures<TFeatures>, TData>[] = [];

    private _columns: Column<VTableFeatures<TFeatures>, TData, unknown>[] = [];

    private _columnWidths: number[] = [];

    private _rowKey = (index: number): string => this._rows[index].id;

    private _columnKey = (index: number): string => this._columns[index].id;

    private _rowHeight = 36;

    private _focusedElement: HTMLElement | null = null;

    private _rowsController: ReturnType<typeof createVirtualizer<HTMLElement, HTMLElement>>;

    private _columnsController: ReturnType<typeof createVirtualizer<HTMLElement, HTMLElement>>;

    constructor(props: VTableOptions<TData, TFeatures>) {
        super(props);
        this._lastProps = props;
        this._plugins = [...(props.plugins ?? [])];
        const features: Record<string, unknown> = {coreReactivityFeature: createReactivityBindings(), columnSizingFeature};
        const ids = new Set<string>();
        for (const plugin of this._plugins) {
            if (!plugin.id || ids.has(plugin.id)) {
                throw new Error(`Duplicate or empty VTable plugin id: ${plugin.id}`);
            }
            ids.add(plugin.id);
            for (const [key, feature] of Object.entries(plugin.features ?? {})) {
                if (key in features && features[key] !== feature) {
                    throw new Error(`Conflicting VTable feature: ${key}`);
                }
                features[key] = feature;
            }
        }
        this._features = tableFeatures(features) as unknown as VTableFeatures<TFeatures>;
        this._validate(props);
        this.table = constructTable(this._getTableOptions(props));
        this._rowsController = createVirtualizer({count: 0, getScrollElement: this._getScrollElement, estimateSize: this._estimateRow, onChange: this._refresh});
        this._columnsController = createVirtualizer({count: 0, horizontal: true, getScrollElement: this._getScrollElement, estimateSize: this._estimateColumn, onChange: this._refresh});
    }

    private _getScrollElement = () => this._root;

    private _estimateRow = () => this._rowHeight;

    private _estimateColumn = (index: number) => this._columnWidths[index] ?? 150;

    private _setRoot = (element: HTMLElement | null) => {
        this._root = element;
        if (this.props.forwardRef) {
            this.props.forwardRef.current = element;
        }
    };

    private _refresh = () => {
        if (this._mounted && !this._updatingOptions) {
            this.forceUpdate();
        }
    };

    private _translate = (key: string, args?: (string | number)[], defaultValue?: string) => i18n<string>(
        [this.props.i18n, vtableI18n], key, args, defaultValue, this.props.lang?.toLowerCase().replace('-', '_'),
    ) ?? `{i18n:${key}}`;

    private _getContext(): VTableRenderContext<TData, TFeatures> {
        return {table: this.table, rootElement: this._root, scrollElement: this._root, refresh: this._refresh, i18n: this._translate};
    }

    private _validate(props: VTableOptions<TData, TFeatures>): void {
        if (typeof props.getRowId !== 'function') {
            throw new Error('VTable requires getRowId.');
        }
        if (!Array.isArray(props.data) || !Array.isArray(props.columns)) {
            throw new Error('VTable requires data and columns arrays.');
        }
        if (props.columns !== this._validatedColumns) {
            const ids = new Set<string>();
            for (const column of props.columns) {
                if (!column.id || ids.has(column.id) || 'columns' in column) {
                    throw new Error(`VTable requires flat columns with unique nonempty ids: ${column.id}`);
                }
                ids.add(column.id);
            }
            this._validatedColumns = props.columns;
        }
        if (props.data !== this._validatedData || props.getRowId !== this._validatedGetRowId) {
            const ids = new Set<string>();
            props.data.forEach((row, index) => {
                const id = props.getRowId(row, index);
                if (typeof id !== 'string' || !id || ids.has(id)) {
                    throw new Error(`VTable requires unique nonempty row ids: ${id}`);
                }
                ids.add(id);
            });
            this._validatedData = props.data;
            this._validatedGetRowId = props.getRowId;
        }
        if (props.rowHeight !== undefined && (!Number.isFinite(props.rowHeight) || props.rowHeight <= 0)) {
            throw new Error('VTable rowHeight must be a positive finite number.');
        }
    }

    private _getTableOptions(props: VTableOptions<TData, TFeatures>): TableOptions<VTableFeatures<TFeatures>, TData> {
        // CustomContent accepts more template shapes than table-core's framework-neutral declarations.
        return {...props, features: this._features, columns: props.columns as readonly ColumnDef<VTableFeatures<TFeatures>, TData, unknown>[]} as unknown as TableOptions<VTableFeatures<TFeatures>, TData>;
    }

    private _applyOptions(props: VTableOptions<TData, TFeatures>): void {
        const plugins = props.plugins ?? [];
        if (plugins.length !== this._plugins.length || plugins.some((plugin, index) => plugin !== this._plugins[index])) {
            throw new Error('VTable plugins cannot change after construction; recreate the component.');
        }
        this._validate(props);
        this._updatingOptions = true;
        try {
            this.table.setOptions(this._getTableOptions(props));
        } finally {
            this._updatingOptions = false;
        }
        this._lastProps = props;
    }

    componentDidMount(): void {
        this._mounted = true;
        const stateSubscription = this.table.store.subscribe(this._refresh);
        const optionsSubscription = this.table.optionsStore?.subscribe(this._refresh);
        this._disposers.push(() => stateSubscription.unsubscribe(), () => optionsSubscription?.unsubscribe());
        this._rowsController.mount();
        this._columnsController.mount();
        try {
            for (const plugin of this._plugins) {
                const dispose = plugin.mount?.({...this._getContext(), rootElement: this._root!, scrollElement: this._root!});
                if (dispose) {
                    this._disposers.push(dispose);
                }
            }
        } catch (error) {
            this._dispose();
            throw error;
        }
        this.forceUpdate();
        super.componentDidMount();
    }

    componentDidUpdate(previousProps: VTableOptions<TData, TFeatures>): void {
        if (previousProps.forwardRef !== this.props.forwardRef) {
            if (previousProps.forwardRef) {
                previousProps.forwardRef.current = null;
            }
            if (this.props.forwardRef) {
                this.props.forwardRef.current = this._root;
            }
        }
        this._rowsController.update();
        this._columnsController.update();
        if (this._focusedElement && !this._focusedElement.isConnected) {
            this._root?.focus({preventScroll: true});
        }
        this._focusedElement = null;
    }

    private _dispose(): void {
        this._mounted = false;
        const errors: unknown[] = [];
        const disposers = [...this._disposers.splice(0).reverse(), () => this._rowsController.destroy(), () => this._columnsController.destroy()];
        for (const dispose of disposers) {
            try {
                dispose();
            } catch (error) {
                errors.push(error);
            }
        }
        if (errors.length) {
            throw new AggregateError(errors, 'VTable cleanup failed.');
        }
    }

    componentWillUnmount(): void {
        try {
            this._dispose();
        } finally {
            super.componentWillUnmount();
        }
    }

    resetState(props?: RenderableProps<VTableOptions<TData, TFeatures>>): void {
        if (props) {
            this._applyOptions(props);
        }
        this.table.reset();
        this._refresh();
    }

    scrollToRow(id: string, options?: VTableScrollOptions): boolean {
        if (!this._mounted || !this.table.getRowModel().rows.some(row => row.id === id)) {
            return false;
        }
        // Both the virtualizer count and the browser's scroll extent must reflect
        // same-tick engine updates before resolving the target's current position.
        this.forceUpdate(() => {
            const index = this.table.getRowModel().rows.findIndex(row => row.id === id);
            if (this._mounted && index >= 0) {
                this._rowsController.instance.scrollToIndex(index, options);
            }
        });
        return true;
    }

    scrollToColumn(id: string, options?: VTableScrollOptions): boolean {
        if (!this._mounted || !this.table.getColumn(id)) {
            return false;
        }
        this.forceUpdate(() => {
            const index = this.table.getAllLeafColumns().findIndex(column => column.id === id);
            if (this._mounted && index >= 0) {
                this._columnsController.instance.scrollToIndex(index, options);
            }
        });
        return true;
    }

    protected _beforeRender(props: RenderableProps<VTableOptions<TData, TFeatures>>): void {
        if (this._root?.contains(document.activeElement)) {
            this._focusedElement = document.activeElement as HTMLElement;
        }
        if (props !== this._lastProps) {
            this._applyOptions(props);
        }
        // Direct engine option updates share exactly the same validation path.
        this._validate({...props, data: this.table.options.data, columns: this.table.options.columns as VTableOptions<TData, TFeatures>['columns'], getRowId: this.table.options.getRowId!});
        const rows = this.table.getRowModel().rows;
        if (rows !== this._rows) {
            this._rowKey = createItemKey(rows);
            this._rows = rows;
        }
        const columns = this.table.getAllLeafColumns();
        const widths = columns.map(column => (column as Column_ColumnSizing).getSize());
        const columnsChanged = columns !== this._columns || widths.length !== this._columnWidths.length || widths.some((width, index) => width !== this._columnWidths[index]);
        const rowHeight = props.rowHeight ?? 36;
        const rowHeightChanged = rowHeight !== this._rowHeight;
        this._rowHeight = rowHeight;
        if (columns !== this._columns) {
            this._columnKey = createItemKey(columns);
            this._columns = columns;
        }
        this._columnWidths = widths;
        this._rowsController.setOptions({
            count: this._rows.length, getScrollElement: this._getScrollElement, estimateSize: this._estimateRow, getItemKey: this._rowKey,
            scrollMargin: rowHeight, scrollPaddingStart: rowHeight, overscan: props.rowOverscan ?? 5, onChange: this._refresh,
        });
        this._columnsController.setOptions({
            count: columns.length, getScrollElement: this._getScrollElement, estimateSize: this._estimateColumn, getItemKey: this._columnKey,
            horizontal: true, overscan: props.columnOverscan ?? 2, onChange: this._refresh,
        });
        if (rowHeightChanged) {
            this._rowsController.instance.measure();
        }
        if (columnsChanged) {
            this._columnsController.instance.measure();
        }
    }

    protected _getClassName(props: RenderableProps<VTableOptions<TData, TFeatures>>) {
        return ['vtable', super._getClassName(props)];
    }

    protected _getProps(props: RenderableProps<VTableOptions<TData, TFeatures>>): Record<string, unknown> {
        // Feature state updaters belong to the engine, not DOM event listeners.
        const domProps = {...props};
        for (const key of Object.keys(domProps)) {
            if (/^on[A-Z].*Change$/.test(key)) {
                delete domProps[key as keyof typeof domProps];
            }
        }
        const result = super._getProps(domProps);
        return {...result, role: 'table', tabIndex: 0, 'aria-rowcount': this._rows.length + 1, 'aria-colcount': this._columns.length, ref: this._setRoot, style: {
            ...result.style as JSX.CSSProperties,
            width: props.width ?? '100%', height: props.height ?? 320, '--vtable-row-height': `${this._rowHeight}px`,
        }};
    }

    protected _getChildren(): ComponentChildren {
        const context = this._getContext();
        const columns = this._columnsController.instance.getVirtualItems();
        const headers = this.table.getLeafHeaders();
        const width = this._columnsController.instance.getTotalSize();
        return (
            <>
                <div className="vtable-header" role="row" aria-rowindex={1} style={{width}}>
                    {columns.map((item) => {
                        const header = headers[item.index];
                        let content: ComponentChildren = <CustomContent content={header.column.columnDef.header ?? header.column.id} generatorArgs={[header.getContext(), context]} />;
                        const extras: ComponentChildren[] = [];
                        let attrs: JSX.HTMLAttributes<HTMLDivElement> = {};
                        for (const plugin of this._plugins) {
                            const decoration: VTableHeaderDecoration | void = plugin.decorateHeader?.({...context, header, content});
                            if (decoration) {
                                if ('content' in decoration) {
                                    content = decoration.content;
                                }
                                extras.push(decoration.extra);
                                attrs = {...attrs, ...decoration.attrs};
                            }
                        }
                        return (
                            <div {...attrs} key={header.column.id} className="vtable-header-cell" role="columnheader" aria-colindex={item.index + 1} data-col={header.column.id} style={{left: item.start, width: item.size}}>
                                <div className="vtable-header-content">{content}</div>
                                {extras}
                            </div>
                        );
                    })}
                </div>
                <div className="vtable-body" role="rowgroup" style={{width, height: this._rowsController.instance.getTotalSize()}}>
                    {this._rowsController.instance.getVirtualItems().map((item) => {
                        const row = this._rows[item.index];
                        return (
                            <div key={row.id} className="vtable-row" role="row" aria-rowindex={item.index + 2} data-row={row.id} style={{transform: `translateY(${item.start - this._rowHeight}px)`}}>
                                {columns.map(column => <VTableCell key={this._columns[column.index].id} row={row} column={this._columns[column.index]} index={column.index} start={column.start} size={column.size} context={context} />)}
                            </div>
                        );
                    })}
                </div>
                {!this._rows.length && <div className="vtable-empty" role="status"><CustomContent content={this.props.empty ?? this._translate('empty')} generatorArgs={[this.table, context]} /></div>}
            </>
        );
    }
}
