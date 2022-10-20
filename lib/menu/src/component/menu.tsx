import {ComponentChildren, Component, h as _h, createRef, isValidElement} from 'preact';
import {ClassNameLike, classes} from '@zui/browser-helpers/src/classes';
import {MenuItem, MenuItemProps} from './menu-item';
import {MenuDivider, MenuDividerProps} from './menu-divider';
import {MenuHeading, MenuHeadingProps} from './menu-heading';
import '@zui/css-icons/src/icons/caret.css';
import '../style/vars.css';
import '../style/menu.css';

export type MenuItemType = 'item' | 'heading' | 'divider';

export type MenuItemOptions = MenuItemProps & {type?: 'item', key?: string | number, items?: MenuListItem[]};

export type MenuHeadingOptions = MenuHeadingProps & {type: 'heading', key?: string | number};

export type MenuDividerOptions = MenuDividerProps & {type: 'divider', key?: string | number};

export type MenuListItem = MenuItemOptions | MenuHeadingOptions | MenuDividerOptions;

export type MenuProps = {
    className?: ClassNameLike;
    items?: MenuListItem[] | (() => MenuListItem[]);
    hasIcons?: boolean;
    children?: ComponentChildren;
    subMenuTrigger?: 'click' | 'hover' | 'always';
    onClickItem?: (info: {menu: Menu, item: MenuItemOptions, index: number, event: MouseEvent}) => void;
    onRenderSubMenu?: (info: {menu: Menu, item: MenuItemOptions, h: typeof _h}) => ComponentChildren;
    onRenderItem?: (info: {menu: Menu, item: MenuListItem, index: number, h: typeof _h}) => Partial<MenuListItem> | ComponentChildren | undefined;
    afterRender?: (info: {menu: Menu, firstRender: boolean}) => void;
    beforeDestroy?: (info: {menu: Menu}) => void;
};

export type MenuState = {
    shownSubs: Record<string, boolean>;
};

export class Menu extends Component<MenuProps, MenuState> {
    state: MenuState = {shownSubs: {}};

    #ref = createRef<HTMLMenuElement>();

    get $(): HTMLMenuElement | null {
        return this.#ref.current;
    }

    componentDidMount() {
        this.props.afterRender?.({menu: this, firstRender: true});
    }

    componentDidUpdate(): void {
        this.props.afterRender?.({menu: this, firstRender: false});
    }

    componentWillUnmount(): void {
        this.props.beforeDestroy?.({menu: this});
    }

    toggleSubMenu(key: string | number, toggle?: boolean): void {
        const {shownSubs} = this.state;
        if (toggle === undefined) {
            toggle = !shownSubs[key];
        }
        if (toggle) {
            shownSubs[key] = true;
        } else {
            delete shownSubs[key];
        }
        this.setState({shownSubs: {...shownSubs}});
    }

    clearAllSubMenu() {
        this.setState({shownSubs: {}});
    }

    isSubMenuShow(key: string | number) {
        return this.state.shownSubs[key];
    }

    #handleItemClick(item: MenuItemOptions, index: number, onClick: ((event: MouseEvent) => void) | undefined, event: MouseEvent) {
        if (onClick) {
            onClick.call(event.target, event);
        }
        const {onClickItem} = this.props;
        if (onClickItem) {
            onClickItem({menu: this, item, index, event});
        }
        if (this.props.subMenuTrigger === 'click' && item.items) {
            this.toggleSubMenu(item.key ?? index, true);
            event.stopPropagation();
            event.preventDefault();
        }
    }

    #renderSubMenu = ({item, h}: {item: MenuItemOptions, h: typeof _h}) => {
        const {onRenderSubMenu} = this.props;
        if (onRenderSubMenu) {
            return onRenderSubMenu({menu: this, item, h});
        }
        const {afterRender, onClickItem, subMenuTrigger, onRenderItem} = this.props;
        return (
            <Menu
                className="menu-sub"
                items={item.items}
                onRenderSubMenu={this.#renderSubMenu}
                afterRender={afterRender}
                onClickItem={onClickItem}
                onRenderItem={onRenderItem}
                subMenuTrigger={subMenuTrigger}
            />
        );
    };

    #handleItemMouseEnter = (key: string | number, event: MouseEvent) => {
        if (this.props.subMenuTrigger === 'hover') {
            this.toggleSubMenu(key, true);
            event.preventDefault();
        }
    };

    #handleItemMouseLeave = (key: string | number, event: MouseEvent) => {
        if (this.props.subMenuTrigger === 'hover') {
            this.toggleSubMenu(key, false);
            event.preventDefault();
        }
    };

    render() {
        const {
            className,
            items,
            hasIcons,
            children,
            onClickItem,
            subMenuTrigger,
            onRenderItem,
            onRenderSubMenu,
            afterRender,
            beforeDestroy,
            ...others
        } = this.props;

        const itemList = typeof items === 'function' ? items() : items;
        return (
            <menu class={classes(
                'menu',
                className,
                (hasIcons ?? itemList?.some(item => 'icon' in item)) ? 'has-icons' : '',
            )} {...others} ref={this.#ref}>
                {itemList?.map((item, index) => {
                    const listItem = {type: 'item', key: index, ...item} as MenuListItem;
                    if (onRenderItem) {
                        const customResult = onRenderItem({menu: this, item: listItem, index, h: _h});
                        if (customResult) {
                            if (isValidElement(customResult) || typeof customResult !== 'object') {
                                return customResult;
                            }
                            Object.assign(listItem, customResult);
                        }
                    }
                    const {key = index, type = 'item', ...props} = listItem;
                    if (type === 'heading') {
                        return <MenuHeading {...props} key={key} />;
                    }
                    if (type === 'divider') {
                        return <MenuDivider {...props} key={key} />;
                    }
                    const {onClick, items: subItems, ...otherOptions} = props as MenuItemOptions;
                    const itemProps: MenuItemOptions = {
                        ...otherOptions,
                        key,
                        onClick: this.#handleItemClick.bind(this, listItem as MenuItemOptions, index, onClick as ((event: MouseEvent) => void)),
                    };
                    const isSubMenuShown = subItems && (subMenuTrigger === 'always' || this.state.shownSubs[key]);
                    if (subItems) {
                        itemProps.rootClass = classes(itemProps.rootClass, 'has-sub', isSubMenuShown ? 'has-sub-shown' : '');
                        if (subMenuTrigger === 'hover') {
                            itemProps.rootProps = {
                                ...itemProps.rootProps,
                                onMouseEnter: this.#handleItemMouseEnter.bind(this, key),
                                onMouseLeave: this.#handleItemMouseLeave.bind(this, key),
                            };
                        }
                    }
                    return (
                        <MenuItem {...itemProps}>
                            {isSubMenuShown && this.#renderSubMenu({item: listItem as MenuItemOptions, h: _h})}
                        </MenuItem>
                    );
                })}
                {children}
            </menu>
        );
    }
}
