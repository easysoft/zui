import {classes} from '@zui/browser-helpers/src/classes';
import {definePlugin} from '../../helpers/shared-plugins';
import {mousemove, DTableMousemoveTypes} from '../mousemove';
import './style.css';
import type {DTable} from '../../main-react';
import type {DTablePluginTypes, DTableWithPlugin, DTablePlugin} from '../../types/plugin';
import type {DTableAutoscrollTypes} from '../autoscroll';

export type DTableColIndex       = number;
export type DTableRowIndex       = number;
export type DTableColSelection   = `C${DTableColIndex}`;
export type DTableRowSelection   = `R${DTableRowIndex}`;
export type DTableCellSelection  = `${DTableColSelection}${DTableRowSelection}`;
export type DTableSelection      = DTableColSelection | DTableRowSelection | DTableCellSelection;
export type DTableRangeSelection = `${DTableSelection}:${DTableSelection}`;
export type DTableSelections     = (DTableSelection | DTableRangeSelection)[];
export type DTableCellPos        = {col: DTableColIndex, row: DTableRowIndex};

export type DTableCellPosMap     =  Map<DTableColIndex, Set<DTableRowIndex>>;

export interface DTableSelectableTypes extends DTablePluginTypes {
    options: Partial<{
        selectable: boolean | ((cellPos: DTableCellPos) => boolean);
        onSelectCells: (this: DTableSelectable, cells: DTableCellPos[]) => void;
        beforeSelectCells: (this: DTableSelectable, cells: DTableCellPos[]) => void |  DTableCellPos[];
        ignoreDeselectOn: string;
        markSelectRange: boolean;
    }>,
    state: {
        selectedMap: DTableCellPosMap;
        selectingMap: DTableCellPosMap;
    };
    col: Partial<{
        selectable: boolean | ((row: DTableRowIndex) => boolean);
    }>;
    data: {
        selectingStart?: DTableCellPos;
        disableSelectable?: boolean;
    },
    methods: {
        selectCells: typeof selectCells;
        selectNextCell: typeof selectNextCell;
        selectingCells: typeof selectingCells;
        deselectCells: typeof deselectCells;
        isCellSelected: typeof isCellSelected;
        isCellSelecting: typeof isCellSelecting;
        getSelectedCells: typeof getSelectedCells;
        selectAllCells: typeof selectAllCells;
        deselectAllCells: typeof deselectAllCells;
        getSelectedCellsSize: typeof getSelectedCellsSize;
        selectOutsideClick?: (event: MouseEvent) => void;
    };
}

type DTableSelectable = DTableWithPlugin<DTableSelectableTypes, [DTableMousemoveTypes, DTableAutoscrollTypes]>;

const REG_CELL = /C(\d+)R(\d+)/i;
const REG_SELECTION = /(?:C(\d+))?(?:R(\d+))?/i;

export function parseCell(cellSelection: DTableCellSelection): DTableCellPos | undefined {
    const result = REG_CELL.exec(cellSelection);
    if (!result || result.length < 3) {
        return;
    }
    const [, col, row] = result;
    return {col: +col, row: +row};
}

export function parseSelectionCell(selection: DTableSelection): DTableCellPos | undefined {
    const result = REG_SELECTION.exec(selection);
    if (!result) {
        return;
    }
    const [, colStr = -1, rowStr = -1] = result;
    const col = +colStr;
    const row = +rowStr;
    return {col, row};
}

export function parseSelection(this: DTableSelectable, selections: DTableSelection): DTableCellPos[] {
    const cells: DTableCellPos[] = [];
    const selection = parseSelectionCell(selections);
    if (!selection) {
        return cells;
    }
    const {col, row} = selection;
    if (col >= 0) {
        if (row >= 0) {
            cells.push({col, row});
        } else {
            const rowsCount = this.layout.rows.length;
            for (let i = 0; i < rowsCount; i++) {
                cells.push({col, row: i});
            }
        }
    } else if (row >= 0) {
        const {colsInfo} = this.layout;
        const colsCount = colsInfo.fixedLeftCols.length + colsInfo.scrollCols.length + colsInfo.fixedRightCols.length;
        for (let i = 0; i < colsCount; i++) {
            cells.push({col: i, row});
        }
    }
    return cells;
}

