import {Tree} from '@zui/tree/src/components';
import {Sortable} from '../vanilla/sortable';

import type {RenderableProps} from 'preact';
import type {MoveEvent, SortableEvent} from 'sortablejs';
import type {ClassNameLike} from '@zui/core';
import type {SortableTreeProps, SortableTreeState, SortableOptions} from '../types';

export class SortableTree<P extends SortableTreeProps = SortableTreeProps, S extends SortableTreeState = SortableTreeState> extends Tree<P, S> {
    static defaultProps: Partial<SortableTreeProps> = {
        ...Tree.defaultProps,
        sortable: true,
    };

    static inheritNestedProps = [...Tree.inheritNestedProps, 'onSort', 'sortable', 'canSortTo'];

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
        return [super._getClassName(props), 'sortable-tree'];
    }

    protected _getSortableOptions(): SortableOptions | undefined {
        const {sortable} = this.props;
        if (!sortable) {
            return;
        }
        const userOptions = typeof sortable === 'object' ? sortable : {};
        const {onSort, canSortTo, parentKey} = this.props;
        return {
            group: `SortableTree.${this.gid}`,
            dataIdAttr: 'z-key',
            draggable: '.tree-item',
            ...userOptions,
            onSort: (event: SortableEvent) => {
                const orders = this.getOrders();
                onSort?.call(this, event, orders, parentKey);
                userOptions.onSort?.call(this, event);
            },
            onMove: (event: MoveEvent, originEvent: Event) => {
                if (canSortTo) {
                    const fromKey = event.dragged.getAttribute('z-key-path');
                    const toKey = event.related.getAttribute('z-key-path');
                    const fromItem = this.getItem(fromKey!);
                    const toItem = this.getItem(toKey!);
                    const result = canSortTo.call(this, event, fromItem!, toItem!, parentKey);
                    if (result !== undefined) {
                        return result;
                    }
                }
                return userOptions.onMove?.call(this, event, originEvent);
            },
        };
    }
}
