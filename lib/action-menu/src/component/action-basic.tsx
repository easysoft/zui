import {classes} from '@zui/core';
import {Attributes, ComponentType, h as _h} from 'preact';
import {ActionBasicProps} from '../types';

export function ActionBasic({
    component = 'div',
    className,
    children,
    style,
    attrs,
}: ActionBasicProps) {
    return _h(component as ComponentType, {
        className: classes(className),
        style,
        ...attrs,
    } as Attributes, children);
}
