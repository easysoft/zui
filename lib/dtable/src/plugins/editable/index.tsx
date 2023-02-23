import {createRef, RefObject} from 'preact';
import {definePlugin} from '../../helpers/shared-plugins';
import {draft, DTableDraftTypes, DTableDraftRows} from '../draft';
import type {DTablePluginTypes, DTableWithPlugin, DTablePlugin, DTableWithPluginColInfo, ColName, RowID, RowData, RowInfo, ColInfo} from '../../types';
import './style.css';

export interface DTableEditableTypes extends DTablePluginTypes {
    options: Partial<{
        editable: boolean | ((rowID: RowID, colName: ColName) => boolean);
        headerEditable: boolean;
        onEditCell?: (this: DTableEditable, changeInfo: {rowID: RowID, colName: ColName, value: unknown, oldValue: unknown}) => false | void;
        selectAllOnFocus?: boolean;
        onPasteToCell?: (this: DTableEditable, event: ClipboardEvent) => void;
        emptyCellValue?: unknown;
    }>;
    state: {
        editingCell?: {rowID: RowID, colName: ColName};
    };
    data: {
        editingInputRef: RefObject<HTMLInputElement>;
        needAutoFocus?: boolean;
    },
    methods: {
        editCell(this: DTableEditable, cell?: {rowID: RowID, colName: ColName}): void;
        deleteCells(this: DTableEditable, cells: {rowID: RowID, colName: ColName}[], emptyCellValue?: unknown): boolean;
        isCellEditing: (this: DTableEditable, rowID: RowID, colName: ColName) => boolean;
        handleEditingInputChange: (this: DTableEditable, event: Event) => void;
        handleEditingInputBlur: (this: DTableEditable, event: Event) => void;
        handleEditingKeyDown: (this: DTableEditable, event: KeyboardEvent) => void;
        renderEditableCell: NonNullable<typeof editablePlugin['onRenderCell']>;
        deleteRows(this: DTableEditable, rows: number | RowID | RowInfo | (RowInfo | RowID | number)[], options?: {skipUpdate?: boolean | undefined}): void;
        deleteCols(this: DTableEditable, cols: number | ColName | ColInfo | (ColInfo | ColName | number)[], options?: {skipUpdate?: boolean | undefined}): void;
    }
}

export type DTableEditable = DTableWithPlugin<DTableEditableTypes, [DTableDraftTypes]>;

function isSameData(names: string[], source: Record<string, unknown>, target: Record<string, unknown>): boolean {
    return names.every(name => {
        return source[name] === target[name];
    });
}

