import {List} from '@zui/list/src/component';
import {Card} from './card';

import type {Item} from '@zui/common-list';
import type {ListState} from '@zui/list';
import type {CardListProps} from '../types';

export class CardList<T extends CardListProps = CardListProps, S extends ListState = ListState> extends List<T, S> {
    static NAME = 'card-list';

    static TAG = 'div';

    static ItemComponents: typeof List.ItemComponents = {
        ...List.ItemComponents,
        default: Card,
        item: Card,
    };

    /**
     * Item default common props, used for rendering for all item types.
     */
    static defaultItemProps: Partial<Item> = {
        component: 'div',
    };
}
