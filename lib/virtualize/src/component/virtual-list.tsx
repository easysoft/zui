import {createRef} from 'preact';
import {HElement, mergeProps, $} from '@zui/core';
import {VirtualItem} from './virtual-item';

import type {ComponentChildren, RenderableProps} from 'preact';
import type {VirtualItemProps, VirtualListProps, VirtualListState} from '../types';

export type VirtualItemInfo = {key: string; start: number; size: number; renderSize: number | undefined; item?: VirtualItemProps};

export class VirtualList extends HElement<VirtualListProps, VirtualListState> {
    static readonly NAME = 'VirtualList';

    static defaultProps: Partial<VirtualListProps> = {
        itemKey: 'id',
        defaultItemSize: 28,
    };

    protected declare _itemsInfo: VirtualItemInfo[];

    protected declare _scrollSize: number;

    protected declare _autoOverscan: number;

    protected _ref = createRef<HTMLElement>();

    protected _rob?: ResizeObserver;

    protected _sizeMap = new Map<string, number>();

    protected _layoutTimer = 0;

    protected _scrollTimer = 0;

    constructor(props: RenderableProps<VirtualListProps>) {
        super(props);
        const totalSize = props.horizontal ? props.width : props.height;
        this.state = {
            totalSize: typeof totalSize === 'number' && Number.isFinite(totalSize) ? Math.max(0, totalSize) : 0,
            scroll: 0,
            sizeMap: {},
        };
        this._handleScroll = this._handleScroll.bind(this);
    }

    componentDidMount(): void {
        super.componentDidMount();
        const element = this._ref.current;
        if (element) {
            if (typeof ResizeObserver !== 'undefined') {
                const rob = new ResizeObserver(this._tryUpdateLayout.bind(this));
                rob.observe(element);
                this._rob = rob;
            }
            if ($(element).css('position') === 'static') {
                this.setState({position: 'relative'});
            }
        }
        this._tryUpdateLayout();
    }

    componentDidUpdate(): void {
        this._tryUpdateLayout();
    }

    componentWillUnmount(): void {
        const rob = this._rob;
        if (rob) {
            rob.disconnect();
            this._rob = undefined;
        }
        cancelAnimationFrame(this._layoutTimer);
        cancelAnimationFrame(this._scrollTimer);
        this._layoutTimer = 0;
        this._scrollTimer = 0;
        super.componentWillUnmount();
    }

    protected _tryUpdateLayout(): void {
        if (this._layoutTimer) {
            cancelAnimationFrame(this._layoutTimer);
        }
        this._layoutTimer = requestAnimationFrame(() => {
            this.updateLayout();
            this._layoutTimer = 0;
        });
    }

    protected updateLayout(): void {
        const element = this._ref.current;
        if (!element) {
            return;
        }
        const {state} = this;
        const newState: Partial<VirtualListState> = {};
        const totalSize = this._getTotalSize();
        if (totalSize !== state.totalSize) {
            newState.totalSize = totalSize;
        }
        const {horizontal} = this.props;
        const {sizeMap: oldSizeMap} = this.state;
        const sizeMap: Record<string, number> = {};
        $(element).children('[z-key]').each((_i, ele) => {
            const key = ele.getAttribute('z-key');
            if (key === null) {
                return;
            }
            const size = horizontal ? ele.clientWidth : ele.clientHeight;
            if (size !== this._sizeMap.get(key) || size !== oldSizeMap[key]) {
                sizeMap[key] = size;
            }
        });
        const scroll = horizontal ? element.scrollLeft : element.scrollTop;
        if (scroll !== state.scroll) {
            newState.scroll = scroll;
        }
        if (Object.keys(sizeMap).length) {
            newState.sizeMap = {...oldSizeMap, ...sizeMap};
        }
        if (Object.keys(newState).length) {
            this.setState(newState);
        }
    }

    protected _handleScroll(): void {
        if (this._scrollTimer) {
            cancelAnimationFrame(this._scrollTimer);
        }
        this._scrollTimer = requestAnimationFrame(() => {
            const element = this._ref.current;
            if (!element) {
                this._scrollTimer = 0;
                return;
            }
            const {horizontal} = this.props;
            const scroll = horizontal ? element.scrollLeft : element.scrollTop;
            if (scroll !== this.state.scroll) {
                this.setState({scroll}, () => {
                    this.props.onScroll?.call(this, scroll);
                });
            }
        });
    }

    protected _getTotalSize(): number {
        const element = this._ref.current;
        return element ? (this.props.horizontal ? element.clientWidth : element.clientHeight) : 0;
    }

