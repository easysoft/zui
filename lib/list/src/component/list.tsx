import {$, HElement, fetchData} from '@zui/core';
import {ListItem} from './list-item';

import type {ComponentChildren, ComponentType, JSX, RenderableProps} from 'preact';
import type {ClassNameLike, CustomContentType} from '@zui/core';
import type {ListProps, Item, ListState, ItemsSetting, ItemsFetcher} from '../types';

export class List<P extends ListProps = ListProps, S extends ListState = ListState> extends HElement<P, S> {
    static ItemComponents: Record<string, ComponentType<{}>> = {
        item: ListItem,
        element: HElement,
    };

    static NAME = 'list';

    static ITEM_NAME = 'item';

    static ROOT_TAG: keyof JSX.IntrinsicElements = 'ul';

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

    protected _loadedSetting?: ItemsSetting;

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
        this.afterRender(true);
        this.tryLoad();
    }

    componentDidUpdate(): void {
        this.afterRender(false);
        this.tryLoad();
    }

    componentWillUnmount(): void {
        this.props.beforeDestroy?.call(this);
    }

    afterRender(firstRender: boolean) {
        this.props.afterRender?.call(this, firstRender);
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

    protected _renderItem(props: RenderableProps<P>, item: Item, index: number): ComponentChildren {
        const {itemRender} = props;
        if (itemRender) {
            return itemRender.call(this, item, index);
        }
        const {type = 'item'} = item;
        const ItemComponent = (this.constructor as typeof List).ItemComponents[type] || ListItem;
        return <ItemComponent {...item} />;
    }

    protected _getItem(props: RenderableProps<P>, item: Item, index: number): Item {
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
                rootClass: [itemName, `${itemName}-type-${type}`, itemProps?.rootClass, itemPropsMap[type]?.rootClass, item.rootClass],
                className: [`${name}-${type}`, itemProps?.className, itemPropsMap[type]?.className, item.className],
                'zui-list-item': index,
            },
        );
        return getItem ? getItem.call(this, item, index) : item;
    }

    protected _handleClick(event: MouseEvent) {
        const {onClickItem} = this.props;
        if (!onClickItem) {
            return;
        }
        const $item = $(event.target as HTMLElement).closest('[zui-list-item]');
        const index = +$item.attr('zui-list-item')!;
        const item = this._items?.[index];
        if (!item) {
            return;
        }
        onClickItem.call(this, {item, event, index});
    }

    protected _getClassName(props: RenderableProps<P>): ClassNameLike {
        const {loading, loadFailed} = this.state;
        return [props.className, this.name, loading ? 'loading' : (loadFailed ? 'is-load-failed' : '')];
    }

    protected _getProps(props: RenderableProps<P>): Record<string, unknown> {
        return {
            onClick: this._handleClick,
            ...super._getProps(props),
        };
    }

    protected _getItems(props: RenderableProps<P>): Item[] {
        const {items = []} = props;
        if (Array.isArray(items)) {
            this._items = items;
        } else {
            this._items = this.state.items || [];
        }

        return this._items;
    }

    protected _getChildren(props: RenderableProps<P>): ComponentChildren {
        const items = this._getItems(props);
        const children = items.map((item, index) => this._renderItem(props, this._getItem(props, item, index), index));
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
        return props.component || (this.constructor as typeof List).ROOT_TAG;
    }
}
