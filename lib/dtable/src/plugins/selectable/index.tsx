import {classes} from '@zui/browser-helpers/src/classes';
import {definePlugin} from '../../helpers/shared-plugins';
import './style.css';

type DTableSelectable     = DTableWithPlugin<DTableSelectableOptions, DTableSelectableState> & DTableSelectableMethods;
type DTableColIndex       = number;
type DTableRowIndex       = number;
type DTableColSelection   = `C${DTableColIndex}`;
type DTableRowSelection   = `R${DTableRowIndex}`;
type DTableCellSelection  = `${DTableColSelection}${DTableRowSelection}`;
type DTableSelection      = DTableColSelection | DTableRowSelection | DTableCellSelection;
type DTableRangeSelection = `${DTableSelection}:${DTableSelection}`;
type DTableSelections     = (DTableSelection | DTableRangeSelection)[];
type DTableCellPos        = [col: DTableColIndex, row: DTableRowIndex];

const REG_CELL = /C(\d+)R(\d+)/i;
const REG_SELECTION = /(?:C(\d+))?(?:R(\d+))?/i;

function parseCell(cellSelection: DTableCellSelection): DTableCellPos | undefined {
    const result = REG_CELL.exec(cellSelection);
    if (!result || result.length < 3) {
        return;
    }
    const [, col, row] = result;
    return [+col, +row];
}

function parseSelectionCell(selection: DTableSelection): DTableCellPos | undefined {
    const result = REG_SELECTION.exec(selection);
    if (!result) {
        return;
    }
    const [, colStr = -1, rowStr = -1] = result;
    const col = +colStr;
    const row = +rowStr;
    return [col, row];
}

function parseSelection(this: DTableSelectable, selections: DTableSelection): DTableCellPos[] {
    const cells: DTableCellPos[] = [];
    const selection = parseSelectionCell(selections);
    if (!selection) {
        return cells;
    }
    const [col, row] = selection;
    if (col >= 0) {
        if (row >= 0) {
            cells.push([col, row]);
        } else {
            const rowsCount = this.layout.rows.length;
            for (let i = 0; i < rowsCount; i++) {
                cells.push([col, i]);
            }
        }
    } else if (row >= 0) {
        const {colsInfo} = this.layout;
        const colsCount = colsInfo.fixedLeftCols.length + colsInfo.scrollCols.length + colsInfo.fixedRightCols.length;
        for (let i = 0; i < colsCount; i++) {
            cells.push([i, row]);
        }
    }
    return cells;
}

function parseRange(this: DTableSelectable, range: DTableRangeSelection): DTableCellPos[] {
    const [start, end] = range.split(':') as [DTableSelection, DTableSelection];
    if (!start) {
        if (!end) {
            return [];
        } else {
            return parseSelection.call(this, end);
        }
    } else if (!end) {
        return parseSelection.call(this, start);
    }
    const startPos = parseSelectionCell(start);
    const endPos = parseSelectionCell(end);
    if (!startPos || !endPos) {
        return [];
    }
    const colStart = Math.min(startPos[0], endPos[0]);
    const colEnd = Math.max(startPos[0], endPos[0]);
    const rowStart = Math.min(startPos[1], endPos[1]);
    const rowEnd = Math.max(startPos[1], endPos[1]);
    const cells: DTableCellPos[] = [];
    for (let col = colStart; col <= colEnd; col++) {
        for (let row = rowStart; row <= rowEnd; row++) {
            cells.push([col, row]);
        }
    }
    return cells;
}

function parseSelections(this: DTableSelectable, selections: DTableSelections): DTableCellPos[] {
    return selections.reduce<DTableCellPos[]>((cells, selection) => {
        if (selection.includes(':')) {
            cells.push(...parseRange.call(this, selection as DTableRangeSelection));
        } else {
            cells.push(...parseSelection.call(this, selection as DTableSelection));
        }
        return cells;
    }, []);
}

function stringifySelection(start: DTableCellPos, end?: DTableCellPos): DTableSelection | DTableRangeSelection | '' {
    const [col, row] = start;
    const parts: string[] = [];
    if (col >= 0) {
        parts.push(`C${col}`);
    }
    if (row >= 0) {
        parts.push(`R${row}`);
    }
    if (end) {
        const endSelection = stringifySelection(end);
        if (endSelection) {
            parts.push(':', endSelection);
        }
    }
    return parts.join('') as DTableSelection | DTableRangeSelection;
}

