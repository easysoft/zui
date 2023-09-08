import type {ComponentChildren} from 'preact';
import type {HElementProps} from '@zui/core';
import type {Item, ItemType} from './item';

/** Item render function. */
export type ItemRender<T extends Item = Item> = (item: T, index: number) => ComponentChildren;

/** List items setting. */
export type ItemsSetting<T extends Item = Item> = T[] | (() => T[]);

/**
 * HList properties.
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
    keyName?: string;

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
     * @param item List item definition.
     * @param index List item index.
     * @returns List item definition or false to skip this item.
     */
    getItem?: (item: T, index: number) => T | false | undefined;

    /**
     * Item render functions.
     */
    itemRender?: ItemRender<T> | Record<ItemType, ItemRender<T>>;
}
