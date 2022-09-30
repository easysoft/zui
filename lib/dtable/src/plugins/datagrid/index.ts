import {definePlugin} from '../../helpers/shared-plugins';
import editable, {DTableEditableTypes} from '../editable';
import resize, {DTableResizeTypes} from '../resize';
import {DTableDraftTypes, DTableDraftRows} from '../draft';
import selectable, {DTableCellPos, DTableSelectableTypes, parseRange} from '../selectable';
import hotkey, {DTableHotkeyTypes} from '../hotkey';
import history, {DTableHistoryTypes} from '../history';
import {DTableStoreTypes} from '../store';
import './style.css';
import {DTableMousemoveTypes} from '../mousemove';
import autoscroll, {DTableAutoscrollTypes} from '../autoscroll';

interface DTableDatasource {
    cols?: ColSetting[],
    data?: unknown[][]
}

interface DTableDatagridTypes extends DTablePluginTypes {
    options: {
        datasource: DTableDatasource,
        minRows?: number,
        minCols?: number,
        extraRows?: number,
        extraCols?: number,
        showRowIndex?: boolean,
        datagridHotkeys?: {
            delete?: boolean | string,
            selectAll?: boolean | string,
            paste?: boolean | string,
            copy?: boolean | string,
            focus?: boolean | string,
            cancel?: boolean | string,
            cut?: boolean | string,
            redo?: boolean | string,
            undo?: boolean | string,
            selectRight?: boolean | string,
            selectLeft?: boolean | string,
            selectDown?: boolean | string,
            selectUp?: boolean | string,
        },
        emptyCellValue?: unknown,
        cellValueSplitter?: string,
    };
    data: {
        rowsCount?: number,
        colsCount?: number,
    },
    methods: {
        deleteSelections: (this: DTableDatagrid) => boolean;
        copySelections: (this: DTableDatagrid) => boolean;
        cutSelections: (this: DTableDatagrid) => boolean;
        pasteCells: (this: DTableDatagrid, targetCell: DTableCellPos | {colName: string, rowID: string}) => Promise<boolean>;
        pasteToSelection: (this: DTableDatagrid) => Promise<boolean>;
        getGridSize: typeof getGridSize;
        appendRows: typeof appendRows;
        appendCols: typeof appendCols;
    }
}

type DTableDatagridDependencies = [DTableHotkeyTypes, DTableSelectableTypes, DTableDraftTypes, DTableEditableTypes, DTableResizeTypes, DTableHistoryTypes, DTableStoreTypes, DTableMousemoveTypes, DTableAutoscrollTypes];

type DTableDatagrid = DTableWithPlugin<DTableDatagridTypes, DTableDatagridDependencies>;

function convertDatasource(table: DTableDatagrid, datasource: DTableDatasource): ({
    cols: ColSetting[],
    data: number,
}) {
    const {colsCount, rowsCount} = table.getGridSize();
    const {cols: optionCols = []} = datasource;
    const {showRowIndex, defaultColWidth} = table.options;
    const cols: ColSetting[] = [];
    if (showRowIndex !== false) {
        cols.push({
            width: `${rowsCount + 1}`.length * 8 + 24,
            name: 'INDEX',
            fixed: 'left',
            align: 'right',
            title: '#',
            ...optionCols.find(x => x.name === 'INDEX'),
        });
    }
    for (let i = 0; i < colsCount; ++i) {
        const name = `C${i + 1}`;
        const col = {
            name,
            width: defaultColWidth,
            ...optionCols.find(x => x.name === name),
        };
        cols.push(col);
    }
    return {
        cols,
        data: rowsCount,
    };
}

function cellValueGetter(this: DTableDatagrid, row: RowInfo, col: ColInfo, originValue: unknown) {
    if (col.name === 'INDEX') {
        return row.id === 'HEADER' ? originValue : (row.index + 1);
    }
    if (row.id !== 'HEADER') {
        return this.options.datasource.data?.[row.index]?.[+col.name.replace('C', '') - 1];
    }
    return originValue;
}

