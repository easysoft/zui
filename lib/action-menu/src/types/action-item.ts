import type {ComponentChildren, VNode} from 'preact';
import type {ActionMenuItem} from './action-menu-item';

export interface ActionItem extends ActionMenuItem {
    url?: string;
    target?: string;
    disabled?: boolean;
    active?: boolean;
    icon?: string | VNode;
    text?: ComponentChildren;
    trailingIcon?: string | VNode;
    hint?: string;
}
