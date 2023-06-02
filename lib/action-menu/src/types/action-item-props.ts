import type {ComponentChildren, VNode} from 'preact';
import type {ActionBasicProps} from './action-basic-props';

export interface ActionItemProps extends ActionBasicProps {
    url?: string;
    target?: string;
    disabled?: boolean;
    active?: boolean;
    icon?: string | VNode;
    checked?: boolean;
    text?: ComponentChildren;
    trailingIcon?: string | VNode;
    hint?: string;
}
