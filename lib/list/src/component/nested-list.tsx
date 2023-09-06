import {Icon, classes} from '@zui/core';
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
    /**
     * Access to static properties via this.constructor.
     *
     * @see https://github.com/Microsoft/TypeScript/issues/3841#issuecomment-337560146
     */
    declare ['constructor']: typeof NestedList;

    static defaultProps = {
        defaultNestedShow: false,
        level: 0,
        indent: 20,
    };

    static inheritNestedProps = ['component', 'name', 'itemName', 'keyName', 'indent', 'hover', 'divider', 'multiline', 'toggleIcons', 'nestedToggle', 'itemRender', 'onToggle'];

    protected _controlled: boolean;

    protected declare _hasIcons: boolean;

    protected declare _hasNestedItems: boolean;

    protected declare _hasCheckbox: boolean;

    protected declare _hoverTimer: number;

    constructor(props: P) {
        super(props);
        this._controlled = props.nestedShow !== undefined; // Controlled menu use state to store nested
        this.state.nestedShow = props.defaultNestedShow ?? {};
        this._handleClickNestedItem = this._handleClickNestedItem.bind(this);
        this._handleHoverNestedItem = this._handleHoverNestedItem.bind(this);
        this._handleHover = this._handleHover.bind(this);
        this._handleClick = this._handleClick.bind(this);
    }

    get isRoot() {
        return !this.props.level;
    }

    get nestedShow() {
        return (this._controlled ? this.props.nestedShow : this.state.nestedShow) ?? false;
    }

    isExpanded(key: ItemKey, parentKey: ItemKey | undefined, defaultExpanded?: boolean) {
        const {nestedShow} = this;
        const name = `${parentKey !== undefined ? `${parentKey}:` : ''}${key}`;
        return !!(typeof nestedShow === 'object' ? (nestedShow[name] ?? defaultExpanded) : nestedShow);
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

    protected _getNestedProps(props: RenderableProps<P>, items: ItemsSetting, item: NestedItem): NestedListProps {
        const {
            className,
            class: className2,
            parentKey,
            nestedTrigger,
            level = 0,
            onHoverItem,
        } = props;
        return {
            ...(this.constructor.inheritNestedProps.reduce((propMap, key) => {
                propMap[key as keyof P] = props[key as keyof P];
                return propMap;
            }, {} as P)),
            items,
            parentKey: parentKey ? `${parentKey}:${item.key}` : item.key,
            nestedShow: this.nestedShow,
            onClickItem: this._handleClickNestedItem,
            onHoverItem: (onHoverItem || nestedTrigger === 'hover') ? this._handleHoverNestedItem : undefined,
            ...item.listProps,
            className: classes(className, className2, item.listProps?.className),
            level: level + 1,
        };
    }

    protected _renderNestedList(props: RenderableProps<P>, items: ItemsSetting, item: NestedItem): ComponentChildren {
        const nestedListProps = this._getNestedProps(props, items, item);
        const NestedListComponent = this.constructor as typeof NestedList;
        return <NestedListComponent key="nested" {...nestedListProps} />;
    }

    protected _renderNestedToggle(props: RenderableProps<P>, isExpanded: boolean | null) {
        let toggleIcon: ComponentChild;
        let toggleClass = '';
        const {toggleIcons = {}} = props;
        if (typeof isExpanded === 'boolean') {
            toggleIcon = isExpanded ? (toggleIcons.expanded || <span className="caret-down"></span>) : (toggleIcons.collapsed || <span className="caret-right"></span>);
            toggleClass = `state is-${isExpanded ? 'expanded' : 'collapsed'}`;
        } else {
            toggleIcon = <Icon icon={toggleIcons.normal} />;
            toggleClass = 'is-empty';
        }
        return <span className={classes('list-toggle-icon', toggleClass)}>{toggleIcon}</span>;
    }

    protected _getItem(props: RenderableProps<P>, item: NestedItem, index: number): NestedItem | undefined {
        const {items, ...itemProps} = super._getItem(props, item, index) as NestedItem;
        if (items) {
            const isExpanded = itemProps.expanded ?? this.isExpanded(itemProps.key!, props.parentKey);
            itemProps.rootClass = [itemProps.rootClass, 'is-nested', `is-nested-${isExpanded ? 'show' : 'hide'}`];
            if (isExpanded) {
                let {children = []} = itemProps;
                if (!Array.isArray(children)) {
                    children = [children];
                }
                (children as ComponentChild[]).push(this._renderNestedList(props, items, itemProps));
                itemProps.children = children;
                itemProps['zui-parent'] = props.parentKey;
            }
            itemProps.expanded = isExpanded;
            itemProps.toggleIcon = this._renderNestedToggle(props, isExpanded);
            itemProps.onMouseEnter = this._handleHover;
            itemProps.onMouseLeave = this._handleHover;
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
                item.toggleIcon = this._renderNestedToggle(props, null);
            }
        }
        return super._renderItem(props, item);
    }

    protected _getItemFromEvent(event: MouseEvent): MouseEventInfo | undefined {
        const info = super._getItemFromEvent(event) as MouseEventInfo;
        if (event.type === 'mouseenter' || event.type === 'mouseleave') {
            info.hover = event.type === 'mouseenter';
        }
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
        if (this._hoverTimer) {
            clearTimeout(this._hoverTimer);
        }
        this._hoverTimer = window.setTimeout(() => {
            this._hoverTimer = 0;
            this.props.onHoverItem?.call(this, info as {hover: boolean, item: NestedItem, index: number, event: MouseEvent});
            if (!this._controlled && this.props.nestedTrigger === 'hover') {
                this._toggleFromEvent(info);
            }
        }, 100);
    }

    protected _getProps(props: RenderableProps<P>): Record<string, unknown> {
        const propsMap = super._getProps(props);
        const {style, level = 0, indent = 20} = props;
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
