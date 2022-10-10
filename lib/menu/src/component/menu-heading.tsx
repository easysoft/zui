import {ComponentChildren} from 'preact';
import {ClassNameLike, classes} from '@zui/browser-helpers/src/classes';
import '../style/menu-heading.css';

export type MenuHeadingProps = {
    className?: ClassNameLike;
    title?: ComponentChildren;
    children?: ComponentChildren;
};

export function MenuHeading({className, title, children, ...others}: MenuHeadingProps) {
    return (
        <li class={classes('menu-heading', className)} {...others}>{title}{children}</li>
    );
}
