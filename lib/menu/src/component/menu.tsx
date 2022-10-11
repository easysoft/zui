import {ComponentChildren, JSX} from 'preact';
import {ClassNameLike, classes} from '@zui/browser-helpers/src/classes';
import {MenuItem, MenuItemProps} from './menu-item';
import {MenuDivider, MenuDividerProps} from './menu-divider';
import {MenuHeading, MenuHeadingProps} from './menu-heading';
import '../style/vars.css';
import '../style/menu.css';

export type MenuItemOptions = MenuItemProps & {type?: 'item', key?: string};

export type MenuHeadingOptions = MenuHeadingProps & {type: 'heading', key?: string};

export type MenuDividerOptions = MenuDividerProps & {type: 'divider', key?: string};

export type MenuListItem = MenuItemOptions | MenuHeadingOptions | MenuDividerOptions;

export type MenuProps = {
    className?: ClassNameLike;
    items?: MenuListItem[];
    hasIcons?: boolean;
    children?: ComponentChildren;
    onClickItem?: (item: MenuItemOptions, index: number, event: MouseEvent) => void;
};

export function Menu({
    className,
    items,
    hasIcons,
    children,
    onClickItem,
    ...others
}: MenuProps) {
    if (hasIcons === undefined) {
        hasIcons = items?.some(item => 'icon' in item);
    }
    const handleItemClick = (item: MenuItemOptions, index: number, onClick: JSX.MouseEventHandler<HTMLAnchorElement> | undefined,  event: MouseEvent) => {
        if (onClick) {
            onClick.call(event.target, event);
        }
        if (onClickItem) {
            onClickItem(item, index, event);
        }
    };
    return (
        <menu class={classes(
            'menu',
            className,
            hasIcons ? 'has-icons' : '',
        )} {...others}>
            {items?.map((item, index) => {
                const {key, type, ...props} = item;
                if (type === 'heading') {
                    return <MenuHeading {...props} key={key ?? index} />;
                }
                if (type === 'divider') {
                    return <MenuDivider {...props} key={key ?? index} />;
                }
                const {onClick, ...itemProps} = props as MenuItemOptions;
                return (
                    <MenuItem
                        {...itemProps}
                        onClick={handleItemClick.bind(null, item, index, onClick)}
                        key={key ?? index}
                    />
                );
            })}
            {children}
        </menu>
    );
}
