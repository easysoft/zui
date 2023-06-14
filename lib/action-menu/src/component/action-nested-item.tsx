import {ActionNestedItemProps} from '../types/action-nested-item-props';
import {ActionItem} from './action-item';

export function ActionNestedItem({
    items,
    show,
    level,
    ...others
}: ActionNestedItemProps) {
    return <ActionItem {...others} />;
}
