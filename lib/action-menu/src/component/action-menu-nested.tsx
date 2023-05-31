import {ComponentChildren} from 'preact';
import type {ActionBasicProps, ActionMenuItemKey, ActionNestedItemProps, ActionMenuNestedItemOptions, ActionMenuNestedOptions, ActionMenuNestedState, ActionMenuOptions} from '../types';
import {ActionMenu} from './action-menu';
import {ActionNestedItem} from './action-nested-item';

export class ActionMenuNested<T extends ActionBasicProps = ActionMenuNestedItemOptions, P extends ActionMenuNestedOptions<T> = ActionMenuNestedOptions<T>> extends ActionMenu<T, P, ActionMenuNestedState> {
    static ItemComponents = {
        item: ActionNestedItem,
    };

    #keys = new Set<ActionMenuItemKey>();

    #controlled: boolean;

    constructor(props: P) {
        super(props);
        this.#controlled = props.nestedShow === undefined; // Controlled menu use state to store nested
        if (this.#controlled) {
            this.state = {nestedShow: props.defaultNestedShow ?? {}};
        }
    }

    get nestedTrigger() {
        return this.props.nestedTrigger;
    }

    beforeRender(): Omit<P, 'items'> & {items: T[]} {
        const allProps = super.beforeRender();
        const {nestedShow, nestedTrigger, defaultNestedShow, controlledMenu, ...props} = allProps;
        return props as Omit<P, 'items'> & {items: T[]};
    }

    renderNestedMenu(item: ActionNestedItemProps) {
        let {items} = item;
        if (!items) {
            return;
        }
        if (typeof items === 'function') {
            items = items(item, this as ActionMenuNested);
        }
        if (!items.length) {
            return;
        }
        const NestedMenuComponent = (this.constructor as typeof ActionMenuNested);
        const {name, controlledMenu, nestedShow, beforeDestroy, beforeRender, itemRender, activeClass, activeKey, onClickItem, afterRender, commonItemProps, activeIcon} = this.props;

        return (
            <NestedMenuComponent
                items={items}
                name={name}
                nestedShow={this.#controlled ? this.state.nestedShow : nestedShow}
                nestedTrigger={this.nestedTrigger}
                controlledMenu={(controlledMenu || this) as ActionMenuNested}
                commonItemProps={commonItemProps}
                onClickItem={onClickItem as ActionMenuOptions['onClickItem']}
                afterRender={afterRender as ActionMenuOptions['afterRender']}
                beforeRender={beforeRender as ActionMenuOptions['beforeRender']}
                beforeDestroy={beforeDestroy as ActionMenuOptions['beforeDestroy']}
                itemRender={itemRender as ActionMenuOptions['itemRender']}
                activeClass={activeClass}
                activeKey={activeKey}
                activeIcon={activeIcon}
            />
        );
    }

    isNestedItem(item: T): boolean {
        return (!item.type || item.type === 'item') && !!(item as ActionNestedItemProps).items;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    renderToggleIcon(_show: boolean, _item: ActionNestedItemProps): ComponentChildren | void {
    }

    getItemRenderProps(props: Omit<P, 'items'> & {items: T[]}, item: T, index: number): T {
        const itemProps = super.getItemRenderProps(props, item, index);
        if (!this.isNestedItem(itemProps)) {
            return itemProps;
        }
        const key = itemProps.key ?? index;
        this.#keys.add(key);
        const show = this.isNestedMenuShow(key);
        if (show) {
            itemProps.rootChildren = [
                itemProps.rootChildren,
                this.renderNestedMenu(item),
            ];
            itemProps.component = ActionNestedItem;
        }
        if (this.nestedTrigger === 'hover') {
            itemProps.rootAttrs = {
                ...itemProps.rootAttrs,
                onMouseEnter: this.#toggleMenuByEvent.bind(this, key, true),
                onMouseLeave: this.#toggleMenuByEvent.bind(this, key, false),
            };
        } else if (this.nestedTrigger === 'click') {
            const {onClick} = itemProps;
            itemProps.onClick = (event) => {
                this.#toggleMenuByEvent(key, undefined, event);
                (onClick as (event: MouseEvent) => void)?.(event);
            };
        }
        const toggleIcon = this.renderToggleIcon(show, itemProps);
        if (toggleIcon) {
            itemProps.children = [itemProps.children, toggleIcon];
        }

        itemProps.rootClass = [itemProps.rootClass, 'has-nested-menu', show ? 'show' : ''];
        return itemProps;
    }

    isNestedMenuShow(key: ActionMenuItemKey) {
        const nestedShow = this.#controlled ? this.state.nestedShow : this.props.nestedShow;
        if (nestedShow && typeof nestedShow === 'object') {
            return nestedShow[key];
        }
        return !!nestedShow;
    }

    toggleNestedMenu(key: ActionMenuItemKey, toggle?: boolean): boolean {
        const {controlledMenu} = this.props;
        if (controlledMenu) {
            return controlledMenu.toggleNestedMenu(key, toggle);
        }
        if (!this.#controlled) {
            return false;
        }
        let {nestedShow: nestedShowState = {}} = this.state;
        if (typeof nestedShowState === 'boolean') {
            if (nestedShowState === true) {
                nestedShowState = [...this.#keys.values()].reduce<Record<ActionMenuItemKey, boolean>>((map, k) => {
                    map[k] = true;
                    return map;
                }, {});
            } else {
                nestedShowState = {};
            }
        }
        if (toggle === undefined) {
            toggle = !nestedShowState[key];
        } else if (!!nestedShowState[key] === !!toggle) {
            return false;
        }
        if (toggle) {
            nestedShowState[key] = toggle;
        } else {
            delete nestedShowState[key];
        }
        this.setState({nestedShow: {...nestedShowState}});
        return true;
    }

    showNestedMenu(key: ActionMenuItemKey) {
        return this.toggleNestedMenu(key, true);
    }

    hideNestedMenu(key: ActionMenuItemKey) {
        return this.toggleNestedMenu(key, false);
    }

    showAllNestedMenu() {
        if (!this.#controlled) {
            return;
        }
        this.setState({nestedShow: true});
    }

    hideAllNestedMenu() {
        if (!this.#controlled) {
            return;
        }
        this.setState({nestedShow: false});
    }

    #toggleMenuByEvent = (key: ActionMenuItemKey, toggle: boolean | undefined, event: MouseEvent) => {
        this.toggleNestedMenu(key, toggle);
        event.preventDefault();
    };
}
