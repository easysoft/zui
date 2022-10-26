import {classes} from '@zui/browser-helpers/src/classes';
import {Attributes, ComponentType, h as _h} from 'preact';
import {ActionDivider as ActionDividerProps} from '../types/action-divider';

export function ActionDivider({type, component = 'div', className, children, attrs, ...otherAttrs}: ActionDividerProps) {
    return _h(component as ComponentType, {
        className: classes(className),
        ...otherAttrs,
        ...attrs,
    } as Attributes, children);
}
