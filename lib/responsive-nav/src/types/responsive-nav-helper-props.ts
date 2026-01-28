import type {Cash, Selector, Comparator} from '@zui/core';
import type {Item} from '@zui/common-list';
import type {Dropdown, DropdownOptions} from '@zui/dropdown';

export interface ResponsiveNavHelperProps {
    watch?: ('window' | 'self' | 'parent' | 'container' | Selector)[];
    debounce?: number;
    more?: string | {html?: string; text?: string; icon?: string; caret?: boolean; attrs?: Record<string, string>};
    container?: Selector;
    items?: Comparator;
    ignoreItems?: Comparator;
    moreDropdown?: Partial<DropdownOptions>;
    getContainerSize?: (container: HTMLElement) => number;
    getItemSize?: (item: HTMLElement) => number;
    itemCreator?: (item: HTMLElement) => Item;
    onCreateMore?: ($more: Cash, dropdown: Dropdown) => void;
}
