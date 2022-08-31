import {Component, ComponentChildren, createRef} from 'preact';
import {classes} from '@zui/browser-helpers/src/classes';
import {Scrollbar} from '@zui/scrollbar/src/components/scrollbar';
import {DTableLayout} from './types/layout';
import {DTableOptions} from './types/options';
import {ColInfo} from './types/col-info';
import {RowInfo} from './types/row-info';
import {Header} from './components/header';
import {Rows} from './components/rows';
import {DTableState} from './types/state';
import {mergePluginOptions, addPlugin, initPlugins, removePlugin} from './helpers/shared-plugins';
import {getDefaultOptions} from './helpers/default-options';
import {DTablePlugin} from './types/plugin';
import {CustomRenderResult} from './types/custom-render-result';
import {RowData, RowID} from './types/row-data';
import {RowProps} from './types/row-props';
import {CellRenderCallback} from './types/cell-render';
import './vars.css';
import './style.css';

export class DTable extends Component<DTableOptions, DTableState> {
    static addPlugin = addPlugin;

    static removePlugin = removePlugin;

    ref = createRef<HTMLDivElement>();

    #rafId = 0;

    #needUpdateSize = false;

    #options: DTableOptions;

    #allPlugins: readonly DTablePlugin[];

    #plugins: readonly DTablePlugin[] = [];

    #layout?: DTableLayout;

