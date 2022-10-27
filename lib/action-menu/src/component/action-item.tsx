import {classes} from '@zui/browser-helpers/src/classes';
import {Attributes, ComponentType, h as _h, isValidElement} from 'preact';
import {ActionItem as ActionItemProps} from '../types/action-item';

export function ActionItem({
    type,
    component = 'a',
    className,
    children,
    attrs,
    url,
    disabled,
    active,
    icon,
    title,
    target,
    trailingIcon,
    hint,
    ...otherAttrs
}: ActionItemProps) {
    const finalChildren = [
        isValidElement(icon) ? icon : typeof icon === 'string' ? <i class={`icon ${icon}`} /> : null,
        <span className="text">{title}</span>,
        isValidElement(trailingIcon) ? trailingIcon : typeof trailingIcon === 'string' ? <i class={`icon ${trailingIcon}`} /> : null,
        children,
    ];
    return _h(component as ComponentType, {
        className: classes(className, {disabled, active}),
        title: hint,
        [component === 'a' ? 'href' : 'data-url']: url,
        [component === 'a' ? 'target' : 'data-target']: url,
        ...otherAttrs,
        ...attrs,
    } as Attributes, ...finalChildren);
}
