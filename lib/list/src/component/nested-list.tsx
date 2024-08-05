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
    target: HTMLElement;
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


function reduceNestedItems<T>(items: Item[], itemKey: string | undefined, reducer: (previousValue: T, info: ItemInfo) => T, initialValue: T, level = 0, parent?: ItemInfo): T {
    return items.reduce((currentValue, item, index) => {
        if (!item) {
            return currentValue;
        }
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
        currentValue = reducer(currentValue, itemInfo);
        if (Array.isArray(item.items)) {
            return reduceNestedItems(item.items as Item[], itemKey, reducer, currentValue, level + 1, itemInfo);
        }
        return currentValue;
    }, initialValue);
}

export class NestedList<P extends NestedListProps = NestedListProps, S extends NestedListState = NestedListState> extends List<P, S> {
    static defaultProps: Partial<NestedListProps> = {
        ...List.defaultProps,
        defaultNestedShow: false,
        level: 0,
        indent: 20,
    } as Partial<NestedListProps>;

    static inheritNestedProps = ['component', 'name', 'itemName', 'itemKey', 'indent', 'hover', 'divider', 'multiline', 'toggleIcons', 'nestedToggle', 'accordion', 'itemRender', 'itemProps', 'beforeRenderItem', 'onToggle', 'checkbox', 'getItem', 'checkOnClick', 'selectOnChecked', 'checkedState', 'onClickItem', 'activeOnHover', 'multipleActive', 'onActive'];

    protected declare _hasNestedItems: boolean;

    protected declare _storeID: string;

    protected declare _renderedItemMap: Map<string, Item>;

    protected declare _itemMap?: Map<string, ItemInfo>;

    protected declare _itemMapCache: Map<string, ItemInfo>;

