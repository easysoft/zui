import {Component, createRef, h as _h} from 'preact';
import {classes, $, i18n, CustomContent, nextGid, CustomRender} from '@zui/core';
import {Scrollbar} from '@zui/scrollbar/src/component/scrollbar';
import {addPlugin, initPlugins, removePlugin} from '../helpers/shared-plugins';
import {getDefaultOptions} from '../helpers/default-options';
import {initColsLayout} from '../helpers/layout';
import {Block} from './block';

import type {ComponentChildren} from 'preact';
import type {ClassNameLike, CustomRenderResult, CustomRenderResultList} from '@zui/core';
import type {CellProps, CellRenderCallback} from '../types/cell';
import type {ColInfoLike, ColInfo, ColName} from '../types/col';
import type {DTableState, DTableLayout, DTableEventListener, DTableEventTarget, DTablePointerInfo} from '../types';
import type {DTableOptions} from '../types/options';
import type {DTablePlugin} from '../types/plugin';
import type {RowInfoLike, RowInfo, RowData, RowID} from '../types/row';

export class DTable extends Component<DTableOptions, DTableState> {
    static addPlugin = addPlugin;

    static removePlugin = removePlugin;

    ref = createRef<HTMLDivElement>();

    #rafId = 0;

    #id: string;

    #needRender = false;

    #options?: DTableOptions;

    #allPlugins: readonly DTablePlugin[];

    #plugins: DTablePlugin[] = [];

    #layout?: DTableLayout;

    #events: Map<string, DTableEventListener[]> = new Map();

    #data: Record<string, unknown> = {};

    #rob?: ResizeObserver;

    #i18nMaps: Record<string, Record<string, string | object>>[] = [];

    #hover: {in: boolean; row?: RowID; col?: ColName} = {in: false};

    _noAnimation?: number;

