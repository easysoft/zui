import {ActionNestedItemProps} from '../types/action-nested-item-props';
import {ActionItem} from './action-item';

export function ActionNestedItem({
    ...others
}: ActionNestedItemProps) {
    return <ActionItem {...others} />;
}
