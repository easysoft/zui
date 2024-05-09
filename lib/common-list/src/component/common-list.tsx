import {CustomContent, HElement, mergeProps} from '@zui/core';

import type {ComponentChild, ComponentChildren, ComponentType, JSX, RenderableProps} from 'preact';
import type {ClassNameLike} from '../../../core/src/helpers';
import type {CommonListProps, Item, ItemKey, ItemType} from '../types';

/**
 * Generic list component.
 */
export class CommonList<P extends CommonListProps = CommonListProps, S = {}> extends HElement<P, S> {
    /**
     * Root element default name, used for class name.
     */
    static NAME = '';

    /**
     * Item default name, used for class name.
     */
    static ITEM_NAME = 'item';

    /**
     * Root element default tag name, used for DOM rendering.
     */
    static TAG = 'ul';

    /**
     * Item components, used for rendering for different item types.
     */
    static ItemComponents: Partial<Record<ItemType, ComponentType | [ComponentType, Partial<Item> | ((this: CommonList, item: Item, props: CommonListProps) => Partial<Item>)]>> = {
        default: HElement,
        divider: [HElement, {className: 'divider'}],
        space: [HElement, (item) => {
            const {space, flex, style} = item as {space: JSX.CSSProperties['width'], flex: JSX.CSSProperties['flex'], style: JSX.CSSProperties};
            return {
                style: {width: space, height: space, flex, ...style},
            };
        }],
    };

    /**
     * Item default common props, used for rendering for all item types.
     */
    static defaultItemProps: Partial<Item> = {
        component: 'li',
    };

    /**
     * Item default props, used for rendering for different item types.
     */
    static defaultItemPropsMap: Partial<Record<ItemType, Partial<Item>>> = {};

    /**
     * Item default type, used for rendering for item without type.
     */
    static defaultItemType = 'item';

    /**
     * Access to static properties via this.constructor.
     *
     * @see https://github.com/Microsoft/TypeScript/issues/3841#issuecomment-337560146
     */
    declare ['constructor']: typeof CommonList;

    /**
     * Store the raw items.
     */
    protected declare _items: Item[];

    /**
     * Store the rendered items.
     */
    protected declare _renderedItems: Item[];