export function parseRange(this: DTableSelectable, range: DTableRangeSelection): DTableCellPos[] {
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
    const colStart = Math.min(startPos.col, endPos.col);
    const colEnd = Math.max(startPos.col, endPos.col);
    const rowStart = Math.min(startPos.row, endPos.row);
    const rowEnd = Math.max(startPos.row, endPos.row);
    const cells: DTableCellPos[] = [];
    const colsCount = Object.keys(this.layout.colsMap).length;
    for (let col = colStart; col <= colEnd; col++) {
        if (rowStart < 0 || rowEnd < 0) {
            const rowsCount = this.layout.rows.length;
            for (let i = 0; i < rowsCount; i++) {
                cells.push({col, row: i});
            }
        } else {
            for (let row = rowStart; row <= rowEnd; row++) {
                if (col < 0) {
                    for (let i = 0; i < colsCount; i++) {
                        cells.push({col: i, row});
                    }
                } else {
                    cells.push({col, row});
                }
            }
        }
    }
    return cells;
}

export function parseSelections(this: DTableSelectable, selections: (DTableSelections[number] | DTableCellPos)[]): DTableCellPos[] {
    return selections.reduce<DTableCellPos[]>((cells, selection) => {
        if (typeof selection === 'object') {
            cells.push(selection);
        } else if (selection.includes(':')) {
            cells.push(...parseRange.call(this, selection as DTableRangeSelection));
        } else {
            cells.push(...parseSelection.call(this, selection as DTableSelection));
        }
        return cells;
    }, []);
}

