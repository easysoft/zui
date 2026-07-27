import type {ClassNameLike, ComponentChildren, CustomContentType, HElementProps, IconType, JSX} from '@zui/core';
import type {ButtonProps} from '@zui/button';
import type {ToolbarSetting} from '@zui/toolbar';

export interface CollapsibleProps extends HElementProps {
    collapsed?: boolean;
    defaultCollapsed?: boolean;
    bordered?: boolean;
    disabled?: boolean;
    title?: CustomContentType;
    caption?: CustomContentType;
    header?: CustomContentType;
    actions?: ToolbarSetting;
    toggleOnClickHeader?: boolean;
    onlyHideOnCollapsed?: boolean;
    toggleButton?: Partial<ButtonProps>;
    headerClass?: ClassNameLike;
    content?: CustomContentType;
    contentClass?: ClassNameLike;
    contentStyle?: JSX.CSSProperties;
    children?: ComponentChildren;
    collapsedIcon?: IconType;
    expandedIcon?: IconType;
    onChange?: (collapsed: boolean) => void | false;
}
