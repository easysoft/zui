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
import {RowData} from './types/row-data';

export type DTableProps = DTableOptions;

export class DTable extends Component<DTableProps, DTableState> {
    static addPlugin = addPlugin;

    static removePlugin = removePlugin;

    state: DTableState  = {scrollTop: 0, scrollLeft: 0, hiddenRows: {}, hiddenCols: {}};

    ref = createRef<HTMLDivElement>();

    #needUpdateSize = false;

    #options?: DTableOptions;

    #plugins?: readonly DTablePlugin[];

    get options() {
        return this.#options;
    }

    get plugins() {
        return this.#plugins;
    }

    componentDidMount() {
        if (this.#needUpdateSize) {
            this.forceUpdate();
        } else {
            this._afterRender();
        }
        this.ref.current?.addEventListener('click', this._handleClick);
    }

    componentDidUpdate() {
        if (this.#needUpdateSize) {
            this._afterRender();
        }
    }

    componentWillUnmount() {
        this.ref.current?.removeEventListener('click', this._handleClick);
    }

    scrollLeft(scrollLeft: number) {
        this.setState({scrollLeft}, () => {
            this.#options?.onScroll?.(scrollLeft, 'horz');
        });
    }

    scrollTop(scrollTop: number) {
        this.setState({scrollTop}, () => {
            this.#options?.onScroll?.(scrollTop, 'vert');
        });
    }

