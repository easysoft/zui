import {List} from '@zui/list/src/component';
import {Sortable} from '../vanilla/sortable';

import type {RenderableProps} from 'preact';
import type {SortableEvent} from 'sortablejs';
import type {ClassNameLike} from '@zui/core';
import type {SortableListProps, SortableListState, SortableOptions} from '../types';
import {Item} from '@zui/common-list/src/types';

export class SortableList<P extends SortableListProps = SortableListProps, S extends SortableListState = SortableListState> extends List<P, S> {
    static defaultProps: Partial<SortableListProps> = {
        sortable: true,
    };

    declare _sortable: Sortable;

    componentDidMount(): void {
        super.componentDidMount();
        const sortableOptions = this._getSortableOptions();
        if (sortableOptions) {
            this._sortable = new Sortable(this.element, sortableOptions);
        }
    }

    getOrders() {
        return this._sortable?.toArray() || [];
    }

    protected _getItems(props: RenderableProps<P>): Item[] {
        const items = super._getItems(props);
        const {orders} = this.state;
        if (orders) {
            const newItems: Item[] = [...items];
            const orderMap = orders.reduce<Map<string, number>>((map, order, index) => {
                map.set(order, index);
                return map;
            }, new Map());
            return newItems.sort((a, b) => {
                const aOrder = orderMap.get(a.key!);
                const bOrder = orderMap.get(b.key!);
                if (aOrder === undefined) {
                    return bOrder === undefined ? 0 : 1;
                }
                if (bOrder === undefined) {
                    return -1;
                }
                return aOrder - bOrder;
            });
        }
        return items;
    }

    protected _getClassName(props: RenderableProps<P>): ClassNameLike {
        return [super._getClassName(props), 'sortable-list'];
    }

    protected _getSortableOptions(): SortableOptions | undefined {
        const {sortable} = this.props;
        if (!sortable) {
            return;
        }
        const userOptions = typeof sortable === 'object' ? sortable : {};
        return {
            dataIdAttr: 'z-key',
            draggable: '.list-item',
            ...userOptions,
            onSort: (event: SortableEvent) => {
                const orders = this.getOrders();
                this.setState({orders});
                this.props.onSort?.call(this, event, orders);
                userOptions.onSort?.call(this, event);
            },
        };
    }
}