function selectCells(this: DTableSelectable, selections: DTableSelection | DTableRangeSelection | DTableSelections, options: {clearBefore?: boolean, deselect?: boolean, selecting?: boolean, callback?: (this: DTableSelectable, cells: DTableCellPos[]) => void} = {}): DTableCellPos[] {
    if (!Array.isArray(selections)) {
        selections = [selections];
    }
    const cells = parseSelections.call(this, selections);
    const {clearBefore = true, deselect, selecting, callback} = options;
    const {selectingMap, selectedMap} = this.state;
    const map = selecting ? selectingMap : selectedMap;

    selectingMap.clear();
    if (clearBefore) {
        selectedMap.clear();
    }

    if (deselect) {
        cells.forEach(([col, row]) => {
            const set = map.get(col);
            if (set) {
                set.delete(row);
                if (!set.size) {
                    map.delete(col);
                }
            }
        });
    } else {
        cells.forEach(([col, row]) => {
            const set = map.get(col);
            if (set) {
                set.add(row);
            } else {
                map.set(col, new Set([row]));
            }
        });
    }

    this.forceUpdate(() => {
        callback?.call(this, cells);
        this.options.onSelectCells?.call(this, cells);
    });
    return cells;
}

function selectingCells(this: DTableSelectable, selections: DTableSelection | DTableRangeSelection | DTableSelections, options?: {clearBefore?: boolean, deselect?: boolean, selecting?: boolean, callback?: (this: DTableSelectable, cells: DTableCellPos[]) => void}): DTableCellPos[] {
    return selectCells.call(this, selections, {...options, selecting: true});
}

function deselectCells(this: DTableSelectable, selections: DTableSelection | DTableRangeSelection | DTableSelections, options: {clearBefore?: boolean, selecting?: boolean, callback?: (this: DTableSelectable, cells: DTableCellPos[]) => void}): DTableCellPos[] {
    return selectCells.call(this, selections, {...options, deselect: true});
}

function selectAllCells(this: DTableSelectable): void {
    const {colsInfo} = this.layout;
    const colsCount = colsInfo.fixedLeftCols.length + colsInfo.scrollCols.length + colsInfo.fixedRightCols.length;
    const rowsCount = this.layout.rows.length;
    const {selectedMap} = this.state;
    for (let col = 0; col < colsCount; col++) {
        let set = selectedMap.get(col);
        if (!set) {
            set = new Set();
            selectedMap.set(col, set);
        }
        for (let row = 0; row < rowsCount; row++) {
            set.add(row);
        }
    }
    this.forceUpdate();
}

function deselectAllCells(this: DTableSelectable): void {
    this.state.selectedMap.clear();
    this.forceUpdate();
}

function isCellSelected(this: DTableSelectable, cell: DTableCellSelection | DTableCellPos): boolean {
    const pos = typeof cell === 'string' ? parseCell(cell) : cell;
    if (!pos) {
        return false;
    }
    return this.state.selectedMap.get(pos[0])?.has(pos[1]) ?? false;
}

function isCellSelecting(this: DTableSelectable, cell: DTableCellSelection | DTableCellPos): boolean {
    const pos = typeof cell === 'string' ? parseCell(cell) : cell;
    if (!pos) {
        return false;
    }
    return this.state.selectingMap.get(pos[0])?.has(pos[1]) ?? false;
}

function getSelectedCells(this: DTableSelectable): DTableCellPos[] {
    const cells: DTableCellPos[] = [];
    for (const [col, rows] of this.state.selectedMap.entries()) {
        for (const row of rows) {
            cells.push([col, row]);
        }
    }
    return cells;
}

function hasCellSelectInRow(table: DTableSelectable, rowIndex: number): boolean {
    for (const [, rows] of table.state.selectedMap.entries()) {
        if (rows.has(rowIndex)) {
            return true;
        }
    }
    for (const [, rows] of table.state.selectingMap.entries()) {
        if (rows.has(rowIndex)) {
            return true;
        }
    }
    return false;
}

function getSelectedCellsSize(this: DTableSelectable): number {
    let size = 0;
    for (const set of this.state.selectedMap.values()) {
        size += set.size;
    }
    return size;
}

function getMousePos(table: DTableSelectable, event: MouseEvent): DTableCellPos | undefined {
    const target = event.target as HTMLElement;
    if (!target) {
        return;
    }
    const rowElement = target.closest<HTMLElement>('.dtable-row');
    if (!rowElement) {
        return;
    }
    const cellElement = target.closest<HTMLElement>('.dtable-cell');
    const colName = cellElement?.getAttribute('data-col') ?? '';
    if (!colName) {
        return;
    }
    const colIndex = table.getColInfo(colName)?.index ?? -1;
    if (colIndex < 0) {
        return;
    }
    const rowID = rowElement.getAttribute('data-id') ?? '';
    const rowIndex = rowID === 'HEADER' ? (-1) : table.getRowInfo(rowID)?.index ?? -1;
    return [colIndex, rowIndex];
}

type DTableSelectableOptions = Partial<{
    selectable: boolean | ((col: DTableColIndex, row: DTableRowIndex) => boolean);
    onSelectCells: (this: DTableSelectable, cells: DTableCellPos[]) => void;
}>;

