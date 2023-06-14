import {JSX, VNode, isValidElement} from 'preact';
import {ClassNameLike, classes} from '../../helpers/classes';

export type IconType = string | JSX.HTMLAttributes<HTMLElement> | VNode;

export type IconProps = {
    icon?: IconType;
    className?: ClassNameLike;
    [key: string]: unknown;
};

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
        classList.push(icon.startsWith('icon-') ? icon : `icon-${icon}`);
    } else if (typeof icon === 'object') {
        classList.push((icon as JSX.HTMLAttributes<HTMLElement>).className as string);
        Object.assign(others, icon);
    }
    return <i className={classes(classList)} {...others} />;
}
