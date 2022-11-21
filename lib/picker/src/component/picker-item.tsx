import {classes} from '@zui/browser-helpers/src/classes';
import {Attributes, ComponentType, h as _h} from 'preact';
import {PickerItemProps} from '../types/picker-item-props';

export function PickerItem({
    component = 'div',
    icon,
    disabled,
    value,
    text,
    // keys,
    className,
}: PickerItemProps) {
    const finalChildren = [
        typeof icon === 'string' ? <i class={`icon ${icon}`} /> : icon,
        <span className="text">{text}</span>,
    ];
    const select = (params = '') => {
        console.log('params', params);
    };
    return _h(component as ComponentType, {
        className: classes(className, {disabled}),
        select: select(value),
    } as Attributes, ...finalChildren);
}