import type {HElementProps} from '@zui/core';

export type ItemType = 'item' | 'divider' | 'space' | (string & {});

export type ItemKey = string;

/** HList item. */
export interface Item extends HElementProps {
    /** Item type. */
    type?: ItemType;

    /** Item key. */
    key?: ItemKey;

    /** Other attributes. */
    [key: string]: unknown;
}
