import {classes} from '@zui/browser-helpers/src/classes';
import {Attributes, ComponentType, h as _h} from 'preact';
import {ActionHeadingProps} from '../types/action-heading-props';

export function ActionHeading({
    // type,
    component = 'div',
    className,
    text,
    attrs,
    children,
}: ActionHeadingProps) {
    return _h(component as ComponentType, {
        className: classes(className),
        ...attrs,
    } as Attributes, text, children);
}
