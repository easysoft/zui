import type {ComponentChildren} from 'preact';
import type {ActionMenuItem} from './action-menu-item';

export interface ActionHeading extends ActionMenuItem {
    type: 'heading',
    title?: ComponentChildren;
}
