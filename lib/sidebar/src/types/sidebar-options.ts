import type {Selector, SizeSetting} from '@zui/core';

export interface SidebarOptions {
    parent?: Selector;
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
    /** 共享宽度的分组标识；相同非空标识的实例同步宽度。 */
    shareWidth?: string;
    onToggle?: (collapsed: boolean) => void;
    onResize?: (width: number) => void;
}