    constructor(props: P) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
    }

    /**
     * Get the root element name, used for class name.
     */
    get name() {
        return this.props.name || this.constructor.NAME;
    }

    /**
     * Get the item element name, used for class name.
     */
    get itemName() {
        return this.props.itemName || this.constructor.ITEM_NAME;
    }

    getItems() {
        return this._items;
    }

    getRenderedItem(key: ItemKey) {
        return this._renderedItems.find((item) => item.key === key);
    }

    getItem(key: ItemKey): Item | undefined {
        return this._items[this.getItemIndex(key)];
    }

    getItemIndex(key: ItemKey) {
        return this._renderedItems.findIndex((item) => item.key === key);
    }

    getItemByIndex(index: number) {
        return this._items[index];
    }

    /**
     * Get the item key by index.
     *
     * @param index The rendered item index.
     * @returns The item key, if the item is not rendered, return undefined.
     */
    getKey(index: number): ItemKey | undefined {
        return this._renderedItems?.[index]?.key;
    }

    protected _getItemFromEvent(event: MouseEvent, target?: HTMLElement): {
        index: number;
        item: Item;
        renderedItem: Item;
        element: HTMLElement;
        event: MouseEvent;
        key: ItemKey;
        relativeTarget?: unknown;
    } | undefined {
        const element = (target || event.target as HTMLElement).closest('[z-item]') as HTMLElement;
        if (!element || !element.parentElement?.hasAttribute(`z-gid-${this._gid}`)) {
            return;
        }
        const index = +element.getAttribute('z-item')!;
        const item = this._items[index];
        if (!item) {
            return;
        }
        const key = this.getKey(index);
        if (key === undefined) {
            return;
        }
        const renderedItem = this._renderedItems[index];
        return {index, item, element, event, key, renderedItem, relativeTarget: this.props.relativeTarget};
    }

    protected _handleClick(event: MouseEvent) {
        const info = this._getItemFromEvent(event);
        if (!info) {
            return;
        }
        this.props.onClickItem?.call(this, info);
        info.item.onClick?.call(this, event, info);
        return info;
    }

    /**
     * Render the item content.
     *
     * @param props  Current list properties.
     * @param item   The item to render.
     * @param index  The item index.
     * @returns The item rendered content.
     */
    protected _renderItem(props: RenderableProps<P>, item: Item, index: number): ComponentChildren {
        const {beforeRenderItem} = props;
        if (beforeRenderItem) {
            const result = beforeRenderItem.call(this, item, index);
            if (result !== undefined) {
                item = result;
            }
        }

        const {type} = item;
        let {itemRender} = props;
        if (itemRender && typeof itemRender === 'object') {
            itemRender = itemRender[type!];
        }
        if (itemRender) {
            const customResult = itemRender.call(this, item, index);
            if (customResult !== undefined) {
                return <CustomContent z-key={item.key} z-item={index} z-type={type} content={customResult} />;
            }
        }

        const {ItemComponents} = this.constructor;
        let ItemComponent = (item.component as ComponentType) || ItemComponents[type!] || ItemComponents.default || HElement;
        if (Array.isArray(ItemComponent)) {
            let defaultItemProps = ItemComponent[1];
            if (typeof defaultItemProps === 'function') {
                defaultItemProps = defaultItemProps.call(this as CommonList, item, props);
            }
            item = mergeProps({}, defaultItemProps, item);
            ItemComponent = ItemComponent[0];
        }
        if (typeof ItemComponent === 'string') {
            return <CustomContent z-key={item.key} z-item={index} z-type={type} content={{...item, component: ItemComponent}}/>;
        }
        return <ItemComponent z-key={item.key} z-item={index} z-type={type} {...item} />;
    }

    /**
     * Get the rendered item final properties.
     *
     * @param props  Current list properties.
     * @param item   The item to render.
     * @param index  The item index.
     * @returns The item to rendered, if return false, the item will not be rendered.
     */
    protected _getItem(props: RenderableProps<P>, item: Item, index: number): Item | false {
        if (!item) {
            return false;
        }
        const {itemProps, itemPropsMap = {}, getItem, itemKey = 'id'} = props;
        const {type = this.constructor.defaultItemType} = item;
        const {name, itemName} = this;
        const {defaultItemProps = {}, defaultItemPropsMap = {}} = this.constructor;

        item = mergeProps(
            {type},
            defaultItemProps,
            defaultItemPropsMap[type],
            itemProps,
            itemPropsMap[type],
            {className: [name ? `${name}-${type}` : '', itemName]},
            item,
            {
                _item: item,
                _index: index,
                key: String((itemKey ? item[itemKey] : item.key) ?? (item.key ?? index)),
                onClick: undefined,
            },
        );

        if (getItem) {
            const result = getItem.call(this, item, index);
            if (result !== undefined) {
                return result;
            }
        }
        return item;
    }

    protected _getProps(props: RenderableProps<P>): Record<string, unknown> {
        const finalProps = super._getProps(props);
        return {onClick: this._handleClick, ...finalProps};
    }

    /**
     * Get the list root element classname list.
     *
     * @param props  Current list properties.
     * @returns The list root element classname list.
     */
    protected _getClassName(props: RenderableProps<P>): ClassNameLike {
        return [this.name, props.className];
    }

    /**
     * Get final rendered item list.
     *
     * @param props  Current list properties.
     * @returns Item list.
     */
    protected _getItems(props: RenderableProps<P>): Item[] {
        let {items = []} = props;
        if (typeof items === 'function') {
            items = items.call(this);
        } else if (!Array.isArray(items)) {
            items = [];
        }
        return items as Item[];
    }

    /**
     * Render items.
     *
     * @param props  props  Current list properties.
     * @param items  Render items.
     * @returns React render children.
     */
    protected _renderItems(props: RenderableProps<P>, items: Item[]): ComponentChild[] {
        this._renderedItems = items.map((item, index) => {
            const finalItem = this._getItem(props, item, index);
            return finalItem ? finalItem : undefined;
        }) as Item[];
        return this._renderedItems.reduce<ComponentChild[]>((children, item, index) => {
            if (item) {
                children.push(this._renderItem(props, item, index));
            }
            return children;
        }, []);
    }

    /**
     * Get root element rendered children.
     *
     * @param props Current list properties.
     * @returns React render children.
     */
    protected _getChildren(props: RenderableProps<P>): ComponentChildren {
        const items = this._getItems(props);
        this._items = items;
        const children = this._renderItems(props, items);
        if (props.children) {
            children.push(props.children);
        }
        return children;
    }

    /**
     * Get root element rendered component type.
     *
     * @param props Current list properties.
     * @returns React component type.
     */
    protected _getComponent(props: RenderableProps<P>): ComponentType | keyof JSX.IntrinsicElements {
        return props.component || (this.constructor.TAG as keyof JSX.IntrinsicElements);
    }
}