function selectNextCell(table: DTableDatagrid, event: KeyboardEvent, direction?: 'right' | 'down' | 'left' | 'up') {
    if (table.selectNextCell(direction)) {
        event.preventDefault();
        event.stopPropagation();
    }
}

const hotkeyHandlers: Record<string, (this: DTableDatagrid, event: KeyboardEvent) => void> = {
    delete() {
        this.deleteSelections();
    },
    cut() {
        this.cutSelections();
    },
    selectAll(event) {
        this.selectAllCells();
        event.preventDefault();
    },
    paste() {
        this.pasteToSelection();
    },
    copy(event) {
        this.copySelections();
        event.preventDefault();
    },
    focus() {
        const selectedCell = this.getSelectedCells()[0];
        if (!selectedCell) {
            return;
        }
        const colInfo = this.getColInfo(selectedCell.col);
        const rowInfo = this.getRowInfo(selectedCell.row);
        if (!colInfo || !rowInfo) {
            return;
        }
        this.editCell({rowID: rowInfo.id, colName: colInfo.name});
    },
    cancel() {
        this.deselectAllCells();
    },
    undo() {
        this.undoHistory();
    },
    redo() {
        this.redoHistory();
    },
    selectRight(event) {
        selectNextCell(this, event, 'right');
    },
    selectLeft(event) {
        selectNextCell(this, event, 'left');
    },
    selectDown(event) {
        selectNextCell(this, event, 'down');
    },
    selectUp(event) {
        selectNextCell(this, event, 'up');
    },
};

function getGridSize(this: DTableDatagrid): {rowsCount: number, colsCount: number} {
    const {minRows = 1, minCols = 1, extraRows = 0, extraCols = 0, datasource} = this.options;
    const {data = [], cols: optionCols = []} = datasource;
    const {stagingDraft, appliedDraft} = this.state;
    let maxDraftRow = 0;
    let maxDraftCol = 0;
    Object.entries(stagingDraft).concat(Object.entries(appliedDraft))
        .forEach(([rowID, rowData]) => {
            maxDraftRow = Math.max(maxDraftRow, +rowID + 1);
            maxDraftCol = Math.max(maxDraftCol, ...Object.keys(rowData).map(x => +x.replace('C', '')));
        });
    return {
        rowsCount: Math.max(data.length + extraRows, minRows, this.data.rowsCount ?? 0),
        colsCount: Math.max(minCols, optionCols.length, data.reduce((size, rowData) => Math.max(size, rowData.length), 0) + extraCols, this.data.colsCount ?? 0),
    };
}

function appendRows(this: DTableDatagrid, countOrList: number | (RowData | unknown[])[] = 1, options?: {autoScroll?: boolean, skipUpdate?: boolean, select?: boolean}): boolean {
    const {rowsCount} = this.getGridSize();
    let finalRowsCount = rowsCount;
    if (typeof countOrList === 'number') {
        finalRowsCount = rowsCount + Math.max(countOrList, 0);
    } else if (Array.isArray(countOrList)) {
        finalRowsCount = rowsCount + Math.max(countOrList.length, 0);
        this.stageDraft(countOrList.reduce<DTableDraftRows>((rows, row, index) => {
            if (Array.isArray(row)) {
                row = row.reduce<RowData>((rowData, value, colIndex) => {
                    rowData[`C${colIndex + 1}`] = value;
                    return rowData;
                }, {});
            }
            rows[rowsCount + index] = row;
            return rows;
        }, {}), {skipUpdate: true});
    }
    if (finalRowsCount > rowsCount) {
        this.data.rowsCount = finalRowsCount;
        if (!options?.skipUpdate) {
            this.update({dirtyType: 'options'}, () => {
                if (options?.select !== false) {
                    this.selectCells(`R${rowsCount}:R${finalRowsCount - 1}`);
                }
                if (options?.autoScroll !== false) {
                    this.scrollTo({row: finalRowsCount - 1, col: 0});
                }
            });
        }
        return true;
    }
    return false;
}

