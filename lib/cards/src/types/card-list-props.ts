import type {Item} from '@zui/common-list';
import type {SizeSetting} from '@zui/core';
import type {ListProps} from '@zui/list';
import type {CardProps} from './card-props';

export interface CardListProps<T extends Item = CardProps> extends ListProps<T> {
    countPerRow?: number;
    gap?: SizeSetting;
}
