import {ActionMenuNested} from '../component/action-menu-nested';
import {ActionBasicProps} from './action-basic-props';
import {ActionMenuNestedItemOptions} from './action-menu-nested-item-options';
import {ActionMenuOptions} from './action-menu-options';

export interface ActionMenuNestedOptions<T extends ActionBasicProps = ActionMenuNestedItemOptions> extends ActionMenuOptions<T> {
    nestedTrigger?: 'click' | 'hover',
    nestedShow?: boolean | Record<string | number | symbol, boolean>,
    defaultNestedShow?: boolean | Record<string | number | symbol, boolean>,
    controlledMenu?: ActionMenuNested<T>
}
