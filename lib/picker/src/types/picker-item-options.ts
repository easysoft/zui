import type {ComponentChildren, JSX, ComponentType} from 'preact';
import type {ClassNameLike, IconType} from '@zui/core';

export interface PickerItemBasic {
    value: string;
    keys?: string;
    text?: ComponentChildren;
    disabled?: boolean;
}

export interface PickerItemOptions extends PickerItemBasic {
    rootClass?: ClassNameLike;
    rootAttrs?: JSX.HTMLAttributes<HTMLLIElement>;
    rootStyle?: JSX.CSSProperties;
    rootChildren?: ComponentChildren | (() => ComponentChildren);
    component?: string | ComponentType;

    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    children?: ComponentChildren | (() => ComponentChildren);
    attrs?: JSX.HTMLAttributes<HTMLLIElement>;

    icon?: IconType;
    trailingIcon?: IconType;
    hint?: string;
}
