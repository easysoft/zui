import {ComponentChildren, JSX, VNode, isValidElement} from 'preact';
import {ClassNameLike, classes} from '@zui/browser-helpers/src/classes';
import '../style/menu-item.css';
import '../style/menu-has-icons.css';

export type MenuItemProps = {
    rootClass?: ClassNameLike;
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    url?: string;
    target?: string;
    disabled?: boolean;
    active?: boolean;
    icon?: string | VNode;
    title?: ComponentChildren;
    trailingIcon?: string | VNode;
    onClick?: JSX.MouseEventHandler<HTMLAnchorElement>;
    children?: ComponentChildren | (() => ComponentChildren);
    rootProps?: JSX.HTMLAttributes<HTMLLIElement>;
};

export function MenuItem(props: MenuItemProps) {
    const {
        rootClass,
        rootProps,
        className,
        url,
        target,
        disabled,
        active,
        icon,
        title,
        trailingIcon,
        children,
        ...others
    } = props;
    return (
        <li className={classes(rootClass)} {...rootProps}>
            <a
                className={classes('menu-item', className, {disabled, active, 'has-icon': icon})}
                href={url}
                target={target}
                {...others}
            >
                {isValidElement(icon) ? icon : typeof icon === 'string' ? <i class={`icon ${icon}`} /> : null}
                {title}
                {isValidElement(trailingIcon) ? trailingIcon : typeof trailingIcon === 'string' ? <i class={`icon ${trailingIcon}`} /> : null}
            </a>
            {children}
        </li>
    );
}
