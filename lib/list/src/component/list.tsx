import {$, Computed, HElement, classes, fetchData, mergeProps, removeUndefinedProps} from '@zui/core';
import {CommonList} from '@zui/common-list/react';
import {Listitem} from './listitem';
import {listI18n} from '../i18n';
import '@zui/css-icons';

import type {ComponentChild, ComponentChildren, RenderableProps} from 'preact';
import type {ClassNameLike, CustomContentType, I18nLangMap} from '@zui/core';
import type {Item, ItemKey} from '@zui/common-list';
import type {CheckedType} from '@zui/checkbox';
import type {ListProps, ListState, ListItemsSetting, ListItemsFetcher} from '../types';

export class List<P extends ListProps = ListProps, S extends ListState = ListState> extends CommonList<P, S> {
    static ItemComponents: typeof CommonList.ItemComponents = {
        ...CommonList.ItemComponents,
        default: HElement,
        item: Listitem,
        heading: Listitem,
    };

    static NAME = 'list';

    static i18n: I18nLangMap = listI18n;

    protected _loadedSetting?: ListItemsSetting;

    protected declare _hasIcons: boolean;

    protected declare _hasCheckbox: boolean;

    protected _preparedAllItems = true;

    protected _limitedItemKeys = new Set<string>();

    protected _visibleItemIndexes: number[] = [];

    protected _remainingItemsCount = 0;

    protected _visibleItemsLimit = 0;

    protected _visibleItemsCount = 0;

    protected _visibleItemsContext: unknown;

    protected _visibleItemsSource?: Item[];

    protected _visibleItemsRevision = 0;

    protected _showMoreElement?: HTMLButtonElement;

    protected _showMorePending = false;

    protected _autoShowMoreFrame?: number;

    protected _autoShowMoreObserver?: {observer: IntersectionObserver; element: HTMLButtonElement; revision: number; count: number};

    protected _activeSet = new Computed<Set<string>>(() => {
        const map = new Set<string>();
        const {active} = this.props;
        if (Array.isArray(active)) {
            active.forEach(x => map.add(x));
        } else if (typeof active === 'string') {
            map.add(active);
        } else if (active) {
            Object.keys(active).forEach(x => active[x] && map.add(x));
        }
        const {activeMap} = this.state;
        Object.keys(activeMap).forEach(x => activeMap[x] ? map.add(x) : map.delete(x));
        return map;
    }, () => [this.state.activeMap, this.props.active]);

    constructor(props: P) {
        super(props);
        this.state = {
            checked: {},
            activeMap: {},
        } as S;
    }

    get namespace() {
        return `.zui.${this.constructor.NAME}.list_${this.gid}`;
    }

    get i18nData() {
        const data = super.i18nData;
        return this.constructor.i18n === listI18n ? data : [...data, listI18n];
    }

    get isLazyItems() {
        const {items} = this.props;
        return items && !Array.isArray(items);
    }

    componentDidMount() {
        this._afterRender(true);
        this.tryLoad();
        this._syncAutoShowMore();

        if (this.props.activeOnHover && !this.props.multipleActive) {
            $(this.element).on(`mouseenter${this.namespace}`, '[z-item]', (event) => {
                const info = this._getItemFromEvent(event);
                if (info && info.renderedItem.type === 'item' && !info.renderedItem.disabled && info.renderedItem.hover !== false && !this.isActive(info.key)) {
                    this.toggleActive(info.key, true);
                }
            });
        }
    }

    componentDidUpdate(): void {
        this._afterRender(false);
        this.tryLoad();
        this._syncAutoShowMore();
    }

    componentWillUnmount(): void {
        this._disconnectAutoShowMore();
        this._showMoreElement = undefined;
        $(this.element).off(this.namespace);
        this.props.beforeDestroy?.call(this);
    }

    setItems(items?: Item[], error?: Error) {
        const {onLoadFail} = this.props;
        return this.changeState({
            loading: false,
            items: items || [],
            loadFailed: error ? (typeof onLoadFail === 'function' ? (onLoadFail as (error: Error) => CustomContentType | undefined).call(this, error as Error) : onLoadFail) || String(error) : undefined,
        } as S);
    }

    load(): void {
        const {items, onLoad} = this.props;
        this._loadedSetting = items;
        this.setState({loading: true, items: []}, async () => {
            try {
                const newItems = await fetchData(items as ListItemsFetcher, [this], {throws: true});
                this.setItems(onLoad?.call(this, newItems) || newItems);
            } catch (error) {
                this.setItems(undefined, error as Error);
            }
        });
    }

