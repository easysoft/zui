import type {JSX} from 'preact';
import type {ClassNameLike, CustomContentType} from '@zui/core';

export type PopoverPanelOptions = {
    id?: string;
    popup?: boolean;
    onlyInner?: boolean;
    title?: CustomContentType;
    titleClass?: string;
    headingClass?: string;
    content?: CustomContentType;
    contentClass?: string;
    style?: JSX.CSSProperties;
    className?: ClassNameLike;
    closeBtn?: boolean;
    arrow?: boolean | string;
    arrowStyle?: JSX.CSSProperties;
};
