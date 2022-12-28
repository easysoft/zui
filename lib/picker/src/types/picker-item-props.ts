import type {ComponentChildren, VNode, JSX, ComponentType} from 'preact';
import type {ClassNameLike} from '@zui/browser-helpers/src/classes';

export interface PickerItemBasic {
    value: string;
    keys?: string;
    text?: ComponentChildren;
    disabled?: boolean;
}

export interface PickerItemProps extends PickerItemBasic {
    rootClass?: ClassNameLike;
    rootAttrs?: JSX.HTMLAttributes<HTMLLIElement>;
    rootStyle?: JSX.CSSProperties;
    rootChildren?: ComponentChildren | (() => ComponentChildren);
    component?: string | ComponentType;
    icon?: string | VNode;
    trailingIcon?: string | VNode;
    hint?: string;
    className?: ClassNameLike;
    attrs?: JSX.HTMLAttributes<HTMLLIElement>;
    style?: JSX.CSSProperties;
    children?: ComponentChildren | (() => ComponentChildren);
}
