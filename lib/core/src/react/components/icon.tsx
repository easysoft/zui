import {JSX, VNode, isValidElement} from 'preact';
import {ClassNameLike, classes} from '../../helpers/classes';

export type IconType = string | JSX.HTMLAttributes<HTMLElement> | VNode;

export type IconProps = {
    icon?: IconType;
    className?: ClassNameLike;
    [key: string]: unknown;
};

const createIconClass = (icon: string) => icon.startsWith('icon-') ? icon : `icon-${icon}`;

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
