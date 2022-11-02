import type {ActionBasicProps, ActionMenuItemKey, ActionNestedItemProps, ActionMenuNestedItemOptions, ActionMenuNestedOptions, ActionMenuNestedState} from '../types';
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
        return (
            <ActionMenuNested
                items={items}
                nestedShow={this.#controlled ? this.state.nestedShow : this.props.nestedShow}
                nestedTrigger={this.props.nestedTrigger}
                controlledMenu={(this.props.controlledMenu || this) as ActionMenuNested}
            />
        );
    }

    getItemRenderProps(options: Omit<P, 'items'> & {items: T[]}, item: T, index: number): T {
        const props = super.getItemRenderProps(options, item, index);
        const type = props.type || 'item';
        const key = props.key ?? index;
        if (type === 'item' && (props as ActionNestedItemProps)?.items) {
            this.#keys.add(key);
            const show = this.isNestedMenuShow(key);
            if (show) {
                props.rootChildren = [
                    props.rootChildren,
                    this.renderNestedMenu(item),
                ];
                props.component = ActionNestedItem;
            }
            if (this.props.nestedTrigger === 'hover') {
                props.rootAttrs = {
                    ...props.rootAttrs,
                    onMouseEnter: this.#toggleMenuByEvent.bind(this, key, true),
                    onMouseLeave: this.#toggleMenuByEvent.bind(this, key, false),
                };
            } else if (this.props.nestedTrigger === 'click') {
                const {onClick} = props;
                props.onClick = (event) => {
                    this.#toggleMenuByEvent(key, undefined, event);
                    (onClick as (event: MouseEvent) => void)?.(event);
                };
            }
            props.rootClass = [props.rootClass, 'has-nested-items', show ? 'show' : ''];
        }
        return props;
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
