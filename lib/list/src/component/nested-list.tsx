import {Icon, classes, mergeProps, $} from '@zui/core';
import {store} from '@zui/store';
import {List} from './list';
import '@zui/css-icons/src/icons/caret.css';

import type {ComponentChild, ComponentChildren, RenderableProps} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {Item, ItemKey} from '@zui/common-list';
import type {CheckedType} from '@zui/checkbox';
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

type ItemInfo = {
    key: string;
    level: number;
    keyPath: string;
    parentKey?: string;
    parent?: ItemInfo;
    children: ItemInfo[];
    data: Item;
};

function forEachChild(item: ItemInfo, callback: (child: ItemInfo) => void) {
    const {children} = item;
    if (!children.length) {
        return;
    }
    children.forEach(child => {
        callback(child);
        forEachChild(child, callback);
    });
}

function forEachParent(item: ItemInfo, callback: (parent: ItemInfo) => void) {
    let parent = item.parent;
    while (parent) {
        callback(parent);
        parent = parent.parent;
    }
}

function initItemMap(items: Item[], itemKey: string | undefined, map: Map<string, ItemInfo> = new Map(), level = 0, parent?: ItemInfo) {
    items.forEach((item, index) => {
        const key = String((itemKey ? item[itemKey] : item.key) ?? (item.key ?? index));
        const keyPath = parent ? `${parent.keyPath}:${key}` : key;
        const itemInfo = {
            key,
            level,
            keyPath,
            parentKey: parent?.keyPath,
            parent: parent,
            data: item,
            children: [],
        };
        if (parent) {
            parent.children.push(itemInfo);
        }
        map.set(keyPath, itemInfo);
        if (Array.isArray(item.items)) {
            initItemMap(item.items as Item[], itemKey, map, level + 1, itemInfo);
        }
    });
    return map;
}

export class NestedList<P extends NestedListProps = NestedListProps, S extends NestedListState = NestedListState> extends List<P, S> {
    static defaultProps: Partial<NestedListProps> = {
        defaultNestedShow: false,
        level: 0,
        indent: 20,
    };

    static inheritNestedProps = ['component', 'name', 'itemName', 'itemKey', 'indent', 'hover', 'divider', 'multiline', 'toggleIcons', 'nestedToggle', 'itemRender', 'beforeRenderItem', 'onToggle', 'checkbox', 'getItem', 'checkOnClick', 'activeOnChecked', 'checkedState'];

    protected _controlled: boolean;

    protected declare _hasNestedItems: boolean;

    protected declare _needHandleHover: boolean;

    protected declare _storeID: string;

    protected declare _renderedItemMap: Map<string, Item>;

