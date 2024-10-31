import type {Selector, SizeSetting} from '@zui/core';

export interface SidebarOptions {
    parent?: Selector,
    side?: 'left' | 'right';
    width?: SizeSetting;
    maxWidth?: SizeSetting;
    minWidth?: SizeSetting;
    gutterWidth?: number;
    toggleBtn?: boolean;
    animation?: boolean | number;
    dragToResize?: boolean;
    dbclick?: 'toggle' | 'reset';
    preserve?: string;
    onToggle?: (collapsed: boolean) => void;
    onResize?: (width: number) => void;
}