    tryLoad() {
        const {loading} = this.state;
        const {items} = this.props;
        if (loading || !items || Array.isArray(items) || items === this._loadedSetting) {
            return false;
        }
        this.load();
        return true;
    }

    isChecked(key: ItemKey, index?: number, defaultChecked: CheckedType = false): CheckedType {
        const item = (typeof index === 'number' ? this._items[index] : this.getItem(key)) || {};
        return this.state.checked[key] ?? item.checked ?? defaultChecked;
    }

    getItemIndex(key: ItemKey) {
        if (this._preparedAllItems) {
            return this._renderedItems.findIndex(item => item?.key === key);
        }
        return this._items.findIndex((item, index) => item && (this._renderedItems[index]?.key ?? this._getRawItemKey(item, index)) === key);
    }

    getRenderedItem(key: ItemKey) {
        return this._renderedItems.find(item => item?.key === key);
    }

    getKey(index: number): ItemKey | undefined {
        const item = this._items?.[index];
        return super.getKey(index) ?? (!this._preparedAllItems && item ? this._getRawItemKey(item, index) : undefined);
    }

    protected _getRawItemKey(item: Item, index: number): ItemKey {
        const {itemKey} = this.props;
        return String((itemKey ? item[itemKey] : item.key) ?? item.key ?? index);
    }

    protected _getItemKeys(): (ItemKey | undefined)[] {
        return this._items.map((item, index) => this._renderedItems[index]?.key ?? (!this._preparedAllItems && item ? this._getRawItemKey(item, index) : undefined));
    }

    isAllChecked(): boolean {
        return this._getItemKeys().every((key, index) => key === undefined || this.isChecked(key, index) === true);
    }

    toggleAllChecked(checked?: boolean) {
        if (checked === undefined) {
            checked = !this.isAllChecked();
        }
        return this.toggleChecked(this._getItemKeys().filter((key): key is string => key !== undefined), checked);
    }

    async toggleChecked(keyOrChange: ItemKey | ItemKey[] | Record<ItemKey, CheckedType>, checked?: boolean) {
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
            const isChecked = this.isChecked(keyOrChange);
            if (checked === undefined) {
                checked = !isChecked;
            }
            change = {[keyOrChange]: checked!};
        }
        if (!Object.keys(change).length) {
            return;
        }