    protected declare _itemMap?: Map<string, ItemInfo>;

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
        this._handleNestedCheck = this._handleNestedCheck.bind(this);
        this._preserveState = this._preserveState.bind(this);
    }

    get isRoot() {
        return !this.props.level;
    }

    get nestedShow() {
        return (this._controlled ? this.props.nestedShow : this.state.nestedShow) ?? false;
    }

    getItemMap() {
        if (!this._itemMap) {
            this._itemMap = initItemMap(this._items, this.props.itemKey);
        }
        return this._itemMap;
    }

    getRenderedItem(keyPath: string): Item | undefined {
        return this._renderedItemMap.get(keyPath);
    }

    getItem(keyPath: string) {
        if (this._itemMap) {
            return this._itemMap.get(keyPath)?.data;
        }
        const renderedItem = this.getRenderedItem(keyPath);
        return renderedItem ? (renderedItem._item as Item) : super.getItem(keyPath);
    }

    isExpanded(keyPath: string) {
        const {nestedShow} = this;
        if (typeof nestedShow === 'boolean') {
            return nestedShow;
        }
        return !!(nestedShow[keyPath] ?? this.state.defaultShow);
    }

    toggle(keyPath: string, toggle?: boolean) {
        if (this._controlled) {
            return;
        }
        const isExpanded = this.isExpanded(keyPath);
        if (toggle === undefined) {
            toggle = !isExpanded;
        } else if (toggle === isExpanded) {
            return;
        }
        if (this.props.onToggle?.call(this, keyPath, toggle) === false) {
            return;
        }
        return this.setState(prevState => ({
            nestedShow: {
                ...prevState.nestedShow,
                [keyPath]: toggle,
            },
        }), this._preserveState);
    }

    toggleAll(show: boolean) {
        if (this._controlled) {
            return;
        }
        return this.setState({nestedShow: {}, defaultShow: show}, this._preserveState);
    }

    getChecks() {
        return Array.from(this.getItemMap().values()).reduce<ItemKey[]>((checks, {keyPath, data}) => {
            if (this.state.checked[keyPath] ?? data.checked) {
                checks.push(keyPath);
            }
            return checks;
        }, []);
    }

    isItemChecked(key: ItemKey, index?: number, defaultChecked: CheckedType = false): CheckedType {
        const item = (typeof index === 'number' ? this._items[index] : this.getItem(key)) || {};
        if (this.isRoot) {
            return this.state.checked[key] ?? (item.checked as CheckedType) ?? defaultChecked;
        }
        return this.props.checkedState![`${this.props.parentKey}:${key}`] ?? (item.checked as CheckedType) ?? defaultChecked;
    }

    toggleItemChecked(keyOrChange: ItemKey | Record<ItemKey, CheckedType>, checked?: CheckedType): void {
        if (typeof keyOrChange === 'string' && checked === undefined) {
            checked = !this.isItemChecked(keyOrChange);
        }
        const change = typeof keyOrChange === 'object' ? keyOrChange : ({[keyOrChange]: checked} as Record<ItemKey, CheckedType>);
        if (this.isRoot) {
            const map = this.getItemMap();
            this.setState(({checked: prevChecked}) => {
                const isItemChecked = (item: ItemInfo) => {
                    return change[item.keyPath] ?? prevChecked[item.keyPath] ?? item.data.checked ?? false;
                };
                Object.keys(change).forEach(key => {
                    checked = change[key];
                    const item = map.get(key);
                    if (!item) {
                        return;
                    }
                    forEachChild(item, child => {
                        if (isItemChecked(child) !== checked) {
                            change[child.keyPath] = checked!;
                        }
                    });
                    forEachParent(item, parent => {
                        const {children} = parent;
                        const checkedCount = children.reduce((count, child) => {
                            if (isItemChecked(child)) {
                                count++;
                            }
                            return count;
                        }, 0);

                        change[parent.keyPath] = checkedCount === children.length ? true : (checkedCount ? 'indeterminate' : false);
                    });
                });
                return {
                    checked: {
                        ...prevChecked,
                        ...change,
                    },
                };
            }, () => {
                const checkState = this.state.checked;
                this.props.onCheck?.call(this, change, Object.keys(checkState).filter(x => checkState[x]));
            });
        } else {
            const {parentKey, onCheck} = this.props;
            const nestedChange = Object.keys(change).reduce<Record<string, CheckedType>>((map, key) => {
                map[`${parentKey !== undefined ? `${parentKey}:` : ''}${key}`] = change[key];
                return map;
            }, {});
            onCheck!.call(this, nestedChange, []);
        }
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
            checkedState: props.checkedState || this.state.checked,
            onCheck: this.isRoot ? this._handleNestedCheck : props.onCheck,
            onClickItem: this._handleClickNestedItem,
            onHoverItem: this._needHandleHover ? this._handleHoverNestedItem : undefined,
            beforeRenderItem: this.isRoot ? this._beforeRenderNestedItem : props.beforeRenderItem,
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

    protected _getItems(props: RenderableProps<P>): Item[] {
        const items = super._getItems(props);
        if (this.isRoot && items !== this._items) {
            this._itemMap = undefined;
        }
        return items;
    }

    protected _getItem(props: RenderableProps<P>, item: NestedItem, index: number): NestedItem | false {
        const nestedItem = super._getItem(props, item, index) ?? item;
        if (!nestedItem) {
            return nestedItem;
        }
        const {parentKey} = props;
        const key = nestedItem.key!;
        const keyPath = `${parentKey !== undefined ? `${parentKey}:` : ''}${key}`;
        if (nestedItem.items) {
            const expanded = nestedItem.expanded ?? this.isExpanded(keyPath);
            mergeProps(nestedItem, {
                expanded: expanded,
                className: ['is-nested', `is-nested-${expanded ? 'show' : 'hide'}`],
                _item: item,
            });
            this._hasNestedItems = true;
        }
        return mergeProps(nestedItem, {
            _level: props.level,
            _keyPath: keyPath,
            parentKey,
        });
    }

    protected _beforeRenderNestedItem(item: NestedItem): NestedItem | false {
        this._renderedItemMap.set(item._keyPath as string, item);
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
            this._renderedItemMap.set(renderedItem._keyPath as string, renderedItem);
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

    protected _handleNestedCheck(change: Record<ItemKey, CheckedType>) {
        this.toggleItemChecked(change);
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
        if (this.isRoot) {
            this._renderedItemMap = new Map();
        }
        this._hasIcons = false;
        this._hasNestedItems = !this.isRoot;
        this._needHandleHover = !!(props.onHoverItem || props.nestedTrigger === 'hover');
        return super._beforeRender(props);
    }
}