    protected _getProps(props: RenderableProps<VirtualListProps>): Record<string, unknown> {
        const {width, height} = props;

        return mergeProps(super._getProps(props), {
            style: {width, height, position: this.state.position, [props.horizontal ? 'overflowX' : 'overflowY']: 'auto'},
            ref: this._ref,
            onScroll: this._handleScroll,
        });
    }

    protected _getClassName(props: RenderableProps<VirtualListProps>) {
        return ['virtual-list', super._getClassName(props)];
    }

    protected _getItemCount(props: RenderableProps<VirtualListProps>) {
        const {itemCount, data} = props;
        if (typeof itemCount === 'number') {
            return Number.isFinite(itemCount) ? Math.max(0, Math.floor(itemCount)) : 0;
        }
        if (typeof itemCount === 'function') {
            const count = itemCount.call(this, data);
            return Number.isFinite(count) ? Math.max(0, Math.floor(count)) : 0;
        }
        if (Array.isArray(data)) {
            return data.length;
        }
        return 0;
    }

    protected _getItem(props: RenderableProps<VirtualListProps>, index: number): VirtualItemProps | false {
        const {getItem, data} = props;
        if (getItem) {
            return getItem.call(this, data, index);
        }
        if (Array.isArray(data)) {
            return data[index];
        }
        return false;
    }

    protected _getItemKey(props: RenderableProps<VirtualListProps>, index: number): string {
        const {itemKey, data} = props;
        if (typeof itemKey === 'function') {
            const key = itemKey.call(this, data, index);
            return key === undefined || key === null ? `${index}` : String(key);
        }
        if (Array.isArray(data) && typeof itemKey === 'string') {
            const key = data[index]?.[itemKey];
            if (key !== undefined && key !== null) {
                return String(key);
            }
        }
        return `${index}`;
    }

    protected _getItems(props: RenderableProps<VirtualListProps>) {
        const itemCount = this._getItemCount(props);
        const itemsInfo: VirtualItemInfo[] = [];
        const {totalSize, scroll, sizeMap} = this.state;
        const {itemSize, defaultItemSize = 0, data, horizontal, skipOverflow} = props;
        const padding = typeof props.padding === 'number' && Number.isFinite(props.padding) ? Math.max(0, props.padding) : 0;
        const gap = typeof props.gap === 'number' && Number.isFinite(props.gap) ? Math.max(0, props.gap) : 0;
        const itemDefaultSize = Number.isFinite(defaultItemSize) ? Math.max(0, defaultItemSize) : 0;
        let start = padding;
        const items: [index: number, item: VirtualItemProps][] = [];
        let autoOverscan = this._autoOverscan || Math.max(itemDefaultSize, 50);
        this._sizeMap.clear();
        const overscan = typeof props.overscan === 'number' && Number.isFinite(props.overscan) ? Math.max(0, props.overscan) : autoOverscan;
        for (let i = 0; i < itemCount; i++) {
            const itemRenderSize = typeof itemSize === 'function' ? itemSize.call(this, data, i) : itemSize;
            const renderSize = typeof itemRenderSize === 'number' && Number.isFinite(itemRenderSize) ? Math.max(0, itemRenderSize) : undefined;
            const key = this._getItemKey(props, i);
            const size = renderSize ?? sizeMap[key] ?? itemDefaultSize;
            if (size && start > padding) {
                start += gap;
            }
            const info: VirtualItemInfo = {key, start, size, renderSize};
            const isOverflow = start > (scroll + totalSize + overscan);
            if (start >= (scroll - overscan) && !isOverflow) {
                const item = this._getItem(props, i);
                if (item !== false) {
                    const itemProps: VirtualItemProps = mergeProps({
                        key,
                        style: horizontal ? {left: start, width: renderSize, top: padding, bottom: padding} : {top: start, height: renderSize, left: padding, right: padding},
                        'z-key': key,
                    }, item);
                    info.item = itemProps;
                    items.push([i, itemProps]);
                    this._sizeMap.set(key, size);
                }
            }
            autoOverscan = Math.max(size, autoOverscan);
            itemsInfo[i] = info;
            start += size;
            if (isOverflow && skipOverflow) {
                break;
            }
        }
        this._scrollSize = start + padding;
        this._itemsInfo = itemsInfo;
        this._autoOverscan = autoOverscan;
        return items;
    }

    protected _getChildren(props: RenderableProps<VirtualListProps>): ComponentChildren {
        const items = this._getItems(props);
        const {renderItem, data, horizontal} = props;
        const children = items.map(([index, item]) => {
            if (renderItem) {
                return renderItem.call(this, item, data, index);
            }
            return <VirtualItem {...item} />;
        });
        return [<div key="holder" style={{pointerEvents: 'none', [horizontal ? 'width' : 'height']: this._scrollSize}}></div>, children];
    }
}
