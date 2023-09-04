import {$, Icon, classes} from '@zui/core';
import {List} from './list';
import '@zui/css-icons/src/icons/caret.css';

import type {ComponentChild, ComponentChildren, ComponentType, JSX, RenderableProps} from 'preact';
import type {ClassNameLike} from '@zui/core/src/helpers';
import type {Item, ItemKey, ItemsSetting, NestedItem, NestedListProps, NestedListState} from '../types';

type MouseEventInfo = {
    index: number;
    item: NestedItem;
    element: HTMLElement;
    event: MouseEvent;
    key: ItemKey;
    parentKey?: ItemKey;
    hover?: boolean;
};

export class NestedList<P extends NestedListProps = NestedListProps, S extends NestedListState = NestedListState> extends List<P, S> {
    static defaultProps = {
        defaultNestedShow: false,
        level: 0,
        indent: 20,
    };

    protected _controlled: boolean;

    protected declare _hasIcons: boolean;

    protected declare _hasNestedItems: boolean;

    protected declare _hasCheckbox: boolean;

    constructor(props: P) {
        super(props);
        this._controlled = props.nestedShow !== undefined; // Controlled menu use state to store nested
        this.state.nestedShow = props.defaultNestedShow ?? {};
        this._handleClickNestedItem = this._handleClickNestedItem.bind(this);
        this._handleHoverNestedItem = this._handleHoverNestedItem.bind(this);
    }

    get isRoot() {
        return !this.props.level;
    }

    get nestedShow() {
        return (this._controlled ? this.props.nestedShow : this.state.nestedShow) ?? false;
    }

    isExpanded(key: ItemKey, parentKey: ItemKey | undefined) {
        const {nestedShow} = this;
        const name = `${parentKey !== undefined ? `${parentKey}:` : ''}${key}`;
        return typeof nestedShow === 'object' ? nestedShow[name] : nestedShow;
    }

    toggle(key: ItemKey, toggle?: boolean) {
        if (this._controlled) {
            return;
        }
        const nestedShow = this._getNestedMap();
        toggle = toggle ?? !nestedShow[key];
        if (toggle === !!nestedShow[key]) {
            return;
        }
        if (this.props.onToggle?.call(this, key, toggle) === false) {
            return;
        }
        nestedShow[key] = toggle;
        return this.setState({nestedShow});
    }

    toggleAll(show?: boolean) {
        if (this._controlled) {
            return;
        }
        let {nestedShow} = this;
        if (typeof nestedShow === 'boolean') {
            return this.setState({nestedShow: show ?? !nestedShow});
        }
        nestedShow = this._getNestedMap();
        const firstKey = this._items?.[0]?.key;
        show = show ?? (firstKey ? !nestedShow[firstKey] : true);
        this.setState({nestedShow: show});
    }

    protected _getNestedMap(): Record<ItemKey, boolean> {
        const {nestedShow} = this;
        if (typeof nestedShow === 'boolean') {
            return (this._items || []).reduce<Record<ItemKey, boolean>>((map, item, index) => {
                const {key = this.getKey(index)} = item;
                if (key !== undefined) {
                    map[key] = nestedShow;
                }
                return map;
            }, {});
        }
        return nestedShow;
    }

    protected _getClassName(props: RenderableProps<P>): ClassNameLike {
        return [super._getClassName(props), 'list-nested', props.level ? 'list-nested-sub' : 'list-nested-root'];
    }

    protected _renderNestedList(props: RenderableProps<P>, items: ItemsSetting, item: NestedItem): ComponentChildren {
        const {children, forwardRef, data, attrs, style, parentKey, nestedTrigger, level = 0, onHoverItem, ...shareProps} = props;
        const nestedListProps: NestedListProps = {
            ...shareProps,
            items,
            parentKey: parentKey ? `${parentKey}:${item.key}` : item.key,
            nestedShow: this.nestedShow,
            onClickItem: this._handleClickNestedItem,
            onHoverItem: (onHoverItem || nestedTrigger === 'hover') ? this._handleHoverNestedItem : undefined,
            ...item.listProps,
            level: level + 1,
        };
        const NestedListComponent = this.constructor as typeof NestedList;
        return <NestedListComponent key="nested" {...nestedListProps} />;
    }

