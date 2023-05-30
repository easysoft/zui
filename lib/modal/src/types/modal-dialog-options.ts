import type {ComponentChildren, JSX} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {ToolbarOptions} from '@zui/toolbar';

export type ModalDialogOptions = {
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    title?: ComponentChildren;
    header?: ComponentChildren;
    body?: ComponentChildren;
    actions?: ToolbarOptions;
    closeBtn?: boolean;
    children?: ComponentChildren;
    footer?: ComponentChildren;
    footerActions?: ToolbarOptions;
    afterRender?: (info: {firstRender: boolean}) => void;
    beforeDestroy?: () => void;
};
