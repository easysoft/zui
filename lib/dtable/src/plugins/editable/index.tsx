import {createRef, RefObject} from 'preact';
import {definePlugin} from '../../helpers/shared-plugins';
import './style.css';

export interface DTableEditableTypes extends DTablePluginTypes {
    options: Partial<{
        editable: boolean | ((rowID: string, colName: string) => boolean);
        headerEditable: boolean;
        onEditCell?: (this: DTableEditable, changeInfo: {rowID: string, colName: string, value: unknown, oldValue: unknown}) => false | void;
        onEditChange?: (this: DTableEditable, changes: DTableEditChanges) => false | void;
        afterEditChange?: (this: DTableEditable, changes: DTableEditChanges) => void;
        selectAllOnFocus?: boolean;
        history?: boolean | number;
    }>;
    state: {
        editingCell?: {rowID: string, colName: string};
        editingChanges: DTableEditChanges;
        appliedChanges: DTableEditChanges;
    };
    data: {
        editingInputRef: RefObject<HTMLInputElement>;
        needAutoFocus?: boolean;
    },
    methods: {
        editCell(this: DTableEditable, cell?: {rowID: string, colName: string}): void;
        deleteCells(this: DTableEditable, cells: {rowID: string, colName: string}[], emptyCellValue?: unknown): boolean;
        isCellEditing: (this: DTableEditable, rowID: string, colName: string) => boolean;
        handleEditingInputChange: (this: DTableEditable, event: Event) => void;
        handleEditingInputBlur: (this: DTableEditable, event: Event) => void;
        handleEditingKeyDown: (this: DTableEditable, event: KeyboardEvent) => void;
        renderEditableCell: NonNullable<typeof editable['onRenderCell']>;
        getEditedCellValue(this: DTableEditable, rowID: string, colName: string): unknown;
        commitChanges(this: DTableEditable, changes: DTableEditChanges, options?: {skipTriggerUpdate?: boolean, callback?: (editingChanges: DTableEditChanges) => void}): void;
        applyChanges(this: DTableEditable, changes: DTableEditChanges, options?: {skipTriggerUpdate?: boolean, callback?: (appliedChanges: DTableEditChanges) => void}): void;
    }
}

export type DTableEditChanges = Record<RowID, RowData>;

type DTableEditable = DTableWithPlugin<DTableEditableTypes>;

export const editable: DTablePlugin<DTableEditableTypes> = {
    name: 'editable',
    defaultOptions: {
        editable: true,
        selectAllOnFocus: true,
        history: 20,
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
    state() {
        return {editingChanges: {}, appliedChanges: {}};
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
            this.setState({editingCell: cell});
        },
        deleteCells(cells, emptyCellValue = null) {
            const changes: DTableEditChanges = {};
            cells.forEach((cell) => {
                const rowData = changes[cell.rowID];
                if (rowData) {
                    rowData[cell.colName] = emptyCellValue;
                } else {
                    changes[cell.rowID] = {[cell.colName]: emptyCellValue};
                }
            });
            if (Object.keys(changes).length) {
                this.commitChanges(changes);
                return true;
            }
            return false;
        },
        getEditedCellValue(rowID, colName) {
            const rowAppliedData = this.state.appliedChanges[rowID];
            if (rowAppliedData && colName in rowAppliedData) {
                return rowAppliedData[colName];
            }
            const rowChangedData = this.state.editingChanges[rowID];
            if (rowChangedData && colName in rowChangedData) {
                return rowChangedData[colName];
            }
            return this.getCellValue(rowID, colName);
        },
        commitChanges(changes: DTableEditChanges, options?: {skipTriggerUpdate?: boolean, callback?: (editingChanges: DTableEditChanges) => void}) {
            if (this.options.onEditChange?.call(this, changes) === false) {
                return;
            }
            const {editingChanges} = this.state;
            Object.entries(changes).forEach(([rowID, data]) => {
                const oldData = editingChanges[rowID];
                if (oldData) {
                    if (data === null) {
                        delete editingChanges[rowID];
                    } else {
                        Object.assign(oldData, data);
                    }
                } else {
                    editingChanges[rowID] = data;
                }
            });
            if (!options?.skipTriggerUpdate) {
                this.forceUpdate(() => {
                    options?.callback?.({...editingChanges});
                    this.options.afterEditChange?.call(this, {...editingChanges});
                });
            }
        },
        applyChanges(changes: DTableEditChanges, options?: {skipTriggerUpdate?: boolean, callback?: (appliedChanges: DTableEditChanges) => void}) {
            const {editingChanges, appliedChanges} = this.state;
            Object.entries(changes).forEach(([rowID, data]) => {
                const oldEditingData = editingChanges[rowID];
                if (oldEditingData && typeof data === 'object') {
                    if (data === null) {
                        delete editingChanges[rowID];
                    } else {
                        Object.keys(data).forEach((colName) => {
                            if (oldEditingData[colName] === data[colName]) {
                                delete oldEditingData[colName];
                            }
                        });
                    }
                    if (!Object.keys(oldEditingData).length) {
                        delete editingChanges[rowID];
                    }
                }

                const oldAppliedData = appliedChanges[rowID];
                if (oldAppliedData) {
                    if (data === null) {
                        delete editingChanges[rowID];
                    } else {
                        Object.assign(oldAppliedData, data);
                    }
                } else {
                    appliedChanges[rowID] = data;
                }
            });
            if (!options?.skipTriggerUpdate) {
                this.forceUpdate(() => {
                    options?.callback?.({...appliedChanges});
                });
            }
        },
        handleEditingInputChange() {
            const newValue = this.data.editingInputRef.current?.value;
            const {editingCell} = this.state;
            if (typeof newValue !== 'string' || !editingCell) {
                return;
            }
            const {rowID, colName} = editingCell;
            const oldValue = this.getEditedCellValue(rowID, colName);
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
            this.commitChanges({[rowID]: {[colName]: newValue}});
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
        renderEditableCell(result, {col, row}) {
            const {id: rowID} = row;
            if (this.isCellEditing(rowID, col.name)) {
                const cellValue = `${this.getEditedCellValue(rowID, col.name) ?? ''}`;
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
                    />
                );
                return [{
                    outer: true,
                    className: 'is-editing',
                    children: editingBox,
                }];
            } else {
                const cellValue = `${this.getEditedCellValue(rowID, col.name) ?? ''}`;
                result[0] = {children: cellValue as preact.ComponentChild, attrs: {title: cellValue}};
            }
            return result;
        },
    },
    onUpdated() {
        const input = this.data.editingInputRef.current;
        if (input && this.data.needAutoFocus) {
            this.data.needAutoFocus = false;
            input.focus();
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

const plugin = definePlugin(editable);

export default plugin;