const editablePlugin: DTablePlugin<DTableEditableTypes, [DTableDraftTypes]> = {
    name: 'editable',
    plugins: [draft],
    defaultOptions: {
        editable: true,
        selectAllOnFocus: true,
        history: 20,
        skipRenderDraftCell: true,
        emptyCellValue: '',
    },
    when: options => !!options.editable,
    events: {
        dblclick(event) {
            this.editCell(this.getPointerInfo(event));
        },
        click(event) {
            const info = this.getPointerInfo(event);
            if (info && info.cellElement.classList.contains('is-selected')) {
                this.editCell(info);
            }
        },
    },
    data() {
        return {editingInputRef: createRef<HTMLInputElement>()};
    },
    methods: {
        isCellEditing(rowID, colName) {
            const {editingCell} = this.state;
            return !!editingCell && editingCell.rowID === rowID && editingCell.colName === colName;
        },
        editCell(cell) {
            const {editable: checkEditable, headerEditable} = this.options;
            if (cell && ((typeof checkEditable === 'function' && !checkEditable(cell.rowID, cell.colName)) || (!headerEditable && cell.rowID === 'HEADER'))) {
                cell = undefined;
            }
            this.data.editingInputRef.current = null;
            this.data.needAutoFocus = true;
            this.setState({editingCell: cell ? {colName: cell.colName, rowID: cell.rowID} : undefined});
        },
        deleteCells(cells) {
            const changes: DTableDraftRows = {};
            const {emptyCellValue} = this.options;
            cells.forEach((cell) => {
                const rowData = changes[cell.rowID];
                if (rowData) {
                    rowData[cell.colName] = emptyCellValue;
                } else {
                    changes[cell.rowID] = {[cell.colName]: emptyCellValue};
                }
            });
            if (Object.keys(changes).length) {
                this.stageDraft(changes);
                return true;
            }
            return false;
        },
        deleteRows(rows, options?: {skipUpdate?: boolean | undefined}) {
            if (!Array.isArray(rows)) {
                rows = [rows];
            }

            const colsNames = this.layout.colsList.reduce<string[]>((names, col) => {
                if (col.name !== 'HEADER') {
                    names.push(col.name);
                }
                return names;
            }, []);

            const deleteRows = rows.reduce<RowInfo[]>((list, row) => {
                const rowInfo = this.getRowInfo(row);
                if (rowInfo && rowInfo.id !== 'HEADER') {
                    list.push(rowInfo);
                }
                return list;
            }, []).sort((a, b) => a.index - b.index);
            if (!deleteRows.length) {
                return;
            }

            const deleteRowsSet = new Set(deleteRows.map(row => row.index));
            const restRows = new Map<number, RowData>();
            const rowsList = this.layout.rows;
            const rowsCount = rowsList.length;
            const {emptyCellValue} = this.options;
            let currentIndex = deleteRows[0].index;
            for (let i = currentIndex + 1; i < rowsCount; i++) {
                if (deleteRowsSet.has(i)) {
                    continue;
                }
                const row = rowsList[i];
                restRows.set(currentIndex, this.getRowDraftData(row, {emptyCellValue}));
                currentIndex++;
            }
            const newState: DTableDraftRows = {};
            currentIndex = deleteRows[0].index;
            for (let i = currentIndex; i < rowsCount; i++) {
                const row = rowsList[i];
                const oldRowData = this.getRowDraftData(row, {emptyCellValue});
                const newRowData = restRows.get(i) || {};
                if (isSameData(colsNames, oldRowData, newRowData)) {
                    continue;
                }
                newState[row.id] = newRowData;
            }
            if (Object.keys(newState).length) {
                this.stageDraft(newState, {skipUpdate: options?.skipUpdate});
            }
        },
        deleteCols(cols, options?: {skipUpdate?: boolean | undefined}) {
            if (!Array.isArray(cols)) {
                cols = [cols];
            }

            const deleteCols = cols.reduce<ColInfo[]>((list, col) => {
                const colInfo = this.getColInfo(col);
                if (colInfo && colInfo.name !== 'INDEX') {
                    list.push(colInfo);
                }
                return list;
            }, []).sort((a, b) => a.index - b.index);
            if (!deleteCols.length) {
                return;
            }

            const deleteColsSet = new Set(deleteCols.map(col => col.index));
            const restCols = new Map<number, Record<string, unknown>>();
            const {colsList} = this.layout;
            const colsCount = colsList.length;
            const rowIdList = this.layout.rows.reduce<string[]>((ids, row) => {
                ids.push(row.id);
                return ids;
            }, ['HEADER']);
            const {emptyCellValue} = this.options;
            let currentIndex = deleteCols[0].index;
            for (let i = currentIndex + 1; i < colsCount; i++) {
                if (deleteColsSet.has(i)) {
                    continue;
                }
                const col = colsList[i];
                restCols.set(currentIndex, this.getColDraftData(col, {emptyCellValue, includeHeaderRow: true}));
                currentIndex++;
            }

            const newState: DTableDraftRows = {};
            currentIndex = deleteCols[0].index;
            for (let i = currentIndex; i < colsCount; i++) {
                const col = colsList[i];
                const oldColData = this.getColDraftData(col, {emptyCellValue, includeHeaderRow: true});
                const newColData = restCols.get(i) || {};
                if (isSameData(rowIdList, oldColData, newColData)) {
                    continue;
                }
                for (const rowID of rowIdList) {
                    if (!newState[rowID]) {
                        newState[rowID] = {};
                    }
                    newState[rowID][col.name] = newColData[rowID] ?? emptyCellValue;
                }
            }
            if (Object.keys(newState).length) {
                this.stageDraft(newState, {skipUpdate: options?.skipUpdate});
            }
        },
        handleEditingInputChange(event) {
            const newValue = (event.target as HTMLInputElement)?.value;
            const {editingCell} = this.state;
            if (typeof newValue !== 'string' || !editingCell) {
                return;
            }
            const {rowID, colName} = editingCell;
            const oldValue = this.getCellDraftValue(rowID, colName);
            if (oldValue === newValue) {
                return;
            }
            if (this.options.onEditCell?.call(this, {
                rowID,
                colName,
                value: newValue,
                oldValue,
            }) === false) {
                return;
            }
            this.stageDraft({[rowID]: {[colName]: newValue}});
        },
        handleEditingInputBlur() {
            this.editCell();
        },
        handleEditingKeyDown(event) {
            if (event.key === 'Enter') {
                this.data.editingInputRef.current?.blur();
            } else if (event.key === 'Esc') {
                this.editCell();
            }
        },
        renderEditableCell(result, {col, row}, h) {
            const {id: rowID} = row;
            if (this.isCellEditing(rowID, col.name)) {
                const cellValue = `${this.getCellDraftValue(rowID, col.name) ?? ''}`;
                const editingBox = (
                    <input
                        ref={this.data.editingInputRef}
                        class="dtable-editing-input"
                        type="text"
                        defaultValue={cellValue}
                        style={{textAlign: col.setting.align}}
                        onChange={this.handleEditingInputChange}
                        onBlur={this.handleEditingInputBlur}
                        onKeyDown={this.handleEditingKeyDown}
                        onPaste={this.options.onPasteToCell}
                    />
                );
                return [{
                    outer: true,
                    className: 'is-editing',
                    children: editingBox,
                }];
            }
            return this.renderDraftCell(result, {row, col: col as unknown as DTableWithPluginColInfo<DTableDraftTypes>}, h);
        },
    },
    onUpdated() {
        const input = this.data.editingInputRef.current;
        if (input && this.data.needAutoFocus) {
            this.data.needAutoFocus = false;
            input.focus({preventScroll: true});
            if (this.options.selectAllOnFocus) {
                input.select();
            }
        }
    },
    onRender() {
        return {
            className: {
                'dtable-editable': this.options.editable,
                'dtable-editing': this.state.editingCell,
            },
        };
    },
    onRenderCell(...args) {
        return this.renderEditableCell(...args);
    },
    onRenderHeaderCell(...args) {
        return this.renderEditableCell(...args);
    },
};

export const editable = definePlugin(editablePlugin);
