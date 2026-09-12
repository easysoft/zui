import type {ComponentChildren, JSX} from 'preact';
import type {ClassNameLike, HElementProps} from '@zui/core';
import type {VirtualItem, Virtualizer} from '@tanstack/virtual-core';
import type {ElementVirtualizerOptions} from '../virtualizer';

/** The element virtualizer options, plus the ZUI list's rendering options. */
export type VirtualListProps = Omit<HElementProps, 'onChange'> & Omit<ElementVirtualizerOptions, 'getScrollElement'> & {
    /** Render the content of an item. The list owns its positioning and measurement wrapper. */
    renderItem: (item: VirtualItem, virtualizer: Virtualizer<HTMLElement, HTMLElement>) => ComponentChildren;
    /** Scroll viewport dimensions. Otherwise constrain the viewport with CSS. */
    width?: number | string;
    height?: number | string;
    /** Measure rendered items with ResizeObserver instead of fixing their estimated size. */
    dynamic?: boolean;
    itemClassName?: ClassNameLike;
    /** Item appearance; the list owns the positioning and main-axis size. */
    itemStyle?: JSX.CSSProperties | ((item: VirtualItem) => JSX.CSSProperties);
};
