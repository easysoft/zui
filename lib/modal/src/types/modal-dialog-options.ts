import type {ComponentChildren, JSX} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {ToolbarOptions} from '@zui/toolbar';

export type ModalDialogOptions = {
    className?: ClassNameLike;
    contentClass?: ClassNameLike;
    bodyClass?: ClassNameLike;
    style?: JSX.CSSProperties;
    title?: ComponentChildren;
    header?: ComponentChildren;
    headerClass?: ClassNameLike;
    body?: ComponentChildren;
    actions?: ToolbarOptions;
    closeBtn?: boolean;
    children?: ComponentChildren;
    footer?: ComponentChildren;
    footerClass?: ClassNameLike;
    footerActions?: ToolbarOptions;
    afterRender?: (info: {firstRender: boolean}) => void;
    beforeDestroy?: () => void;
};
