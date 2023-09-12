import type {ComponentChildren} from 'preact';
import type {HElementProps} from '@zui/core';
import type {VirtualItemProps} from './virtual-item-props';

export interface VirtualListProps extends HElementProps {
    data: unknown;
    width?: number;
    height?: number;
    padding?: number;
    gap?: number;
    overscan?: number;
    horizontal?: boolean;
    initialScroll?: number;
    initialScrollIndex?: number;
    defaultItemSize?: number;
    itemKey?: string | ((data: unknown, index: number) => string);
    itemCount?: number | ((data: unknown) => number);
    itemSize?: number | ((data: unknown, index: number) => number | undefined);
    skipOverflow?: boolean;
    getItem?: (data: unknown, index: number) => VirtualItemProps | false;
    renderItem?: (props: VirtualItemProps, data: unknown, index: number) => ComponentChildren;
    onScroll?: (scroll: number) => void;
}
