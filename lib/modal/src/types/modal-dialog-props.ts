import type {ComponentChildren, JSX} from 'preact';
import type {ClassNameLike} from '@zui/browser-helpers';
import type {ToolbarOptions} from '@zui/toolbar';

export type ModalDialogProps = {
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    title?: ComponentChildren;
    header?: ComponentChildren;
    actions?: ToolbarOptions;
    closeBtn?: boolean;
    children?: ComponentChildren;
    footer?: ComponentChildren;
    footerActions?: ToolbarOptions;
};
