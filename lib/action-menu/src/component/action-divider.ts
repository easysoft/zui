import {classes} from '@zui/browser-helpers/src/classes';
import {Attributes, ComponentType, h as _h} from 'preact';
import {ActionDividerProps} from '../types/action-divider-props';

export function ActionDivider({
    // type,
    component = 'div',
    className,
    children,
    attrs,
}: ActionDividerProps) {
    return _h(component as ComponentType, {
        className: classes(className),
        ...attrs,
    } as Attributes, children);
}
