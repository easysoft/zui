import {mergeProps, toCssSize} from '@zui/core';
import {List} from '@zui/list/src/component';
import {CardItem} from './card-item';

import type {RenderableProps} from 'preact';
import type {Item} from '@zui/common-list';
import type {ListState} from '@zui/list';
import type {CardListProps} from '../types';

export class CardList<T extends CardListProps = CardListProps, S extends ListState = ListState> extends List<T, S> {
    static NAME = 'card-list';

    static TAG = 'div';

    static ItemComponents: typeof List.ItemComponents = {
        ...List.ItemComponents,
        default: CardItem,
        item: CardItem,
    };

    /**
     * Item default common props, used for rendering for all item types.
     */
    static defaultItemProps: Partial<Item> = {
        component: 'div',
    };

    protected _getProps(props: RenderableProps<T>): Record<string, unknown> {
        const propsMap = super._getProps(props);
        const {gap} = props;
        if (gap === undefined) {
            return propsMap;
        }
        return mergeProps({
            style: {
                '--list-gap': toCssSize(gap),
            },
        }, propsMap);
    }

    protected _getRenderedItem(_props: RenderableProps<T>, renderedItem: Item): Item {
        return renderedItem;
    }
}
