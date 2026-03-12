import type {Cash, Selector, Comparator} from '@zui/core';
import type {Item} from '@zui/common-list';
import type {Dropdown, DropdownOptions} from '@zui/dropdown';

export interface ResponsiveNavHelperProps {
    watch?: ('window' | 'self' | 'parent' | 'container' | Selector)[];
    debounce?: number;
    more?: string | {html?: string; text?: string; icon?: string; caret?: boolean; attrs?: Record<string, string>};
    showSelected?: boolean | Comparator;
    container?: Selector;
    items?: Comparator;
    ignoreItems?: Comparator;
    fixedItems?: Comparator;
    moreItems?: Comparator;
    moreDropdown?: Partial<DropdownOptions>;
    scrollbarDetect?: boolean | (() => boolean);
    scrollbarSize?: number;
    getContainerSize?: (container: HTMLElement) => number;
    getItemSize?: (item: HTMLElement) => number;
    getMoreItem?: (item: HTMLElement) => Item | false | void;
    getMoreItems?: (items: HTMLElement[]) => Item[];
    onCreateMore?: ($more: Cash, dropdown: Dropdown) => void;
}
