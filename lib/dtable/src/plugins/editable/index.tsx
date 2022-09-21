import {createRef, RefObject} from 'preact';
import {definePlugin} from '../../helpers/shared-plugins';
import './style.css';

interface DTableEditableTypes extends DTablePluginTypes {
    options: Partial<{
        editable: boolean | ((rowID: RowID, colName: string) => boolean);
        headerEditable: boolean;
        onEditCell?: (this: DTableEditable, changeInfo: {rowID: RowID, colName: string, value: unknown, oldValue: unknown}) => false | void;
        selectAllOnFocus?: boolean;
    }>;
    state: {
        editingCell?: {rowID: RowID, colName: string};
        editingChanges: Map<RowID, Record<string, unknown>>;
    };
    data: {
        editingInputRef: RefObject<HTMLInputElement>;
        needAutoFocus?: boolean;
    },
    methods: {
        editCell(this: DTableEditable, cell?: {rowID: RowID, colName: string}): void;
        isCellEditing: (this: DTableEditable, rowID: RowID, colName: string) => boolean;
        handleEditingInputChange: (this: DTableEditable, event: Event) => void;
        handleEditingInputBlur: (this: DTableEditable, event: Event) => void;
        renderEditableCell: NonNullable<typeof editable['onRenderCell']>;
        getCellValue(this: DTableEditable, rowID: RowID, colName: string): unknown
    }
}

type DTableEditable = DTableWithPlugin<DTableEditableTypes>;

export const editable: DTablePlugin<DTableEditableTypes> = {
    name: 'editable',
    defaultOptions: {
        editable: true,
        selectAllOnFocus: true,
    },
    when: options => !!options.editable,
    events: {
        dblclick(event) {
            this.editCell(this.getPointerInfo(event));
        },
    },
    data: {
        editingInputRef: createRef<HTMLInputElement>(),
    },
    state: {
        editingChanges: new Map(),
    },
    methods: {
        isCellEditing(rowID, colName) {
            const {editingCell} = this.state;
            return !!editingCell && editingCell.rowID === rowID && editingCell.colName === colName;
        },
        editCell(cell) {
            const {editable: checkEditable, headerEditable} = this.options;
            if (cell && ((typeof checkEditable === 'function' && checkEditable(cell.rowID, cell.colName)) || !headerEditable && cell.rowID === 'HEADER')) {
                cell = undefined;
            }
            this.data.editingInputRef.current = null;
            this.data.needAutoFocus = true;
            this.state.editingCell = cell;
        },
        getCellValue(rowID, colName) {
            const rowChangedData = this.state.editingChanges.get(rowID);
            if (rowChangedData && colName in rowChangedData) {
                return rowChangedData[colName];
            }
            if (rowID === 'HEADER') {
                return this.getColInfo(colName)?.setting.title ?? colName;
            }
            const rowData = this.getRowInfo(rowID)?.data;
            if (rowData) {
                return rowData[colName];
            }
        },
        handleEditingInputChange() {
            const newValue = this.data.editingInputRef.current?.value;
            const {editingCell} = this.state;
            if (typeof newValue !== 'string' || !editingCell) {
                return;
            }
            const {rowID, colName} = editingCell;
            const oldValue = this.getCellValue(rowID, colName);
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
            const rowChangedData = this.state.editingChanges.get(rowID) ?? {};
            rowChangedData[colName] = newValue;
            this.state.editingChanges.set(rowID, rowChangedData);
            this.forceUpdate();
        },
        handleEditingInputBlur() {
            this.editCell();
        },
        renderEditableCell(result, {col, row}) {
            const {id: rowID} = row;
            if (this.isCellEditing(rowID, col.name)) {
                const cellValue = `${this.getCellValue(rowID, col.name) ?? ''}`;
                const editingBox = (
                    <input
                        ref={this.data.editingInputRef}
                        class="dtable-editing-input"
                        type="text"
                        defaultValue={cellValue}
                        style={{textAlign: col.setting.align}}
                        onChange={this.handleEditingInputChange}
                        onBlur={this.handleEditingInputBlur}
                    />
                );
                return [{
                    outer: true,
                    className: 'is-editing',
                    children: editingBox,
                }];
            } else {
                const editedData = this.state.editingChanges.get(rowID);
                if (editedData && col.name in editedData) {
                    result[0] = editedData[col.name] as preact.ComponentChild;
                }
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
