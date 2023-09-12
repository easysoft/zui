import type {ComponentChildren} from 'preact';
import type {HElementProps} from '@zui/core';
import type {VirtualItemProps} from './virtual-item-props';

export interface VirtualGridProps extends HElementProps {
    items: unknown;
    width?: number;
    height?: number;
    initialScrollLeft?: number;
    initialScrollTop?: number;
    getItemCount?: (items: unknown) => number;
    getItemSize?: (items: unknown, index: number) => {width: number, height: number} | undefined;
    getItem?: (items: unknown, index: number) => VirtualItemProps;
    renderItem?: (props: VirtualItemProps, items: unknown, index: number) => ComponentChildren;
    onScroll?: (scrollLeft: number, scrollTop: number) => void;
}
