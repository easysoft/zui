import {definePlugin} from '../../helpers/shared-plugins';
import {mousemove} from '../mousemove';
import {type DTableHotkeyTypes, hotkey} from '../hotkey';
import './style.css';

import type {DTableMousemoveTypes} from '../mousemove';
import type {DTable, RowInfo, ColInfo} from '../../main-react';
import type {DTableWithPlugin, DTablePlugin} from '../../types/plugin';
import type {DTableAutoscrollTypes} from '../autoscroll';
import type {DTableDraftTypes} from '../draft';

export type DTableColIndex = number;
export type DTableRowIndex = number;
export type DTableColSelection = `C${DTableColIndex}`;
export type DTableRowSelection = `R${DTableRowIndex}`;
export type DTableCellSelection = `${DTableColSelection}${DTableRowSelection}`;
export type DTableSelection = DTableColSelection | DTableRowSelection | DTableCellSelection;
export type DTableRangeSelection = `${DTableSelection}:${DTableSelection}`;
export type DTableSelections = (DTableSelection | DTableRangeSelection)[];
export type DTableCellPos = {col: DTableColIndex; row: DTableRowIndex; event?: MouseEvent};

export type DTableCellPosMap = Map<DTableColIndex, Set<DTableRowIndex>>;

export interface DTableSelectableTypes {
    options: Partial<{
        selectable: boolean | ((cellPos: DTableCellPos) => boolean);
        onSelectCells: (this: DTableSelectable, cells: DTableCellPos[]) => void;
        beforeSelectCells: (this: DTableSelectable, cells: DTableCellPos[]) => void | DTableCellPos[];
        ignoreDeselectOn: string;
        markSelectRange: boolean;
        copyHeader?: boolean;
        selectOnClickCell?: boolean;
        selectableHotkeys?: {
            selectAll?: boolean | string;
            copy?: boolean | string;
            selectRight?: boolean | string;
            selectLeft?: boolean | string;
            selectDown?: boolean | string;
            selectUp?: boolean | string;
        } | false;
    }>;
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
    };
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
        isRowSelected: typeof isRowSelected;
        isColSelected: typeof isColSelected;
        hasCellSelectInRow: typeof hasCellSelectInRow;
        hasCellSelectInCol: typeof hasCellSelectInCol;
        getSelectedCols: typeof getSelectedCols;
        getSelectedRows: typeof getSelectedRows;
        selectOutsideClick?: (event: MouseEvent) => void;
        copySelectedCols: (this: DTableSelectable) => boolean;
        copySelections: (this: DTableSelectable) => boolean;
    };
}

type DTableSelectable = DTableWithPlugin<DTableSelectableTypes, [DTableHotkeyTypes, DTableMousemoveTypes, DTableAutoscrollTypes, DTableDraftTypes]>;

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
        const {cols: colsInfo} = this.layout;
        const colsCount = colsInfo.list.length;
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
    const colsCount = Object.keys(this.layout.cols.map).length;
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

function selectCells(this: DTableSelectable, selections: DTableSelection | DTableRangeSelection | DTableSelections | DTableCellPos[], options: {clearBefore?: boolean; deselect?: boolean; selecting?: boolean; callback?: (this: DTableSelectable, cells: DTableCellPos[]) => void} = {}): DTableCellPos[] {
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
    if (rowIndex >= 0 && colIndex >= 0 && rowIndex < this.layout.rows.length && colIndex < this.layout.cols.list.length) {
        const pos = {col: colIndex, row: rowIndex};
        if (isCellSelectable(this, pos)) {
            this.scrollTo(pos);
            this.selectCells([pos]);
            return pos;
        }
    }
    return;
}

function selectingCells(this: DTableSelectable, selections: DTableSelection | DTableRangeSelection | DTableSelections, options?: {clearBefore?: boolean; deselect?: boolean; callback?: (this: DTableSelectable, cells: DTableCellPos[]) => void}): DTableCellPos[] {
    return selectCells.call(this, selections, {...options, selecting: true});
}

function deselectCells(this: DTableSelectable, selections: DTableSelection | DTableRangeSelection | DTableSelections, options: {clearBefore?: boolean; selecting?: boolean; callback?: (this: DTableSelectable, cells: DTableCellPos[]) => void}): DTableCellPos[] {
    return selectCells.call(this, selections, {...options, deselect: true});
}

