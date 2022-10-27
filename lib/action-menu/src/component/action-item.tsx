import {classes} from '@zui/browser-helpers/src/classes';
import {Attributes, ComponentType, h as _h, isValidElement} from 'preact';
import {ActionItem as ActionItemProps} from '../types/action-item';

export function ActionItem({
    // type,
    component = 'a',
    className,
    children,
    attrs,
    url,
    disabled,
    active,
    icon,
    text,
    target,
    trailingIcon,
    hint,
}: ActionItemProps) {
    const finalChildren = [
        isValidElement(icon) ? icon : typeof icon === 'string' ? <i class={`icon ${icon}`} /> : null,
        <span className="text">{text}</span>,
        children,
        isValidElement(trailingIcon) ? trailingIcon : typeof trailingIcon === 'string' ? <i class={`icon ${trailingIcon}`} /> : null,
    ];
    return _h(component as ComponentType, {
        className: classes(className, {disabled, active}),
        title: hint,
        [component === 'a' ? 'href' : 'data-url']: url,
        [component === 'a' ? 'target' : 'data-target']: target,
        ...attrs,
    } as Attributes, ...finalChildren);
}
