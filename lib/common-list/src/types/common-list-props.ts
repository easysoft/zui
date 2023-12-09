import type {CustomContentType, HElementProps} from '@zui/core';
import type {Item, ItemType} from './item';

/** Item render function. */
export type ItemRender<T extends Item = Item> = (item: T, index: number) => CustomContentType;

/** List items setting. */
export type ItemsSetting<T extends Item = Item> = T[] | (() => T[]);

/**
 * Represents the props for the CommonList component.
 */
export interface CommonListProps<T extends Item = Item> extends HElementProps {
    /**
     * List name, used to generate the class name.
     */
    name?: string;

    /**
     * Item name, used to generate every item class name.
     */
    itemName?: string;

    /**
     * Item key name, used to generate every item key form item definition.
     */
    itemKey?: string;

    /**
     * List items, can be an array or a function that returns an array.
     */
    items?: ItemsSetting<T> | {};

    /**
     * Item common properties.
     */
    itemProps?: Partial<T>;

    /**
     * Item properties map for different item types.
     */
    itemPropsMap?: Partial<Record<ItemType, Partial<T>>>;

    /**
     * Get item definition, can convert original item.
     *
     * @param item - The list item definition.
     * @param index - The list item index.
     * @returns The list item definition or false to skip this item.
     */
    getItem?: (item: T, index: number) => T | false | undefined;

    /**
     * Item render functions.
     */
    itemRender?: ItemRender<T> | Record<ItemType, ItemRender<T>>;

    /**
     * Before render item, can convert original item.
     *
     * @param item - The list item definition.
     * @param index - The list item index.
     * @returns The modified list item definition.
     */
    beforeRenderItem?: (item: T, index: number) => T | void;

    /**
     * Handles the click event on an item.
     *
     * @param info - The information about the clicked item.
     */
    onClickItem?: (info: {item: T, index: number, event: MouseEvent, renderedItem: T, relativeTarget?: unknown}) => void;

    /**
     * The relative target for the list.
     */
    relativeTarget?: unknown;
}