type DTableSelectableState = {
    selectedMap: Map<DTableColIndex, Set<DTableRowIndex>>;
    selectingMap: Map<DTableColIndex, Set<DTableRowIndex>>;
};

type DTableSelectableColSetting = Partial<{
    selectable: boolean | ((row: DTableRowIndex) => boolean);
}>;

type DTableSelectableMethods = {
    selectCells: typeof selectCells;
    selectingCells: typeof selectingCells;
    deselectCells: typeof deselectCells;
    isCellSelected: typeof isCellSelected;
    isCellSelecting: typeof isCellSelecting;
    getSelectedCells: typeof getSelectedCells;
    selectAllCells: typeof selectAllCells;
    deselectAllCells: typeof deselectAllCells;
    getSelectedCellsSize: typeof getSelectedCellsSize;
    selectMouseDown: (event: MouseEvent) => void;
    selectMouseMove: (event: MouseEvent) => void;
    selectMouseUp: (event: MouseEvent) => void;
    selectOutsideClick: (event: MouseEvent) => void;
    selectingStart?: DTableCellPos;
};

export const selectable: DTablePlugin<DTableSelectableOptions, DTableSelectableState, DTableSelectableColSetting, DTableSelectableMethods> = {
    name: 'selectable',
    defaultOptions: {selectable: true},
    when: options => !!options.selectable,
    onCreate() {
        this.state.selectedMap = new Map();
        this.state.selectingMap = new Map();
        this.selectCells = selectCells.bind(this);
        this.selectingCells = selectingCells.bind(this);
        this.deselectCells = deselectCells.bind(this);
        this.isCellSelected = isCellSelected.bind(this);
        this.isCellSelecting = isCellSelecting.bind(this);
        this.getSelectedCells = getSelectedCells.bind(this);
        this.selectAllCells = selectAllCells.bind(this);
        this.deselectAllCells = deselectAllCells.bind(this);
        this.getSelectedCellsSize = getSelectedCellsSize.bind(this);
    },
    onMounted() {
        const {current} = this.ref;
        if (current) {
            this.selectMouseDown = (event) => {
                const pos = getMousePos(this, event);
                this.selectingStart = pos;
                if (pos) {
                    event.preventDefault();
                    event.stopPropagation();
                }
            };
            this.selectMouseMove = (event) => {
                const {selectingStart} = this;
                if (!selectingStart) {
                    return;
                }
                const pos = getMousePos(this, event);
                if (pos) {
                    const selection = stringifySelection(selectingStart, pos);
                    if (selection) {
                        this.selectingCells(selection);
                        event.preventDefault();
                        event.stopPropagation();
                    }
                }
            };
            this.selectMouseUp = event => {
                const {selectingStart} = this;
                if (!selectingStart) {
                    return;
                }
                this.selectingStart = undefined;
                const pos = getMousePos(this, event);
                if (pos) {
                    const selection = stringifySelection(selectingStart, pos);
                    if (selection) {
                        this.selectCells(selection);
                        event.preventDefault();
                        event.stopPropagation();
                    }
                }
            };
            current.addEventListener('mousedown', this.selectMouseDown);
            current.addEventListener('mousemove', this.selectMouseMove);
            current.addEventListener('mouseup', this.selectMouseUp);
        }
        this.selectOutsideClick = (event) => {
            const target = event.target as HTMLElement;
            if (!target) {
                return;
            }
            if (!target.closest(`#${this.id}`)) {
                this.deselectAllCells();
            }
        };
        document.addEventListener('click', this.selectOutsideClick);
    },
    onUnmounted() {
        const {current} = this.ref;
        if (current) {
            current.removeEventListener('mousedown', this.selectMouseDown);
            current.removeEventListener('mousemove', this.selectMouseMove);
            current.removeEventListener('mouseup', this.selectMouseUp);
        }
        document.removeEventListener('click', this.selectOutsideClick);
    },
    onRenderRow({props, row}) {
        if (hasCellSelectInRow(this, row.index)) {
            return  {className: classes(props.className, 'has-cell-select')};
        }
    },
    onRenderCell(result, {rowID, col}) {
        const rowInfo = this.getRowInfo(rowID);
        if (!rowInfo) {
            return result;
        }
        if (this.isCellSelecting([col.index, rowInfo.index])) {
            result.push({cellClass: 'is-select is-selecting'});
        } else if (this.isCellSelected([col.index, rowInfo.index])) {
            result.push({cellClass: 'is-select is-selected'});
        }
        return result;
    },
    onHeaderCellClick(_, {colName}) {
        const colInfo = this.getColInfo(colName);
        if (colInfo) {
            this.selectCells(`C${colInfo.index}`);
        }
    },
};

export default definePlugin<DTableSelectableOptions, DTableSelectableState, DTableSelectableColSetting, DTableSelectableMethods>(selectable);
