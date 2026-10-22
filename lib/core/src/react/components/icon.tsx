import {cloneElement, isValidElement} from 'preact';
import {classes} from '../../helpers/classes';

import type {ClassNameLike} from '../../helpers/classes';
import type {IconClass, IconProps} from '../types';

const createIconClass = (icon: string) => icon.startsWith('icon-') ? icon : `icon-${icon}`;

/** Resolve CSS descriptors and caller-provided font icon names for native controls. */
export function getIconClass(icon: string | IconClass, className?: ClassNameLike) {
    const {icon: name, className: iconClass} = typeof icon === 'string' ? {icon} : icon;
    return classes('icon', className, iconClass as ClassNameLike, name ? createIconClass(name) : '');
}

/**
 * Component for rendering icons.
 *
 * @param props Icon properties.
 * @returns Icon element.
 */
export function Icon(props: IconProps) {
    const {icon, className, ...others} = props;
    if (!icon) {
        return null;
    }
    if (isValidElement(icon)) {
        const {class: iconClass, ...iconProps} = icon.props as Record<string, unknown>;
        const style = typeof others.style === 'object' && typeof iconProps.style === 'object'
            ? {...others.style, ...iconProps.style}
            : iconProps.style ?? others.style;
        const clonedIcon = cloneElement(icon, {
            ...others,
            ...iconProps,
            className: classes('icon', iconClass as ClassNameLike, iconProps.className as ClassNameLike, className),
            style,
        });
        delete (clonedIcon.props as Record<string, unknown>).class;
        return clonedIcon;
    }
    if (typeof icon === 'object') {
        const {className: _iconClass, icon: _finalIcon, ...iconOthers} = icon;
        Object.assign(others, iconOthers);
    }
    return <i className={getIconClass(icon, className)} {...others} />;
}
