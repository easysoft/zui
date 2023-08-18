import {isValidElement} from 'preact';
import {classes} from '../../helpers/classes';

import type {ClassNameLike} from '../../helpers/classes';
import type {IconProps} from '../types';

const createIconClass = (icon: string) => icon.startsWith('icon-') ? icon : `icon-${icon}`;

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
        return icon;
    }
    const classList: ClassNameLike[] = ['icon', className as string];
    if (typeof icon === 'string') {
        classList.push(createIconClass(icon));
    } else if (typeof icon === 'object') {
        const {className: iconClass, icon: finalIcon, ...iconOthers} = icon;
        classList.push(iconClass as string, finalIcon ? createIconClass(finalIcon as string) : '');
        Object.assign(others, iconOthers);
    }
    return <i className={classes(classList)} {...others} />;
}
