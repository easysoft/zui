import type {ComponentChildren, JSX} from 'preact';
import type {IconType, HElementProps} from '@zui/core';

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
    text?: ComponentChildren;
    square?: boolean;
    trailingIcon?: IconType;
    caret?: 'up' | 'down' | 'left' | 'right' | boolean;
    hint?: string;
    loading?: boolean;
    loadingIcon?: IconType;
    loadingText?: string;
}
