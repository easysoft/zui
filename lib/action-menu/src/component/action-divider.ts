import {classes} from '@zui/core';
import {Attributes, ComponentType, h as _h} from 'preact';
import {ActionDividerProps} from '../types/action-divider-props';

export function ActionDivider({
    component = 'div',
    className,
    children,
    style,
    attrs,
}: ActionDividerProps) {
    return _h(component as ComponentType, {
        className: classes(className),
        style,
        ...attrs,
    } as Attributes, children);
}
