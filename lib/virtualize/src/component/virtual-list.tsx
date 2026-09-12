import {HElement, classes} from '@zui/core';
import {createVirtualizer} from '../virtualizer';
import '@zui/utilities';
import '../style/virtual-list.css';

import type {ComponentChildren, JSX, RenderableProps} from 'preact';
import type {Virtualizer, ScrollToOptions, VirtualItem} from '@tanstack/virtual-core';
import type {VirtualListProps} from '../types';

/** Preact class adapter: core owns layout; this view owns the item elements. */
export class VirtualList extends HElement<VirtualListProps> {
    static readonly NAME = 'VirtualList';

    static customProps = ['onChange'];

    private _scrollElement: HTMLElement | null = null;

    private _mounted = false;

    private _layoutProps?: VirtualListProps;

    private _layoutRevision = 0;

    private _controller: ReturnType<typeof createVirtualizer<HTMLElement, HTMLElement>>;

    constructor(props: VirtualListProps) {
        super(props);
        this._controller = createVirtualizer(this._getOptions(props));
    }

    /** Access the stable TanStack instance for advanced operations. */
    get virtualizer(): Virtualizer<HTMLElement, HTMLElement> {
        return this._controller.instance;
    }

    private _getScrollElement = () => this._scrollElement;

    private _setScrollElement = (element: HTMLElement | null) => {
        this._scrollElement = element;
        if (this.props.forwardRef) {
            this.props.forwardRef.current = element;
        }
    };

    private _handleChange = (instance: Virtualizer<HTMLElement, HTMLElement>, sync: boolean) => {
        if (this._mounted) {
            this.forceUpdate();
        }
        this.props.onChange?.(instance, sync);
    };

    private _getOptions(props: VirtualListProps) {
        return {...props, getScrollElement: this._getScrollElement, onChange: this._handleChange};
    }

    componentDidMount(): void {
        this._mounted = true;
        this._controller.mount();
        this.forceUpdate();
        super.componentDidMount();
    }

    componentDidUpdate(previousProps: VirtualListProps): void {
        if (previousProps.forwardRef !== this.props.forwardRef) {
            if (previousProps.forwardRef) {
                previousProps.forwardRef.current = null;
            }
            if (this.props.forwardRef) {
                this.props.forwardRef.current = this._scrollElement;
            }
        }
        this._controller.update();
        // Preact calls ref(null) before detaching DOM. Prune after the commit.
        this.virtualizer.measureElement(null);
    }

    componentWillUnmount(): void {
        this._mounted = false;
        this._controller.destroy();
        super.componentWillUnmount();
    }

    scrollToIndex(index: number, options?: ScrollToOptions): void {
        this.virtualizer.scrollToIndex(index, options);
    }

    scrollToOffset(offset: number, options?: ScrollToOptions): void {
        this.virtualizer.scrollToOffset(offset, options);
    }

    /** Reset measurements after changing item content or its sizing rules. */
    measure(): void {
        this.virtualizer.measure();
    }

    protected _beforeRender(props: RenderableProps<VirtualListProps>): void {
        this._controller.setOptions(this._getOptions(props));
        const previousProps = this._layoutProps;
        this._layoutProps = props;
        if (previousProps && (
            !!previousProps.horizontal !== !!props.horizontal
            || !!previousProps.dynamic !== !!props.dynamic
            || previousProps.estimateSize !== props.estimateSize
        )) {
            // A new axis or sizing rule invalidates measured sizes. Remount the
            // wrappers so connected old items stop being observed and new ones
            // get measured, even when their data keys remain unchanged.
            this._layoutRevision++;
            this.virtualizer.measure();
        }
    }

    protected _getClassName(props: RenderableProps<VirtualListProps>) {
        return ['virtual-list relative overflow-auto', super._getClassName(props)];
    }

    protected _getProps(props: RenderableProps<VirtualListProps>): Record<string, unknown> {
        const result: Record<string, unknown> = {role: 'list', tabIndex: 0, ...super._getProps(props)};
        const style: JSX.CSSProperties = {...result.style as JSX.CSSProperties};
        if (props.width !== undefined) {
            style.width = props.width;
        }
        if (props.height !== undefined) {
            style.height = props.height;
        }
        if (props.horizontal && props.isRtl) {
            style.direction = 'rtl';
        }
        return {...result, style, ref: this._setScrollElement};
    }

    private _renderItem = (item: VirtualItem): ComponentChildren => {
        const {dynamic, itemClassName, itemStyle, renderItem} = this.props;
        const virtualizer = this.virtualizer;
        const {horizontal, lanes, scrollMargin, indexAttribute, count, isRtl} = virtualizer.options;
        const offset = item.start - scrollMargin;
        const style: JSX.CSSProperties = {
            ...(typeof itemStyle === 'function' ? itemStyle(item) : itemStyle),
            position: 'absolute',
            top: horizontal ? `${item.lane * 100 / lanes}%` : 0,
            left: isRtl ? undefined : horizontal ? 0 : `${item.lane * 100 / lanes}%`,
            right: isRtl ? horizontal ? 0 : `${item.lane * 100 / lanes}%` : undefined,
            transform: horizontal ? `translateX(${isRtl ? -offset : offset}px)` : `translateY(${offset}px)`,
            [horizontal ? 'height' : 'width']: `${100 / lanes}%`,
        };
        if (!dynamic) {
            style[horizontal ? 'width' : 'height'] = item.size;
        }
        return (
            <div
                key={`${this._layoutRevision}:${typeof item.key}:${item.key}`}
                className={classes('virtual-list-item', itemClassName)}
                style={style}
                role="listitem"
                aria-posinset={item.index + 1}
                aria-setsize={count}
                {...{[indexAttribute]: item.index}}
                ref={dynamic ? virtualizer.measureElement : undefined}
            >
                {renderItem(item, virtualizer)}
            </div>
        );
    };

    protected _getChildren(): ComponentChildren {
        const {virtualizer} = this;
        const {horizontal} = virtualizer.options;
        return (
            <div
                className={classes('virtual-list-content relative', horizontal ? 'h-full' : 'w-full')}
                style={{[horizontal ? 'width' : 'height']: virtualizer.getTotalSize()}}
                role="presentation"
            >
                {virtualizer.getVirtualItems().map(this._renderItem)}
            </div>
        );
    }
}
