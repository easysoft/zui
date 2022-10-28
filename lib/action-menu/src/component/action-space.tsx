import {classes} from '@zui/browser-helpers/src/classes';
import {Attributes, ComponentType, h as _h} from 'preact';
import {ActionSpaceProps} from '../types/action-space-props';

export function ActionSpace({
    component = 'div',
    className,
    style,
    space,
    flex,
    attrs,
    onClick,
    children,
}: ActionSpaceProps) {
    return _h(component as ComponentType, {
        className: classes(className),
        style: {width: space, height: space, flex, ...style},
        onClick,
        ...attrs,
    } as Attributes, children);
}