    protected declare _needInitChecks?: boolean;

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
            const storeState = store.get(this._storeID) as NestedListState;
            if (storeState) {
                (this.state as NestedListState).nestedShow = storeState.nestedShow;
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

    async setItems(items?: Item[] | undefined, error?: Error | undefined) {
        if (this.isRoot) {
            this._needInitChecks = true;
        }
        const state = await super.setItems(items, error);
        if (items && this.props.parent?.checked === true) {
            this.toggleChecked(this._renderedItems.map(x => x.key!),  true);
        } else if (items?.some((x) => x.checked)) {
            this._needInitChecks = true;
            this.forceUpdate();
        }
        return state;
    }

    getItemMap(useCache?: boolean) {
        if (useCache && (this._itemMap || this._itemMapCache)) {
            return this._itemMap || this._itemMapCache;
        }
        if (!this._itemMap) {
            let needCheckRenderItems = false;
            const map: Map<string, ItemInfo> = reduceNestedItems(this._items, this.props.itemKey, (currentMap, info) => {
                currentMap.set(info.keyPath, info);
                if (info.data.items && !Array.isArray(info.data.items)) {
                    needCheckRenderItems = true;
                }
                return currentMap;
            }, new Map());
            if (needCheckRenderItems) {
                this._renderedItemMap.forEach((item, keyPath) => {
                    if (map.has(keyPath)) {
                        return;
                    }
                    map.set(keyPath, {
                        key: item.key,
                        level: item._level,
                        keyPath,
                        parentKey: `${keyPath.split(':').slice(0, -1).join(':')}`,
                        children: [],
                        data: item,
                    } as ItemInfo);
                });
                map.forEach((info) => {
                    const {parentKey} = info;
                    if (!parentKey) {
                        return;
                    }
                    const parent = map.get(parentKey);
                    if (parent) {
                        parent.children.push(info);
                        info.parent = parent;
                    }
                });
                this._itemMapCache = map;
                return map;
            }
            this._itemMap = map;
        }
        return this._itemMap;
    }

    getRenderedItem(keyPath: string): Item | undefined {
        return this._renderedItemMap.get(keyPath);
    }

    getItem(keyPath: string) {
        const itemMap = this._itemMap || this._itemMapCache;
        if (itemMap) {
            return itemMap.get(keyPath)?.data;
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

    async toggle(keyPath: string, toggle?: boolean, reset?: boolean) {
        const isExpanded = this.isExpanded(keyPath);
        if (!reset && toggle === isExpanded) {
            return;
        }
        if (toggle === undefined) {
            toggle = !isExpanded;
        }
        const {nestedShow, onToggle, accordion} = this.props;
        if (onToggle && onToggle.call(this, keyPath, toggle, reset) === false) {
            return;
        }
        if (nestedShow !== undefined) {
            return;
        }
        await this.changeState(prevState => {
            let newNestedShow: Record<ItemKey, boolean> = {
                ...(reset ? {} : prevState.nestedShow),
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
            newNestedShow = toggle ? parentKeys(keyPath).reduce<Record<string, boolean>>((map, key) => {
                map[key] = toggle!;
                return map;
            }, newNestedShow) : newNestedShow;
            return {
                nestedShow: newNestedShow,
            } as Partial<S>;
        }, this._preserveState);
    }

    toggleAll(show: boolean) {
        if (this.props.nestedShow !== undefined) {
            return;
        }
        return this.setState({nestedShow: {}, defaultShow: show}, this._preserveState);
    }

    getChecks() {
        return Array.from(this.getItemMap(true).values()).reduce<ItemKey[]>((checks, {keyPath, data}) => {
            const checkState = this.state.checked[keyPath];
            if ((checkState === true || (data.checked && checkState !== false)) === true) {
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

    async toggleChecked(keyOrChange: ItemKey | ItemKey[] | Record<ItemKey, CheckedType>, checked?: CheckedType) {
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
            await this.changeState(({checked: prevChecked, nestedShow: preNestedShow}) => {
                const isChecked = (item: ItemInfo) => {
                    return change[item.keyPath] ?? prevChecked[item.keyPath] ?? item.data.checked ?? false;
                };
                const map = this.getItemMap();
                const nestedShow: Record<string, boolean> = {};
                const {expandChildrenOnCheck} = this.props;
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
                    if (expandChildrenOnCheck && checked && item.data.items) {
                        nestedShow[key] = true;
                    }
                });
                return {
                    checked: {
                        ...prevChecked,
                        ...change,
                    },
                    nestedShow: {
                        ...preNestedShow,
                        ...nestedShow,
                    },
                } as Partial<S>;
            }, () => {
                const checkState = this.state.checked;
                this.props.onCheck?.call(this, change, Object.keys(checkState).filter(x => checkState[x] === true));
            });
            return;
        }

        const {parentKey, onCheck} = this.props;
        const nestedChange = Object.keys(change).reduce<Record<string, CheckedType>>((map, key) => {
            map[`${parentKey !== undefined ? `${parentKey}:` : ''}${key}`] = change[key];
            return map;
        }, {});
        onCheck!.call(this, nestedChange, []);
    }

    getKeyPath(key: string) {
        if (this.isRoot) {
            return key;
        }
        const parentKey = this.props.parentKey!;
        if (!key.startsWith(parentKey + ':')) {
            return `${parentKey}:${key}`;
        }
        return key;
    }

    isActive(keyPath: string | Item) {
        if (typeof keyPath === 'object') {
            const keyOrKeyPath = (keyPath._keyPath ?? keyPath.key) as (string | undefined);
            if (keyOrKeyPath === undefined) {
                return false;
            }
            keyPath = keyOrKeyPath;
        }
        return this._activeSet.cache.has(this.getKeyPath(keyPath));
    }

    async toggleActive(keys: string | string[], active?: boolean) {
        if (typeof keys === 'string') {
            keys = [keys];
        }
        keys = keys.map(key => this.getKeyPath(key));
        if (this.isRoot) {
            await super.toggleActive(keys, active);
            if (this.props.toggleOnActive) {
                (keys as string[]).forEach(key => {
                    if (this.isActive(key) && !this.isExpanded(key)) {
                        this.toggle(key, true);
                    }
                });
            }
            return;
        }

        this.props.onActive!.call(this, keys, active ?? !this.isActive(keys[0]));
    }

    activeNext(condition?: (item: Item, index: number) => boolean, step = 1) {
        const nextItem = this.getNextItem(this.getActiveKey(), condition, step);
        if (nextItem) {
            this.toggleActive(nextItem._keyPath as string);
        }
    }

    getNextItem(key: string | undefined, condition?: (item: Item, index: number) => boolean, step = 1, items: Item[] | undefined = undefined): Item | undefined {
        items = items || reduceNestedItems<Item[]>(this._items, this.props.itemKey, (list, info) => {
            if (info.data.disabled) {
                return list;
            }
            list.push({
                _keyPath: info.keyPath,
                type: 'item',
                ...info.data,
                ...this._renderedItemMap.get(info.keyPath),
                key: info.keyPath,
            });
            return list;
        }, []);
        return super.getNextItem(key, condition, step, items);
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
            store.set(this._storeID, {nestedShow: this.state.nestedShow});
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
        const {isRoot} = this;
        return mergeProps(((this.constructor as typeof NestedList).inheritNestedProps.reduce<Record<string, unknown>>((propMap, key) => {
            propMap[key] = props[key as keyof P];
            return propMap;
        }, {})), {
            key: item.key,
            level: level + 1,
            className: `is-nested-${expanded ? 'expanded' : 'collapsed'}`,
            items,
            parent: item,
            parentKey: parentKey ? `${parentKey}:${item.key}` : item.key,
            nestedShow: this.nestedShow,
            defaultNestedShow: this.state.defaultShow,
            checkedState: props.checkedState || this.state.checked,
            onCheck: isRoot ? this._handleNestedCheck : props.onCheck,
            onToggle: isRoot ? this._handleNestedToggle : props.onToggle,
            beforeRenderItem: isRoot ? this._beforeRenderNestedItem : props.beforeRenderItem,
            active: isRoot ? this.getActiveKeys() : props.active,
            onActive: isRoot ? this.toggleActive.bind(this) : props.onActive,
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
        }, nestedListContent ? {children: nestedListContent} : null);
        this._renderedItemMap.set(renderedItem._keyPath as string, renderedItem);
        return super._renderItem(props, renderedItem, index);
    }

    protected _getItemFromEvent(event: MouseEvent, target?: HTMLElement): MouseEventInfo | undefined {
        target = target || event.target as HTMLElement;
        let info = super._getItemFromEvent(event, target) as MouseEventInfo;
        if (!info) {
            const listEle = target.closest('[z-list]') as HTMLElement;
            if (listEle) {
                const listKey = listEle.getAttribute('z-list')!;
                const item = this.getItem(listKey);
                const renderedItem = this.getRenderedItem(listKey);
                if (!item || !renderedItem) {
                    return;
                }
                info = {
                    target,
                    index: renderedItem._index as number,
                    item,
                    element: listEle,
                    event,
                    key: listKey,
                    keyPath: listKey,
                    renderedItem,
                };
            }
            return;
        }
        if (event.type === 'mouseenter' || event.type === 'mouseleave' || event.type === 'mouseover') {
            info.hover = event.type !== 'mouseleave';
        }
        const {parentKey} = this.props;
        return {...info, parentKey, keyPath: `${parentKey !== undefined ? `${parentKey}:` : ''}${info.key}`, target};
    }

    protected _handleNestedToggle(key: ItemKey, toggle: boolean, reset?: boolean) {
        this.toggle(key, toggle, reset);
    }

    protected _handleClick(event: MouseEvent) {
        const info = super._handleClick(event);
        if (info) {
            const {item, keyPath, target} = info as MouseEventInfo;
            const {nestedToggle} = this.props;
            if (!item.items || event.defaultPrevented || target.closest('.not-nested-toggle') || (nestedToggle && !item.disabled && !target.closest(nestedToggle)) || (!nestedToggle && !item.disabled && target.closest('a,.btn,.item-checkbox,.open-url') && !target.closest('.nested-toggle-icon,.item-icon'))) {
                return info;
            }
            this.toggle(keyPath);
            event.preventDefault();
        }
        return info;
    }

    protected _handleNestedCheck(change: Record<ItemKey, CheckedType>) {
        this.toggleChecked(change);
    }

    protected _getProps(props: RenderableProps<P>): Record<string, unknown> {
        const {level = 0, indent = 20, parentKey} = props;
        const finalProps = mergeProps(super._getProps(props), {
            'z-level': level,
            'z-list': parentKey,
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
        return super._beforeRender(props);
    }
}
