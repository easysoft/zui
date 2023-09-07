import type {HElementProps} from './h-element-props';

export type HItemType = 'item' | (string & {});

export type HItemKey = string | number;

/** HList item. */
export interface HItem extends HElementProps {
    /** Item type. */
    type?: HItemType;

    /** Item key. */
    key?: HItemKey;

    /** Other attributes. */
    [key: string]: unknown;
}
