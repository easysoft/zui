import type {SizeSetting} from '@zui/core';

export interface SidebarOptions {
    side?: 'left' | 'right';
    width?: SizeSetting;
    maxWidth?: SizeSetting;
    minWidth?: SizeSetting;
    gutterWidth?: number;
    toggleBtn?: boolean;
    animation?: boolean;
    dragToResize?: boolean;
    dbclick?: 'toggle' | 'reset';
    preserve?: string;
    onToggle?: (collapsed: boolean) => void;
    onResize?: (width: number) => void;
}
