import type {Cash, Selector, Comparator} from '@zui/core';

export interface ResponsiveNavHelperProps {
    watch?: ('window' | 'self' | 'parent' | 'container' | Selector)[];
    debounce?: number;
    more?: string | {html?: string; text?: string; icon?: string; caret?: boolean; attrs?: Record<string, string>};
    container?: Selector;
    items?: Comparator;
    ignoreItems?: Comparator;
    getContainerSize?: (container: HTMLElement) => number;
    getItemSize?: (item: HTMLElement) => number;
    onToMore?: (item: HTMLElement) => HTMLElement | string | void | false;
    onCreateMoreItem?: ($more: Cash) => void;
}
