import {ActionBasicProps} from './action-basic-props';
import type {ActionItemProps} from './action-item-props';
import type {ActionMenuItemOptions} from './action-menu-item-options';

export interface ActionNestedItemProps<T extends ActionBasicProps = ActionMenuItemOptions> extends ActionItemProps {
    items?: T[]
}