    constructor(props: DTableOptions) {
        super(props);

        this.state = {scrollTop: 0, scrollLeft: 0};

        const initOptions = {...getDefaultOptions(), ...props} as DTableOptions;
        this.#options = Object.freeze(initOptions);

        this.#allPlugins = Object.freeze(initPlugins(initOptions));
        this.#allPlugins.forEach(plugin => {
            plugin.onCreate?.call(this, plugin);
        });
    }

    get options() {
        return this.#options;
    }

    get plugins() {
        return this.#plugins;
    }

    get layout() {
        return this.#layout;
    }

    componentDidMount() {
        if (this.#needUpdateSize) {
            this.forceUpdate();
        } else {
            this._afterRender();
        }

        this.ref.current?.addEventListener('click', this._handleClick);
        this.ref.current?.addEventListener('mouseover', this._handleMouseOver);
        this.ref.current?.addEventListener('mouseleave', this._handleMouseLeave);

        if (this.#options.responsive) {
            window.addEventListener('resize', this._handleResize);
        }

        this.#plugins.forEach(plugin => {
            plugin.onMounted?.call(this);
        });
    }

    componentDidUpdate() {
        if (this.#needUpdateSize) {
            this._afterRender();
        }
    }

    componentWillUnmount() {
        this.ref.current?.removeEventListener('click', this._handleClick);

        if (this.#options.colHover) {
            this.ref.current?.removeEventListener('mouseover', this._handleMouseOver);
            this.ref.current?.removeEventListener('mouseleave', this._handleMouseLeave);
        }

        window.removeEventListener('resize', this._handleResize);

        this.#plugins.forEach(plugin => {
            plugin.onUnmounted?.call(this);
        });
    }

    scrollLeft(scrollLeft: number) {
        this.setState({scrollLeft}, () => {
            this.#options.onScroll?.call(this, scrollLeft, 'horz');
        });
    }

    scrollTop(scrollTop: number) {
        this.setState({scrollTop}, () => {
            this.#options.onScroll?.call(this, scrollTop, 'vert');
        });
    }

    getLayout(): DTableLayout | undefined {
        const defaultOptions = getDefaultOptions();
        const options = mergePluginOptions(this.#allPlugins, {...defaultOptions, ...this.props} as DTableOptions);
        const plugins = this.#allPlugins.filter(plugin => !plugin.when || plugin.when(options));
        this.#plugins = Object.freeze(plugins);

        plugins.forEach(plugin => {
            const newOptions = plugin.beforeLayout?.call(this, options);
            if (newOptions) {
                Object.assign(options, newOptions);
            }
        });

        this.#options = Object.freeze(options);

        const {
            header,
            footer,
            rowHeight = defaultOptions.rowHeight,
            defaultColWidth = defaultOptions.minColWidth,
            minColWidth = defaultOptions.minColWidth,
            maxColWidth = defaultOptions.maxColWidth,
        } = options;

        const headerHeight = header ? (options.headerHeight || rowHeight) : 0;
        const footerHeight = footer ? (options.footerHeight || rowHeight) : 0;

        const limitSize = (size: number, min: number, max: number): number => {
            if (size) {
                if (min) {
                    size = Math.max(min, size);
                }
                if (max) {
                    size = Math.min(max, size);
                }
            }
            return size;
        };

        const fixedLeftCols: ColInfo[] = [];
        const fixedRightCols: ColInfo[] = [];
        const scrollCols: ColInfo[] = [];
        let flexLeftWidth = 0;
        let flexRightWidth = 0;
        options.cols?.forEach((col) => {
            if (col.hidden) {
                return;
            }
            col = {...col};
            const {minWidth = minColWidth, maxWidth = maxColWidth} = col;
            const realWidth = limitSize(col.width ?? 0, minWidth, maxWidth);
            const flex = col.flex ?? 1;
            const flexWidth = flex * limitSize(defaultColWidth, minWidth, maxWidth);
            const colInfo: ColInfo = {
                name: col.name,
                type: col.type ?? '',
                setting: col,
                left: 0,
                flex,
                realWidth,
                flexWidth,
                visible: true,
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
            const row: RowInfo = {data: item ?? {[rowKey]: id}, top: 0, id: id, index: allRows.length};
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
        } else if (typeof data === 'object' && data) {
            Object.entries(data).forEach(([id, item], index) => addRowItem(id, index, item));
        }

        // Add rows
        const rows: RowInfo[] = [];
        let rowsHeightTotal = 0;
        allRows.forEach(row => {
            if (options.rowFilter?.call(this, row) === false) {
                return;
            }
            for (const plugin of plugins) {
                if (plugin.rowFilter?.call(this, row) === false) {
                    return;
                }
            }
            row.index = rows.length;
            row.top = rowsHeightTotal;
            rows.push(row);
            rowsHeightTotal += rowHeight;
        });

        // Sort rows
        let rowsSorted = false;
        if (options.rowSorter) {
            rows.sort(options.rowSorter.bind(this));
            rowsSorted = true;
        }
        plugins.forEach(plugin => {
            if (plugin.rowSorter) {
                rows.sort(plugin.rowSorter.bind(this));
                rowsSorted = true;
            }
        });
        if (rowsSorted) {
            rows.forEach((row, index) => {
                row.index = index;
                row.top = index * rowHeight;
                rows.push(row);
            });
        }

        let heightSetting = options.height;
        let height = 0;
        if (typeof heightSetting === 'function') {
            heightSetting = heightSetting();
        }
        if (heightSetting === 'auto') {
            height = headerHeight + footerHeight + rowsHeightTotal;
        } else if (typeof heightSetting === 'object') {
            height = Math.min(heightSetting.max, Math.max(heightSetting.min, headerHeight + footerHeight + rowsHeightTotal));
        } else if (heightSetting === '100%') {
            const parentElement = this.ref.current?.parentElement;
            if (parentElement) {
                height = (parentElement as HTMLElement).clientHeight;
            } else {
                height = 0;
                this.#needUpdateSize = true;
                return;
            }
        } else {
            height = heightSetting as number;
        }

        const {scrollTop = 0, scrollLeft = 0, hoverCol} = this.state;
        const rowsHeight = height - headerHeight - footerHeight;
        const scrollBottom = scrollTop + rowsHeight;
        const visibleRows: RowInfo[] = [];
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
        scrollWidthTotal = 0;
        scrollCols.forEach(col => {
            col.left += scrollWidthTotal;
            scrollWidthTotal += col.realWidth;
            if ((col.left + col.realWidth) < scrollLeft || col.left > (scrollLeft + scrollWidth)) {
                col.visible = false;
            }
        });

        const startRowIndex = Math.floor(scrollTop / rowHeight);
        const endRowIndex = Math.min(rows.length, Math.ceil(scrollBottom / rowHeight));
        const lazyRows: RowID[] = [];
        for (let i = startRowIndex; i < endRowIndex; i++) {
            const row = rows[i];
            row.top -= scrollTop;
            visibleRows.push(row);
            if (row.lazy === true) {
                lazyRows.push(row.id);
            }
        }
        // TODO: load data for lazy rows.

        let layout: DTableLayout = {
            allRows,
            width,
            height,
            rows,
            visibleRows,
            rowHeight,
            rowsHeight,
            rowsHeightTotal,
            hoverCol,
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
            scrollBottom,
            scrollTop,
            scrollLeft,
            startRowIndex,
            endRowIndex,
        };

        if (options.onLayout) {
            const newLayout = options.onLayout.call(this, layout);
            if (newLayout) {
                layout = newLayout;
            }
        }

        plugins.forEach(plugin => {
            if (plugin.onLayout) {
                const newLayout = plugin.onLayout.call(this, layout);
                if (newLayout) {
                    layout = newLayout;
                }
            }
        });

        this.#layout = Object.freeze(layout);

        return layout;
    }

    getColInfo(colName: string): ColInfo | undefined {
        const {layout} = this;
        if (!layout) {
            return;
        }
        return layout.colsInfo.fixedLeftCols.find(x => x.name === colName) ?? layout.colsInfo.fixedRightCols.find(x => x.name === colName) ?? layout.colsInfo.scrollCols.find(x => x.name === colName);
    }

    renderHeader(layout: DTableLayout) {
        const {header, hoverCol, colsInfo, headerHeight} = layout;
        if (!header) {
            return null;
        }
        if (header === true) {
            return (
                <Header
                    scrollLeft={this.state.scrollLeft}
                    height={headerHeight}
                    onRenderCell={this._handleRenderCell}
                    onRenderRow={this._handleRenderHeaderRow}
                    hoverCol={hoverCol}
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

    renderRows(layout: DTableLayout) {
        const {headerHeight, rowsHeight, visibleRows, rowHeight, hoverCol, colsInfo} = layout;
        return (
            <Rows
                top={headerHeight}
                height={rowsHeight}
                rows={visibleRows}
                rowHeight={rowHeight}
                hoverCol={hoverCol}
                scrollLeft={this.state.scrollLeft}
                onRenderCell={this._handleRenderCell}
                onRenderRow={this._handleRenderRow}
                {...colsInfo}
            />
        );
    }

    renderFooter(layout: DTableLayout) {
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

    renderScrollBars(layout: DTableLayout) {
        const scrollbars = [];
        const {scrollLeft, colsInfo, scrollTop, rowsHeight, rowsHeightTotal} = layout;
        const {scrollWidthTotal, scrollWidth} = colsInfo;
        const {scrollbarSize = 10, horzScrollbarPos} = this.props;
        if (scrollWidthTotal > scrollWidth) {
            scrollbars.push(
                <Scrollbar
                    key='horz'
                    type='horz'
                    scrollPos={scrollLeft}
                    scrollSize={scrollWidthTotal}
                    clientSize={scrollWidth}
                    onScroll={this._handleScroll}
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
                    onScroll={this._handleScroll}
                    right={0}
                    size={scrollbarSize}
                    top={layout.headerHeight}
                    wheelContainer={this.ref}
                />,
            );
        }
        return scrollbars.length ? scrollbars : null;
    }

    _handleResize = () => {
        if (this.#rafId) {
            cancelAnimationFrame(this.#rafId);
        }
        this.#rafId = requestAnimationFrame(() => {
            this.forceUpdate();
            this.#rafId = 0;
        });
    };

    _afterRender() {
        this.#needUpdateSize = false;
        this.#options.afterRender?.call(this);
        this.#plugins.forEach(plugin => plugin.afterRender?.call(this));
    }

    _handleRenderRow = (rowProps: RowProps, rowInfo: RowInfo): RowProps => {
        if (this.#options.onRenderRow) {
            rowProps = this.#options.onRenderRow.call(this, rowProps, rowInfo);
        }

        this.#plugins.forEach(plugin => {
            if (plugin.onRenderRow) {
                rowProps = plugin.onRenderRow.call(this, rowProps, rowInfo);
            }
        });
        return rowProps;
    };

    _handleRenderHeaderRow = (rowProps: RowProps): RowProps => {
        if (this.#options.onRenderHeaderRow) {
            rowProps = this.#options.onRenderHeaderRow.call(this, rowProps);
        }

        this.#plugins.forEach(plugin => {
            if (plugin.onRenderHeaderRow) {
                rowProps = plugin.onRenderHeaderRow.call(this, rowProps);
            }
        });
        return rowProps;
    };

    _handleRenderCell = (result: CustomRenderResult, rowID: RowID, col: ColInfo, rowData?: RowData) : CustomRenderResult => {
        const renderCallbackName = rowID === 'HEADER' ? 'onRenderHeaderCell' : 'onRenderCell';
        if (col.setting[renderCallbackName]) {
            result = (col.setting[renderCallbackName] as CellRenderCallback).call(this, result, rowID, col, rowData);
        }
        if (this.#options[renderCallbackName]) {
            result = (this.#options[renderCallbackName] as CellRenderCallback).call(this, result, rowID, col, rowData);
        }
        this.#plugins.forEach(plugin => {
            if (plugin[renderCallbackName]) {
                result = (plugin[renderCallbackName] as CellRenderCallback).call(this, result, rowID, col, rowData);
            }
        });
        return result;
    };

    _handleScroll = (scrollOffset: number, type: 'horz' | 'vert') => {
        if (type === 'horz') {
            this.scrollLeft(scrollOffset);
        } else {
            this.scrollTop(scrollOffset);
        }
    };

    _handleClick = (event: MouseEvent) => {
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
                this.#options.onHeaderCellClick?.call(this, event, {colName, element: cellElement});
                this.#plugins.forEach(plugin => {
                    plugin.onHeaderCellClick?.call(this, event, {colName, element: cellElement});
                });
            }
        } else {
            const rowInfo = this.#layout?.visibleRows.find(row => row.id === rowID);
            if (cellElement) {
                if (this.#options.onCellClick?.call(this, event, {colName, rowID, rowInfo, element: cellElement, rowElement}) === true) {
                    return;
                }
                for (const plugin of this.#plugins) {
                    if (plugin.onCellClick?.call(this, event, {colName, rowID, rowInfo, element: cellElement, rowElement}) === true) {
                        return;
                    }
                }
            }
            if (this.#options.onRowClick?.call(this, event, {rowID, rowInfo, element: rowElement}) === true) {
                return;
            }

            for (const plugin of this.#plugins) {
                if (plugin.onRowClick?.call(this, event, {rowID, rowInfo, element: rowElement}) === true) {
                    return;
                }
            }
        }
    };

    _handleMouseOver = (event: MouseEvent) => {
        const {colHover} = this.#options;
        if (!colHover) {
            return;
        }

        const cellElement = (event.target as HTMLElement)?.closest<HTMLElement>('.dtable-cell');
        if (!cellElement) {
            return;
        }
        if (colHover === 'header' && !cellElement.closest('.dtable-header')) {
            return;
        }
        const colName = cellElement?.getAttribute('data-col') ?? '';
        this.setState({hoverCol: colName});
    };

    _handleMouseLeave = () => {
        this.setState({hoverCol: undefined});
    };

    render() {
        const layout = this.getLayout();
        const {className, rowHover, colHover, cellHover, bordered, striped, scrollbarHover} = this.#options ?? this.props;
        const style = {width: layout?.width, height: layout?.height};
        return (
            <div
                className={classes('dtable', className, {
                    'dtable-hover-row': rowHover,
                    'dtable-hover-col': colHover,
                    'dtable-hover-cell': cellHover,
                    'dtable-bordered': bordered,
                    'dtable-striped': striped,
                    'dtable-scrolled-down': (layout?.scrollTop ?? 0) > 0,
                    'scrollbar-hover': scrollbarHover,
                })}
                style={style}
                ref={this.ref}
            >
                {layout && this.renderHeader(layout)}
                {layout && this.renderRows(layout)}
                {layout && this.renderFooter(layout)}
                {layout && this.renderScrollBars(layout)}
            </div>
        );
    }
}
