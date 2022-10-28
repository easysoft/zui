import {classes} from '@zui/browser-helpers/src/classes';
import {Attributes, ComponentType, h as _h} from 'preact';
import {ActionHeadingProps} from '../types/action-heading-props';

export function ActionHeading({
    component = 'div',
    className,
    text,
    attrs,
    children,
    style,
    onClick,
}: ActionHeadingProps) {
    return _h(component as ComponentType, {
        className: classes(className),
        style,
        onClick,
        ...attrs,
    } as Attributes, text, children);
}
