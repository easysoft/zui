import type {ClassNameLike, HElementProps} from '@zui/core';
import type {ItemKey} from './item-key';
import type {ItemType} from './item-type';

export interface Item extends HElementProps {
    type?: ItemType;
    key?: ItemKey;
    rootClass?: ClassNameLike;
    [key: string]: unknown;
}
