import {definePlugin} from '../../helpers/shared-plugins';
import editable, {DTableEditableTypes, DTableEditChanges} from '../editable';
import selectable, {DTableCellPos, DTableSelectableTypes} from '../selectable';
import hotkey, {DTableHotkeyCallback, DTableHotkeyTypes} from '../hotkey';

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
        showRowIndex?: boolean | string,
        hotkeyDelete?: boolean | string,
        hotkeySelectAll?: boolean | string,
        hotkeyPaste?: boolean | string,
        hotkeyCopy?: boolean | string,
        hotkeyFocus?: boolean | string,
        hotkeyCancel?: boolean | string,
        emptyCellValue?: unknown,
        cellValueSplitter?: string,
    };
    methods: {
        handleHotkeyDelete: (this: DTableDatagrid, event: KeyboardEvent) => void;
        handleHotkeySelectAll: (this: DTableDatagrid, event: KeyboardEvent) => void;
        handleHotkeyPaste: (this: DTableDatagrid, event: KeyboardEvent) => void;
        handleHotkeyCopy: (this: DTableDatagrid, event: KeyboardEvent) => void;
        handleHotkeyCut: (this: DTableDatagrid, event: KeyboardEvent) => void;
        handleHotkeyFocus: (this: DTableDatagrid, event: KeyboardEvent) => void;
        handleHotkeyCancel: (this: DTableDatagrid, event: KeyboardEvent) => void;
    }
}

type DTableDatagridDependencies = [DTableHotkeyTypes, DTableSelectableTypes, DTableEditableTypes];

type DTableDatagrid = DTableWithPlugin<DTableDatagridTypes, DTableDatagridDependencies>;

function convertDatasource(table: DTableDatagrid, datasource: DTableDatasource): ({
    cols: ColSetting[],
    data: number,
}) {
    const {data = []} = datasource;
    const {minRows = 1, minCols = 1, extraRows = 0, extraCols = 0, showRowIndex, cols: optionCols = []} = table.options;
    const rowSize = Math.max(minCols, data.reduce((size, rowData) => Math.max(size, rowData.length), 0) + extraCols);
    const rowsCount = Math.max(data.length + extraRows, minRows);
    const cols: ColSetting[] = [];
    if (showRowIndex) {
        cols.push({
            width: `${rowsCount + 1}`.length * 8 + 24,
            name: 'INDEX',
            fixed: 'left',
            align: 'right',
            title: typeof showRowIndex === 'string' ? showRowIndex : '#',
        });
    }
    for (let i = 0; i < rowSize; ++i) {
        const col = {
            name: `${i}`,
            title: `C${i}`,
        };
        if (optionCols[i]) {
            Object.assign(col, optionCols[i]);
        }
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
        return this.options.datasource.data?.[row.index]?.[+col.name];
    }
    return originValue;
}

export const datagrid: DTablePlugin<DTableDatagridTypes, DTableDatagridDependencies> = {
    name: 'datagrid',
    plugins: [editable, selectable, hotkey],
    defaultOptions: {
        defaultColWidth: 80,
        minColWidth: 80,
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
        hotkeyDelete: true,
        hotkeySelectAll: true,
        hotkeyPaste: true,
        hotkeyCopy: true,
        hotkeyCut: true,
        hotkeyFocus: true,
        hotkeyCancel: true,
        emptyCellValue: '',
        cellValueSplitter: '\t',
        cellValueGetter,
        hotkeys: {},
        editable: (_: string, colName: string) => colName !== 'INDEX',
        selectable: (pos) => pos.col !== 0,
    },
    options(options) {
        const {hotkeyDelete, hotkeyCopy, hotkeyFocus, hotkeyCancel, hotkeyPaste, hotkeyCut, hotkeySelectAll, datasource, hotkeys} = options;
        const hotkeysOverride = {
            ...hotkeys,
        };
        ([
            [hotkeyDelete, 'delete,backspace,s', this.handleHotkeyDelete],
            [hotkeyCopy, 'ctrl+c,command+c', this.handleHotkeyCopy],
            [hotkeyPaste, 'ctrl+v,command+v', this.handleHotkeyPaste],
            [hotkeyCut, 'ctrl+x,command+x', this.handleHotkeyCut],
            [hotkeySelectAll, 'ctrl+a,command+a', this.handleHotkeySelectAll],
            [hotkeyFocus, 'enter', this.handleHotkeyFocus],
            [hotkeyCancel, 'esc', this.handleHotkeyCancel],
        ] as [string | boolean, string, unknown][]).forEach(([option, defaultKey, callback]) => {
            if (!option) {
                return;
            }
            hotkeysOverride[typeof option === 'string' ? option : defaultKey] = callback as unknown as DTableHotkeyCallback;
        });
        return {
            hotkeys: hotkeysOverride,
            ...convertDatasource(this, datasource),
        };
    },
    methods: {
        handleHotkeyDelete() {
            const changes: DTableEditChanges = {};
            const {emptyCellValue} = this.options;
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
                    const rowData = changes[rowInfo.id];
                    if (rowData) {
                        rowData[colInfo.name] = emptyCellValue;
                    } else {
                        changes[rowInfo.id] = {[colInfo.name]: emptyCellValue};
                    }
                }
            }
            this.commitEditChanges(changes);
        },
        handleHotkeyCut(event) {
            this.handleHotkeyCopy(event);
            this.handleHotkeyDelete(event);
        },
        handleHotkeySelectAll(event) {
            this.selectAllCells();
            event.preventDefault();
        },
        async handleHotkeyPaste() {
            const selectedCells = this.getSelectedCells();
            if (!selectedCells.length) {
                return;
            }
            const startCell = selectedCells[0];
            const data = await navigator.clipboard.readText();
            if (!data.length) {
                return;
            }
            const changes: DTableEditChanges = {};
            const cells: DTableCellPos[] = [];
            data.split(/\r?\n/).forEach((line, lineIndex) => {
                const rowIndex = lineIndex + startCell.row;
                let rowData = changes[rowIndex];
                if (!rowData) {
                    rowData = {};
                    changes[rowIndex] = rowData;
                }
                line.split('\t').forEach((part, partIndex) => {
                    const colIndex = partIndex + startCell.col;
                    rowData[colIndex - 1] = part;
                    cells.push({col: colIndex, row: rowIndex});
                });
            });
            this.commitEditChanges(changes);
            this.selectCells(cells);
        },
        handleHotkeyCopy() {
            const selectedCells = this.getSelectedCells();
            if (!selectedCells.length) {
                return;
            }
            let minColIndex = Number.MAX_SAFE_INTEGER;
            let minRowIndex = Number.MAX_SAFE_INTEGER;
            selectedCells.forEach(pos => {
                minColIndex = Math.min(pos.col, minColIndex);
                minRowIndex = Math.min(pos.row, minRowIndex);
            });
            const data: unknown[][] = [];
            selectedCells.forEach(pos => {
                const value = this.getCellValue(pos.row, pos.col);
                let rowData = data[pos.row - minRowIndex];
                if (!rowData) {
                    rowData = [];
                    data[pos.row - minRowIndex] = rowData;
                }
                rowData[pos.col - minColIndex] = value;
            });
            const plainText = data.map(x => x.join('\t')).join('\n');
            navigator.clipboard.writeText(plainText);
        },
        handleHotkeyFocus() {
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
        handleHotkeyCancel() {
            this.deselectAllCells();
        },
    },
};

const plugin = definePlugin(datagrid);

export default plugin;
