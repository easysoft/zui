import {classes} from '@zui/browser-helpers/src/classes';
import {Attributes, ComponentType, h as _h} from 'preact';
import {ActionHeading as ActionHeadingProps} from '../types/action-heading';

export function ActionHeading({type, component = 'div', className, title, attrs, children, ...otherAttrs}: ActionHeadingProps) {
    return _h(component as ComponentType, {
        className: classes(className),
        ...otherAttrs,
        ...attrs,
    } as Attributes, title, children);
}
