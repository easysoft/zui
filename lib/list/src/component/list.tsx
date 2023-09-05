import {$, HElement, createRef, fetchData} from '@zui/core';
import {ListItem} from './list-item';

import type {ComponentChildren, ComponentType, JSX, RenderableProps} from 'preact';
import type {ClassNameLike, CustomContentType} from '@zui/core';
import type {ListProps, Item, ListState, ItemsSetting, ItemsFetcher, ItemKey, ListSpaceProps} from '../types';

export class List<P extends ListProps = ListProps, S extends ListState = ListState> extends HElement<P, S> {
    static ItemComponents: Record<string, ComponentType | [ComponentType, Partial<Item> | ((this: List, item: Item, props: ListProps) => Partial<Item>)]> = {
        item: ListItem,
        custom: ListItem,
        element: HElement,
        divider: [HElement, (item) => ({className: [item.className, item.rootClass, 'divider']})],
        heading: ListItem,
        space: [HElement, (item) => {
            const {space, flex, style} = item as ListSpaceProps;
            return {
                className: [item.className, item.rootClass],
                style: {width: space, height: space, flex, ...style},
            };
        }],
    };

    static NAME = 'list';

    static ITEM_NAME = 'item';

    static ROOT_TAG = 'ul';

    static defaultItemProps: Partial<Item> = {
        component: 'li',
    };

    /**
     * Access to static properties via this.constructor.
     *
     * @see https://github.com/Microsoft/TypeScript/issues/3841#issuecomment-337560146
     */
    declare ['constructor']: typeof List;

    protected _items?: Item[];

    protected _ref = createRef<HTMLElement>();

    protected _loadedSetting?: ItemsSetting;

    protected _keyIndexes?: ItemKey[];

    state: S;

    constructor(props: P) {
        super(props);
        this.state = {} as S;
        this._handleClick = this._handleClick.bind(this);
    }

    get name() {
        return this.props.name || this.constructor.NAME;
    }

    get itemName() {
        return this.props.itemName || this.constructor.ITEM_NAME;
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

    load(): void {
        const {items, onLoad, onLoadFail} = this.props;
        this._loadedSetting = items;
        this.setState({loading: true, items: []}, async () => {
            const newState = {loading: false} as Partial<S>;
            try {
                const newItems = await fetchData(items as ItemsFetcher, [this], {throws: true});
                newState.items = onLoad?.call(this, newItems) || newItems;
            } catch (error) {
                newState.loadFailed = (typeof onLoadFail === 'function' ? (onLoadFail as (error: Error) => CustomContentType | undefined).call(this, error as Error) : onLoadFail) || String(error);
            }
            this.setState(newState);
        });
    }

    tryLoad(): void {
        const {loading} = this.state;
        const {items} = this.props;
        if (!loading || !items || Array.isArray(items) || items === this._loadedSetting) {
            return;
        }
        this.load();
    }

    getKey(index: number): ItemKey | undefined {
        return this._keyIndexes?.[index];
    }

    getItemByKey(key: ItemKey) {
        if (!this._items) {
            return;
        }
        const index = this._keyIndexes?.indexOf(key);
        if (index === undefined || index < 0) {
            return;
        }
        return this._items[index];
    }

    protected _afterRender(firstRender: boolean) {
        this.props.afterRender?.call(this, firstRender);
    }

    protected _renderItem(props: RenderableProps<P>, item: Item): ComponentChildren {
        const {itemRender} = props;
        if (itemRender) {
            return itemRender.call(this, item);
        }
        const {type = 'item'} = item;
        let ItemComponent = (this.constructor as typeof List).ItemComponents[type] || ListItem;
        if (Array.isArray(ItemComponent)) {
            let defaultItemProps = ItemComponent[1];
            if (typeof defaultItemProps === 'function') {
                defaultItemProps = defaultItemProps.call(this, item, props);
            }
            $.extend(item, defaultItemProps);
            ItemComponent = ItemComponent[0];
        }
        return <ItemComponent zui-key={item.key} {...item} />;
    }

    protected _getItem(props: RenderableProps<P>, item: Item, index: number): Item | undefined {
        const {itemProps, itemPropsMap = {}, getItem, keyName = 'id'} = props;
        const {type = 'item'} = item;
        const {name, itemName} = this;
        item = $.extend(
            {
                ...this.constructor.defaultItemProps,
                key: item[keyName] ?? index,
                type,
            },
            itemProps,
            itemPropsMap[type],
            item,
            {
                rootClass: [itemName, `${name}-${type}`, itemProps?.rootClass, itemPropsMap[type]?.rootClass, item.rootClass],
                className: [itemName ? `${itemName}-inner` : '', itemProps?.className, itemPropsMap[type]?.className, item.className],
                'zui-item': index,
                'zui-type': type,
                style: {...itemProps?.style, ...itemPropsMap[type]?.style, ...item.style},
            },
        );
        item = getItem ? getItem.call(this, item, index) : item;
        return item;
    }

    protected _getItemFromEvent(event: MouseEvent): {
        index: number;
        item: Item;
        element: HTMLElement;
        event: MouseEvent;
        key: ItemKey;
    } | undefined {
        const element = (event.target as HTMLElement).closest('[zui-item]') as HTMLElement;
        if (!element || element.parentElement !== this._ref.current) {
            return;
        }
        const index = +element.getAttribute('zui-item')!;
        const item = this._items?.[index];
        if (!item) {
            return;
        }
        const key = this.getKey(index);
        if (key === undefined) {
            return;
        }
        return {index, item, element, event, key};
    }

    protected _handleClick(event: MouseEvent) {
        const {onClickItem} = this.props;
        if (!onClickItem) {
            return;
        }
        const info = this._getItemFromEvent(event);
        if (!info) {
            return;
        }
        onClickItem.call(this, info);
    }

    protected _getClassName(props: RenderableProps<P>): ClassNameLike {
        const {loading, loadFailed} = this.state;
        return [props.className, this.name, loading ? 'loading' : (loadFailed ? 'is-load-failed' : '')];
    }

    protected _getProps(props: RenderableProps<P>): Record<string, unknown> {
        return {
            onClick: this._handleClick,
            ...super._getProps(props),
            ref: this._ref,
        };
    }

    protected _getItems(props: RenderableProps<P>): Item[] {
        const {items = []} = props;
        if (Array.isArray(items)) {
            this._items = items;
        } else {
            this._items = this.state.items || [];
        }
        this._keyIndexes = [];
        return this._items.reduce<Item[]>((list, item, index) => {
            const finalItem = this._getItem(props, item, index);
            if (finalItem) {
                list.push(finalItem);
                this._keyIndexes![index] = finalItem.key!;
            }
            return list;
        }, []);
    }

    protected _getChildren(props: RenderableProps<P>): ComponentChildren {
        const items = this._getItems(props);
        const children = items.map((item) => this._renderItem(props, item));
        const {loadFailed} = this.state;
        if (loadFailed) {
            children.push(loadFailed);
        }
        if (props.children) {
            children.push(props.children);
        }
        return children;
    }

    protected _getComponent(props: RenderableProps<P>): ComponentType | keyof JSX.IntrinsicElements {
        return props.component || ((this.constructor as typeof List).ROOT_TAG as keyof JSX.IntrinsicElements);
    }
}
