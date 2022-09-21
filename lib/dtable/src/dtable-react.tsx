import {Component, createRef, h as _h} from 'preact';
import {nanoid} from 'nanoid';
import {classes} from '@zui/browser-helpers/src/classes';
import {Scrollbar} from '@zui/scrollbar/src/components/scrollbar';
import {clamp} from './helpers/clamp';
import {Header} from './components/header';
import {Rows} from './components/rows';
import {mergePluginOptions, addPlugin, initPlugins, removePlugin} from './helpers/shared-plugins';
import {getDefaultOptions} from './helpers/default-options';
import './vars.css';
import './style.css';

import type {ComponentChildren, JSX} from 'preact';

export class DTable extends Component<DTableOptions, DTableState> {
    static addPlugin = addPlugin;

    static removePlugin = removePlugin;

    ref = createRef<HTMLDivElement>();

    #rafId = 0;

    #id: string;

    #needUpdateSize = false;

    #options?: DTableOptions;

    #allPlugins: readonly DTablePlugin[];

    #plugins: readonly DTablePlugin[] = [];

    #layout?: DTableLayout;

    #events: Map<DTableEventType, DTableEventListener[]> = new Map();

    #data: Record<string, unknown> = {};

    constructor(props: DTableOptions) {
        super(props);

        this.#id = `dtable-${nanoid(10)}`;
        this.state = {scrollTop: 0, scrollLeft: 0};

        this.#allPlugins = Object.freeze(initPlugins(props.plugins));
        this.#allPlugins.forEach(plugin => {
            const {methods, data, state} = plugin;
            if (methods) {
                Object.entries(methods).forEach(([methodName, method]) => {
                    if (typeof method === 'function') {
                        Object.assign(this, {[methodName]: method.bind(this)});
                    }
                });
            }
            if (data) {
                Object.assign(this.#data, data);
            }
            if (state) {
                Object.assign(this.state, state);
            }

            plugin.onCreate?.call(this, plugin);
        });
    }

    get options() {
        return this.#options ?? getDefaultOptions() as DTableOptions;
    }

    get plugins() {
        return this.#plugins;
    }

    get layout(): DTableLayout {
        return this.#layout as DTableLayout;
    }

    get id() {
        return this.#id;
    }

    get data() {
        return this.#data;
    }

    componentWillReceiveProps(): void {
        this.#options = undefined;
    }

    componentDidMount() {
        if (this.#needUpdateSize) {
            this.forceUpdate();
        } else {
            this.#afterRender();
        }

        this.#plugins.forEach(plugin => {
            const {events} = plugin;
            if (!events) {
                return;
            }
            Object.entries(events).forEach(([eventType, callback]) => {
                this.on(eventType as DTableEventType, callback as DTableEventListener);
            });
        });

        this.on('click', this.#handleClick as DTableEventListener);

        if (this.options.responsive) {
            window.addEventListener('resize', this.#handleResize);
        }

        this.#plugins.forEach(plugin => {
            plugin.onMounted?.call(this);
        });
    }

    componentDidUpdate() {
        if (this.#needUpdateSize) {
            this.#afterRender();
        } else {
            this.#plugins.forEach(plugin => {
                plugin.onUpdated?.call(this);
            });
        }
    }

    componentWillUnmount() {
        const {current} = this.ref;
        if (current) {
            for (const event of this.#events.keys()) {
                current.removeEventListener(event, this.#handleEvent);
            }
        }

        window.removeEventListener('resize', this.#handleResize);

        this.#plugins.forEach(plugin => {
            plugin.onUnmounted?.call(this);
        });

        this.#data = {};
    }

    on(event: DTableEventType, callback: DTableEventListener) {
        const eventCallbacks = this.#events.get(event);
        if (eventCallbacks) {
            eventCallbacks.push(callback);
        } else {
            this.#events.set(event, [callback]);
            this.ref.current?.addEventListener(event, this.#handleEvent);
        }
    }

    off(event: DTableEventType, callback: DTableEventListener) {
        const eventCallbacks = this.#events.get(event);
        if (!eventCallbacks) {
            return;
        }
        const index = eventCallbacks.indexOf(callback);
        if (index >= 0) {
            eventCallbacks.splice(index, 1);
        }
        if (!eventCallbacks.length) {
            this.#events.delete(event);
            this.ref.current?.removeEventListener(event, this.#handleEvent);
        }
    }

    scrollLeft(scrollLeft: number) {
        this.setState({scrollLeft}, () => {
            this.options.onScroll?.call(this, scrollLeft, 'horz');
        });
    }

    scrollTop(scrollTop: number) {
        this.setState({scrollTop}, () => {
            this.options.onScroll?.call(this, scrollTop, 'vert');
        });
    }

    getColInfo(colName: string): ColInfo | undefined {
        const {layout} = this;
        if (!layout) {
            return;
        }
        return layout.colsInfo.fixedLeftCols.find(x => x.name === colName) ?? layout.colsInfo.fixedRightCols.find(x => x.name === colName) ?? layout.colsInfo.scrollCols.find(x => x.name === colName);
    }

    getRowInfo(id: RowID): RowInfo | undefined {
        return this.layout.rows.find(x => x.id === id);
    }

    getRowInfoByIndex(index: number): RowInfo | undefined {
        return this.layout.rows[index];
    }

    update(options: {dirtyType?: 'options' | 'layout'} = {}) {
        const {dirtyType} = options;
        if (dirtyType === 'layout') {
            this.#layout = undefined;
        } else if (dirtyType === 'options') {
            this.#layout = undefined;
            this.#options = undefined;
        }
        this.forceUpdate();
    }

    getPointerInfo(event: Event) {
        const target = event.target as HTMLElement;
        if (!target) {
            return;
        }
        const cellElement = target.closest<HTMLElement>('.dtable-cell');
        if (!cellElement) {
            return;
        }
        const rowElement = cellElement.closest<HTMLElement>('.dtable-row');
        if (!rowElement) {
            return;
        }
        const colName = cellElement?.getAttribute('data-col');
        const rowID = rowElement?.getAttribute('data-id');
        if (typeof colName !== 'string' || typeof rowID !== 'string') {
            return;
        }
        return {
            cellElement,
            rowElement,
            colName,
            rowID,
            target,
        };
    }

    #handleEvent = (event: Event) => {
        const {type} = event;
        const callbacks = this.#events.get(type as keyof HTMLElementEventMap);
        if (!callbacks?.length) {
            return;
        }
        for (const callback of callbacks) {
            const result = callback.call(this, event);
            if (result === false) {
                event.stopPropagation();
                break;
            }
        }
    };

    #renderHeader(layout: DTableLayout) {
        const {header, colsInfo, headerHeight} = layout;
        if (!header) {
            return null;
        }
        if (header === true) {
            return (
                <Header
                    scrollLeft={this.state.scrollLeft}
                    height={headerHeight}
                    onRenderCell={this.#handleRenderCell}
                    onRenderRow={this.#handleRenderHeaderRow}
                    {...colsInfo}
                />
            );
        }
        let content: ComponentChildren;
        let html: {__html: string} | undefined;
        if (typeof header === 'function') {
            const headerContent: ComponentChildren | {__html: string} = header(layout, this.state);
            if (typeof headerContent === 'object' && headerContent && '__html' in headerContent) {
                html = headerContent;
            } else {
                content = headerContent;
            }
        } else {
            content = header;
        }

        return (
            <div
                className='dtable-header'
                style={{height: headerHeight}}
                dangerouslySetInnerHTML={html}
            >
                {content}
            </div>
        );
    }

    #renderRows(layout: DTableLayout) {
        const {headerHeight, rowsHeight, visibleRows, rowHeight, colsInfo} = layout;
        return (
            <Rows
                top={headerHeight}
                height={rowsHeight}
                rows={visibleRows}
                rowHeight={rowHeight}
                scrollLeft={this.state.scrollLeft}
                onRenderCell={this.#handleRenderCell}
                onRenderRow={this.#handleRenderRow}
                {...colsInfo}
            />
        );
    }

    #renderFooter(layout: DTableLayout) {
        const {footer, footerHeight} = layout;
        if (!footer) {
            return null;
        }
        let content: ComponentChildren;
        let html: {__html: string} | undefined;
        if (typeof footer === 'function') {
            const footerContent: ComponentChildren | {__html: string} = footer(layout, this.state);
            if (typeof footerContent === 'object' && footerContent && '__html' in footerContent) {
                html = footerContent;
            } else {
                content = footerContent;
            }
        } else {
            content = footer;
        }
        return (
            <div
                className='dtable-footer'
                style={{height: footerHeight}}
                dangerouslySetInnerHTML={html}
            >
                {content}
            </div>
        );
    }

    #renderScrollBars(layout: DTableLayout) {
        const scrollbars = [];
        const {scrollLeft, colsInfo, scrollTop, rowsHeight, rowsHeightTotal} = layout;
        const {scrollWidthTotal, scrollWidth} = colsInfo;
        const {scrollbarSize = 12, horzScrollbarPos} = this.props;
        if (scrollWidthTotal > scrollWidth) {
            scrollbars.push(
                <Scrollbar
                    key='horz'
                    type='horz'
                    scrollPos={scrollLeft}
                    scrollSize={scrollWidthTotal}
                    clientSize={scrollWidth}
                    onScroll={this.#handleScroll}
                    left={colsInfo.flexLeftWidth}
                    bottom={horzScrollbarPos === 'inside' ? 0 : (-scrollbarSize)}
                    size={scrollbarSize}
                    wheelContainer={this.ref}
                />,
            );
        }
        if (rowsHeightTotal > rowsHeight) {
            scrollbars.push(
                <Scrollbar
                    key='vert'
                    type='vert'
                    scrollPos={scrollTop}
                    scrollSize={rowsHeightTotal}
                    clientSize={rowsHeight}
                    onScroll={this.#handleScroll}
                    right={0}
                    size={scrollbarSize}
                    top={layout.headerHeight}
                    wheelContainer={this.ref}
                />,
            );
        }
        return scrollbars.length ? scrollbars : null;
    }

    #handleResize = () => {
        if (this.#rafId) {
            cancelAnimationFrame(this.#rafId);
        }
        this.#rafId = requestAnimationFrame(() => {
            this.#layout = undefined;
            this.forceUpdate();
            this.#rafId = 0;
        });
    };

    #afterRender() {
        this.#needUpdateSize = false;
        this.options.afterRender?.call(this);
        this.#plugins.forEach(plugin => plugin.afterRender?.call(this));
    }

    #handleRenderRow = (data: {props: RowProps, row: RowInfo}, h: typeof _h): Partial<RowProps | (RowProps & JSX.HTMLAttributes<HTMLElement>)> | void => {
        if (this.options.onRenderRow) {
            const result = this.options.onRenderRow.call(this, data, h);
            if (result) {
                Object.assign(data.props, result);
            }
        }

        this.#plugins.forEach(plugin => {
            if (plugin.onRenderRow) {
                const result = plugin.onRenderRow.call(this, data, h);
                if (result) {
                    Object.assign(data.props, result);
                }
            }
        });
        return data.props;
    };

    #handleRenderHeaderRow = (data: {props: RowProps}, h: typeof _h): RowProps => {
        if (this.options.onRenderHeaderRow) {
            data.props = this.options.onRenderHeaderRow.call(this, data, h);
        }

        this.#plugins.forEach(plugin => {
            if (plugin.onRenderHeaderRow) {
                data.props = plugin.onRenderHeaderRow.call(this, data, h);
            }
        });
        return data.props;
    };

    #handleRenderCell = (result: CustomRenderResult, data: {row: RowInfo, col: ColInfo, value?: unknown}, h: typeof _h) : CustomRenderResult => {
        const {row, col} = data;
        const {dataCellGetter} = this.options;
        if (row.lazy && dataCellGetter && data.value === undefined) {
            data.value = dataCellGetter.call(this, row, col);
            result[0] = data.value ?? '';
        }
        const renderCallbackName = row.id === 'HEADER' ? 'onRenderHeaderCell' : 'onRenderCell';
        if (col.setting[renderCallbackName]) {
            result = (col.setting[renderCallbackName] as CellRenderCallback).call(this, result, data, h);
        }
        if (this.options[renderCallbackName]) {
            result = (this.options[renderCallbackName] as CellRenderCallback).call(this, result, data, h);
        }
        this.#plugins.forEach(plugin => {
            if (plugin[renderCallbackName]) {
                result = (plugin[renderCallbackName] as CellRenderCallback).call(this, result, data, h);
            }
        });
        return result;
    };

    #handleScroll = (scrollOffset: number, type: 'horz' | 'vert') => {
        if (type === 'horz') {
            this.scrollLeft(scrollOffset);
        } else {
            this.scrollTop(scrollOffset);
        }
    };

    #handleClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (!target) {
            return;
        }
        const rowElement = target.closest<HTMLElement>('.dtable-row');
        if (!rowElement) {
            return;
        }
        const cellElement = target.closest<HTMLElement>('.dtable-cell');
        const colName = cellElement?.getAttribute('data-col') ?? '';
        const rowID = rowElement.getAttribute('data-id') ?? '';
        if (rowID === 'HEADER') {
            if (cellElement) {
                this.options.onHeaderCellClick?.call(this, event, {colName, element: cellElement});
                this.#plugins.forEach(plugin => {
                    plugin.onHeaderCellClick?.call(this, event, {colName, element: cellElement});
                });
            }
        } else {
            const rowInfo = this.layout.visibleRows.find(row => row.id === rowID);
            if (cellElement) {
                if (this.options.onCellClick?.call(this, event, {colName, rowID, rowInfo, element: cellElement, rowElement}) === true) {
                    return;
                }
                for (const plugin of this.#plugins) {
                    if (plugin.onCellClick?.call(this, event, {colName, rowID, rowInfo, element: cellElement, rowElement}) === true) {
                        return;
                    }
                }
            }
            if (this.options.onRowClick?.call(this, event, {rowID, rowInfo, element: rowElement}) === true) {
                return;
            }

            for (const plugin of this.#plugins) {
                if (plugin.onRowClick?.call(this, event, {rowID, rowInfo, element: rowElement}) === true) {
                    return;
                }
            }
        }
    };

    #initOptions(): boolean {
        if (this.#options) {
            return false;
        }
        const defaultOptions = getDefaultOptions();
        const options = mergePluginOptions(this.#allPlugins, {...defaultOptions, ...this.props} as DTableOptions);
        const plugins = this.#allPlugins.filter(plugin => !plugin.when || plugin.when(options));
        this.#plugins = Object.freeze(plugins);

        this.#options = options;
        return true;
    }

    #initLayout() {
        const {options, plugins} = this;

        plugins.forEach(plugin => {
            const newOptions = plugin.beforeLayout?.call(this, options);
            if (newOptions) {
                Object.assign(options, newOptions);
            }
        });

        const {
            header,
            footer,
            rowHeight,
            defaultColWidth,
            minColWidth,
            maxColWidth,
        } = options;

        const fixedLeftCols: ColInfo[] = [];
        const fixedRightCols: ColInfo[] = [];
        const scrollCols: ColInfo[] = [];
        let flexLeftWidth = 0;
        let flexRightWidth = 0;
        let colIndex = 0;
        options.cols.forEach((col) => {
            if (col.hidden) {
                return;
            }
            col = {...col};
            const {minWidth = minColWidth, maxWidth = maxColWidth} = col;
            const realWidth = clamp(col.width ?? 0, minWidth, maxWidth);
            const flex = col.flex ?? 1;
            const flexWidth = flex * clamp(defaultColWidth, minWidth, maxWidth);
            const colInfo: ColInfo = {
                name: col.name,
                type: col.type ?? '',
                setting: col,
                left: 0,
                flex,
                realWidth,
                flexWidth,
                visible: true,
                index: colIndex++,
            };
            if (col.fixed === 'left') {
                colInfo.left = flexLeftWidth;
                flexLeftWidth += realWidth;
                fixedLeftCols.push(colInfo);
            } else if (col.fixed === 'right') {
                colInfo.left = flexRightWidth;
                flexRightWidth += realWidth;
                fixedRightCols.push(colInfo);
            } else {
                scrollCols.push(colInfo);
            }

            plugins.forEach(plugin => {
                const colTypeInfo = plugin.colTypes?.[col.type ?? ''];
                if (colTypeInfo) {
                    const newColSetting = typeof colTypeInfo === 'function' ? colTypeInfo(col) : colTypeInfo;
                    if (newColSetting) {
                        Object.assign(col, newColSetting);
                    }
                }

                plugin.onAddCol?.call(this, colInfo);
            });
        });

        let widthSetting = options.width;
        let width = 0;
        if (typeof widthSetting === 'function') {
            widthSetting = widthSetting();
        }
        if (widthSetting === 'auto') {
            width = flexLeftWidth + flexRightWidth;
            scrollCols.forEach(col => {
                if (!col.realWidth) {
                    col.realWidth = col.flexWidth;
                }
                width += col.realWidth;
            });
        } else if (widthSetting === '100%') {
            const parentElement = this.ref.current?.parentElement;
            if (parentElement) {
                width = parentElement.clientWidth;
            } else {
                width = 0;
                this.#needUpdateSize = true;
                return;
            }
        } else {
            width = widthSetting ?? 0;
        }

        const {data, rowKey = 'id'} = options;
        const allRows: RowInfo[] = [];
        const addRowItem = (id: RowID, index: number, item?: RowData) => {
            const row: RowInfo = {data: item ?? {[rowKey]: id}, top: allRows.length * rowHeight, id: id, index: allRows.length};
            if (!item) {
                row.lazy = true;
            }
            allRows.push(row);

            if (options.onAddRow?.call(this, row, index) === false) {
                return;
            }
            for (const plugin of plugins) {
                if (plugin.onAddRow?.call(this, row, index) === false) {
                    return;
                }
            }
        };

        if (typeof data === 'number') {
            for (let i = 0; i < data; i++) {
                addRowItem(i, i);
            }
        } else if (Array.isArray(data)) {
            data.forEach((item, index) => {
                if (typeof item === 'object') {
                    addRowItem(item[rowKey] as RowID, index, item);
                } else {
                    addRowItem(item as RowID, index);
                }
            });
        }

        // Add rows
        let rowsChanged = false;
        let rows = allRows;
        if (options.onAddRows) {
            const newRows = options.onAddRows.call(this, rows);
            if (newRows) {
                rows = newRows;
                rowsChanged = true;
            }
        }
        for (const plugin of plugins) {
            const newRows = plugin.onAddRows?.call(this, rows);
            if (newRows) {
                rows = newRows;
                rowsChanged = true;
            }

        }
        if (rowsChanged) {
            rows.forEach((row, index) => {
                row.index = index;
            });
        }

        const headerHeight = header ? (options.headerHeight || rowHeight) : 0;
        const footerHeight = footer ? (options.footerHeight || rowHeight) : 0;
        let heightSetting = options.height;
        let height = 0;

        const rowsHeightTotal = rows.length * rowHeight;
        const actualHeight = headerHeight + footerHeight + rowsHeightTotal;
        if (typeof heightSetting === 'function') {
            heightSetting = heightSetting(actualHeight);
        }
        if (heightSetting === 'auto') {
            height = actualHeight;
        } else if (typeof heightSetting === 'object') {
            height = Math.min(heightSetting.max, Math.max(heightSetting.min, actualHeight));
        } else if (heightSetting === '100%') {
            const parentElement = this.ref.current?.parentElement;
            if (parentElement) {
                height = parentElement.clientHeight;
            } else {
                height = 0;
                this.#needUpdateSize = true;
                return;
            }
        } else {
            height = heightSetting as number;
        }

        const rowsHeight = height - headerHeight - footerHeight;
        const scrollWidth = width - flexLeftWidth - flexRightWidth;
        let scrollWidthTotal = 0;
        const flexCols: ColInfo[] = [];
        let flexSum = 0;
        scrollCols.forEach((col) => {
            if (col.realWidth) {
                scrollWidthTotal += col.realWidth;
            } else {
                flexCols.push(col);
                flexSum += col.flex;
            }
        });
        if (flexCols.length) {
            const minFlexWidth = Math.max(0, scrollWidth - scrollWidthTotal);
            flexCols.forEach(col => {
                const {minWidth = minColWidth, maxWidth = maxColWidth} = col.setting;
                col.realWidth = Math.min(maxWidth, Math.max(minWidth, Math.ceil(minFlexWidth * (col.flex ?? 1) / flexSum)));
                scrollWidthTotal += col.realWidth;
            });
        }

        const layout = {
            allRows,
            width,
            height,
            rows,
            rowHeight,
            rowsHeight,
            rowsHeightTotal,
            header,
            footer,
            headerHeight,
            footerHeight,
            colsInfo: {
                fixedLeftCols,
                fixedRightCols,
                scrollCols,
                flexLeftWidth,
                scrollWidth,
                scrollWidthTotal,
                flexRightWidth,
            },
        } as DTableLayout;

        if (options.onLayout) {
            const newLayout = options.onLayout.call(this, layout);
            if (newLayout) {
                Object.assign(layout, newLayout);
            }
        }

        plugins.forEach(plugin => {
            if (plugin.onLayout) {
                const newLayout = plugin.onLayout.call(this, layout);
                if (newLayout) {
                    Object.assign(layout, newLayout);
                }
            }
        });

        this.#layout = layout;
    }

    #getLayout(): DTableLayout | undefined {
        if (this.#initOptions() || !this.#layout) {
            this.#initLayout();
        }

        const {layout} = this;
        if (!layout) {
            return;
        }
        let {scrollTop, scrollLeft} = this.state;
        const {rowsHeightTotal, rowsHeight, rows, rowHeight, colsInfo: {scrollCols, scrollWidth}} = layout;

        scrollTop = Math.min(Math.max(0, rowsHeightTotal - rowsHeight), scrollTop);
        const scrollBottom = scrollTop + rowsHeight;
        let scrollWidthTotal = 0;
        scrollCols.forEach(col => {
            col.left = scrollWidthTotal;
            scrollWidthTotal += col.realWidth;
            col.visible = (col.left + col.realWidth) >= scrollLeft && col.left <= (scrollLeft + scrollWidth);
        });
        scrollLeft = Math.min(Math.max(0, scrollWidthTotal - scrollWidth), scrollLeft);

        const startRowIndex = Math.floor(scrollTop / rowHeight);
        const endRowIndex = Math.min(rows.length, Math.ceil(scrollBottom / rowHeight));
        const visibleRows: RowInfo[] = [];
        const {dataGetter} = this.options;
        for (let i = startRowIndex; i < endRowIndex; i++) {
            const row = rows[i];
            row.top = row.index * rowHeight - scrollTop;

            if (row.lazy) {
                if (dataGetter) {
                    row.data = dataGetter([row.id])[0];
                    row.lazy = false;
                }
            }

            visibleRows.push(row);
        }

        layout.visibleRows = visibleRows;
        layout.scrollTop = scrollTop;
        layout.scrollLeft = scrollLeft;

        return layout;
    }

    render() {
        const layout = this.#getLayout();
        const {className, rowHover, colHover, cellHover, bordered, striped, scrollbarHover} = this.options;
        const style = {width: layout?.width, height: layout?.height};
        const classNames: ClassNameLike = ['dtable', className, {
            'dtable-hover-row': rowHover,
            'dtable-hover-col': colHover,
            'dtable-hover-cell': cellHover,
            'dtable-bordered': bordered,
            'dtable-striped': striped,
            'dtable-scrolled-down': (layout?.scrollTop ?? 0) > 0,
            'scrollbar-hover': scrollbarHover,
        }];
        const children: ComponentChildren[] = [];
        if (layout) {
            this.#plugins.forEach(plugin => {
                const result = plugin.onRender?.call(this, layout);
                if (!result) {
                    return;
                }
                if (result.style) {
                    Object.assign(style, result.style);
                }
                if (result.className) {
                    classNames.push(result.className);
                }
                if (result.children) {
                    children.push(result.children);
                }
            });
        }

        return (
            <div
                id={this.#id}
                className={classes(classNames)}
                style={style}
                ref={this.ref}
            >
                {layout && this.#renderHeader(layout)}
                {layout && this.#renderRows(layout)}
                {layout && this.#renderFooter(layout)}
                {layout && this.#renderScrollBars(layout)}
            </div>
        );
    }
}