    getLayout(): DTableLayout | undefined {
        const initOptions = {...this.props};
        const plugins = initPlugins(initOptions.plugins);
        const options = {...getDefaultOptions(), ...mergePluginOptions(plugins, initOptions)};

        this.#plugins = Object.freeze(plugins);
        this.#options = Object.freeze(options);

        const {
            data,
            header,
            footer,
            rowHeight,
            defaultColWidth,
            minColWidth,
            maxColWidth,
            rowDataMap,
        } = options;
        const {scrollTop = 0, scrollLeft = 0, hiddenRows = {}, hiddenCols = {}} = this.state;
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
        options.cols.forEach((col) => {
            if (col.hidden || hiddenCols[col.name]) {
                return;
            }
            const {minWidth = minColWidth, maxWidth = maxColWidth} = col;
            const realWidth = limitSize(col.width ?? 0, minWidth, maxWidth);
            const flex = col.flex ?? 1;
            const flexWidth = flex * limitSize(defaultColWidth, minWidth, maxWidth);
            const colInfo: ColInfo = {
                ...col,
                left: 0,
                flex,
                realWidth,
                flexWidth,
                visible: true,
            };
            if (colInfo.fixed === 'left') {
                colInfo.left = flexLeftWidth;
                flexLeftWidth += realWidth;
                fixedLeftCols.push(colInfo);
            } else if (colInfo.fixed === 'right') {
                colInfo.left = flexRightWidth;
                flexRightWidth += realWidth;
                fixedRightCols.push(colInfo);
            } else {
                scrollCols.push(colInfo);
            }

            plugins.forEach(plugin => {
                const colTypeInfo = plugin.colTypes?.[colInfo.type ?? ''];
                if (!colTypeInfo) {
                    return;
                }
                const newColInfo = typeof colTypeInfo === 'function' ? colTypeInfo(colInfo) : colTypeInfo;
                if (newColInfo) {
                    Object.assign(colInfo, newColInfo);
                }
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

        let rowsHeightTotal = 0;
        const hiddenProp = rowDataMap?.$hidden ?? '$hidden';
        const rows = data.reduce<RowInfo[]>((list, item) => {
            if (!item[hiddenProp] && !hiddenRows[item.id]) {
                list.push({data: item, top: rowsHeightTotal});
                rowsHeightTotal += rowHeight;
            }
            return list;
        }, []);

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
            height = heightSetting;
        }

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
                const {minWidth = minColWidth, maxWidth = maxColWidth} = col;
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
        for (let i = startRowIndex; i < endRowIndex; i++) {
            const row = data[i];
            const rowTop = i * rowHeight;
            visibleRows.push({top: rowTop - scrollTop, data: row});
        }

        let layout: DTableLayout = {
            options,
            plugins,
            width,
            height,
            rows,
            visibleRows,
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
            scrollBottom,
            scrollTop,
            scrollLeft,
            startRowIndex,
            endRowIndex,
        };

        if (options.onLayout) {
            const newLayout = options.onLayout(layout, options, this.state);
            if (newLayout) {
                layout = newLayout;
            }
        }

        plugins.forEach(plugin => {
            if (plugin.onLayout) {
                const newLayout = plugin.onLayout.call(this, layout, options, this.state);
                if (newLayout) {
                    layout = newLayout;
                }
            }
        });

        return layout;
    }

    renderHeader(layout: DTableLayout) {
        const {header, colsInfo,  headerHeight} = layout;
        if (!header) {
            return null;
        }
        if (header === true) {
            return (
                <Header
                    scrollLeft={this.state.scrollLeft}
                    height={headerHeight}
                    onRenderCell={this._handleRenderCell}
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
        const {headerHeight, rowsHeight, visibleRows, rowHeight, colsInfo} = layout;
        return (
            <Rows
                top={headerHeight}
                height={rowsHeight}
                rows={visibleRows}
                rowHeight={rowHeight}
                scrollLeft={this.state.scrollLeft}
                onRenderCell={this._handleRenderCell}
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
                    wheelContainer=".dtable"
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
                    wheelContainer=".dtable"
                />,
            );
        }
        return scrollbars.length ? scrollbars : null;
    }

    _afterRender() {
        this.#needUpdateSize = false;
        this.#options?.afterRender?.call(this, this.#options, this.state);
        this.#plugins?.forEach(plugin => plugin.afterRender?.call(this, this.#options as DTableOptions, this.state));
    }

    _handleRenderCell = (rowID: string, col: ColInfo, rowData?: RowData, previousResult?: CustomRenderResult) : CustomRenderResult => {
        if (this.#options?.onRenderCell) {
            const result = this.#options.onRenderCell.call(this, rowID, col, rowData, previousResult);
            if (result !== undefined) {
                previousResult = result;
            }
        }
        this.#plugins?.forEach(plugin => {
            const result = plugin.onRenderCell?.call(this, rowID, col, rowData, previousResult);
            if (result !== undefined) {
                previousResult = result;
            }
        });
        return previousResult;
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
        const cellElement = target.closest('.dtable-cell');
        const rowElement = target.closest('.dtable-row');
        const colName = cellElement?.getAttribute('data-col') ?? '';
        const rowID = rowElement?.getAttribute('data-id') ?? '';
        const rowData = this.#options?.data?.find(row => row.id === rowID);
        if (cellElement) {
            if (rowID === 'HEADER') {
                this.#options?.onHeaderCellClick?.(event, {colName});
                this.#plugins?.forEach(plugin => {
                    plugin.onHeaderCellClick?.call(this, event, {colName});
                });
            } else {
                if (this.#options?.onCellClick?.call(this, event, {colName, rowID, rowData}) === true) {
                    return;
                }
                if (this.#plugins?.length) {
                    for (const plugin of this.#plugins) {
                        if (plugin.onCellClick?.call(this, event, {colName, rowID, rowData}) === true) {
                            return;
                        }
                    }
                }
            }
        }
        this.#options?.onRowClick?.call(this, event, {rowID, rowData});
        this.#plugins?.forEach(plugin => {
            plugin.onRowClick?.call(this, event, {rowID, rowData});
        });
    };

    render() {
        const layout = this.getLayout();
        const {className, rowHover, colHover, cellHover, bordered, striped, scrollbarHover} = layout?.options ?? this.props;
        const style = {width: layout?.width, height: layout?.height};
        return (
            <div
                className={classes('dtable', className, {
                    '-hover-row': rowHover,
                    '-hover-col': colHover,
                    '-hover-cell': cellHover,
                    '-bordered': bordered,
                    '-striped': striped,
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