export function stringifySelection(start: DTableCellPos, end?: DTableCellPos): DTableSelection | DTableRangeSelection | '' {
    const {col, row} = start;
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

function isCellSelectable(table: DTableSelectable, pos: DTableCellPos): boolean {
    const {selectable} = table.options;
    if (typeof selectable === 'function') {
        return selectable.call(table, pos);
    }
    return !!selectable;
}

function selectCells(this: DTableSelectable, selections: DTableSelection | DTableRangeSelection | DTableSelections | DTableCellPos[], options: {clearBefore?: boolean, deselect?: boolean, selecting?: boolean, callback?: (this: DTableSelectable, cells: DTableCellPos[]) => void} = {}): DTableCellPos[] {
    if (!Array.isArray(selections)) {
        selections = [selections];
    }

    let cells = parseSelections.call(this, selections);
    const beforeHookResult = this.options.beforeSelectCells?.call(this, cells);
    if (beforeHookResult) {
        cells = beforeHookResult;
    }

    const {clearBefore = true, deselect, selecting, callback} = options;
    const {selectingMap, selectedMap} = this.state;
    const map = selecting ? selectingMap : selectedMap;

    selectingMap.clear();
    if (clearBefore) {
        selectedMap.clear();
    }

    let cellSelected = false;
    if (deselect) {
        cells.forEach((pos) => {
            if (!isCellSelectable(this, pos)) {
                return;
            }
            const {col, row} = pos;
            const set = map.get(col);
            if (set) {
                set.delete(row);
                if (!set.size) {
                    map.delete(col);
                }
            }
            cellSelected = true;
        });
    } else {
        cells.forEach((pos) => {
            if (!isCellSelectable(this, pos)) {
                return;
            }
            const {col, row} = pos;
            const set = map.get(col);
            if (set) {
                set.add(row);
            } else {
                map.set(col, new Set([row]));
            }
            cellSelected = true;
        });
    }

    if (!cellSelected) {
        return [];
    }

    this.update({}, () => {
        callback?.call(this, cells);
        this.options.onSelectCells?.call(this, cells);
    });
    return cells;
}

function selectNextCell(this: DTableSelectable, direction?: 'right' | 'down' | 'left' | 'up'): DTableCellPos | undefined {
    const {selectedMap} = this.state;
    let rowIndex = -1;
    let colIndex = -1;
    for (const [col, rows] of selectedMap.entries()) {
        colIndex = colIndex < 0 ? col : Math.min(col, colIndex);
        const minRow = Math.min(...rows);
        rowIndex = rowIndex < 0 ? minRow : Math.min(minRow, rowIndex);
    }
    if (rowIndex < 0 || colIndex < 0) {
        return;
    }
    if (direction === 'down') {
        rowIndex++;
    } else if (direction === 'up') {
        rowIndex--;
    } else if (direction === 'left') {
        colIndex--;
    } else {
        colIndex++;
    }
    if (rowIndex >= 0 && colIndex >= 0 && rowIndex < this.layout.rows.length && colIndex < this.layout.colsList.length) {
        const pos = {col: colIndex, row: rowIndex};
        if (isCellSelectable(this, pos)) {
            this.scrollTo(pos);
            this.selectCells([pos]);
            return pos;
        }
    }
    return;
}

function selectingCells(this: DTableSelectable, selections: DTableSelection | DTableRangeSelection | DTableSelections, options?: {clearBefore?: boolean, deselect?: boolean, callback?: (this: DTableSelectable, cells: DTableCellPos[]) => void}): DTableCellPos[] {
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
    const checkSelectable = typeof this.options.selectable === 'function' ? this.options.selectable : false;
    for (let col = 0; col < colsCount; col++) {
        let set = selectedMap.get(col);
        if (!set) {
            set = new Set();
            selectedMap.set(col, set);
        }
        for (let row = 0; row < rowsCount; row++) {
            if (checkSelectable && !checkSelectable({row, col})) {
                continue;
            }
            set.add(row);
        }
    }
    this.forceUpdate();
}

function deselectAllCells(this: DTableSelectable): boolean {
    const {selectedMap} = this.state;
    if (selectedMap.size) {
        selectedMap.clear();
        this.forceUpdate();
        return true;
    }
    return false;
}

function isCellSelected(this: DTableSelectable, cell: DTableCellSelection | DTableCellPos): boolean {
    const pos = typeof cell === 'string' ? parseCell(cell) : cell;
    if (!pos) {
        return false;
    }
    return this.state.selectedMap.get(pos.col)?.has(pos.row) ?? false;
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

function hasCellSelectInCol(table: DTableSelectable, colIndex: number): boolean {
    return !!(table.state.selectedMap.get(colIndex)?.size || table.state.selectingMap.get(colIndex)?.size);
}

function isCellSelecting(this: DTableSelectable, cell: DTableCellSelection | DTableCellPos): boolean {
    const pos = typeof cell === 'string' ? parseCell(cell) : cell;
    if (!pos) {
        return false;
    }
    return this.state.selectingMap.get(pos.col)?.has(pos.row) ?? false;
}

function getSelectedCells(this: DTableSelectable): DTableCellPos[] {
    const cells: DTableCellPos[] = [];
    for (const [col, rows] of this.state.selectedMap.entries()) {
        for (const row of rows) {
            cells.push({col, row});
        }
    }
    return cells;
}

function getSelectedCellsSize(this: DTableSelectable): number {
    let size = 0;
    for (const set of this.state.selectedMap.values()) {
        size += set.size;
    }
    return size;
}

export function getMousePos(table: DTable, event: Event, options?: {ignoreHeaderCell?: boolean}): DTableCellPos | undefined {
    const pointerInfo = table.getPointerInfo(event);
    if (!pointerInfo || pointerInfo.target.closest('input,textarea,[contenteditable]')) {
        return;
    }
    const {rowID, colName} = pointerInfo;
    const colIndex = table.getColInfo(colName)?.index ?? -1;
    if (colIndex < 0) {
        return;
    }
    const isHeaderRow = rowID === 'HEADER';
    if (isHeaderRow && options?.ignoreHeaderCell) {
        return;
    }
    const rowIndex = isHeaderRow ? (-1) : table.getRowInfo(rowID)?.index ?? -1;
    return {col: colIndex, row: rowIndex};
}

const selectablePlugin: DTablePlugin<DTableSelectableTypes, [DTableMousemoveTypes, DTableAutoscrollTypes]> = {
    name: 'selectable',
    defaultOptions: {selectable: true, markSelectRange: true},
    when: options => !!options.selectable,
    plugins: [mousemove],
    state() {
        return {
            selectedMap: new Map(),
            selectingMap: new Map(),
        };
    },
    methods: {
        selectCells,
        selectNextCell,
        selectingCells,
        deselectCells,
        isCellSelected,
        isCellSelecting,
        getSelectedCells,
        selectAllCells,
        deselectAllCells,
        getSelectedCellsSize,
    },
    events: {
        mousedown(event) {
            if (this.data.disableSelectable) {
                return;
            }
            const pos = getMousePos(this, event);
            if (event.button !== 0 && (!pos || this.isCellSelected(pos))) {
                return;
            }
            this.data.selectingStart = pos;
            this.startScrollToMouse();
            if (pos) {
                event.stopPropagation();
            }
        },
        document_mouseup(event) {
            const {selectingStart} = this.data;
            this.stopScrollToMouse();
            if (!selectingStart) {
                return;
            }
            this.data.selectingStart = undefined;
            const pos = getMousePos(this, event);
            if (pos) {
                const selection = stringifySelection(selectingStart, pos);
                if (selection) {
                    this.selectCells(selection);
                    event.stopPropagation();
                }
            }
        },
        document_click(event) {
            const target = event.target as HTMLElement;
            if (!target) {
                return;
            }
            const {ignoreDeselectOn} = this.options;
            if (!target.closest(`#${this.id}${ignoreDeselectOn ? `,${ignoreDeselectOn}` : ''}`)) {
                this.deselectAllCells();
            }
        },
        mousemovesmooth(event) {
            const dtable = this as DTableSelectable;
            const {selectingStart} = dtable.data;
            if (!selectingStart) {
                return;
            }
            const pos = getMousePos(dtable, event);
            if (!pos) {
                return;
            }
            const selection = stringifySelection(selectingStart, pos);
            if (selection) {
                dtable.selectingCells(selection);
                event.preventDefault();
                event.stopPropagation();
            }
        },
    },
    onRender() {
        if (this.options.selectable) {
            return {className: 'dtable-selectable'};
        }
    },
    onRenderRow({props, row}) {
        if (hasCellSelectInRow(this, row.index)) {
            return  {className: classes(props.className, 'has-cell-select')};
        }
    },
    onRenderCell(result, {row, col}) {
        const rowInfo = this.getRowInfo(row.id);
        if (!rowInfo) {
            return result;
        }
        const pos = {col: col.index, row: rowInfo.index};
        if (this.isCellSelecting(pos)) {
            result.push({outer: true, className: 'is-select is-selecting'});
        } else if (this.isCellSelected(pos)) {
            result.push({outer: true, className: 'is-select is-selected'});
        }
        if (this.options.markSelectRange && col.name === 'INDEX' && hasCellSelectInRow(this, rowInfo.index)) {
            result.push({outer: true, className: 'has-cell-selected'});
        }
        return result;
    },
    onRenderHeaderCell(result, {col}) {
        if (this.options.markSelectRange && col.name !== 'INDEX' && hasCellSelectInCol(this, col.index)) {
            result.push({outer: true, className: 'has-cell-selected'});
        }
        return result;
    },
};

export const selectable = definePlugin(selectablePlugin);
