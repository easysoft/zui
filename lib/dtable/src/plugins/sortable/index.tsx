import {definePlugin} from '../../helpers/shared-plugins';
import './style.css';
import type {DTableWithPlugin, DTablePlugin} from '../../types/plugin';
import type {RowInfo} from '../../types/row';

export type SortMoveType = 'before' | 'after';

export type DTableSortableTypes = {
    options: Partial<{
        sortable: boolean;
        sortHandler: string;
        canSort: (this: DTableSortable, row: RowInfo) => boolean;
        canSortTo: (this: DTableSortable, from: RowInfo, to: RowInfo, moveType: SortMoveType) => boolean;
        onBeginSort: (this: DTableSortable, row: RowInfo, event: DragEvent) => false | void;
        onEndSort: (this: DTableSortable, from: RowInfo | undefined, to: RowInfo | undefined, moveType: SortMoveType | undefined) => void;
        onSort: (this: DTableSortable, from: RowInfo, to: RowInfo, moveType: SortMoveType, orders: string[]) => void;
    }>;
    state: Partial<{
        rowOrders: Record<string, number>;
        draggingRow: RowInfo;
        droppingRow: RowInfo;
        moveType: SortMoveType;
    }>;
    col: Partial<{
        sortHandler: boolean;
    }>;
};

export type DTableSortable = DTableWithPlugin<DTableSortableTypes>;

function getRowInfo(dtable: DTableSortable, event: DragEvent): RowInfo | undefined {
    const id = (event.target as HTMLElement)?.closest<HTMLElement>('.dtable-row')?.dataset.id;
    if (!id) {
        return;
    }
    return dtable.getRowInfo(id);
}

const sortablePlugin: DTablePlugin<DTableSortableTypes> = {
    name: 'sortable',
    defaultOptions: {
        sortable: true,
    },
    when: options => !!options.sortable,
    events: {
        dragstart(event) {
            const row = getRowInfo(this, event);
            if (!event.dataTransfer || !row || this.options.onBeginSort?.call(this, row, event) === false) {
                return;
            }
            this.setState({draggingRow: row});
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.dropEffect = 'move';
            this.ref.current?.classList.add('dtable-sorting');
        },
        dragend() {
            const {draggingRow, droppingRow, moveType} = this.state;
            this.setState({draggingRow: undefined, droppingRow: undefined, moveType: undefined});
            this.ref.current?.classList.remove('dtable-sorting');
            this.options.onEndSort?.call(this, draggingRow, droppingRow, moveType);
        },
        dragenter(event) {
            const row = getRowInfo(this, event);
            const {draggingRow} = this.state;
            if (!row || !draggingRow || row.id === draggingRow.id) {
                return;
            }
            const moveType = draggingRow.index > row.index ? 'before' : 'after';
            if (this.options.canSortTo?.call(this, draggingRow, row, moveType) === false) {
                return;
            }
            // const {droppingRow, draggingRow} = this.state;
            // if (droppingRow && draggingRow && row.id === droppingRow.id) {
            //     if (row.index < draggingRow.index) {
            //         row = this.getRowInfoByIndex(row.index  + 1);
            //     }
            // }

            this.setState({droppingRow: row, moveType});
        },
        dragover(event) {
            event.preventDefault();
        },
        drop() {
            const {draggingRow, droppingRow, moveType} = this.state;
            if (draggingRow && droppingRow && moveType && draggingRow.id !== droppingRow.id) {
                let rows = [...this.layout.rows];
                const {canSort} = this.options;
                if (canSort) {
                    rows = rows.filter(row => canSort.call(this, row));
                }
                const fromIndex = rows.findIndex(x => x.id === draggingRow.id);
                const toIndex = rows.findIndex(x => x.id === droppingRow.id);
                const row = rows.splice(fromIndex, 1);
                rows.splice(toIndex, 0, row[0]);
                const rowOrders: Record<string, number> = {};
                const orders: string[] = [];
                rows.forEach(({id}, index) => {
                    rowOrders[id] = index;
                    orders.push(id);
                });
                this.setState({rowOrders});
                this.options.onSort?.call(this, draggingRow, droppingRow, moveType, orders);
            }
        },
    },
    onAddRows(rows) {
        const {rowOrders} = this.state;
        if (!rowOrders) {
            return;
        }
        return rows.sort((row1, row2) => {
            return rowOrders[row1.id] - rowOrders[row2.id];
        });
    },
    onRenderRow({props, row}) {
        const {draggingRow, droppingRow} = this.state;
        const isDragging = row.id === draggingRow?.id;
        const isDropping = row.id === droppingRow?.id;
        const className = [props.className, {
            'is-dragging': isDragging,
            'is-dropping': isDropping,
        }];
        let transformTop = 0;
        if (droppingRow && draggingRow) {
            if (isDragging) {
                transformTop = droppingRow.top - row.top;
            } else if (draggingRow.index > row.index && row.index >= droppingRow.index) {
                className.push('bg-red');
                // Move before
                transformTop = this.layout.rowHeight;
            } else if (draggingRow.index < row.index && row.index <= droppingRow.index) {
                // Move after
                transformTop -= this.layout.rowHeight;
            }
        }
        return {
            className,
            style: {...props.style, transform: transformTop ? `translateY(${transformTop}px)` : undefined},
            draggable: this.options.canSort?.call(this, row) !== false,
        };
    },
};

export const sortable = definePlugin(sortablePlugin);
