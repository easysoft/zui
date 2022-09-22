import {definePlugin} from '../../helpers/shared-plugins';
import editable, {DTableEditableTypes, DTableEditChanges} from '../editable';
import selectable, {DTableSelectableTypes} from '../selectable';
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
        emptyCellValue?: unknown
    };
    state: {
    };
    data: {
    },
    methods: {
        handleHotkeyDelete: (this: DTableDatagrid, event: KeyboardEvent) => void;
        handleHotkeySelectAll: (this: DTableDatagrid, event: KeyboardEvent) => void;
        handleHotkeyPaste: (this: DTableDatagrid, event: KeyboardEvent) => void;
        handleHotkeyCopy: (this: DTableDatagrid, event: KeyboardEvent) => void;
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
        headerEditable: true,
        selectable: true,
        minRows: 20,
        minCols: 10,
        extraRows: 5,
        extraCols: 5,
        showRowIndex: true,
        colHover: true,
        cellHover: true,
        bordered: true,
        striped: false,
        hotkeyDelete: true,
        hotkeySelectAll: true,
        hotkeyPaste: true,
        hotkeyCopy: true,
        hotkeyFocus: true,
        hotkeyCancel: true,
        emptyCellValue: '',
        cellValueGetter,
        hotkeys: {},
        editable: (_: string, colName: string) => colName !== 'INDEX',
    },
    options(options) {
        const {hotkeyDelete, hotkeyCopy, hotkeyFocus, hotkeyCancel, hotkeyPaste, hotkeySelectAll, datasource, hotkeys} = options;
        const hotkeysOverride = {
            ...hotkeys,
        };
        ([
            [hotkeyDelete, 'delete,backspace,s', this.handleHotkeyDelete],
            [hotkeyCopy, 'ctrl+c,command+c', this.handleHotkeyCopy],
            [hotkeyPaste, 'ctrl+v,command+v', this.handleHotkeyPaste],
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
        handleHotkeySelectAll(event) {
            this.selectAllCells();
            event.preventDefault();
        },
        handleHotkeyPaste() {

        },
        handleHotkeyCopy() {

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
