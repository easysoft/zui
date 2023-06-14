import type {ComponentChildren} from 'preact';
import type {IconType} from '@zui/core';
import type {ActionBasicProps} from './action-basic-props';

export interface ActionItemProps extends ActionBasicProps {
    url?: string;
    target?: string;
    disabled?: boolean;
    active?: boolean;
    icon?: IconType;
    checked?: boolean;
    text?: ComponentChildren;
    trailingIcon?: IconType;
    hint?: string;
}
