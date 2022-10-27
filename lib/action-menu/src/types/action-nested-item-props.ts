import type {ActionItemProps} from './action-item-props';

export interface ActionItemNestedProps extends ActionItemProps {
    items?: ActionItemNestedProps[]
}
