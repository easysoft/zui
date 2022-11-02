import type {ActionMenuNested} from '../component/action-menu-nested';
import type {ActionBasicProps} from './action-basic-props';
import type {ActionItemProps} from './action-item-props';
import type {ActionMenuNestedItemOptions} from './action-menu-nested-item-options';

export interface ActionNestedItemProps<T extends ActionBasicProps = ActionMenuNestedItemOptions> extends ActionItemProps {
    items?: T[] | ((currentItem: ActionNestedItemProps<T>, menu: ActionMenuNested<T>) => T[])
}
