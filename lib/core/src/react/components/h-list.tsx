import {HElement} from './h-element';
import {mergeProps} from '../../helpers';

import type {ComponentChildren, ComponentType, JSX, RenderableProps} from 'preact';
import type {ClassNameLike} from '../../helpers';
import type {HListProps, HItem, HItemKey, HItemType} from '../types';

/**
 * Generic list component.
 */
export class HList<P extends HListProps = HListProps, S = {}> extends HElement<P, S> {
    /**
     * Root element default name, used for class name.
     */
    static NAME = '';

    /**
     * Item default name, used for class name.
     */
    static ITEM_NAME = '';

    /**
     * Root element default tag name, used for DOM rendering.
     */
    static TAG = 'ul';

    /**
     * Item components, used for rendering for different item types.
     */
    static ItemComponents: Record<HItemType, ComponentType | [ComponentType, Partial<HItem> | ((this: HList, item: HItem, props: HListProps) => Partial<HItem>)]> = {
        default: HElement,
        item: [HElement, (item) => ({className: ['item', item.className]})],
        divider: [HElement, (item) => ({className: ['divider', item.className]})],
        heading: [HElement, (item) => ({className: ['heading', item.className]})],
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
    static defaultItemProps: Partial<HItem> = {
        component: 'li',
    };

    /**
     * Item default props, used for rendering for different item types.
     */
    static defaultItemPropsMap: Partial<Record<HItemType, Partial<HItem>>> = {};

    /**
     * Item default type, used for rendering for item without type.
     */
    static defaultItemType = 'item';

    /**
     * Access to static properties via this.constructor.
     *
     * @see https://github.com/Microsoft/TypeScript/issues/3841#issuecomment-337560146
     */
    declare ['constructor']: typeof HList;

    /**
     * Store the rendered item keys by index.
     */
    protected declare _keyIndexes: HItemKey[];

    /**
     * Store the rendered items.
     */
    protected declare _items: HItem[];

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

    /**
     * Get the item key by index.
     *
     * @param index The rendered item index.
     * @returns The item key, if the item is not rendered, return undefined.
     */
    getKey(index: number): HItemKey | undefined {
        return this._keyIndexes?.[index];
    }

    /**
     * Get the rendered item by index.
     *
     * @param key  The item key.
     * @returns The rendered item.
     */
    getItemByKey(key: HItemKey): HItem | undefined {
        if (!this._items) {
            return;
        }
        const index = this._keyIndexes?.indexOf(key);
        if (index === undefined || index < 0) {
            return;
        }
        return this._items[index];
    }

    /**
     * Render the item content.
     *
     * @param props  Current list properties.
     * @param item   The item to render.
     * @param index  The item index.
     * @returns The item rendered content.
     */
    protected _renderItem(props: RenderableProps<P>, item: HItem, index: number): ComponentChildren {
        const {type} = item;
        let {itemRender} = props;
        if (itemRender && typeof itemRender === 'object') {
            itemRender = itemRender[type!];
        }
        if (itemRender) {
            return itemRender.call(this, item, index);
        }

        const {ItemComponents} = this.constructor;
        let ItemComponent = ItemComponents[type!] || ItemComponents.default;
        if (Array.isArray(ItemComponent)) {
            let defaultItemProps = ItemComponent[1];
            if (typeof defaultItemProps === 'function') {
                defaultItemProps = defaultItemProps.call(this, item, props);
            }
            item = mergeProps({}, defaultItemProps, item);
            ItemComponent = ItemComponent[0];
        }
        return <ItemComponent z-key={item.key} z-index={index} z-type={type} {...item} />;
    }

    /**
     * Get the rendered item final properties.
     *
     * @param props  Current list properties.
     * @param item   The item to render.
     * @param index  The item index.
     * @returns The item to rendered, if return false, the item will not be rendered.
     */
    protected _getItem(props: RenderableProps<P>, item: HItem, index: number): HItem | false | undefined {
        const {itemProps, itemPropsMap = {}, getItem, keyName = 'id'} = props;
        const {type = this.constructor.defaultItemType} = item;
        const {name, itemName} = this;
        const {defaultItemProps = {}, defaultItemPropsMap = {}} = this.constructor;

        item = mergeProps(
            {type, key: item[keyName] ?? index},
            defaultItemProps,
            defaultItemPropsMap[type],
            itemProps,
            itemPropsMap[type],
            {className: [itemName, `${name}-${type}`]},
            item,
        );

        return getItem ? getItem.call(this, item, index) : item;
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
    protected _getItems(props: RenderableProps<P>): HItem[] {
        let {items = []} = props;
        if (typeof items === 'function') {
            items = items.call(this);
        } else if (!Array.isArray(items)) {
            items = [];
        }
        this._items = items as HItem[];
        this._keyIndexes = [];
        return this._items.reduce<HItem[]>((list, item, index) => {
            const finalItem = this._getItem(props, item, index) ?? item;
            if (finalItem !== false) {
                list.push(finalItem);
                this._keyIndexes![index] = finalItem.key!;
            }
            return list;
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
        const children = items.map((item, index) => this._renderItem(props, item, index));
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