    constructor(props: DTableOptions) {
        super(props);

        this.#id = props.id ?? `dtable-${nextGid()}`;
        this.state = {scrollTop: 0, scrollLeft: 0, renderCount: 0};

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
                Object.assign(this.#data, data.call(this));
            }
            if (state) {
                Object.assign(this.state, state.call(this));
            }
        });

        this.#initOptions();
        this.#plugins.forEach(plugin => {
            plugin.onCreate?.call(this, plugin);
        });
    }

    get options() {
        return this.#layout?.options || this.#options || getDefaultOptions() as DTableOptions;
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

    get element() {
        return this.ref.current;
    }

    get parent() {
        return this.props.parent ?? this.element?.parentElement;
    }

    get hoverInfo() {
        return this.#hover;
    }

    componentWillReceiveProps(): void {
        this.#options = undefined;
    }

    componentDidMount() {
        if (this.#needRender) {
            this.forceUpdate();
        } else {
            this.#afterRender();
        }

        this.on('click', this.#handleClick as DTableEventListener);
        this.on('keydown', this.#handleKeydown as DTableEventListener);

        const {options} = this;
        if (options.rowHover || options.colHover) {
            this.on('mouseover', this.#handleMouseover as DTableEventListener);
            this.on('mouseleave', this.#handleMouseleave as DTableEventListener);
        }

        let {responsive} = options;
        if (responsive) {
            if (responsive === true) {
                responsive = 'window,parent';
            }
            const responsiveSelectors = responsive.split(',');
            if (typeof ResizeObserver !== 'undefined') {
                const responsiveEvents: string[] = [];
                const rob = new ResizeObserver(this.updateLayout);
                this.#rob = rob;
                const {parent} = this;
                responsiveSelectors.forEach(selector => {
                    if (selector === 'window') {
                        return;
                    }
                    if (selector === 'parent') {
                        if (parent) {
                            rob.observe(parent);
                        }
                    } else if (selector[0] === '~') {
                        responsiveEvents.push(selector.slice(1));
                    } else {
                        $(selector).each((_, element) => rob.observe(element));
                    }
                });
                if (responsiveEvents.length) {
                    this.on(responsiveEvents.join(' '), this.updateLayout);
                }
            }
            if (responsiveSelectors.includes('window')) {
                this.on('window_resize', this.updateLayout);
            }
        }

        this.#plugins.forEach(plugin => {
            let {events} = plugin;
            if (events) {
                if (typeof events === 'function') {
                    events = events.call(this);
                }
                Object.entries(events).forEach(([eventType, callback]) => {
                    if (callback) {
                        this.on(eventType, callback as DTableEventListener);
                    }
                });
            }

            plugin.onMounted?.call(this);
        });
    }

    componentDidUpdate() {
        this.#afterRender();
        this.#plugins.forEach(plugin => {
            plugin.onUpdated?.call(this);
        });
    }

    componentWillUnmount() {
        this.#rob?.disconnect();

        const {element} = this;
        if (element) {
            for (const event of this.#events.keys()) {
                if (event.startsWith('window_')) {
                    window.removeEventListener(event.replace('window_', ''), this.#handleWindowEvent);
                } else if (event.startsWith('document_')) {
                    document.removeEventListener(event.replace('document_', ''), this.#handleDocumentEvent);
                }  else {
                    element.removeEventListener(event, this.#handleEvent);
                }
            }
        }

        this.#plugins.forEach(plugin => {
            plugin.onUnmounted?.call(this);
        });

        this.#allPlugins.forEach(plugin => {
            plugin.onDestory?.call(this);
        });

        this.#data = {};
        this.#events.clear();

        if (this._noAnimation) {
            clearTimeout(this._noAnimation);
        }
    }

    on(event: string, callback: DTableEventListener, target?: DTableEventTarget) {
        if (target) {
            event = `${target}_${event}`;
        }
        const eventCallbacks = this.#events.get(event);
        if (eventCallbacks) {
            eventCallbacks.push(callback);
        } else {
            this.#events.set(event, [callback]);
            if (event.startsWith('window_')) {
                window.addEventListener(event.replace('window_', ''), this.#handleWindowEvent);
            } else if (event.startsWith('document_')) {
                document.addEventListener(event.replace('document_', ''), this.#handleDocumentEvent);
            } else {
                this.element?.addEventListener(event, this.#handleEvent);
            }
        }
    }

    off(event: string, callback: DTableEventListener, target?: DTableEventTarget) {
        if (target) {
            event = `${target}_${event}`;
        }
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
            if (event.startsWith('window_')) {
                window.removeEventListener(event.replace('window_', ''), this.#handleWindowEvent);
            } else if (event.startsWith('document_')) {
                document.removeEventListener(event.replace('document_', ''), this.#handleDocumentEvent);
            } else {
                this.element?.removeEventListener(event, this.#handleEvent);
            }
        }
    }

    emitCustomEvent<C extends string, T>(event: C, detail?: T) {
        this.#handleEvent(detail instanceof Event ? detail : new CustomEvent<T>(event, {detail}), event);
    }

    disableAnimation(delay = 200) {
        if (this._noAnimation) {
            clearTimeout(this._noAnimation);
        }
        this.element?.classList.add('no-animation');
        this._noAnimation = window.setTimeout(() => {
            this._noAnimation = undefined;
            this.element?.classList.remove('no-animation');
        }, delay);
    }

    scroll(info: {scrollLeft?: number, scrollTop?: number, offsetLeft?: number, offsetTop?: number, to?: 'up' | 'down' | 'bottom' | 'top' | 'left' | 'right' | 'begin' | 'end'}, callback?: (this: DTable, result: boolean) => void): boolean {
        const {scrollLeft: scrollLeftOld, scrollTop: scrollTopOld, rowsHeightTotal, rowsHeight, rowHeight, cols: {center: {totalWidth, width}}} = this.layout;
        const {to} = info;
        let {scrollLeft, scrollTop} = info;

        if (to === 'up' || to === 'down') {
            scrollTop = scrollTopOld + (to === 'down' ? 1 : -1) * Math.floor(rowsHeight / rowHeight) * rowHeight;
        } else if (to === 'left' || to === 'right') {
            scrollLeft = scrollLeftOld + (to === 'right' ? 1 : -1) * width;
        } else if (to === 'top') {
            scrollTop = 0;
        } else if (to === 'bottom') {
            scrollTop = rowsHeightTotal - rowsHeight;
        } else if (to === 'begin') {
            scrollLeft = 0;
        } else if (to === 'end') {
            scrollLeft = totalWidth - width;
        } else {
            const {offsetLeft, offsetTop} = info;
            if (typeof offsetLeft === 'number') {
                scrollLeft = scrollLeftOld + offsetLeft;
            }
            if (typeof offsetTop ===  'number') {
                scrollTop = scrollTopOld + offsetTop;
            }
        }

        const state: {scrollLeft?: number, scrollTop?: number} = {};
        if (typeof scrollLeft == 'number') {
            scrollLeft = Math.max(0, Math.min(scrollLeft, totalWidth - width));
            if (scrollLeft !== scrollLeftOld) {
                state.scrollLeft = scrollLeft;
            }
        }
        if (typeof scrollTop == 'number') {
            scrollTop = Math.max(0, Math.min(scrollTop, rowsHeightTotal - rowsHeight));
            if (scrollTop !== scrollTopOld) {
                state.scrollTop = scrollTop;
            }
        }

        if (Object.keys(state).length) {
            this.setState(state, () => {
                this.options.onScroll?.call(this, state);
                callback?.call(this, true);
            });
            return true;
        }
        callback?.call(this, false);
        return false;
    }

    getColInfo(colNameOrIndex?: ColInfoLike): ColInfo | undefined {
        if (colNameOrIndex === undefined) {
            return;
        }
        if (typeof colNameOrIndex === 'object') {
            return colNameOrIndex;
        }
        const {cols} = this.layout;
        if (typeof colNameOrIndex === 'number') {
            return cols.list[colNameOrIndex];
        }
        return cols.map[colNameOrIndex];
    }

    getRowInfo(idOrIndex?: RowInfoLike): RowInfo | undefined {
        if (idOrIndex === undefined) {
            return;
        }
        if (typeof idOrIndex === 'object') {
            return idOrIndex;
        }
        if (idOrIndex === -1 || idOrIndex === 'HEADER') {
            return {id: 'HEADER', index: -1, top: 0};
        }
        const {rows, rowsMap, allRows} = this.layout;
        if (typeof idOrIndex === 'number') {
            return rows[idOrIndex];
        }
        return rowsMap[idOrIndex] || allRows.find(x => x.id === idOrIndex);
    }

    getCellValue(row: RowInfo | string | number, col: ColInfo | string | number): unknown {
        const rowInfo = typeof row === 'object' ? row : this.getRowInfo(row);
        if (!rowInfo) {
            return;
        }
        const colInfo = typeof col === 'object' ? col : this.getColInfo(col);
        if (!colInfo) {
            return;
        }
        let originValue = rowInfo.id === 'HEADER' ? colInfo.setting.title : rowInfo.data?.[colInfo.name];
        const {cellValueGetter} = this.options;
        if (cellValueGetter) {
            originValue = cellValueGetter.call(this, rowInfo, colInfo, originValue);
        }
        return originValue;
    }

    getRowInfoByIndex(index: number): RowInfo | undefined {
        return this.layout.rows[index];
    }

    update(options: {dirtyType?: 'options' | 'layout', state?: Partial<DTableState>} | (() => void) = {}, callback?: () => void) {
        if (!this.#options) {
            return;
        }
        if (typeof options === 'function') {
            callback = options;
            options = {};
        }
        const {dirtyType, state} = options;
        if (dirtyType === 'layout') {
            this.#layout = undefined;
        } else if (dirtyType === 'options') {
            this.#options = undefined;
            if (!this.#layout) {
                return;
            }
            this.#layout = undefined;
        }
        this.setState(state ?? ((preState) => ({renderCount: preState.renderCount + 1})), callback);
    }

    getPointerInfo(event: Event): DTablePointerInfo | undefined {
        const target = event.target as HTMLElement;
        if (!target || target.closest('.no-cell-event')) {
            return;
        }
        const $cell = $(target).closest('.dtable-cell');
        if (!$cell.length) {
            return;
        }
        const rowID = $cell.attr('data-row');
        const colName = $cell.attr('data-col');
        if (typeof colName !== 'string' || typeof rowID !== 'string') {
            return;
        }
        return {
            cellElement: $cell[0] as HTMLElement,
            colName,
            rowID,
            target,
        };
    }

    updateLayout = () => {
        if (this.#rafId) {
            cancelAnimationFrame(this.#rafId);
        }
        this.#rafId = requestAnimationFrame(() => {
            this.update({dirtyType: 'layout'});
            this.#rafId = 0;
        });
    };

    i18n(key: string, defaultValue?: string): string;
    i18n(key: string, args?: (string | number)[] | Record<string, string | number>, defaultValue?: string): string;
    i18n(key: string, args?: string | (string | number)[] | Record<string, string | number>, defaultValue?: string): string {
        return i18n(this.#i18nMaps, key, args as string, defaultValue, this.options.lang) ?? `{i18n:${key}}`;
    }

    getPlugin(pluginName: string): DTablePlugin | undefined {
        return this.plugins.find(x => x.name === pluginName);
    }

    #handleEvent = (event: Event, type?: string) => {
        type = type || event.type;
        const callbacks = this.#events.get(type);
        if (!callbacks?.length) {
            return;
        }
        for (const callback of callbacks) {
            const result = callback.call(this, event);
            if (result === false) {
                event.stopPropagation();
                event.preventDefault();
                break;
            }
        }
    };

    #handleWindowEvent = (event: Event) => {
        this.#handleEvent(event, `window_${event.type}`);
    };

    #handleDocumentEvent = (event: Event) => {
        this.#handleEvent(event, `document_${event.type}`);
    };

    #renderHeader(layout: DTableLayout) {
        const {header, cols, headerHeight, scrollLeft, headerChildren} = layout;
        if (!header) {
            return null;
        }
        if (header === true) {
            return (
                <Block
                    key="header"
                    className="dtable-header"
                    cols={cols}
                    height={headerHeight}
                    scrollLeft={scrollLeft}
                    rowHeight={headerHeight}
                    scrollTop={0}
                    rows={{id: 'HEADER', index: -1, top: 0}}
                    top={0}
                    onRenderCell={this.#handleRenderCell}
                >{headerChildren}</Block>
            );
        }

        const customResults = Array.isArray(header) ? header : [header];
        return (
            <CustomRender
                key="header"
                className='dtable-header'
                style={{height: headerHeight}}
                renders={customResults}
                generateArgs={[layout]}
                generatorThis={this}
            >{headerChildren}</CustomRender>
        );
    }

    #renderBody(layout: DTableLayout) {
        const {headerHeight, rowsHeight, visibleRows, rowHeight, cols, scrollLeft, scrollTop, bodyChildren} = layout;
        return (
            <Block
                key="body"
                className="dtable-body"
                top={headerHeight}
                height={rowsHeight}
                rows={visibleRows}
                rowHeight={rowHeight}
                scrollLeft={scrollLeft}
                scrollTop={scrollTop}
                cols={cols}
                onRenderCell={this.#handleRenderCell}
            >{bodyChildren}</Block>
        );
    }

    #renderFooter(layout: DTableLayout) {
        let {footer} = layout;
        if (typeof footer === 'function') {
            footer = footer.call(this, layout);
        }
        if (!footer) {
            return null;
        }
        const customResults = Array.isArray(footer) ? footer : [footer];
        return (
            <CustomRender
                key="footer"
                className='dtable-footer'
                style={{height: layout.footerHeight, top: layout.rowsHeight + layout.headerHeight}}
                renders={customResults}
                generateArgs={[layout]}
                generatorThis={this}
                generators={layout.footerGenerators}
            >{layout.footerChildren}</CustomRender>
        );
    }

    #renderScrollBars(layout: DTableLayout) {
        const scrollbars = [];
        const {scrollLeft, cols: {left: {width: fixedLeftWidth}, center: {width: centerWidth, totalWidth: centerScrollWidth}}, scrollTop, rowsHeight, rowsHeightTotal, footerHeight, headerHeight} = layout;
        const {scrollbarSize = 12, horzScrollbarPos, vertScrollbarPos} = this.options;
        if (centerScrollWidth > centerWidth) {
            scrollbars.push(
                <Scrollbar
                    key='horz'
                    type='horz'
                    scrollPos={scrollLeft}
                    scrollSize={centerScrollWidth}
                    clientSize={centerWidth}
                    onScroll={this.#handleScroll}
                    left={fixedLeftWidth}
                    bottom={(horzScrollbarPos === 'inside' ? 0 : (-scrollbarSize)) + footerHeight}
                    size={scrollbarSize}
                    wheelContainer={this.ref}
                />,
                <div className="dtable-scroll-shadow is-left" style={{left: fixedLeftWidth, height: headerHeight + rowsHeight}}></div>,
                <div className="dtable-scroll-shadow is-right" style={{left: fixedLeftWidth + centerWidth, height: headerHeight + rowsHeight}}></div>,
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
                    right={vertScrollbarPos === 'outside' ? (-scrollbarSize) : 0}
                    size={scrollbarSize}
                    top={headerHeight}
                    wheelContainer={this.ref}
                />,
            );
        }
        return scrollbars.length ? scrollbars : null;
    }

    #afterRender() {
        this.#needRender = false;
        this.#plugins.forEach(plugin => plugin.afterRender?.call(this));
        this.options.afterRender?.call(this);
    }

    #handleRenderCell = (result: CustomRenderResultList, data: {row: RowInfo, col: ColInfo, value: unknown}, cellProps: CellProps, h: typeof _h) : CustomRenderResultList => {
        const {row, col} = data;
        data.value = this.getCellValue(row, col);
        result[0] = data.value as ComponentChildren;
        const renderCallbackName = row.id === 'HEADER' ? 'onRenderHeaderCell' : 'onRenderCell';
        if (col.setting[renderCallbackName]) {
            result = (col.setting[renderCallbackName] as CellRenderCallback).call(this, result, data, cellProps, h);
        }
        this.#plugins.forEach(plugin => {
            if (plugin[renderCallbackName]) {
                result = (plugin[renderCallbackName] as CellRenderCallback).call(this, result, data, cellProps, h);
            }
        });
        if (this.options[renderCallbackName]) {
            result = (this.options[renderCallbackName] as CellRenderCallback).call(this, result, data, cellProps, h);
        }
        return result;
    };

    #handleScroll = (scrollOffset: number, type: 'horz' | 'vert') => {
        if (type === 'horz') {
            this.scroll({scrollLeft: scrollOffset});
        } else {
            this.scroll({scrollTop: scrollOffset});
        }
    };

    #handleClick = (event: MouseEvent) => {
        const pointerInfo = this.getPointerInfo(event);
        if (!pointerInfo) {
            return;
        }
        const {rowID, colName, cellElement} = pointerInfo;
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
                if (this.options.onCellClick?.call(this, event, {colName, rowID, rowInfo, element: cellElement}) === true) {
                    return;
                }
                for (const plugin of this.#plugins) {
                    if (plugin.onCellClick?.call(this, event, {colName, rowID, rowInfo, element: cellElement}) === true) {
                        return;
                    }
                }
            }
        }
    };

    #handleKeydown = (event: KeyboardEvent) => {
        const key = event.key.toLowerCase();
        if (['pageup', 'pagedown', 'home', 'end'].includes(key)) {
            return !this.scroll({to: key.replace('page', '') as Parameters<DTable['scroll']>[0]['to']});
        }
    };

    #handleMouseover = (event: MouseEvent) => {
        const $cell = $(event.target as HTMLElement).closest('.dtable-cell');
        if (!$cell.length) {
            return this.#updateHoverInfo(false);
        }
        this.#updateHoverInfo([$cell.attr('data-row') as RowID, $cell.attr('data-col') as ColName]);
    };

    #handleMouseleave = () => {
        this.#updateHoverInfo(false);
    };

    #updateHoverInfo(info: [row: RowID, col: ColName] | false) {
        const {element, options} = this;
        if (!element) {
            return;
        }
        const $element = $(element);
        const newInfo = info ? {in: true, row: info[0], col: info[1]} : {in: false};
        if (options.colHover === 'header' && newInfo.row !== 'HEADER') {
            newInfo.col = undefined;
        }
        const oldInfo = this.#hover;
        if (newInfo.in !== oldInfo.in) {
            $element.toggleClass('dtable-hover', newInfo.in);
        }
        if (newInfo.row !== oldInfo.row) {
            $element.find('.is-hover-row').removeClass('is-hover-row');
            if (newInfo.row) {
                $element.find(`.dtable-cell[data-row="${newInfo.row}"]`).addClass('is-hover-row');
            }
        }
        if (newInfo.col !== oldInfo.col) {
            $element.find('.is-hover-col').removeClass('is-hover-col');
            if (newInfo.col) {
                $element.find(`.dtable-cell[data-col="${newInfo.col}"]`).addClass('is-hover-col');
            }
        }
        this.#hover = newInfo;
    }

    #initOptions(): boolean {
        if (this.#options) {
            return false;
        }

        const defaultOptions = getDefaultOptions();
        const options = {...defaultOptions, ...this.#allPlugins.reduce((currentOptions, plugin) => {
            const {defaultOptions: pluginOptions} = plugin;
            if (pluginOptions) {
                Object.assign(currentOptions, pluginOptions);
            }
            return currentOptions;
        }, {}), ...this.props} as DTableOptions;
        this.#options = options;

        this.#plugins = this.#allPlugins.reduce<DTablePlugin[]>((list, plugin) => {
            const {when, options: optionsModifier} = plugin;
            let pluginModifyOptions = options;
            if (optionsModifier) {
                pluginModifyOptions = Object.assign({...pluginModifyOptions}, typeof optionsModifier === 'function' ? optionsModifier.call(this, options) : optionsModifier);
            }
            if (!when || when(pluginModifyOptions)) {
                if (pluginModifyOptions !== options) {
                    Object.assign(options, pluginModifyOptions);
                }
                list.push(plugin);
            }
            return list;
        }, []);

        this.#i18nMaps = [this.options.i18n, ...this.plugins.map(x => x.i18n)].filter(Boolean) as Record<string, Record<string, string | object>>[];

        return true;
    }

    #initLayout() {
        const {plugins} = this;

        let options = this.#options as DTableOptions;
        const footerGenerators: Record<string, CustomRenderResult<[table: DTable, layout: DTableLayout]>> = {
            flex: <div style="flex:auto"></div>,
            divider: <div style="width:1px;margin:var(--space);background:var(--color-border);height:50%"></div>,
        };
        plugins.forEach(plugin => {
            const newOptions = plugin.beforeLayout?.call(this, options);
            if (newOptions) {
                options = {...options, ...newOptions};
            }
            Object.assign(footerGenerators, plugin.footer);
        });

        /* Estimate width. */
        let widthSetting = options.width;
        let width = 0; // Table width.
        if (typeof widthSetting === 'function') {
            widthSetting = widthSetting.call(this);
        }
        if (widthSetting === '100%') {
            const {parent: parentElement} = this;
            if (parentElement) {
                width = parentElement.clientWidth;
            } else {
                this.#needRender = true;
                return;
            }
        }

        /* Init columns. */
        const cols = initColsLayout(this, options, plugins, width);

        const {data, rowKey = 'id', rowHeight} = options;
        const allRows: RowInfo[] = [];
        const addRowItem = (id: string, index: number, item?: RowData) => {
            const row: RowInfo = {data: item ?? {[rowKey]: id}, id, index: allRows.length, top: 0};
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
                addRowItem(`${i}`, i);
            }
        } else if (Array.isArray(data)) {
            data.forEach((item, index) => {
                if (typeof item === 'object') {
                    addRowItem(`${item[rowKey] ?? ''}`, index, item);
                } else {
                    addRowItem(`${item ?? ''}`, index);
                }
            });
        }

        /* Add rows */
        let rows = allRows;
        const rowsMap: Record<RowID, RowInfo> = {};
        if (options.onAddRows) {
            const newRows = options.onAddRows.call(this, rows, cols);
            if (newRows) {
                rows = newRows;
            }
        }
        for (const plugin of plugins) {
            const newRows = plugin.onAddRows?.call(this, rows, cols);
            if (newRows) {
                rows = newRows;
            }
        }
        rows.forEach((row, index) => {
            rowsMap[row.id] = row;
            row.index = index;
            row.top = row.index * rowHeight;
        });

        const {header, footer} = options;
        const headerHeight = header ? (options.headerHeight || rowHeight) : 0;
        const footerHeight = footer ? (options.footerHeight || rowHeight) : 0;
        let heightSetting = options.height;
        let height = 0;

        const rowsHeightTotal = rows.length * rowHeight;
        const actualHeight = headerHeight + footerHeight + rowsHeightTotal;
        if (typeof heightSetting === 'function') {
            heightSetting = heightSetting.call(this, actualHeight);
        }
        if (heightSetting === 'auto') {
            height = actualHeight;
        } else if (typeof heightSetting === 'object') {
            height = Math.min(heightSetting.max, Math.max(heightSetting.min, actualHeight));
        } else if (heightSetting === '100%') {
            const {parent: parentElement} = this;
            if (parentElement) {
                height = parentElement.clientHeight;
            } else {
                height = 0;
                this.#needRender = true;
                return;
            }
        } else {
            height = heightSetting as number;
        }

        const rowsHeight = height - headerHeight - footerHeight;
        const layout = {
            options,
            allRows,
            width,
            height,
            rows,
            rowsMap,
            rowHeight,
            rowsHeight,
            rowsHeightTotal,
            header,
            footer,
            footerGenerators,
            headerHeight,
            footerHeight,
            cols,
        } as DTableLayout;

        const newLayout = options.onLayout?.call(this, layout);
        if (newLayout) {
            Object.assign(layout, newLayout);
        }

        plugins.forEach(plugin => {
            if (plugin.onLayout) {
                const newPluginLayout = plugin.onLayout.call(this, layout);
                if (newPluginLayout) {
                    Object.assign(layout, newPluginLayout);
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

        /* Calculate scroll left. */
        const {cols: {center: centerCols}} = layout;
        let {scrollLeft} = this.state;
        scrollLeft = Math.min(Math.max(0, centerCols.totalWidth - centerCols.width), scrollLeft);
        let colRealLeft = 0;
        centerCols.list.forEach(col => {
            col.left = colRealLeft;
            colRealLeft += col.realWidth;
            col.visible = (col.left + col.realWidth) >= scrollLeft && col.left <= (scrollLeft + centerCols.width);
        });

        const {rowsHeightTotal, rowsHeight, rows, rowHeight} = layout;
        const scrollTop = Math.min(Math.max(0, rowsHeightTotal - rowsHeight), this.state.scrollTop);
        const startRowIndex = Math.floor(scrollTop / rowHeight);
        const scrollBottom = scrollTop + rowsHeight;
        const endRowIndex = Math.min(rows.length, Math.ceil(scrollBottom / rowHeight));
        const visibleRows: RowInfo[] = [];
        const {rowDataGetter} = this.options;
        for (let i = startRowIndex; i < endRowIndex; i++) {
            const row = rows[i];

            if (row.lazy) {
                if (rowDataGetter) {
                    row.data = rowDataGetter([row.id])[0];
                    row.lazy = false;
                }
            }

            visibleRows.push(row);
        }

        Object.assign(layout, {
            visibleRows,
            scrollTop,
            scrollLeft,
            headerChildren: [],
            bodyChildren: [],
            footerChildren: [],
            children: [],
            className: '',
            scrollable: true,
        });

        return layout;
    }

    render() {
        let layout = this.#getLayout();
        const {className, rowHover, colHover, cellHover, bordered, striped, scrollbarHover, beforeRender, emptyTip, style = {}} = this.options;
        const classNames: ClassNameLike = ['dtable', className, {
            'dtable-hover-row': rowHover,
            'dtable-hover-col': colHover,
            'dtable-hover-cell': cellHover,
            'dtable-bordered': bordered,
            'dtable-striped': striped,
            'scrollbar-hover': scrollbarHover,
            'no-animation': this._noAnimation,
        }];
        const children: ComponentChildren[] = [];
        if (layout) {
            const isEmpty = !layout.rows.length;

            if (beforeRender) {
                const newLayout = beforeRender.call(this, layout);
                if (newLayout) {
                    layout = newLayout;
                }
            }

            this.#plugins.forEach(plugin => {
                const newLayout = plugin.beforeRender?.call(this, layout!);
                if (newLayout) {
                    layout = newLayout;
                }
            });

            style.width = layout.width;
            style.height = layout.height;
            style['--dtable-row-height'] = `${layout.rowHeight}px`;
            style['--dtable-header-height'] = `${layout.headerHeight}px`;
            classNames.push(
                layout.className,
                isEmpty ? 'dtable-is-empty' : '',
                {
                    'dtable-has-scroll-y': layout.rowsHeightTotal > layout.rowsHeight,
                    'dtable-scrolled-down': layout.scrollTop > 0,
                    'dtable-scrolled-bottom': layout.scrollTop >= (layout.rowsHeightTotal - layout.rowsHeight),
                    'dtable-scrolled-right': layout.scrollLeft > 0,
                    'dtable-scrolled-end': layout.scrollLeft >= (layout.cols.center.totalWidth - layout.cols.center.width),
                },
            );

            if (layout.children) {
                children.push(...layout.children);
            }
            if (isEmpty && emptyTip) {
                delete style.height;
                children.push(
                    <div key="empty-tip" className="dtable-empty-tip">
                        <CustomContent content={emptyTip} generatorThis={this} generatorArgs={[layout]} />
                    </div>,
                );
            } else {
                children.push(
                    this.#renderHeader(layout),
                    this.#renderBody(layout),
                    this.#renderFooter(layout),
                );
                if (layout.scrollable) {
                    children.push(this.#renderScrollBars(layout));
                }
            }

            this.#plugins.forEach(plugin => {
                const result = plugin.onRender?.call(this, layout!);
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
                tabIndex={-1}
            >
                {children}
            </div>
        );
    }
}
