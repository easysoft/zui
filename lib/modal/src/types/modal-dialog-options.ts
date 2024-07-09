import type {ComponentChildren, JSX} from 'preact';
import type {ClassNameLike, CustomContentType} from '@zui/core';
import type {ToolbarOptions} from '@zui/toolbar';

export type ModalDialogOptions = {
    className?: ClassNameLike;
    contentClass?: ClassNameLike;
    bodyClass?: ClassNameLike;
    style?: JSX.CSSProperties;
    title?: ComponentChildren;
    header?: CustomContentType;
    headerClass?: ClassNameLike;
    body?: CustomContentType;
    actions?: ToolbarOptions;
    closeBtn?: boolean;
    children?: ComponentChildren;
    footer?: CustomContentType;
    footerClass?: ClassNameLike;
    footerActions?: ToolbarOptions;
    afterRender?: (info: {firstRender: boolean}) => void;
    beforeDestroy?: () => void;
};