        await this.changeState(prevState => ({
            checked: {
                ...prevState.checked,
                ...change,
            },
        } as Partial<S>), () => {
            const checkState = this.state.checked;
            const onCheck = this.props.onCheck as ((this: this, change: Record<ItemKey, CheckedType>, checks: ItemKey[]) => void) | undefined;
            onCheck?.call(this, change, Object.keys(checkState).filter(x => checkState[x] === true));
        });
    }

    getChecks() {
        return this._getItemKeys().reduce<ItemKey[]>((checks, key, index) => {
            if (key !== undefined && this.isChecked(key, index) === true) {
                checks.push(key);
            }
            return checks;
        }, []);
    }

    isActive(key: string | Item) {
        if (typeof key === 'object') {
            key = key.key!;
        }
        return this._activeSet.cache.has(key);
    }

    getActiveKeys() {
        return [...this._activeSet.value];
    }

    getActiveKey() {
        return this.getActiveKeys()[0];
    }

    async toggleActive(keys: string | string[], active?: boolean) {
        if (typeof keys === 'string') {
            keys = [keys];
        }
        if (!keys.length) {
            return;
        }
        active = active ?? !this.isActive(keys[0]);
        await this.changeState((prevState) => {
            const activeMap = this.props.multipleActive ? (keys as string[]).reduce<Record<string, boolean>>((map, key) => {
                map[key] = active!;
                return map;
            }, {...prevState.activeMap}) : {
                ...(active ? Array.from(this._activeSet.value).reduce<Record<string, boolean>>((map, key) => {
                    map[key] = false;
                    return map;
                }, {}) : {}),
                [keys[0]]: active!,
            };
            return {activeMap} as Partial<S>;
        }, () => {
            this.props.onActive?.call(this, keys as string[], active!);
        });
    }

    getNextItem(key: string | undefined, condition?: (item: Item, index: number) => boolean, step = 1, items: Item[] | undefined = undefined): Item | undefined {
        items = items || this._renderedItems;
        condition = condition || (x => x.type === 'item' && !x.disabled);
        const count = items.length;
        let index = key === undefined ? count - 1 : items.findIndex(x => x?.key === key);
        let checkCount = 0;
        while (checkCount < count) {
            index = (index + step + count) % count;
            const nextItem = items[index];
            if (nextItem && !nextItem.hidden && !this._isItemLimited(nextItem.key!) && condition.call(this, nextItem, index)) {
                return nextItem;
            }
            checkCount++;
        }
    }

    getPrevItem(key: string | undefined, condition?: (item: Item, index: number) => boolean): Item | undefined {
        return this.getNextItem(key, condition, -1);
    }

    activeNext(condition?: (item: Item, index: number) => boolean, step = 1) {
        const nextItem = this.getNextItem(this.getActiveKey(), condition, step);
        if (nextItem) {
            this.toggleActive(nextItem.key!);
        }
    }

    activePrev(condition?: (item: Item, index: number) => boolean) {
        this.activeNext(condition, -1);
    }

    activeFirst(condition?: (item: Item, index: number) => boolean) {
        const nextItem = this.getNextItem(undefined, condition);
        if (nextItem) {
            this.toggleActive(nextItem.key!);
        }
    }

    protected _afterRender(firstRender: boolean) {
        this.props.afterRender?.call(this, firstRender);
    }

    protected _beforeRender(props: RenderableProps<P>) {
        return this.props.beforeRender?.call(this, props);
    }

    protected _getItems(props: RenderableProps<P>): Item[] {
        const {items} = props;
        const {items: stateItems} = this.state;
        return stateItems || (Array.isArray(items) ? items : []);
    }

    /** Filtering callbacks may change keys or omit items, so keep their complete preparation contract. */
    protected _prepareAllItems(props: RenderableProps<P>): boolean {
        return !!props.getItem;
    }

    protected _getItemsLimitContext(props: RenderableProps<P>): unknown {
        return props.getItem;
    }

    protected _isItemVisible(_props: RenderableProps<P>, item: Item, _index: number): boolean {
        return !item.hidden;
    }

    protected _isItemLimited(key: string): boolean {
        return this._limitedItemKeys.has(key);
    }

    protected _renderItems(props: RenderableProps<P>, items: Item[]): ComponentChild[] {
        const {maxVisibleItems = 0} = props;
        const limit = Number.isFinite(maxVisibleItems) && maxVisibleItems > 0 ? Math.max(1, Math.floor(maxVisibleItems)) : 0;
        const context = this._getItemsLimitContext(props);
        if (this._visibleItemsSource !== items || this._visibleItemsLimit !== limit || this._visibleItemsContext !== context) {
            this._visibleItemsRevision++;
        }
        this._visibleItemsSource = items;
        this._visibleItemsLimit = limit;
        this._visibleItemsContext = context;
        this._remainingItemsCount = 0;
        this._limitedItemKeys.clear();
        this._visibleItemIndexes = [];
        if (!limit) {
            this._preparedAllItems = true;
            return super._renderItems(props, items);
        }

        const previous = this.state.visibleItems;
        const count = previous?.revision === this._visibleItemsRevision ? previous.count : limit;
        this._visibleItemsCount = count;
        this._preparedAllItems = this._prepareAllItems(props);
        this._renderedItems = this._preparedAllItems ? items.map((item, index) => this._getItem(props, item, index) || undefined) as Item[] : [];
        const hiddenDefaults = new Map<string, unknown>();

        // Scan raw metadata for the count and keys; only prepare the displayed batch on the fast path.
        items.forEach((rawItem, index) => {
            let item: Item | undefined = this._renderedItems[index];
            if (this._preparedAllItems) {
                if (!item || !this._isItemVisible(props, item, index)) {
                    return;
                }
            } else {
                if (!rawItem) {
                    return;
                }
                const type = rawItem.type ?? this.constructor.defaultItemType;
                if (!hiddenDefaults.has(type)) {
                    let hidden: unknown;
                    for (const defaults of [this.constructor.defaultItemProps, this.constructor.defaultItemPropsMap?.[type], props.itemProps, props.itemPropsMap?.[type]]) {
                        if (defaults && Object.prototype.hasOwnProperty.call(defaults, 'hidden')) {
                            hidden = defaults.hidden;
                        }
                    }
                    hiddenDefaults.set(type, hidden);
                }
                const hidden = Object.prototype.hasOwnProperty.call(rawItem, 'hidden') ? rawItem.hidden : hiddenDefaults.get(type);
                if (hidden) {
                    return;
                }
            }
            if (this._visibleItemIndexes.length >= count) {
                this._remainingItemsCount++;
                this._limitedItemKeys.add(item?.key ?? this._getRawItemKey(rawItem, index));
                return;
            }
            if (!this._preparedAllItems) {
                item = this._getItem(props, rawItem, index) || undefined;
                if (!item || !this._isItemVisible(props, item, index)) {
                    return;
                }
                this._renderedItems[index] = item;
            }
            this._visibleItemIndexes.push(index);
        });
        return this._visibleItemIndexes.map(index => this._renderItem(props, this._renderedItems[index], index));
    }

    protected _handleShowMore = (event: MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        this._showMore(document.activeElement === event.currentTarget);
    };

    protected _showMore(moveFocus = false) {
        if (this._showMorePending || !this._remainingItemsCount || !this._visibleItemsLimit || this.state.loading || this.state.loadFailed) {
            return;
        }
        this._cancelAutoShowMoreFrame();
        this._showMorePending = true;
        const previousLastIndex = this._visibleItemIndexes.at(-1) ?? -1;
        const {showMoreStep = 0} = this.props;
        const step = Number.isFinite(showMoreStep) && showMoreStep > 0 ? Math.max(1, Math.floor(showMoreStep)) : this._visibleItemsLimit;
        this.changeState({visibleItems: {
            revision: this._visibleItemsRevision,
            count: this._visibleItemsCount + step,
        }} as Partial<S>, () => {
            this._showMorePending = false;
            if (!moveFocus) {
                return;
            }
            const nextIndex = this._visibleItemIndexes.find(index => index > previousLastIndex);
            const nextItem = this.element?.querySelector<HTMLElement>(`:scope > [z-item="${nextIndex}"]`);
            if (nextItem) {
                const focusTarget = nextItem.querySelector<HTMLElement>('a[href],button,input,select,textarea,[tabindex]') ?? nextItem;
                if (focusTarget === nextItem) {
                    focusTarget.tabIndex = -1;
                }
                focusTarget.focus();
            }
        });
    }

    protected _setShowMoreElement = (element: HTMLButtonElement | null) => {
        this._showMoreElement = element ?? undefined;
        if (!element) {
            this._disconnectAutoShowMore();
        }
    };

    protected _cancelAutoShowMoreFrame() {
        if (this._autoShowMoreFrame !== undefined) {
            cancelAnimationFrame(this._autoShowMoreFrame);
            this._autoShowMoreFrame = undefined;
        }
    }

    protected _disconnectAutoShowMore() {
        this._cancelAutoShowMoreFrame();
        this._autoShowMoreObserver?.observer.disconnect();
        this._autoShowMoreObserver = undefined;
    }

    protected _syncAutoShowMore() {
        const element = this._showMoreElement;
        const {loading, loadFailed} = this.state;
        if (!this.props.autoShowMore || !element || !this._remainingItemsCount || loading || loadFailed || typeof IntersectionObserver !== 'function') {
            this._disconnectAutoShowMore();
            return;
        }
        const revision = this._visibleItemsRevision;
        const count = this._visibleItemsCount;
        const current = this._autoShowMoreObserver;
        if (current?.element === element && current.revision === revision && current.count === count) {
            return;
        }
        this._disconnectAutoShowMore();
        // Recheck after each batch so short lists can fill the viewport, one batch per animation frame.
        const observer = new IntersectionObserver((entries) => {
            if (this._autoShowMoreObserver?.observer !== observer) {
                return;
            }
            const entry = entries.at(-1);
            if (!entry || entry.target !== element || !entry.isIntersecting || entry.intersectionRatio <= 0) {
                this._cancelAutoShowMoreFrame();
                return;
            }
            if (this._autoShowMoreFrame !== undefined || this._showMorePending) {
                return;
            }
            this._autoShowMoreFrame = requestAnimationFrame(() => {
                this._autoShowMoreFrame = undefined;
                if (this._autoShowMoreObserver?.observer === observer && this.props.autoShowMore && element.isConnected && element.getClientRects().length
                    && this._visibleItemsRevision === revision && this._visibleItemsCount === count) {
                    this._showMore();
                }
            });
        }, {root: null, threshold: 0.01});
        this._autoShowMoreObserver = {observer, element, revision, count};
        observer.observe(element);
    }

    protected _renderShowMore(props: RenderableProps<P>): ComponentChild {
        const count = this._remainingItemsCount;
        const {itemName, name} = this;
        const {showMoreText} = props;
        const content = typeof showMoreText === 'function' ? showMoreText.call(this, count)
            : typeof showMoreText === 'string' ? showMoreText.replaceAll('{count}', String(count)) : this.i18n('showMore', {count});
        const tag = props.component || this.constructor.TAG;
        const component = typeof tag === 'string' && ['ul', 'ol', 'menu'].includes(tag) ? 'li' : 'div';
        return (
            <Listitem
                key="show-more"
                component={component}
                className="list-show-more not-nested-toggle"
                innerComponent="button"
                innerClass={['state', itemName ? `${itemName}-inner${name ? ` ${name}-item-inner` : ''}` : '']}
                innerAttrs={{type: 'button', ref: this._setShowMoreElement, onClick: this._handleShowMore}}
                contentClass="text-gray"
                content={content}
                icon={<span class="more" />}
            />
        );
    }

    protected _getRenderedItem(props: RenderableProps<P>, renderedItem: Item, index: number): Item {
        const {divider, multiline} = props;
        renderedItem = mergeProps({}, removeUndefinedProps({
            divider,
            multiline,
        }), renderedItem);

        const {itemName, name} = this;
        renderedItem.innerClass = [itemName ? `${itemName}-inner${name ? ` ${name}-${renderedItem.type}-inner` : ''}` : '', renderedItem.innerClass];

        if (renderedItem.type === 'item') {
            const {checkbox} = props;
            if (renderedItem.checkbox === false) {
                renderedItem.checked = undefined;
            } else if (checkbox || renderedItem.checkbox) {
                renderedItem.checked = this.isChecked(renderedItem.key!, index, renderedItem.checked as CheckedType);
                if (typeof checkbox === 'object' && renderedItem.checkbox !== false) {
                    renderedItem.checkbox = renderedItem.checkbox ? $.extend({}, checkbox, renderedItem.checkbox) : checkbox;
                }
                if (props.selectOnChecked && renderedItem.checked === true) {
                    renderedItem.selected = true;
                }
            }
            if (renderedItem.active === undefined && this.isActive(renderedItem)) {
                renderedItem.active = true;
            }
        }

        if (renderedItem.icon) {
            this._hasIcons = true;
        }
        if (renderedItem.checked !== undefined) {
            this._hasCheckbox = true;
        }

        return renderedItem;
    }

    protected _getItem(props: RenderableProps<P>, item: Item, index: number): Item | false {
        const renderedItem = super._getItem(props, item, index);
        if (!renderedItem) {
            return renderedItem;
        }
        return this._getRenderedItem(props, renderedItem, index);
    }

    protected _renderItem(props: RenderableProps<P>, item: Item, index: number): ComponentChildren {
        if (item.type === 'item' && this._hasIcons && item.icon === undefined) {
            item.icon = 'EMPTY';
        }
        return super._renderItem(props, item, index);
    }

    protected _handleClick(event: MouseEvent) {
        const info = super._handleClick(event);
        let {checkOnClick} = this.props;
        if (checkOnClick === 'any') {
            checkOnClick = '.item-checkbox,.item-content,.item-icon';
        } else if (checkOnClick === true) {
            checkOnClick = '.item-checkbox';
        }
        if (!checkOnClick || !info || !info.renderedItem) {
            return info;
        }
        const renderedItem = info.renderedItem;
        const itemCheckbox = renderedItem.checkbox;
        const hasCheckbox = itemCheckbox !== false && (this.props.checkbox || itemCheckbox || renderedItem.checked !== undefined);
        if (hasCheckbox && !renderedItem.disabled && info && (event.target as HTMLElement).closest(checkOnClick)) {
            this.toggleChecked(info.key);
            event.stopPropagation();
            return;
        }
        return info;
    }

    protected _getItemFromEvent(event: MouseEvent, target?: HTMLElement) {
        if ((target || event.target as HTMLElement).closest('.list-show-more')) {
            return;
        }
        return super._getItemFromEvent(event, target);
    }

    protected _getClassName(props: RenderableProps<P>): ClassNameLike {
        const {loading, loadFailed} = this.state;
        return [super._getClassName(props), loading ? 'loading' : (loadFailed ? 'is-load-failed' : ''), props.hoverItemActions ? 'with-hover-actions' : ''];
    }

    protected _getProps(props: RenderableProps<P>): Record<string, unknown> {
        const {className, ...others} = super._getProps(props);
        return {
            ...others,
            className: classes(className as ClassNameLike, this._hasIcons ? 'has-icons' : '', this._hasCheckbox ? 'has-checkbox' : '', this._visibleItemsLimit ? 'list-limited' : ''),
        };
    }

    protected _getChildren(props: RenderableProps<P>): ComponentChildren {
        this._hasIcons = false;
        this._hasCheckbox = false;
        this._activeSet.compute();
        const children = super._getChildren(props) as ComponentChild[];
        const {loadFailed} = this.state;
        if (loadFailed) {
            children.push(loadFailed);
        }
        if (this._remainingItemsCount && !this.state.loading && !loadFailed) {
            children.push(this._renderShowMore(props));
        }
        return children;
    }
}