function appendCols(this: DTableDatagrid, countOrList: number | unknown[][] = 1, options?: {autoScroll?: boolean, skipUpdate?: boolean, select?: boolean}) {
    const {colsCount} = this.getGridSize();
    let finalColsCount = colsCount;
    const {showRowIndex} = this.options;
    if (typeof countOrList === 'number') {
        finalColsCount = colsCount + Math.max(countOrList, 0);
    } else if (Array.isArray(countOrList)) {
        finalColsCount = colsCount + Math.max(countOrList.length, 0);
        this.stageDraft(countOrList.reduce<DTableDraftRows>((rows, colRows, colIndex) => {
            colRows.forEach((colValue, rowIndex) => {
                const rowData = rows[rowIndex];
                const colName = `C${colsCount + colIndex + (showRowIndex ? 1 : 0)}`;
                if (rowData) {
                    rowData[colName] = colValue;
                } else {
                    rows[rowIndex] = {[colName]: colValue};
                }
            });
            return rows;
        }, {}), {skipUpdate: true});
    }
    if (finalColsCount > colsCount) {
        this.data.colsCount = finalColsCount;
        if (!options?.skipUpdate) {
            this.update({dirtyType: 'options'}, () => {
                if (options?.select !== false) {
                    this.selectCells(`C${colsCount + (showRowIndex ? 1 : 0)}:C${finalColsCount - 1 + (showRowIndex ? 1 : 0)}`);
                }
                if (options?.autoScroll !== false) {
                    this.scrollTo({col: finalColsCount - (showRowIndex ? 0 : 1), row: 0});
                }
            });
        }
        return true;
    }
    return false;
}