    protected _getItem(props: RenderableProps<P>, item: NestedItem, index: number): NestedItem | undefined {
        const {items, ...itemProps} = super._getItem(props, item, index) as NestedItem;
        const {collapsedIcon, expandedIcon} = props;
        let toggleIcon: ComponentChild;
        let toggleClass: string | undefined;
        if (items) {
            const isExpanded = this.isExpanded(itemProps.key!, props.parentKey);
            toggleClass = `state is-${isExpanded ? 'expanded' : 'collapsed'}`;
            itemProps.className = [itemProps.className, 'has-nested-items', `is-nested-${isExpanded ? 'show' : 'hide'}`];
            if (isExpanded) {
                let {children = []} = itemProps;
                if (!Array.isArray(children)) {
                    children = [children];
                }
                (children as ComponentChild[]).push(this._renderNestedList(props, items, itemProps));
                itemProps.children = children;
                itemProps['zui-parent'] = props.parentKey;
                toggleIcon = expandedIcon ? <Icon icon={expandedIcon} /> : <span className="caret-down"></span>;
            } else {
                toggleIcon = collapsedIcon ? <Icon icon={collapsedIcon} /> : <span className="caret-right"></span>;
            }
        }
        if (toggleIcon) {
            itemProps.toggleIcon = <span className={classes('list-toggle-icon', toggleClass)}>{toggleIcon}</span>;
        }
        if (item.icon) {
            this._hasIcons = true;
        }
        if (item.items) {
            this._hasNestedItems = true;
        }
        if (item.checked !== undefined) {
            this._hasCheckbox = true;
        }
        return itemProps;
    }

    protected _renderItem(props: RenderableProps<P>, item: Item): ComponentChildren {
        if (item.type === 'item') {
            if (this._hasIcons && !item.icon) {
                item.icon = '_';
            }
            if (this._hasNestedItems && !item.toggleIcon) {
                item.toggleIcon = <span className="list-toggle-icon is-empty"><Icon icon={props.normalIcon} /></span>;
            }
        }
        return super._renderItem(props, item);
    }

    protected _getItemFromEvent(event: MouseEvent): MouseEventInfo | undefined {
        const info = super._getItemFromEvent(event);
        return info ? {...info, parentKey: this.props.parentKey} : undefined;
    }

    protected _toggleFromEvent(info: MouseEventInfo) {
        const {item, hover, event, key, parentKey} = info;
        const {nestedTrigger, nestedToggle} = this.props;
        if (!item.items || event.defaultPrevented || (nestedTrigger === 'hover' && hover === undefined) || (nestedTrigger === 'click' && event.type !== 'click') || (nestedToggle && !(event.target as HTMLElement).closest(nestedToggle)) || (event.target as HTMLElement).closest('.not-nested-toggle')) {
            return;
        }
        const toggle = typeof hover === 'boolean' ? hover : undefined;
        this.toggle(`${parentKey !== undefined ? `${parentKey}:` : ''}${key}`, toggle);
    }

    protected _handleClickNestedItem(info: {item: NestedItem, index: number, event: MouseEvent}) {
        this.props.onClickItem?.call(this, info);
        this._toggleFromEvent(info as MouseEventInfo);
    }

    protected _handleHoverNestedItem(info:  {hover: boolean, item: NestedItem, index: number, event: MouseEvent}) {
        this.props.onHoverItem?.call(this, info);
        this._toggleFromEvent(info as MouseEventInfo);
    }

    protected _handleClick(event: MouseEvent) {
        const info = this._getItemFromEvent(event);
        if (!info) {
            return;
        }
        this.props.onClickItem?.call(this, info);
        if (!this._controlled) {
            this._toggleFromEvent(info);
        }
    }

    protected _handleHover(event: MouseEvent) {
        const info = this._getItemFromEvent(event);
        if (!info) {
            return;
        }
        const hover = event.type === 'mouseenter';
        this.props.onHoverItem?.call(this, {hover, ...info});
        if (!this._controlled) {
            this._toggleFromEvent(info);
        }
    }

    protected _getProps(props: RenderableProps<P>): Record<string, unknown> {
        const {onHoverItem, nestedTrigger, style, level = 0, indent = 20} = props;
        const propsMap = super._getProps(props);
        if (onHoverItem || nestedTrigger === 'hover') {
            $.extend(propsMap, {
                onMouseEnter: this._handleHover,
                onMouseLeave: this._handleHover,
            });
        }
        propsMap['zui-level'] = level;
        propsMap.style = {...style, '--list-nested-indent': `${level * indent}px`, '--list-indent': `${indent}px`};
        return propsMap;
    }

    protected _beforeRender(props: RenderableProps<P>): void | RenderableProps<P> | undefined {
        this._hasIcons = false;
        this._hasNestedItems = !this.isRoot;
        return super._beforeRender(props);
    }

    protected _onRender(component: ComponentType | keyof JSX.IntrinsicElements, props: Record<string, unknown>, children: ComponentChildren): void | [component: ComponentType | keyof JSX.IntrinsicElements, props: Record<string, unknown>, children: ComponentChildren] {
        props.className = classes(
            props.className as ClassNameLike,
            this._hasIcons ? 'has-icons' : '',
            this._hasNestedItems ? 'has-nested-items' : 'no-nested-items',
            this._hasCheckbox ? 'has-checkbox' : '',
        );
        return [component, props, children];
    }
}
