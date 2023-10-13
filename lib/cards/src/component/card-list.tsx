import {ClassNameLike, mergeProps, toCssSize} from '@zui/core';
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

    protected _getClassName(props: RenderableProps<T>): ClassNameLike {
        return [super._getClassName(props), props.countPerRow ? 'card-grid' : ''];
    }

    protected _getProps(props: RenderableProps<T>): Record<string, unknown> {
        const {gap, countPerRow} = props;
        return mergeProps({
            style: {
                '--list-gap': gap ? toCssSize(gap) : undefined,
                '--list-count-per-row': countPerRow,
            },
        }, super._getProps(props));
    }

    protected _getRenderedItem(_props: RenderableProps<T>, renderedItem: Item): Item {
        return renderedItem;
    }
}
