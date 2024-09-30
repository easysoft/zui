import type {JSX, ComponentChildren} from 'preact';
import type {IconType, HElementProps, ClassNameLike} from '@zui/core';

export interface ButtonProps extends HElementProps {
    type?: string; // primary, secondary ...
    btnType?: 'button' | 'submit' | 'reset' | (string & {});
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    onClick?: JSX.MouseEventHandler<HTMLAnchorElement>;
    url?: string;
    target?: string;
    disabled?: boolean;
    rounded?: boolean | string;
    active?: boolean;
    icon?: IconType;
    iconClass?: ClassNameLike;
    text?: ComponentChildren;
    textClass?: ClassNameLike;
    square?: boolean;
    trailingIcon?: IconType;
    trailingIconClass?: ClassNameLike;
    caret?: 'up' | 'down' | 'left' | 'right' | boolean;
    hint?: string;
    loading?: boolean;
    loadingIcon?: IconType;
    loadingText?: string;
}