export const datagrid: DTablePlugin<DTableDatagridTypes, DTableDatagridDependencies> = {
    name: 'datagrid',
    plugins: [editable, selectable, hotkey, resize, history, autoscroll],
    defaultOptions: {
        defaultColWidth: 80,
        headerEditable: true,
        minRows: 20,
        minCols: 10,
        extraRows: 5,
        extraCols: 5,
        showRowIndex: true,
        rowHover: false,
        colHover: false,
        cellHover: true,
        bordered: true,
        striped: false,
        datagridHotkeys: {},
        emptyCellValue: '',
        cellValueSplitter: '\t',
        cellValueGetter,
        hotkeys: {},
    },
    options(options) {
        const {datagridHotkeys, datasource, hotkeys, editable: editableOption, selectable: selectableOption, beforeSelectCells, showRowIndex, colResize} = options;
        const defaultHotkeys: Record<string, string> = {
            delete: 'delete,backspace',
            selectAll: 'ctrl+a,command+a',
            paste: 'ctrl+v,command+v',
            copy: 'ctrl+c,command+c',
            focus: 'enter',
            cancel: 'esc',
            cut: 'ctrl+x,command+x',
            redo: 'ctrl+shift+z,command+shift+z',
            undo: 'ctrl+z,command+z',
            selectRight: 'tab,right',
            selectLeft: 'left',
            selectDown: 'down',
            selectUp: 'up',
        };
        const hotkeysOverride = {
            ...hotkeys,
            ...Object.entries({
                ...defaultHotkeys,
                ...datagridHotkeys,
            }).reduce<NonNullable<typeof hotkeys>>((hotkeysMap, [name, key]) => {
                if (key) {
                    hotkeysMap[key === true ? defaultHotkeys[name] : key] = hotkeyHandlers[name]?.bind(this);
                }
                return hotkeysMap;
            }, {}),
        };
        return {
            hotkeys: hotkeysOverride,
            colResize: colResize ? (colName => ((typeof colResize !== 'function' || colResize.call(this, colName)) && colName !== 'INDEX')) : false,
            editable: editableOption ? (rowID: string, colName: string) => {
                if (typeof editableOption === 'function' && !editableOption(rowID, colName)) {
                    return false;
                }
                return colName !== 'INDEX';
            } : false,
            selectable: selectableOption ? ((pos) => {
                if (typeof selectableOption === 'function' && !selectableOption(pos)) {
                    return false;
                }
                return pos.col >= (showRowIndex ? 1 : 0);
            }) : false,
            beforeSelectCells: showRowIndex ? ((cells) => {
                if (cells.every(x => x.col === 0)) {
                    cells = parseRange.call(this, `R${Math.min(...cells.map(x => x.row))}:R${Math.max(...cells.map(x => x.row))}`);
                }
                if (beforeSelectCells) {
                    return beforeSelectCells.call(this, cells);
                }
                return cells;
            }) : beforeSelectCells,
            ...convertDatasource(this, datasource),
        };
    },
    methods: {
        deleteSelections() {
            const cells: {rowID: string, colName: string}[] = [];
            for (const [col, rows] of this.state.selectedMap.entries()) {
                const colInfo = this.getColInfo(col);
                if (!colInfo) {
                    continue;
                }
                for (const row of rows) {
                    const rowInfo = this.getRowInfo(row);
                    if (!rowInfo) {
                        continue;
                    }
                    cells.push({colName: colInfo.name, rowID: rowInfo.id});
                }
            }
            return this.deleteCells(cells, this.options.emptyCellValue);
        },
        copySelections() {
            const selectedCells = this.getSelectedCells();
            if (!selectedCells.length) {
                return false;
            }
            let minColIndex = Number.MAX_SAFE_INTEGER;
            let minRowIndex = Number.MAX_SAFE_INTEGER;
            selectedCells.forEach(pos => {
                minColIndex = Math.min(pos.col, minColIndex);
                minRowIndex = Math.min(pos.row, minRowIndex);
            });
            const data: unknown[][] = [];
            selectedCells.forEach(pos => {
                const value = this.getCellDraftValue(pos.row, pos.col);
                let rowData = data[pos.row - minRowIndex];
                if (!rowData) {
                    rowData = [];
                    data[pos.row - minRowIndex] = rowData;
                }
                rowData[pos.col - minColIndex] = value;
            });
            const plainText = data.map(x => x.join('\t')).join('\n');
            navigator.clipboard.writeText(plainText);
            return true;
        },
        cutSelections() {
            this.copySelections();
            return this.deleteSelections();
        },
        async pasteCells(targetCell) {
            let startColIndex = -1;
            let startRowIndex = -1;
            if ('colName' in targetCell) {
                const colInfo = this.getColInfo(targetCell.colName);
                const rowInfo = this.getColInfo(targetCell.rowID);
                if (!colInfo || !rowInfo) {
                    return false;
                }
                startColIndex = colInfo.index;
                startRowIndex = rowInfo.index;
            } else {
                startColIndex = targetCell.col;
                startRowIndex = targetCell.row;
            }

            const permissionName = 'clipboard-read' as PermissionName;
            const permission = await navigator.permissions.query({name: permissionName});
            if (permission.state === 'denied') {
                return false;
            }

            const data = await navigator.clipboard.readText();
            if (!data.length) {
                return false;
            }
            const changes: DTableDraftRows = {};
            const cells: DTableCellPos[] = [];
            data.split(/\r?\n/).forEach((line, lineIndex) => {
                const rowIndex = lineIndex + startRowIndex;
                const rowInfo = this.getRowInfo(rowIndex);
                if (!rowInfo) {
                    return;
                }
                const {id: rowID} = rowInfo;
                let rowData = changes[rowID];
                if (!rowData) {
                    rowData = {};
                    changes[rowID] = rowData;
                }
                line.split('\t').forEach((part, partIndex) => {
                    const colIndex = partIndex + startColIndex;
                    const colInfo = this.getColInfo(colIndex);
                    if (!colInfo) {
                        return;
                    }
                    rowData[colInfo.name] = part;
                    cells.push({col: colIndex, row: rowIndex});
                });
            });
            this.stageDraft(changes);
            this.selectCells(cells);
            return true;
        },
        pasteToSelection() {
            const selectedCells = this.getSelectedCells();
            if (!selectedCells.length) {
                return Promise.resolve(false);
            }
            const startCell = selectedCells[0];
            return this.pasteCells(startCell);
        },
        getGridSize,
        appendRows,
        appendCols,
    },
    onRender() {
        return {className: 'dtable-datagrid'};
    },
};

const plugin = definePlugin(datagrid);

export default plugin;
