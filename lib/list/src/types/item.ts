import type {HElementProps} from '@zui/core';
import type {ItemKey} from './item-key';
import type {ItemType} from './item-type';

export interface Item extends HElementProps {
    type?: ItemType;
    key?: ItemKey;
    [key: string]: unknown;
}
