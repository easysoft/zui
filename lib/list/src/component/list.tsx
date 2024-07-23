import {$, Computed, HElement, classes, fetchData, mergeProps, removeUndefinedProps} from '@zui/core';
import {CommonList} from '@zui/common-list/src/component';
import {Listitem} from './listitem';

import type {ComponentChild, ComponentChildren, RenderableProps} from 'preact';
import type {ClassNameLike, CustomContentType} from '@zui/core';
import type {Item, ItemKey} from '@zui/common-list';
import type {CheckedType} from '@zui/checkbox';
import type {ListProps, ListState, ListItemsSetting, ListItemsFetcher} from '../types';

export class List<P extends ListProps = ListProps, S extends ListState = ListState> extends CommonList<P, S> {
    static ItemComponents: typeof CommonList.ItemComponents  = {
        ...CommonList.ItemComponents,
        default: HElement,
        item: Listitem,
        heading: Listitem,
    };

    static NAME = 'list';

    protected _loadedSetting?: ListItemsSetting;

    protected declare _hasIcons: boolean;

    protected declare _hasCheckbox: boolean;

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

    get isLazyItems() {
        const {items} = this.props;
        return items && !Array.isArray(items);
    }

    componentDidMount() {
        this._afterRender(true);
        this.tryLoad();

        if (this.props.activeOnHover && !this.props.multipleActive) {
            $(this.element).on(`mouseenter${this.namespace}`, '[z-item]', (event) => {
                const info = this._getItemFromEvent(event);
                if (info && info.renderedItem.type === 'item' && !info.renderedItem.disabled && !this.isActive(info.key)) {
                    this.toggleActive(info.key, true);
                }
            });
        }
    }

    componentDidUpdate(): void {
        this._afterRender(false);
        this.tryLoad();
    }

    componentWillUnmount(): void {
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

    isAllChecked(): boolean {
        return this._renderedItems.every(({key}, index) => this.isChecked(key!, index) === true);
    }

    toggleAllChecked(checked?: boolean) {
        if (checked === undefined) {
            checked = !this.isAllChecked();
        }
        return this.toggleChecked(this._renderedItems.map(x => x.key!), checked);
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
            this.props.onCheck?.call(this, change, Object.keys(checkState).filter(x => checkState[x] === true));
        });
    }

    getChecks() {
        return this._renderedItems.reduce<ItemKey[]>((checks, {key}, index) => {
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
        await this.changeState(prevState => {
            const activeMap = this.props.multipleActive ? (keys as string[]).reduce<Record<string, boolean>>((map, key) => {
                map[key] = active!;
                return map;
            }, {...prevState.activeMap}) : {[keys[0]]: active!};
            return {activeMap} as Partial<S>;
        }, () => {
            this.props.onActive?.call(this, keys as string[], active!);
        });
    }

    getNextItem(key: string | undefined, condition?: (item: Item, index: number) => boolean, step = 1, items: Item[] | undefined = undefined): Item | undefined {
        items = items || this._renderedItems;
        const count = items.length;
        if (key === undefined) {
            return items[step ? 0 : count - 1];
        }
        let index = items.findIndex(x => x.key === key);
        if (index < 0 || count < 2) {
            return items[step ? 0 : count - 1];
        }
        let checkCount = 0;
        condition = condition || ((x) => x.type === 'item' && !x.disabled);
        while (checkCount < count) {
            index = (index + step + count) % count;
            const nextItem = items[index];
            if (nextItem && !nextItem.disabled && !nextItem.hidden && condition.call(this, nextItem, index)) {
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

    protected _afterRender(firstRender: boolean) {
        this.props.afterRender?.call(this, firstRender);
    }

    protected _getItems(props: RenderableProps<P>): Item[] {
        const {items} = props;
        const {items: stateItems} = this.state;
        return stateItems || (Array.isArray(items) ? items : []);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
            if (checkbox) {
                renderedItem.checked = this.isChecked(renderedItem.key!, index, renderedItem.checked as CheckedType);
                if (typeof checkbox === 'object') {
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
        if (checkOnClick && !info?.renderedItem.disabled && info && (event.target as HTMLElement).closest(checkOnClick)) {
            this.toggleChecked(info.key);
            event.stopPropagation();
            return;
        }
        return info;
    }

    protected _getClassName(props: RenderableProps<P>): ClassNameLike {
        const {loading, loadFailed} = this.state;
        return [super._getClassName(props), loading ? 'loading' : (loadFailed ? 'is-load-failed' : '')];
    }

    protected _getProps(props: RenderableProps<P>): Record<string, unknown> {
        const {className, ...others} = super._getProps(props);
        return {
            ...others,
            className: classes(className as ClassNameLike, this._hasIcons ? 'has-icons' : '', this._hasCheckbox ? 'has-checkbox' : ''),
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
        return children;
    }
}
