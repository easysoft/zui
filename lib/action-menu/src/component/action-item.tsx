import {Attributes, ComponentType, h as _h} from 'preact';
import {classes, CustomContent, Icon} from '@zui/core';
import {ActionItemProps} from '../types/action-item-props';

export function ActionItem({
    type,
    component = 'a',
    className,
    children,
    content,
    attrs,
    url,
    disabled,
    active,
    icon,
    text,
    target,
    trailingIcon,
    hint,
    checked,
    onClick,
    data,
    ...others
}: ActionItemProps) {
    const finalChildren = [
        typeof checked === 'boolean' ? (
            <div class={`checkbox-primary${checked ? ' checked' : ''}`}>
                <label />
            </div>
        ) : null,
        <Icon icon={icon} />,
        text ? <span className="text">{text}</span> : null,
        <CustomContent content={content} />,
        children,
        <Icon icon={trailingIcon} />,
    ];
    return _h(component as ComponentType, {
        className: classes(className, {disabled, active}),
        title: hint,
        [component === 'a' ? 'href' : 'data-url']: disabled ? undefined : url,
        [component === 'a' ? 'target' : 'data-target']: disabled ? undefined : target,
        onClick,
        ...others,
        ...attrs,
    } as Attributes, ...finalChildren);
}
