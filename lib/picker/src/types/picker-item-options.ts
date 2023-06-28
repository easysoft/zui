import type {ComponentChildren, JSX, ComponentType} from 'preact';
import type {ClassNameLike, CustomContentType, IconType} from '@zui/core';

export interface PickerItemBasic {
    value: string;
    keys?: string;
    text?: CustomContentType<[PickerItemOptions]>;
    disabled?: boolean;
}

export interface PickerItemOptions extends PickerItemBasic {
    rootClass?: ClassNameLike;
    rootAttrs?: JSX.HTMLAttributes<HTMLLIElement>;
    rootStyle?: JSX.CSSProperties;
    rootChildren?: CustomContentType<[PickerItemOptions]>;
    component?: string | ComponentType;

    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    children?: ComponentChildren;
    content?: CustomContentType<[PickerItemOptions]>;
    attrs?: JSX.HTMLAttributes<HTMLLIElement>;

    icon?: IconType;
    trailingIcon?: IconType;
    hint?: string;
}