function selectAllCells(this: DTableSelectable): void {
    const {cols: colsInfo} = this.layout;
    const colsCount = colsInfo.list.length;
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

function isRowSelected(this: DTableSelectable, row: number | string | RowInfo): boolean {
    const rowIndex = this.getRowInfo(row)?.index;
    if (typeof rowIndex !== 'number') {
        return false;
    }
    return this.layout.cols.list.every((col) => {
        return col.name === 'INDEX' || this.isCellSelected({col: col.index, row: rowIndex});
    });
}

function isColSelected(this: DTableSelectable, col: number | string | ColInfo): boolean {
    const colIndex = this.getColInfo(col)?.index;
    if (typeof colIndex !== 'number') {
        return false;
    }
    const {rows} = this.layout;
    return rows.every((row) => {
        return this.isCellSelected({col: colIndex, row: row.index});
    });
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

function getSelectedCols(this: DTableSelectable): ColInfo[] {
    const colsList: number[] = [];
    for (const [col, rows] of this.state.selectedMap.entries()) {
        if (rows.size) {
            colsList.push(col);
        }
    }
    const cols = ([...new Set(colsList)].map(x => this.getColInfo(x)).filter(x => x && this.isColSelected(x)) as ColInfo[]).sort((x, y) => x.index - y.index);
    return cols;
}

function getSelectedRows(this: DTableSelectable): RowInfo[] {
    const rowsList: number[] = [];
    for (const [, rows] of this.state.selectedMap.entries()) {
        rowsList.push(...rows);
    }
    const rows = ([...new Set(rowsList)].map(x => this.getRowInfo(x)).filter(x => x && this.isRowSelected(x)) as RowInfo[]).sort((x, y) => x.index - y.index);
    return rows;
}

function getSelectedCellsSize(this: DTableSelectable): number {
    let size = 0;
    for (const set of this.state.selectedMap.values()) {
        size += set.size;
    }
    return size;
}

export function getMousePos(table: DTable, event: MouseEvent, options?: {ignoreHeaderCell?: boolean}): DTableCellPos | undefined {
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
    return {col: colIndex, row: rowIndex, event};
}

function handleSelectNextCell(table: DTableSelectable, event: KeyboardEvent, direction?: 'right' | 'down' | 'left' | 'up') {
    if (table.selectNextCell(direction)) {
        event.preventDefault();
        event.stopPropagation();
    }
}

export function isEmptyCellData(data: unknown): boolean {
    return data === undefined || data === null || (typeof data === 'string' && !data.length);
}

export function trimDataGrid(data: unknown[][]): unknown[][] {
    let maxColIndex = 0;
    let maxRowIndex = 0;
    data.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            if (!isEmptyCellData(cell)) {
                maxColIndex = Math.max(maxColIndex, colIndex);
                maxRowIndex = Math.max(maxRowIndex, rowIndex);
            }
        });
    });
    return data.slice(0, maxRowIndex + 1).map(row => row.slice(0, maxColIndex + 1));
}

function copySelections(this: DTableSelectable) {
    const selectedCells = this.getSelectedCells();
    if (!selectedCells.length) {
        return false;
    }
    let minColIndex = Number.MAX_SAFE_INTEGER;
    let minRowIndex = Number.MAX_SAFE_INTEGER;
    selectedCells.forEach((pos) => {
        minColIndex = Math.min(pos.col, minColIndex);
        minRowIndex = Math.min(pos.row, minRowIndex);
    });
    const data: unknown[][] = [];
    const selectedColIndexes = new Set<number>();
    selectedCells.forEach((pos) => {
        const value = this.getCellDraftValue ? this.getCellDraftValue(pos.row, pos.col) : this.getCellValue(pos.row, pos.col);
        let rowData = data[pos.row - minRowIndex];
        if (!rowData) {
            rowData = [];
            data[pos.row - minRowIndex] = rowData;
        }
        rowData[pos.col - minColIndex] = value;
        selectedColIndexes.add(pos.col);
    });
    if (this.options.copyHeader) {
        const headerRow: unknown[] = [];
        selectedColIndexes.forEach((colIndex) => {
            const colInfo = this.getColInfo(colIndex);
            if (!colInfo) {
                return;
            }
            const value = this.getCellDraftValue ? this.getCellDraftValue(-1, colInfo) : this.getCellValue(-1, colInfo);
            headerRow[colIndex - minColIndex] = (value === colInfo.name) ? '' : value;
        });
        data.unshift(headerRow);
    }
    const plainText = trimDataGrid(data).map(x => x.join('\t')).join('\n');
    navigator.clipboard.writeText(plainText);
    return true;
}

function copySelectedCols(this: DTableSelectable) {
    const selectedCols = this.getSelectedCols();
    if (!selectedCols.length) {
        return false;
    }
    const rowsCount = this.layout.rows.length;
    const data: unknown[][] = [];
    for (let i = -1; i < rowsCount; ++i) {
        data.push(selectedCols.map((col) => {
            const value = this.getCellDraftValue ? this.getCellDraftValue(i, col) : this.getCellValue(i, col);
            if (i === -1 && value === col.name) {
                return '';
            }
            return value;
        }));
    }
    const plainText = trimDataGrid(data).map(x => x.join('\t')).join('\n');
    navigator.clipboard.writeText(plainText);
    return true;
}

