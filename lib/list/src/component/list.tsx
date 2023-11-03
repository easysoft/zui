import {$, HElement, classes, fetchData, mergeProps, removeUndefinedProps} from '@zui/core';
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

    constructor(props: P) {
        super(props);
        this.state = {
            checked: {},
        } as S;
    }

    componentDidMount() {
        this._afterRender(true);
        this.tryLoad();
    }

    componentDidUpdate(): void {
        this._afterRender(false);
        this.tryLoad();
    }

    componentWillUnmount(): void {
        this.props.beforeDestroy?.call(this);
    }

    setItems(items?: Item[], error?: Error) {
        const {onLoadFail} = this.props;
        this.setState({
            loading: false,
            items: items || [],
            loadFailed: error ? (typeof onLoadFail === 'function' ? (onLoadFail as (error: Error) => CustomContentType | undefined).call(this, error as Error) : onLoadFail) || String(error) : undefined,
        });
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

    toggleAllChecked(checked?: boolean): void {
        if (checked === undefined) {
            checked = !this.isAllChecked();
        }
        this.toggleChecked(this._renderedItems.map(x => x.key!), checked);
    }

    toggleChecked(keyOrChange: ItemKey | ItemKey[] | Record<ItemKey, CheckedType>, checked?: boolean): void {
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

        this.setState(prevState => ({
            checked: {
                ...prevState.checked,
                ...change,
            },
        }), () => {
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
        const {divider, hover, multiline} = props;
        renderedItem = mergeProps({}, removeUndefinedProps({
            divider,
            hover,
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
                if (props.activeOnChecked && renderedItem.checked) {
                    renderedItem.active = true;
                }
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
        if (checkOnClick && info && (event.target as HTMLElement).closest(checkOnClick)) {
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
        const children = super._getChildren(props) as ComponentChild[];
        const {loadFailed} = this.state;
        if (loadFailed) {
            children.push(loadFailed);
        }
        return children;
    }
}
