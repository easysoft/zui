import {List} from '@zui/list/src/component';
import {Sortable} from '../vanilla/sortable';

import type {RenderableProps} from 'preact';
import type {MoveEvent, SortableEvent} from 'sortablejs';
import type {ClassNameLike} from '@zui/core';
import type {SortableListProps, SortableListState, SortableOptions} from '../types';

export class SortableList<P extends SortableListProps = SortableListProps, S extends SortableListState = SortableListState> extends List<P, S> {
    static defaultProps = {
        ...List.defaultProps,
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

    protected _getClassName(props: RenderableProps<P>): ClassNameLike {
        return [super._getClassName(props), 'sortable-list'];
    }

    protected _getSortableOptions(): SortableOptions | undefined {
        const {sortable, canSortTo} = this.props;
        if (!sortable) {
            return;
        }
        const userOptions = typeof sortable === 'object' ? sortable : {};
        return {
            group: `SortableList.${this.gid}`,
            dataIdAttr: 'z-key',
            draggable: '.list-item',
            ...userOptions,
            onSort: (event: SortableEvent) => {
                const orders = this.getOrders();
                this.props.onSort?.call(this, event, orders);
                userOptions.onSort?.call(this, event);
            },
            onMove: (event: MoveEvent, originEvent: Event) => {
                if (canSortTo) {
                    const fromKey = event.dragged.getAttribute('z-key-path');
                    const toKey = event.related.getAttribute('z-key-path');
                    const fromItem = this.getItem(fromKey!);
                    const toItem = this.getItem(toKey!);
                    const result = canSortTo.call(this, event, fromItem!, toItem!);
                    if (result !== undefined) {
                        return result;
                    }
                }
                return userOptions.onMove?.call(this, event, originEvent);
            },
        };
    }
}
