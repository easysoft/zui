import {Icon, classes, mergeProps} from '@zui/core';
import {List} from './list';
import '@zui/css-icons/src/icons/caret.css';

import type {ComponentChild, ComponentChildren, RenderableProps} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {Item, ItemKey} from '@zui/common-list';
import type {ListItemsSetting, NestedItem, NestedListProps, NestedListState} from '../types';

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
    static defaultProps: Partial<NestedListProps> = {
        defaultNestedShow: false,
        level: 0,
        indent: 20,
    };

    static inheritNestedProps = ['component', 'name', 'itemName', 'keyName', 'indent', 'hover', 'divider', 'multiline', 'toggleIcons', 'nestedToggle', 'itemRender', 'beforeRenderItem', 'onToggle', 'checkbox', 'getItem'];

    protected _controlled: boolean;

    protected declare _hasNestedItems: boolean;

    protected declare _hoverTimer: number;

    constructor(props: P) {
        super(props);
        this._controlled = props.nestedShow !== undefined; // Controlled menu use state to store nested
        (this.state as S).nestedShow = props.defaultNestedShow ?? {};
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
        return [super._getClassName(props), 'is-nested', props.level ? 'is-nested-sub' : 'is-nested-root'];
    }

    protected _getNestedProps(props: RenderableProps<P>, items: ListItemsSetting, item: NestedItem, expanded: boolean): NestedListProps {
        const {
            className,
            parentKey,
            nestedTrigger,
            level = 0,
            onHoverItem,
        } = props;
        return mergeProps(((this.constructor as typeof NestedList).inheritNestedProps.reduce<Record<string, unknown>>((propMap, key) => {
            propMap[key] = props[key as keyof P];
            return propMap;
        }, {})), {
            level: level + 1,
            className: [className, `is-nested-${expanded ? 'expanded' : 'collapsed'}`],
            items,
            parentKey: parentKey ? `${parentKey}:${item.key}` : item.key,
            nestedShow: this.nestedShow,
            onClickItem: this._handleClickNestedItem,
            onHoverItem: (onHoverItem || nestedTrigger === 'hover') ? this._handleHoverNestedItem : undefined,
        }, item.listProps);
    }

    protected _renderNestedList(props: RenderableProps<P>, items: ListItemsSetting, item: NestedItem, expanded: boolean): ComponentChildren {
        if (!expanded && !props.renderCollapsedList) {
            return;
        }
        const nestedListProps = this._getNestedProps(props, items, item, expanded);
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
        return <span className={classes(`${this.name}-toggle nested-toggle-icon`, toggleClass)}>{toggleIcon}</span>;
    }

    protected _getItem(props: RenderableProps<P>, item: NestedItem, index: number): NestedItem | false {
        const nestedItem = super._getItem(props, item, index) ?? item;
        if (!nestedItem) {
            return nestedItem;
        }
        const {items, ...itemProps} = nestedItem as NestedItem;
        if (items) {
            const {parentKey} = props;
            const expanded = itemProps.expanded ?? this.isExpanded(itemProps.key!, parentKey);
            mergeProps(itemProps, {
                parentKey,
                expanded: expanded,
                className: ['is-nested', `is-nested-${expanded ? 'show' : 'hide'}`],
                toggleIcon: this._renderNestedToggle(props, expanded),
                onMouseEnter: this._handleHover,
                onMouseLeave: this._handleHover,
                'z-parent': parentKey,
                'z-key-path': `${parentKey !== undefined ? `${parentKey}:` : ''}${itemProps.key}`,
            });
            const nestedListContent = this._renderNestedList(props, items, itemProps, expanded);
            if (nestedListContent) {
                mergeProps(itemProps, {children: nestedListContent});
            }
            this._hasNestedItems = true;
        }
        return itemProps;
    }

    protected _renderItem(props: RenderableProps<P>, item: Item, index: number): ComponentChildren {
        if (item.type === 'item') {
            if (this._hasIcons && !item.icon) {
                item.icon = '_';
            }
            if (this._hasNestedItems && !item.toggleIcon) {
                item.toggleIcon = this._renderNestedToggle(props, null);
            }
        }
        return super._renderItem(props, item, index);
    }

    protected _getItemFromEvent(event: MouseEvent): MouseEventInfo | undefined {
        const info = super._getItemFromEvent(event) as MouseEventInfo;
        if (!info) {
            return;
        }
        if (event.type === 'mouseenter' || event.type === 'mouseleave') {
            info.hover = event.type === 'mouseenter';
        }
        return {...info, parentKey: this.props.parentKey};
    }

    protected _toggleFromEvent(info: MouseEventInfo) {
        const {item, hover, event, key, parentKey} = info;
        const {nestedTrigger, nestedToggle} = this.props;
        const target = event.target as HTMLElement;
        if (!item.items || event.defaultPrevented || (nestedTrigger === 'hover' && hover === undefined) || (nestedTrigger === 'click' && event.type !== 'click') || target.closest('.not-nested-toggle') || (nestedToggle && !target.closest(nestedToggle)) || (!nestedToggle && target.closest('a,.btn,.item-checkbox') && !target.closest('.nested-toggle-icon,.item-icon'))) {
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
        const {level = 0, indent = 20, parentKey} = props;
        const finalProps = mergeProps(super._getProps(props), {
            'z-level': level,
            'z-parent-key': parentKey,
            style: {'--list-nested-indent': `${level * indent}px`, '--list-indent': `${indent}px`},
            className: this._hasNestedItems ? 'has-nested-items' : 'no-nested-items',
        });
        finalProps.className = classes(finalProps.className as ClassNameLike);
        return finalProps;
    }

    protected _beforeRender(props: RenderableProps<P>): void | RenderableProps<P> | undefined {
        this._hasIcons = false;
        this._hasNestedItems = !this.isRoot;
        return super._beforeRender(props);
    }
}
