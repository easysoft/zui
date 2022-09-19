import {definePlugin} from '../../helpers/shared-plugins';
import './style.css';

type SortMoveType = 'before' | 'after';

type SortableDTable = DTableWithPlugin<DTableSortableOptions, DTableSortableState> & DTableSortableProps;

type DTableSortableOptions = Partial<{
    sortable: boolean;
    sortHandler: string;
    canSort: (this: SortableDTable, row: RowInfo) => boolean;
    canSortTo: (this: SortableDTable, from: RowInfo, to: RowInfo, moveType: SortMoveType) => boolean;
    onBeginSort: (this: SortableDTable, row: RowInfo, event: DragEvent) => false | void;
    onEndSort: (this: SortableDTable, from: RowInfo | undefined, to: RowInfo | undefined, moveType: SortMoveType | undefined) => void;
    onSort: (this: SortableDTable, from: RowInfo, to: RowInfo, moveType: SortMoveType, orders: RowID[]) => void;
}>;

type DTableSortableState = Partial<{
    rowOrders: Record<RowID, number>;
    draggingRow: RowInfo;
    droppingRow: RowInfo;
    moveType: SortMoveType;
}>;

type DTableSortableColSetting = Partial<{
    sortHandler: boolean;
}>;

type DTableSortableProps = {
    onSortDragStart: typeof onSortDragStart;
    onSortDragEnd: typeof onSortDragEnd;
    onSortDragEnter: typeof onSortDragEnter;
    onSortDragOver: typeof onSortDragOver;
    onSortDrop: typeof onSortDrop;
};

function getRowInfo(dtable: SortableDTable, event: DragEvent): RowInfo | undefined {
    const id = (event.target as HTMLElement)?.closest<HTMLElement>('.dtable-row')?.dataset.id;
    if (!id) {
        return;
    }
    return dtable.getRowInfo(id);
}

function onSortDragStart(this: SortableDTable, event: DragEvent) {
    const row = getRowInfo(this, event);
    if (!event.dataTransfer || !row || this.options.onBeginSort?.call(this, row, event) === false) {
        return;
    }
    this.setState({draggingRow: row});
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.dropEffect = 'move';
    this.ref.current?.classList.add('dtable-sorting');
    return true;
}

function onSortDragEnd(this: SortableDTable, event: DragEvent) {
    const {draggingRow, droppingRow, moveType} = this.state;
    this.setState({draggingRow: undefined, droppingRow: undefined, moveType: undefined});
    this.ref.current?.classList.remove('dtable-sorting');
    this.options.onEndSort?.call(this, draggingRow, droppingRow, moveType);
}

function onSortDragEnter(this: SortableDTable, event: DragEvent) {
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
}

function onSortDragOver(this: SortableDTable, event: DragEvent) {
    event.preventDefault();
    return true;
}

function onSortDrop(this: SortableDTable, event: DragEvent) {
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
        const rowOrders: Record<RowID, number> = {};
        const orders: RowID[] = [];
        rows.forEach(({id}, index) => {
            rowOrders[id] = index;
            orders.push(id);
        });
        this.setState({rowOrders});
        this.options.onSort?.call(this, draggingRow, droppingRow, moveType, orders);
    }
}

export const sortable: DTablePlugin<DTableSortableOptions, DTableSortableState, DTableSortableColSetting, DTableSortableProps> = {
    name: 'sortable',
    defaultOptions: {
        sortable: true,
    },
    when: options => !!options.sortable,
    onCreate() {
        this.onSortDragStart = onSortDragStart.bind(this);
        this.onSortDragEnd = onSortDragEnd.bind(this);
        this.onSortDragEnter = onSortDragEnter.bind(this);
        this.onSortDragOver = onSortDragOver.bind(this);
        this.onSortDrop = onSortDrop.bind(this);
    },
    onMounted() {
        const {current} = this.ref;
        if (current) {
            current.addEventListener('dragstart', this.onSortDragStart as EventListener);
            current.addEventListener('dragend', this.onSortDragEnd as EventListener);
            current.addEventListener('dragenter', this.onSortDragEnter as EventListener);
            current.addEventListener('dragover', this.onSortDragOver as unknown as EventListener);
            current.addEventListener('drop', this.onSortDrop as EventListener);
        }
    },
    beforeLayout() {
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

export default definePlugin<DTableSortableOptions, DTableSortableState, DTableSortableColSetting, DTableSortableProps>(sortable);