const hotkeyHandlers: Record<string, (this: DTableSelectable, event: KeyboardEvent) => void> = {
    selectAll(event) {
        if (this.state.editingCell) {
            return;
        }
        this.selectAllCells();
        event.preventDefault();
    },
    copy(event) {
        this.copySelections();
        event.preventDefault();
    },
    selectRight(event) {
        handleSelectNextCell(this, event, 'right');
    },
    selectLeft(event) {
        handleSelectNextCell(this, event, 'left');
    },
    selectDown(event) {
        handleSelectNextCell(this, event, 'down');
    },
    selectUp(event) {
        handleSelectNextCell(this, event, 'up');
    },
};

const selectablePlugin: DTablePlugin<DTableSelectableTypes, [DTableHotkeyTypes, DTableMousemoveTypes, DTableAutoscrollTypes, DTableDraftTypes]> = {
    name: 'selectable',
    defaultOptions: {
        selectable: true,
        copyHeader: true,
        markSelectRange: true,
    },
    when: options => !!options.selectable,
    plugins: [mousemove, hotkey],
    state() {
        return {
            selectedMap: new Map(),
            selectingMap: new Map(),
        };
    },
    options(options) {
        const {selectableHotkeys, hotkeys} = options;
        if (selectableHotkeys === false) {
            return options;
        }
        const defaultHotkeys: Record<string, string> = {
            selectAll: '$mod+a',
            copy: '$mod+c',
            selectRight: 'Tab,ArrowRight',
            selectLeft: 'ArrowLeft',
            selectDown: 'ArrowDown',
            selectUp: 'ArrowUp',
        };
        const hotkeysOverride = {
            ...hotkeys,
            ...Object.entries({
                ...defaultHotkeys,
                ...selectableHotkeys,
            }).reduce<NonNullable<typeof hotkeys>>((hotkeysMap, [name, key]) => {
                if (key) {
                    hotkeysMap[key === true ? defaultHotkeys[name] : key] = hotkeyHandlers[name]?.bind(this);
                }
                return hotkeysMap;
            }, {}),
        };
        return {
            hotkeys: hotkeysOverride,
        };
    },
    methods: {
        selectCells,
        selectNextCell,
        selectingCells,
        deselectCells,
        isCellSelected,
        isCellSelecting,
        isRowSelected,
        isColSelected,
        hasCellSelectInRow,
        hasCellSelectInCol,
        getSelectedCols,
        getSelectedRows,
        getSelectedCells,
        selectAllCells,
        deselectAllCells,
        getSelectedCellsSize,
        copySelections,
        copySelectedCols,
    },
    events: {
        mousedown(event) {
            if (this.data.disableSelectable) {
                return;
            }
            const pos = getMousePos(this, event);
            if (event.button !== 0 && (!pos || this.isCellSelected(pos) || ((pos.row < 0 && this.isColSelected(pos.col)) || (pos.col < 1 && this.isRowSelected(pos.row))))) {
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
                // 如果鼠标只是点击没有移动（从按下到谈起的移动距离小于4px），并且没有启用 selectOnClickCell 则不进行选择
                const startEvent = selectingStart.event;
                if (startEvent && !this.options.selectOnClickCell) {
                    const distance = Math.sqrt(Math.pow(event.clientX - startEvent.clientX, 2) + Math.pow(event.clientY - startEvent.clientY, 2));
                    if (distance < 4) {
                        return;
                    }
                    return;
                }

                const selection = stringifySelection(selectingStart, pos);
                if (selection) {
                    requestAnimationFrame(() => this.selectCells(selection));
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
        if (this.options.markSelectRange && col.name === 'INDEX') {
            if (this.isRowSelected(rowInfo)) {
                result.push({outer: true, className: 'is-row-selected has-cell-selected'});
            } else if (hasCellSelectInRow(this, rowInfo.index)) {
                result.push({outer: true, className: 'has-cell-selected'});
            }
        }
        return result;
    },
    onRenderHeaderCell(result, {col}) {
        if (this.options.markSelectRange && col.name !== 'INDEX' && hasCellSelectInCol(this, col.index)) {
            result.push({outer: true, className: 'has-cell-selected'});
            if (this.isColSelected(col)) {
                result.push({outer: true, className: 'is-col-selected'});
            }
        }
        return result;
    },
};

export const selectable = definePlugin(selectablePlugin);
