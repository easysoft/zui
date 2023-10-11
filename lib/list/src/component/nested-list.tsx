import {Icon, classes, mergeProps, $} from '@zui/core';
import {store} from '@zui/store';
import {List} from './list';
import '@zui/css-icons/src/icons/caret.css';

import type {ComponentChild, ComponentChildren, RenderableProps} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {Item, ItemKey} from '@zui/common-list';
import type {ListItemsSetting, NestedItem, NestedListProps, NestedListState} from '../types';

type MouseEventInfo = {
    index: number;
    item: NestedItem;
    renderedItem: NestedItem;
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

    static inheritNestedProps = ['component', 'name', 'itemName', 'itemKey', 'indent', 'hover', 'divider', 'multiline', 'toggleIcons', 'nestedToggle', 'itemRender', 'beforeRenderItem', 'onToggle', 'checkbox', 'getItem'];

    protected _controlled: boolean;

    protected declare _hasNestedItems: boolean;

    protected declare _needHandleHover: boolean;

    protected declare _storeID: string;

    protected _itemsMap: Map<string, Item> = new Map();

    constructor(props: P) {
        super(props);
        this._controlled = props.nestedShow !== undefined; // Uncontrolled menu use state to store nested
        const {defaultNestedShow} = props;
        $.extend(this.state, typeof defaultNestedShow === 'boolean' ? {defaultShow: defaultNestedShow, nestedShow: {}} : {nestedShow: defaultNestedShow || {}});
        const {preserve} = props;
        if (preserve && !this._controlled) {
            this._storeID = `${this.constructor.NAME}:${preserve}:state`;
            const storeState = store.get(this._storeID);
            if (storeState) {
                $.extend(this.state, storeState);
            }
        }
        this._handleClickNestedItem = this._handleClickNestedItem.bind(this);
        this._handleHoverNestedItem = this._handleHoverNestedItem.bind(this);
        this._handleHover = this._handleHover.bind(this);
        this._handleClick = this._handleClick.bind(this);
        this._beforeRenderNestedItem = this._beforeRenderNestedItem.bind(this);
        this._preserveState = this._preserveState.bind(this);
    }

    get isRoot() {
        return !this.props.level;
    }

    get nestedShow() {
        return (this._controlled ? this.props.nestedShow : this.state.nestedShow) ?? false;
    }

    isExpanded(key: ItemKey, parentKey?: ItemKey) {
        const {nestedShow} = this;
        const name = `${parentKey !== undefined ? `${parentKey}:` : ''}${key}`;
        if (typeof nestedShow === 'boolean') {
            return nestedShow;
        }
        return !!(nestedShow[name] ?? this.state.defaultShow);
    }

    toggle(key: ItemKey, toggle?: boolean) {
        if (this._controlled) {
            return;
        }
        const isExpanded = this.isExpanded(key);
        if (toggle === undefined) {
            toggle = !isExpanded;
        } else if (toggle === isExpanded) {
            return;
        }
        if (this.props.onToggle?.call(this, key, toggle) === false) {
            return;
        }
        return this.setState(prevState => ({
            nestedShow: {
                ...prevState.nestedShow,
                [key]: toggle,
            },
        }), this._preserveState);
    }

    toggleAll(show: boolean) {
        if (this._controlled) {
            return;
        }
        return this.setState({nestedShow: {}, defaultShow: show}, this._preserveState);
    }

    protected _preserveState() {
        if (this._storeID) {
            store.set(this._storeID, this.state);
        }
    }

    protected _getClassName(props: RenderableProps<P>): ClassNameLike {
        return [super._getClassName(props), 'is-nested', props.level ? 'is-nested-sub' : 'is-nested-root'];
    }

    protected _getNestedProps(props: RenderableProps<P>, items: ListItemsSetting, item: NestedItem, expanded: boolean): NestedListProps {
        const {
            parentKey,
            level = 0,
        } = props;
        return mergeProps(((this.constructor as typeof NestedList).inheritNestedProps.reduce<Record<string, unknown>>((propMap, key) => {
            propMap[key] = props[key as keyof P];
            return propMap;
        }, {})), {
            level: level + 1,
            className: `is-nested-${expanded ? 'expanded' : 'collapsed'}`,
            items,
            parentKey: parentKey ? `${parentKey}:${item.key}` : item.key,
            nestedShow: this.nestedShow,
            defaultNestedShow: this.state.defaultShow,
            onClickItem: this._handleClickNestedItem,
            onHoverItem: this._needHandleHover ? this._handleHoverNestedItem : undefined,
            beforeRenderItem: this._beforeRenderNestedItem,
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

    protected _renderNestedToggle(props: RenderableProps<P>, isExpanded: boolean | undefined): ComponentChild {
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
        const {parentKey} = props;
        const key = nestedItem.key!;
        if (nestedItem.items) {
            const expanded = nestedItem.expanded ?? this.isExpanded(key, parentKey);
            mergeProps(nestedItem, {
                expanded: expanded,
                className: ['is-nested', `is-nested-${expanded ? 'show' : 'hide'}`],
            });
            this._hasNestedItems = true;
        }
        return mergeProps(nestedItem, {
            _keyPath: `${parentKey !== undefined ? `${parentKey}:` : ''}${key}`,
            parentKey,
        });
    }

    protected _beforeRenderNestedItem(item: NestedItem): NestedItem | false {
        this._itemsMap.set(item._keyPath as string, item);
        return item;
    }

    protected _renderItem(props: RenderableProps<P>, renderedItem: NestedItem, index: number): ComponentChildren {
        if (this._hasNestedItems && renderedItem.type === 'item' && renderedItem.toggleIcon === undefined) {
            renderedItem.toggleIcon = this._renderNestedToggle(props, renderedItem.expanded as boolean | undefined);
        }
        const nestedListContent = renderedItem.items ? this._renderNestedList(props, renderedItem.items, renderedItem, renderedItem.expanded as boolean) : null;
        renderedItem = mergeProps(renderedItem, {
            'z-parent': renderedItem.parentKey,
            'z-key-path': renderedItem._keyPath,
        }, this._needHandleHover ? {
            onMouseEnter: this._handleHover,
            onMouseLeave: this._handleHover,
        } : null, nestedListContent ? {children: nestedListContent} : null);
        if (this.isRoot) {
            this._itemsMap.set(renderedItem._keyPath as string, renderedItem);
        }
        return super._renderItem(props, renderedItem, index);
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

    protected _handleClickNestedItem(info: {item: NestedItem, renderedItem: NestedItem, index: number, event: MouseEvent}) {
        this.props.onClickItem?.call(this, info);
        this._toggleFromEvent(info as MouseEventInfo);
    }

    protected _handleHoverNestedItem(info:  {hover: boolean, item: NestedItem, index: number, event: MouseEvent}) {
        this.props.onHoverItem?.call(this, info);
        this._toggleFromEvent(info as MouseEventInfo);
    }

    protected _handleClick(event: MouseEvent) {
        const info = super._handleClick(event);
        if (info && !this._controlled) {
            this._toggleFromEvent(info);
        }
        return info;
    }

    protected _handleHover(event: MouseEvent) {
        const info = this._getItemFromEvent(event);

        if (!info) {
            return;
        }
        this.props.onHoverItem?.call(this, info as {hover: boolean, item: NestedItem, index: number, event: MouseEvent});
        if (!this._controlled && this.props.nestedTrigger === 'hover') {
            this._toggleFromEvent(info);
        }
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
        this._itemsMap.clear();
        this._hasIcons = false;
        this._hasNestedItems = !this.isRoot;
        this._needHandleHover = !!(props.onHoverItem || props.nestedTrigger === 'hover');
        return super._beforeRender(props);
    }
}
