import {createRef, RefObject} from 'preact';
import {definePlugin} from '../../helpers/shared-plugins';
import {draft, DTableDraftTypes, DTableDraftRows} from '../draft';
import './style.css';
import type {DTablePluginTypes, DTableWithPlugin, DTablePlugin, DTableWithPluginColInfo, ColName, RowID, RowData} from '../../types';

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
        deleteRows(this: DTableEditable, rows: RowID | RowID[], options?: {skipUpdate?: boolean | undefined}): void;
        deleteCols(this: DTableEditable, cols: ColName | ColName[], options?: {skipUpdate?: boolean | undefined}): void;
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
            const rowsList = this.layout.rows;
            const rowsCount = rowsList.length;
            const {emptyCellValue} = this.options;
            const colsNames = this.layout.colsList.reduce<string[]>((names, col) => {
                if (col.name !== 'HEADER') {
                    names.push(col.name);
                }
                return names;
            }, []);
            rows.forEach((rowID) => {
                const newState: DTableDraftRows = {};
                if (rowID === 'HEADER') {
                    return;
                }
                let currentRow = this.getRowInfo(rowID);
                if (!currentRow) {
                    return;
                }
                let currentRowData = this.getRowDraftData(currentRow, {emptyCellValue});
                for (let i = currentRow.index + 1; i < rowsCount; i++) {
                    const nextRow = rowsList[i];
                    const nextRowData = this.getRowDraftData(nextRow, {emptyCellValue});
                    if (!isSameData(colsNames, currentRowData, nextRowData)) {
                        newState[currentRow.id] = nextRowData;
                    }
                    if (i === (rowsCount - 1) && !isSameData(colsNames, {}, nextRowData)) {
                        newState[nextRow.id] = colsNames.reduce<Partial<RowData>>((data, colName) => {
                            data[colName] = emptyCellValue;
                            return data;
                        }, {});
                        break;
                    }
                    currentRowData = nextRowData;
                    currentRow = nextRow;
                }
                if (Object.keys(newState).length) {
                    this.stageDraft(newState, {skipUpdate: true});
                }
            });
            if (!options?.skipUpdate) {
                this.update();
            }
        },
        deleteCols(cols, options?: {skipUpdate?: boolean | undefined}) {
            if (!Array.isArray(cols)) {
                cols = [cols];
            }
            const {colsList} = this.layout;
            const colsCount = colsList.length;
            const rowIdList = this.layout.rows.reduce<string[]>((ids, row) => {
                ids.push(row.id);
                return ids;
            }, ['HEADER']);
            const {emptyCellValue} = this.options;
            cols.forEach((colName) => {
                const newState: DTableDraftRows = {};
                if (colName === 'INDEX') {
                    return;
                }
                let currentCol = this.getColInfo(colName);
                if (!currentCol) {
                    return;
                }
                let currentColData = this.getColDraftData(currentCol, {emptyCellValue, includeHeaderRow: true});
                for (let i = currentCol.index + 1; i < colsCount; i++) {
                    const nextCol = colsList[i];
                    const nextColData = this.getColDraftData(nextCol, {emptyCellValue, includeHeaderRow: true});
                    if (!isSameData(rowIdList, currentColData, nextColData)) {
                        for (const rowID of rowIdList) {
                            if (!newState[rowID]) {
                                newState[rowID] = {};
                            }
                            newState[rowID][currentCol.name] = nextColData[rowID];
                        }
                    }
                    if (i === (colsCount - 1) && !isSameData(rowIdList, {}, nextColData)) {
                        for (const rowID of rowIdList) {
                            if (!newState[rowID]) {
                                newState[rowID] = {};
                            }
                            newState[rowID][nextCol.name] = emptyCellValue;
                        }
                        break;
                    }
                    currentColData = nextColData;
                    currentCol = nextCol;
                }
                if (Object.keys(newState).length) {
                    this.stageDraft(newState, {skipUpdate: true});
                }
            });
            if (!options?.skipUpdate) {
                this.update();
            }
        },
        handleEditingInputChange() {
            const newValue = this.data.editingInputRef.current?.value;
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
