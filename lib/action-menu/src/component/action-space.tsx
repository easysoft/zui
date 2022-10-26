import {classes} from '@zui/browser-helpers/src/classes';
import {Attributes, ComponentType, h as _h} from 'preact';
import {ActionSpace as ActionSpaceProps} from '../types/action-space';

export function ActionSpace({type, component = 'div', className, style, space, flex, attrs, children, ...otherAttrs}: ActionSpaceProps) {
    return _h(component as ComponentType, {
        className: classes(className),
        style: {width: space, height: space, flex, ...style},
        ...otherAttrs,
        ...attrs,
    } as Attributes, children);
}
