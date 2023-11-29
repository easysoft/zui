import {Icon, classes, mergeProps, $} from '@zui/core';
import {store} from '@zui/store';
import {List} from './list';
import '@zui/css-icons/src/icons/caret.css';

import type {ComponentChild, ComponentChildren, RenderableProps} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {Item, ItemKey} from '@zui/common-list';
import type {CheckedType} from '@zui/checkbox';
import type {ListItemsSetting, NestedItem, NestedListProps, NestedListState} from '../types';

export type MouseEventInfo = {
    index: number;
    item: NestedItem;
    renderedItem: NestedItem;
    element: HTMLElement;
    event: MouseEvent;
    key: ItemKey;
    parentKey?: ItemKey;
    hover?: boolean;
    keyPath: string;
};

export type ItemInfo = {
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

function parentKeys(keyPath: string) {
    return keyPath.split(':').reduce<string[]>((keys, item, index) => {
        keys.push(index ? keys[index - 1] + ':' + item : item);
        return keys;
    }, []);
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

    static inheritNestedProps = ['component', 'name', 'itemName', 'itemKey', 'indent', 'hover', 'divider', 'multiline', 'toggleIcons', 'nestedToggle', 'accordion', 'itemRender', 'itemProps', 'beforeRenderItem', 'onToggle', 'checkbox', 'getItem', 'checkOnClick', 'activeOnChecked', 'checkedState', 'onClickItem'];

    protected declare _hasNestedItems: boolean;

    protected declare _needHandleHover: boolean;

    protected declare _storeID: string;

    protected declare _renderedItemMap: Map<string, Item>;

    protected declare _itemMap?: Map<string, ItemInfo>;

    protected declare _needInitChecks?: boolean;

    protected declare _hoverInfo?: {timer: number, info: MouseEventInfo};

    constructor(props: P) {
        super(props);
        const {defaultNestedShow, preserve, nestedShow} = props;
        $.extend(
            this.state,
            typeof defaultNestedShow === 'boolean' ? {defaultShow: defaultNestedShow, nestedShow: {}} : {nestedShow: defaultNestedShow || {}},
            nestedShow !== undefined ? {nestedShow} : null,
        );
        if (preserve && nestedShow === undefined) {
            this._storeID = `${this.constructor.NAME}:${preserve}:state`;
            const storeState = store.get(this._storeID);
            if (storeState) {
                $.extend(this.state, storeState);
            }
        }

        if (!props.level) {
            const nestedState = this.state.nestedShow;
            if (nestedState) {
                Object.keys(nestedState).forEach(key => {
                    if (!nestedState[key]) {
                        return;
                    }
                    parentKeys(key).forEach(parentKey => {
                        nestedState[parentKey] = true;
                    });
                });
            }
            this._needInitChecks = true;
        }

        this._renderedItemMap = new Map();
        this._handleHover = this._handleHover.bind(this);
        this._handleClick = this._handleClick.bind(this);
        this._beforeRenderNestedItem = this._beforeRenderNestedItem.bind(this);
        this._handleNestedToggle = this._handleNestedToggle.bind(this);
        this._handleNestedCheck = this._handleNestedCheck.bind(this);
        this._preserveState = this._preserveState.bind(this);
    }

    get isRoot() {
        return !this.props.level;
    }

    get nestedShow() {
        return this.props.nestedShow ?? this.state.nestedShow ?? false;
    }

    get isHoverTrigger() {
        return this.props.nestedTrigger === 'hover';
    }

    setItems(items?: Item[] | undefined, error?: Error | undefined): void {
        if (this.isRoot) {
            this._needInitChecks = true;
        }
        super.setItems(items, error);
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
        const isExpanded = this.isExpanded(keyPath);
        if (toggle === isExpanded) {
            return;
        }
        if (toggle === undefined) {
            toggle = !isExpanded;
        }
        const {nestedShow, onToggle, accordion} = this.props;
        if (onToggle && onToggle.call(this, keyPath, toggle) === false) {
            return;
        }
        if (nestedShow !== undefined) {
            return;
        }
        return this.setState(prevState => {
            const newNestedShow: Record<ItemKey, boolean> = {
                ...prevState.nestedShow,
                [keyPath]: toggle!,
            };
            if (toggle && accordion) {
                let parentKey = `${keyPath.split(':').slice(0, -1).join(':')}`;
                if (parentKey.length) {
                    parentKey += ':';
                }
                Object.keys(newNestedShow).forEach(key => {
                    if (key !== keyPath && key.startsWith(parentKey)) {
                        newNestedShow[key] = false;
                    }
                });
            }
            return {
                nestedShow: toggle ? parentKeys(keyPath).reduce<Record<string, boolean>>((map, key) => {
                    map[key] = toggle!;
                    return map;
                }, newNestedShow) : newNestedShow,
            };
        }, this._preserveState);
    }

    toggleAll(show: boolean) {
        if (this.props.nestedShow !== undefined) {
            return;
        }
        return this.setState({nestedShow: {}, defaultShow: show}, this._preserveState);
    }

    getChecks() {
        return Array.from(this.getItemMap().values()).reduce<ItemKey[]>((checks, {keyPath, data}) => {
            if ((this.state.checked[keyPath] === true || data.checked) === true) {
                checks.push(keyPath);
            }
            return checks;
        }, []);
    }

    isChecked(key: ItemKey, index?: number, defaultChecked: CheckedType = false): CheckedType {
        const item = (typeof index === 'number' ? this._items[index] : this.getItem(key)) || {};
        if (this.isRoot) {
            return this.state.checked[key] ?? (item.checked as CheckedType) ?? defaultChecked;
        }
        return this.props.checkedState![`${this.props.parentKey}:${key}`] ?? (item.checked as CheckedType) ?? defaultChecked;
    }

    toggleChecked(keyOrChange: ItemKey | ItemKey[] | Record<ItemKey, CheckedType>, checked?: CheckedType): void {
        let change: Record<ItemKey, CheckedType>;
        if (Array.isArray(keyOrChange)) {
            if (!keyOrChange.length) {
                return;
            }
            if (checked === undefined) {
                checked = !this.isChecked(keyOrChange[0]);
            }
            change = keyOrChange.reduce<Record<ItemKey, CheckedType>>((map, key) => {
                map[key] = checked!;
                return map;
            }, {});
        } else if (typeof keyOrChange === 'object') {
            change = keyOrChange;
        } else {
            if (checked === undefined) {
                checked = !this.isChecked(keyOrChange);
            }
            change = {[keyOrChange]: checked!};
        }
        if (!Object.keys(change).length) {
            return;
        }
        if (this.isRoot) {
            const map = this.getItemMap();
            this.setState(({checked: prevChecked}) => {
                const isChecked = (item: ItemInfo) => {
                    return change[item.keyPath] ?? prevChecked[item.keyPath] ?? item.data.checked ?? false;
                };
                Object.keys(change).forEach(key => {
                    checked = change[key];
                    const item = map.get(key);
                    if (!item) {
                        return;
                    }
                    forEachChild(item, child => {
                        if (isChecked(child) !== checked) {
                            change[child.keyPath] = checked!;
                        }
                    });
                    forEachParent(item, parent => {
                        const {children} = parent;
                        const checkedCount = children.reduce((count, child) => {
                            if (isChecked(child)) {
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
                this.props.onCheck?.call(this, change, Object.keys(checkState).filter(x => checkState[x] === true));
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

    protected _afterRender(firstRender: boolean): void {
        super._afterRender(firstRender);
        if (this._needInitChecks) {
            const initChecks: Record<string, CheckedType> = {};
            const itemMap = this.getItemMap();
            itemMap.forEach(item => {
                if (item.data.checked !== undefined) {
                    initChecks[item.keyPath] = item.data.checked as CheckedType;
                }
            });
            this.toggleChecked(initChecks);
            this._needInitChecks = false;
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
            key: item.key,
            level: level + 1,
            className: `is-nested-${expanded ? 'expanded' : 'collapsed'}`,
            items,
            parentKey: parentKey ? `${parentKey}:${item.key}` : item.key,
            nestedShow: this.nestedShow,
            defaultNestedShow: this.state.defaultShow,
            checkedState: props.checkedState || this.state.checked,
            onCheck: this.isRoot ? this._handleNestedCheck : props.onCheck,
            onToggle: this.isRoot ? this._handleNestedToggle : props.onToggle,
            beforeRenderItem: this.isRoot ? this._beforeRenderNestedItem : props.beforeRenderItem,
        }, item.listProps);
    }

    protected _renderNestedList(props: RenderableProps<P>, items: ListItemsSetting, item: NestedItem, expanded: boolean): ComponentChildren {
        if (!expanded && !props.renderCollapsedList) {
            return;
        }
        const nestedListProps = this._getNestedProps(props, items, item, expanded);
        const NestedListComponent = this.constructor as typeof NestedList;
        return <NestedListComponent key={`nested:${item.key}`} {...nestedListProps} />;
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
        this._renderedItemMap.set(renderedItem._keyPath as string, renderedItem);
        return super._renderItem(props, renderedItem, index);
    }

    protected _getItemFromEvent(event: MouseEvent, target?: HTMLElement): MouseEventInfo | undefined {
        const info = super._getItemFromEvent(event, target) as MouseEventInfo;
        if (!info) {
            return;
        }
        if (event.type === 'mouseenter' || event.type === 'mouseleave') {
            info.hover = event.type === 'mouseenter';
        }
        const {parentKey} = this.props;
        return {...info, parentKey, keyPath: `${parentKey !== undefined ? `${parentKey}:` : ''}${info.key}`};
    }

    protected _toggleFromEvent(info: MouseEventInfo) {
        const {item, hover, event, keyPath} = info;
        const {nestedToggle} = this.props;
        const {isHoverTrigger} = this;
        const target = event.target as HTMLElement;
        if (!item.items || event.defaultPrevented || (isHoverTrigger && hover === undefined) || (!isHoverTrigger && event.type !== 'click') || target.closest('.not-nested-toggle') || (nestedToggle && !target.closest(nestedToggle)) || (!nestedToggle && target.closest('a,.btn,.item-checkbox') && !target.closest('.nested-toggle-icon,.item-icon'))) {
            return info;
        }
        const toggle = typeof hover === 'boolean' ? hover : undefined;
        this.toggle(keyPath, toggle);
    }

    protected _handleNestedToggle(key: ItemKey, toggle: boolean) {
        this.toggle(key, toggle);
    }

    protected _handleClick(event: MouseEvent) {
        const info = super._handleClick(event);
        if (info) {
            return this._toggleFromEvent(info as MouseEventInfo);
        }
        return info;
    }

    protected _handleHover(event: MouseEvent) {
        const info = this._getItemFromEvent(event);
        console.log('> handleHover', event.type, event.target, {event, info});
        if (!info) {
            return;
        }
        this.props.onHoverItem?.call(this, info as {hover: boolean, item: NestedItem, index: number, event: MouseEvent});
        if (!this.isHoverTrigger) {
            return;
        }
        const lastHover = this._hoverInfo;
        if (lastHover) {
            if (lastHover.info.keyPath === info.keyPath) {
                clearTimeout(lastHover.timer);
            } else {
                this._toggleFromEvent(lastHover.info);
            }
        }
        this._hoverInfo = {
            info,
            timer: window.setTimeout(() => {
                this._toggleFromEvent(info);
            }, info.hover ? 0 : 200),
        };
    }

    protected _handleNestedCheck(change: Record<ItemKey, CheckedType>) {
        this.toggleChecked(change);
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
        this._renderedItemMap.clear();
        this._hasIcons = false;
        this._hasNestedItems = !this.isRoot;
        this._needHandleHover = !!(props.onHoverItem || this.isHoverTrigger);
        return super._beforeRender(props);
    }
}
