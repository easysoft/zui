import type {ComponentChildren} from 'preact';
import type {HElementProps} from './h-element-props';
import type {HItem, HItemType} from './h-item';

/** Item render function. */
export type HItemRender = (item: HItem, index: number) => ComponentChildren;

/**
 * HList properties.
 */
export interface HListProps extends HElementProps {
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
    items?: HItem[] | (() => HItem[]) | {};

    /**
     * Item common properties.
     */
    itemProps?: Partial<HItem>;

    /**
     * Item properties map for different item types.
     */
    itemPropsMap?: Partial<Record<HItemType, Partial<HItem>>>;

    /**
     * Get item definition, can convert original item.
     *
     * @param item List item definition.
     * @param index List item index.
     * @returns List item definition or false to skip this item.
     */
    getItem?: (item: HItem, index: number) => HItem | false | undefined;

    /**
     * Item render functions.
     */
    itemRender?: HItemRender | Record<HItemType, HItemRender>;
}
